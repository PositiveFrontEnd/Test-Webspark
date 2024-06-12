const listImg = document.querySelector(".cards__list__img");
const tablesImg = document.querySelector(".cards__tables__img");
const tables = document.querySelector(".tables");
const list = document.querySelector(".list");

function handleMediaQueryChange(event) {
  if (event.matches) {
    if (tables.style.display === "grid") {
      tables.style.display = "none";
      tablesImg.classList.remove("active");
      list.style.display = "flex";
      listImg.classList.add("active");
    }
  }
}
const mediaQuery = window.matchMedia("(max-width: 740px)");

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);

listImg.addEventListener("click", () => {
  if (listImg.classList.contains("active")) return;

  list.style.display = "flex";
  listImg.classList.add("active");
  listImg.style.cursor = "default";
  tables.style.display = "none";
  tablesImg.classList.remove("active");
  tablesImg.style.cursor = "pointer";
});

tablesImg.addEventListener("click", () => {
  if (tablesImg.classList.contains("active")) return;

  tables.style.display = "grid";
  tablesImg.classList.add("active");
  tablesImg.style.cursor = "default";
  list.style.display = "none";
  listImg.classList.remove("active");
  listImg.style.cursor = "pointer";
});
