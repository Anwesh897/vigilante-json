var carousel = document.querySelector(".carousel");
var cellCount, theta;

var selectedIndex = 0;
rotateCarousel();

function rotateCarousel() {
  cellCount = 5;
  theta = 360 / cellCount;
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = "translateZ(-1000px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function() {
  selectedIndex--;
  rotateCarousel();
  function bgs() {
    var bgar = [
      "linear-gradient(to right,black,black,black,black)",
      "linear-gradient(to right,black,black,black,black)",
      "linear-gradient(to right,white,black,black,black)",
      "linear-gradient(to right,black,white,black,black)",
      "linear-gradient(to right,black,black,white,black)",
      "linear-gradient(to right,black,black,black,white)"
    ];
    var bgs = document.getElementById("mainId");
    bgs.style.background = bgar[5];
    setTimeout(function() {
      bgs.style.background = bgar[4];
    }, 50);
    setTimeout(function() {
      bgs.style.background = bgar[3];
    }, 100);
    setTimeout(function() {
      bgs.style.background = bgar[2];
    }, 150);
    setTimeout(function() {
      bgs.style.background = bgar[1];
    }, 200);
  }
  bgs();
});

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function() {
  selectedIndex++;
  rotateCarousel();
  function bgs() {
    var bgar = [
      "linear-gradient(to right,black,black,black,black)",
      "linear-gradient(to right,white,black,black,black)",
      "linear-gradient(to right,black,white,black,black)",
      "linear-gradient(to right,black,black,white,black)",
      "linear-gradient(to right,black,black,black,white)",
      "linear-gradient(to right,black,black,black,black)"
    ];
    var bgs = document.getElementById("mainId");
    bgs.style.background = bgar[1];
    setTimeout(function() {
      bgs.style.background = bgar[2];
    }, 50);
    setTimeout(function() {
      bgs.style.background = bgar[3];
    }, 100);
    setTimeout(function() {
      bgs.style.background = bgar[4];
    }, 150);
    setTimeout(function() {
      bgs.style.background = bgar[5];
    }, 200);
  }
  bgs();
});
