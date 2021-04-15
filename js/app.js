var slideIndex = 0;
(function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}())

function displayProduct(isDisplayProduct) {
  var productList = document.getElementsByClassName("product-list");
  var product = document.getElementsByClassName("product");
  var slideshowContainer = document.getElementsByClassName("slideshow-container");
  var backToTop = document.getElementsByClassName("top");
  if (isDisplayProduct) {
    productList[0].style.display = 'none';
    backToTop[0].style.display = 'none';
    slideshowContainer[0].style.display = 'none';
    product[0].style.display = 'block';
  }
  else {
    productList[0].style.display = 'block';
    backToTop[0].style.display = 'block';
    slideshowContainer[0].style.display = 'block';
    product[0].style.display = 'none';
  }
}


