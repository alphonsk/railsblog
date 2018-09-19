window.users = function(){
  console.log('hi everyone')
  var buttons = document.getElementById("button");

  function clickMe(event){
    console.log('clicked!');
  }
  if (buttons){
    buttons.addEventListener('click', clickMe);
  }

}
