 const timeContainer = document.querySelector('.time-container')
 const greeter = document.querySelector('.greeter') 
 const quote = document.querySelector('.quote')
 const page = document.querySelector('.page-container')
 const content = document.querySelector('.container')


 async function currentTime(mins, currentQuote) {
    // get the current date
    const date = new Date()
    // store the current minutes so they can be used later to see if the time has changed
    const min = date.getMinutes()   
    // if there is no current quote, get one
    if (currentQuote === undefined) currentQuote = await randomQuote()
    // when the time has changed, update
    if (min !== mins) {
      const greeting = date.getHours() > 11 ? "afternoon" : "morning" 
     
      // change background depending on what time of the day it is
      if (date.getHours() > 17) {
        content.style.backgroundImage =  "url('night.jpg')"
      }
    

      // using the `Intl` object, we can get the time format a lot easier!
      let currentDate = new Intl.DateTimeFormat('en-US',{hour12: false, timeStyle: "short"}).format(date)
      
      greeter.textContent = `Good ${greeting}, It's currently`
      timeContainer.textContent = currentDate
      quote.textContent = currentQuote
      // get the next quote ready
      currentQuote = await randomQuote()
    }
    // loop again, passing the current min and the quote waiting to be used
    setTimeout(currentTime, 1000, min, currentQuote)
  }
  
  async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    return `"${data.content}" — ${data.author}`
  }
  
  currentTime()
  
