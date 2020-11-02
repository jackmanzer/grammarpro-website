// /* Pagination */ 


document.getElementById("hamburger-menu").onclick = function() { 
   if (document.getElementById("body").style.position === "fixed") {
       document.getElementById("body").style.position = "static"; 
   } else {
       document.getElementById("body").style.position = "fixed";
   }
} 
   




function makeImageSwitcher(src) {
  return function() {
     document.getElementById('page-display').src = src 
  } 
}


var element_list = document.getElementsByClassName("page");
for(var i = 0; i < element_list.length; i++) {
   var cur_element = element_list[i];
   var large_src = cur_element.src.replace('-small', '-large')
   element_list[i].addEventListener('click', makeImageSwitcher(large_src))
}

var page_nav_list = document.getElementsByClassName("page-nav");
for(var i = 0; i < page_nav_list.length; i++) {
   var cur_element = page_nav_list[i];
   var large_src = "img/page" + cur_element.innerText  + "-large.png";
   page_nav_list[i].addEventListener('click', makeImageSwitcher(large_src))
}







