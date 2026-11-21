/* ========= Mazali Interior Design ========= */

/* ---- Contact details: update these with the real ones ---- */
const CONFIG = {
  whatsapp: "972542050937",          // international format, no "+" or leading 0
  phone: "054-205-0937",
  email: "Mazali.intdesign@gmail.com",
  instagram: "mazali.design",        // handle only, without "@"
  // pre-filled text when someone taps a WhatsApp button
  whatsappText: "היי מזלי, הגעתי מהאתר ואשמח לשמוע על עיצוב הבית שלי 🙂",
};

/* ---- Projects: images live in assets/img/projects/<slug>/NN.jpg (+ NN-sm.jpg) ---- */
const PROJECTS = [
  {
    slug: "triplex-modiin", count: 16, cover: 1, tag: "בית פרטי · מודיעין",
    title: "בית פרטי במודיעין",
    desc: [
      "שלוש קומות, סיפור אחד.",
      "הילדים מתחילים לצאת מהקן וזה הזמן שלי להיכנס ולשדרג. הם חיכו לזה בסבלנות והגיע הזמן לשינוי שישדרג להם את איכות החיים.",
      "\"מזלי, אנחנו רוצים חדר הורים כמו בבית מלון. חדר רחצה ענק וחדר ארונות. מה את אומרת, זה אפשרי?\"",
      "אז זה בדיוק מה שעשינו. תכננו חלוקת חלל חדשה בקומה העליונה ויצאנו לשיפוץ קומפלט.. הגשמנו חלום ואז הגיע תורה של הקומה הראשונה.",
      "\"אנחנו אוהבים את המטבח, יש מה לעשות איתו?\"",
      "אז ברור שיש.. צבענו, החלפנו ידיות, נשארנו עם קיר הבריקים ופשוט שדרגנו את החלל המרכזי שיתאים בדיוק לסגנון החדש.",
      "משפחה שנכנסה לי ללב ונתנה לי את כל האישורים להשתגע…",
    ],
  },
  {
    slug: "cabins", count: 13, cover: 1, tag: "צימרים · מושב",
    title: "מתחם צימרים במושב",
    desc: [
      "החלום שלי, בית עץ. הכל בלי יוצא מן הכלל בנוי מעץ. הקירות, הרצפה והגג. מפה אפשר רק להשתגע..",
      "2 יחידות שעיצבנו בסגנון כפרי עדין. יחידות של שני חדרים, מטבח וחלל מרכזי + חדר שינה מפנק ומזמין עם אופציה לשהות ארוכה. ארון אחסון גדול בחדר כולל פינת עבודה.",
      "יש יותר מפנק מזה?",
    ],
  },
  {
    slug: "ganei-tikva", count: 12, cover: 1, tag: "בית נגיש · קריית אונו",
    title: "שיפוץ לבית נגיש בקריית אונו",
    desc: [
      "\"מזלי מה שלומך? קיבלתי את המספר שלך ואני אשמח שתגיעי לעצב לי את בית החלומות שלי\"",
      "הלקוחה שלי החלימה מסרטן וביקשה בית חלומות מפנק. תוך כדי תכנון חדש לבית, היא התקשרה בוכה, שבית החלומות זה כבר לא יהיה והיא צריכה בית נגיש.",
      "מיד הרגעתי אותה שבית חלומות יכול להיות נגיש ואנחנו ממשיכים בתוכניות חדשות עם אותה מטרה. חידשנו, הגדלנו, פתחנו והדגשנו שהבית נגיש, בלי שבכלל ישימו לב.",
      "אז לא שמנו שטיחים וגם לא זכוכיות במקלחת. והספסל ליד המיטה? היה חלום שלה לשבת על אדן החלון.. ועכשיו הוא גם נגיש לה בישיבה על המיטה.",
      "הטלפון בסיום הפרויקט גרם לי להתרגש ורק הדגיש לי את מה שתמיד ידעתי. עיצוב פנים הוא לא רק יופי ואסתטיקה, הוא גם משנה חיים.",
      "\"מזלי, בבית חולים רצו להעביר אותי לדיור מוגן בסיום האשפוז. שלחתי נציג אליי הביתה שיבין ששום דיור מוגן לא יהיה פה. אני גרה בבית שלי, בזכותך.\"",
    ],
  },
  {
    slug: "modiin-3", count: 13, cover: 1, tag: "חלל מרכזי · מודיעין",
    title: "שיפוץ חלל מרכזי במודיעין",
    desc: [
      "הם קנו את דירת החלומות שלהם וביקשו להתמקד רק בחלל המרכזי. למה? כי בית לא בונים ביום אחד.",
      "תכננו מחדש את אזור המטבח, הגדלנו אותו, סידרנו סלון מרווח ונעים והשקענו בדיוק במה שצריך.",
      "משפחה מיוחדת שרצתה לעשות את זה בצעדים, והנה אחרי 3 שנים, אנחנו עובדים על החללים האחרים בבית.. נעדכן בהמשך :)",
    ],
  },
  {
    slug: "kiryat-ono", count: 12, cover: 1, tag: "5 חדרים · קריית אונו",
    title: "שיפוץ דירת 5 חדרים בקריית אונו",
    desc: [
      "הם הגיעו אליי מהמלצות, בדיוק הרחיבו את התא המשפחתי ורצו להפוך את הבית לנעים.",
      "הם לא רצו שיהיה צבע בבית. קירות צבעוניים? שלא תעזי!",
      "אז העזנו, וניסינו, וידעתי שיכול להיות שהכל יימחק וייצבע ללבן. עשיתי הדמיות ועדיין, הרגשתי שיכול להיות שהתוצאה לא תהיה לטובתי.",
      "אז אחרי הצבע, היא התקשרה להגיד שזה מוסיף לבית. ושהם ישאירו ונראה…",
      "אני לא מתעקשת על הרבה דברים. אבל צבע הוא חלק מהאפיון של הבית. אז הכנסנו אותו בקיר ולא בריהוט כדי שנוכל מהר לשנות..",
      "הקשבה לשני הצדדים חשובה מאוד בתהליך עיצוב הבית. במיוחד כשלקחתם מעצבת.",
    ],
  },
  {
    slug: "nursing-clinic", count: 9, cover: 1, tag: "קליניקה · תכנון וביצוע",
    title: "קליניקת הנקה",
    desc: [
      "היא תמיד חיכתה לפתוח קליניקה ואז זה הגיע, היא תפתח אותה בבית. המחסן הופך לקליניקה.",
      "התקשרה אליי ומיד יצאנו לעבודה. את הפרויקט הזה לקחתי גם בתכנון וגם בביצוע שלו.",
      "מי שמכיר אותי יודע שאני כל כך אוהבת לחדש ריהוט, להשתמש בקיים, להדביק, ליצור. וכאן זאת הייתה ההזדמנות שלי.",
      "עשינו תוכנית, צבענו את החדר, הדבקנו פרקט ואני הדבקתי את הטפט..",
      "וביחד יצרנו חדר חדש בבית שמיועד ללקוחות שלה, בתקציב נמוך ובעשייה מרובה.",
    ],
  },
  {
    slug: "shoham-kitchen", count: 8, cover: 1, tag: "מטבח · שוהם",
    title: "מטבח בשוהם",
    desc: [
      "היא התקשרה אליי אחרי שהיא שברה את המטבח שלה. המקום המרכזי של הבית, קודם היא שברה אותו ואז התקשרה..",
      "אז נכון, זו לא הדרך. קודם כל עושים תכנון ורק לאחר מכן שוברים.",
      "היא נשארה בלי מטבח כמעט חצי שנה. עד שהתוכניות לא היו מושלמות לא יצאנו לדרך. הדמיות ששינו כיוון, תוכניות שבוטלו והתחדשו.",
      "והתוצאה? תשפטו לבד.",
    ],
  },
];

const $ = (s, el = document) => el.querySelector(s);
const pad = n => String(n).padStart(2, "0");
const img = (slug, n, small) => `assets/img/projects/${slug}/${pad(n)}${small ? "-sm" : ""}.jpg`;

/* ---- Contact links ---- */
const waBase = `https://wa.me/${CONFIG.whatsapp}`;
const links = {
  whatsapp: `${waBase}?text=${encodeURIComponent(CONFIG.whatsappText)}`,
  phone: `tel:${CONFIG.phone.replace(/[^\d+]/g, "")}`,
  email: `mailto:${CONFIG.email}`,
  instagram: `https://instagram.com/${CONFIG.instagram}`,
};
document.querySelectorAll("[data-link]").forEach(a => {
  a.href = links[a.dataset.link];
  if (a.dataset.link === "whatsapp") { a.target = "_blank"; a.rel = "noopener"; }
});
document.querySelectorAll("[data-text]").forEach(el => {
  const k = el.dataset.text;
  el.textContent = k === "instagram" ? "@" + CONFIG.instagram : CONFIG[k];
});
$("#year").textContent = new Date().getFullYear();

/* ---- Header & mobile nav ---- */
const header = $(".header");
const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 30);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = $("#burger"), nav = $("#nav");
const setNav = open => {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "סגירת תפריט" : "פתיחת תפריט");
  document.body.classList.toggle("is-locked", open);
};
burger.addEventListener("click", () => setNav(!nav.classList.contains("is-open")));
nav.addEventListener("click", e => { if (e.target.closest("a")) setNav(false); });

/* ---- Reveal on scroll ---- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    io.unobserve(e.target);
  });
}, { rootMargin: "0px 0px -8% 0px" });
const observeReveal = root => root.querySelectorAll(".reveal:not(.is-in)").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});

/* ---- Project grid ---- */
const grid = $("#projectGrid");
grid.innerHTML = PROJECTS.map((p, i) => `
  <button class="proj reveal" data-i="${i}" aria-label="${p.title} – לצפייה בגלריה">
    <img src="${img(p.slug, p.cover, i >= 2 && i <= 4)}" alt="" loading="lazy">
    <span class="proj__more" aria-hidden="true">↖</span>
    <span class="proj__info">
      <span class="proj__tag">${p.tag}</span>
      <span class="proj__title">${p.title}</span>
    </span>
  </button>`).join("");
observeReveal(document);

/* ---- Project viewer: text on top, one large image at a time, thumbnails ---- */
const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCount = $("#lbCount"), lbThumbs = $("#lbThumbs");
let current = null, idx = 1, lastFocus = null;
const wrap = n => (n - 1 + current.count) % current.count + 1;

function showImage(n) {
  idx = wrap(n);
  lbImg.classList.add("is-loading");
  lbImg.onload = () => lbImg.classList.remove("is-loading");
  lbImg.src = img(current.slug, idx);
  if (lbImg.complete) lbImg.classList.remove("is-loading");
  lbImg.alt = `${current.title} – תמונה ${idx}`;
  lbCount.textContent = `${idx} / ${current.count}`;
  lbThumbs.querySelectorAll("button").forEach(b => {
    const on = +b.dataset.n === idx;
    b.classList.toggle("is-active", on);
    if (on) { b.setAttribute("aria-current", "true"); b.scrollIntoView({ block: "nearest", inline: "nearest" }); }
    else b.removeAttribute("aria-current");
  });
  [idx + 1, idx - 1].forEach(k => { new Image().src = img(current.slug, wrap(k)); });  // preload neighbours
}
/* Desktop: the story column must fit without scrolling, so shrink the text until it does */
const desktop = matchMedia("(min-width: 961px)");
function fitStory() {
  const head = $(".lightbox__head"), desc = $("#lbDesc");
  desc.style.fontSize = "";
  if (!desktop.matches || lb.hidden) return;
  let size = 1.08;                                    // rem, same as the CSS default
  desc.style.fontSize = size + "rem";
  while (head.scrollHeight > head.clientHeight + 1 && size > 0.72) {
    size -= 0.02;
    desc.style.fontSize = size.toFixed(2) + "rem";
  }
}
addEventListener("resize", fitStory);

function openProject(i) {
  current = PROJECTS[i];
  lastFocus = document.activeElement;
  $("#lbTag").textContent = current.tag;
  $("#lbTitle").textContent = current.title;
  const paras = [].concat(current.desc || []);
  const desc = $("#lbDesc");
  desc.replaceChildren(...paras.map(t => Object.assign(document.createElement("p"), { textContent: t })));
  desc.classList.remove("is-open");
  $("#lbMore").hidden = paras.length < 2;
  $("#lbMore").textContent = "לסיפור המלא ↓";
  lbThumbs.innerHTML = Array.from({ length: current.count }, (_, k) => `
    <button data-n="${k + 1}" aria-label="תמונה ${k + 1} מתוך ${current.count}">
      <img src="${img(current.slug, k + 1, true)}" alt="" loading="lazy">
    </button>`).join("");
  setZoom(false);
  lb.hidden = false;
  document.body.classList.add("is-locked");
  showImage(current.cover || 1);
  fitStory();
  document.fonts?.ready.then(fitStory);
  $(".lightbox__close").focus();
}
const setZoom = on => {
  lb.classList.toggle("is-zoomed", on);
  $(".lightbox__close").setAttribute("aria-label", on ? "חזרה לפרויקט" : "סגירה");
};
function closeLightbox() {
  if (lb.classList.contains("is-zoomed")) return setZoom(false);  // first step back: leave full-screen
  lb.hidden = true;
  document.body.classList.remove("is-locked");
  lastFocus && lastFocus.focus();
}

grid.addEventListener("click", e => {
  const b = e.target.closest(".proj");
  if (b) openProject(+b.dataset.i);
});
lb.addEventListener("click", e => {
  const act = e.target.closest("[data-lb]")?.dataset.lb;
  if (act === "close") closeLightbox();
  if (act === "next") showImage(idx + 1);
  if (act === "prev") showImage(idx - 1);
  if (act === "more") {
    const open = $("#lbDesc").classList.toggle("is-open");
    e.target.textContent = open ? "סגירה ↑" : "לסיפור המלא ↓";
    $("#lbDesc").scrollTop = 0;
  }
  if (e.target === lbImg) setZoom(!lb.classList.contains("is-zoomed"));
  const t = e.target.closest(".lightbox__thumbs button");
  if (t) showImage(+t.dataset.n);
});
let touchX = null;
const stage = $(".lightbox__stage");
stage.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
stage.addEventListener("touchend", e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  // RTL: swiping right moves forward
  if (Math.abs(dx) > 45) showImage(idx + (dx > 0 ? 1 : -1));
  touchX = null;
});

addEventListener("keydown", e => {
  if (!lb.hidden) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(idx + 1);
    if (e.key === "ArrowRight") showImage(idx - 1);
  } else if (nav.classList.contains("is-open") && e.key === "Escape") setNav(false);
});

/* ---- Contact form → WhatsApp ---- */
const form = $("#contactForm"), note = $("#formNote");
form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const name = d.get("name").trim(), phone = d.get("phone").trim();
  form.name.classList.toggle("is-invalid", !name);
  form.phone.classList.toggle("is-invalid", phone.replace(/\D/g, "").length < 9);
  if (form.querySelector(".is-invalid")) {
    note.textContent = "רק צריכה שם וטלפון תקין ואנחנו בדרך 🙂";
    return;
  }
  const text = [
    `היי Mazali! 👋`,
    `שמי ${name}, ואני מעוניין/ת לשמוע על עיצוב ${d.get("type")}.`,
    d.get("msg").trim() && `קצת פרטים: ${d.get("msg").trim()}`,
    `טלפון: ${phone}`,
  ].filter(Boolean).join("\n");
  window.open(`${waBase}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  note.textContent = "מעולה! פתחנו לך את וואטסאפ עם ההודעה מוכנה 💚";
  form.reset();
});
