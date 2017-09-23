function changeColor(element){
  if(element.classList.contains('blue_text')){
    element.classList.remove('blue_text')
    element.classList.add('red_text')
    element.innerHTML = "This is red text."
  }else{
    element.classList.remove('red_text')
    element.classList.add('blue_text')
    element.innerHTML = "This is blue text."
  }
}
function changeCSS(element){
  if(element.style.color == "green"){
    element.style.color = "black"
    element.innerHTML = "This is black text."
  } else{
    element.style.color = "green"
    element.innerHTML = "This is green text."
  }
}
