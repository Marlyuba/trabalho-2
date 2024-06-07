alert("Bem-vindo!"); 

let valor1=Number(prompt("informe o valor"));
let valor2=Number(prompt("informe o valor 2"));
let menor, maior,resultado;
if(valor1>valor2){
  maior=valor1;
  menor=valor2;
}else{
  menor=valor1;
  maior=valor2;

};
resultado=maior-menor;
alert(resultado);
