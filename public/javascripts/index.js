function menuFix() {
    var getAllLi = document.getElementById("nav").getElementsByTagName("li");

    console.log(getAllLi);
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
        }//当捕捉到sfhover这个class时，就用“ ”来替换掉它，即，此时的class=" "
    }
}
window.onload = menuFix;
