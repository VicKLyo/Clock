 const timeContainer = document.querySelector('.time-container')
  const quote = document.querySelector('.quote')

  
 
let currentTime = () =>  {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let period = "AM"

    if (h == 0) {
    h = 12;
    }

    if (h > 12) {
    // h = h - 12;
    period = "PM" 
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;


    let time = h + ":" + m;

    
   
    

    timeContainer.innerText = time
    let t = setTimeout(function() {
        currentTime(), 1000
    });

    if (period == "AM") {
        const evening = document.querySelector('.evening');
        const morning = document.querySelector('.morning');
        evening.style.display = "none"  
        
    } else if (period == "PM") {
        const evening = document.querySelector('.evening');
        const morning = document.querySelector('.morning');
        morning.style.display = "none"  
    }
   
}

currentTime();

    async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    quote.textContent = ' " ' + data.content + ' " ' + ' - ' + data.author
    quote = setInterval(randomQuote, 30000)
}
    
randomQuote()
