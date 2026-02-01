let currentPage = 0;
const pages = document.querySelectorAll(".page");

/* Music */
const introMusic = document.getElementById("introMusic");
const bgMusic = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {
    if (currentPage === 0 && introMusic.paused) introMusic.play().catch(()=>{});
}, { once:true });

function nextPage() {
    if (currentPage === 0) {
        introMusic.pause();
        bgMusic.play().catch(()=>{});
    }
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
    updateDots();
}

/* Typing effects */
const typing = "Hey You 💖";
let i = 0;
(function typeIntro(){
    if (i < typing.length) {
        document.getElementById("typing").textContent += typing[i++];
        setTimeout(typeIntro,120);
    }
})();

const lastText = "There’s one thing I’ve been meaning to ask…";
let j = 0;
function typeLast(){
    if (j < lastText.length) {
        document.getElementById("lastTyping").textContent += lastText[j++];
        setTimeout(typeLast,120);
    }
}

/* Compliments */
const compliments = [
    "You make ordinary days special 💕",
    "You are my favorite thought 🫶",
    "You feel like home ❤️",
    "Life is better with you ✨"
];

function newCompliment() {
    document.getElementById("compliment").textContent =
        compliments[Math.floor(Math.random()*compliments.length)];
}

/* NO button */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.transform =
            `translate(${Math.random()*180-90}px, ${Math.random()*80-40}px)`;
    });
}

/* Confetti */
function yesClicked() {
    launchConfetti();
    nextPage();
}

function launchConfetti() {
    for (let i=0;i<50;i++){
        const c=document.createElement("div");
        c.textContent="🎉";
        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.animation="fall 2s linear";
        document.body.appendChild(c);
        setTimeout(()=>c.remove(),2000);
    }
}

const style=document.createElement("style");
style.innerHTML=`@keyframes fall{to{transform:translateY(100vh);opacity:0}}`;
document.head.appendChild(style);

/* Envelope */
function openEnvelope() {
    document.querySelector(".envelope").style.display="none";
    document.getElementById("letter").style.display="block";
}

/* Progress dots */
const progress=document.getElementById("progress");
pages.forEach(()=> {
    const d=document.createElement("span");
    d.className="dot";
    progress.appendChild(d);
});
function updateDots(){
    document.querySelectorAll(".dot").forEach((d,i)=>{
        d.classList.toggle("active", i===currentPage);
    });
}
updateDots();

/* Optimized hearts */
const heartContainer=document.getElementById("heart-container");
setInterval(()=>{
    if (heartContainer.children.length>=5) return;
    const h=document.createElement("div");
    h.className="heart";
    h.textContent="💖";
    h.style.left=Math.random()*90+"vw";
    h.style.animationDuration=6+Math.random()*4+"s";
    heartContainer.appendChild(h);
    setTimeout(()=>h.remove(),10000);
},2200);



/* ===============================
   PHOTO CAROUSEL (GENTLE)
================================ */
const photos = document.querySelectorAll(".carousel-photo");
let photoIndex = 0;

if (photos.length > 0) {
    setInterval(() => {
        photos[photoIndex].classList.remove("active");
        photoIndex = (photoIndex + 1) % photos.length;
        photos[photoIndex].classList.add("active");
    }, 2000); // 2 seconds per photo
}
