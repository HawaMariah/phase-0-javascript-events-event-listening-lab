function addingEventListener() {
  const element = document.querySelector("#button");

  element.addEventListener("click", function () {
    alert("I was clicked!");
  });
}

addingEventListener();
