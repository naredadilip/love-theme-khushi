const messages = [
  "Tum meri life ka woh bug-free feature ho jo kabhi crash nahi hota. 💻❤️",
  "Agar love ek function hota na, uska default parameter tum hote. () => you. ✨",
  "Meri favorite dependency? import you from \"my-world\"; 🧡",
  "Meri duniya ka best commit: when our paths merged into one branch. 🌸",
  "Tum waise ho jaise clean code – jitna dekhu, utna aur respect bade. 🌙",
  "Console.log(\"I choose you.\"); and it runs every single day. 🔁",
  "Jab bhi dil lag karta hai, mera heart silently: git push love.origin main; 💌",
  "Tum ho toh sab warnings ignore ho jaati hain, sirf happiness compile hoti hai. 🌷",
  "Meri favorite constant: const forever = you; ✨",
  "Life ke repo me sabse beautiful file: /memories/with_you.txt 💫"
];

const bubble = document.getElementById("messageBubble");
const btn = document.getElementById("generateBtn");

function setRandomMessage() {
  const random = messages[Math.floor(Math.random() * messages.length)];
  bubble.textContent = random;

  // animation restart
  bubble.classList.remove("animate");
  void bubble.offsetWidth; // force reflow
  bubble.classList.add("animate");

  spawnHearts(26);
}

function spawnHearts(count) {
  const rect = bubble.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "burst-heart";

    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 60;

    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    span.style.left = centerX + "px";
    span.style.top = centerY + "px";
    span.style.setProperty("--tx", tx + "px");
    span.style.setProperty("--ty", ty + "px");

    document.body.appendChild(span);

    setTimeout(() => span.remove(), 900);
  }
}

btn.addEventListener("click", setRandomMessage);

// inline style for burst hearts:
const style = document.createElement("style");
style.textContent = `
  .burst-heart {
    position: fixed;
    width: 10px;
    height: 9px;
    background: radial-gradient(circle at 30% 20%, #fff7f9, #f472b6);
    transform: rotate(-45deg) translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.9));
    animation: heartBurst 0.9s ease-out forwards;
    z-index: 10;
  }
  .burst-heart::before,
  .burst-heart::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: inherit;
  }
  .burst-heart::before {
    top: -5px;
    left: 0;
  }
  .burst-heart::after {
    top: 0;
    left: 5px;
  }
  @keyframes heartBurst {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(-45deg) scale(0.7);
    }
    100% {
      opacity: 0;
      transform:
        translate(calc(-50% + var(--tx)), calc(-50% + var(--ty)))
        rotate(-45deg)
        scale(0.2);
    }
  }
`;
document.head.appendChild(style);