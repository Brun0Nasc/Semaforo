var vm = document.getElementById("vm");
var am = document.getElementById("am");
var ve = document.getElementById("ve"); 

function vermelho(){
    vm.style.backgroundColor="red";
    am.style.backgroundColor="rgb(131, 131, 131)";
    ve.style.backgroundColor="rgb(131, 131, 131)";
}

function amarelo(){
    am.style.backgroundColor="yellow";
    vm.style.backgroundColor="rgb(131, 131, 131)";
    ve.style.backgroundColor="rgb(131, 131, 131)";
}

function verde(){
    ve.style.backgroundColor="green";
    am.style.backgroundColor="rgb(131, 131, 131)";
    vm.style.backgroundColor="rgb(131, 131, 131)";
}

var i = 0;                

function myLoop() {         
  setTimeout(function() {
    console.log('hello');
    i++;
    if (i == 1) {
      vermelho();
    } else if(i == 2){
        amarelo();
    } else{
        verde();
        i = 0;
    }                 
  }, 1000)
}

myLoop(); 