!function(){
  var model = {
    // 获取数据
    init: function(){
      var APP_ID = 'gHMOm7VinvnlhdApv0ewwGMr-gzGzoHsz'
      var APP_KEY = 'PNqg6CmtkIEWlI9A3iKjjuWy'
      AV.init({ appId: APP_ID, appKey: APP_KEY })
    },
    fetch: function(){ 
      var query = new AV.Query('Message');
      return query.find() // Promise 对象
    },
    // 创建数据
    save: function(name, content){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({  // Promise 对象
        'name': name,
        'content': content
      })
    }
  }

  var view = document.querySelector('section.message')


  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function(view, model){
      this.view = view
      this.model = model

      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function(){
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item)=> item.attributes )
          array.forEach((item)=>{
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.appendChild(li)
          })
        } 
      )
    },
    bindEvents: function(){
      this.form.addEventListener('submit', function(e){
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function(){
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save(name, content).then(function(object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(object)
      })
    }

  }

  controller.init(view, model)


}.call()
/*

var APP_ID = 'gHMOm7VinvnlhdApv0ewwGMr-gzGzoHsz';
var APP_KEY = 'PNqg6CmtkIEWlI9A3iKjjuWy';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
/*
var query = new AV.Query('Message');
query.find()
  .then(
     function(message){
     	let array = message.map((item)=> item.attributes)
     	array.forEach((item)=>{
     		let li = document.createElement('li')
     		li.innerText = `${item.name}: ${item.content}`
     		let messageList = document.querySelector('#messageList')
     		messageList.appendChild(li)
        })
     }
  	)

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function(e){
	e.preventDefault()
	let content = myForm.querySelector('input[name=content]').value
	let name = myForm.querySelector('input[name=name]').value
	var Message = AV.Object.extend('Message');
	var message = new Message();
	message.save({
		'name': name,
		'content': content
    }).then(function(object){
    	let li = document.createElement('li')
     		li.innerText = `${object.attributes.name}: ${object.attributes.content}`
     		let messageList = document.querySelector('#messageList')
     		messageList.appendChild(li)
    	alert('您的留言已收到，空闲时会给您回复，谢谢！')
    })
})*/