import { dataGlasses } from "./product.js";

const listGlasses = [];
const glassInfo = document.getElementById("glassesInfo");

dataGlasses.forEach((data) => {
  listGlasses.push({
    url: data.virtualImg,
  });
  vglassesList.innerHTML += `<div class="col-4 testGlasses" data-virtualsrc='${data.virtualImg}'">
    <img src=${data.src} width="100%" />
  </div>`;
});

const testGlass = document.getElementsByClassName("testGlasses");
[...testGlass].forEach((glass, index) => {
  glass.addEventListener("click", () => {
    testGlasses(glass.dataset.virtualsrc, true);
    localStorage.setItem(
      "glassJustTested",
      JSON.stringify(glass.dataset.virtualsrc)
    );
    glassInfo.innerHTML = `<h2>${dataGlasses[index].name}</h2>
    <small>${dataGlasses[index].brand}</small>
    <p class="vglasses__price">${dataGlasses[index].price} $</p>
    <p>
    ${dataGlasses[index].description}
    </p>`;
  });
});

function testGlasses(virtualLink, isOnEffect) {
  if (isOnEffect) {
    avatar.innerHTML = `<img src='${virtualLink}' />`;
    return;
  }
  avatar.innerHTML = "";
}

const effectAfter = document.getElementById("effectAfter");
const effectBefore = document.getElementById("effectBefore");

effectAfter.addEventListener("click", () => removeGlasses(true));
effectBefore.addEventListener("click", () => removeGlasses(false));

const removeGlasses = (isOnEffect) => {
  if (!isOnEffect) {
    testGlasses("", false);
    return;
  }
  testGlasses(JSON.parse(localStorage.glassJustTested), true);
};
