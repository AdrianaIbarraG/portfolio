const nav = document.getElementById("nav-back-visible"); 
const openNav = document.getElementById("btn-open-nav"); 
const closeNav = document.getElementById("btn-close-nav"); 
const main = document.getElementById("main"); 
const menu = document.getElementsByTagName("a");

openNav.addEventListener("click", ()=>{
    nav.classList.add("visible"); 
}); 

closeNav.addEventListener("click", ()=>{
    closeMenu (); 
}); 

main.addEventListener("click", ()=>{
    closeMenu (); 
}); 

function closeMenu (){
    nav.classList.remove("visible"); 
}




