import "./styles/index.scss";

d3.select('h1').style('font-size', '5rem')

// var data = [80, 120, 60, 250, 200];

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

d3.select('#quote-btn')
        .on('click', function () {
            let randAuth = authors[Math.floor(Math.random() * authors.length)]
            let randQuote = quotes[randAuth][Math.floor(Math.random() * quotes[randAuth].length)]
            // d3.select('h3').remove()
            d3.select('#quote-text').text(randQuote)
            d3.select('.mb-author').text(randAuth)
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
