/*
1.localStorage
2.sessionStorage
3.Cookie Storage
*/

/*
    login page () => {isValidCredentials: true}
    {email: "", password: ""}

    details page (user details)

    to fetch the details i need to send the information about who i am {email: "", username: ""}

    Storage elements are used to share the data accross multiple webpages of a website.
*/

/*
1. localStorage is pemenant
    {key: value} => key and value both needs to be string datatype
    localStorage.setItem("key", "value") // used for creating and updating 
    localStorage.getItem("key") // this function returns the value of `key`
    localStorage.removeItem("key") // removes the item with key = `key`

2. sessionStorage
    much like localStorage but it will be erased upon closing the website/browser.

3. cookie storage

*/


/*
    login.html (/login.html)
        document.cookie = "user=aravind; path=/details.html"

    signup.html (/signup.html)

    home.html (/home.html)

    details.html (/details.html)

    cookie storage is permenant storage just like localStorage and we can erase it  after a specific time. 
    cookie can be specified to a particular page in the website instead of sprading it accross the entire website.

*/