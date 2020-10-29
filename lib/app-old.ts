/* eslint-disable @typescript-eslint/no-unused-vars */
import * as d3 from 'd3'
import { JSDOM } from 'jsdom'
import Sharp from 'sharp'

;(async () => {
    const width = 1200
    const height = 500

    const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper" width="${width}" height="${height}"/>`)
    const container = dom.window.document.querySelector('#wrapper')

    const svg = d3
        .select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${20},${0})`)

    const data = []

    for (let i = 0; i < 1000; i++) {
        data.push({ x: Math.random() * 100, y: Math.random() * 100, r: Math.abs(Math.random() * 10) })
    }

    const x = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, width])

    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))

    // Add Y axis
    const y = d3
        .scaleLinear()
        .domain([0, 100])
        .range([height, 0])

    svg.append('g').call(d3.axisLeft(y))

    // Add dots
    svg.append('g')
        .selectAll('dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => x(d.x) || 0)
        .attr('cy', (d) => y(d.y) || 0)
        .attr('r', (d) => d.r)
        .style('fill', '#69b3a2')

    const node = svg.node()
    if (node) {
        //
        const svgContent = `<svg>${node.outerHTML}</svg>`
        const buf = Buffer.from(svgContent)
        try {
            await Sharp(buf)
                // .resize(width, height)
                .flatten({ background: { r: 255, g: 255, b: 255 } })
                .png()
                // .toBuffer()
                .toFile('new-file.png')
        } catch (err) {
            console.log('####')
            console.log(err)
        }
    }
})()
