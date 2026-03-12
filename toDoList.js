const inputField = document.querySelector("#taskInput");
const allList = document.querySelector("#unorderList");

let listarr = JSON.parse(localStorage.getItem("listarr")) || [];

listarr.forEach((doli) => {
  taskProje(doli.name, doli.checked);
});

let formArea = document.querySelector("form");

formArea.addEventListener("submit", (event) => {
  event.preventDefault();
  taskProje(inputField.value, false);
});

function taskProje(text, checked = false) {
  if (text.length === 0) return;

  let list = document.createElement("li");
  const icons1 = document.createElement("div");
  const icons2 = document.createElement("div");

  list.innerHTML = `<span>${text}</span>`;

  if (checked) {
    list.classList.add("done");
  }

  icons1.innerHTML = `<img class="img1 images" src="icons/trash.png" alt="" />`;
  icons2.innerHTML = `<img class="img2 images" src="icons/check.png" alt="" />`;

  list.append(icons1);
  list.append(icons2);

  allList.append(list);

  inputField.value = "";

  icons1.onclick = () => {
    list.remove();
    storData();
  };

  icons2.onclick = () => {
    list.classList.toggle("done");
    storData();
  };

  storData();
}

function storData() {
  const datas = document.querySelectorAll("li");

  listarr = [];

  datas.forEach((list) => {
    listarr.push({
      name: list.querySelector("span").innerText,
      checked: list.classList.contains("done"),
    });
  });

  localStorage.setItem("listarr", JSON.stringify(listarr));
}
