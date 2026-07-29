/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH - APPLICATION CONTROLLER (ZERO EMOJIS - VECTOR ICONS)
 */

class AppController {
  constructor() {
    this.currentView = "home";
    this.theme = localStorage.getItem("naiberi_theme") || "light";
    this.audioCtx = null;
  }

  init() {
    this.applyTheme(this.theme);
    this.setupNavigation();
    this.renderAllViews();
    this.handleInitialHash();

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && document.getElementById(`view-${hash}`)) {
        this.navigateTo(hash, false);
      }
    });

    // Mobile swipe/close drawer on ESC
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeMobileDrawer();
        this.closeBellModal();
      }
    });
  }

  setupNavigation() {
    document.querySelectorAll(".nav-item, .mobile-nav-item, .drawer-item").forEach(item => {
      item.addEventListener("click", () => {
        const viewId = item.getAttribute("data-view");
        if (viewId) {
          this.navigateTo(viewId);
        }
      });
    });
  }

  navigateTo(viewId, updateHash = true) {
    if (!viewId) return;

    if (viewId === "mass-schedule") {
      this.currentView = "home";
      if (updateHash) {
        window.history.pushState(null, null, "#mass-schedule");
      }
      document.querySelectorAll(".view-section").forEach(sec => {
        sec.classList.remove("active");
      });
      const homeSection = document.getElementById("view-home");
      if (homeSection) homeSection.classList.add("active");

      setTimeout(() => {
        const massSec = document.getElementById("home-mass-schedule-section");
        if (massSec) {
          massSec.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      document.querySelectorAll(".nav-item, .mobile-nav-item, .drawer-item").forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-view") === "mass-schedule" || item.getAttribute("data-view") === "home") {
          item.classList.add("active");
        }
      });
      this.closeMobileDrawer();
      const mobileLinks = document.getElementById("nav-links");
      if (mobileLinks) mobileLinks.classList.remove("mobile-open");
      return;
    }

    this.currentView = viewId;

    if (updateHash) {
      window.history.pushState(null, null, `#${viewId}`);
    }

    // Show target view
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });

    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
      targetSection.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const homeSection = document.getElementById("view-home");
      if (homeSection) homeSection.classList.add("active");
    }

    // Update active state in nav (desktop & mobile bottom bar & drawer)
    document.querySelectorAll(".nav-item, .mobile-nav-item, .drawer-item").forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-view") === viewId) {
        item.classList.add("active");
      }
    });

    // Close mobile menu or drawer if open
    this.closeMobileDrawer();
    const mobileLinks = document.getElementById("nav-links");
    if (mobileLinks) mobileLinks.classList.remove("mobile-open");
  }

  toggleTheme() {
    this.theme = (this.theme === "light") ? "dark" : "light";
    localStorage.setItem("naiberi_theme", this.theme);
    this.applyTheme(this.theme);
  }

  applyTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    const themeIcon = document.getElementById("theme-toggle-icon");
    if (themeIcon) {
      themeIcon.innerHTML = (themeName === "dark") ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
  }

  toggleMobileMenu() {
    this.openMobileDrawer();
  }

  openMobileDrawer() {
    const overlay = document.getElementById("mobile-drawer-overlay");
    if (overlay) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  closeMobileDrawer(event) {
    const overlay = document.getElementById("mobile-drawer-overlay");
    if (overlay && (!event || event.target === overlay || event.target.classList.contains("icon-btn"))) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  // Web Audio API Synthesized Solemn Church Bell Chime
  playBellChime() {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      const now = this.audioCtx.currentTime;
      const frequencies = [220, 330, 440, 660, 880];

      frequencies.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.25 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now + (idx * 0.15));
        osc.stop(now + 4.6);
      });
    } catch (e) {
      console.warn("AudioContext chime error:", e);
    }
  }

  showBellModal() {
    const modal = document.getElementById("bell-chime-modal");
    if (modal) {
      modal.classList.add("open");
      this.playBellChime();
    }
  }

  closeBellModal() {
    const modal = document.getElementById("bell-chime-modal");
    if (modal) modal.classList.remove("open");
  }

  handleInitialHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash && document.getElementById(`view-${hash}`)) {
      this.navigateTo(hash, false);
    }
  }

  renderAllViews() {
    this.renderStations();
    this.renderMassSchedule("All");
    this.renderLeadership();
    this.renderSacraments();
    this.renderMinistries();
    this.renderEvents();
    this.renderNews();
    this.renderHomilies();
    this.renderLibrary("All");
    this.renderFAQs();
  }

  renderStations() {
    const container = document.getElementById("stations-container");
    if (!container || !PARISH_DATA.stations) return;

    container.innerHTML = PARISH_DATA.stations.map(st => `
      <div class="info-card" style="border-top: 4px solid ${st.status.includes('Sub-Parish') ? 'var(--gold)' : 'var(--royal-blue)'};">
        <div>
          <span class="badge ${st.status.includes('Sub-Parish') ? 'badge-gold' : 'badge-blue'}"><i class="fa-solid fa-church"></i> ${st.type}</span>
          <h3 style="font-size: 1.5rem; margin: 0.8rem 0 0.4rem;">${st.name}</h3>
          <p style="color: var(--text-gold); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem;"><i class="fa-solid fa-shield-halved"></i> Patron: ${st.patron}</p>
          <p style="color: var(--text-muted); margin-bottom: 1rem; line-height: 1.7;">${st.description}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-location-dot"></i> Location:</strong> ${st.location}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 1.5rem;"><strong><i class="fa-solid fa-clock"></i> Sunday Mass:</strong> ${st.massTime}</p>
        </div>
        <button class="btn btn-outline" style="width: 100%;" onclick="alert('Viewing directions & liturgical schedule for ${st.name}...')"><i class="fa-solid fa-map-location-dot"></i> Station Details & Map</button>
      </div>
    `).join("");
  }

  renderMassSchedule(filter = "All") {
    const container = document.getElementById("mass-schedule-container");
    if (!container) return;

    // Update button active state
    document.querySelectorAll(".mass-filter-btn").forEach(btn => {
      if (btn.getAttribute("data-filter") === filter) {
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-primary");
      } else {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
      }
    });

    const items = (filter === "All")
      ? PARISH_DATA.massSchedule
      : PARISH_DATA.massSchedule.filter(m => (m.category || m.type) === filter);

    container.innerHTML = items.map(m => `
      <div class="info-card">
        <div>
          <span class="badge badge-gold"><i class="fa-solid fa-clock"></i> ${m.day}</span>
          <h3 style="font-size: 1.4rem; margin: 0.8rem 0 0.4rem;">${m.time}</h3>
          <h4 style="color: var(--royal-blue); margin-bottom: 0.8rem; font-size: 1.15rem;">${m.title || m.name}</h4>
          <p style="color: var(--text-muted); margin-bottom: 0.8rem; line-height: 1.6;">${m.description || ''}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-location-dot"></i> Location:</strong> ${m.location}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 1.5rem;"><strong><i class="fa-solid fa-language"></i> Language:</strong> ${m.language}</p>
        </div>
        <button class="btn btn-outline" style="width:100%;" onclick="sacramentalBooking.openBookingModal('Mass Intention: ${m.title || m.name}')"><i class="fa-solid fa-calendar-plus"></i> Book Mass Intention</button>
      </div>
    `).join("");
  }

  renderLeadership() {
    const container = document.getElementById("leadership-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.leadership.map(l => `
      <div class="info-card">
        <div>
          <span class="badge badge-gold"><i class="fa-solid fa-cross"></i> ${l.role}</span>
          <h3 style="font-size: 1.5rem; margin: 0.8rem 0 0.4rem;">${l.name}</h3>
          <p style="color: var(--text-gold); font-weight: 600; margin-bottom: 0.8rem;">${l.category}</p>
          <p style="color: var(--text-muted); margin-bottom: 1rem; line-height: 1.7;">${l.bio}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-phone"></i> Direct:</strong> ${l.phone}</p>
          <p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 1.5rem;"><strong><i class="fa-solid fa-envelope"></i> Email:</strong> ${l.email}</p>
        </div>
        <a href="https://wa.me/${l.phone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-primary" style="background: #25D366; color: #fff; width: 100%;"><i class="fa-brands fa-whatsapp"></i> WhatsApp Message</a>
      </div>
    `).join("");
  }

  renderSacraments() {
    const container = document.getElementById("sacraments-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.sacraments.map(s => {
      const reqList = Array.isArray(s.requirements)
        ? `<ul style="margin: 0.4rem 0 1rem 1.2rem; padding:0; color:var(--text-muted); line-height:1.6;">` +
          s.requirements.map(r => `<li>${r}</li>`).join("") +
          `</ul>`
        : `<p style="color:var(--text-muted); margin-bottom:1rem;">${s.requirements}</p>`;

      return `
        <div class="info-card">
          <div>
            <span class="badge badge-gold"><i class="fa-solid fa-dove"></i> Sacrament & Catechesis</span>
            <h3 style="font-size: 1.5rem; margin: 0.8rem 0 0.4rem;">${s.title || s.name}</h3>
            <p style="color: var(--text-gold); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem;">${s.subtitle || s.description || ''}</p>
            <div style="margin-bottom: 1rem;">
              <strong style="color:var(--text-main); font-size: 0.92rem;"><i class="fa-solid fa-clipboard-check"></i> Sacramental Requirements:</strong>
              ${reqList}
            </div>
            <p style="color: var(--text-main); font-size: 0.92rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-calendar-days"></i> Schedule:</strong> ${s.schedule}</p>
            <p style="color: var(--text-main); font-size: 0.92rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-user-check"></i> Preparation:</strong> ${s.preparation}</p>
            ${s.coordinator ? `<p style="color: var(--royal-blue); font-size: 0.92rem; margin-bottom: 0.4rem;"><strong><i class="fa-solid fa-user-tie"></i> Coordinator:</strong> ${s.coordinator}</p>` : ''}
            ${s.phone ? `<p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 0.3rem;"><strong><i class="fa-solid fa-phone"></i> Direct Line:</strong> <a href="tel:${s.phone}" style="color:var(--royal-blue); font-weight:600;">${s.phone}</a></p>` : ''}
            ${s.email ? `<p style="color: var(--text-main); font-size: 0.9rem; margin-bottom: 1.2rem;"><strong><i class="fa-solid fa-envelope"></i> Email:</strong> <a href="mailto:${s.email}" style="color:var(--royal-blue);">${s.email}</a></p>` : ''}
          </div>
          <div>
            <button class="btn btn-gold" style="width: 100%; margin-bottom: 0.5rem;" onclick="sacramentalBooking.openBookingModal('${s.title || s.name}')"><i class="fa-solid fa-calendar-check"></i> Book Sacramental Enrollment</button>
            ${s.referenceUrl ? `<a href="${s.referenceUrl}" target="_blank" class="btn btn-outline" style="width: 100%; display:inline-block; text-align:center;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Official Shrine OCIA Reference</a>` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  renderMinistries() {
    const container = document.getElementById("ministries-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.ministries.map(m => `
      <div class="info-card">
        <div>
          <span class="badge badge-blue"><i class="fa-solid fa-users"></i> Parish Group / Apostolate</span>
          <h3 style="font-size: 1.5rem; margin: 0.8rem 0 0.4rem;">${m.name}</h3>
          ${m.tagline ? `<small style="color:var(--text-gold); font-weight:600; display:block; margin-bottom:0.8rem;">${m.tagline}</small>` : ''}
          <p style="color: var(--text-main); font-size: 0.92rem; margin-bottom: 0.6rem;"><strong><i class="fa-solid fa-shield-halved"></i> Patron:</strong> ${m.patron} • <strong>${m.membersCount} Active Members</strong></p>
          <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.7;">${m.description}</p>
          <p style="color: var(--text-main); font-size: 0.92rem; margin-bottom: 1.5rem;"><strong><i class="fa-solid fa-clock"></i> Meeting Time:</strong> ${m.meetingTime || m.meeting || 'See Sunday bulletin'}</p>
        </div>
        <button class="btn btn-primary" style="width: 100%;" onclick="alert('Thank you! Your interest in joining ${m.name} has been received by the Parish Secretariat. You will receive an SMS confirmation.')"><i class="fa-solid fa-user-plus"></i> Join This Catholic Group</button>
      </div>
    `).join("");
  }

  renderEvents() {
    const container = document.getElementById("events-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.events.map(e => `
      <div class="info-card">
        <div>
          <span class="badge badge-gold"><i class="fa-solid fa-calendar-days"></i> ${e.date}</span>
          <h3 style="font-size: 1.5rem; margin: 0.8rem 0 0.4rem;">${e.title}</h3>
          <p style="color: var(--royal-blue); font-weight: 600; margin-bottom: 0.8rem;">${e.time} • ${e.location}</p>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7;">${e.description}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <span style="font-weight:700; color:var(--text-gold);"><i class="fa-solid fa-user-check"></i> ${e.organizer}</span>
          <button class="btn btn-gold" onclick="alert('Instant QR Ticket generated for: ${e.title}. We look forward to seeing you!')"><i class="fa-solid fa-ticket"></i> Register & Get QR Ticket</button>
        </div>
      </div>
    `).join("");
  }

  renderNews() {
    const container = document.getElementById("news-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.news.map(n => `
      <div class="info-card">
        <div>
          <span class="badge badge-blue"><i class="fa-solid fa-newspaper"></i> ${n.category}</span>
          <small style="float:right; color:var(--text-muted);"><i class="fa-solid fa-calendar-days"></i> ${n.date}</small>
          <h3 style="font-size: 1.45rem; margin: 1rem 0 0.8rem; clear:both;">${n.title}</h3>
          <p style="color: var(--text-muted); line-height: 1.8; margin-bottom: 1.5rem;">${n.summary}</p>
        </div>
        <button class="btn btn-outline" style="width: 100%;" onclick="alert('Downloading Naiberi Parish Weekly Bulletin (PDF format) for ${n.date}...')"><i class="fa-solid fa-file-pdf"></i> Read Full Bulletin / Article</button>
      </div>
    `).join("");
  }

  renderHomilies() {
    const container = document.getElementById("homilies-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.homilies.map(h => `
      <div class="info-card">
        <div>
          <span class="badge badge-gold"><i class="fa-solid fa-microphone-lines"></i> ${h.liturgicalYear}</span>
          <small style="float:right; color:var(--text-muted);"><i class="fa-solid fa-calendar-days"></i> ${h.date}</small>
          <h3 style="font-size: 1.4rem; margin: 1rem 0 0.4rem; clear:both;">${h.title}</h3>
          <p style="color: var(--text-gold); font-weight: 600; margin-bottom: 0.8rem;"><i class="fa-solid fa-user"></i> By: ${h.preacher}</p>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;"><strong><i class="fa-solid fa-book-bible"></i> Readings:</strong> ${h.readings}</p>
        </div>
        <button class="btn btn-primary" style="width: 100%;" onclick="alert('Now playing audio homily: ${h.title} by ${h.preacher}. Audio stream loaded!')"><i class="fa-solid fa-circle-play"></i> Listen to Sermon Audio</button>
      </div>
    `).join("");
  }

  renderLibrary(category = "All") {
    const container = document.getElementById("library-container");
    if (!container) return;

    document.querySelectorAll(".library-filter-btn").forEach(btn => {
      if (btn.getAttribute("data-cat") === category) {
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-primary");
      } else {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline");
      }
    });

    const items = (category === "All")
      ? PARISH_DATA.library
      : PARISH_DATA.library.filter(l => l.category === category);

    container.innerHTML = items.map(l => `
      <div class="info-card">
        <div>
          <span class="badge badge-gold"><i class="fa-solid fa-file-pdf"></i> ${l.category}</span>
          <h3 style="font-size: 1.4rem; margin: 0.8rem 0 0.5rem;">${l.title}</h3>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 1.5rem; line-height: 1.6;">${l.description}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <span style="font-size:0.85rem; color:var(--text-muted);">Format: ${l.format} (${l.size})</span>
          <button class="btn btn-gold" onclick="alert('Downloading ${l.title} (${l.format} - ${l.size})...')"><i class="fa-solid fa-file-arrow-down"></i> Download PDF</button>
        </div>
      </div>
    `).join("");
  }

  renderFAQs() {
    const container = document.getElementById("faqs-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.faqs.map((f, i) => `
      <div class="info-card" style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; margin-bottom: 0.6rem; color: var(--royal-blue);"><i class="fa-solid fa-circle-question" style="color:var(--gold);"></i> ${f.question}</h3>
        <p style="color: var(--text-muted); line-height: 1.8; margin: 0;">${f.answer}</p>
      </div>
    `).join("");
  }
}

// Instantiate Global App Controller
const appController = new AppController();

document.addEventListener("DOMContentLoaded", () => {
  appController.init();
});
