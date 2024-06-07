alert("Bem-vindo!"); 
letnota1=Number(prompt("Indiquea nota do 1° bimestre:"));
letnota2=Number(prompt("Indiquea nota do 2° bimestre:"));
letnota3=Number(prompt("Indiquea nota do 3° bimestre:"));
letnota4=Number(prompt("Indiquea nota do 4° bimestre:"));
let total = (nota1 + nota2+ nota3 + nota4)/4;
const media = 5

if(total>=media){
alert('Aprovado${total}');
}else{
alert('reprovado${total}')
}
