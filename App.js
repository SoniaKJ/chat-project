var Chat = (function () {
 // Users
 let users = []

 let module = {}

 module.joinChat = function (user) {

   console.log ('User is trying to join:', user)

   let userAlreadyConnected = false

   for (let i = 0; i < users.length; i++) {
    //check if the user who is joining already is connected
     if (users[i] == user) {
      userAlreadyConnected = true
  }
 }

 if (userAlreadyConnected) {
   console.log('User aready connected:', user)
 } else {
  users.push(user)
 }
}

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////send message and serch for word///////////////
 let message = []

function ChatMessage(message, user) {
  this.message = messages
  this.user = users
  this.createdAt = new Date()
  }

let newMessage1 = new ChatMessage('Hello World!', 'Sonia')
let newMessage2 = new ChatMessage('Hello Hello', 'Sonia')
let newMessage3 = new ChatMessage('Hello', 'Sonia')
let newMessage4 = new ChatMessage('2', 'Sonia')

message.push(newMessage1)
message.push(newMessage2)
message.push(newMessage3)
message.push(newMessage4)
message.push(newMessage5)

console.log('All messages', message)
console.log('All users', user) // Did something

//when we want to search, in this case it is the number 2
let keyword = keyword.split('users', 'message') // Did something

let results = messages.filter(m=> {
  // does this current message match whan i'm looking for?
  // let keywords = keyword.split('')
  return m.message.indexOf(keyword) !== -1
})
 let results = users.filter(u=> { //Did something

 return u.users.indexOf(keyword) !== -1 //Did something

/*  //search function with lowercase and uppercase letters. DOES NOT WORK!////////////////////////////
  let searchBar = document.forms['search-users'].querySelector("#myInput");
  searchBar.addEventListener('keyup',function(e){
    let term = e.target.value.toLowerCase(); //Now we are comparing lowercase latters to lowercase letters.
  //now I want to go trhough the array of authors/users and compare it with the searchBar
  const authors = users.getElementsByTagName('li');
  //Now we want to know if the searchterm is contained with the titels of the authors/users, by turning this into an array:
  Array.from(users).forEach(function(user){
    let message = users.firstElementChild.textContent;
    //Now we want to check if the term is in the message
    if(message.ToLowerCase().indexOf(term)!= -1) {
      user.style.display = 'block';
      //now we want to make an else statement that can hide the message if it is = -1:
    } else {
      user.style.display = 'none';
    }
*/  ///////////////////////////////////////////////////////////////////////////////////////////////

})

})

console.log('Message results', results)

})

// Censor messages containing certain words////////////////////////////////////
let badWords = ['shit', 'crap'] // will not censor all the message, but only the word. Change to badword.

module.sendChat = function (chatMessage) {
  console.log ('A message is written:', message)
//check if bad word is in massage
let censor = false

for (let i = 0; i < badWords.length; i++) {
    if (chatMessage.message.indexOf(badWords[i]) != -1) {
        censor = true
    }
  }

//if not, push the message
if(censor) {
  console.log('message cannot contain bad words: ', message)
} else {
  messages.push(message)
}
}


return module

})()

Chat.joinChat('Sonia');
Chat.joinChat('Tanja');

Chat.sendChat('Hello');
Chat.sendChat('shit');
Chat.sendChat('You are a shit');
Chat.sendChat('crap');

//Chat.sendMessage('Hallo, my name is Sonia');

//Logout function

function logout(){
  console.log('leaving chat');
}

})
