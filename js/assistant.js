/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH
 * Interactive St. Thérèse Catholic AI Parish Assistant (Zero Emojis - Vector Icons)
 */

class CatholicAIAssistant {
  constructor() {
    this.isOpen = false;
    this.messages = [
      {
        sender: "bot",
        text: '<i class="fa-solid fa-dove" style="color:var(--gold);"></i> Peace be with you! I am St. Thérèse AI, your digital parish assistant at Naiberi Parish. How can I help you today? You can ask about Mass times, Sacraments, M-Pesa giving, or our Patron Saint!'
      }
    ];
  }

  toggleChat() {
    const chatBox = document.getElementById("ai-chat-box");
    if (!chatBox) return;

    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      chatBox.classList.add("open");
      const input = document.getElementById("ai-chat-input");
      if (input) input.focus();
    } else {
      chatBox.classList.remove("open");
    }
  }

  sendQuickQuestion(questionText) {
    if (!this.isOpen) {
      this.toggleChat();
    }
    this.addMessage("user", questionText);
    this.processResponse(questionText);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    const input = document.getElementById("ai-chat-input");
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    input.value = "";
    this.addMessage("user", query);
    this.processResponse(query);
  }

  addMessage(sender, text) {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return;

    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-msg ${sender}`;
    msgDiv.innerHTML = text;
    container.appendChild(msgDiv);

    container.scrollTop = container.scrollHeight;
  }

  processResponse(query) {
    const q = query.toLowerCase();
    let reply = "I am here to help you grow in faith at Naiberi Parish. Please ask about our Mass schedule, Sacramental registration, M-Pesa Paybill 522522, or visit our Parish Secretariat in Naiberi.";

    if (q.includes("mass") || q.includes("time") || q.includes("schedule") || q.includes("sunday")) {
      reply = '<i class="fa-solid fa-church" style="color:var(--gold);"></i> <strong>Sunday Mass Schedule at Naiberi Parish:</strong><br>' +
              "• <strong>7:00 AM – 8:30 AM:</strong> Swahili Mass (Misa ya Kiswahili)<br>" +
              "• <strong>9:00 AM – 11:00 AM:</strong> English High Mass<br>" +
              "• <strong>11:30 AM – 1:00 PM:</strong> Youth & PMC Mass<br><br>" +
              "Daily Masses hold Monday–Saturday at <strong>6:30 AM</strong> and <strong>5:30 PM</strong>.";
    } else if (q.includes("mpesa") || q.includes("donate") || q.includes("paybill") || q.includes("tithe") || q.includes("give")) {
      reply = '<i class="fa-solid fa-hand-holding-heart" style="color:var(--gold);"></i> <strong>How to Give via M-Pesa:</strong><br>' +
              "• <strong>Paybill Number:</strong> 522522<br>" +
              "• <strong>Account Name:</strong> NAIBERI PARISH<br>" +
              "• Or use our online M-Pesa Giving Portal to automatically receive an official printable PDF Parish Receipt!";
    } else if (q.includes("baptism") || q.includes("baptize") || q.includes("godparent")) {
      reply = '<i class="fa-solid fa-dove" style="color:var(--gold);"></i> <strong>Sacrament of Baptism Requirements:</strong><br>' +
              "1. Child's Birth Certificate<br>" +
              "2. Parents must belong to an SCC (Jumuiya Ndogo Ndogo) in Naiberi Parish<br>" +
              "3. Practicing Catholic Godparents who are Confirmed<br>" +
              "Baptisms are celebrated on the last Saturday of every month at 10:00 AM.";
    } else if (q.includes("confess") || q.includes("reconciliation") || q.includes("penance")) {
      reply = '<i class="fa-solid fa-cross" style="color:var(--gold);"></i> <strong>Sacrament of Confession:</strong><br>' +
              "Confessions are heard every <strong>Saturday from 4:00 PM to 5:30 PM</strong> in the church confessionals, or anytime by appointment with our Parish Priest, Rev. Fr. Eliud Jomo.";
    } else if (q.includes("wedding") || q.includes("marriage") || q.includes("marry")) {
      reply = '<i class="fa-solid fa-ring" style="color:var(--gold);"></i> <strong>Holy Matrimony Guidelines:</strong><br>' +
              "Couples should give at least 6 months advance notice to the Parish Office and complete our 10-week Pre-Marital Counseling sessions.";
    } else if (q.includes("therese") || q.includes("little way") || q.includes("patron") || q.includes("saint")) {
      reply = '<i class="fa-solid fa-spa" style="color:var(--gold);"></i> <strong>St. Thérèse of Lisieux (Our Patroness):</strong><br>' +
              "Known as 'The Little Flower', she taught the 'Little Way' of spiritual childhood—doing small daily acts with immense love for God. Her Feast Day is October 1.";
    } else if (q.includes("where") || q.includes("location") || q.includes("direction") || q.includes("address") || q.includes("eldoret") || q.includes("uasin")) {
      reply = '<i class="fa-solid fa-location-dot" style="color:var(--gold);"></i> <strong>Parish Location:</strong><br>' +
              "We are located in <strong>Naiberi, Uasin Gishu County, Kenya</strong> along Kaptagat Highway. You can view our interactive Google Maps directions on the Contact page.";
    } else if (q.includes("priest") || q.includes("father") || q.includes("eliud") || q.includes("jomo") || q.includes("josephat")) {
      reply = '<i class="fa-solid fa-user-tie" style="color:var(--gold);"></i> <strong>Parish Clergy:</strong><br>' +
              "• <strong>Rev. Fr. Eliud Jomo:</strong> Parish Priest (Father-in-Charge)<br>" +
              "• <strong>Rev. Fr. Josephat Kipkorir:</strong> Assistant Parish Priest<br>" +
              "You can book an office consultation through our Sacramental Booking form.";
    }

    setTimeout(() => {
      this.addMessage("bot", reply);
    }, 600);
  }
}

// Global AI Instance
const catholicAI = new CatholicAIAssistant();
