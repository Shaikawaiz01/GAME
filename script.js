let games=[];
let user=[];
let maxscore = document.querySelector("#maxscore");
let  btn = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2"); 
let body = document.querySelector("body");
let maxs = 0;
function max(max,now){
        if(max<now){
          max = now;
        }
        return max;
}

document.addEventListener("keypress",function(){
  if(!started){
   
    console.log("game started");
    started = true;
    levelup();
  }
});

function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
  }
function levelup(){
  user=[];
    level++;
  h2.innerText = `Level${level}`;
  let randominndex = Math.floor(Math.random()*4);
  let randColor = btn[randominndex];
  let randbtn = document.querySelector(`.${randColor}`);
  games.push(randColor);
  console.log(games);
  btnflash(randbtn);
}

function check(ind){
  if(user[ind]=== games[ind]){
    if(user.length==games.length){
         setTimeout(levelup,1000);
    }
  }else{
    maxs = max(maxs, level * 100);
    maxscore.innerHTML = `Max Score=${maxs}`;
    
    h2.innerHTML = `GAME OVER<br> Your Score <b>${level * 100}</b> <br> Max Score=${maxs}`;
    
    reset();
    body.style.backgroundColor="red";
    setTimeout(function(){
      body.style.backgroundColor="white";
    },150);
  }
}
function btnPress(){
 let btn = this;
 userflash(btn);
  usecolor = btn.getAttribute("id");
  user.push(usecolor);
  check(user.length-1);  
}

let albtns = document.querySelectorAll(".btn");
for(bt of albtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
  started = false;
  level = 0;
  games=[];
  user=[];
}