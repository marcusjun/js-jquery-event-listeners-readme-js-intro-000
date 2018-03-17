//define functions here

function getIt(){
  $('p').on('click',function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load',function(){
    //There is a jquery function to addClass(classname)
    //The classname should not start with . period
    //https://api.jquery.com/addClass/
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown',function(key){
    if (key.which===71){
      alert("G was pressed")
    }
  })
}

function submitIt(){
  $('form').on('submit',function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

  getIt()
  frameIt()
  pressIt()
  submitIt()

});
