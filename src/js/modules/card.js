const cardsImg = [
  {
    img: "../../img/cards/Rectangle 9.png",
  },
  {
    img: "../../img/cards/Rectangle 10.png",
  },
  {
    img: "../../img/cards/Rectangle 11.png",
  },
  {
    img: "../../img/cards/Rectangle 12.png",
  },
  {
    img: "../../img/cards/Rectangle 13.png",
  },
  {
    img: "../../img/cards/Rectangle 14.png",
  },
  {
    img: "../../img/cards/Rectangle 15.png",
  },
  {
    img: "../../img/cards/Rectangle 16.png",
  },
];
function createCard(imgSrc) {
  const card = document.createElement("div");
  card.classList.add("tables__card");

  const cardImg = document.createElement("div");
  cardImg.classList.add("card__img");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "img";
  cardImg.appendChild(img);
  card.appendChild(cardImg);

  const cardTables = document.createElement("div");
  cardTables.classList.add("card__tables");

  const tablesToday = document.createElement("div");
  tablesToday.classList.add("tables__today");
  const todayText = document.createElement("p");
  todayText.classList.add("tables__item");
  todayText.textContent = "Today";
  const todayDate = document.createElement("p");
  todayDate.classList.add("tables__item");
  todayDate.textContent = "9-08-2016";
  tablesToday.appendChild(todayText);
  tablesToday.appendChild(todayDate);
  cardTables.appendChild(tablesToday);

  const tablesDate1 = document.createElement("div");
  tablesDate1.classList.add("tables__date");
  const tablesLikes1 = document.createElement("div");
  tablesLikes1.classList.add("tables__likes");

  const likesBox1 = document.createElement("div");
  likesBox1.classList.add("tables__box");
  const likesImg1 = document.createElement("img");
  likesImg1.classList.add("tables__img");
  likesImg1.src = "../../img/cards/ci_heart-fill.svg";
  likesImg1.alt = "heart";
  const likesText1 = document.createElement("span");
  likesText1.classList.add("tables__text");
  likesText1.textContent = "128";
  likesBox1.appendChild(likesImg1);
  likesBox1.appendChild(likesText1);

  const commentsBox1 = document.createElement("div");
  commentsBox1.classList.add("tables__box");
  const commentsImg1 = document.createElement("img");
  commentsImg1.classList.add("tables__img");
  commentsImg1.src = "../../img/cards/ic_round-mode-comment.svg";
  commentsImg1.alt = "comments";
  const commentsText1 = document.createElement("span");
  commentsText1.classList.add("tables__text");
  commentsText1.textContent = "31";
  commentsBox1.appendChild(commentsImg1);
  commentsBox1.appendChild(commentsText1);

  tablesLikes1.appendChild(likesBox1);
  tablesLikes1.appendChild(commentsBox1);
  tablesDate1.appendChild(tablesLikes1);
  cardTables.appendChild(tablesDate1);

  const tablesDate2 = document.createElement("div");
  tablesDate2.classList.add("tables__date");
  const tablesLikes2 = document.createElement("div");
  tablesLikes2.classList.add("tables__likes");

  const likesBox2 = document.createElement("div");
  likesBox2.classList.add("tables__box");
  const likesImg2 = document.createElement("img");
  likesImg2.classList.add("tables__img");
  likesImg2.src = "../../img/cards/ci_heart-fill.svg";
  likesImg2.alt = "heart";
  const likesText2 = document.createElement("span");
  likesText2.classList.add("tables__text");
  likesText2.textContent = "67";
  likesBox2.appendChild(likesImg2);
  likesBox2.appendChild(likesText2);

  const commentsBox2 = document.createElement("div");
  commentsBox2.classList.add("tables__box");
  const commentsImg2 = document.createElement("img");
  commentsImg2.classList.add("tables__img");
  commentsImg2.src = "../../img/cards/ic_round-mode-comment.svg";
  commentsImg2.alt = "comments";
  const commentsText2 = document.createElement("span");
  commentsText2.classList.add("tables__text");
  commentsText2.textContent = "22";
  commentsBox2.appendChild(commentsImg2);
  commentsBox2.appendChild(commentsText2);

  tablesLikes2.appendChild(likesBox2);
  tablesLikes2.appendChild(commentsBox2);
  tablesDate2.appendChild(tablesLikes2);
  cardTables.appendChild(tablesDate2);

  const tablesInfoDate = document.createElement("div");
  tablesInfoDate.classList.add("tables__infoDate");
  const uploadText = document.createElement("p");
  uploadText.classList.add("tables__item");
  uploadText.textContent = "Image upload";
  const uploadDate = document.createElement("p");
  uploadDate.classList.add("tables__text");
  uploadDate.textContent = "11-04-2016";
  tablesInfoDate.appendChild(uploadText);
  tablesInfoDate.appendChild(uploadDate);
  cardTables.appendChild(tablesInfoDate);

  card.appendChild(cardTables);

  return card;
}

const tables = document.querySelector(".tables");
cardsImg.forEach((imgSrc) => {
  console.log(imgSrc.img);
  tables.appendChild(createCard(imgSrc.img));
});
