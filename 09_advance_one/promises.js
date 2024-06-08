const promiseOne = new  Promise(function(resolve, reject){
    setTimeout(() => {
      console.log('Promise 1 resolved');  
      resolve()
    }, 1000);
})

promiseOne.then(()=>{
    console.log('Promise 1 comsumed');
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
        reject()
    }, 1000)
}).then(()=>{
    console.log('Promise 2 consumed');
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : 'Nitin', email:'nitin@gmail.com'})
    }, 1000);
})

promiseTwo.then((user)=>{
 console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'nitin',age:25})
        }else{
            reject('ERROR: User not found')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:'javaScript',age:25})
        }else{
            reject('ERROR:js went wrrong')
        }
    }, 1000)
})


async function consumePromisefive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromisefive()


async function getallUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("ERROR: Unable to fetch data");
    }
}

// getallUsers()

fetch('https://api.github.com/users/INitinKushwaha')
.then((response)=>{
 return response.json()
}).then((data)=>{
    document.querySelector('#button').addEventListener('click',()=>{
        const h1 = document.querySelector('h1')
        h1.innerHTML = `Welcome ${data.login}`
    })
})
.catch((error)=>{
    console.log('ERROR: Unable to fetch data');
})

 
