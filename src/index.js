import "./styles/index.scss";

d3.select('h1').style('font-size', '5rem')


const quotes = {
  "Jon Kabat-Zinn": 
    [
      "The little things? The little moments? They aren’t little.",
      "Wherever you go, there you are.", 
      "Mindfulness is a way of befriending ourselves and our experience.",
      "The best way to capture moments is to pay attention. This is how we cultivate  mindfulness.",
      "Mindfulness means being awake. It means knowing what you are doing.",
      "You can’t stop the waves, but you can learn to surf."
    ],
  "Thích Nhất Hạnh":
    [
      "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.",
      "Many people are alive but don’t touch the miracle of being alive.",
      "The present moment is the only time over which we have dominion.",
      "The feeling that any task is a nuisance will soon disappear if it is done in mindfulness.",
      "Meditation is not evasion; it is a serene encounter with reality."
    ],
  "Jack Kornfield":
    [
      "When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves.",
      "Everything that has a beginning has an ending. Make your peace with that and all will be well.",
      "Wisdom says we are nothing. Love says we are everything. Between these two our life flows.",
      "The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.",
      "Much of spiritual life is self-acceptance, maybe all of it."
    ],
  "Pema Chödrön":
  [
    "You are the sky. Everything else is just the weather.",
    "Fear is a natural reaction to moving closer to the truth.",
    "Nothing ever goes away until it has taught us what we need to know.",
    "The essence of bravery is being without self-deception.",
    "Meditation practice isn’t about trying to throw ourselves away and become something better. It’s about befriending who we are already.",
    "Rejoicing in ordinary things is not sentimental or trite. It actually takes guts."
  ],
  "Chögyam Trungpa":
  [
    "Altogether, the idea of meditation is not to create states of ecstasy or absorption, but to experience being."
  ],
  "Sharon Salzberg":
  [
    "Mindfulness isn’t difficult, we just need to remember to do it.",
    "That’s life: starting over, one breath at a time.",
    "It is never too late to turn on the light."
  ],
  "Allan Lokos":
  [
    "You cannot control the results, only your actions.",
    "Don’t believe everything you think. Thoughts are just that – thoughts.",
    "Your actions are your only true belongings.",
    "The art of peaceful living comes down to living compassionately & wisely.",
    "We cannot force the development of mindfulness."
  ],
  "Buddha":
  [
    "The Way is not in the sky, the Way is in the heart.",
    "You only lose what you cling to.",
    "Peace comes from within. Do not seek it without.",
    "Three things can not hide for long: the Moon, the Sun and the Truth.",
    "Nothing can harm you as much as your own thoughts unguarded.",
    "Attachment leads to suffering.",
    "Nothing is forever except change.",
    "Just as a snake sheds its skin, we must shed our past over and over again.",
    "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.",
    "Our life is shaped by our mind, for we become what we think.",
    "With our thoughts we make the world.",
    "Be where you are, otherwise you will miss your life.",
    "If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "If you are facing in the right direction, all you need to do is keep on walking.",
    "Every morning we are born again. What we do today is what matters most."
  ]
}

const authors = Object.keys(quotes)

const zenColors = [
  "#c3d3b2",
  "#a1b88d",
  "#b3c6a3",
  "#dad2ba",
  "#b3c6a3",
  "#c6d4ba",
  "#d0dbc6",
  "#d9e2d1",
  "#e2e9dc",
  "#ecf0e8"
]

d3.select('#quote-btn')
        .on('click', function () {
            let randAuth = authors[Math.floor(Math.random() * authors.length)];
            let randQuote = quotes[randAuth][Math.floor(Math.random() * quotes[randAuth].length)];
            let randColor = zenColors[Math.floor(Math.random() * zenColors.length)];
            d3.select('#quote-text').text(randQuote);
            d3.select('.mb-author').text(randAuth);
            d3.select('body').style('background-color', randColor);
        });

let audio_info = document.getElementById('audio1');
document.getElementById('pause-play').addEventListener('click', function (e) {
    if (audio_info.paused) {
        audio_info.play();
        e.target.classList.toggle('fa-volume-off');
        e.target.classList.toggle('fa-volume-up');
    } else {
        audio_info.pause();
        e.target.classList.toggle('fa-volume-up');
        e.target.classList.toggle('fa-volume-off');
    }
}, false);

const width = 450
const height = 450
const margin = 40

const radius = Math.min(width, height) / 2 - margin

const svg = d3.select(".meditate-circle")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

let data = {a: 14, b: 86}

let color = d3.scaleOrdinal()
  .domain(data)
  .range(['#ffd384','#94ebcd'])

let pie = d3.pie()
  .value(function(d) {return d.value; })
let data_ready = pie(d3.entries(data))

svg
  .selectAll('filler')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(120)         
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)); })
  .attr("stroke", "black")
  .attr("class", "circle")
  .on('click', function(d) {
    window.location.href = "https://www.thegoodbody.com/meditation-statistics/"
  })
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  d3.select('g')
    .append("text")
	  .attr("text-anchor", "middle")
    .attr('font-size', '1em')
    .attr('y', -60)
	  .text('More than');
  d3.select('g')
    .append("text")
	  .attr("text-anchor", "middle")
    .attr('font-size', '4em')
    .attr('y', 10)
	  .text('14%');
  d3.select('g')
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('y', 40)
    .attr('font-size', '1em')
    .text("of people in the US have")
  d3.select('g')
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('y', 60)
    .attr('font-size', '1em')
    .text(" practiced meditation")


const ageMargin = {top: 10, right: 30, bottom: 90, left: 40};
const ageWidth = 460 - ageMargin.left - ageMargin.right;
const ageHeight = 450 - ageMargin.top - ageMargin.bottom;

let ageSvg = d3.select(".age-div")
  .append("svg")
    .attr("width", ageWidth + ageMargin.left + ageMargin.right)
    .attr("height", ageHeight + ageMargin.top + ageMargin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + ageMargin.left + "," + ageMargin.top + ")");


d3.csv("src/assets/data/age.csv", ageData => {
console.log(ageData)

let x = d3.scaleBand()
  .range([ 0, ageWidth ])
  .domain(ageData.map(function(d) { return d.Age; }))
  .padding(0.2);
ageSvg.append("g")
  .attr("transform", "translate(0," + ageHeight + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

let y = d3.scaleLinear()
  .domain([0, 20])
  .range([ ageHeight, 0]);
ageSvg.append("g")
  .call(d3.axisLeft(y));

ageSvg.selectAll()
  .data(ageData)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.Age); })
    .attr("width", x.bandwidth())
    .attr("fill", "#94ebcd")
    .attr("stroke", "black")
    .attr("height", function(d) { return ageHeight - y(0); })
    .attr("y", function(d) { return y(0); })
    .on("mouseover", (d, i) => {
    d3.select(".age-text").text(`of people aged ${d.Age} practice meditation`)
    d3.select(".age-percentage").text(`${d.Value}%`)
  })

ageSvg.selectAll("rect")
  .transition()
  .duration(800)
  .attr("y", function(d) { return y(d.Value); })
  .attr("height", function(d) { return ageHeight - y(d.Value); })
  .delay(function(d,i){console.log(i) ; return(i*100)})

})




const benMargin = {top: 10, right: 10, bottom: 10, left: 10};
const benWidth = 445 - benMargin.left - benMargin.right;
const benHeight = 445 - benMargin.top - benMargin.bottom;

let benSvg = d3.select(".benefits-graph")
.append("svg")
  .attr("width", benWidth + benMargin.left + benMargin.right)
  .attr("height", benHeight + benMargin.top + benMargin.bottom)
.append("g")
  .attr("transform",
        "translate(" + benMargin.left + "," + benMargin.top + ")");

d3.csv("src/assets/data/benefits.csv", function(benData) {

  let root = d3.stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.parent; })
    (benData);
  root.sum(function(d) { return +d.value; })

  d3.treemap()
    .size([benWidth, benHeight])
    .padding(4)
    (root)

console.log(root.leaves())

  function handleMouseOver(d, i) {
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
      // .on("mouseout", handleMouseOut);



  benSvg
    .selectAll("text")
    .data(root.leaves())
    .enter()
    .append("text")
      .attr("x", d => { return d.x0+5; })
      .attr("y", d => { return d.y0+20; })
      .text(d => { return `${d.data.name}: ${d.data.value}%`; })
      .attr("font-size", "15px")
      .attr("fill", "white")
      .attr("font-family", "'Oswald', sans-serif;")

})