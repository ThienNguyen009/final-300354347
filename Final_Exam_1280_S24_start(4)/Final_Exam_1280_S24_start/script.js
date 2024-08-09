// get the date from the input field
var countDownDate = new Date('Aug 25,2024');

setInterval("getDate()", 1000)



function getDate() {
    
    
}

// start the countdown
function start() {
    
    var now = new Date()
    
    var timeDistance = countDownDate - now

    if(timeDistance<0)
    {
        document.getElementById('card').innerHTML = "Date is Expired"
    }
    
    else{
        
        var days = Math.floor(timeDistance/1000/60/60/24)
        var hours = Math.floor((timeDistance %(1000*60*60*24))/1000/60/60)
        var minutes = Math.floor((timeDistance %(1000*60*60))/1000/60)
        var seconds = Math.floor((timeDistance %(1000*60))/1000)
        
        var dicsecs = Math.floor(timeDistance %(1000*60))
        
        console.log('days: ',days)
        console.log('hours: ',hours)
        console.log('minutes: ',minutes)
        console.log('seconds: ',seconds)
        console.log('dicsecs: ',dicsecs)

        document.getElementById('days').innerHTML = days
        document.getElementById('hrs').innerHTML = hours
        document.getElementById('mins').innerHTML = minutes
        document.getElementById('secs').innerHTML = seconds
        document.getElementById('dicsecs').innerHTML = dicsecs


    }


    // Set the date we're counting down to

    // Update the count down every 0.1 second

        // Get today's date and time

        // Find the distance between now and the count down date

        // Time calculations for days, hours, minutes and seconds

        // Output the result in an element with id="demo"

        // If the count down is over, write some text 
        
}

