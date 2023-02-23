import React from 'https://esm.sh/react@18.2.0'

const quoteObj = [
  [
    "It’s your place in the world, it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    "Mae Jemison"
  ],
  [
    "You may be disappointed if you fail, but you are doomed if you don’t try.",
    "Beverly Sills"
  ],
  [
    "Remember no one can make you feel inferior without your consent.",
    "Eleanor Roosevelt"
  ],
  [
    "Life is what we make it, always has been, always will be.",
    "Grandma Moses"
  ],
  [
    "The question isn’t who is going to let me; it’s who is going to stop me.",
    "Ayn Rand"
  ],
  [
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Henry Ford"
  ],
  [
    "It’s not the years in your life that count. It’s the life in your years.",
    "Abraham Lincoln"
  ],
  ["Change your thoughts and you change your world.", "Norman Vincent Peale"],
  [
    "Either write something worth reading or do something worth writing.",
    "Benjamin Franklin"
  ],
  [
    "Nothing is impossible, the word itself says, “I’m possible!”",
    "–Audrey Hepburn"
  ],
  [
    "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    "Jamie Paolinetti"
  ],
  [
    "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    "Erica Jong"
  ],
  [
    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    "Bob Dylan"
  ],
  [
    "I didn’t fail the test. I just found 100 ways to do it wrong.",
    "Benjamin Franklin"
  ],
  [
    "In order to succeed, your desire for success should be greater than your fear of failure.",
    "Bill Cosby"
  ],
  [
    "A person who never made a mistake never tried anything new.",
    " Albert Einstein"
  ]
];



class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteObj[0]
    };
    this.handleClick = this.handleClick.bind(this);
    
     
  }
 
  randomQuote() {
    const indx = Math.floor(Math.random() * 10)
    return quoteObj[indx];
  }
  
  
   handleClick() {
    const randQuote = this.randomQuote();
    this.setState({
      quote: randQuote
    });
  }
  
  RandomColor(){
  
        var nums = '0123456789ABCDEF'.split('');
        var hash = '#';
        for (var i = 0; i < 6; i++ ) {
            hash += nums[Math.round(Math.random() * 15)];
        }
        return hash;
    }
  
  
          myFunction() {
  document.getElementById("quote-box").style.border = "15px solid white";
}
        
  
  
  render(){
    const randColor=this.RandomColor();
    const element = document.documentElement;
    
    element.style.backgroundColor = randColor;
      
    
    return(
      <>
      <body>
      <div  className="box" id="quote-box">
    <p id="text" style={{ color: randColor }}>"{this.state.quote[0]}"</p>
    <p  id="author" style={{ color: randColor }}>- {this.state.quote[1]}</p>
    <button class="btn"   id="new-quote" onClick={this.handleClick} style={{backgroundColor: randColor  }} ><span>New Quote</span></button>
    <a id="tweet-quote" href="https://twitter.com/intent/tweet?" target="_blank">
      <i class="fab fa-twitter fa-spin fa-2x fa-border fa-pull-left fa-2x" style={{ backgroundColor: randColor }}></i></a>
        
  </div> <p id="doneBy">Tsion Fitsum</p>
       
        </body>
      
       
        
        </>
     
      
    )
  }
 
  }

const el = document.querySelector("#root");
ReactDOM.render(<RandomQuote title="quote" />, el);
 