/*
    1. Date
    2. Auction status app
    3. Youtube Clone
*/

// let date = new Date();
// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())
// unix time/epoch time is the number seconds from 1970 Jan 1st 12:00AM

// getTime() => returns the number of milliseconds from the 1970 Jan 1st 12:00AM

// console.log(parseInt(date.getTime() / 1000)); 


// UNIX TIME OF 12 JUNE 2023 7:30:00am 

// let customeDate = new Date(2023, 5, 12, 7, 30, 0);
// console.log(customeDate)
// console.log(parseInt(customeDate.getTime() / 1000)) 

// let diffSeconds = parseInt((date - customeDate) / 1000);
// let difSeconds2 = (date.getTime() - customeDate.getTime()) / 1000;
// console.log({difSeconds2})
// console.log({diffSeconds})
// let totalSecondsPerDay = 24 * 60 * 60 ;
// console.log(parseInt(diffSeconds / totalSecondsPerDay)+" days")

/*
    UNIX Reference time
    1970 Jan 1st midnight 12:00AM = time1

    1970 Jan 1st Midnigh 12:02AM = time2 // 120s

    Jun 27 2023 8:32PM => x seconds

    UNIX base time => 12 June 7:30AM 2023 => x seconds
    UNIX base time => 23 June 7:30AM 2023 => y seconds


    y - x
*/

// 1970 Jan 01st 12:00AM
// 55*60*6 
// const unixDay = new Date(1970, 0, 1, 5, 30, 0); // IST
// console.log(unixDay.getTime())

// UTC 12:00PM => IST 12:00PM + 5hr:30min

// IST = 1970 Jan 01 05:30:00
// UTC = 1970 Jan 01 00:00:00AM

// IST = UTC + 5:30 hrs

// UTC = 1970 Jan 01 00:00:00
// IST = 1970 Jan 01 05:30:00
// IST = 1970 Jan 02 04:30:00AM
// UTC = 1970 Jan 01 11:00:00PM



// Auction Status APP 



const endpoint = `https://gauravgitacc.github.io/postAppData/auctionData.json`
const container = document.getElementById("container");

let backgroundColorMapping = {
    "APPROVED" : "blue",
    "PENDING" : "yellow",
    "CANCELLED" : "red",
    "COMPLETED" : "green"
}

let textColorMapping = {
    "APPROVED" : "white",
    "PENDING" : "black",
    "CANCELLED" : "white",
    "COMPLETED" : "white"
}

function renderDataOntoUI(data){
    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card" ;
        const {status, caseNumber, fromLocation, toLocation, fare, date} = item ;

        function navigate(){
            let a = document.createElement("a");
            a.href = `./auction.html`;
            document.cookie = `caseNumber=${caseNumber}; path=/auction/auction.html`
            a.click();
        }
        
        card.innerHTML = `
                    <div class="top-container">
                        <div class="left">
                            <span class="badge" style="color: ${textColorMapping[status]}; background-color: ${backgroundColorMapping[status]}">${status}</span>
                            <span>${caseNumber}</span>
                        </div>
                        <div class="right" >
                            ${date}
                        </div>
                    </div>
                    <div class="bottom-container">
                        <p style="font-weight: 600;">${fromLocation}</p>
                        <p>${toLocation}</p>
                        <p class="price">${fare}</p>
                    </div>`;

        card.addEventListener("click", navigate);

        container.appendChild(card);

    })
}

async function fetchAuctionDetails(){
    try{
        const response = await fetch(endpoint, {method: 'GET'});
        const result = await response.json();
        // result = array of objects
        renderDataOntoUI(result);

    }
    catch(error){
        alert(error.message)
    }
    
}

fetchAuctionDetails();