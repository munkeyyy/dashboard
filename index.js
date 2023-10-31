let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("input");
let dd = document.getElementsByClassName("dropdown");
let flag = false;
searchBtn.addEventListener("click", () => {
  if (flag == false) {
    flag = true;
    searchInput.style.width = "290px";
    searchBtn.style.transform = "rotatey(12deg)";
  } else {
    flag = false;
    searchInput.style.width = "0px";
    searchBtn.style.transform = "rotatey(180deg)";
  }

  //   searchInput.class += "active";
  for (let i = 0; i < dd.length; i++) {
    if (flag == false) {
      dd[i].style.display = "block";
    } else {
      dd[i].style.display = "none";
    }
  }
});
// sidebar
let sidebar = document.getElementById("sidebar");
let menu_title = document.getElementsByClassName("menu-title");
let dashboards = document.getElementsByClassName("dashboards");

function condense(a) {
  let dash_cont = document.getElementById("dash-cont");
  let dash_icon = document.getElementsByClassName("dash-icon");
  let logo = document.getElementById("logo");
  a.style = "cursor:pointer";
  if (sidebar.style.width != "5%") {
    sidebar.style.width = "5%";
    dash_cont.style.marginLeft = "5vw";
    a.className = "ri-close-line";
    logo.style.display = "none";
    for (let i = 0; i < menu_title.length; i++) {
      menu_title[i].style = "text-indent:999em";
      menu_title[i].classList.add("underline");
    }
    for (let j = 0; j < dashboards.length; j++) {
      dashboards[j].style.paddingLeft = "0";
    }
    for (let k = 0; k < dash_icon.length; k++) {
      dash_icon[k].style.padding = "10px";
    }
  } else {
    sidebar.style.width = "18%";
    a.className = "ri-menu-line";
    for (let i = 0; i < menu_title.length; i++) {
      menu_title[i].style = "text-indent:0em";
      menu_title[i].classList.remove("underline");
    }
    for (let j = 0; j < dashboards.length; j++) {
      dashboards[j].style.paddingLeft = "0.8vw";
    }
    for (let k = 0; k < dash_icon.length; k++) {
      dash_icon[k].style.padding = "0px";
    }
    dash_cont.style.marginLeft = "18vw";
    logo.style.display = "block";
  }
}

// function increase(){

//   sidebar.style.width="18%"

// }
// function decrease(){

//   sidebar.style.width="5%"

// }

// dashboard dropdown
function expand(y) {
  let title = document.getElementById(`title${y}`);
  let body = document.getElementById(`body${y}`);
  if (body.style.height != "0px") {
    body.style.height = "0px";
    body.style.padding = "0px";
    title.childNodes[1].childNodes[3].style = "font-weight:400";
    title.childNodes[3].style.rotate = "0deg";
    console.log(title.childNodes[1].childNodes);
  } else {
    body.style.height = "auto";
    // body.style.display="block"
    title.childNodes[3].style.rotate = "180deg";
    title.childNodes[1].childNodes[3].style = "font-weight:600";
    body.style.padding = "0.5em 0 0 2rem";
  }
}

// variation btn

const btns = document.querySelectorAll(".btm-btn1");


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
  
    const currentActive = document.querySelector(".btm-btn2");
    if (currentActive) {
      currentActive.classList.remove("btm-btn2");
    }
    btn.classList.add("btm-btn2");
  });
});

  

