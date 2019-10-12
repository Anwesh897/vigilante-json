function carousel() {
  const myRequest = new XMLHttpRequest();
  myRequest.open("GET", "/Carousel section/test.html");
  myRequest.onload = () => {
    const myPage = myRequest.response;
    document.querySelector(".carousel").innerHTML = myPage;
  };
  myRequest.send();
}
carousel();
