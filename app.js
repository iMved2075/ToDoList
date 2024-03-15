btn = document.querySelector("button");
input = document.querySelector("input");
ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  li = document.createElement("li");
  li.innerText = input.value;
  delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("delete");
  li.appendChild(delbtn);
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    list = event.target.parentElement;
    list.remove();
  }
});