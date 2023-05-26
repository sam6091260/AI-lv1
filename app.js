$(function () {
  $("#BackTop").click(function () {
    $("html, body").scrollTop(0);
  });
});

const hbgBtn = document.querySelector(".hbgIcon");
const nav = document.querySelector("ul");
hbgBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// $(document).ready(function () {
//   //initialize swiper when document ready
//   var mySwiper = new Swiper(".swiper-container", {
//     // Optional parameters
//     direction: "vertical",
//     loop: true,
//   });
// });

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// 資料串接
// const apiPath =
//   "https://soa.tainan.gov.tw/Api/Service/Get/b1054400-86a4-40fa-aea0-fb39fce361e2";
// const list = document.querySelector("#list");

// const data = {
// type: "",
// sort: 0,
// page: 1,
// search: "",
//   school: "",
//   num: "",
// };
// type, sort, page, search

// let worksData = [];
// let pagesData = {};

// function getData({ school, num }) {
//   const apiUrl = `${apiPath}/?sort=${school}&num=${num}`;
//   axios.get(apiUrl).then((res) => {
//     worksData = res.data.ai_works.data;
//     pagesData = res.data.ai_works.page;

//     renderWorks();
//   });
// }
// getData(data);

// 作品選染至畫面
// function renderWorks() {
//   let works = "";

//   worksData.forEach((item) => {
//     works += /*html*/ `<li>
//     <div class="card-img">
//       <img
//         src="${item.imageUrl}" alt="ai image"
//       />
//     </div>
//       <h3 class="card-title">${item.title}</h3>
//       <p class="cardP">${item.description}</p>
//     <div class="card-item">
//       <p class="card-subtitle">AI 模型</p>
//       <p class="card-text">${item.model}</p>
//     </div>
//     <div class="card-item">
//         <span class="card-text">#${item.type}</span>
//         <a class="card-link" href="${item.link}" target="_blank">
//         <span class="material-icons"> share</span>
//     </div>
//   </li>
//   `;
//   });

//   list.innerHTML = works;
// }

axios
  .get(
    "https://soa.tainan.gov.tw/Api/Service/Get/b1054400-86a4-40fa-aea0-fb39fce361e2"
  )
  .then((response) => {
    const data = response.data;
    console.log(data);

    const totalCount = response.data.data.length;
    console.log("臺南市總共有", totalCount, "個國小");

    // 取得大甲國小的學生人數
    const schools = response.data.data;
    const daJiaSchool = schools.find(
      (school) => school.SchoolName === "大甲國小"
    );
    if (daJiaSchool) {
      const studentCount = daJiaSchool.NumberOfPeople;
      console.log("大甲國小學生人數:", studentCount);
    } else {
      console.log("找不到大甲國小的資料");
    }
  })
  .catch((error) => {
    console.log("發生錯誤:", error);
  });
