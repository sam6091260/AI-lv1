$(function () {
  $("#BackTop").click(function () {
    $("html, body").scrollTop(0);
  });
});

const hbgBtn = document.querySelector(".hbgIcon");
const nav = document.querySelector(".navbar");
hbgBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,
  });
});

// axios
//   .get("https://2023-engineer-camp.zeabur.app/api/v1/works")
//   .then(function (res) {
//     console.log(res.data);
//   });

// 資料串接
const apiPath = "https://2023-engineer-camp.zeabur.app";
const list = document.querySelector("#list");

const data = {
  type: "",
  sort: 0,
  page: 1,
  search: "",
};

let worksData = [];
let pagesData = {};

function getData({ type, sort, page, search }) {
  const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${
    type ? `type=${type}&` : ""
  }${search ? `search=${search}` : ""}`;
  axios.get(apiUrl).then((res) => {
    worksData = res.data.ai_works.data;
    pagesData = res.data.ai_works.page;

    renderWorks();
  });
}

getData(data);

// 作品選染至畫面
function renderWorks() {
  let works = "";

  worksData.forEach((item) => {
    works += /*html*/ `<li>
    <div class="card-img">
      <img
        src="${item.imageUrl}" alt="ai image"
      />
    </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="cardP">${item.description}</p>
    <div class="card-item">
      <p class="card-subtitle">AI 模型</p>
      <p class="card-text">${item.model}</p>
    </div>
    <div class="card-item">
        <span class="card-text">#${item.type}</span>
        <a class="card-link" href="${item.link}" target="_blank">
        <span class="material-icons"> share</span>
    </div>
  </li>
  `;
  });

  list.innerHTML = works;
}
