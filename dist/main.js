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

d3.select('h1').style('font-size', '5rem'); // var data = [80, 120, 60, 250, 200];
//     var barHeight = 20;
//     var bar = d3.select('svg')
//         .selectAll('rect')
//         .data(data)
//         .enter()
//         .append('rect')
//         .attr('width', function (d) { return d; })
//         .attr('height', barHeight - 1)
//         .attr('transform', function (d, i) {
//             return "translate(0," + i * barHeight + ")";
//         });

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
}, false);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zY2lvdXMtanMvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29uc2Npb3VzLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnNjaW91cy1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnNjaW91cy1qcy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkMyIsInNlbGVjdCIsInN0eWxlIiwicXVvdGVzIiwiYXV0aG9ycyIsIk9iamVjdCIsImtleXMiLCJvbiIsInJhbmRBdXRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmFuZFF1b3RlIiwidGV4dCIsImF1ZGlvX2luZm8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXVzZWQiLCJwbGF5IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGF1c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQUEsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQkMsS0FBaEIsQ0FBc0IsV0FBdEIsRUFBbUMsTUFBbkMsRSxDQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYixvQkFDRSxDQUNFLDREQURGLEVBRUUsaUNBRkYsRUFHRSxtRUFIRixFQUlFLDZGQUpGLEVBS0UscUVBTEYsRUFNRSxzREFORixDQUZXO0FBVWIscUJBQ0UsQ0FDRSxxSEFERixFQUVFLG1FQUZGLEVBR0Usa0VBSEYsRUFJRSwyRkFKRixFQUtFLG1FQUxGLENBWFc7QUFrQmIsb0JBQ0UsQ0FDRSw4R0FERixFQUVFLGdHQUZGLEVBR0UsNEZBSEYsRUFJRSxrSEFKRixFQUtFLDZEQUxGLENBbkJXO0FBMEJiLGtCQUNBLENBQ0UsdURBREYsRUFFRSwyREFGRixFQUdFLHFFQUhGLEVBSUUseURBSkYsRUFLRSx3SUFMRixFQU1FLG1GQU5GLENBM0JhO0FBbUNiLHFCQUNBLENBQ0UsK0dBREYsQ0FwQ2E7QUF1Q2IscUJBQ0EsQ0FDRSxpRUFERixFQUVFLG1EQUZGLEVBR0UsNENBSEYsQ0F4Q2E7QUE2Q2IsaUJBQ0EsQ0FDRSxvREFERixFQUVFLHdFQUZGLEVBR0UsNkNBSEYsRUFJRSwyRUFKRixFQUtFLGlEQUxGLENBOUNhO0FBcURiLFlBQ0EsQ0FDRSxxREFERixFQUVFLGtDQUZGLEVBR0Usa0RBSEYsRUFJRSxzRUFKRixFQUtFLDhEQUxGLEVBTUUsZ0NBTkYsRUFPRSxtQ0FQRixFQVFFLDRFQVJGLEVBU0UsZ0hBVEYsRUFVRSw4REFWRixFQVdFLHNDQVhGLEVBWUUsc0RBWkYsRUFhRSx1R0FiRixFQWNFLG1HQWRGLEVBZUUsa0ZBZkYsRUFnQkUseUVBaEJGO0FBdERhLENBQWY7QUEwRUEsSUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsTUFBWixDQUFoQjtBQUVBSCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxZQUFWLEVBQ1NNLEVBRFQsQ0FDWSxPQURaLEVBQ3FCLFlBQVk7QUFDckIsTUFBSUMsUUFBUSxHQUFHSixPQUFPLENBQUNLLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLE9BQU8sQ0FBQ1EsTUFBbkMsQ0FBRCxDQUF0QjtBQUNBLE1BQUlDLFNBQVMsR0FBR1YsTUFBTSxDQUFDSyxRQUFELENBQU4sQ0FBaUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JSLE1BQU0sQ0FBQ0ssUUFBRCxDQUFOLENBQWlCSSxNQUE1QyxDQUFqQixDQUFoQixDQUZxQixDQUdyQjs7QUFDQVosSUFBRSxDQUFDQyxNQUFILENBQVUsYUFBVixFQUF5QmEsSUFBekIsQ0FBOEJELFNBQTlCO0FBQ0FiLElBQUUsQ0FBQ0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JhLElBQXhCLENBQTZCTixRQUE3QjtBQUNILENBUFQ7QUFTQSxJQUFJTyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFqQjtBQUNBRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxVQUFVQyxDQUFWLEVBQWE7QUFDekUsTUFBSUosVUFBVSxDQUFDSyxNQUFmLEVBQXVCO0FBQ25CTCxjQUFVLENBQUNNLElBQVg7QUFDQUYsS0FBQyxDQUFDRyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLGVBQTFCO0FBQ0FMLEtBQUMsQ0FBQ0csTUFBRixDQUFTQyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixjQUExQjtBQUNILEdBSkQsTUFJTztBQUNIVCxjQUFVLENBQUNVLEtBQVg7QUFDQU4sS0FBQyxDQUFDRyxNQUFGLENBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLGNBQTFCO0FBQ0FMLEtBQUMsQ0FBQ0csTUFBRixDQUFTQyxTQUFULENBQW1CQyxNQUFuQixDQUEwQixlQUExQjtBQUNIO0FBQ0osQ0FWRCxFQVVHLEtBVkgsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5kMy5zZWxlY3QoJ2gxJykuc3R5bGUoJ2ZvbnQtc2l6ZScsICc1cmVtJylcblxuLy8gdmFyIGRhdGEgPSBbODAsIDEyMCwgNjAsIDI1MCwgMjAwXTtcblxuLy8gICAgIHZhciBiYXJIZWlnaHQgPSAyMDtcblxuLy8gICAgIHZhciBiYXIgPSBkMy5zZWxlY3QoJ3N2ZycpXG4vLyAgICAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuLy8gICAgICAgICAuZGF0YShkYXRhKVxuLy8gICAgICAgICAuZW50ZXIoKVxuLy8gICAgICAgICAuYXBwZW5kKCdyZWN0Jylcbi8vICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQ7IH0pXG4vLyAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQgLSAxKVxuLy8gICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZSgwLFwiICsgaSAqIGJhckhlaWdodCArIFwiKVwiO1xuLy8gICAgICAgICB9KTtcblxuY29uc3QgcXVvdGVzID0ge1xuICBcIkpvbiBLYWJhdC1aaW5uXCI6IFxuICAgIFtcbiAgICAgIFwiVGhlIGxpdHRsZSB0aGluZ3M/IFRoZSBsaXR0bGUgbW9tZW50cz8gVGhleSBhcmVu4oCZdCBsaXR0bGUuXCIsXG4gICAgICBcIldoZXJldmVyIHlvdSBnbywgdGhlcmUgeW91IGFyZS5cIiwgXG4gICAgICBcIk1pbmRmdWxuZXNzIGlzIGEgd2F5IG9mIGJlZnJpZW5kaW5nIG91cnNlbHZlcyBhbmQgb3VyIGV4cGVyaWVuY2UuXCIsXG4gICAgICBcIlRoZSBiZXN0IHdheSB0byBjYXB0dXJlIG1vbWVudHMgaXMgdG8gcGF5IGF0dGVudGlvbi4gVGhpcyBpcyBob3cgd2UgY3VsdGl2YXRlICBtaW5kZnVsbmVzcy5cIixcbiAgICAgIFwiTWluZGZ1bG5lc3MgbWVhbnMgYmVpbmcgYXdha2UuIEl0IG1lYW5zIGtub3dpbmcgd2hhdCB5b3UgYXJlIGRvaW5nLlwiLFxuICAgICAgXCJZb3UgY2Fu4oCZdCBzdG9wIHRoZSB3YXZlcywgYnV0IHlvdSBjYW4gbGVhcm4gdG8gc3VyZi5cIlxuICAgIF0sXG4gIFwiVGjDrWNoIE5o4bqldCBI4bqhbmhcIjpcbiAgICBbXG4gICAgICBcIlRvIHRoaW5rIGluIHRlcm1zIG9mIGVpdGhlciBwZXNzaW1pc20gb3Igb3B0aW1pc20gb3ZlcnNpbXBsaWZpZXMgdGhlIHRydXRoLiBUaGUgcHJvYmxlbSBpcyB0byBzZWUgcmVhbGl0eSBhcyBpdCBpcy5cIixcbiAgICAgIFwiTWFueSBwZW9wbGUgYXJlIGFsaXZlIGJ1dCBkb27igJl0IHRvdWNoIHRoZSBtaXJhY2xlIG9mIGJlaW5nIGFsaXZlLlwiLFxuICAgICAgXCJUaGUgcHJlc2VudCBtb21lbnQgaXMgdGhlIG9ubHkgdGltZSBvdmVyIHdoaWNoIHdlIGhhdmUgZG9taW5pb24uXCIsXG4gICAgICBcIlRoZSBmZWVsaW5nIHRoYXQgYW55IHRhc2sgaXMgYSBudWlzYW5jZSB3aWxsIHNvb24gZGlzYXBwZWFyIGlmIGl0IGlzIGRvbmUgaW4gbWluZGZ1bG5lc3MuXCIsXG4gICAgICBcIk1lZGl0YXRpb24gaXMgbm90IGV2YXNpb247IGl0IGlzIGEgc2VyZW5lIGVuY291bnRlciB3aXRoIHJlYWxpdHkuXCJcbiAgICBdLFxuICBcIkphY2sgS29ybmZpZWxkXCI6XG4gICAgW1xuICAgICAgXCJXaGVuIHdlIGdldCB0b28gY2F1Z2h0IHVwIGluIHRoZSBidXN5bmVzcyBvZiB0aGUgd29ybGQsIHdlIGxvc2UgY29ubmVjdGlvbiB3aXRoIG9uZSBhbm90aGVyIOKAkyBhbmQgb3Vyc2VsdmVzLlwiLFxuICAgICAgXCJFdmVyeXRoaW5nIHRoYXQgaGFzIGEgYmVnaW5uaW5nIGhhcyBhbiBlbmRpbmcuIE1ha2UgeW91ciBwZWFjZSB3aXRoIHRoYXQgYW5kIGFsbCB3aWxsIGJlIHdlbGwuXCIsXG4gICAgICBcIldpc2RvbSBzYXlzIHdlIGFyZSBub3RoaW5nLiBMb3ZlIHNheXMgd2UgYXJlIGV2ZXJ5dGhpbmcuIEJldHdlZW4gdGhlc2UgdHdvIG91ciBsaWZlIGZsb3dzLlwiLFxuICAgICAgXCJUaGUgdGhpbmdzIHRoYXQgbWF0dGVyIG1vc3QgaW4gb3VyIGxpdmVzIGFyZSBub3QgZmFudGFzdGljIG9yIGdyYW5kLiBUaGV5IGFyZSBtb21lbnRzIHdoZW4gd2UgdG91Y2ggb25lIGFub3RoZXIuXCIsXG4gICAgICBcIk11Y2ggb2Ygc3Bpcml0dWFsIGxpZmUgaXMgc2VsZi1hY2NlcHRhbmNlLCBtYXliZSBhbGwgb2YgaXQuXCJcbiAgICBdLFxuICBcIlBlbWEgQ2jDtmRyw7ZuXCI6XG4gIFtcbiAgICBcIllvdSBhcmUgdGhlIHNreS4gRXZlcnl0aGluZyBlbHNlIGlzIGp1c3QgdGhlIHdlYXRoZXIuXCIsXG4gICAgXCJGZWFyIGlzIGEgbmF0dXJhbCByZWFjdGlvbiB0byBtb3ZpbmcgY2xvc2VyIHRvIHRoZSB0cnV0aC5cIixcbiAgICBcIk5vdGhpbmcgZXZlciBnb2VzIGF3YXkgdW50aWwgaXQgaGFzIHRhdWdodCB1cyB3aGF0IHdlIG5lZWQgdG8ga25vdy5cIixcbiAgICBcIlRoZSBlc3NlbmNlIG9mIGJyYXZlcnkgaXMgYmVpbmcgd2l0aG91dCBzZWxmLWRlY2VwdGlvbi5cIixcbiAgICBcIk1lZGl0YXRpb24gcHJhY3RpY2UgaXNu4oCZdCBhYm91dCB0cnlpbmcgdG8gdGhyb3cgb3Vyc2VsdmVzIGF3YXkgYW5kIGJlY29tZSBzb21ldGhpbmcgYmV0dGVyLiBJdOKAmXMgYWJvdXQgYmVmcmllbmRpbmcgd2hvIHdlIGFyZSBhbHJlYWR5LlwiLFxuICAgIFwiUmVqb2ljaW5nIGluIG9yZGluYXJ5IHRoaW5ncyBpcyBub3Qgc2VudGltZW50YWwgb3IgdHJpdGUuIEl0IGFjdHVhbGx5IHRha2VzIGd1dHMuXCJcbiAgXSxcbiAgXCJDaMO2Z3lhbSBUcnVuZ3BhXCI6XG4gIFtcbiAgICBcIkFsdG9nZXRoZXIsIHRoZSBpZGVhIG9mIG1lZGl0YXRpb24gaXMgbm90IHRvIGNyZWF0ZSBzdGF0ZXMgb2YgZWNzdGFzeSBvciBhYnNvcnB0aW9uLCBidXQgdG8gZXhwZXJpZW5jZSBiZWluZy5cIlxuICBdLFxuICBcIlNoYXJvbiBTYWx6YmVyZ1wiOlxuICBbXG4gICAgXCJNaW5kZnVsbmVzcyBpc27igJl0IGRpZmZpY3VsdCwgd2UganVzdCBuZWVkIHRvIHJlbWVtYmVyIHRvIGRvIGl0LlwiLFxuICAgIFwiVGhhdOKAmXMgbGlmZTogc3RhcnRpbmcgb3Zlciwgb25lIGJyZWF0aCBhdCBhIHRpbWUuXCIsXG4gICAgXCJJdCBpcyBuZXZlciB0b28gbGF0ZSB0byB0dXJuIG9uIHRoZSBsaWdodC5cIlxuICBdLFxuICBcIkFsbGFuIExva29zXCI6XG4gIFtcbiAgICBcIllvdSBjYW5ub3QgY29udHJvbCB0aGUgcmVzdWx0cywgb25seSB5b3VyIGFjdGlvbnMuXCIsXG4gICAgXCJEb27igJl0IGJlbGlldmUgZXZlcnl0aGluZyB5b3UgdGhpbmsuIFRob3VnaHRzIGFyZSBqdXN0IHRoYXQg4oCTIHRob3VnaHRzLlwiLFxuICAgIFwiWW91ciBhY3Rpb25zIGFyZSB5b3VyIG9ubHkgdHJ1ZSBiZWxvbmdpbmdzLlwiLFxuICAgIFwiVGhlIGFydCBvZiBwZWFjZWZ1bCBsaXZpbmcgY29tZXMgZG93biB0byBsaXZpbmcgY29tcGFzc2lvbmF0ZWx5ICYgd2lzZWx5LlwiLFxuICAgIFwiV2UgY2Fubm90IGZvcmNlIHRoZSBkZXZlbG9wbWVudCBvZiBtaW5kZnVsbmVzcy5cIlxuICBdLFxuICBcIkJ1ZGRoYVwiOlxuICBbXG4gICAgXCJUaGUgV2F5IGlzIG5vdCBpbiB0aGUgc2t5LCB0aGUgV2F5IGlzIGluIHRoZSBoZWFydC5cIixcbiAgICBcIllvdSBvbmx5IGxvc2Ugd2hhdCB5b3UgY2xpbmcgdG8uXCIsXG4gICAgXCJQZWFjZSBjb21lcyBmcm9tIHdpdGhpbi4gRG8gbm90IHNlZWsgaXQgd2l0aG91dC5cIixcbiAgICBcIlRocmVlIHRoaW5ncyBjYW4gbm90IGhpZGUgZm9yIGxvbmc6IHRoZSBNb29uLCB0aGUgU3VuIGFuZCB0aGUgVHJ1dGguXCIsXG4gICAgXCJOb3RoaW5nIGNhbiBoYXJtIHlvdSBhcyBtdWNoIGFzIHlvdXIgb3duIHRob3VnaHRzIHVuZ3VhcmRlZC5cIixcbiAgICBcIkF0dGFjaG1lbnQgbGVhZHMgdG8gc3VmZmVyaW5nLlwiLFxuICAgIFwiTm90aGluZyBpcyBmb3JldmVyIGV4Y2VwdCBjaGFuZ2UuXCIsXG4gICAgXCJKdXN0IGFzIGEgc25ha2Ugc2hlZHMgaXRzIHNraW4sIHdlIG11c3Qgc2hlZCBvdXIgcGFzdCBvdmVyIGFuZCBvdmVyIGFnYWluLlwiLFxuICAgIFwiRXZlcnkgZXhwZXJpZW5jZSwgbm8gbWF0dGVyIGhvdyBiYWQgaXQgc2VlbXMsIGhvbGRzIHdpdGhpbiBpdCBhIGJsZXNzaW5nIG9mIHNvbWUga2luZC4gVGhlIGdvYWwgaXMgdG8gZmluZCBpdC5cIixcbiAgICBcIk91ciBsaWZlIGlzIHNoYXBlZCBieSBvdXIgbWluZCwgZm9yIHdlIGJlY29tZSB3aGF0IHdlIHRoaW5rLlwiLFxuICAgIFwiV2l0aCBvdXIgdGhvdWdodHMgd2UgbWFrZSB0aGUgd29ybGQuXCIsXG4gICAgXCJCZSB3aGVyZSB5b3UgYXJlLCBvdGhlcndpc2UgeW91IHdpbGwgbWlzcyB5b3VyIGxpZmUuXCIsXG4gICAgXCJJZiB0aGUgcHJvYmxlbSBjYW4gYmUgc29sdmVkIHdoeSB3b3JyeT8gSWYgdGhlIHByb2JsZW0gY2Fubm90IGJlIHNvbHZlZCB3b3JyeWluZyB3aWxsIGRvIHlvdSBubyBnb29kLlwiLFxuICAgIFwiRG8gbm90IGR3ZWxsIGluIHRoZSBwYXN0LCBkbyBub3QgZHJlYW0gb2YgdGhlIGZ1dHVyZSwgY29uY2VudHJhdGUgdGhlIG1pbmQgb24gdGhlIHByZXNlbnQgbW9tZW50LlwiLFxuICAgIFwiSWYgeW91IGFyZSBmYWNpbmcgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiwgYWxsIHlvdSBuZWVkIHRvIGRvIGlzIGtlZXAgb24gd2Fsa2luZy5cIixcbiAgICBcIkV2ZXJ5IG1vcm5pbmcgd2UgYXJlIGJvcm4gYWdhaW4uIFdoYXQgd2UgZG8gdG9kYXkgaXMgd2hhdCBtYXR0ZXJzIG1vc3QuXCJcbiAgXVxufVxuXG5jb25zdCBhdXRob3JzID0gT2JqZWN0LmtleXMocXVvdGVzKVxuXG5kMy5zZWxlY3QoJyNxdW90ZS1idG4nKVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IHJhbmRBdXRoID0gYXV0aG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdXRob3JzLmxlbmd0aCldXG4gICAgICAgICAgICBsZXQgcmFuZFF1b3RlID0gcXVvdGVzW3JhbmRBdXRoXVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBxdW90ZXNbcmFuZEF1dGhdLmxlbmd0aCldXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3QoJ2gzJykucmVtb3ZlKClcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnI3F1b3RlLXRleHQnKS50ZXh0KHJhbmRRdW90ZSlcbiAgICAgICAgICAgIGQzLnNlbGVjdCgnLm1iLWF1dGhvcicpLnRleHQocmFuZEF1dGgpXG4gICAgICAgIH0pO1xuXG5sZXQgYXVkaW9faW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdWRpbzEnKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1wbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChhdWRpb19pbmZvLnBhdXNlZCkge1xuICAgICAgICBhdWRpb19pbmZvLnBsYXkoKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnZmEtdm9sdW1lLW9mZicpXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2ZhLXZvbHVtZS11cCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXVkaW9faW5mby5wYXVzZSgpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYS12b2x1bWUtdXAnKVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdmYS12b2x1bWUtb2ZmJylcbiAgICB9XG59LCBmYWxzZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9