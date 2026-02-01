let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
}

// NO button logic
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);
}

function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
