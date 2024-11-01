
const searchInput = document.querySelector("#search");
const boxes = document.querySelectorAll(".box");


searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
  
    boxes.forEach(item => {
        item.querySelector(".name").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})




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