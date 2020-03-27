 function make_big() {
   var img = this. firstElementChild;

   varbigImg = document.createElement("img");
   bigImg.src = img.src;

   document.getElementById("zoomed").appendChild(bigImg);


   document.getElementById("zoomed").classList.remove("hidden");
 }

 function close(){
  console.log("CLOSE!");
  document.getElementById("zoomed").classList.add("hidden");
 }

 var imges = document.getElemetsByClassName("small");
 for (i = 0; i < images.length; i++) {
   var currentImage = images [i];
   currentImage.addEventListener("click", make_big);
 }

 var closeButton = document.getElementById("close");
 closeButton.addEventListener("click", close);

}

//w3 schools
function currentSlide(n) {
  showSlides(slideIndex = n);
}
