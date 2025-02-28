const refs = {
    colorPalette: document.querySelector(".color-palette"),
    output: document.querySelector(".output"),
};

refs.colorPalette.addEventListener("click", selectColor);
function selectColor(e){
    if(e.target.nodeName !== "BUTTON"){
        return;
    }
    const selectedColor = e.target.dataset.color;
    refs.output.textContent = `Selected color: ${selectedColor}`;
    refs.output.style.color = selectedColor;
};


// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  refs.colorPalette.append(...items);
};

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
