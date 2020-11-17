# TypeScript Style Guide and Coding Conventions

Key Sections:

* [Variable](#variable-and-function)
* [Class](#class)
* [Interface](#interface)
* [Type](#type)
* [Namespace](#namespace)
* [Enum](#enum)
* [`null` vs. `undefined`](#null-vs-undefined)
* [Formatting](#formatting)
* [Single vs. Double Quotes](#quotes)
* [Tabs vs. Spaces](#spaces)
* [Annotate Arrays as `Type[]`](#array)
* [File Names](#filename)
* [`type` vs `interface`](#type-vs-interface)

## Variable and Function
* Use `camelCase` for variable and function names

> Reason: Conventional JavaScript

```ts
var fooVar;
function barFunc() { }
```

## Class
* Use `PascalCase` for class names.

> Reason: This is actually fairly conventional in standard JavaScript.

```ts
class Foo { }
```
* Use `camelCase` of class members and methods

> Reason: Naturally follows from variable and function naming convention.

```ts
class Foo {
    bar: number;
    baz() { }
}
```
## Interface

* Use `PascalCase` for name.

> Reason: Similar to class

* Use `camelCase` for members.

> Reason: Similar to class

* **Don't** prefix with `I`

> Reason: Unconventional. `lib.d.ts` defines important interfaces without an `I` (e.g. Window, Document etc).

```ts
interface Foo {
}
```

## Type

* Use `PascalCase` for name.

> Reason: Similar to class

* Use `camelCase` for members.

> Reason: Similar to class


## Namespace

* Use `PascalCase` for names

> Reason: Convention followed by the TypeScript team. Namespaces are effectively just a class with static members. Class names are `PascalCase` => Namespace names are `PascalCase`

```ts
namespace Foo {
}
```

## Enum

* Use `PascalCase` for enum names

> Reason: Similar to Class. Is a Type.

```ts
enum Color {
}
```

* Use `PascalCase` for enum member

> Reason: Convention followed by TypeScript team i.e. the language creators e.g `SyntaxKind.StringLiteral`. Also helps with translation (code generation) of other languages into TypeScript.

```ts
enum Color {
    Red
}
```

## Null vs. Undefined

* Prefer not to use either for explicit unavailability

> Reason: these values are commonly used to keep a consistent structure between values. In TypeScript you use *types* to denote the structure

```ts
let foo: { x: number, y?: number } = { x:123 };
```

* Use `undefined` in general (do consider returning an object like `{valid:boolean, value?:Foo}` instead)

```ts
return undefined;
```

* Use `null` where it's a part of the API or conventional

> Reason: It is conventional in Node.js e.g. `error` is `null` for NodeBack style callbacks.

```ts
cb(null)
```

* Use *truthy* check for **objects** being `null` or `undefined`

```ts
if (error)
```

* Use `== null` / `!= null` (not `===` / `!==`) to check for `null` / `undefined` on primitives as it works for both `null`/`undefined` but not other falsy values (like `''`, `0`, `false`) e.g.

```ts
if (error != null) // rules out both null and undefined
```

## Formatting
The TypeScript compiler ships with a very nice formatting language service. Whatever output it gives by default is good enough to reduce the cognitive overload on the team.

Use [`tsfmt`](https://github.com/vvakame/typescript-formatter) to automatically format your code on the command line. Also, your IDE (atom/vscode/vs/sublime) already has formatting support built-in.

Examples:
```ts
// Space before type i.e. foo:<space>string
const foo: string = "hello";
```

## Quotes

* Prefer single quotes (`'`) unless escaping.

> Reason: More JavaScript teams do this (e.g. [airbnb](https://github.com/airbnb/javascript), [standard](https://github.com/feross/standard), [npm](https://github.com/npm/npm), [node](https://github.com/nodejs/node), [google/angular](https://github.com/angular/angular/), [facebook/react](https://github.com/facebook/react)). It's easier to type (no shift needed on most keyboards). [Prettier team recommends single quotes as well](https://github.com/prettier/prettier/issues/1105)

> Double quotes are not without merit: Allows easier copy paste of objects into JSON. Allows people to use other languages to work without changing their quote character. Allows you to use apostrophes e.g. `He's not going.`. But I'd rather not deviate from where the JS Community is fairly decided.

* When you can't use double quotes, try using back ticks (\`).

> Reason: These generally represent the intent of complex enough strings.

## Spaces

* Use `2` spaces. Not tabs.

> Reason: More JavaScript teams do this (e.g. [airbnb](https://github.com/airbnb/javascript), [idiomatic](https://github.com/rwaldron/idiomatic.js), [standard](https://github.com/feross/standard), [npm](https://github.com/npm/npm), [node](https://github.com/nodejs/node), [google/angular](https://github.com/angular/angular/), [facebook/react](https://github.com/facebook/react)). The TypeScript/VSCode teams use 4 spaces but are definitely the exception in the ecosystem.

## Array

* Annotate arrays as `foos: Foo[]` instead of `foos: Array<Foo>`.

> Reasons: It's easier to read. It's used by the TypeScript team. Makes easier to know something is an array as the mind is trained to detect `[]`.

## Filename
Name files with `camelCase`. E.g. `accordion.tsx`, `myControl.tsx`, `utils.ts`, `map.ts` etc.

> Reason: Conventional across many JS teams.

## type vs. interface

* Use `type` when you *might* need a union or intersection:

```
type Foo = number | { someProperty: number }
```
* Use `interface` when you want `extends` or `implements` e.g.

```
interface Foo {
  foo: string;
}
interface FooBar extends Foo {
  bar: string;
}
class X implements FooBar {
  foo: string;
  bar: string;
}
```
* Otherwise use whatever makes you happy that day.
