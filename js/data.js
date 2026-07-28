/**
 * ST. THERESA OF THE CHILD JESUS NAIBERI PARISH
 * Central Catholic Liturgical & Parish Data Store
 * Location: Naiberi, Uasin Gishu County, Kenya (Catholic Diocese of Eldoret)
 */

const PARISH_DATA = {
  info: {
    name: "St. Theresa of the Child Jesus Naiberi Parish",
    shortName: "St. Theresa's Naiberi",
    location: "Naiberi, Uasin Gishu County, Kenya",
    diocese: "Catholic Diocese of Eldoret",
    deanery: "Eldoret East / Uasin Gishu Deanery",
    patronSaint: "St. Thérèse of Lisieux (St. Thérèse of the Child Jesus)",
    motto: "In the heart of the Church, I will be Love",
    phone: "+254 720 123 456 / +254 733 987 654",
    email: "info@naiberiparish.or.ke",
    officeHours: "Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 8:30 AM – 1:00 PM",
    mpesaPaybill: "522522",
    mpesaAccount: "NAIBERI PARISH",
    mpesaTill: "8899001",
    bankName: "Kenya Commercial Bank (KCB), Eldoret Branch",
    bankAccount: "1122334455",
    dailyVerse: {
      quote: "My vocation is love! In the heart of the Church, my Mother, I will be Love.",
      reference: "St. Thérèse of Lisieux — Autobiography of a Soul",
      date: "Today's Liturgical Reflection"
    },
    saintOfDay: {
      name: "St. Thérèse of Lisieux",
      title: "Doctor of the Church & Patroness of Missions",
      feastDate: "October 1",
      bio: "Born in France in 1873, Thérèse Martin entered the Carmelite convent of Lisieux at age 15. Known for her 'Little Way' of spiritual childhood, she taught that God is pleased not by grand deeds but by small sacrifices offered with immense love.",
      quote: "I will spend my heaven doing good upon earth. I will let fall a shower of roses."
    }
  },

  massSchedule: [
    {
      id: 1,
      name: "Sunday Swahili Mass (Misa ya Kiswahili)",
      day: "Sunday",
      time: "7:00 AM – 8:30 AM",
      language: "Kiswahili",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Vibrant community Eucharistic celebration with Swahili liturgical hymns and SCC Jumuiya thanksgiving."
    },
    {
      id: 2,
      name: "Sunday English High Mass",
      day: "Sunday",
      time: "9:00 AM – 11:00 AM",
      language: "English",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Solemn Parish High Mass with Parish Choir, organ, incense, and full liturgical procession."
    },
    {
      id: 3,
      name: "Sunday Youth & PMC Mass (Misa ya Vijana & Watoto)",
      day: "Sunday",
      time: "11:30 AM – 1:00 PM",
      language: "English & Kiswahili",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Dynamic Eucharistic celebration animated by the Parish Youth Ministry (MYM/YCS) and Pontifical Missionary Childhood."
    },
    {
      id: 4,
      name: "Daily Morning Mass",
      day: "Monday – Saturday",
      time: "6:30 AM – 7:15 AM",
      language: "English / Kiswahili",
      location: "St. Thérèse Adoration Chapel",
      type: "Daily",
      description: "Early morning holy sacrifice of the Mass for parishioners heading to work, school, and farms."
    },
    {
      id: 5,
      name: "Daily Evening Mass",
      day: "Monday – Friday",
      time: "5:30 PM – 6:15 PM",
      language: "English",
      location: "Main Sanctuary",
      type: "Daily",
      description: "Evening Eucharistic liturgy with community intercessory prayers."
    },
    {
      id: 6,
      name: "Eucharistic Adoration & Benediction",
      day: "Every Thursday & Friday",
      time: "4:00 PM – 5:30 PM",
      language: "English & Kiswahili",
      location: "St. Thérèse Adoration Chapel",
      type: "Adoration",
      description: "Silent Eucharistic adoration, Divine Mercy Chaplet, Rosary, and solemn priestly Benediction."
    },
    {
      id: 7,
      name: "Sacrament of Reconciliation (Confession)",
      day: "Saturday & By Appointment",
      time: "4:00 PM – 5:30 PM",
      language: "English / Kiswahili",
      location: "Parish Confessionals",
      type: "Confession",
      description: "Individual sacramental confession and spiritual direction with parish priests."
    }
  ],

  leadership: [
    {
      id: "priest-1",
      name: "Rev. Fr. Michael Omondi",
      role: "Parish Priest (Father-in-Charge)",
      category: "Clergy",
      image: "assets/images/st-therese.jpg",
      phone: "+254 720 111 222",
      email: "fr.omondi@naiberiparish.or.ke",
      bio: "Ordained in 2011 for the Catholic Diocese of Eldoret. Passionate about pastoral evangelization, Small Christian Communities (SCCs), and youth empowerment in Uasin Gishu County.",
      officeDays: "Tuesday – Friday (9:00 AM – 4:00 PM)"
    },
    {
      id: "priest-2",
      name: "Rev. Fr. Josephat Kipkorir",
      role: "Assistant Parish Priest",
      category: "Clergy",
      image: "assets/images/hero-church.jpg",
      phone: "+254 722 333 444",
      email: "fr.josephat@naiberiparish.or.ke",
      bio: "Specializes in sacramental catechism, PMC children ministry, and liturgy. Dedicated to visiting outstations and elderly parishioners.",
      officeDays: "Wednesday – Saturday (9:00 AM – 3:30 PM)"
    },
    {
      id: "sister-1",
      name: "Sr. Mary Clare Wanjiku, CPS",
      role: "Parish Sister & Social Coordinator",
      category: "Religious",
      image: "assets/images/st-therese.jpg",
      phone: "+254 733 555 666",
      email: "sr.maryclare@naiberiparish.or.ke",
      bio: "Member of the Missionary Sisters of the Precious Blood. Coordinates Caritas Naiberi, community health outreach, and women's formation.",
      officeDays: "Monday – Friday (8:30 AM – 5:00 PM)"
    },
    {
      id: "catechist-1",
      name: "Mwalimu Peter Tanui",
      role: "Head Parish Catechist",
      category: "Catechists",
      image: "assets/images/sanctuary-altar.jpg",
      phone: "+254 721 777 888",
      email: "catechist@naiberiparish.or.ke",
      bio: "Over 18 years of faithful catechetical instruction in Naiberi Parish. Leads RCIA, Confirmation preparation, and marriage instruction classes.",
      officeDays: "Tuesday, Thursday, Saturday (10:00 AM – 4:00 PM)"
    },
    {
      id: "council-1",
      name: "Mr. Francis Kiprono",
      role: "Parish Pastoral Council Chairman",
      category: "Council",
      image: "assets/images/hero-church.jpg",
      phone: "+254 724 999 000",
      email: "ppc@naiberiparish.or.ke",
      bio: "Experienced community leader coordinating the 14 Small Christian Communities (Jumuiya Ndogo Ndogo za Kikristu) in Naiberi Parish.",
      officeDays: "Sundays & By Appointment"
    },
    {
      id: "cwa-1",
      name: "Mrs. Anne Chebet",
      role: "Catholic Women Association (CWA) Chairperson",
      category: "Ministries",
      image: "assets/images/st-therese.jpg",
      phone: "+254 725 112 233",
      email: "cwa@naiberiparish.or.ke",
      bio: "Leads the vibrant Catholic Women Association, promoting Christian family values, charity to the needy, and devotion to our Lady.",
      officeDays: "Saturday & Sunday"
    }
  ],

  sacraments: [
    {
      id: "baptism",
      title: "Sacrament of Baptism",
      subtitle: "The Gateway to Christian Life and the Church",
      icon: "droplet",
      requirements: [
        "Birth Certificate of the child or candidate",
        "Parents must be registered members of an SCC (Jumuiya) in Naiberi Parish",
        "Godparents must be practicing Catholics who have received Confirmation",
        "Attendance of 3 Baptismal Preparation sessions by parents and godparents"
      ],
      schedule: "Baptisms are celebrated on the last Saturday of every month at 10:00 AM.",
      preparation: "Classes hold every Saturday at 2:00 PM in St. Thérèse Hall."
    },
    {
      id: "eucharist",
      title: "First Holy Communion (Eucharist)",
      subtitle: "Source and Summit of the Christian Life",
      icon: "sun",
      requirements: [
        "Candidate must be baptized Catholic (provide Baptism Certificate)",
        "Minimum age of 9 years or Standard/Grade 3 and above",
        "Completion of at least 2 years of Parish Sunday School Catechism",
        "Regular Sunday Mass attendance and confession prior to ceremony"
      ],
      schedule: "Celebrated annually during Corpus Christi Sunday or the Parish Feast Day.",
      preparation: "Weekly catechism classes every Sunday after 9:00 AM Mass."
    },
    {
      id: "confirmation",
      title: "Sacrament of Confirmation",
      subtitle: "Sealed with the Gift of the Holy Spirit",
      icon: "flame",
      requirements: [
        "Baptism and First Holy Communion certificates",
        "Minimum age of 13 years / Secondary school level",
        "Sponsor must be a confirmed, practicing Catholic",
        "Active participation in Parish Youth Ministry or PMC"
      ],
      schedule: "Celebrated during the annual pastoral visit of the Bishop of Eldoret.",
      preparation: "6-month intensive confirmation catechesis every Saturday afternoon."
    },
    {
      id: "marriage",
      title: "Holy Matrimony (Marriage)",
      subtitle: "A Sacred Covenant of Christian Love and Family",
      icon: "heart",
      requirements: [
        "At least 6 months advance notice to the Parish Priest",
        "Baptism and Confirmation certificates of both bride and groom",
        "Letter of freedom from respective parishes if outside Naiberi",
        "Completion of Parish Pre-Marital Counseling (Engaged Encounter)"
      ],
      schedule: "Weddings are scheduled on Fridays and Saturdays between 10:00 AM and 2:00 PM.",
      preparation: "10-week Catholic Marriage Preparation counseling with parish clergy and catechists."
    },
    {
      id: "reconciliation",
      title: "Sacrament of Reconciliation",
      subtitle: "God's Infinite Mercy and Forgiveness",
      icon: "shield",
      requirements: [
        "Sincere examination of conscience and contrition",
        "Open to all baptized Catholics",
        "Confidentiality under the inviolable sacramental seal"
      ],
      schedule: "Every Saturday 4:00 PM – 5:30 PM in the church confessionals, or anytime by appointment.",
      preparation: "Examination of conscience booklets available at the church entrance."
    },
    {
      id: "anointing",
      title: "Anointing of the Sick",
      subtitle: "Spiritual Healing and Comfort in Illness",
      icon: "cross",
      requirements: [
        "Available for elderly, seriously ill, or hospitalized parishioners",
        "Can be requested by family members or Jumuiya SCC leader at any time",
        "Includes Holy Communion (Viaticum) and sacramental absolution"
      ],
      schedule: "Available 24/7 for pastoral emergencies. Communal anointing on World Day of the Sick.",
      preparation: "Contact the parish office or emergency priest helpline immediately."
    }
  ],

  ministries: [
    {
      id: "cwa",
      name: "Catholic Women Association (CWA)",
      tagline: "Strong in Faith, Love, and Christian Motherhood",
      patron: "St. Monica & Our Lady of Good Counsel",
      membersCount: 320,
      meetingTime: "Every 2nd Sunday after 9:00 AM Mass",
      description: "CWA is the cornerstone of family apostolate in Naiberi Parish, engaging in charity, church welfare, retreat formation, and caring for orphans and the elderly."
    },
    {
      id: "cma",
      name: "Catholic Men Association (CMA)",
      tagline: "Good Shepherd — Leadership in Faith and Family",
      patron: "St. Joseph the Worker",
      membersCount: 240,
      meetingTime: "Every 3rd Sunday after 9:00 AM Mass",
      description: "CMA empowers Catholic men to lead their families in faith, support parish infrastructure development, and mentor male youth in Uasin Gishu."
    },
    {
      id: "youth",
      name: "Parish Youth Ministry (MYM & YCS)",
      tagline: "Salt of the Earth and Light of the World",
      patron: "St. John Bosco & St. Thérèse of Lisieux",
      membersCount: 410,
      meetingTime: "Every Sunday at 2:00 PM",
      description: "A vibrant community of young professionals and students dedicated to gospel music, evangelization, talent development, and charity outreach."
    },
    {
      id: "choir",
      name: "St. Thérèse Liturgical Parish Choir",
      tagline: "He Who Sings Prays Twice",
      patron: "St. Cecilia",
      membersCount: 85,
      meetingTime: "Thursdays 5:30 PM & Saturdays 3:00 PM",
      description: "Our award-winning parish choir animates Sunday liturgies with solemn English hymns, traditional Swahili melodies, and Gregorian chants."
    },
    {
      id: "pmc",
      name: "Pontifical Missionary Childhood (PMC)",
      tagline: "Children Helping Children for Christ",
      patron: "Holy Innocents & St. Thérèse",
      membersCount: 500,
      meetingTime: "Every Sunday 10:30 AM during Sunday School",
      description: "Nurturing young children in the Catholic faith, missionary charity, and liturgical participation as altar servers and readers."
    },
    {
      id: "caritas",
      name: "Caritas Naiberi & Social Justice",
      tagline: "Faith in Action Through Works of Mercy",
      patron: "St. Vincent de Paul & St. Teresa of Calcutta",
      membersCount: 65,
      meetingTime: "Every 1st Saturday at 10:00 AM",
      description: "Providing food aid, medical missions, scholarship support, and agricultural empowerment to needy families in Naiberi and surrounding areas."
    }
  ],

  events: [
    {
      id: "event-1",
      title: "Annual St. Thérèse Parish Feast Day & Harambee",
      date: "October 1, 2026",
      time: "9:00 AM – 4:00 PM",
      location: "Naiberi Parish Grounds & Main Church",
      category: "Feast Day",
      description: "Our grand parish feast day celebration presided over by the Lord Bishop of Eldoret, followed by community lunch, choir presentations, and church building thanksgiving.",
      image: "assets/images/hero-church.jpg",
      registrationOpen: true
    },
    {
      id: "event-2",
      title: "Uasin Gishu Deanery Youth Eucharistic Congress",
      date: "August 15, 2026",
      time: "8:00 AM – 5:00 PM",
      location: "St. Thérèse Naiberi Parish Sanctuary",
      category: "Youth",
      description: "Over 800 Catholic youth gathering for Eucharistic adoration, praise & worship, workshops on Christian vocation, and Holy Mass.",
      image: "assets/images/sanctuary-altar.jpg",
      registrationOpen: true
    },
    {
      id: "event-3",
      title: "CWA & CMA Annual Family Life Retreat",
      date: "September 12, 2026",
      time: "9:00 AM – 3:30 PM",
      location: "Parish Retreat Hall",
      category: "Retreat",
      description: "A transformative one-day retreat for Catholic couples and parents focusing on Christian family resilience, prayer in the home, and parenting.",
      image: "assets/images/st-therese.jpg",
      registrationOpen: true
    }
  ],

  news: [
    {
      id: "news-1",
      title: "Naiberi Parish Celebrates 150 New Confirmations by Bishop of Eldoret",
      date: "July 20, 2026",
      author: "Parish Secretariat",
      category: "Sacraments",
      summary: "Joy filled St. Theresa of the Child Jesus Naiberi Parish as 150 candidates from our 14 Small Christian Communities received the Sacrament of Confirmation.",
      content: "During a solemn pastoral visit, the Bishop commended Naiberi Parish for its exemplary catechetical preparation and vibrant youth ministry. He urged the newly confirmed to be courageous witnesses of the Gospel in Uasin Gishu County.",
      image: "assets/images/sanctuary-altar.jpg"
    },
    {
      id: "news-2",
      title: "Caritas Naiberi Launches Clean Water & Borehole Project for Community",
      date: "July 10, 2026",
      author: "Caritas Office",
      category: "Outreach",
      summary: "In alignment with Catholic social teaching, our parish has broken ground on a community borehole project to serve over 400 households in Naiberi.",
      content: "Supported by generous parishioner tithes and donor partners, the clean water kiosk will provide free, potable water to schools and elderly residents in Naiberi.",
      image: "assets/images/hero-church.jpg"
    },
    {
      id: "news-3",
      title: "Weekly Bulletin: 17th Sunday in Ordinary Time — Liturgical Roster",
      date: "July 26, 2026",
      author: "Fr. Michael Omondi",
      category: "Bulletin",
      summary: "Download this week's full parish bulletin including Jumuiya cleaning schedules, upcoming marriage banns, tithe report, and Mass intentions.",
      content: "Special gratitude to St. Joseph Jumuiya for animators of last Sunday's liturgy. Next Sunday will be animated by St. Francis of Assisi SCC.",
      image: "assets/images/st-therese.jpg"
    }
  ],

  homilies: [
    {
      id: "homily-1",
      title: "The Little Way of Kindness in Our Daily Families",
      preacher: "Rev. Fr. Michael Omondi",
      date: "July 26, 2026",
      scripture: "John 6:1-15 (Multiplication of Loaves)",
      duration: "18:45",
      type: "Audio/Video",
      summary: "Like the boy who offered five barley loaves and two fish, Jesus asks us to offer our small daily acts of love. St. Thérèse reminds us that nothing is too small when offered with great love."
    },
    {
      id: "homily-2",
      title: "Shepherds After God's Own Heart: Being Guardians of Peace",
      preacher: "Rev. Fr. Josephat Kipkorir",
      date: "July 19, 2026",
      scripture: "Mark 6:30-34 (The Good Shepherd)",
      duration: "21:10",
      type: "Audio/Video",
      summary: "In a world of noise and anxiety, Christ invites us to come away to a quiet place and rest in His Eucharistic presence."
    }
  ],

  library: [
    {
      id: "lib-1",
      title: "Catechism of the Catholic Church (CCC) — Summary on Sacraments",
      category: "Catechism",
      pages: "42 pages",
      description: "An accessible guide explaining the seven sacraments of the Church and their biblical foundations.",
      downloadUrl: "#download-ccc"
    },
    {
      id: "lib-2",
      title: "St. Thérèse of Lisieux: Story of a Soul (Autobiography)",
      category: "Saints",
      pages: "180 pages",
      description: "The complete spiritual writings of our Patron Saint describing her 'Little Way' of spiritual childhood and trust in God's mercy.",
      downloadUrl: "#download-soul"
    },
    {
      id: "lib-3",
      title: "St. Theresa Naiberi Parish Pastoral Strategic Plan (2025–2030)",
      category: "Church Documents",
      pages: "28 pages",
      description: "Our parish roadmap for pastoral evangelization, SCC Jumuiya growth, youth mentorship, and infrastructure development.",
      downloadUrl: "#download-plan"
    },
    {
      id: "lib-4",
      title: "Parish Swahili & English Eucharistic Hymnal (Nyimbo za Misa)",
      category: "Hymns",
      pages: "96 pages",
      description: "Official collection of liturgical hymns sung during Sunday High Masses and adoration.",
      downloadUrl: "#download-hymns"
    }
  ],

  faqs: [
    {
      question: "How do I register as a new parishioner of St. Theresa's Naiberi Parish?",
      answer: "You can register online via our 'Become a Parishioner' page or visit the Parish Office during working hours. Once registered, you will be connected to the Small Christian Community (Jumuiya Ndogo Ndogo) in your neighborhood."
    },
    {
      question: "How do I book a Mass Intention or Thanksgiving prayer?",
      answer: "You can submit your Mass intention online through the Prayer Requests page or at the parish secretariat. The standard offering can be sent via our M-Pesa Paybill 522522 (Account: NAIBERI)."
    },
    {
      question: "What are the requirements for getting married at Naiberi Parish?",
      answer: "Couples should notify the Parish Priest at least 6 months before the intended wedding date, present Baptism and Confirmation certificates, and complete the 10-week pre-marital counseling sessions."
    },
    {
      question: "Can I receive an M-Pesa receipt for my Tithe and Church contributions?",
      answer: "Yes! When you donate through our website's M-Pesa Giving Portal, the system automatically generates an official printable and downloadable PDF Parish Receipt with your transaction reference."
    }
  ]
};
