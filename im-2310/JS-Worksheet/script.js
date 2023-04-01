/* How to show/hide an image?
    https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript */
function showImage(id) {
    var img = document.getElementById(id);
    img.style.visiblity = 'visible';
}



function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden'); 
    //from memory. this was a sort of binary/boolean array, if value is true OR false
}