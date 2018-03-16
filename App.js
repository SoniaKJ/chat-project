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

//Search function from Henning!

let myMessage = []

function ChatMyMessage(myMessage, user){
this.myMessage = myMessage
this.user = user
this.createdAt = new Date()
}

let newMyMessage1 = new ChatMyMessage('Hi', Sonia)
let newMyMessage2 = new ChatMyMessage('hallo again', Sonia)

myMessages.push(newMyMessage1)
myMessages.push(newMyMessage2)

console.log('All messages', messages)

let keyword = "Hi" //we want it to be users and words in messages

let results = myMessages.filter(m => {

return m.mymessage.indexOf(keyword) !== -1
})

console.log('Message results', results)


// Censor messages containing certain words
let messages = ['shit']

module.sendChat = function (message) {
  console.log ('A message is written:', message)
//check if bad word is in massage
let badWordInMessage = false

  for (let i = 0; i < messages.length; i++) {
    if (messages[i] == message) {
        badWordInMessage = true
    }
  }

//if not, push the message
if(badWordInMessage) {
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

//Chat.sendMessage('Hallo, my name is Sonia');

//Logout function

function logout (){
  console.log('leaving chat');
}
//function sendMessage (){
  //console.log('Sending message');
//}
