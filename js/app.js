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
      <div style="display:flex; flex-direction:column; padding:0; background:transparent;">
        <div>
          ${st.image ? `
          <div style="position:relative; height:210px; overflow:hidden; margin-bottom:1.5rem;">
            <img src="${st.image}" alt="${st.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
            <div style="position:absolute; bottom:12px; left:12px; background:var(--royal-blue); color:#fff; padding:0.35rem 0.85rem; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
              <i class="fa-solid fa-location-dot"></i> ${st.type}
            </div>
          </div>
          ` : ''}
          <div>
            <span style="color:${st.status.includes('Sub-Parish') ? 'var(--gold)' : 'var(--royal-blue)'}; font-weight:600; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.6rem; display:inline-block;"><i class="fa-solid fa-church"></i> ${st.status}</span>
            <h3 style="font-size: 1.5rem; margin: 0.4rem 0 0.5rem; line-height:1.25; font-family:'Cinzel', serif;">${st.name}</h3>
            <p style="color: var(--text-gold); font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; border-left:3px solid var(--gold); padding-left:0.8rem;"><i class="fa-solid fa-shield-halved"></i> Patron: ${st.patron}</p>
            <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.7; font-size:0.95rem;">${st.description}</p>
            <div style="background:var(--bg-secondary); padding:0.85rem 1rem; margin-bottom:1.5rem;">
              <p style="margin:0; font-size:0.88rem; color:var(--text-main);"><strong><i class="fa-solid fa-location-dot"></i> Location:</strong> ${st.location}</p>
              <p style="margin:0.4rem 0 0 0; font-size:0.88rem; color:var(--royal-blue);"><strong><i class="fa-solid fa-clock"></i> Sunday Mass:</strong> ${st.massTime}</p>
            </div>
          </div>
        </div>
        <div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-top:auto;">
          <a href="https://maps.google.com/?q=${encodeURIComponent(st.name + ' ' + st.location)}" target="_blank" class="btn btn-primary" style="flex:1; min-width:140px; justify-content:center; text-decoration:none;"><i class="fa-solid fa-map-location-dot"></i> Google Maps</a>
          <a href="https://wa.me/254720123456?text=${encodeURIComponent('Hello Fr. Eliud Jomo, I am inquiring about ' + st.name)}" target="_blank" class="btn btn-outline" style="flex:1; min-width:140px; justify-content:center; text-decoration:none;"><i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.1rem;"></i> WhatsApp Priest</a>
        </div>
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

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayName = daysOfWeek[new Date().getDay()];

    const liveBanner = `
      <div style="grid-column: 1 / -1; background:transparent; border:none; border-left:4px solid #1E8E3E; padding:1.25rem 1.5rem; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
        <div style="display:flex; align-items:center; gap:1rem;">
          <span style="display:inline-block; width:12px; height:12px; background:#1E8E3E; border-radius:50%; box-shadow:0 0 8px #1E8E3E;"></span>
          <div>
            <strong style="color:var(--text-main); font-size:1.05rem;">LITURGICAL STATUS TODAY (${todayName.toUpperCase()}): Ordinary Time — Liturgical Year C</strong>
            <p style="margin:0.2rem 0 0 0; font-size:0.88rem; color:var(--text-muted);">
              ${todayName === 'Sunday' ? 'Today is the Lord\'s Day! Masses at 7:00 AM (Kiswahili), 9:00 AM (English High Mass), and 11:30 AM (Youth & PMC).' : 'Daily Mass today at 6:30 AM in St. Thérèse Adoration Chapel & 5:30 PM in Main Sanctuary. Confessions available by request.'}
            </p>
          </div>
        </div>
        <button class="btn btn-outline" style="font-size:0.85rem;" onclick="alert('Parish Adoration Chapel is open daily from 6:00 AM to 7:00 PM for private Eucharistic adoration.')"><i class="fa-solid fa-clock"></i> Chapel Hours</button>
      </div>
    `;

    const cardsHtml = items.map(m => `
      <div style="display:flex; flex-direction:column; padding:0; background:transparent;">
        <div>
          ${m.image ? `
          <div style="position:relative; height:200px; overflow:hidden; margin-bottom:1.5rem;">
            <img src="${m.image}" alt="${m.title || m.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
            <div style="position:absolute; bottom:12px; left:12px; background:var(--royal-blue); color:#fff; padding:0.35rem 0.85rem; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
              <i class="fa-solid fa-clock"></i> ${m.day} • ${m.type}
            </div>
          </div>
          ` : ''}
          <div>
            <span style="color:var(--gold); font-weight:600; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.6rem; display:inline-block;"><i class="fa-solid fa-language"></i> ${m.language}</span>
            <h3 style="font-size: 1.45rem; margin: 0.4rem 0 0.5rem; line-height:1.25; font-family:'Cinzel', serif;">${m.time}</h3>
            <h4 style="color: var(--royal-blue); margin-bottom: 0.8rem; font-size: 1.15rem;">${m.title || m.name}</h4>
            <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.6; font-size:0.95rem;">${m.description || ''}</p>
            <div style="background:var(--bg-secondary); padding:0.85rem 1rem; margin-bottom:1.5rem;">
              <p style="margin:0; font-size:0.88rem; color:var(--text-main);"><strong><i class="fa-solid fa-location-dot"></i> Location:</strong> ${m.location}</p>
              <p style="margin:0.3rem 0 0 0; font-size:0.88rem; color:var(--text-main);"><strong><i class="fa-solid fa-language"></i> Liturgical Language:</strong> ${m.language}</p>
            </div>
          </div>
        </div>
        <div style="display:flex; gap:0.8rem; flex-wrap:wrap; margin-top:auto;">
          <button class="btn btn-primary" style="flex:1; min-width:140px; justify-content:center; border-radius:0;" onclick="sacramentalBooking.openBookingModal('Mass Intention: ${m.title || m.name}')"><i class="fa-solid fa-calendar-plus"></i> Book Mass Intention</button>
          <button class="btn btn-outline" style="flex:1; min-width:140px; justify-content:center; border-radius:0;" onclick="alert('Added ${m.title || m.name} (${m.time}) to your calendar reminder.')"><i class="fa-solid fa-bell"></i> Remind Me</button>
        </div>
      </div>
    `).join("");

    container.innerHTML = liveBanner + cardsHtml;
  }

  renderLeadership() {
    const container = document.getElementById("leadership-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.leadership.map(l => `
      <div class="info-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:0; overflow:hidden; border:1px solid var(--border-color); border-radius:12px; background:var(--bg-card);">
        <div>
          ${l.image ? `
          <div style="position:relative; height:240px; overflow:hidden; border-bottom:1px solid var(--border-color);">
            <img src="${l.image}" alt="${l.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
            <div style="position:absolute; bottom:12px; left:12px; background:rgba(11,60,111,0.88); color:#fff; padding:0.35rem 0.85rem; border-radius:4px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
              <i class="fa-solid fa-user-tie"></i> ${l.category}
            </div>
          </div>
          ` : ''}
          <div style="padding: 1.8rem;">
            <span class="badge badge-gold" style="margin-bottom:0.6rem;"><i class="fa-solid fa-cross"></i> ${l.role}</span>
            <h3 style="font-size: 1.5rem; margin: 0.4rem 0 0.5rem; line-height:1.25;">${l.name}</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.7; font-size:0.95rem;">${l.bio}</p>
            <div style="background:var(--bg-secondary); border-radius:6px; padding:0.85rem 1rem; border:1px solid var(--border-color);">
              <p style="margin:0; font-size:0.88rem; color:var(--text-main);"><strong><i class="fa-solid fa-phone"></i> Direct:</strong> ${l.phone}</p>
              <p style="margin:0.3rem 0 0 0; font-size:0.88rem; color:var(--royal-blue);"><strong><i class="fa-solid fa-envelope"></i> Email:</strong> ${l.email}</p>
            </div>
          </div>
        </div>
        <div style="padding: 0 1.8rem 1.8rem 1.8rem;">
          <a href="https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello ' + l.name + ', I would like to make an inquiry at Naiberi Parish.')}" target="_blank" class="btn btn-outline" style="width: 100%; justify-content:center; text-decoration:none;"><i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.1rem;"></i> WhatsApp Message</a>
        </div>
      </div>
    `).join("");
  }

  renderSacraments() {
    const container = document.getElementById("sacraments-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.sacraments.map((s, idx) => {
      const reqList = Array.isArray(s.requirements)
        ? `<div style="margin: 0.8rem 0 1.2rem 0; display:flex; flex-direction:column; gap:0.5rem;">` +
          s.requirements.map((r, ri) => `
            <div class="interactive-req" onclick="this.classList.toggle('req-checked')" style="display:flex; align-items:flex-start; gap:0.6rem; padding:0.6rem 0.8rem; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:6px; cursor:pointer; transition:var(--transition-fast);">
              <i class="fa-regular fa-square-check" style="color:var(--royal-blue); margin-top:3px; font-size:1.1rem;"></i>
              <span style="font-size:0.88rem; line-height:1.5; color:var(--text-main);">${r}</span>
            </div>
          `).join("") +
          `</div>`
        : `<p style="color:var(--text-muted); margin-bottom:1rem;">${s.requirements}</p>`;

      return `
        <div class="info-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:0; overflow:hidden; border:1px solid var(--border-color); border-radius:12px; background:var(--bg-card);">
          <div>
            ${s.image ? `
            <div style="position:relative; height:230px; overflow:hidden; border-bottom:1px solid var(--border-color);">
              <img src="${s.image}" alt="${s.title || s.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
              <div style="position:absolute; bottom:12px; left:12px; background:rgba(11,60,111,0.88); color:#fff; padding:0.35rem 0.85rem; border-radius:4px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
                <i class="fa-solid fa-church"></i> Canonical Parish Sacrament
              </div>
            </div>
            ` : ''}
            <div style="padding: 1.8rem;">
              <span class="badge badge-gold" style="margin-bottom:0.6rem;"><i class="fa-solid fa-dove"></i> Holy Mystery & Catechesis</span>
              <h3 style="font-size: 1.5rem; margin: 0.4rem 0 0.4rem; line-height:1.25;">${s.title || s.name}</h3>
              <p style="color: var(--text-gold); font-weight: 600; font-size: 0.95rem; margin-bottom: 1rem; border-left:3px solid var(--gold); padding-left:0.8rem;">${s.subtitle || s.description || ''}</p>
              
              <div style="margin-bottom: 1rem;">
                <strong style="color:var(--text-main); font-size: 0.92rem;"><i class="fa-solid fa-clipboard-check" style="color:var(--gold);"></i> Interactive Requirements Checklist (Click to Check Off):</strong>
                ${reqList}
              </div>

              <div style="background:var(--bg-secondary); border-radius:6px; padding:0.9rem 1rem; margin-bottom:1rem; border:1px solid var(--border-color);">
                <p style="margin:0; font-size:0.88rem; color:var(--text-main);"><strong style="color:var(--royal-blue);"><i class="fa-solid fa-calendar-days"></i> Schedule:</strong> ${s.schedule}</p>
                <p style="margin:0.4rem 0 0 0; font-size:0.88rem; color:var(--text-main);"><strong style="color:var(--royal-blue);"><i class="fa-solid fa-user-check"></i> Preparation:</strong> ${s.preparation}</p>
                ${s.coordinator ? `<p style="margin:0.4rem 0 0 0; font-size:0.88rem; color:var(--royal-blue);"><strong><i class="fa-solid fa-user-tie"></i> Coordinator:</strong> ${s.coordinator}</p>` : ''}
              </div>
            </div>
          </div>
          <div style="padding: 0 1.8rem 1.8rem 1.8rem; display:flex; gap:0.8rem; flex-wrap:wrap;">
            <button class="btn btn-primary" style="flex:1; min-width:140px; justify-content:center;" onclick="sacramentalBooking.openBookingModal('${s.title || s.name}')"><i class="fa-solid fa-calendar-check"></i> Book Sacrament Online</button>
            ${s.phone ? `<a href="https://wa.me/${s.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello ' + (s.coordinator || 'Parish Coordinator') + ', I am inquiring about sacramental preparation for ' + (s.title || s.name))}" target="_blank" class="btn btn-outline" style="flex:1; min-width:140px; justify-content:center; text-decoration:none;"><i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.1rem;"></i> WhatsApp Coordinator</a>` : ''}
            ${s.referenceUrl ? `<a href="${s.referenceUrl}" target="_blank" class="btn btn-outline" style="width:100%; display:inline-flex; justify-content:center; align-items:center; text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Official Shrine OCIA Reference</a>` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  renderMinistries() {
    const container = document.getElementById("ministries-container");
    if (!container) return;

    container.innerHTML = PARISH_DATA.ministries.map(m => `
      <div class="info-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:0; overflow:hidden; border:1px solid var(--border-color); border-radius:12px; background:var(--bg-card);">
        <div>
          ${m.image ? `
          <div style="position:relative; height:220px; overflow:hidden; border-bottom:1px solid var(--border-color);">
            <img src="${m.image}" alt="${m.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
            <div style="position:absolute; bottom:12px; left:12px; background:rgba(11,60,111,0.88); color:#fff; padding:0.35rem 0.8rem; border-radius:4px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;">
              <i class="fa-solid fa-users"></i> ${m.membersCount} Active Members
            </div>
          </div>
          ` : ''}
          <div style="padding: 1.8rem;">
            <span class="badge badge-gold" style="margin-bottom:0.6rem;"><i class="fa-solid fa-shield-halved"></i> Patron: ${m.patron}</span>
            <h3 style="font-size: 1.5rem; margin: 0.4rem 0 0.5rem; line-height: 1.25;">${m.name}</h3>
            ${m.tagline ? `<p style="color:var(--text-gold); font-weight:600; font-size:0.95rem; margin-bottom:1rem; border-left:3px solid var(--gold); padding-left:0.8rem;">${m.tagline}</p>` : ''}
            <p style="color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.7; font-size: 0.95rem;">${m.description}</p>
            <div style="background:var(--bg-secondary); border-radius:6px; padding:0.85rem 1rem; margin-bottom:0.5rem; border:1px solid var(--border-color);">
              <p style="margin:0; font-size:0.88rem; color:var(--text-main);"><strong><i class="fa-solid fa-clock"></i> Schedule:</strong> ${m.meetingTime}</p>
              ${m.leader ? `<p style="margin:0.3rem 0 0 0; font-size:0.88rem; color:var(--royal-blue);"><strong><i class="fa-solid fa-user-tie"></i> Leader:</strong> ${m.leader}</p>` : ''}
            </div>
          </div>
        </div>
        <div style="padding: 0 1.8rem 1.8rem 1.8rem; display:flex; gap:0.8rem; flex-wrap:wrap;">
          <button class="btn btn-primary" style="flex:1; min-width:140px; justify-content:center;" onclick="alert('Thank you! Your interest in joining ${m.name} has been received by the Parish Secretariat. You will receive an SMS confirmation.')"><i class="fa-solid fa-user-plus"></i> Join Ministry</button>
          ${m.whatsapp ? `<a href="https://wa.me/${m.whatsapp}?text=${encodeURIComponent('Hello ' + (m.leader || m.name) + ', I would like to inquire about joining ' + m.name)}" target="_blank" class="btn btn-outline" style="flex:1; min-width:140px; justify-content:center; text-decoration:none;"><i class="fa-brands fa-whatsapp" style="color:#25D366; font-size:1.1rem;"></i> WhatsApp Chair</a>` : ''}
        </div>
      </div>
    `).join("");
  }

  renderEvents() {
    const containers = [
      document.getElementById("events-container"),
      document.getElementById("home-events-container")
    ];

    const html = PARISH_DATA.events.map(e => `
      <div style="display:flex; flex-wrap:wrap; gap:1.5rem; padding: 1.5rem 0; border-bottom: 1px solid var(--border-color); align-items:flex-start;">
        <div style="flex:0 0 100px; text-align:left;">
          <span style="display:block; font-size:2.5rem; font-weight:700; color:var(--gold); line-height:1; font-family:'Cinzel', serif;">${e.date.split(' ')[1].replace(',', '')}</span>
          <span style="display:block; font-size:1rem; font-weight:600; color:var(--text-muted); text-transform:uppercase;">${e.date.split(' ')[0]}</span>
        </div>
        <div style="flex:1; min-width:280px;">
          <h3 style="font-size: 1.5rem; margin: 0 0 0.5rem 0; font-family:'Cinzel', serif;">${e.title}</h3>
          <p style="color: var(--royal-blue); font-weight: 600; margin-bottom: 0.8rem;"><i class="fa-solid fa-clock"></i> ${e.time} &nbsp;|&nbsp; <i class="fa-solid fa-location-dot"></i> ${e.location}</p>
          <p style="color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.7; font-size:0.95rem;">${e.description}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <span style="font-weight:700; color:var(--text-gold); font-size:0.9rem;"><i class="fa-solid fa-user-check"></i> ${e.organizer}</span>
            <button class="btn btn-gold" style="border-radius:0; padding:0.6rem 1.2rem; font-size:0.9rem;" onclick="alert('Instant QR Ticket generated for: ${e.title}. We look forward to seeing you!')"><i class="fa-solid fa-ticket"></i> Get Ticket</button>
          </div>
        </div>
      </div>
    `).join("");

    containers.forEach(container => {
      if (container) container.innerHTML = html;
    });
  }

  renderNews() {
    const containers = [
      document.getElementById("news-container"),
      document.getElementById("home-news-container")
    ];

    const html = PARISH_DATA.news.map(n => `
      <div style="display:flex; flex-wrap:wrap; gap:2rem; padding: 2rem 0; border-bottom: 1px solid var(--border-color); align-items:flex-start;">
        ${n.image ? `<img src="${n.image}" alt="${n.title}" style="flex:0 0 280px; width:280px; height:180px; object-fit:cover; border-radius:0; border:1px solid var(--border-color);" />` : ''}
        <div style="flex:1; min-width:300px;">
          <div style="display:flex; gap:1rem; align-items:center; margin-bottom:0.8rem; font-size:0.85rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">
            <span style="color:var(--royal-blue);">${n.category}</span>
            <span>•</span>
            <span>${n.date}</span>
          </div>
          <h3 style="font-size: 1.6rem; margin-bottom: 0.8rem; line-height: 1.35; font-family:'Cinzel', serif;">${n.title}</h3>
          <p style="color: var(--text-muted); line-height: 1.7; font-size: 0.95rem; margin-bottom: 1.5rem;">${n.summary}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
             <button class="btn btn-outline" style="border-radius:0; padding:0.6rem 1.2rem; font-size:0.9rem;" onclick="alert('Downloading Naiberi Parish Weekly Bulletin (PDF format) for ${n.date}...')"><i class="fa-solid fa-file-pdf"></i> Read Full Bulletin</button>
             <small style="color:var(--text-muted); font-size:0.85rem;">By ${n.author}</small>
          </div>
        </div>
      </div>
    `).join("");

    containers.forEach(container => {
      if (container) container.innerHTML = html;
    });
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
