const buttons = document.querySelectorAll(`.counterBtn`);
const counter = document.querySelector(`.name`);

let count = 71;

function reset(){
  count = 71 ;
  counter.textContent = count;
  counter.style.color = `#333333`;
 
}

function add(){
  count = counter.textContent;
  count++;
  counter.textContent = count;
  if (count > 71) {
    counter.style.color = `green`;
  }
}


function sub(){
  count = counter.textContent;
  count--;
  counter.textContent = count;
  if (count < 71) {
    counter.style.color = `red`;
  }
  
}