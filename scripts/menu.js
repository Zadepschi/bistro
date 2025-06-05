const searchInput = document.querySelector("#search");
const boxes = document.querySelectorAll(".box1");
const heads = document.querySelectorAll(".head");
const hrs = document.querySelectorAll("hr");
const buttons = document.querySelectorAll(".cta"); // кнопки "Add to cart"
const menuButtons = document.querySelector(".buttons"); // блок с меню-кнопками

searchInput.addEventListener("keyup", function (event) {
  const word = event.target.value.toLowerCase().trim();

  let found = false;

  boxes.forEach(item => {
    const name = item.querySelector(".name").textContent.toLowerCase();
    const match = name.includes(word);
    item.style.display = match ? "block" : "none";
    if (match) found = true;
  });

  if (word !== "") {
    heads.forEach(h => h.style.display = "none");
    hrs.forEach(hr => hr.style.display = "none");
    buttons.forEach(btn => btn.style.display = "none");
    menuButtons.style.display = "none"; // скрываем все навигационные кнопки
  } else {
    heads.forEach(h => h.style.display = "block");
    hrs.forEach(hr => hr.style.display = "block");
    buttons.forEach(btn => btn.style.display = "inline-block");
    menuButtons.style.display = "flex"; // возвращаем навигационные кнопки (или "block", если нужен другой стиль)
  }
});




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtnUp").style.display = "block";
    } else {
        document.getElementById("myBtnUp").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}