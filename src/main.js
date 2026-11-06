/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  initialProfile,
  projectsData,
  skillCategories,
  workExperience,
  testimonials,
  servicesData,
  engineeringProcessData,
  interactiveCodeSnippets
} from "./data/portfolioData.js";
let currentProfile = { ...initialProfile };
let currentLang = "en";
let selectedCategory = "All";
let selectedSnippetIdx = 0;
let currentTheme = localStorage.getItem("sohag_portfolio_theme") || "dark";
function applyTheme(theme) {
  currentTheme = theme;
  const sunIcon = document.getElementById("theme-sun-icon");
  const moonIcon = document.getElementById("theme-moon-icon");
  if (theme === "light") {
    document.documentElement.classList.add("light");
    sunIcon?.classList.remove("hidden");
    moonIcon?.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("light");
    sunIcon?.classList.add("hidden");
    moonIcon?.classList.remove("hidden");
  }
  try {
    localStorage.setItem("sohag_portfolio_theme", theme);
  } catch (e) {
    console.warn(e);
  }
}
try {
  const cached = localStorage.getItem("sohag_portfolio_profile");
  if (cached) {
    currentProfile = { ...initialProfile, ...JSON.parse(cached) };
    currentProfile.name = initialProfile.name;
    currentProfile.title = initialProfile.title;
    currentProfile.titleBn = initialProfile.titleBn;
    currentProfile.bio = initialProfile.bio;
    currentProfile.bioBn = initialProfile.bioBn;
    currentProfile.yearsOfExperience = initialProfile.yearsOfExperience;
    currentProfile.location = initialProfile.location;
    if (!currentProfile.github || currentProfile.github === "https://github.com") {
      currentProfile.github = initialProfile.github;
    }
    currentProfile.codeforces = initialProfile.codeforces;
    currentProfile.facebook = initialProfile.facebook;
  }
} catch (e) {
  console.warn("LocalStorage:", e);
}
const translations = {
  "nav-about": { en: "About", bn: "\u09AA\u09B0\u09BF\u099A\u09BF\u09A4\u09BF" },
  "nav-projects": { en: "Projects", bn: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F" },
  "nav-skills": { en: "Skills", bn: "\u09A6\u0995\u09CD\u09B7\u09A4\u09BE" },
  "nav-services": { en: "Services", bn: "\u09B8\u09C7\u09AC\u09BE\u09B8\u09AE\u09C2\u09B9" },
  "nav-process": { en: "Process", bn: "\u0995\u09BE\u099C\u09C7\u09B0 \u09A7\u09BE\u09AA" },
  "process-heading": { en: "My Engineering Process", bn: "\u0986\u09AE\u09BE\u09B0 \u0995\u09BE\u099C\u09C7\u09B0 \u09A7\u09BE\u09AA\u09B8\u09AE\u09C2\u09B9" },
  "process-sub": {
    en: "A disciplined four-stage software engineering lifecycle designed to eliminate technical debt, ensure cross-device polish, and deliver high-performance web systems.",
    bn: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09C7\u09B0 \u09B6\u09C1\u09B0\u09C1 \u09A5\u09C7\u0995\u09C7 \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u099A\u09BE\u09B0\u099F\u09BF \u09B8\u09C1\u09B6\u09C3\u0999\u09CD\u0996\u09B2 \u09B8\u09AB\u099F\u0993\u09AF\u09BC\u09CD\u09AF\u09BE\u09B0 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09BF\u09AF\u09BC\u09BE\u09B0\u09BF\u0982 \u09A7\u09BE\u09AA\u0964"
  },
  "services-heading": { en: "Services & What I Offer", bn: "\u0986\u09AE\u09BE\u09B0 \u09B8\u09C7\u09AC\u09BE\u09B8\u09AE\u09C2\u09B9 \u0993 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE" },
  "services-sub": {
    en: "Practical full-stack web solutions, custom user interfaces, reliable backend systems, and database engineering tailored to real-world business needs.",
    bn: "\u09AC\u09BE\u09B8\u09CD\u09A4\u09AC\u09AE\u09C2\u0996\u09C0 \u09AB\u09C1\u09B2-\u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u0995 \u0993\u09AF\u09BC\u09C7\u09AC \u09B8\u09B2\u09CD\u09AF\u09C1\u09B6\u09A8, \u0995\u09BE\u09B8\u09CD\u099F\u09AE \u0987\u0989\u099C\u09BE\u09B0 \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09AB\u09C7\u09B8, \u09A8\u09BF\u09B0\u09CD\u09AD\u09B0\u09AF\u09CB\u0997\u09CD\u09AF \u09AC\u09CD\u09AF\u09BE\u0995\u098F\u09A8\u09CD\u09A1 \u09B8\u09BF\u09B8\u09CD\u099F\u09C7\u09AE \u0993 \u09A1\u09BE\u099F\u09BE\u09AC\u09C7\u09B8 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09BF\u09AF\u09BC\u09BE\u09B0\u09BF\u0982 \u09B8\u09C7\u09AC\u09BE\u0964"
  },
  "nav-experience": { en: "Education", bn: "শিক্ষা" },
  "nav-sandbox": { en: "JS Engine", bn: "\u099C\u09BE\u09AD\u09BE\u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F" },
  "nav-contact": { en: "Contact", bn: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997" },
  "btn-resume": { en: "Resume / CV", bn: "\u09B0\u09C7\u099C\u09C1\u09AE\u09C7 / \u09B8\u09BF\u09AD\u09BF" },
  "hero-btn-projects": { en: "Explore Featured Works", bn: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F \u09B8\u09AE\u09C2\u09B9 \u09A6\u09C7\u0996\u09C1\u09A8" },
  "hero-btn-contact": { en: "Get In Touch", bn: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8" },
  "hero-btn-cv": { en: "View Full CV", bn: "\u09B8\u09BF\u09AD\u09BF \u09A6\u09C7\u0996\u09C1\u09A8" },
  "stat-exp-lbl": { en: "Years Professional Experience", bn: "\u09AC\u099B\u09B0\u09C7\u09B0 \u09AC\u09BE\u09B8\u09CD\u09A4\u09AC \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A4\u09BE" },
  "stat-projects-lbl": { en: "Production Web Apps Shipped", bn: "\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F" },
  "stat-coverage-lbl": { en: "Average Test Coverage", bn: "\u0997\u09A1\u09BC \u099F\u09C7\u09B8\u09CD\u099F \u0995\u09AD\u09BE\u09B0\u09C7\u099C" },
  "stat-satisfaction-lbl": { en: "Client Delivery Satisfaction", bn: "\u0995\u09CD\u09B2\u09BE\u09AF\u09BC\u09C7\u09A8\u09CD\u099F \u09B8\u09A8\u09CD\u09A4\u09C1\u09B7\u09CD\u099F\u09BF \u09B0\u09C7\u099F\u09BF\u0982" },
  "projects-heading": { en: "Featured Engineering Projects", bn: "\u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09BF\u09A4 \u09B8\u09AB\u099F\u0993\u09AF\u09BC\u09CD\u09AF\u09BE\u09B0 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F" },
  "projects-sub": {
    en: "Carefully crafted web applications built with rigorous testing, resilient data pipelines, and responsive design systems.",
    bn: "\u0986\u09A7\u09C1\u09A8\u09BF\u0995 \u0993\u09AF\u09BC\u09C7\u09AC \u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09BE\u09B0\u09CD\u09A1, \u09AA\u09BE\u09B0\u09AB\u09B0\u09AE\u09CD\u09AF\u09BE\u09A8\u09CD\u09B8 \u0985\u09AA\u09CD\u099F\u09BF\u09AE\u09BE\u0987\u099C\u09C7\u09B6\u09A8 \u0993 \u0986\u09B0\u09CD\u0995\u09BF\u099F\u09C7\u0995\u099A\u09BE\u09B0 \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09AC\u09BE\u09B8\u09CD\u09A4\u09AC \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09B8\u09AE\u09C2\u09B9\u0964"
  },
  "sandbox-heading": { en: "Live JavaScript Engine & Lab", bn: "\u09B2\u09BE\u0987\u09AD \u099C\u09BE\u09AD\u09BE\u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F \u099F\u09C7\u09B8\u09CD\u099F \u09B2\u09CD\u09AF\u09BE\u09AC" },
  "sandbox-sub": {
    en: "Evaluate real JavaScript logic directly in your browser. Choose an algorithmic pattern or edit custom JS to test output in real time.",
    bn: "\u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7\u0987 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09B2\u09BE\u0987\u09AD \u099C\u09BE\u09AD\u09BE\u09B8\u09CD\u0995\u09CD\u09B0\u09BF\u09AA\u09CD\u099F \u0995\u09CB\u09A1 \u09B0\u09BE\u09A8 \u0995\u09B0\u09C7 \u099F\u09C7\u09B8\u09CD\u099F \u0995\u09B0\u09C1\u09A8\u0964 \u0985\u09CD\u09AF\u09BE\u09B2\u0997\u09B0\u09BF\u09A6\u09AE \u0993 \u09AE\u09C7\u09A5\u09A1\u0997\u09C1\u09B2\u09CB\u09B0 \u09B2\u09BE\u0987\u09AD \u0986\u0989\u099F\u09AA\u09C1\u099F \u09A6\u09C7\u0996\u09C1\u09A8\u0964"
  },
  "skills-heading": { en: "Engineering Competencies", bn: "\u09AA\u09CD\u09B0\u09AF\u09C1\u0995\u09CD\u09A4\u09BF\u0997\u09A4 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE \u0993 \u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u0995" },
  "skills-sub": {
    en: "Proficiencies developed across half a decade of hands-on production codebases, web architectures, and developer tooling.",
    bn: "\u09AC\u09BF\u0997\u09A4 \u09EB+ \u09AC\u099B\u09B0 \u09A7\u09B0\u09C7 \u09AA\u09CD\u09B0\u09CB\u09A1\u09BE\u0995\u09B6\u09A8 \u0997\u09CD\u09B0\u09C7\u09A1 \u0993\u09AF\u09BC\u09C7\u09AC \u0985\u09CD\u09AF\u09BE\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09AC\u09BF\u09AD\u09BF\u09A8\u09CD\u09A8 \u09B2\u09CD\u09AF\u09BE\u0999\u09CD\u0997\u09C1\u09AF\u09BC\u09C7\u099C, \u09AB\u09CD\u09B0\u09C7\u09AE\u0993\u09AF\u09BC\u09BE\u09B0\u09CD\u0995 \u0993 \u099F\u09C1\u09B2\u09B8\u09C7\u09B0 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE\u0964"
  },
  "exp-heading": { en: "Education & Academic Journey", bn: "শিক্ষা ও প্রাতিষ্ঠানিক যোগ্যতা" },
  "exp-sub": {
    en: "Formal Computer Science & Engineering undergraduate studies at Netrokona University (7th Semester), foundational coursework, lab systems, and algorithmic problem-solving.",
    bn: "নেত্রকোণা বিশ্ববিদ্যালয়ে কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)-এ স্নাতক অধ্যয়ন (৭ম সেমিস্টার), মূল কোর্সওয়ার্ক, ল্যাব প্রজেক্ট ও সমস্যা সমাধানের ধারাবাহিক যাত্রা।"
  },
  "contact-heading": { en: "Get In Touch", bn: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8" },
  "contact-sub": {
    en: "Whether you need a senior full-stack engineer, have a project proposal, or want to discuss an open role\u2014my inbox is open.",
    bn: "\u09A8\u09A4\u09C1\u09A8 \u0995\u09CB\u09A8\u09CB \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F, \u09AB\u09C1\u09B2-\u099F\u09BE\u0987\u09AE \u09B0\u09BF\u09AE\u09CB\u099F \u099C\u09AC \u0995\u09BF\u0982\u09AC\u09BE \u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u099F\u09C7\u0995\u09A8\u09BF\u0995\u09CD\u09AF\u09BE\u09B2 \u0986\u09B2\u09CB\u099A\u09A8\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09AE\u09C7\u09B8\u09C7\u099C \u09A6\u09BF\u09A8 \u09AC\u09BE \u0987\u09AE\u09C7\u0987\u09B2 \u0995\u09B0\u09C1\u09A8\u0964"
  }
};
function renderProfileUI() {
  const navBrand = document.getElementById("nav-brand-name");
  if (navBrand) navBrand.textContent = currentProfile.name || "Md. Sohag Hossen";
  const footerName = document.getElementById("footer-name");
  if (footerName) footerName.textContent = currentProfile.name;
  const portraitName = document.getElementById("portrait-name");
  if (portraitName) portraitName.textContent = currentProfile.name;
  const heroAvail = document.getElementById("hero-availability");
  if (heroAvail) {
    heroAvail.textContent = currentLang === "en" ? currentProfile.availability : currentProfile.availabilityBn;
  }
  const heroHeadline = document.getElementById("hero-headline");
  if (heroHeadline) {
    if (currentLang === "en") {
      heroHeadline.innerHTML = `Crafting robust web systems & modern <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">digital experiences.</span>`;
    } else {
      heroHeadline.innerHTML = `\u09A8\u09BF\u09B0\u09CD\u09AD\u09B0\u09AF\u09CB\u0997\u09CD\u09AF \u0993\u09AF\u09BC\u09C7\u09AC \u09B8\u09BF\u09B8\u09CD\u099F\u09C7\u09AE \u0993 \u09B8\u09C7\u09B0\u09BE <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">\u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A4\u09BE</span> \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u099B\u09BF\u0964`;
    }
  }
  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.textContent = currentLang === "en" ? currentProfile.title : currentProfile.titleBn;
  }
  const heroBio = document.getElementById("hero-bio");
  if (heroBio) {
    heroBio.textContent = currentLang === "en" ? currentProfile.bio : currentProfile.bioBn;
  }
  const heroLoc = document.getElementById("hero-location");
  if (heroLoc) heroLoc.textContent = currentProfile.location;
  const heroEmail = document.getElementById("hero-email-text");
  if (heroEmail) heroEmail.textContent = currentProfile.email;
  const contactEmail = document.getElementById("contact-email-text");
  if (contactEmail) contactEmail.textContent = currentProfile.email;
  const contactLoc = document.getElementById("contact-location-text");
  if (contactLoc) contactLoc.textContent = currentProfile.location;
  const contactAvail = document.getElementById("contact-availability-text");
  if (contactAvail) {
    contactAvail.textContent = currentLang === "en" ? currentProfile.availability : currentProfile.availabilityBn;
  }
  const gh = document.getElementById("hero-github-link");
  if (gh) gh.href = currentProfile.github;
  const cf = document.getElementById("hero-codeforces-link");
  if (cf && currentProfile.codeforces) cf.href = currentProfile.codeforces;
  const fb = document.getElementById("hero-facebook-link");
  if (fb && currentProfile.facebook) fb.href = currentProfile.facebook;
  const li = document.getElementById("hero-linkedin-link");
  if (li) li.href = currentProfile.linkedin;
  const tw = document.getElementById("hero-twitter-link");
  if (tw) tw.href = currentProfile.twitter;
  const statExp = document.getElementById("stat-exp");
  if (statExp) statExp.textContent = currentProfile.yearsOfExperience;
  const statProj = document.getElementById("stat-projects");
  if (statProj) statProj.textContent = currentProfile.completedProjects;
  const statCov = document.getElementById("stat-coverage");
  if (statCov) statCov.textContent = currentProfile.codeCoverage;
  const statSat = document.getElementById("stat-satisfaction");
  if (statSat) statSat.textContent = currentProfile.clientSatisfaction;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && translations[key]) {
      el.textContent = translations[key][currentLang];
    }
  });
  const langIndicator = document.getElementById("lang-indicator");
  if (langIndicator) langIndicator.textContent = currentLang === "en" ? "\u09AC\u09BE\u0982\u09B2\u09BE" : "EN";
}
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  const filtered = selectedCategory === "All" ? projectsData : projectsData.filter((p) => p.category === selectedCategory);
  container.innerHTML = filtered.map((project, idx) => {
    const isLarge = idx === 0 && selectedCategory === "All";
    return `
        <div class="group rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between ${isLarge ? "lg:col-span-12 xl:flex-row" : "lg:col-span-6"}">
          <div class="w-full overflow-hidden bg-zinc-950 relative cursor-pointer project-card-media ${isLarge ? "xl:w-7/12 aspect-[16/10] sm:aspect-[16/9]" : "aspect-video"}" data-project-id="${project.id}">
            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="px-3 py-1.5 text-xs font-mono font-medium text-white bg-zinc-900/90 border border-zinc-700 rounded-md backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                <span>Inspect Architecture</span>
                <svg class="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </div>
          </div>

          <div class="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6 ${isLarge ? "xl:w-5/12" : ""}">
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>${project.category}</span>
                <span aria-hidden="true">\xB7</span>
                <span>${project.year}</span>
                <span aria-hidden="true">\xB7</span>
                <span class="text-indigo-400 font-medium">${project.role}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer project-card-title" data-project-id="${project.id}">
                ${project.title}
              </h3>
              <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">
                ${project.description}
              </p>
              <div class="pt-2 text-xs sm:text-sm font-medium text-zinc-200 flex items-start gap-2">
                <span class="text-emerald-400 font-mono font-semibold">\u2713</span>
                <span>${project.impact}</span>
              </div>
            </div>

            <div class="pt-4 border-t border-zinc-800/80 space-y-4">
              <div class="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                ${project.technologies.map(
      (tech) => `<span class="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-300">${tech}</span>`
    ).join("")}
              </div>

              <div class="flex items-center justify-between gap-3 pt-2">
                <button class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 project-card-details-btn cursor-pointer" data-project-id="${project.id}">
                  <span>${currentLang === "en" ? "Deep-Dive Case Study" : "\u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u0995\u09C7\u09B8 \u09B8\u09CD\u099F\u09BE\u09A1\u09BF"}</span>
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </button>
                <div class="flex items-center gap-3">
                  <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="p-1.5 text-zinc-400 hover:text-white transition-colors" title="View Source">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="p-1.5 text-zinc-400 hover:text-white transition-colors" title="Live Demo">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  }).join("");
  document.querySelectorAll("[data-project-id]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const pid = e.currentTarget.getAttribute("data-project-id");
      const found = projectsData.find((p) => p.id === pid);
      if (found) openProjectModal(found);
    });
  });
}
function openProjectModal(project) {
  const modal = document.getElementById("modal-project");
  if (!modal) return;
  const meta = document.getElementById("modal-project-meta");
  if (meta) {
    meta.innerHTML = `<span>${project.category}</span> \xB7 <span>${project.year}</span> \xB7 <span class="text-indigo-400 font-semibold">${project.role}</span>`;
  }
  const img = document.getElementById("modal-project-img");
  if (img) img.src = project.image;
  const title = document.getElementById("modal-project-title");
  if (title) title.textContent = project.title;
  const desc = document.getElementById("modal-project-desc");
  if (desc) desc.textContent = project.description;
  const impact = document.getElementById("modal-project-impact");
  if (impact) impact.textContent = project.impact;
  const metricsContainer = document.getElementById("modal-project-metrics");
  if (metricsContainer) {
    metricsContainer.innerHTML = project.metrics.map(
      (m) => `
        <div class="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 space-y-1">
          <div class="text-xs font-mono text-zinc-400">${m.label}</div>
          <div class="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">${m.value}</div>
        </div>
      `
    ).join("");
  }
  const notesList = document.getElementById("modal-project-notes");
  if (notesList) {
    notesList.innerHTML = project.architectureNotes.map((note) => `<li class="flex items-start gap-2.5"><span class="text-indigo-400 font-mono mt-0.5">\u2022</span><span>${note}</span></li>`).join("");
  }
  const stackContainer = document.getElementById("modal-project-stack");
  if (stackContainer) {
    stackContainer.innerHTML = project.technologies.map((tech) => `<span class="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-md">${tech}</span>`).join("");
  }
  const sourceLink = document.getElementById("modal-project-source");
  if (sourceLink) sourceLink.href = project.githubUrl;
  const liveLink = document.getElementById("modal-project-live");
  if (liveLink) liveLink.href = project.liveUrl;
  modal.classList.remove("hidden");
}
function closeProjectModal() {
  document.getElementById("modal-project")?.classList.add("hidden");
}
function renderSkills(filterQuery = "") {
  const container = document.getElementById("skills-grid");
  if (!container) return;
  const query = filterQuery.toLowerCase().trim();
  const filtered = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter(
      (s) => s.name.toLowerCase().includes(query) || s.note.toLowerCase().includes(query)
    )
  })).filter((cat) => cat.skills.length > 0);
  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-3 text-center py-12 text-zinc-500 font-mono text-xs">No matching competencies found for "${filterQuery}".</div>`;
    return;
  }
  container.innerHTML = filtered.map(
    (cat) => `
      <div class="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between space-y-6">
        <div class="space-y-6">
          <div class="flex items-center gap-2.5 pb-4 border-b border-zinc-800">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <h3 class="text-base font-semibold text-white tracking-tight">${cat.title}</h3>
          </div>
          <div class="space-y-5">
            ${cat.skills.map(
      (skill) => `
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-medium text-zinc-200">${skill.name}</span>
                  <span class="font-mono text-zinc-400 tabular-nums">${skill.level}%</span>
                </div>
                <div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full" style="width: ${skill.level}%"></div>
                </div>
                <p class="text-[11px] font-mono text-zinc-400 leading-normal">${skill.note}</p>
              </div>
            `
    ).join("")}
          </div>
        </div>
        <div class="pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span>Production Tested</span>
          <span class="text-emerald-400 font-medium">\u2713 High Confidence</span>
        </div>
      </div>
    `
  ).join("");
}

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;
  container.innerHTML = servicesData.map(
    (srv) => `
      <div class="group p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900/90 transition-all flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-indigo-400 font-bold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
              SERVICE ${srv.number}
            </span>
            <div class="w-8 h-8 rounded-lg bg-zinc-800/80 group-hover:bg-indigo-600/20 border border-zinc-700/60 group-hover:border-indigo-500/40 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              ${currentLang === "bn" ? srv.titleBn : srv.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              ${currentLang === "bn" ? srv.descriptionBn : srv.description}
            </p>
          </div>
          <div class="space-y-2 pt-2 border-t border-zinc-800/80">
            ${srv.deliverables.map(
      (del) => `
              <div class="flex items-start gap-2.5 text-xs text-zinc-300">
                <span class="text-indigo-400 font-mono mt-0.5">✓</span>
                <span>${del}</span>
              </div>
            `
    ).join("")}
          </div>
        </div>
        <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
          ${srv.technologies.map(
      (t) => `<span class="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded">${t}</span>`
    ).join("")}
        </div>
      </div>
    `
  ).join("");
}


function renderEngineeringProcess() {
  const container = document.getElementById("process-grid");
  if (!container) return;
  container.innerHTML = engineeringProcessData.map(
    (item) => `
      <div class="relative group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900/90 transition-all flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-indigo-400 font-bold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
              ${item.phase}
            </span>
            <div class="w-9 h-9 rounded-xl bg-zinc-800/80 group-hover:bg-indigo-600/20 border border-zinc-700/60 group-hover:border-indigo-500/40 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors">
              ${item.icon}
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              ${currentLang === "bn" ? item.titleBn : item.title}
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              ${currentLang === "bn" ? item.descriptionBn : item.description}
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-zinc-800/80">
            ${item.highlights.map(
      (h) => `
              <div class="flex items-start gap-2 text-xs text-zinc-300">
                <span class="text-indigo-400 font-mono mt-0.5">✦</span>
                <span>${h}</span>
              </div>
            `
    ).join("")}
          </div>
        </div>
        <div class="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>STEP ${item.step} OF 04</span>
          <span class="text-indigo-400/80 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    `
  ).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;
  container.innerHTML = workExperience.map(
    (exp) => `
      <div class="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-5 hover:border-zinc-700/80 transition-colors">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white tracking-tight">${exp.role}</h3>
            <div class="flex items-center gap-2 text-sm text-zinc-400 pt-0.5">
              <span class="text-indigo-400 font-semibold">${exp.company}</span>
              <span aria-hidden="true">\xB7</span>
              <span>${exp.location}</span>
            </div>
          </div>
          <div class="text-xs font-mono text-zinc-400 self-start sm:self-auto bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800">
            ${exp.period}
          </div>
        </div>
        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">${exp.summary}</p>
        <div class="space-y-2 pt-1">
          ${exp.achievements.map(
      (ach) => `
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <span class="text-indigo-400 font-mono mt-0.5">\u21B3</span>
              <span>${ach}</span>
            </div>
          `
    ).join("")}
        </div>
        <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-2">
          ${exp.skills.map(
      (s) => `<span class="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded">${s}</span>`
    ).join("")}
        </div>
      </div>
    `
  ).join("");
  const testContainer = document.getElementById("testimonials-grid");
  if (testContainer) {
    testContainer.innerHTML = testimonials.map(
      (t) => `
        <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <svg class="w-5 h-5 text-indigo-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
            <p class="text-sm text-zinc-300 leading-relaxed italic">"${t.quote}"</p>
          </div>
          <div class="pt-4 border-t border-zinc-800">
            <p class="text-sm font-semibold text-white">${t.name}</p>
            <p class="text-xs font-mono text-zinc-400">${t.role} \xB7 ${t.company}</p>
            <p class="text-[11px] text-zinc-500 pt-0.5">${t.relation}</p>
          </div>
        </div>
      `
    ).join("");
  }
}
function initSandbox() {
  const snippetButtonsContainer = document.getElementById("snippet-buttons");
  const textarea = document.getElementById("sandbox-textarea");
  const footerDesc = document.getElementById("snippet-desc-footer");
  if (snippetButtonsContainer && textarea) {
    snippetButtonsContainer.innerHTML = interactiveCodeSnippets.map(
      (snip, idx) => `
        <button class="snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left ${idx === 0 ? "bg-zinc-800 border-indigo-500/50 text-white shadow-sm" : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"}" data-idx="${idx}">
          <div class="font-semibold">${snip.title}</div>
        </button>
      `
    ).join("");
    textarea.value = interactiveCodeSnippets[0].code;
    if (footerDesc) footerDesc.textContent = interactiveCodeSnippets[0].description;
    document.querySelectorAll(".snippet-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = Number(e.currentTarget.getAttribute("data-idx"));
        selectedSnippetIdx = idx;
        document.querySelectorAll(".snippet-btn").forEach((b) => {
          b.className = "snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white";
        });
        e.currentTarget.className = "snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left bg-zinc-800 border-indigo-500/50 text-white shadow-sm";
        textarea.value = interactiveCodeSnippets[idx].code;
        if (footerDesc) footerDesc.textContent = interactiveCodeSnippets[idx].description;
        setTerminalLogs([`Loaded: ${interactiveCodeSnippets[idx].title}. Click "Run Script" to execute.`]);
      });
    });
  }
  setTerminalLogs(['Ready. Click "Run Script" to execute in-browser JavaScript.']);
  document.getElementById("btn-run-code")?.addEventListener("click", runSandboxCode);
  document.getElementById("btn-reset-code")?.addEventListener("click", () => {
    if (textarea) textarea.value = interactiveCodeSnippets[selectedSnippetIdx].code;
    setTerminalLogs(["Script reset to default template."]);
  });
  document.getElementById("btn-clear-terminal")?.addEventListener("click", () => {
    setTerminalLogs([]);
  });
}
function setTerminalLogs(logs, isError = false) {
  const terminal = document.getElementById("sandbox-terminal");
  const countStatus = document.getElementById("terminal-count-status");
  if (!terminal) return;
  if (logs.length === 0) {
    terminal.innerHTML = `<div class="text-zinc-600">// Terminal is empty</div>`;
    if (countStatus) countStatus.textContent = "stdout \xB7 0 entries";
    return;
  }
  terminal.innerHTML = logs.map(
    (log, i) => `
      <div class="leading-relaxed ${isError && i === logs.length - 1 ? "text-rose-400 font-semibold" : "text-zinc-300"}">
        <span class="text-zinc-600 select-none mr-2">&gt;</span>
        <span class="whitespace-pre-wrap">${escapeHtml(log)}</span>
      </div>
    `
  ).join("");
  if (countStatus) countStatus.textContent = `stdout \xB7 ${logs.length} entries`;
  terminal.scrollTop = terminal.scrollHeight;
}
function runSandboxCode() {
  const textarea = document.getElementById("sandbox-textarea");
  const perfIndicator = document.getElementById("sandbox-perf-indicator");
  if (!textarea) return;
  const code = textarea.value;
  const capturedLogs = [];
  const mockConsole = {
    log: (...args) => {
      capturedLogs.push(
        args.map((a) => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ")
      );
    },
    warn: (...args) => {
      capturedLogs.push(`[WARN] ${args.join(" ")}`);
    },
    error: (...args) => {
      capturedLogs.push(`[ERROR] ${args.join(" ")}`);
    }
  };
  const startTime = performance.now();
  try {
    const fn = new Function("console", code);
    fn(mockConsole);
    const duration = Math.round((performance.now() - startTime) * 100) / 100;
    if (perfIndicator) perfIndicator.textContent = `\u2713 ${duration}ms`;
    setTerminalLogs(capturedLogs.length > 0 ? capturedLogs : ["Executed successfully (no console output)."], false);
  } catch (err) {
    const duration = Math.round((performance.now() - startTime) * 100) / 100;
    if (perfIndicator) perfIndicator.textContent = `\u2717 ${duration}ms`;
    setTerminalLogs([...capturedLogs, `Runtime Exception: ${err.message}`], true);
  }
}
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderResumeSheet() {
  const sheet = document.getElementById("resume-sheet");
  if (!sheet) return;
  sheet.innerHTML = `
    <div class="border-b border-zinc-800 print:border-zinc-300 pb-6 space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h1 class="text-3xl font-bold tracking-tight text-white print:text-black">${currentProfile.name}</h1>
        <span class="text-sm font-mono text-indigo-400 print:text-zinc-600 font-semibold">${currentProfile.title}</span>
      </div>
      <p class="text-xs text-zinc-400 print:text-zinc-600 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono">
        <span>Email: ${currentProfile.email}</span>
        <span>\xB7</span>
        <span>Location: ${currentProfile.location}</span>
        <span>\xB7</span>
        <span>${currentProfile.yearsOfExperience} Exp</span>
      </p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Professional Summary</h2>
      <p class="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">${currentProfile.bio}</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Core Technical Matrix</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        ${skillCategories.map(
    (c) => `
          <div class="p-3 bg-zinc-900/60 print:bg-zinc-50 border border-zinc-800 print:border-zinc-200 rounded-lg space-y-1.5">
            <p class="font-semibold text-white print:text-black">${c.title}</p>
            <p class="text-[11px] font-mono text-zinc-400 print:text-zinc-700 leading-normal">${c.skills.map((s) => s.name).join(" \xB7 ")}</p>
          </div>
        `
  ).join("")}
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Work Experience</h2>
      <div class="space-y-5">
        ${workExperience.map(
    (exp) => `
          <div class="space-y-2 border-l-2 border-zinc-800 print:border-zinc-300 pl-4">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <span class="font-bold text-white print:text-black text-sm">${exp.role} <span class="font-normal text-zinc-400 print:text-zinc-600">at ${exp.company}</span></span>
              <span class="font-mono text-zinc-400 print:text-zinc-600">${exp.period}</span>
            </div>
            <p class="text-xs text-zinc-300 print:text-zinc-700">${exp.summary}</p>
            <ul class="space-y-1 text-xs text-zinc-400 print:text-zinc-600">
              ${exp.achievements.map((a) => `<li class="list-disc list-inside">${a}</li>`).join("")}
            </ul>
          </div>
        `
  ).join("")}
      </div>
    </div>

    <div class="space-y-3">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Education & Credentials</h2>
      <div class="text-xs space-y-2 text-zinc-300 print:text-zinc-800">
        <div class="flex justify-between">
          <span class="font-semibold text-white print:text-black">B.Sc. in Computer Science & Engineering (CSE)</span>
          <span class="font-mono text-zinc-500">Graduated</span>
        </div>
        <div class="flex justify-between">
          <span>Meta Certified Front-End Developer</span>
          <span class="font-mono text-zinc-500">Verified</span>
        </div>
        <div class="flex justify-between">
          <span>AWS Certified Solutions Architect Associate</span>
          <span class="font-mono text-zinc-500">Verified</span>
        </div>
      </div>
    </div>
  `;
}
function openResumeModal() {
  renderResumeSheet();
  document.getElementById("modal-resume")?.classList.remove("hidden");
}
function closeResumeModal() {
  document.getElementById("modal-resume")?.classList.add("hidden");
}
function startDhakaClock() {
  const clockEl = document.getElementById("dhaka-clock");
  const update = () => {
    try {
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }).format(/* @__PURE__ */ new Date());
      if (clockEl) clockEl.textContent = timeStr;
    } catch {
      if (clockEl) clockEl.textContent = "UTC+6";
    }
  };
  update();
  setInterval(update, 1e3);
}
function initApp() {
  applyTheme(currentTheme);
  renderProfileUI();
  renderProjects();
  renderSkills();
  renderServices();
  renderEngineeringProcess();
  renderExperience();
  initSandbox();
  startDhakaClock();
  document.getElementById("btn-theme-toggle")?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const cat = e.currentTarget.getAttribute("data-category") || "All";
      selectedCategory = cat;
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.className = "filter-btn px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer";
      });
      e.currentTarget.className = "filter-btn active px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 text-white transition-colors cursor-pointer";
      renderProjects();
    });
  });
  document.getElementById("skill-search-input")?.addEventListener("input", (e) => {
    const val = e.target.value;
    renderSkills(val);
  });
  document.getElementById("btn-toggle-lang")?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "bn" : "en";
    renderProfileUI();
    renderProjects();
    renderServices();
    renderEngineeringProcess();
    renderExperience();
  });
  const mobileBtn = document.getElementById("btn-mobile-menu");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const openIcon = document.getElementById("hamburger-open-icon");
  const closeIcon = document.getElementById("hamburger-close-icon");
  const setMobileMenuState = (isOpen) => {
    if (!mobileDrawer || !mobileBtn) return;
    if (isOpen) {
      mobileDrawer.classList.remove("hidden");
      openIcon?.classList.add("hidden");
      closeIcon?.classList.remove("hidden");
      mobileBtn.setAttribute("aria-expanded", "true");
    } else {
      mobileDrawer.classList.add("hidden");
      openIcon?.classList.remove("hidden");
      closeIcon?.classList.add("hidden");
      mobileBtn.setAttribute("aria-expanded", "false");
    }
  };
  mobileBtn?.addEventListener("click", () => {
    const isCurrentlyHidden = mobileDrawer?.classList.contains("hidden") ?? true;
    setMobileMenuState(isCurrentlyHidden);
  });
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      setMobileMenuState(false);
    });
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setMobileMenuState(false);
    }
  });
  document.getElementById("btn-back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const handleCopyEmail = (feedbackElId) => {
    navigator.clipboard.writeText(currentProfile.email);
    if (feedbackElId) {
      const fb = document.getElementById(feedbackElId);
      if (fb) {
        fb.classList.remove("hidden");
        setTimeout(() => fb.classList.add("hidden"), 2e3);
      }
    }
  };
  document.getElementById("btn-copy-email-hero")?.addEventListener("click", () => handleCopyEmail("copy-email-feedback"));
  document.getElementById("btn-copy-email-contact")?.addEventListener("click", () => handleCopyEmail());
  document.getElementById("modal-project-close")?.addEventListener("click", closeProjectModal);
  document.getElementById("modal-project-close-btn")?.addEventListener("click", closeProjectModal);
  document.getElementById("modal-project-backdrop")?.addEventListener("click", closeProjectModal);
  document.getElementById("btn-open-resume")?.addEventListener("click", openResumeModal);
  document.getElementById("btn-open-resume-mobile")?.addEventListener("click", () => {
    setMobileMenuState(false);
    openResumeModal();
  });
  document.getElementById("hero-btn-resume")?.addEventListener("click", openResumeModal);
  document.getElementById("modal-resume-close")?.addEventListener("click", closeResumeModal);
  document.getElementById("modal-resume-backdrop")?.addEventListener("click", closeResumeModal);
  document.getElementById("btn-print-resume")?.addEventListener("click", () => window.print());
  document.getElementById("btn-copy-resume-text")?.addEventListener("click", () => {
    const text = document.getElementById("resume-sheet")?.innerText || "";
    navigator.clipboard.writeText(text);
    const lbl = document.getElementById("copy-resume-label");
    if (lbl) {
      lbl.textContent = "Copied!";
      setTimeout(() => lbl.textContent = "Copy Text", 2e3);
    }
  });
  const contactForm = document.getElementById("contact-form");
  const successBanner = document.getElementById("contact-success-banner");
  let lastFormattedBody = "";

    contactForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("input-contact-name").value.trim();
      const email = document.getElementById("input-contact-email").value.trim();
      const subject = document.getElementById("input-contact-subject").value.trim();
      const message = document.getElementById("input-contact-message").value.trim();

      const emailSubject = `[Portfolio Inquiry] ${subject} - from ${name}`;
      const emailBody = `Hi Md. Sohag,

Name: ${name}
Email: ${email}
Subject / Project: ${subject}

Message:
${message}

---
Sent via Sohag's Full-Stack Portfolio (http://localhost:3000)`;

      lastFormattedBody = emailBody;

      // 1. Direct Gmail Web URL (Opens Gmail in browser with everything pre-filled!)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sohag209366@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // 2. Native mailto URL (Fallback for mail apps)
      const mailtoUrl = `mailto:sohag209366@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Persist inquiry in browser localStorage as permanent backup
      try {
        const past = JSON.parse(localStorage.getItem("sohag_contact_inquiries") || "[]");
        past.unshift({ name, email, subject, message, date: new Date().toISOString() });
        localStorage.setItem("sohag_contact_inquiries", JSON.stringify(past.slice(0, 50)));
      } catch (err) {
        console.warn("Storage warning:", err);
      }

      // Hide form and show success state
      contactForm.classList.add("hidden");
      successBanner?.classList.remove("hidden");

      // Set reopen button href
      const reopenBtn = document.getElementById("btn-reopen-gmail");
      if (reopenBtn) {
        reopenBtn.href = gmailUrl;
      }

      // Update bilingual text
      const titleEl = document.getElementById("success-banner-title");
      const descEl = document.getElementById("success-banner-desc");
      if (titleEl) {
        titleEl.textContent = currentLang === "bn" ? "জিমেইল ওপেন হয়েছে!" : "Gmail Compose Opened!";
      }
      if (descEl) {
        descEl.innerHTML = currentLang === "bn"
          ? `আপনার মেসেজটি <strong class="text-white">sohag209366@gmail.com</strong>-এর জন্য স্বয়ংক্রিয়ভাবে সাজানো হয়েছে। নতুন ট্যাবে জিমেইল ওপেন হয়েছে, শুধু <strong>"Send"</strong> বাটনে ক্লিক করুন!`
          : `Your message has been pre-filled for <strong class="text-white">sohag209366@gmail.com</strong>. A new tab opened Gmail—simply click <strong>"Send"</strong>!`;
      }

      // Open Gmail in a new tab immediately!
      const win = window.open(gmailUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        // If popup blocker intervened, fallback to mailto or trigger click
        window.location.href = mailtoUrl;
      }
    });

    document.getElementById("btn-copy-inquiry")?.addEventListener("click", () => {
      if (lastFormattedBody) {
        navigator.clipboard.writeText(lastFormattedBody);
        const copyTextEl = document.getElementById("btn-copy-inquiry-text");
        if (copyTextEl) {
          copyTextEl.textContent = currentLang === "bn" ? "কপি হয়েছে!" : "Copied!";
          setTimeout(() => {
            copyTextEl.textContent = currentLang === "bn" ? "কপি টেক্সট" : "Copy Text";
          }, 2000);
        }
      }
    });

    document.getElementById("btn-send-another")?.addEventListener("click", () => {
      successBanner?.classList.add("hidden");
      contactForm.classList.remove("hidden");
      contactForm.reset();
    });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setMobileMenuState(false);
      closeProjectModal();
      closeResumeModal();
    }
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
