window.onload=function(){

const form=document.querySelector("#form")
const numberInputA=document.querySelector("#campoA")
const numberInputB=document.querySelector("#campoB")



form.addEventListener("submit", (event)=>{
event.preventDefault();
if ((numberInputA.value) < (numberInputB.value)){
  alert("Formulário Válido");
}else {
  alert("Formulário inválido");
}
});
};
