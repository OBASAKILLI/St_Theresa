/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH
 * Interactive M-Pesa Giving Portal & Automatic PDF Receipt Generator
 */

class MPesaGivingPortal {
  constructor() {
    this.selectedFund = "Tithe & Weekly Thanksgiving";
    this.history = JSON.parse(localStorage.getItem("naiberi_donations_history") || "[]");
  }

  init() {
    this.renderDonationHistory();
  }

  selectFund(fundName, btnElement) {
    this.selectedFund = fundName;
    document.querySelectorAll(".fund-btn").forEach(btn => btn.classList.remove("btn-primary"));
    document.querySelectorAll(".fund-btn").forEach(btn => btn.classList.add("btn-outline"));
    if (btnElement) {
      btnElement.classList.remove("btn-outline");
      btnElement.classList.add("btn-primary");
    }
    const targetLabel = document.getElementById("selected-fund-label");
    if (targetLabel) targetLabel.textContent = `Selected Category: ${fundName}`;
  }

  simulateMPesaDonation(event) {
    event.preventDefault();
    const phoneInput = document.getElementById("mpesa-phone");
    const amountInput = document.getElementById("mpesa-amount");
    const nameInput = document.getElementById("mpesa-donor-name");
    const jumuiyaInput = document.getElementById("mpesa-jumuiya");

    const phone = phoneInput ? phoneInput.value.trim() : "";
    const amount = amountInput ? parseFloat(amountInput.value) : 0;
    const name = nameInput ? nameInput.value.trim() : "Anonymous Parishioner";
    const jumuiya = jumuiyaInput ? jumuiyaInput.value.trim() : "St. Joseph SCC";

    if (!phone || isNaN(amount) || amount < 10) {
      alert("Please enter a valid Kenya M-Pesa phone number (e.g. 0720123456) and an amount of at least KES 10.");
      return;
    }

    // Generate random M-Pesa confirmation code (e.g., SK74H89B21)
    const code = "SK" + Math.floor(10 + Math.random() * 89) + "N" + Math.random().toString(36).substring(2, 7).toUpperCase();
    const timestamp = new Date().toLocaleString("en-KE", { dateStyle: "medium", timeStyle: "short" });

    const transaction = {
      id: code,
      name: name || "Parishioner",
      phone: phone,
      amount: amount,
      fund: this.selectedFund,
      jumuiya: jumuiya,
      date: timestamp
    };

    // Save to local storage
    this.history.unshift(transaction);
    localStorage.setItem("naiberi_donations_history", JSON.stringify(this.history));

    // Show M-Pesa Express simulation animation
    this.showSuccessModal(transaction);
    this.renderDonationHistory();

    // Reset form
    if (amountInput) amountInput.value = "";
  }

  showSuccessModal(tx) {
    const modal = document.getElementById("mpesa-receipt-modal");
    if (!modal) return;

    document.getElementById("receipt-tx-code").textContent = tx.id;
    document.getElementById("receipt-name").textContent = tx.name;
    document.getElementById("receipt-phone").textContent = tx.phone;
    document.getElementById("receipt-amount").textContent = `KES ${tx.amount.toLocaleString()}`;
    document.getElementById("receipt-fund").textContent = tx.fund;
    document.getElementById("receipt-jumuiya").textContent = tx.jumuiya;
    document.getElementById("receipt-date").textContent = tx.date;

    modal.classList.add("open");
  }

  closeReceiptModal() {
    const modal = document.getElementById("mpesa-receipt-modal");
    if (modal) modal.classList.remove("open");
  }

  downloadPDFReceipt() {
    const txCode = document.getElementById("receipt-tx-code").textContent;
    const name = document.getElementById("receipt-name").textContent;
    const phone = document.getElementById("receipt-phone").textContent;
    const amount = document.getElementById("receipt-amount").textContent;
    const fund = document.getElementById("receipt-fund").textContent;
    const jumuiya = document.getElementById("receipt-jumuiya").textContent;
    const date = document.getElementById("receipt-date").textContent;

    const printWindow = window.open("", "_blank", "width=800,height=900");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Official Parish Receipt - ${txCode}</title>
        <style>
          body {
            font-family: 'Times New Roman', serif;
            padding: 40px;
            color: #0B3C6F;
            border: 8px double #C9A227;
            margin: 20px;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #C9A227;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            font-size: 24px;
            margin: 0 0 5px 0;
            text-transform: uppercase;
          }
          .header h2 {
            font-size: 16px;
            color: #C9A227;
            margin: 0;
          }
          .header p {
            font-size: 14px;
            margin: 5px 0 0 0;
            color: #555;
          }
          .badge {
            display: inline-block;
            background: #0B3C6F;
            color: #fff;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 12px;
            margin-bottom: 10px;
          }
          .details {
            margin: 30px 0;
            line-height: 2;
            font-size: 16px;
          }
          .details table {
            width: 100%;
            border-collapse: collapse;
          }
          .details td {
            padding: 8px 12px;
            border-bottom: 1px solid #eee;
          }
          .details td:first-child {
            font-weight: bold;
            width: 40%;
            color: #0B3C6F;
          }
          .amount-box {
            background: #fdfbf7;
            border: 2px solid #C9A227;
            padding: 15px;
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            color: #0B3C6F;
            margin: 30px 0;
          }
          .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 13px;
            color: #666;
            border-top: 1px solid #ccc;
            padding-top: 20px;
          }
          .signature {
            display: flex;
            justify-content: space-between;
            margin-top: 60px;
            padding: 0 40px;
          }
          .sign-line {
            border-top: 1px solid #000;
            width: 200px;
            text-align: center;
            font-size: 14px;
            padding-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <span class="badge">UASIN GISHU COUNTY, KENYA</span>
          <h1>St. Theresa of the Child Jesus Naiberi Parish</h1>
          <h2>Official Parish Tithe & Contribution Receipt</h2>
          <p>Naiberi, Uasin Gishu County, Kenya | M-Pesa Paybill: 522522 (NAIBERI)</p>
        </div>

        <div class="amount-box">
          TOTAL RECEIVED: ${amount}
        </div>

        <div class="details">
          <table>
            <tr><td>Transaction Reference (M-Pesa Code):</td><td><strong>${txCode}</strong></td></tr>
            <tr><td>Donor / Parishioner Name:</td><td>${name}</td></tr>
            <tr><td>Phone Number:</td><td>${phone}</td></tr>
            <tr><td>Contribution Fund / Category:</td><td>${fund}</td></tr>
            <tr><td>Small Christian Community (Jumuiya):</td><td>${jumuiya}</td></tr>
            <tr><td>Date & Time of Donation:</td><td>${date}</td></tr>
          </table>
        </div>

        <div class="signature">
          <div class="sign-line">Parish Secretariat Stamp</div>
          <div class="sign-line">Rev. Fr. Eliud Jomo (Parish Priest)</div>
        </div>

        <div class="footer">
          <p>"God loves a cheerful giver." (2 Corinthians 9:7)</p>
          <p>Thank you for supporting the works of evangelization and community development in Naiberi Parish.</p>
        </div>
        <script>
          setTimeout(() => { window.print(); }, 500);
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }

  renderDonationHistory() {
    const listContainer = document.getElementById("donor-history-table");
    if (!listContainer) return;

    if (this.history.length === 0) {
      listContainer.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:2rem; color:var(--text-muted);">No online contributions recorded in this session yet. Make a simulated M-Pesa donation above!</td></tr>`;
      return;
    }

    listContainer.innerHTML = this.history.map(tx => `
      <tr>
        <td><strong>${tx.id}</strong></td>
        <td>${tx.name}<br><small style="color:var(--text-gold);">${tx.jumuiya}</small></td>
        <td><span class="badge badge-blue">${tx.fund}</span></td>
        <td><strong>KES ${tx.amount.toLocaleString()}</strong></td>
        <td>${tx.date}</td>
      </tr>
    `).join("");
  }
}

const mpesaPortal = new MPesaGivingPortal();
