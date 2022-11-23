function pintar(color){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = color;

}

pintar('yellow');


ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    ele.style.backgroundColor = 'green';            
});