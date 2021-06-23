d3.select('h1').style('font-size', '5rem')
var fruits = ['apple', 'mango', 'banana', 'orange'];
    d3.select('ul')
        .selectAll('li')
        .data(fruits)
        .enter()
        .append('li')
        .text(function (d) { return d; })
        .style('font-size', '2rem');

var data = [80, 120, 60, 250, 200];

    var barHeight = 20;

    var bar = d3.select('svg')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', function (d) { return d; })
        .attr('height', barHeight - 1)
        .attr('transform', function (d, i) {
            return "translate(0," + i * barHeight + ")";
        });

d3.select('#btn')
        .on('click', function () {
            d3.selectAll('h3').remove()
            d3.select('body')
                .append('h3')
                .text('Today is a beautiful day!!');
        });

let audio_info = document.getElementById('audio1');
document.getElementById('pause-play').addEventListener('click', function (e) {
    if (audio_info.paused) {
        audio_info.play();
        e.target.classList.toggle('fa-volume-off')
        e.target.classList.toggle('fa-volume-up')
    } else {
        audio_info.pause();
        e.target.classList.toggle('fa-volume-up')
        e.target.classList.toggle('fa-volume-off')
    }
}, false);
