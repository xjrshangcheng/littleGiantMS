function menuFix() {
    var getAllLi = document.getElementById("nav").getElementsByTagName("li");

    for (var i = 0; i < getAllLi.length; i++) {
        getAllLi[i].onmouseover = function() {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        }
        getAllLi[i].onMouseDown = function() {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        }
        getAllLi[i].onMouseUp = function() {
            this.className += (this.className.length > 0 ? " " : "") + "sfhover";
        }
        getAllLi[i].onmouseout = function() {
            this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"),"");
        }nvm
    }
}
window.onload = menuFix;
