let gamesqnc = [];
let usersqnc = [];
let started = false;
let level = 0;
let colorArray = ['red','yellow','green','purple'];

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
  if(started == false){
    started = true;
    console.log('start');
    levelUp();
  }
});

function levelUp(){
  usersqnc= [];
  level++;
  h2.innerText = `level ${level}`;

  let randomIndx = Math.floor(Math.random() * 3);
  let randomcolor = colorArray[randomIndx];
  let randmBtn = document.querySelector(`.${randomcolor}`);
  gamesqnc.push(randomcolor);
  // console.log(gamesqnc);
  btnflash(randmBtn);
}

function btnflash(btn){
  btn.classList.add('flash')
  setTimeout(function(){
    btn.classList.remove('flash');
  },250);
}

function userflash(btn){
  btn.classList.add('userflash')
  setTimeout(function(){
    btn.classList.remove('userflash');
  },250);
}


function checkfun(indx){
  if(gamesqnc[indx] == usersqnc[indx]){
    if(usersqnc.length == gamesqnc.length){
      setTimeout(levelUp,1000);
    }
  }else{
    h2.innerHTML = `game over!<b>your score is: ${level-1}</b> <br> press any key to restart`;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor = "white";
    },150);
    reset();
  }
}
function btnPress(){
  userflash(this);

  usercolor = this.getAttribute('id');
  usersqnc.push(usercolor);

  checkfun(usersqnc.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
  btn.addEventListener('click',btnPress);
}

function reset(){
  started = false;
  gamesqnc=[];
  usersqnc=[];
  level = 0;
}