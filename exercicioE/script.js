alert("Bem-vindo!"); 
let A = Number (prompt("informe o valor A"));
let B = Number (prompt("informe o valor B"));
let C = Number (prompt("informe o valor C"));
let delta = ((B**2) +((-1*4)*A*C))**(1/2);
let X1
let X2

if(isNaN(delta)){
   
  alert(Não" tem raiz");
}else
   if(delta==0){
    x1 = (-1*B/2*A);
    x2=x1;
    alert('O resultado é: x1=${x1} x2=${x2}');
   }
   if(delta>0){
   x1 = (-*B+delta)/(2*A);
   x2 = ((-1*B)+(-1*delta))/(2*A);
   alert('o resultado é: x1=${x1} x2={x2}');
}

}     