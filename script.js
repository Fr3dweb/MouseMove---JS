//Mouse events
const questionContainer = document.querySelector(".click-event");
const mousemove = document.querySelector(".mousemove")
//const a déclarer en haut mais on sépare pour l'exo
window.addEventListener("mousemove", (e)=>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () =>{
    mousemove.style.transform = "scale(2) translate(-25%,-25%)" ; //au click de la souris le mousemove passe à scale x2
});
window.addEventListener("mouseup", () =>{
    mousemove.style.transform = "scale(1) translate(-50%,-50%)" ; // au lacher du click le mousemove revient à scale 0
    mousemove.style.border = "3px solid red"
});

questionContainer.addEventListener("mouseenter", () =>{ //a l'entrée de la souris dans le container ca active une opacity
    questionContainer.style.opacity = "0.8";
})
questionContainer.addEventListener("mouseout", () =>{
    questionContainer.style.background = "#2a2827"; //au moment où la souris sort du container la couleur est changée 
})

response.addEventListener("mouseover", ()=>{       //rotate au momet du passage de la souris sur la reponse 
    response.style.transform = "rotate(2deg)";
})





































    






















    