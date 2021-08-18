# Conscious.js

Conscious is a project created with the intention of introducing people to mindfulness practice.

## Quote Generator

![Screen Shot 2021-08-17 at 3 31 25 PM](https://user-images.githubusercontent.com/73315091/129818846-cb8ee010-b839-4209-b096-beded304a4c7.png)

The front of the page is a quote generator that, when clicked, generates a new quote from a list and changes the background color of the page to a specific set.

## Technology

Conscious.js uses HTML, CSS, JavaScript and d3.js

### Interactive graphs

This is a mouse over function written with d3, which changes the color of the graph sections as they are being moused over.

 ``` function handleMouseOver(d, i) {
    console.log(d)
    console.log(this)
    if (d3.select(this).style('fill') === 'orange') { d3.select(this).style('fill', 'rgb(105, 179, 162)')} else {d3.select(this).style("fill", "orange")}
    d3.select(".benefits-percent").text(`${d.data.value}%`)
    d3.select(".benefits-text").text(`of people between reported that meditation helped with ${d.data.name}`)
      .data(root.leaves())
      .enter()
      .attr("id", d => { return "t" + d.x + "-" + d.y + i; })
      .attr("x", d => { return d.x0+5; })
      .attr("y", d => { return d.y0+20; })
      .text(d => { return `${d.data.name}: ${d.data.value}%`; })
      .attr("font-size", "15px")
      .attr("fill", "white")
      .attr("font-family", "'Oswald', sans-serif;")
  }
```

This is the added functionality to the graph that allows people to choose a type of meditation by clicking on any block, and they will be linked to a youtube search for the corresponding meditation.

```
  benSvg
    .selectAll("rect")
    .data(root.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", "#69b3a2")
      .on("mouseover", handleMouseOver)
      .on("click", (d) => {return window.open(`https://www.youtube.com/results?search_query=meditation+for+${d.data.name}`, '_blank')})
