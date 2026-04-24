const antipasti=document.getElementById("antipasti");
const primi=document.getElementById("primi");
const secondi=document.getElementById("secondi");

const btn1=document.getElementById("Antipasti");
const btn2=document.getElementById("Primi")
const btn3=document.getElementById("Secondi")



function cambio1(){
    antipasti.style.display="flex";
    primi.style.display="none";
    secondi.style.display="none";

}


function cambio2(){
   antipasti.style.display="none";
    primi.style.display="flex";
    secondi.style.display="none";

}


function cambio3(){
     antipasti.style.display="none"; 
    primi.style.display="none";
    secondi.style.display="flex";
}


btn1.addEventListener("click", cambio1);
btn2.addEventListener("click", cambio2);
btn3.addEventListener("click", cambio3);