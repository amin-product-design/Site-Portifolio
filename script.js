// ---------- Данные отзывов ----------
// Замени/дополни этот список своими реальными отзывами (текст ниже перенесён с макета).
const REVIEWS = [
  { name: "Елизавета Коршунова", text: "Замечательное место, печатала у них диплом, все оперативно сделали, на все вопросы ответили. Время ожидания комфортное. Сотрудник «Фотокопир» — профессионал своего дела! Печать и сшивка диплома качественная. Советую!", rating: 5 },
  { name: "Наталья В.", text: "В «Фотокопир» центре на Братиславской работают очень доброжелательные, отзывчивые менеджеры. Амин и Елизавета — отличный уровень сервиса, благодарю.", rating: 5 },
  { name: "Ярослав К.", text: "Фотокопир просто класс, все очень оперативно, работники очень отзывчивые. Особенно хочется выделить Амина за готовность помочь. Если бы можно было поставить 100 звёзд — поставили бы. Спасибо, спасатели!", rating: 5 },
  { name: "Катя Камиширо", text: "Персонал супер, все ребята вежливые и ответственные, особенно хотелось бы сказать про Амина в этом плане. Очень добрый и отзывчивый парень, спасибо ему огромное))", rating: 5 },
  { name: "Татьяна С.", text: "Замечательное место! Всё чётко и быстро, сотрудник Амин очень вежливый и приятный, а главное — отлично ретуширует фото.", rating: 5 },
  { name: "Даня", text: "Очень вежливый и исполнительный мастер. Учитывает все пожелания и оперативно вносит правки. Работой остался доволен и ещё обращусь за инфографикой.", rating: 5 },
  { name: "Вячеслав", text: "Очень оперативно и качественно. Всегда на связи. Человек понимает, что от него хотят, работать очень комфортно. Спасибо.", rating: 5 },
  { name: "я Артил", text: "Прекрасное место, сделали работу на высшем уровне, крайне доброжелательный работник подошёл к сложному заданию ответственно, спасибо!", rating: 5 },
  { name: "Амон Ш.", text: "Благодарю за качественную работу — она была проделана раньше обещанного срока и по доступной цене. Мастер своего дела, рекомендую.", rating: 5 },
  { name: "Жасмин", text: "Хочу поблагодарить вас, Амин, за грамотное и оперативное сотрудничество! Мне очень понравились ваши идеи по инфографике и привлекательные цены! Дальше буду обращаться только к вам. Спасибо!", rating: 5 },
];

function initials(name){
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase();
}

function renderReviews(){
  const grid = document.getElementById("reviewsGrid");
  if(!grid) return;

  const frag = document.createDocumentFragment();
  REVIEWS.forEach(r => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-head">
        <span class="review-avatar">${initials(r.name)}</span>
        <span class="review-name">${r.name}</span>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-foot">
        <span class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        <span>${r.rating.toFixed(2)} · отзыв на Яндекс</span>
      </div>
    `;
    frag.appendChild(card);
  });
  grid.appendChild(frag);
}

// ---------- Мобильное меню ----------
function initMobileNav(){
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("mobileNav");
  if(!burger || !nav) return;

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------- Год в футере ----------
function initYear(){
  const el = document.getElementById("year");
  if(el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  initMobileNav();
  initYear();
});
