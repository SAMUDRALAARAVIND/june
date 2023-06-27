/*
1. fetch API
2. Storage elements
    i. localStrorage
    ii. sessionStorage
    iii. Cookie Storage
*/

/*
1. network calls

https://leetcode.com/accounts/xyz/


server (BE) of an application will have a set of endpoint and each endpoint is made a specific task.


https://leetcode.com/accounts/login
{
    username: "",
} => JSON.stringify()[runs on my browser]

(spring java, nodejs, python)
program(takes the request | data from the client)
response => {
    is_authorised: true,
    message: "Login success" | "Invalid credentials",
    status_code: 200 <= status < 300, 400 <= status < 500
}

404 => page not found / endpoint not found 
403 => forbidden error / unauthorised request
400 => bad request
database
500 <= status < 600
500 => internal server error
*/

/*
website (Student PORTAL)
Backend system which manages the student data 
website where users will iteract with the backend apis 

1. add students data into the database 
    https://domain.com/student/add => program (data) => saves tghe data in database
    huge or secured data => POST (create);

2. fetch all the students data from the database
    https://domain.com/student/all => program => fetches all the records from the database and sends to client.

    GET (read)
3. update info of students 
    https://domain.com/students/update => program 

    student_id: 378 , newData = {name: "Mayank Chowdary", course: "Bsc", age: 23}

    {
        status: 200,
        message: "Updated successfully"
    }
4. Delete info of a student
    https://domain.com/students/delete
        282


    students 

    student_id  name       course   age
        282     aravind     BTech    22
        378     mayank      Bsc      20
        891     aniket      MBA      90
*/
/*
Request: 
Endpoint/url,
requestMethod: "POST", "GET", "DELETE", "PUT"

POST => 
GET => 
DELETE => 
PUT => 

Ways of sending data from client to server:
3 ways to send data
1. Query parameters(all the request methods)
    {username: "", age: ""}
    https://google.com/api?username=aravind&age=22
    query parameters should be there at the end of the endpoint

2. Path parameters(all the request methods)
    https://domain.com/students/${pathvalue}/info/

3. Request Body(send some secured information)
    POST/PUT/DELETE we can't send request body in GET request
    JSON.stringify({
        username: "aravind",
        age: 22
    })
*/

// const endpoint = "https://leetcode.com/accounts/login/"
// const data = {
//     login: "Tanmay",
//     password: "abc@123"
// }
// const requestMethod = "POST"

// function fetch(url, httpConfig){
//     // makes the network call
//     return new Promise((resolve, reject) => {
//         // code the promise will be resolved when ever data is received from the server (may be after 3s)
//         resolve(serverResponse);

//         // reject()
//         // reject()
//     })
// }

// let response = fetch(endpoint, {
//     method: requestMethod, // default Method : GET
//     body: JSON.stringify(data)
// });
// console.log(response) // promise => {pending}
// response.then((data) => {
//     console.log("server response", {data})
// })

// response.catch((error) => {
//     console.log("some error occured", {error})
// })
// important code

/*

const pincode = 400093
const endpoint = `https://api.postalpincode.in/pincode/${pincode}` ;
const response = fetch(endpoint, {method: "GET"})
response.then(serverResponse => {
    console.log(serverResponse instanceof Response)
    let promise = serverResponse.json();
    promise.then((finalData) => {
        // finalData is the actual server response 
        console.log(finalData)
    })
})

statusCode: '',
detailsAbout the server:'',
Ip address: '',
data: {}

*/

/*
async function fetchPincodeDetails(){
    const pincode = 400093
    const endpoint = `https://api.postalpincode.in/pincode/${pincode}` ;

    const response = await fetch(endpoint, {method: "GET"})
    const result = await response.json();

    console.log(result)
}

fetchPincodeDetails();
*/


// fetching list of cities on search

/*
let searchString = "hyd";
let endpoint = `https://www.abhibus.com/SearchStations/?s=${searchString}`

async function fetchAllCities(){
    const response = await fetch(endpoint, {method: "GET"});
    const result = await response.json();
    console.log(result)
}
*/

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

const endpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

async function fetchStocksData(){
    const response = await fetch(endpoint, {method: "GET"});
    const result = await response.json();
    addDataOntoUI(result);
}
fetchStocksData();


function addDataOntoUI(serverResult) {
        for(let i = 0 ; i < serverResult.length ; i++){
            let {name, image} = serverResult[i] ;
            const div = document.createElement("div");
            div.innerHTML = `<span>${name}</span> <img src=${image} />`;
            document.body.appendChild(div);
        }
}