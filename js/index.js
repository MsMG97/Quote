var quoteList = [
  {
    authorName: "― Oscar Wilde",
    quoteText: "“Be yourself; everyone else is already taken.”",
  },
  {
    authorName: "― Frank Zappa",
    quoteText: "“So many books, so little time.”",
  },
  {
    authorName: "― Bernard M. Baruch",
    quoteText:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    authorName: "― Marcus Tullius Cicero",
    quoteText: "“A room without books is like a body without a soul.”",
  },
  {
    authorName: "― Dr. Seuss",
    quoteText:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    authorName: "― Mae West",
    quoteText: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    authorName: "― Mahatma Gandhi",
    quoteText: "“Be the change that you wish to see in the world.”",
  },
  {
    authorName: "― Robert Frost",
    quoteText:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    authorName: "― Mark Twain",
    quoteText: "“If you tell the truth, you don't have to remember anything.”",
  },
  {
    authorName: "― Elbert Hubbard",
    quoteText:
      "“A friend is someone who knows all about you and still loves you.”",
  },
  {
    authorName: "― Oscar Wilde",
    quoteText:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
  },
  {
    authorName: "― Ralph Waldo Emerson",
    quoteText:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  },
];
var lastIndex = 0;
function getQuote() {
  var index = Math.floor(Math.random() * quoteList.length);

  if (index === lastIndex) {
    index++;
  }

  var quote = ` <p> ${quoteList[index].quoteText}</p>
         <h3>${quoteList[index].authorName}</h3>`;
  document.getElementById("quote").innerHTML = quote;

  console.log(quote);

  lastIndex = index;
}
