let pages=document.querySelectorAll(".page");
let index=0;

function showPage(i){
pages.forEach(p=>p.classList.remove("active"));
pages[i].classList.add("active");
}

function nextPage(){
if(index<pages.length-1){
index++;
showPage(index);
}
}

function prevPage(){
if(index>0){
index--;
showPage(index);
}
}

/* hearts animation */
function finalMagic(){

setInterval(()=>{
let h=document.createElement("div");
h.innerHTML="💖";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.bottom="0";
h.style.fontSize="20px";
h.style.animation="rise 5s linear";
document.body.appendChild(h);

setTimeout(()=>h.remove(),5000);

},200);

setTimeout(()=>{
document.getElementById("popup").style.display="flex";
},1000);
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
