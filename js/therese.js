/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH
 * Patron Saint Interactive Shrine: The Little Way Novena & Virtual Rose Petal Animation (Zero Emojis - Vector Icons)
 */

class ThereseShrineController {
  constructor() {
    this.roseCount = parseInt(localStorage.getItem("naiberi_rose_count") || "1842", 10);
  }

  init() {
    this.updateRoseCounterDisplay();
  }

  offerSpiritualRose() {
    // 1. Increment counter
    this.roseCount += 1;
    localStorage.setItem("naiberi_rose_count", this.roseCount.toString());
    this.updateRoseCounterDisplay();

    // 2. Trigger audio chime
    if (typeof appController !== "undefined" && appController.playBellChime) {
      appController.playBellChime();
    }

    // 3. Create virtual shower of roses (Vector Icons instead of Emojis)
    const container = document.getElementById("rose-shower-container");
    if (!container) return;

    const icons = [
      '<i class="fa-solid fa-spa" style="color: #D32F2F;"></i>',
      '<i class="fa-solid fa-spa" style="color: #E91E63;"></i>',
      '<i class="fa-solid fa-cross" style="color: #C9A227;"></i>',
      '<i class="fa-solid fa-heart" style="color: #8B0000;"></i>',
      '<i class="fa-solid fa-dove" style="color: #0B3C6F;"></i>',
      '<i class="fa-solid fa-hand-holding-heart" style="color: #C9A227;"></i>'
    ];

    for (let i = 0; i < 18; i++) {
      setTimeout(() => {
        const petal = document.createElement("div");
        petal.className = "rose-petal";
        petal.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        petal.style.left = Math.random() * 95 + "%";
        petal.style.fontSize = (1.4 + Math.random() * 1.2) + "rem";
        petal.style.animationDuration = (2.8 + Math.random() * 2.2) + "s";

        container.appendChild(petal);

        setTimeout(() => {
          if (petal.parentNode) petal.remove();
        }, 4800);
      }, i * 150);
    }

    // 4. Reveal Novena Prayer Card
    const novenaCard = document.getElementById("novena-prayer-card");
    if (novenaCard) {
      novenaCard.style.display = "block";
      novenaCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  updateRoseCounterDisplay() {
    const el = document.getElementById("rose-counter-display");
    if (el) {
      el.textContent = this.roseCount.toLocaleString();
    }
  }
}

const thereseShrine = new ThereseShrineController();
