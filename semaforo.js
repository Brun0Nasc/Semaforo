var vm = document.getElementById("vm");
var am = document.getElementById("am");
var ve = document.getElementById("ve");
var i = 0;

function vermelho(){
    vm.style.backgroundColor="red";
    am.style.backgroundColor="rgb(131, 131, 131)";
    ve.style.backgroundColor="rgb(131, 131, 131)";
    i = 3;
}

function amarelo(){
    am.style.backgroundColor="yellow";
    vm.style.backgroundColor="rgb(131, 131, 131)";
    ve.style.backgroundColor="rgb(131, 131, 131)";
    i = 2;
}

function verde(){
    ve.style.backgroundColor="green";
    am.style.backgroundColor="rgb(131, 131, 131)";
    vm.style.backgroundColor="rgb(131, 131, 131)";
    i = 1;
}



setInterval(mudar, 3000);

function mudar(){
  if(i == 1){
    verde();
  } else if (i == 2){
    amarelo();
  } else {
    vermelho();
    i = 0
  }
  i++;
}