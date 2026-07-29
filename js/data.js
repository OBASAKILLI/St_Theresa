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
      quote: "I will spend my heaven doing good upon earth. I will let fall a shower of roses.",
      referenceUrl: "https://www.littleflower.org/st-therese/"
    },
    stationsCount: 7,
    subParishesCount: 2,
    stationsList: "Naiberi Main, Stroback, Kapsirwo, Uhuru, Sigot, Berur, Holy Trinity (New)",
    subParishesList: "Naiberi Main & Stroback"
  },

  stations: [
    {
      id: "naiberi",
      name: "Naiberi Main Church (Parish Headquarters)",
      type: "Main Station",
      location: "Naiberi Center, Eldoret East, Uasin Gishu County",
      patron: "St. Theresa of the Child Jesus (St. Thérèse of Lisieux)",
      massTime: "Sunday: 7:00 AM (Kiswahili), 9:00 AM (English High Mass), 11:30 AM (Youth & PMC)",
      status: "Sub-Parish 1",
      description: "The mother church and administrative seat of Naiberi Parish, hosting daily Masses, Parish Secretariat, and sacramental registries.",
      image: "assets/images/hero-church.jpg"
    },
    {
      id: "stroback",
      name: "Stroback Church",
      type: "Sub-Parish",
      location: "Stroback Area, Uasin Gishu",
      patron: "St. Joseph the Worker",
      massTime: "Sunday: 8:00 AM (Kiswahili/English), 10:30 AM (High Mass)",
      status: "Sub-Parish 2",
      description: "Our second official Sub-Parish center with a vibrant Catholic community, active Jumuiyas, and dedicated Sunday School.",
      image: "https://images.unsplash.com/photo-1548625361-16800b328a75?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "kapsirwo",
      name: "Kapsirwo Church",
      type: "Parish Station",
      location: "Kapsirwo Outstation",
      patron: "St. Peter & Paul",
      massTime: "Sunday: 9:00 AM (Kiswahili / English)",
      status: "Outstation",
      description: "A faithful rural outstation serving families and farmers in the Kapsirwo agricultural community.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "uhuru",
      name: "Uhuru Church",
      type: "Parish Station",
      location: "Uhuru Center",
      patron: "St. Michael the Archangel",
      massTime: "Sunday: 8:30 AM (Kiswahili)",
      status: "Outstation",
      description: "An active outstation in Uhuru known for vibrant youth choirs and Small Christian Community Jumuiya gatherings.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sigot",
      name: "Sigot Church",
      type: "Parish Station",
      location: "Sigot Area",
      patron: "St. Anne & St. Joachim",
      massTime: "Sunday: 10:30 AM (English / Kiswahili)",
      status: "Outstation",
      description: "Serving Catholic families across Sigot with regular catechetical instruction and Eucharistic celebrations.",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "berur",
      name: "Berur Church",
      type: "Parish Station",
      location: "Berur Outstation",
      patron: "Holy Family",
      massTime: "Sunday: 9:30 AM (Kiswahili)",
      status: "Outstation",
      description: "A growing Eucharistic community in Berur with strong Catholic Men and Women Associations.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "holy-trinity",
      name: "Holy Trinity Church (New Station)",
      type: "New Parish Station",
      location: "Holy Trinity Outstation",
      patron: "Most Holy Trinity",
      massTime: "Sunday: 11:00 AM (English / Kiswahili)",
      status: "New Outstation",
      description: "Our newest 7th parish station established to bring the Holy Sacrifice of the Mass and catechism closer to growing settlements.",
      image: "assets/images/hero_church_exterior.jpg"
    }
  ],

  massSchedule: [
    {
      id: 1,
      name: "Sunday Swahili Mass (Misa ya Kiswahili)",
      day: "Sunday",
      time: "7:00 AM – 8:30 AM",
      language: "Kiswahili",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Vibrant community Eucharistic celebration with Swahili liturgical hymns and SCC Jumuiya thanksgiving.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Sunday English High Mass",
      day: "Sunday",
      time: "9:00 AM – 11:00 AM",
      language: "English",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Solemn Parish High Mass with Parish Choir, organ, incense, and full liturgical procession.",
      image: "assets/images/sanctuary_altar_tabernacle.jpg"
    },
    {
      id: 3,
      name: "Sunday Youth & PMC Mass (Misa ya Vijana & Watoto)",
      day: "Sunday",
      time: "11:30 AM – 1:00 PM",
      language: "English & Kiswahili",
      location: "Main Sanctuary",
      type: "Weekend",
      description: "Dynamic Eucharistic celebration animated by the Parish Youth Ministry (MYM/YCS) and Pontifical Missionary Childhood.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Daily Morning Mass",
      day: "Monday – Saturday",
      time: "6:30 AM – 7:15 AM",
      language: "English / Kiswahili",
      location: "St. Thérèse Adoration Chapel",
      type: "Daily",
      description: "Early morning holy sacrifice of the Mass for parishioners heading to work, school, and farms.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Daily Evening Mass",
      day: "Monday – Friday",
      time: "5:30 PM – 6:15 PM",
      language: "English",
      location: "Main Sanctuary",
      type: "Daily",
      description: "Evening Eucharistic liturgy with community intercessory prayers.",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Eucharistic Adoration & Benediction",
      day: "Every Thursday & Friday",
      time: "4:00 PM – 5:30 PM",
      language: "English & Kiswahili",
      location: "St. Thérèse Adoration Chapel",
      type: "Adoration",
      description: "Silent Eucharistic adoration, Divine Mercy Chaplet, Rosary, and solemn priestly Benediction.",
      image: "assets/images/sanctuary-altar.jpg"
    },
    {
      id: 7,
      name: "Sacrament of Reconciliation (Confession)",
      day: "Saturday & By Appointment",
      time: "4:00 PM – 5:30 PM",
      language: "English / Kiswahili",
      location: "Parish Confessionals",
      type: "Confession",
      description: "Individual sacramental confession and spiritual direction with parish priests.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
    }
  ],

  leadership: [
    {
      id: "priest-1",
      name: "Rev. Fr. Eliud Jomo",
      role: "Parish Priest (Father-in-Charge)",
      category: "Clergy",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      phone: "+254 720 111 222",
      email: "fr.jomo@naiberiparish.or.ke",
      bio: "Ordained for the Catholic Diocese of Eldoret. Passionate about pastoral evangelization, Small Christian Communities (SCCs), and youth empowerment in Uasin Gishu County.",
      officeDays: "Tuesday – Friday (9:00 AM – 4:00 PM)"
    },
    {
      id: "priest-2",
      name: "Rev. Fr. Josephat Kipkorir",
      role: "Assistant Parish Priest",
      category: "Clergy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80",
      phone: "+254 725 112 233",
      email: "cwa@naiberiparish.or.ke",
      bio: "Leads the vibrant Catholic Women Association, promoting Christian family values, charity to the needy, and devotion to our Lady.",
      officeDays: "Saturday & Sunday"
    }
  ],

  sacraments: [
    {
      id: "ocia",
      title: "OCIA / Catechism (Order of Christian Initiation)",
      subtitle: "Sacramental Initiation & Conversion for Adults and Children",
      icon: "book-bible",
      requirements: [
        "Open to unbaptized adults and children seeking Catholic Baptism, Eucharist, and Confirmation",
        "Open to Christians baptized in other denominations seeking full communion with the Catholic Church",
        "Open to baptized Catholic adults seeking Confirmation or sacramental completion",
        "Inspired by National Shrine Basilica of the Little Flower OCIA catechetical formation (shrinechurch.com/ocia)"
      ],
      schedule: "Annual liturgical reception during the solemn Easter Vigil & Parish Feast Day.",
      preparation: "Weekly catechetical sessions every Sunday afternoon at Naiberi Main and Stroback Sub-Parish.",
      coordinator: "Michal Anne Gillig & Catechist Team",
      email: "ocia@naiberiparish.or.ke",
      phone: "+254 721 777 888",
      referenceUrl: "https://shrinechurch.com/ocia",
      image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "baptism",
      title: "Sacrament of Baptism",
      subtitle: "The Gateway to Christian Life and the Church",
      icon: "droplet",
      requirements: [
        "For Children Under Age 7: Parents must be registered parishioners and complete a mandatory Baptism Preparation Class.",
        "For Children Over Age 7 & Adults: Must enroll in Sunday Religious Education or the OCIA / RCIA discipleship journey.",
        "Godparents must be practicing Catholics who have received Confirmation.",
        "Attendance of Baptismal Preparation session by parents and godparents."
      ],
      schedule: "Baptisms are celebrated on the last Saturday of every month at 10:00 AM.",
      preparation: "Classes hold every Saturday at 2:00 PM in St. Thérèse Hall.",
      coordinator: "Parish Secretariat & Baptism Team",
      email: "baptism@naiberiparish.or.ke",
      phone: "+254 720 123 456",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "eucharist",
      title: "First Holy Communion & Reconciliation",
      subtitle: "Source and Summit — Bundled 2nd Grade Sacramental Prep",
      icon: "sun",
      requirements: [
        "Structured 2nd Grade preparation curriculum taught in conjunction with First Reconciliation (Confession).",
        "Candidate must be validly baptized Catholic (provide Baptism Certificate).",
        "Completion of Parish Sunday School Catechism or Catholic School Religious Education.",
        "Regular Sunday Mass attendance and confession prior to ceremony."
      ],
      schedule: "Celebrated annually during Corpus Christi Sunday or the Parish Feast Day.",
      preparation: "Weekly catechism classes every Sunday after 9:00 AM Mass.",
      coordinator: "Catechetical Formation Office",
      email: "eucharist@naiberiparish.or.ke",
      phone: "+254 721 777 888",
      image: "assets/images/sanctuary_altar_tabernacle.jpg"
    },
    {
      id: "confirmation",
      title: "Sacrament of Confirmation",
      subtitle: "Sealed with the Holy Spirit — 2-Year Discipleship Program",
      icon: "flame",
      requirements: [
        "Structured 2-Year Formation & Discipleship Program (beginning in 7th/8th grade or High School).",
        "Baptism and First Holy Communion certificates required.",
        "Sponsor Continuity: Strongly recommended that the Baptismal Godparent serve as Sponsor.",
        "Active participation in Jumuiya SCC and Parish Youth Ministry."
      ],
      schedule: "Celebrated during the annual pastoral visit of the Bishop of Eldoret.",
      preparation: "Intensive confirmation catechesis every Saturday afternoon.",
      coordinator: "Parish Youth & Confirmation Coordinator",
      email: "confirmation@naiberiparish.or.ke",
      phone: "+254 724 999 000",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "marriage",
      title: "Holy Matrimony (Marriage)",
      subtitle: "A Sacred Covenant of Christian Love & Ongoing Family Ministry",
      icon: "heart",
      requirements: [
        "At least 6 months advance notice to the Parish Priest following Archdiocesan guidelines.",
        "Baptism and Confirmation certificates of both bride and groom.",
        "Completion of Parish Pre-Marital Counseling (Engaged Encounter).",
        "Ongoing Marriage Enrichment: Includes access to our Community & Family Ministry 'Marriage Course'."
      ],
      schedule: "Weddings are scheduled on Fridays and Saturdays between 10:00 AM and 2:00 PM.",
      preparation: "10-week Catholic Marriage Preparation counseling with parish clergy and catechists.",
      coordinator: "Family Ministry & Marriage Coordinator",
      email: "family@naiberiparish.or.ke",
      phone: "+254 725 112 233",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "reconciliation",
      title: "Sacrament of Reconciliation (Confession)",
      subtitle: "God's Infinite Mercy and Forgiveness",
      icon: "shield",
      requirements: [
        "Sincere examination of conscience and contrition.",
        "Open to all baptized Catholics.",
        "Confidentiality under the inviolable sacramental seal."
      ],
      schedule: "Every Saturday 4:00 PM – 5:30 PM in the church confessionals, or anytime by appointment.",
      preparation: "Examination of conscience booklets available at the church entrance.",
      coordinator: "Rev. Fr. Eliud Jomo (Parish Priest)",
      email: "priest@naiberiparish.or.ke",
      phone: "+254 720 123 456",
      image: "assets/images/sanctuary-altar.jpg"
    },
    {
      id: "anointing",
      title: "Anointing of the Sick",
      subtitle: "Spiritual Healing and Comfort in Illness",
      icon: "cross",
      requirements: [
        "Available for elderly, seriously ill, or hospitalized parishioners.",
        "Can be requested by family members or Jumuiya SCC leader at any time.",
        "Includes Holy Communion (Viaticum) and sacramental absolution."
      ],
      schedule: "Available 24/7 for pastoral emergencies. Communal anointing on World Day of the Sick.",
      preparation: "Contact the parish office or emergency priest helpline immediately.",
      coordinator: "24/7 Clergy Pastoral Emergency Line",
      email: "emergency@naiberiparish.or.ke",
      phone: "+254 733 987 654",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
    }
  ],

  ministries: [
    {
      id: "cma",
      name: "Catholic Men Association (CMA)",
      tagline: "Good Shepherd — Leadership in Faith and Family",
      patron: "St. Joseph the Worker",
      membersCount: 240,
      meetingTime: "Every 3rd Sunday after 9:00 AM Mass",
      description: "CMA empowers Catholic men, fathers, and husbands to lead their families in faith, support parish infrastructure development across all 7 stations, and mentor young men.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      leader: "Mr. Joseph Kiplagat (CMA Chair)",
      whatsapp: "254720111001"
    },
    {
      id: "cwa",
      name: "Catholic Women Association (CWA)",
      tagline: "Strong in Faith, Love, and Christian Motherhood",
      patron: "St. Monica & Our Lady of Good Counsel",
      membersCount: 320,
      meetingTime: "Every 2nd Sunday after 9:00 AM Mass",
      description: "CWA is the cornerstone of family apostolate in Naiberi Parish, engaging in charity, church welfare, retreat formation, and caring for orphans and the elderly.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      leader: "Mrs. Monica Tarus (CWA Chairperson)",
      whatsapp: "254722222002"
    },
    {
      id: "youth",
      name: "Catholic Youths (18+ Years)",
      tagline: "Salt of the Earth and Light of the World",
      patron: "St. John Bosco & St. Thérèse of Lisieux",
      membersCount: 310,
      meetingTime: "Every Sunday at 2:00 PM",
      description: "Our active young adults (18+ years) dedicated to parish evangelization, choir animation, Jumuiya leadership, career mentorship, and charity outreach.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      leader: "Brian Kiprop (Youth Chair)",
      whatsapp: "254723333003"
    },
    {
      id: "mym",
      name: "Missionary Youth Movement (MYM — 13 to 17 Years)",
      tagline: "Faithful Teens & High School Discipleship",
      patron: "St. Carlo Acutis & St. Thérèse",
      membersCount: 280,
      meetingTime: "Every Saturday at 10:00 AM & Sunday 11:30 AM",
      description: "Dedicated to youth aged 13 to 17 years (high school & early teens), fostering discipleship, Catholic moral formation, leadership, and missionary spirit.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      leader: "Sr. Mary Clare (Youth Animator)",
      whatsapp: "254724444004"
    },
    {
      id: "pmc",
      name: "Pontifical Missionary Childhood (PMC — 0 to 12 Years)",
      tagline: "Children Helping Children for Christ",
      patron: "Holy Innocents & St. Thérèse of the Child Jesus",
      membersCount: 520,
      meetingTime: "Every Sunday 10:30 AM during Sunday School",
      description: "Nurturing children aged 0 to 12 years in the Catholic faith, Bible storytelling, early Catechism, missionary charity, and serving as altar servers.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      leader: "Michael Kiptoo (Head Catechist)",
      whatsapp: "254725555005"
    },
    {
      id: "choir",
      name: "St. Thérèse Liturgical Parish Choir",
      tagline: "He Who Sings Prays Twice",
      patron: "St. Cecilia",
      membersCount: 85,
      meetingTime: "Thursdays 5:30 PM & Saturdays 3:00 PM",
      description: "Our award-winning parish choir animates Sunday liturgies across our stations with solemn English hymns, traditional Swahili melodies, and Gregorian chants.",
      image: "assets/images/parish_worship_choir.jpg",
      leader: "Vincent Cheruiyot (Choir Master)",
      whatsapp: "254726666006"
    },
    {
      id: "caritas",
      name: "Caritas Naiberi & Social Justice",
      tagline: "Faith in Action Through Works of Mercy",
      patron: "St. Vincent de Paul & St. Teresa of Calcutta",
      membersCount: 65,
      meetingTime: "Every 1st Saturday at 10:00 AM",
      description: "Providing food aid, medical missions, scholarship support, and agricultural empowerment to needy families in Naiberi and surrounding areas.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
      leader: "Mrs. Anne Wambui (Caritas Coordinator)",
      whatsapp: "254727777007"
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
      image: "https://images.unsplash.com/photo-1548625361-16800b328a75?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-2",
      title: "Caritas Naiberi Launches Clean Water & Borehole Project for Community",
      date: "July 10, 2026",
      author: "Caritas Office",
      category: "Outreach",
      summary: "In alignment with Catholic social teaching, our parish has broken ground on a community borehole project to serve over 400 households in Naiberi.",
      content: "Supported by generous parishioner tithes and donor partners, the clean water kiosk will provide free, potable water to schools and elderly residents in Naiberi.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "news-3",
      title: "Weekly Bulletin: 17th Sunday in Ordinary Time — Liturgical Roster",
      date: "July 26, 2026",
      author: "Fr. Eliud Jomo",
      category: "Bulletin",
      summary: "Download this week's full parish bulletin including Jumuiya cleaning schedules, upcoming marriage banns, tithe report, and Mass intentions.",
      content: "Special gratitude to St. Joseph Jumuiya for animators of last Sunday's liturgy. Next Sunday will be animated by St. Francis of Assisi SCC.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    }
  ],

  homilies: [
    {
      id: "homily-1",
      title: "The Little Way of Kindness in Our Daily Families",
      preacher: "Rev. Fr. Eliud Jomo",
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
