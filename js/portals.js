/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH
 * Member Portal, Government-Grade Admin Portal & Sacramental Appointment System
 */

class MemberPortalController {
  constructor() {
    this.isLoggedIn = true;
    this.member = {
      id: "NP-2026-0482",
      name: "Mr. John Kiprono & Family",
      jumuiya: "St. Joseph Small Christian Community (SCC)",
      status: "Active Baptized Communicant",
      sacraments: ["Baptism (1994)", "First Holy Communion (2003)", "Confirmation (2007)", "Holy Matrimony (2018)"],
      phone: "+254 722 888 999",
      email: "john.kiprono@naiberiparish.or.ke"
    };
  }

  init() {
    this.renderMemberDashboard();
  }

  renderMemberDashboard() {
    const infoContainer = document.getElementById("member-profile-info");
    if (!infoContainer) return;

    infoContainer.innerHTML = `
      <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap; margin-bottom:1.5rem;">
        <div style="width:72px; height:72px; border-radius:50%; background:var(--royal-blue); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.8rem; font-weight:bold; border:3px solid var(--gold);">
          JK
        </div>
        <div>
          <h3 style="margin:0; font-size:1.4rem;">${this.member.name}</h3>
          <p style="color:var(--text-gold); font-weight:600; margin:0.2rem 0;">${this.member.jumuiya}</p>
          <span class="badge badge-green">${this.member.status}</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-top:1.5rem;">
        <div style="padding:1rem; background:var(--bg-secondary); border-radius:12px; border:1px solid var(--border-color);">
          <small style="color:var(--text-muted); text-transform:uppercase;">Parishioner ID</small>
          <p style="font-weight:700; font-size:1.1rem; color:var(--royal-blue);">${this.member.id}</p>
        </div>
        <div style="padding:1rem; background:var(--bg-secondary); border-radius:12px; border:1px solid var(--border-color);">
          <small style="color:var(--text-muted); text-transform:uppercase;">Contact Number</small>
          <p style="font-weight:700; font-size:1.1rem;">${this.member.phone}</p>
        </div>
      </div>
    `;

    // Render certificates
    const certList = document.getElementById("member-sacraments-list");
    if (certList) {
      certList.innerHTML = this.member.sacraments.map(sac => `
        <li style="padding:0.8rem 0; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
          <span><strong>${sac}</strong> — Naiberi Parish Registry</span>
          <button class="btn btn-outline" style="padding:0.3rem 0.8rem; font-size:0.75rem;" onclick="alert('Digital Certificate Verified & Sealed by Parish Secretariat.')">View Certificate</button>
        </li>
      `).join("");
    }
  }

  showQRIDCard() {
    const modal = document.getElementById("qr-id-modal");
    if (modal) {
      document.getElementById("qr-card-name").textContent = this.member.name;
      document.getElementById("qr-card-id").textContent = `ID: ${this.member.id}`;
      document.getElementById("qr-card-scc").textContent = this.member.jumuiya;
      modal.classList.add("open");
    }
  }
}

class AdminPortalController {
  constructor() {
    this.pendingBookings = [
      { id: "BK-101", type: "Sacrament of Baptism", applicant: "Paul & Grace Tanui", date: "Aug 29, 2026", status: "Pending SCC Verification" },
      { id: "BK-102", type: "Wedding Counseling", applicant: "David & Mercy Chepkemoi", date: "Sep 04, 2026", status: "Approved by Fr. Eliud Jomo" },
      { id: "BK-103", type: "Mass Intention (Thanksgiving)", applicant: "St. Monica CWA Group", date: "Aug 02, 2026", status: "Pending Secretariat" }
    ];
  }

  init() {
    this.renderAdminQueue();
  }

  renderAdminQueue() {
    const tableBody = document.getElementById("admin-booking-queue-table");
    if (!tableBody) return;

    tableBody.innerHTML = this.pendingBookings.map((item, idx) => `
      <tr>
        <td><strong>${item.id}</strong></td>
        <td>${item.type}</td>
        <td>${item.applicant}</td>
        <td>${item.date}</td>
        <td>
          <span class="badge ${item.status.includes('Approved') ? 'badge-green' : 'badge-gold'}">${item.status}</span>
        </td>
        <td>
          <button class="btn btn-primary" style="padding:0.35rem 0.8rem; font-size:0.75rem;" onclick="adminPortal.approveBooking(${idx})">Approve</button>
        </td>
      </tr>
    `).join("");
  }

  approveBooking(idx) {
    this.pendingBookings[idx].status = "Approved by Fr. Eliud Jomo";
    this.renderAdminQueue();
    alert(`Appointment ${this.pendingBookings[idx].id} has been officially approved and a confirmation SMS sent to the parishioner.`);
  }
}

class SacramentalBookingController {
  openBookingModal(sacramentName) {
    const modal = document.getElementById("sacrament-booking-modal");
    if (!modal) return;

    const titleEl = document.getElementById("booking-sacrament-title");
    if (titleEl) titleEl.textContent = `Online Booking: ${sacramentName}`;

    modal.classList.add("open");
  }

  submitBooking(event) {
    event.preventDefault();
    const name = document.getElementById("book-name") ? document.getElementById("book-name").value : "Parishioner";
    const type = document.getElementById("booking-sacrament-title") ? document.getElementById("booking-sacrament-title").textContent : "Sacramental Appointment";

    alert(`Thank you, ${name}! Your request for "${type}" has been submitted to the Naiberi Parish Secretariat for review. You will receive an SMS and email notification.`);

    const modal = document.getElementById("sacrament-booking-modal");
    if (modal) modal.classList.remove("open");
  }
}

const memberPortal = new MemberPortalController();
const adminPortal = new AdminPortalController();
const sacramentalBooking = new SacramentalBookingController();
