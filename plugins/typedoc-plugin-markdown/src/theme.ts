import * as fs from 'fs';

import * as Handlebars from 'handlebars';
import {
  BindOption,
  ContainerReflection,
  DeclarationReflection,
  NavigationItem,
  ProjectReflection,
  Reflection,
  Renderer,
  UrlMapping,
} from 'typedoc';
import { ReflectionGroup, ReflectionKind } from 'typedoc/dist/lib/models';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Theme } from 'typedoc/dist/lib/output/theme';
import { TemplateMapping } from 'typedoc/dist/lib/output/themes/DefaultTheme';

import { CommentsComponent } from './components/comments.component';
import { HelperUtilsComponent } from './components/utils.component';

/**
 * The MarkdownTheme is based on TypeDoc's DefaultTheme @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/DefaultTheme.ts.
 * - html specific components are removed from the renderer
 * - markdown specefic components have been added
 */

export default class MarkdownTheme extends Theme {
  @BindOption('readme')
  readme!: string;
  @BindOption('allReflectionsHaveOwnDocument')
  allReflectionsHaveOwnDocument!: boolean;

  // creates an isolated Handlebars environment to store context aware helpers
  static HANDLEBARS = Handlebars.create();

  static URL_PREFIX = /^(http|ftp)s?:\/\//;

  // formarts page content after render
  static formatContents(contents: string) {
    return (
      contents
        .replace(/[\r\n]{3,}/g, '\n\n')
        .replace(/!spaces/g, '')
        .replace(/^\s+|\s+$/g, '') + '\n'
    );
  }

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onPageEnd, 1024);

    // cleanup html specific components
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');
    renderer.removeComponent('marked-links');
    renderer.removeComponent('legend');
    renderer.removeComponent('navigation');

    // add markdown related componenets
    renderer.addComponent('comments', new CommentsComponent(renderer));
    renderer.addComponent('utils', new HelperUtilsComponent(renderer));
  }

  /**
   * Test if directory is output directory
   * @param outputDirectory
   */
  isOutputDirectory(outputDirectory: string): boolean {
    let isOutputDirectory = true;
    const listings = fs.readdirSync(outputDirectory);

    listings.forEach((listing) => {
      if (!this.allowedDirectoryListings().includes(listing)) {
        isOutputDirectory = false;
        return;
      }
    });

    return isOutputDirectory;
  }

  // The allowed directory and files listing used to check the output directory
  allowedDirectoryListings() {
    return [
      this.entryFile,
      this.globalsFile,
      ...this.mappings.map((mapping) => mapping.directory),
      'media',
      '.DS_Store',
    ];
  }

  /**
   * This method is essentially a copy of the TypeDocs DefaultTheme.getUrls with extensions swapped out to .md
   * Map the models of the given project to the desired output files.
   *
   * @param project  The project whose urls should be generated.
   * @returns        A list of [[UrlMapping]] instances defining which models
   *                 should be rendered to which files.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);

    if (this.readme === 'none') {
      entryPoint.url = this.entryFile;
      urls.push(
        new UrlMapping(this.entryFile, { ...entryPoint }, 'reflection.hbs'),
      );
    } else {
      entryPoint.url = this.globalsFile;
      urls.push(new UrlMapping(this.globalsFile, entryPoint, 'reflection.hbs'));
      urls.push(new UrlMapping(this.entryFile, project, 'index.hbs'));
    }
    if (entryPoint.children) {
      entryPoint.children.forEach((child: Reflection) => {
        if (child instanceof DeclarationReflection) {
          this.buildUrls(child, urls);
        }
      });
    }
    return urls;
  }

  /**
   * This is mostly a copy of the TypeDoc DefaultTheme.buildUrls method with .html ext switched to .md
   * Builds the url for the the given reflection and all of its children.
   *
   * @param reflection  The reflection the url should be created for.
   * @param urls The array the url should be appended to.
   * @returns The altered urls array.
   */

  buildUrls(
    reflection: DeclarationReflection,
    urls: UrlMapping[],
  ): UrlMapping[] {
    const mapping = this.mappings.find((mapping) =>
      reflection.kindOf(mapping.kind),
    );

    if (mapping) {
      if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
        const url = this.toUrl(mapping, reflection);
        urls.push(new UrlMapping(url, reflection, mapping.template));
        reflection.url = url;
        reflection.hasOwnDocument = true;
      }
      for (const child of reflection.children || []) {
        if (mapping.isLeaf) {
          this.applyAnchorUrl(child, reflection);
        } else {
          this.buildUrls(child, urls);
        }
      }
    } else if (reflection.parent) {
      this.applyAnchorUrl(reflection, reflection.parent);
    }
    return urls;
  }

  /**
   * Returns the full url of a given mapping and reflection
   * @param mapping
   * @param reflection
   */
  toUrl(mapping: TemplateMapping, reflection: DeclarationReflection) {
    return mapping.directory + '/' + this.getUrl(reflection) + '.md';
  }

  /**
   * @see DefaultTheme.getUrl
   * Return a url for the given reflection.
   *
   * @param reflection  The reflection the url should be generated for.
   * @param relative    The parent reflection the url generation should stop on.
   * @param separator   The separator used to generate the url.
   * @returns           The generated url.
   */
  getUrl(
    reflection: Reflection,
    relative?: Reflection,
    separator = '.',
  ): string {
    let url = reflection.getAlias();

    if (
      reflection.parent &&
      reflection.parent !== relative &&
      !(reflection.parent instanceof ProjectReflection)
    ) {
      url =
        this.getUrl(reflection.parent, relative, separator) + separator + url;
    }

    return url;
  }

  /**
   * Similar to DefaultTheme.applyAnchorUrl method with added but the anchors are computed from the reflection structure
   * Generate an anchor url for the given reflection and all of its children.
   *
   * @param reflection  The reflection an anchor url should be created for.
   * @param container   The nearest reflection having an own document.
   */
  applyAnchorUrl(reflection: Reflection, container: Reflection) {
    if (!reflection.url || !MarkdownTheme.URL_PREFIX.test(reflection.url)) {
      const reflectionId = reflection.name.toLowerCase();
      const anchor = this.toAnchorRef(reflectionId);
      reflection.url = container.url + '#' + anchor;
      reflection.anchor = anchor;
      reflection.hasOwnDocument = false;
    }
    reflection.traverse((child) => {
      if (child instanceof DeclarationReflection) {
        this.applyAnchorUrl(child, container);
      }
    });
  }

  toAnchorRef(reflectionId: string) {
    return reflectionId;
  }

  /**
   * Copy of default theme DefaultTheme.getEntryPoint
   * @param project
   */
  getEntryPoint(project: ProjectReflection): ContainerReflection {
    const entryPoint = this.owner.entryPoint;
    if (entryPoint) {
      const reflection = project.getChildByName(entryPoint);
      if (reflection) {
        if (reflection instanceof ContainerReflection) {
          return reflection;
        } else {
          this.application.logger.warn(
            'The given entry point `%s` is not a container.',
            entryPoint,
          );
        }
      } else {
        this.application.logger.warn(
          'The entry point `%s` could not be found.',
          entryPoint,
        );
      }
    }
    return project;
  }

  getNavigation(project: ProjectReflection): NavigationItem {
    const buildNavigationGroups = (
      navigation: NavigationItem,
      groups: ReflectionGroup[],
    ) => {
      groups
        .filter((group) => group.allChildrenHaveOwnDocument())
        .forEach((reflectionGroup) => {
          let reflectionGroupItem = navigation.children?.find(
            (child) => child.title === reflectionGroup.title,
          );
          if (!reflectionGroupItem) {
            reflectionGroupItem = createNavigationItem(reflectionGroup.title);
            navigation.children?.push(reflectionGroupItem);
          }
          reflectionGroup.children.forEach((reflectionGroupChild) => {
            const reflectionGroupChildItem = createNavigationItem(
              reflectionGroupChild.getFullName(),
              reflectionGroupChild.url,
            );
            if (reflectionGroupItem) {
              reflectionGroupItem.children?.push(reflectionGroupChildItem);
            }
            const reflection = reflectionGroupChild as ContainerReflection;
            if (reflection.groups) {
              buildNavigationGroups(navigation, reflection.groups);
            }
          });
        });
    };

    const createNavigationItem = (title: string, url?: string) => {
      const navigationItem = new NavigationItem(title.replace(/\"/g, ''), url);
      navigationItem.isLabel = !url;
      navigationItem.children = [];
      delete navigationItem.reflection;
      delete navigationItem.parent;
      return navigationItem;
    };

    const sortNavigationGroups = (a: NavigationItem, b: NavigationItem) => {
      const weights = {
        ['Namespaces']: 1,
        ['Enumerations']: 2,
        ['Classes']: 3,
        ['Interfaces']: 4,
        ['Type aliases']: 5,
        ['Variables']: 6,
        ['Functions']: 7,
        ['Object literals']: 8,
      };
      const aWeight = weights[a.title] || 0;
      const bWeight = weights[b.title] || 0;
      return aWeight - bWeight;
    };
    const entryPoint = this.getEntryPoint(project);
    const hasSeperateGlobals = this.readme !== 'none';
    const navigation = createNavigationItem(project.name);
    navigation.children?.push(
      createNavigationItem(
        hasSeperateGlobals ? 'README' : 'Globals',
        this.entryFile,
      ),
    );
    if (hasSeperateGlobals) {
      navigation.children?.push(
        createNavigationItem('Globals', this.globalsFile),
      );
    }
    if (entryPoint.groups) {
      buildNavigationGroups(navigation, entryPoint.groups);
    }
    navigation.children?.sort(sortNavigationGroups);
    return navigation;
  }

  private onPageEnd(page: PageEvent) {
    page.contents = page.contents
      ? MarkdownTheme.formatContents(page.contents)
      : '';
  }

  get mappings() {
    return [
      {
        kind: [ReflectionKind.Class],
        isLeaf: false,
        directory: 'classes',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Interface],
        isLeaf: false,
        directory: 'interfaces',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Enum],
        isLeaf: false,
        directory: 'enums',
        template: 'reflection.hbs',
      },
      {
        kind: [ReflectionKind.Namespace, ReflectionKind.Module],
        isLeaf: false,
        directory: 'modules',
        template: 'reflection.hbs',
      },
      ...(this.allReflectionsHaveOwnDocument
        ? [
            {
              kind: [ReflectionKind.Variable],
              isLeaf: true,
              directory: 'variables',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.TypeAlias],
              isLeaf: true,
              directory: 'types',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.Function],
              isLeaf: true,
              directory: 'functions',
              template: 'reflection.member.hbs',
            },
            {
              kind: [ReflectionKind.ObjectLiteral],
              isLeaf: true,
              directory: 'literals',
              template: 'reflection.member.hbs',
            },
          ]
        : []),
    ];
  }

  // the entry file name
  get entryFile() {
    return 'README.md';
  }

  // the globals name
  get globalsFile() {
    return 'globals.md';
  }

  // contains a sidebar
  get hasSidebar() {
    return false;
  }
}
