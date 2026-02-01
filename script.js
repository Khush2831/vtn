let currentPage = 0;
const pages = document.querySelectorAll(".page");

const introMusic = document.getElementById("introMusic");
const bgMusic = document.getElementById("bgMusic");

// Set volumes
introMusic.volume = 1.0;
bgMusic.volume = 0.4;

// Play intro music on first user interaction
document.addEventListener("click", () => {
    if (currentPage === 0 && introMusic.paused) {
        introMusic.play().catch(() => {});
    }
}, { once: true });

function nextPage() {
    // Transition from intro → main music
    if (currentPage === 0) {
        fadeOut(introMusic, () => {
            introMusic.pause();
            bgMusic.play().catch(() => {});
        });
    }

    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
}

// Smooth fade-out
function fadeOut(audio, callback) {
    let fade = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05;
        } else {
            clearInterval(fade);
            audio.volume = 0;
            if (callback) callback();
        }
    }, 150);
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
