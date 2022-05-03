function appear(){
    var menu = document.getElementById('menu')
    if (menu.style.display === "none") {
        menu.style.display = "flex";  
    }else{
        menu.style.display = "none"
    }
  
  
}
function hide(){
    $("#menu").hide().animate({right: '0'});

}
