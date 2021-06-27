/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

d3.select('h1').style('font-size', '5rem');
var quotes = {
  "Jon Kabat-Zinn": ["The little things? The little moments? They aren’t little.", "Wherever you go, there you are.", "Mindfulness is a way of befriending ourselves and our experience.", "The best way to capture moments is to pay attention. This is how we cultivate  mindfulness.", "Mindfulness means being awake. It means knowing what you are doing.", "You can’t stop the waves, but you can learn to surf."],
  "Thích Nhất Hạnh": ["To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is.", "Many people are alive but don’t touch the miracle of being alive.", "The present moment is the only time over which we have dominion.", "The feeling that any task is a nuisance will soon disappear if it is done in mindfulness.", "Meditation is not evasion; it is a serene encounter with reality."],
  "Jack Kornfield": ["When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves.", "Everything that has a beginning has an ending. Make your peace with that and all will be well.", "Wisdom says we are nothing. Love says we are everything. Between these two our life flows.", "The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.", "Much of spiritual life is self-acceptance, maybe all of it."],
  "Pema Chödrön": ["You are the sky. Everything else is just the weather.", "Fear is a natural reaction to moving closer to the truth.", "Nothing ever goes away until it has taught us what we need to know.", "The essence of bravery is being without self-deception.", "Meditation practice isn’t about trying to throw ourselves away and become something better. It’s about befriending who we are already.", "Rejoicing in ordinary things is not sentimental or trite. It actually takes guts."],
  "Chögyam Trungpa": ["Altogether, the idea of meditation is not to create states of ecstasy or absorption, but to experience being."],
  "Sharon Salzberg": ["Mindfulness isn’t difficult, we just need to remember to do it.", "That’s life: starting over, one breath at a time.", "It is never too late to turn on the light."],
  "Allan Lokos": ["You cannot control the results, only your actions.", "Don’t believe everything you think. Thoughts are just that – thoughts.", "Your actions are your only true belongings.", "The art of peaceful living comes down to living compassionately & wisely.", "We cannot force the development of mindfulness."],
  "Buddha": ["The Way is not in the sky, the Way is in the heart.", "You only lose what you cling to.", "Peace comes from within. Do not seek it without.", "Three things can not hide for long: the Moon, the Sun and the Truth.", "Nothing can harm you as much as your own thoughts unguarded.", "Attachment leads to suffering.", "Nothing is forever except change.", "Just as a snake sheds its skin, we must shed our past over and over again.", "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.", "Our life is shaped by our mind, for we become what we think.", "With our thoughts we make the world.", "Be where you are, otherwise you will miss your life.", "If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.", "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "If you are facing in the right direction, all you need to do is keep on walking.", "Every morning we are born again. What we do today is what matters most."]
};
var authors = Object.keys(quotes);
d3.select('#quote-btn').on('click', function () {
  var randAuth = authors[Math.floor(Math.random() * authors.length)];
  var randQuote = quotes[randAuth][Math.floor(Math.random() * quotes[randAuth].length)]; // d3.select('h3').remove()

  d3.select('#quote-text').text(randQuote);
  d3.select('.mb-author').text(randAuth);
});
var audio_info = document.getElementById('audio1');
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
}, false); // set the dimensions and ageMargins of the graph

var width = 450;
var height = 450;
var margin = 40; // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of ageMargin.

var radius = Math.min(width, height) / 2 - margin; // append the svg object to the div called 'my_dataviz'

var svg = d3.select(".meditate-circle").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); // Create dummy data

var data = {
  a: 14,
  b: 86
}; // set the color scale

var color = d3.scaleOrdinal().domain(data).range(['#ffd384', '#94ebcd']); // Compute the position of each group on the pie:

var pie = d3.pie().value(function (d) {
  return d.value;
});
var data_ready = pie(d3.entries(data)); // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.

svg.selectAll('filler').data(data_ready).enter().append('path').attr('d', d3.arc().innerRadius(120) // This is the size of the donut hole
.outerRadius(radius)).attr('fill', function (d) {
  return color(d.data.key);
}).attr("stroke", "black").style("stroke-width", "2px").style("opacity", 0.7);
d3.select('g').append("text").attr("text-anchor", "middle").attr('font-size', '1em').attr('y', -60).text('More than');
d3.select('g').append("text").attr("text-anchor", "middle").attr('font-size', '4em').attr('y', 10).text('14%');
d3.select('g').append('text').attr('text-anchor', 'middle').attr('y', 40).attr('font-size', '1em').text("of people in the US have");
d3.select('g').append('text').attr('text-anchor', 'middle').attr('y', 60).attr('font-size', '1em').text(" practiced meditation"); // set the dimensions and ageMargins of the graph

var ageMargin = {
  top: 10,
  right: 30,
  bottom: 90,
  left: 40
};
var ageWidth = 460 - ageMargin.left - ageMargin.right;
var ageHeight = 450 - ageMargin.top - ageMargin.bottom; // append the svg object to the body of the page

var ageSvg = d3.select(".age-div").append("svg").attr("width", ageWidth + ageMargin.left + ageMargin.right).attr("height", ageHeight + ageMargin.top + ageMargin.bottom).append("g").attr("transform", "translate(" + ageMargin.left + "," + ageMargin.top + ")"); // Parse the Data

d3.csv("src/assets/data/age.csv", function (ageData) {
  console.log(ageData); // X axis

  var x = d3.scaleBand().range([0, ageWidth]).domain(ageData.map(function (d) {
    return d.Age;
  })).padding(0.2);
  ageSvg.append("g").attr("transform", "translate(0," + ageHeight + ")").call(d3.axisBottom(x)).selectAll("text").attr("transform", "translate(-10,0)rotate(-45)").style("text-anchor", "end"); // Add Y axis

  var y = d3.scaleLinear().domain([0, 20]).range([ageHeight, 0]);
  ageSvg.append("g").call(d3.axisLeft(y)); // Bars

  ageSvg.selectAll().data(ageData).enter().append("rect").attr("x", function (d) {
    return x(d.Age);
  }).attr("width", x.bandwidth()).attr("fill", "#94ebcd").attr("stroke", "black") // no bar at the beginning thus:
  .attr("height", function (d) {
    return ageHeight - y(0);
  }) // always equal to 0
  .attr("y", function (d) {
    return y(0);
  }); // Animation

  ageSvg.selectAll("rect").transition().duration(800).attr("y", function (d) {
    return y(d.Value);
  }).attr("height", function (d) {
    return ageHeight - y(d.Value);
  }).delay(function (d, i) {
    console.log(i);
    return i * 100;
  });
}); // set the dimensions and margins of the graph

var benMargin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};
var benWidth = 445 - benMargin.left - benMargin.right;
var benHeight = 445 - benMargin.top - benMargin.bottom; // append the svg object to the body of the page

var benSvg = d3.select(".benefits-graph").append("svg").attr("width", benWidth + benMargin.left + benMargin.right).attr("height", benHeight + benMargin.top + benMargin.bottom).append("g").attr("transform", "translate(" + benMargin.left + "," + benMargin.top + ")"); // Read data

d3.csv("src/assets/data/benefits.csv", function (benData) {
  // stratify the data: reformatting for d3.js
  var root = d3.stratify().id(function (d) {
    return d.name;
  }) // Name of the entity (column name is name in csv)
  .parentId(function (d) {
    return d.parent;
  }) // Name of the parent (column name is parent in csv)
  (benData);
  root.sum(function (d) {
    return +d.value;
  }); // Compute the numeric value for each entity
  // Then d3.treemap computes the position of each element of the hierarchy
  // The coordinates are added to the root object above

  d3.treemap().size([benWidth, benHeight]).padding(4)(root);
  console.log(root.leaves()); // use this information to add rectangles:

  benSvg.selectAll("rect").data(root.leaves()).enter().append("rect").attr('x', function (d) {
    return d.x0;
  }).attr('y', function (d) {
    return d.y0;
  }).attr('width', function (d) {
    return d.x1 - d.x0;
  }).attr('height', function (d) {
    return d.y1 - d.y0;
  }).style("stroke", "black").style("fill", "#69b3a2"); // and to add the text labels

  benSvg.selectAll("text").data(root.leaves()).enter().append("text").attr("x", function (d) {
    return d.x0 + 5;
  }) // +10 to adjust position (more right)
  .attr("y", function (d) {
    return d.y0 + 20;
  }) // +20 to adjust position (lower)
  .text(function (d) {
    return "".concat(d.data.name, ": ").concat(d.data.value, "%");
  }).attr("font-size", "15px").attr("fill", "white").attr("font-family", "'Oswald', sans-serif;");
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zY2lvdXMtanMvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29uc2Npb3VzLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnNjaW91cy1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnNjaW91cy1qcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkMyIsInNlbGVjdCIsInN0eWxlIiwicXVvdGVzIiwiYXV0aG9ycyIsIk9iamVjdCIsImtleXMiLCJvbiIsInJhbmRBdXRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmFuZFF1b3RlIiwidGV4dCIsImF1ZGlvX2luZm8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXVzZWQiLCJwbGF5IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGF1c2UiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInJhZGl1cyIsIm1pbiIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJkYXRhIiwiYSIsImIiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsImRvbWFpbiIsInJhbmdlIiwicGllIiwidmFsdWUiLCJkIiwiZGF0YV9yZWFkeSIsImVudHJpZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsImFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJrZXkiLCJhZ2VNYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJhZ2VXaWR0aCIsImFnZUhlaWdodCIsImFnZVN2ZyIsImNzdiIsImFnZURhdGEiLCJjb25zb2xlIiwibG9nIiwieCIsInNjYWxlQmFuZCIsIm1hcCIsIkFnZSIsInBhZGRpbmciLCJjYWxsIiwiYXhpc0JvdHRvbSIsInkiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwiYmFuZHdpZHRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiVmFsdWUiLCJkZWxheSIsImkiLCJiZW5NYXJnaW4iLCJiZW5XaWR0aCIsImJlbkhlaWdodCIsImJlblN2ZyIsImJlbkRhdGEiLCJyb290Iiwic3RyYXRpZnkiLCJpZCIsIm5hbWUiLCJwYXJlbnRJZCIsInBhcmVudCIsInN1bSIsInRyZWVtYXAiLCJzaXplIiwibGVhdmVzIiwieDAiLCJ5MCIsIngxIiwieTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQUEsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQkMsS0FBaEIsQ0FBc0IsV0FBdEIsRUFBbUMsTUFBbkM7QUFHQSxJQUFNQyxNQUFNLEdBQUc7QUFDYixvQkFDRSxDQUNFLDREQURGLEVBRUUsaUNBRkYsRUFHRSxtRUFIRixFQUlFLDZGQUpGLEVBS0UscUVBTEYsRUFNRSxzREFORixDQUZXO0FBVWIscUJBQ0UsQ0FDRSxxSEFERixFQUVFLG1FQUZGLEVBR0Usa0VBSEYsRUFJRSwyRkFKRixFQUtFLG1FQUxGLENBWFc7QUFrQmIsb0JBQ0UsQ0FDRSw4R0FERixFQUVFLGdHQUZGLEVBR0UsNEZBSEYsRUFJRSxrSEFKRixFQUtFLDZEQUxGLENBbkJXO0FBMEJiLGtCQUNBLENBQ0UsdURBREYsRUFFRSwyREFGRixFQUdFLHFFQUhGLEVBSUUseURBSkYsRUFLRSx3SUFMRixFQU1FLG1GQU5GLENBM0JhO0FBbUNiLHFCQUNBLENBQ0UsK0dBREYsQ0FwQ2E7QUF1Q2IscUJBQ0EsQ0FDRSxpRUFERixFQUVFLG1EQUZGLEVBR0UsNENBSEYsQ0F4Q2E7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VixFQUFhO0FBQUUsV0FBT0EsQ0FBQyxDQUFDdUQsRUFBRixHQUFPdkQsQ0FBQyxDQUFDcUQsRUFBaEI7QUFBcUIsR0FSeEQsRUFTSzlGLEtBVEwsQ0FTVyxRQVRYLEVBU3FCLE9BVHJCLEVBVUtBLEtBVkwsQ0FVVyxNQVZYLEVBVW1CLFNBVm5CLEVBbEJ1RCxDQThCdkQ7O0FBQ0FpRixRQUFNLENBQ0hyQyxTQURILENBQ2EsTUFEYixFQUVHWixJQUZILENBRVFtRCxJQUFJLENBQUNTLE1BQUwsRUFGUixFQUdHL0MsS0FISCxHQUlHZixNQUpILENBSVUsTUFKVixFQUtLQyxJQUxMLENBS1UsR0FMVixFQUtlLFVBQUFVLENBQUMsRUFBSTtBQUFFLFdBQU9BLENBQUMsQ0FBQ29ELEVBQUYsR0FBSyxDQUFaO0FBQWMsR0FMcEMsRUFLeUM7QUFMekMsR0FNSzlELElBTkwsQ0FNVSxHQU5WLEVBTWUsVUFBQVUsQ0FBQyxFQUFJO0FBQUUsV0FBT0EsQ0FBQyxDQUFDcUQsRUFBRixHQUFLLEVBQVo7QUFBZSxHQU5yQyxFQU0wQztBQU4xQyxHQU9LbEYsSUFQTCxDQU9VLFVBQUE2QixDQUFDLEVBQUk7QUFBRSxxQkFBVUEsQ0FBQyxDQUFDVCxJQUFGLENBQU9zRCxJQUFqQixlQUEwQjdDLENBQUMsQ0FBQ1QsSUFBRixDQUFPUSxLQUFqQztBQUEwQyxHQVAzRCxFQVFLVCxJQVJMLENBUVUsV0FSVixFQVF1QixNQVJ2QixFQVNLQSxJQVRMLENBU1UsTUFUVixFQVNrQixPQVRsQixFQVVLQSxJQVZMLENBVVUsYUFWVixFQVV5Qix1QkFWekI7QUFXRCxDQTFDRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmQzLnNlbGVjdCgnaDEnKS5zdHlsZSgnZm9udC1zaXplJywgJzVyZW0nKVxuXG5cbmNvbnN0IHF1b3RlcyA9IHtcbiAgXCJKb24gS2FiYXQtWmlublwiOiBcbiAgICBbXG4gICAgICBcIlRoZSBsaXR0bGUgdGhpbmdzPyBUaGUgbGl0dGxlIG1vbWVudHM/IFRoZXkgYXJlbuKAmXQgbGl0dGxlLlwiLFxuICAgICAgXCJXaGVyZXZlciB5b3UgZ28sIHRoZXJlIHlvdSBhcmUuXCIsIFxuICAgICAgXCJNaW5kZnVsbmVzcyBpcyBhIHdheSBvZiBiZWZyaWVuZGluZyBvdXJzZWx2ZXMgYW5kIG91ciBleHBlcmllbmNlLlwiLFxuICAgICAgXCJUaGUgYmVzdCB3YXkgdG8gY2FwdHVyZSBtb21lbnRzIGlzIHRvIHBheSBhdHRlbnRpb24uIFRoaXMgaXMgaG93IHdlIGN1bHRpdmF0ZSAgbWluZGZ1bG5lc3MuXCIsXG4gICAgICBcIk1pbmRmdWxuZXNzIG1lYW5zIGJlaW5nIGF3YWtlLiBJdCBtZWFucyBrbm93aW5nIHdoYXQgeW91IGFyZSBkb2luZy5cIixcbiAgICAgIFwiWW91IGNhbuKAmXQgc3RvcCB0aGUgd2F2ZXMsIGJ1dCB5b3UgY2FuIGxlYXJuIHRvIHN1cmYuXCJcbiAgICBdLFxuICBcIlRow61jaCBOaOG6pXQgSOG6oW5oXCI6XG4gICAgW1xuICAgICAgXCJUbyB0aGluayBpbiB0ZXJtcyBvZiBlaXRoZXIgcGVzc2ltaXNtIG9yIG9wdGltaXNtIG92ZXJzaW1wbGlmaWVzIHRoZSB0cnV0aC4gVGhlIHByb2JsZW0gaXMgdG8gc2VlIHJlYWxpdHkgYXMgaXQgaXMuXCIsXG4gICAgICBcIk1hbnkgcGVvcGxlIGFyZSBhbGl2ZSBidXQgZG9u4oCZdCB0b3VjaCB0aGUgbWlyYWNsZSBvZiBiZWluZyBhbGl2ZS5cIixcbiAgICAgIFwiVGhlIHByZXNlbnQgbW9tZW50IGlzIHRoZSBvbmx5IHRpbWUgb3ZlciB3aGljaCB3ZSBoYXZlIGRvbWluaW9uLlwiLFxuICAgICAgXCJUaGUgZmVlbGluZyB0aGF0IGFueSB0YXNrIGlzIGEgbnVpc2FuY2Ugd2lsbCBzb29uIGRpc2FwcGVhciBpZiBpdCBpcyBkb25lIGluIG1pbmRmdWxuZXNzLlwiLFxuICAgICAgXCJNZWRpdGF0aW9uIGlzIG5vdCBldmFzaW9uOyBpdCBpcyBhIHNlcmVuZSBlbmNvdW50ZXIgd2l0aCByZWFsaXR5LlwiXG4gICAgXSxcbiAgXCJKYWNrIEtvcm5maWVsZFwiOlxuICAgIFtcbiAgICAgIFwiV2hlbiB3ZSBnZXQgdG9vIGNhdWdodCB1cCBpbiB0aGUgYnVzeW5lc3Mgb2YgdGhlIHdvcmxkLCB3ZSBsb3NlIGNvbm5lY3Rpb24gd2l0aCBvbmUgYW5vdGhlciDigJMgYW5kIG91cnNlbHZlcy5cIixcbiAgICAgIFwiRXZlcnl0aGluZyB0aGF0IGhhcyBhIGJlZ2lubmluZyBoYXMgYW4gZW5kaW5nLiBNYWtlIHlvdXIgcGVhY2Ugd2l0aCB0aGF0IGFuZCBhbGwgd2lsbCBiZSB3ZWxsLlwiLFxuICAgICAgXCJXaXNkb20gc2F5cyB3ZSBhcmUgbm90aGluZy4gTG92ZSBzYXlzIHdlIGFyZSBldmVyeXRoaW5nLiBCZXR3ZWVuIHRoZXNlIHR3byBvdXIgbGlmZSBmbG93cy5cIixcbiAgICAgIFwiVGhlIHRoaW5ncyB0aGF0IG1hdHRlciBtb3N0IGluIG91ciBsaXZlcyBhcmUgbm90IGZhbnRhc3RpYyBvciBncmFuZC4gVGhleSBhcmUgbW9tZW50cyB3aGVuIHdlIHRvdWNoIG9uZSBhbm90aGVyLlwiLFxuICAgICAgXCJNdWNoIG9mIHNwaXJpdHVhbCBsaWZlIGlzIHNlbGYtYWNjZXB0YW5jZSwgbWF5YmUgYWxsIG9mIGl0LlwiXG4gICAgXSxcbiAgXCJQZW1hIENow7ZkcsO2blwiOlxuICBbXG4gICAgXCJZb3UgYXJlIHRoZSBza3kuIEV2ZXJ5dGhpbmcgZWxzZSBpcyBqdXN0IHRoZSB3ZWF0aGVyLlwiLFxuICAgIFwiRmVhciBpcyBhIG5hdHVyYWwgcmVhY3Rpb24gdG8gbW92aW5nIGNsb3NlciB0byB0aGUgdHJ1dGguXCIsXG4gICAgXCJOb3RoaW5nIGV2ZXIgZ29lcyBhd2F5IHVudGlsIGl0IGhhcyB0YXVnaHQgdXMgd2hhdCB3ZSBuZWVkIHRvIGtub3cuXCIsXG4gICAgXCJUaGUgZXNzZW5jZSBvZiBicmF2ZXJ5IGlzIGJlaW5nIHdpdGhvdXQgc2VsZi1kZWNlcHRpb24uXCIsXG4gICAgXCJNZWRpdGF0aW9uIHByYWN0aWNlIGlzbuKAmXQgYWJvdXQgdHJ5aW5nIHRvIHRocm93IG91cnNlbHZlcyBhd2F5IGFuZCBiZWNvbWUgc29tZXRoaW5nIGJldHRlci4gSXTigJlzIGFib3V0IGJlZnJpZW5kaW5nIHdobyB3ZSBhcmUgYWxyZWFkeS5cIixcbiAgICBcIlJlam9pY2luZyBpbiBvcmRpbmFyeSB0aGluZ3MgaXMgbm90IHNlbnRpbWVudGFsIG9yIHRyaXRlLiBJdCBhY3R1YWxseSB0YWtlcyBndXRzLlwiXG4gIF0sXG4gIFwiQ2jDtmd5YW0gVHJ1bmdwYVwiOlxuICBbXG4gICAgXCJBbHRvZ2V0aGVyLCB0aGUgaWRlYSBvZiBtZWRpdGF0aW9uIGlzIG5vdCB0byBjcmVhdGUgc3RhdGVzIG9mIGVjc3Rhc3kgb3IgYWJzb3JwdGlvbiwgYnV0IHRvIGV4cGVyaWVuY2UgYmVpbmcuXCJcbiAgXSxcbiAgXCJTaGFyb24gU2FsemJlcmdcIjpcbiAgW1xuICAgIFwiTWluZGZ1bG5lc3MgaXNu4oCZdCBkaWZmaWN1bHQsIHdlIGp1c3QgbmVlZCB0byByZW1lbWJlciB0byBkbyBpdC5cIixcbiAgICBcIlRoYXTigJlzIGxpZmU6IHN0YXJ0aW5nIG92ZXIsIG9uZSBicmVhdGggYXQgYSB0aW1lLlwiLFxuICAgIFwiSXQgaXMgbmV2ZXIgdG9vIGxhdGUgdG8gdHVybiBvbiB0aGUgbGlnaHQuXCJcbiAgXSxcbiAgXCJBbGxhbiBMb2tvc1wiOlxuICBbXG4gICAgXCJZb3UgY2Fubm90IGNvbnRyb2wgdGhlIHJlc3VsdHMsIG9ubHkgeW91ciBhY3Rpb25zLlwiLFxuICAgIFwiRG9u4oCZdCBiZWxpZXZlIGV2ZXJ5dGhpbmcgeW91IHRoaW5rLiBUaG91Z2h0cyBhcmUganVzdCB0aGF0IOKAkyB0aG91Z2h0cy5cIixcbiAgICBcIllvdXIgYWN0aW9ucyBhcmUgeW91ciBvbmx5IHRydWUgYmVsb25naW5ncy5cIixcbiAgICBcIlRoZSBhcnQgb2YgcGVhY2VmdWwgbGl2aW5nIGNvbWVzIGRvd24gdG8gbGl2aW5nIGNvbXBhc3Npb25hdGVseSAmIHdpc2VseS5cIixcbiAgICBcIldlIGNhbm5vdCBmb3JjZSB0aGUgZGV2ZWxvcG1lbnQgb2YgbWluZGZ1bG5lc3MuXCJcbiAgXSxcbiAgXCJCdWRkaGFcIjpcbiAgW1xuICAgIFwiVGhlIFdheSBpcyBub3QgaW4gdGhlIHNreSwgdGhlIFdheSBpcyBpbiB0aGUgaGVhcnQuXCIsXG4gICAgXCJZb3Ugb25seSBsb3NlIHdoYXQgeW91IGNsaW5nIHRvLlwiLFxuICAgIFwiUGVhY2UgY29tZXMgZnJvbSB3aXRoaW4uIERvIG5vdCBzZWVrIGl0IHdpdGhvdXQuXCIsXG4gICAgXCJUaHJlZSB0aGluZ3MgY2FuIG5vdCBoaWRlIGZvciBsb25nOiB0aGUgTW9vbiwgdGhlIFN1biBhbmQgdGhlIFRydXRoLlwiLFxuICAgIFwiTm90aGluZyBjYW4gaGFybSB5b3UgYXMgbXVjaCBhcyB5b3VyIG93biB0aG91Z2h0cyB1bmd1YXJkZWQuXCIsXG4gICAgXCJBdHRhY2htZW50IGxlYWRzIHRvIHN1ZmZlcmluZy5cIixcbiAgICBcIk5vdGhpbmcgaXMgZm9yZXZlciBleGNlcHQgY2hhbmdlLlwiLFxuICAgIFwiSnVzdCBhcyBhIHNuYWtlIHNoZWRzIGl0cyBza2luLCB3ZSBtdXN0IHNoZWQgb3VyIHBhc3Qgb3ZlciBhbmQgb3ZlciBhZ2Fpbi5cIixcbiAgICBcIkV2ZXJ5IGV4cGVyaWVuY2UsIG5vIG1hdHRlciBob3cgYmFkIGl0IHNlZW1zLCBob2xkcyB3aXRoaW4gaXQgYSBibGVzc2luZyBvZiBzb21lIGtpbmQuIFRoZSBnb2FsIGlzIHRvIGZpbmQgaXQuXCIsXG4gICAgXCJPdXIgbGlmZSBpcyBzaGFwZWQgYnkgb3VyIG1pbmQsIGZvciB3ZSBiZWNvbWUgd2hhdCB3ZSB0aGluay5cIixcbiAgICBcIldpdGggb3VyIHRob3VnaHRzIHdlIG1ha2UgdGhlIHdvcmxkLlwiLFxuICAgIFwiQmUgd2hlcmUgeW91IGFyZSwgb3RoZXJ3aXNlIHlvdSB3aWxsIG1pc3MgeW91ciBsaWZlLlwiLFxuICAgIFwiSWYgdGhlIHByb2JsZW0gY2FuIGJlIHNvbHZlZCB3aHkgd29ycnk/IElmIHRoZSBwcm9ibGVtIGNhbm5vdCBiZSBzb2x2ZWQgd29ycnlpbmcgd2lsbCBkbyB5b3Ugbm8gZ29vZC5cIixcbiAgICBcIkRvIG5vdCBkd2VsbCBpbiB0aGUgcGFzdCwgZG8gbm90IGRyZWFtIG9mIHRoZSBmdXR1cmUsIGNvbmNlbnRyYXRlIHRoZSBtaW5kIG9uIHRoZSBwcmVzZW50IG1vbWVudC5cIixcbiAgICBcIklmIHlvdSBhcmUgZmFjaW5nIGluIHRoZSByaWdodCBkaXJlY3Rpb24sIGFsbCB5b3UgbmVlZCB0byBkbyBpcyBrZWVwIG9uIHdhbGtpbmcuXCIsXG4gICAgXCJFdmVyeSBtb3JuaW5nIHdlIGFyZSBib3JuIGFnYWluLiBXaGF0IHdlIGRvIHRvZGF5IGlzIHdoYXQgbWF0dGVycyBtb3N0LlwiXG4gIF1cbn1cblxuY29uc3QgYXV0aG9ycyA9IE9iamVjdC5rZXlzKHF1b3RlcylcblxuZDMuc2VsZWN0KCcjcXVvdGUtYnRuJylcbiAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCByYW5kQXV0aCA9IGF1dGhvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXV0aG9ycy5sZW5ndGgpXVxuICAgICAgICAgICAgbGV0IHJhbmRRdW90ZSA9IHF1b3Rlc1tyYW5kQXV0aF1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcXVvdGVzW3JhbmRBdXRoXS5sZW5ndGgpXVxuICAgICAgICAgICAgLy8gZDMuc2VsZWN0KCdoMycpLnJlbW92ZSgpXG4gICAgICAgICAgICBkMy5zZWxlY3QoJyNxdW90ZS10ZXh0JykudGV4dChyYW5kUXVvdGUpXG4gICAgICAgICAgICBkMy5zZWxlY3QoJy5tYi1hdXRob3InKS50ZXh0KHJhbmRBdXRoKVxuICAgICAgICB9KTtcblxubGV0IGF1ZGlvX2luZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW8xJyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtcGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoYXVkaW9faW5mby5wYXVzZWQpIHtcbiAgICAgICAgYXVkaW9faW5mby5wbGF5KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXZvbHVtZS1vZmYnKVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYS12b2x1bWUtdXAnKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGF1ZGlvX2luZm8ucGF1c2UoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtdm9sdW1lLXVwJylcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtdm9sdW1lLW9mZicpXG4gICAgfVxufSwgZmFsc2UpO1xuXG4vLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIGFnZU1hcmdpbnMgb2YgdGhlIGdyYXBoXG5jb25zdCB3aWR0aCA9IDQ1MFxuY29uc3QgaGVpZ2h0ID0gNDUwXG5jb25zdCBtYXJnaW4gPSA0MFxuXG4vLyBUaGUgcmFkaXVzIG9mIHRoZSBwaWVwbG90IGlzIGhhbGYgdGhlIHdpZHRoIG9yIGhhbGYgdGhlIGhlaWdodCAoc21hbGxlc3Qgb25lKS4gSSBzdWJ0cmFjdCBhIGJpdCBvZiBhZ2VNYXJnaW4uXG5jb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSBtYXJnaW5cblxuLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBkaXYgY2FsbGVkICdteV9kYXRhdml6J1xuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiLm1lZGl0YXRlLWNpcmNsZVwiKVxuICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbi8vIENyZWF0ZSBkdW1teSBkYXRhXG5sZXQgZGF0YSA9IHthOiAxNCwgYjogODZ9XG5cbi8vIHNldCB0aGUgY29sb3Igc2NhbGVcbmxldCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gIC5kb21haW4oZGF0YSlcbiAgLnJhbmdlKFsnI2ZmZDM4NCcsJyM5NGViY2QnXSlcblxuLy8gQ29tcHV0ZSB0aGUgcG9zaXRpb24gb2YgZWFjaCBncm91cCBvbiB0aGUgcGllOlxubGV0IHBpZSA9IGQzLnBpZSgpXG4gIC52YWx1ZShmdW5jdGlvbihkKSB7cmV0dXJuIGQudmFsdWU7IH0pXG5sZXQgZGF0YV9yZWFkeSA9IHBpZShkMy5lbnRyaWVzKGRhdGEpKVxuXG4vLyBCdWlsZCB0aGUgcGllIGNoYXJ0OiBCYXNpY2FsbHksIGVhY2ggcGFydCBvZiB0aGUgcGllIGlzIGEgcGF0aCB0aGF0IHdlIGJ1aWxkIHVzaW5nIHRoZSBhcmMgZnVuY3Rpb24uXG5zdmdcbiAgLnNlbGVjdEFsbCgnZmlsbGVyJylcbiAgLmRhdGEoZGF0YV9yZWFkeSlcbiAgLmVudGVyKClcbiAgLmFwcGVuZCgncGF0aCcpXG4gIC5hdHRyKCdkJywgZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMoMTIwKSAgICAgICAgIC8vIFRoaXMgaXMgdGhlIHNpemUgb2YgdGhlIGRvbnV0IGhvbGVcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzKVxuICApXG4gIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCl7IHJldHVybihjb2xvcihkLmRhdGEua2V5KSkgfSlcbiAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgXCIycHhcIilcbiAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjcpXG5cbiAgZDMuc2VsZWN0KCdnJylcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuXHQgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAuYXR0cignZm9udC1zaXplJywgJzFlbScpXG4gICAgLmF0dHIoJ3knLCAtNjApXG5cdCAgLnRleHQoJ01vcmUgdGhhbicpO1xuICBkMy5zZWxlY3QoJ2cnKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG5cdCAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKVxuICAgIC5hdHRyKCdmb250LXNpemUnLCAnNGVtJylcbiAgICAuYXR0cigneScsIDEwKVxuXHQgIC50ZXh0KCcxNCUnKTtcbiAgZDMuc2VsZWN0KCdnJylcbiAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAuYXR0cigneScsIDQwKVxuICAgIC5hdHRyKCdmb250LXNpemUnLCAnMWVtJylcbiAgICAudGV4dChcIm9mIHBlb3BsZSBpbiB0aGUgVVMgaGF2ZVwiKVxuICBkMy5zZWxlY3QoJ2cnKVxuICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgIC5hdHRyKCd5JywgNjApXG4gICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxZW0nKVxuICAgIC50ZXh0KFwiIHByYWN0aWNlZCBtZWRpdGF0aW9uXCIpXG5cblxuLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBhZ2VNYXJnaW5zIG9mIHRoZSBncmFwaFxuY29uc3QgYWdlTWFyZ2luID0ge3RvcDogMTAsIHJpZ2h0OiAzMCwgYm90dG9tOiA5MCwgbGVmdDogNDB9XG5jb25zdCBhZ2VXaWR0aCA9IDQ2MCAtIGFnZU1hcmdpbi5sZWZ0IC0gYWdlTWFyZ2luLnJpZ2h0XG5jb25zdCBhZ2VIZWlnaHQgPSA0NTAgLSBhZ2VNYXJnaW4udG9wIC0gYWdlTWFyZ2luLmJvdHRvbTtcblxuLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXG5sZXQgYWdlU3ZnID0gZDMuc2VsZWN0KFwiLmFnZS1kaXZcIilcbiAgLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgYWdlV2lkdGggKyBhZ2VNYXJnaW4ubGVmdCArIGFnZU1hcmdpbi5yaWdodClcbiAgICAuYXR0cihcImhlaWdodFwiLCBhZ2VIZWlnaHQgKyBhZ2VNYXJnaW4udG9wICsgYWdlTWFyZ2luLmJvdHRvbSlcbiAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgYWdlTWFyZ2luLmxlZnQgKyBcIixcIiArIGFnZU1hcmdpbi50b3AgKyBcIilcIik7XG5cblxuLy8gUGFyc2UgdGhlIERhdGFcbmQzLmNzdihcInNyYy9hc3NldHMvZGF0YS9hZ2UuY3N2XCIsIGFnZURhdGEgPT4ge1xuY29uc29sZS5sb2coYWdlRGF0YSlcbi8vIFggYXhpc1xubGV0IHggPSBkMy5zY2FsZUJhbmQoKVxuICAucmFuZ2UoWyAwLCBhZ2VXaWR0aCBdKVxuICAuZG9tYWluKGFnZURhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuQWdlOyB9KSlcbiAgLnBhZGRpbmcoMC4yKTtcbmFnZVN2Zy5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBhZ2VIZWlnaHQgKyBcIilcIilcbiAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgtMTAsMClyb3RhdGUoLTQ1KVwiKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXG4vLyBBZGQgWSBheGlzXG5sZXQgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgLmRvbWFpbihbMCwgMjBdKVxuICAucmFuZ2UoWyBhZ2VIZWlnaHQsIDBdKTtcbmFnZVN2Zy5hcHBlbmQoXCJnXCIpXG4gIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcblxuLy8gQmFyc1xuYWdlU3ZnLnNlbGVjdEFsbCgpXG4gIC5kYXRhKGFnZURhdGEpXG4gIC5lbnRlcigpXG4gIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHgoZC5BZ2UpOyB9KVxuICAgIC5hdHRyKFwid2lkdGhcIiwgeC5iYW5kd2lkdGgoKSlcbiAgICAuYXR0cihcImZpbGxcIiwgXCIjOTRlYmNkXCIpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJibGFja1wiKVxuICAgIC8vIG5vIGJhciBhdCB0aGUgYmVnaW5uaW5nIHRodXM6XG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gYWdlSGVpZ2h0IC0geSgwKTsgfSkgLy8gYWx3YXlzIGVxdWFsIHRvIDBcbiAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geSgwKTsgfSlcblxuLy8gQW5pbWF0aW9uXG5hZ2VTdmcuc2VsZWN0QWxsKFwicmVjdFwiKVxuICAudHJhbnNpdGlvbigpXG4gIC5kdXJhdGlvbig4MDApXG4gIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQuVmFsdWUpOyB9KVxuICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBhZ2VIZWlnaHQgLSB5KGQuVmFsdWUpOyB9KVxuICAuZGVsYXkoZnVuY3Rpb24oZCxpKXtjb25zb2xlLmxvZyhpKSA7IHJldHVybihpKjEwMCl9KVxuXG59KVxuXG5cblxuXG4vLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG5jb25zdCBiZW5NYXJnaW4gPSB7dG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDEwLCBsZWZ0OiAxMH07XG5jb25zdCBiZW5XaWR0aCA9IDQ0NSAtIGJlbk1hcmdpbi5sZWZ0IC0gYmVuTWFyZ2luLnJpZ2h0O1xuY29uc3QgYmVuSGVpZ2h0ID0gNDQ1IC0gYmVuTWFyZ2luLnRvcCAtIGJlbk1hcmdpbi5ib3R0b207XG5cbi8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgYm9keSBvZiB0aGUgcGFnZVxubGV0IGJlblN2ZyA9IGQzLnNlbGVjdChcIi5iZW5lZml0cy1ncmFwaFwiKVxuLmFwcGVuZChcInN2Z1wiKVxuICAuYXR0cihcIndpZHRoXCIsIGJlbldpZHRoICsgYmVuTWFyZ2luLmxlZnQgKyBiZW5NYXJnaW4ucmlnaHQpXG4gIC5hdHRyKFwiaGVpZ2h0XCIsIGJlbkhlaWdodCArIGJlbk1hcmdpbi50b3AgKyBiZW5NYXJnaW4uYm90dG9tKVxuLmFwcGVuZChcImdcIilcbiAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBiZW5NYXJnaW4ubGVmdCArIFwiLFwiICsgYmVuTWFyZ2luLnRvcCArIFwiKVwiKTtcblxuLy8gUmVhZCBkYXRhXG5kMy5jc3YoXCJzcmMvYXNzZXRzL2RhdGEvYmVuZWZpdHMuY3N2XCIsIGZ1bmN0aW9uKGJlbkRhdGEpIHtcblxuICAvLyBzdHJhdGlmeSB0aGUgZGF0YTogcmVmb3JtYXR0aW5nIGZvciBkMy5qc1xuICBsZXQgcm9vdCA9IGQzLnN0cmF0aWZ5KClcbiAgICAuaWQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5uYW1lOyB9KSAgIC8vIE5hbWUgb2YgdGhlIGVudGl0eSAoY29sdW1uIG5hbWUgaXMgbmFtZSBpbiBjc3YpXG4gICAgLnBhcmVudElkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQucGFyZW50OyB9KSAgIC8vIE5hbWUgb2YgdGhlIHBhcmVudCAoY29sdW1uIG5hbWUgaXMgcGFyZW50IGluIGNzdilcbiAgICAoYmVuRGF0YSk7XG4gIHJvb3Quc3VtKGZ1bmN0aW9uKGQpIHsgcmV0dXJuICtkLnZhbHVlIH0pICAgLy8gQ29tcHV0ZSB0aGUgbnVtZXJpYyB2YWx1ZSBmb3IgZWFjaCBlbnRpdHlcblxuICAvLyBUaGVuIGQzLnRyZWVtYXAgY29tcHV0ZXMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggZWxlbWVudCBvZiB0aGUgaGllcmFyY2h5XG4gIC8vIFRoZSBjb29yZGluYXRlcyBhcmUgYWRkZWQgdG8gdGhlIHJvb3Qgb2JqZWN0IGFib3ZlXG4gIGQzLnRyZWVtYXAoKVxuICAgIC5zaXplKFtiZW5XaWR0aCwgYmVuSGVpZ2h0XSlcbiAgICAucGFkZGluZyg0KVxuICAgIChyb290KVxuXG5jb25zb2xlLmxvZyhyb290LmxlYXZlcygpKVxuICAvLyB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBhZGQgcmVjdGFuZ2xlczpcbiAgYmVuU3ZnXG4gICAgLnNlbGVjdEFsbChcInJlY3RcIilcbiAgICAuZGF0YShyb290LmxlYXZlcygpKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueDA7IH0pXG4gICAgICAuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnkwOyB9KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQueDEgLSBkLngwOyB9KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnkxIC0gZC55MDsgfSlcbiAgICAgIC5zdHlsZShcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiIzY5YjNhMlwiKTtcblxuICAvLyBhbmQgdG8gYWRkIHRoZSB0ZXh0IGxhYmVsc1xuICBiZW5TdmdcbiAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgIC5kYXRhKHJvb3QubGVhdmVzKCkpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geyByZXR1cm4gZC54MCs1fSkgICAgLy8gKzEwIHRvIGFkanVzdCBwb3NpdGlvbiAobW9yZSByaWdodClcbiAgICAgIC5hdHRyKFwieVwiLCBkID0+IHsgcmV0dXJuIGQueTArMjB9KSAgICAvLyArMjAgdG8gYWRqdXN0IHBvc2l0aW9uIChsb3dlcilcbiAgICAgIC50ZXh0KGQgPT4geyByZXR1cm4gYCR7ZC5kYXRhLm5hbWV9OiAke2QuZGF0YS52YWx1ZX0lYH0pXG4gICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCBcIjE1cHhcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIndoaXRlXCIpXG4gICAgICAuYXR0cihcImZvbnQtZmFtaWx5XCIsIFwiJ09zd2FsZCcsIHNhbnMtc2VyaWY7XCIpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=