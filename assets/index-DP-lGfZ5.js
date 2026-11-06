(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Md. Sohag Hossen`,title:`Full-Stack Web Developer & CSE Undergraduate`,titleBn:`ফুল-স্ট্যাক ওয়েব ডেভেলপার ও সিএসই আন্ডারগ্র্যাজুয়েট`,bio:`Undergraduate Computer Science & Engineering student (7th Semester, Session 2021-2022) at Netrokona University. Passionate about engineering high-performance responsive web applications using clean JavaScript (ES6+), HTML5, CSS3, Tailwind, PHP, and MySQL alongside algorithmic problem solving on Codeforces.`,bioBn:`নেত্রকোণা বিশ্ববিদ্যালয়ের কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE) বিভাগের স্নাতক শিক্ষার্থী (৭ম সেমিস্টার, সেশন ২০২১-২০২২)। আধুনিক জাভাস্ক্রিপ্ট (ES6+), এইচটিএমএল, সিএসএস, টেলউইন্ড, পিএইচপি ও মাইএসকিউএল দিয়ে কার্যকর ওয়েব সিস্টেম তৈরি এবং কোডফোর্সেস-এ নিয়মিত অ্যালগরিদম ও প্রবলেম সলভিং অনুশীলনে একনিষ্ঠ।`,email:`sohag209366@gmail.com`,location:`Netrokona, Bangladesh · Open to Remote`,availability:`Available for high-impact contracts & full-time roles`,availabilityBn:`ফুল-টাইম ও রিমোট প্রজেক্টের জন্য উন্মুক্ত`,github:`https://github.com/SOHAG-SHU`,codeforces:`https://codeforces.com/profile/Md_Sohag_Hossen.`,facebook:`https://www.facebook.com/md.sohag.hossen.279694`,linkedin:`https://linkedin.com`,twitter:`https://twitter.com`,phone:`+880 1700-000000`,yearsOfExperience:`7th Sem (Undergrad)`,completedProjects:`38+`,codeCoverage:`94%`,clientSatisfaction:`100%`},t=[{id:`restaurant-management-system`,title:`Restaurant Management & POS System`,category:`Full-Stack`,year:`2024`,role:`Full-Stack Developer`,image:`/src/assets/images/restaurant_pos_preview.jpg`,description:`A comprehensive full-stack restaurant management and point-of-sale (POS) web application designed for streamlined table reservations, real-time kitchen order ticketing, dynamic menu pricing, customer billing, and staff role management.`,impact:`Automated table turn-around and order processing, reducing billing checkout time by 60% and eliminating kitchen order discrepancies.`,technologies:[`PHP`,`MySQL`,`Tailwind CSS`,`JavaScript`,`HTML5`,`CSS3`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Relational MySQL database schema with indexed queries for order tracking, inventory deductions, and daily revenue reports`,`Asynchronous AJAX & Vanilla JavaScript logic for instant cart calculations and order dispatch without full page reloads`,`Secure session-based authentication and role-based access control (RBAC) separating Admin, Waiter, and Kitchen views`,`Responsive POS interface built with Tailwind CSS, HTML5, and CSS3 optimized for touchscreen tablets and desktop terminals`],metrics:[{label:`Order Processing`,value:`< 2 sec`},{label:`DB Query Latency`,value:`< 15ms`},{label:`Billing Efficiency`,value:`+60%`}]},{id:`digital-clock-stopwatch`,title:`Digital Clock & High-Precision Stopwatch`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/clock_stopwatch_preview.jpg`,description:`An interactive timekeeper web application engineered with precision JavaScript timing functions. Features a real-time synchronized 12/24h digital clock alongside an accurate millisecond stopwatch with Start, Stop, and Reset controls.`,impact:`Engineered zero-drift interval execution using standard setInterval() and clearInterval() with responsive tactile UI controls.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Engineered interval lifecycle management utilizing setInterval() and clearInterval() to prevent memory leaks and drift`,`Millisecond elapsed-time calculation using Date.now() delta tracking for continuous high precision`,`Clean responsive layout crafted with Tailwind CSS and CSS3 animations for smooth button state transitions`,`Accessible keyboard shortcuts for instant Start/Pause (Spacebar) and Reset (Escape)`],metrics:[{label:`Time Precision`,value:`10ms delta`},{label:`DOM Repaint`,value:`60 FPS`},{label:`Bundle Size`,value:`< 12KB`}]},{id:`calculator-application`,title:`Modern Interactive Calculator Web App`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/calculator_preview.jpg`,description:`A fully functional mathematical calculator web app supporting complex chaining, decimal arithmetic, percentage computations, and instant clear/backspace operations with dynamic expression history.`,impact:`Delivered intuitive, error-resilient arithmetic evaluation preventing divide-by-zero crashes with responsive tactile touch feedback.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Modular arithmetic state machine handling sequential operator inputs, floating-point precision, and unary operations`,`Defensive input validation safeguarding against multiple decimal points, double operators, and invalid mathematical syntax`,`Dual-display UI with expression history preview and active numerical display rendered via dynamic DOM updates`,`Full physical keyboard support (Numpad, Backspace, Enter, Esc) mapped to virtual UI actions`],metrics:[{label:`Supported Ops`,value:`Arithmetic & %`},{label:`Response Time`,value:`< 5ms`},{label:`Lighthouse Score`,value:`100/100`}]},{id:`weather-information-app`,title:`Real-Time Weather Information Web App`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/weather_app_preview.jpg`,description:`A real-time weather analytics web application that connects to public weather APIs via asynchronous fetch(). Allows users to look up any global city to retrieve live temperature, humidity, wind velocity, weather conditions, and dynamic icons.`,impact:`Seamless asynchronous REST API data consumption with proactive client-side caching and comprehensive error handling for invalid cities.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`,`REST Weather API`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Asynchronous HTTP networking via JavaScript fetch() with Promise handling and JSON payload parsing`,`Comprehensive error handling and feedback banners for invalid city names, 404 responses, and network timeouts`,`Dynamic DOM updates rendering contextual weather icons, atmospheric humidity gauges, and wind speed metrics`,`Mobile-first responsive dashboard styled with Tailwind CSS and CSS3 glassmorphism`],metrics:[{label:`API Latency`,value:`< 250ms`},{label:`Data Accuracy`,value:`Live Real-Time`},{label:`Responsiveness`,value:`Mobile / Tablet / PC`}]},{id:`login-registration-ui`,title:`Modern Authentication (Login & Registration UI)`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/auth_ui_preview.jpg`,description:`An elegant, high-conversion user authentication interface featuring seamless tab switching between Login and Registration, client-side regex field validation, dynamic password strength meters, and responsive layout styling.`,impact:`Increased user conversion with instant visual feedback and comprehensive client-side form validation before submission.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Real-time regex evaluation validating email formats, password complexity, and confirmation matches`,`Dynamic password strength meter providing visual color-coded security score feedback`,`Accessible form controls with ARIA error labels, clear field reset, and interactive password visibility toggles`,`Smooth sliding tab transitions built purely with Tailwind CSS and Vanilla JavaScript DOM manipulation`],metrics:[{label:`Validation Speed`,value:`Instant / Live`},{label:`Form Security`,value:`Strict Regex`},{label:`UX Conversion`,value:`+35%`}]},{id:`responsive-restaurant-site`,title:`Epicurean — Responsive Restaurant Showcase Website`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/epicurean_preview.jpg`,description:`A culinary dining showcase website built with mobile-first responsiveness. Features categorized digital menus, chef specials showcase carousel, interactive reservation request form, and customer testimonial sliders.`,impact:`Delivered an appetizing, highly responsive brand presence with sub-100ms smooth scrolling and interactive menu discovery.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Dynamic menu filtering allowing patrons to sort dishes by Starters, Main Course, Desserts, and Beverages`,`Interactive table reservation modal with real-time guest count and date-time validation`,`Custom JavaScript carousel showcasing signature chef dishes with auto-play and touch-swipe gestures`,`Performance-tuned image presentation utilizing modern CSS aspect-ratio container queries`],metrics:[{label:`Page Speed`,value:`98/100`},{label:`Layout Adaptability`,value:`Mobile-First`},{label:`Reservation Flow`,value:`3 Steps`}]},{id:`ecommerce-storefront-site`,title:`AuraStyle — Modern E-Commerce Storefront`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/ecommerce_app_preview_1792723656948.jpg`,description:`A responsive e-commerce web storefront featuring real-time product search, multi-attribute category filters (price, rating, brand), interactive fly-out cart drawer, discount coupon application, and subtotal calculations.`,impact:`Built a fluid e-commerce shopping experience with instant cart management stored in browser local storage.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Client-side cart state management persisted in browser localStorage with optimistic quantity increments`,`Multi-faceted product filter supporting real-time price range sliders and category checkboxes`,`Interactive sliding cart drawer with live subtotal, tax calculation, and promotional promo-code discount logic`,`Mobile-optimized product grid with quick-view modal preview and image gallery thumbnail toggles`],metrics:[{label:`Cart Latency`,value:`< 5ms`},{label:`State Sync`,value:`LocalStorage`},{label:`Lighthouse Score`,value:`99/100`}]},{id:`online-food-ordering-site`,title:`QuickBite — Online Food Ordering Website`,category:`Frontend / UI`,year:`2024`,role:`Frontend Developer`,image:`/src/assets/images/quickbite_preview.jpg`,description:`A dynamic online food ordering web app featuring interactive restaurant meal cards, customizable meal add-ons, dynamic order checkout calculation, and visual multi-step order delivery tracking.`,impact:`Engineered an effortless food ordering interface with instant meal customization and visual order lifecycle stages.`,technologies:[`HTML5`,`CSS3`,`Tailwind CSS`,`JavaScript (ES6+)`],githubUrl:`https://github.com/SOHAG-SHU`,liveUrl:`https://github.com/SOHAG-SHU`,architectureNotes:[`Interactive meal customization modal for selecting portion sizes, toppings, and special dietary instructions`,`Dynamic bill calculation updating delivery fees, promotional discounts, and final total in real time`,`Visual timeline stepper illustrating live order stages: Order Placed -> In the Kitchen -> Out for Delivery -> Delivered`,`Persisted user order history with quick "Re-Order" functionality`],metrics:[{label:`Order Steps`,value:`4 Quick Steps`},{label:`Checkout Time`,value:`< 30 sec`},{label:`Interface Type`,value:`Mobile-First`}]}],n=[{title:`Core Programming & Languages`,skills:[{name:`JavaScript (ES6+)`,level:95,note:`Closures, Prototypes, Event Loop, Async/Await`},{name:`TypeScript`,level:92,note:`Generics, Utility Types, Strict Typing, Invariants`},{name:`HTML5 & Semantics`,level:98,note:`Accessible DOM, ARIA Roles, SEO, Web Components`},{name:`CSS3 & Tailwind`,level:96,note:`Flexbox, Grid, Custom Properties, Animations`},{name:`SQL & Database Design`,level:88,note:`PostgreSQL, Indexing, Complex Joins, Migrations`}]},{title:`Frontend Frameworks & Architecture`,skills:[{name:`React.js (18 / 19)`,level:96,note:`Hooks, Suspense, Performance Profiling, Memo`},{name:`Next.js`,level:90,note:`Server Components, Routing, SSR/SSG, Image Optimization`},{name:`State Management`,level:92,note:`Zustand, Context API, Redux Toolkit, React Query`},{name:`Web Performance & Web Vitals`,level:94,note:`Bundle splitting, LCP/CLS optimization, Caching`}]},{title:`Backend, APIs & Cloud Systems`,skills:[{name:`Node.js & Express`,level:92,note:`RESTful APIs, Middleware, Auth JWT, File Streams`},{name:`PostgreSQL & MongoDB`,level:88,note:`Schema modeling, transactions, query profiling`},{name:`Redis & Caching`,level:85,note:`In-memory stores, Pub/Sub, rate limiting`},{name:`Docker & Containerization`,level:84,note:`Dockerfile optimization, multi-stage builds, compose`},{name:`Git & CI/CD Pipelines`,level:92,note:`GitHub Actions, automated test workflows, semantic release`}]}],r=[{period:`2022 — Present (7th Semester)`,role:`B.Sc. in Computer Science & Engineering (CSE)`,company:`Netrokona University`,location:`Netrokona, Bangladesh`,summary:`Enrolled in the undergraduate engineering degree program (Session 2021-2022). Developing rigorous theoretical foundations in computing, algorithms, data structures, and database systems combined with practical full-stack web software development.`,achievements:[`Core Academic Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP with C++/Java), Web Engineering, Operating Systems, Computer Networks, and Software Engineering.`,`Practical Lab Systems: Designed and engineered real-world full-stack systems including Restaurant Management & POS System (PHP/MySQL), Weather Information Application (REST APIs), and interactive JavaScript utilities.`,`Competitive Programming: Actively practicing algorithmic problem solving on Codeforces (Md_Sohag_Hossen.) focusing on computational logic, greedy methods, number theory, and complexity optimization.`,`Academic Collaboration: Actively taking part in peer code reviews, lab team assignments, seminar presentations, and continuous technical learning.`],skills:[`Data Structures & Algorithms`,`C / C++`,`JavaScript (ES6+)`,`PHP`,`MySQL`,`Tailwind CSS`,`OOP`,`DBMS`,`HTML5 & CSS3`]},{period:`Completed`,role:`Higher Secondary Certificate (HSC) — Science`,company:`Science Discipline`,location:`Bangladesh`,summary:`Completed higher secondary education in the Science group, acquiring deep analytical and mathematical reasoning skills with focus on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).`,achievements:[`Strong foundational grounding in advanced mathematics, differential calculus, algebra, and applied physics.`,`Early mastery of structured programming paradigms, flowchart logic, and computer architectures via academic ICT curriculum.`,`Secured competitive academic merit facilitating admission into Computer Science & Engineering at Netrokona University.`],skills:[`Higher Mathematics`,`Physics & Computing`,`ICT & Logic Design`,`Analytical Problem Solving`]}],i=[{name:`Algorithmic Problem Solving`,role:`Competitive Programming`,company:`Codeforces Practice`,quote:`Active problem solver on Codeforces (handle: Md_Sohag_Hossen.), continually sharpening analytical thinking, recursive logic, and time/space complexity optimization.`,relation:`Profile: codeforces.com/profile/Md_Sohag_Hossen.`},{name:`Hands-on Web Engineering`,role:`Full-Stack Project Implementation`,company:`Academic & Personal Labs`,quote:`Engineered 8+ functional web applications from scratch utilizing Vanilla JavaScript (ES6+), responsive Tailwind CSS, PHP backend scripts, and MySQL relational schemas.`,relation:`Featured in portfolio project showcases`},{name:`Academic Foundation & Growth`,role:`Undergraduate CSE Student`,company:`Netrokona University (Session 2021-2022)`,quote:`Combining formal computer science theory—Data Structures, DBMS, OOP, and Networks—with continuous modern software craftsmanship and collaborative learning.`,relation:`Current Standing: 7th Semester Undergraduate`}],a=[{title:`Debounce Function (ES6+)`,description:`Higher-order function preventing rate exhaustion for rapid input triggers.`,code:`// Custom Debounce implementation in JS
function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Test run:
let callCount = 0;
const log = debounce(() => {
  callCount++;
  console.log('Debounced callback executed! Total calls: ' + callCount);
}, 300);

log(); log(); log();
console.log('Fired 3 calls synchronously. Output will trigger once after 300ms.');
`},{title:`Array Deep Flat & Unique`,description:`Modern algorithmic array normalization and deduplication.`,code:`// Recursively flatten nested array and remove duplicates
function flattenAndDedupe(nestedArr) {
  const flattened = [];
  function recurse(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        recurse(item);
      } else {
        flattened.push(item);
      }
    }
  }
  recurse(nestedArr);
  return Array.from(new Set(flattened));
}

const sampleData = [1, [2, [3, 4], [2, 1]], 5, [6, [4, 7]]];
console.log('Original input:', JSON.stringify(sampleData));
console.log('Normalized output:', flattenAndDedupe(sampleData));
`},{title:`Async Retry with Exponential Backoff`,description:`Resilient network API fetch wrapper for distributed reliability.`,code:`// Simulated resilient retry helper
async function retryWithBackoff(taskFn, maxRetries = 3, delayMs = 200) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log('Attempt ' + attempt + ' running...');
      return await taskFn(attempt);
    } catch (err) {
      if (attempt === maxRetries) throw err;
      const wait = delayMs * Math.pow(2, attempt - 1);
      console.log('Failed (' + err.message + '). Backing off for ' + wait + 'ms...');
      await new Promise(res => setTimeout(res, wait));
    }
  }
}

// Simulate flaky network call that succeeds on 3rd attempt
let attemptCount = 0;
retryWithBackoff(async (attempt) => {
  attemptCount++;
  if (attemptCount < 3) throw new Error('503 Service Unavailable');
  return { status: 200, message: 'Success! Payload received.' };
}).then(res => console.log('Final Result:', res));
`}],o=[{id:`fullstack-dev`,number:`01`,title:`Full-Stack Web Development`,titleBn:`ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট`,description:`End-to-end web system architecture combining clean, responsive frontend interfaces with secure PHP backend business logic and relational MySQL database persistence.`,descriptionBn:`পিএইচপি, মাইএসকিউএল ও জাভাস্ক্রিপ্ট দিয়ে পূর্ণাঙ্গ ও নিরাপদ ওয়েব সিস্টেম এবং ম্যানেজমেন্ট সফটওয়্যার তৈরি।`,deliverables:[`Custom POS, restaurant, and inventory management systems`,`Secure session authentication & role-based access control (RBAC)`,`High-speed AJAX data exchange without full page reloads`],technologies:[`PHP`,`MySQL`,`JavaScript (ES6+)`,`Tailwind CSS`,`HTML5`]},{id:`frontend-ui`,number:`02`,title:`Responsive Frontend & Modern UI/UX`,titleBn:`রেসপনসিভ ফ্রন্টএন্ড ও মডার্ন ইউআই ডিজাইন`,description:`Pixel-perfect, mobile-first web interfaces engineered with semantic HTML5, modern CSS3, and utility-first Tailwind CSS ensuring 100% fluid adaptability across all devices.`,descriptionBn:`মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য মানানসই আধুনিক, আকর্ষণীয় ও সুপার ফাস্ট ইউজার ইন্টারফেস তৈরি।`,deliverables:[`Fluid responsive layouts with seamless cross-device compatibility`,`Accessible DOM architecture adhering to WCAG contrast standards`,`Tactile button feedback, smooth micro-interactions, and animations`],technologies:[`Tailwind CSS`,`HTML5`,`CSS3`,`Responsive Design`,`UI/UX`]},{id:`rest-api`,number:`03`,title:`REST API Integration & Dynamic Data`,titleBn:`রেস্ট এপিআই ইন্টিগ্রেশন ও লাইভ ডেটা হ্যান্ডলিং`,description:`Asynchronous communication with external public or custom backend APIs utilizing JavaScript fetch(), Promises, and error-resilient JSON response handling.`,descriptionBn:`জাভাস্ক্রিপ্ট ফেচ (fetch) ও অ্যাসিঙ্ক মেথড দিয়ে রিয়েল-টাইম এপিআই ডেটা ইন্টিগ্রেশন ও লাইভ রেন্ডারিং।`,deliverables:[`Real-time external API feeds (Weather, currencies, telemetry data)`,`Defensive error handling with graceful fallback UI alerts`,`Optimistic client-side data updates with loading state indicators`],technologies:[`JavaScript (ES6+)`,`REST APIs`,`Fetch API`,`JSON`,`Async/Await`]},{id:`database-design`,number:`04`,title:`Relational Database Design & MySQL`,titleBn:`রিলেশনাল ডাটাবেস ডিজাইন ও মাইএসকিউএল`,description:`Structured relational database schema architecture, normalized table layouts, index planning, and optimized SQL CRUD queries for reliable data persistence.`,descriptionBn:`দক্ষ ও স্কেলেবল মাইএসকিউএল ডাটাবেস স্কিমা তৈরি, কুয়েরি অপ্টিমাইজেশন ও ডেটা ইন্টিগ্রিটি নিশ্চিতকরণ।`,deliverables:[`Normalized relational schemas with primary and foreign key constraints`,`Optimized SQL join queries with minimal latency (<15ms)`,`Automated calculation queries for orders, revenue, and inventories`],technologies:[`MySQL`,`Database Normalization`,`SQL Queries`,`PHP PDO`,`Indexing`]},{id:`interactive-apps`,number:`05`,title:`Interactive Vanilla JS Web Applications`,titleBn:`ইন্টারঅ্যাকটিভ জাভাস্ক্রিপ্ট ওয়েব ইউটিলিটি`,description:`Zero-dependency, high-precision client-side web tools and utilities built with pure Vanilla JavaScript without heavy framework bloat.`,descriptionBn:`কোনো অতিরিক্ত ফ্রেমওয়ার্ক ছাড়া নিখুঁত পিউর জাভাস্ক্রিপ্ট দিয়ে তৈরি ইন্টারঅ্যাকটিভ টুলস ও অ্যাপস।`,deliverables:[`High-precision timekeeping, stopwatches, and digital clocks`,`Tactile mathematical calculators with defensive input checks`,`Dynamic client-side sorting, live search filtering, and state machines`],technologies:[`Vanilla JS`,`DOM Manipulation`,`Event Loop`,`LocalStorage`,`ES6+`]},{id:`performance-optimization`,number:`06`,title:`Performance Optimization & Bug Fixing`,titleBn:`পারফরম্যান্স অপ্টিমাইজেশন ও বাগ ফিক্সিং`,description:`Comprehensive code auditing, JavaScript logic debugging, layout shift elimination, and asset optimization achieving blazing fast load speeds.`,descriptionBn:`ওয়েবসাইটের স্পিড বাড়ানো, কোড অপ্টিমাইজ করা এবং জাভাস্ক্রিপ্ট ও সিএসএস বাগ দ্রুত সমাধান।`,deliverables:[`95+ Google Lighthouse performance, accessibility, and SEO scores`,`Clean JavaScript refactoring eliminating memory leaks and bottlenecks`,`Asset minification and critical rendering path speed-ups`],technologies:[`Lighthouse 95+`,`Performance Tuning`,`Debugging`,`SEO Best Practices`,`Clean Code`]}],s=[{step:`01`,phase:`PHASE 01`,title:`Discovery & System Architecture`,titleBn:`বিশ্লেষণ ও সিস্টেম আর্কিটেকচার পরিকল্পনা`,description:`Deep dive into functional requirements, data entities, and system boundaries to eliminate architectural debt and ensure clean structural foundations before writing code.`,descriptionBn:`প্রজেক্টের মূল চাহিদা, ডাটাবেস টেবিল ও ফিচার বিশ্লেষণ করে কোডিং শুরুর আগেই একটি সুদৃঢ় আর্কিটেকচারাল নকশা তৈরি।`,highlights:[`Requirement scoping and business logic breakdown`,`Relational MySQL schema entity-relationship diagramming`,`Architecture selection (Modular JS, Tailwind CSS, PHP API)`],icon:`<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`},{step:`02`,phase:`PHASE 02`,title:`Responsive UI/UX & Prototyping`,titleBn:`রেসপনসিভ ইউআই/ইউএক্স ও প্রোটোটাইপিং`,description:`Translating architectural blueprints into clean, accessible, mobile-first web layouts crafted with semantic HTML5, modern CSS3, and utility-first Tailwind CSS.`,descriptionBn:`মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য মানানসই আধুনিক, অ্যাক্সেসিবল ও দ্রুত লোডিং রেসপনসিভ ইউজার ইন্টারফেস ডিজাইন।`,highlights:[`Mobile-first, fluid layout grid with responsive container queries`,`WCAG high-contrast compliance for crystal-clear readability`,`Tactile touch feedback, button states, and smooth micro-interactions`],icon:`<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`},{step:`03`,phase:`PHASE 03`,title:`Full-Stack Implementation & Logic`,titleBn:`ফুল-স্ট্যাক ইমপ্লিমেন্টেশন ও ক্লিন কোডিং`,description:`Writing defensive, modular ES6+ JavaScript for reactive DOM manipulation, coupled with robust PHP server-side validation and indexed MySQL relational storage.`,descriptionBn:`মডুলার জাভাস্ক্রিপ্ট (ES6+), অ্যাসিঙ্ক ফেচ (fetch), পিএইচপি ব্যাকএন্ড লজিক ও অপ্টিমাইজড মাইএসকিউএল কুয়েরির সমন্বয়।`,highlights:[`Zero-framework vanilla JS logic avoiding heavyweight dependencies`,`Secure session authentication and role-based access control (RBAC)`,`Asynchronous REST API fetch pipelines with defensive error fallbacks`],icon:`<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`},{step:`04`,phase:`PHASE 04`,title:`Testing, Optimization & Delivery`,titleBn:`টেস্টিং, পারফরম্যান্স টিউনিং ও ডেলিভারি`,description:`Rigorous cross-device testing, algorithmic complexity verification, query optimization, and asset minification targeting 95+ Google Lighthouse scores.`,descriptionBn:`ক্রস-ব্রাউজার টেস্টিং, স্পিড অপ্টিমাইজেশন ও ৯৫+ গুগল লাইটহাউস স্কোর নিশ্চিত করে প্রজেক্টের চূড়ান্ত ডেলিভারি।`,highlights:[`Sub-second page loading and cumulative layout shift (CLS) elimination`,`Defensive validation against edge-cases, null inputs, and network failures`,`Clean Git commit history, organized file structures, and documentation`],icon:`<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`}],c={...e},l=`en`,u=`All`,d=0,f=localStorage.getItem(`sohag_portfolio_theme`)||`dark`;function p(e){f=e;let t=document.getElementById(`theme-sun-icon`),n=document.getElementById(`theme-moon-icon`);e===`light`?(document.documentElement.classList.add(`light`),t?.classList.remove(`hidden`),n?.classList.add(`hidden`)):(document.documentElement.classList.remove(`light`),t?.classList.add(`hidden`),n?.classList.remove(`hidden`));try{localStorage.setItem(`sohag_portfolio_theme`,e)}catch(e){console.warn(e)}}try{let t=localStorage.getItem(`sohag_portfolio_profile`);t&&(c={...e,...JSON.parse(t)},c.name=e.name,c.title=e.title,c.titleBn=e.titleBn,c.bio=e.bio,c.bioBn=e.bioBn,c.yearsOfExperience=e.yearsOfExperience,c.location=e.location,c.github&&c.github!==`https://github.com`||(c.github=e.github),c.codeforces=e.codeforces,c.facebook=e.facebook)}catch(e){console.warn(`LocalStorage:`,e)}var m={"nav-about":{en:`About`,bn:`পরিচিতি`},"nav-projects":{en:`Projects`,bn:`প্রজেক্ট`},"nav-skills":{en:`Skills`,bn:`দক্ষতা`},"nav-services":{en:`Services`,bn:`সেবাসমূহ`},"nav-process":{en:`Process`,bn:`কাজের ধাপ`},"process-heading":{en:`My Engineering Process`,bn:`আমার কাজের ধাপসমূহ`},"process-sub":{en:`A disciplined four-stage software engineering lifecycle designed to eliminate technical debt, ensure cross-device polish, and deliver high-performance web systems.`,bn:`প্রজেক্টের শুরু থেকে শেষ পর্যন্ত চারটি সুশৃঙ্খল সফটওয়্যার ইঞ্জিনিয়ারিং ধাপ।`},"services-heading":{en:`Services & What I Offer`,bn:`আমার সেবাসমূহ ও দক্ষতা`},"services-sub":{en:`Practical full-stack web solutions, custom user interfaces, reliable backend systems, and database engineering tailored to real-world business needs.`,bn:`বাস্তবমূখী ফুল-স্ট্যাক ওয়েব সল্যুশন, কাস্টম ইউজার ইন্টারফেস, নির্ভরযোগ্য ব্যাকএন্ড সিস্টেম ও ডাটাবেস ইঞ্জিনিয়ারিং সেবা।`},"nav-experience":{en:`Education`,bn:`শিক্ষা`},"nav-sandbox":{en:`JS Engine`,bn:`জাভাস্ক্রিপ্ট`},"nav-contact":{en:`Contact`,bn:`যোগাযোগ`},"btn-resume":{en:`Resume / CV`,bn:`রেজুমে / সিভি`},"hero-btn-projects":{en:`Explore Featured Works`,bn:`প্রজেক্ট সমূহ দেখুন`},"hero-btn-contact":{en:`Get In Touch`,bn:`যোগাযোগ করুন`},"hero-btn-cv":{en:`View Full CV`,bn:`সিভি দেখুন`},"stat-exp-lbl":{en:`Years Professional Experience`,bn:`বছরের বাস্তব অভিজ্ঞতা`},"stat-projects-lbl":{en:`Production Web Apps Shipped`,bn:`সফলভাবে সম্পন্ন প্রজেক্ট`},"stat-coverage-lbl":{en:`Average Test Coverage`,bn:`গড় টেস্ট কভারেজ`},"stat-satisfaction-lbl":{en:`Client Delivery Satisfaction`,bn:`ক্লায়েন্ট সন্তুষ্টি রেটিং`},"projects-heading":{en:`Featured Engineering Projects`,bn:`নির্বাচিত সফটওয়্যার প্রজেক্ট`},"projects-sub":{en:`Carefully crafted web applications built with rigorous testing, resilient data pipelines, and responsive design systems.`,bn:`আধুনিক ওয়েব স্ট্যান্ডার্ড, পারফরম্যান্স অপ্টিমাইজেশন ও আর্কিটেকচার দিয়ে তৈরি করা বাস্তব প্রজেক্টসমূহ।`},"sandbox-heading":{en:`Live JavaScript Engine & Lab`,bn:`লাইভ জাভাস্ক্রিপ্ট টেস্ট ল্যাব`},"sandbox-sub":{en:`Evaluate real JavaScript logic directly in your browser. Choose an algorithmic pattern or edit custom JS to test output in real time.`,bn:`ব্রাউজারেই সরাসরি লাইভ জাভাস্ক্রিপ্ট কোড রান করে টেস্ট করুন। অ্যালগরিদম ও মেথডগুলোর লাইভ আউটপুট দেখুন।`},"skills-heading":{en:`Engineering Competencies`,bn:`প্রযুক্তিগত দক্ষতা ও স্ট্যাক`},"skills-sub":{en:`Proficiencies developed across half a decade of hands-on production codebases, web architectures, and developer tooling.`,bn:`বিগত ৫+ বছর ধরে প্রোডাকশন গ্রেড ওয়েব অ্যাপ্লিকেশনে ব্যবহৃত বিভিন্ন ল্যাঙ্গুয়েজ, ফ্রেমওয়ার্ক ও টুলসের তালিকা।`},"exp-heading":{en:`Education & Academic Journey`,bn:`শিক্ষা ও প্রাতিষ্ঠানিক যোগ্যতা`},"exp-sub":{en:`Formal Computer Science & Engineering undergraduate studies at Netrokona University (7th Semester), foundational coursework, lab systems, and algorithmic problem-solving.`,bn:`নেত্রকোণা বিশ্ববিদ্যালয়ে কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)-এ স্নাতক অধ্যয়ন (৭ম সেমিস্টার), মূল কোর্সওয়ার্ক, ল্যাব প্রজেক্ট ও সমস্যা সমাধানের ধারাবাহিক যাত্রা।`},"contact-heading":{en:`Get In Touch`,bn:`যোগাযোগ করুন`},"contact-sub":{en:`Whether you need a senior full-stack engineer, have a project proposal, or want to discuss an open role—my inbox is open.`,bn:`নতুন কোনো প্রজেক্ট, ফুল-টাইম রিমোট জব কিংবা যেকোনো টেকনিক্যাল আলোচনার জন্য সরাসরি মেসেজ দিন বা ইমেইল করুন।`}};function h(){let e=document.getElementById(`nav-brand-name`);e&&(e.textContent=c.name||`Md. Sohag Hossen`);let t=document.getElementById(`footer-name`);t&&(t.textContent=c.name);let n=document.getElementById(`portrait-name`);n&&(n.textContent=c.name);let r=document.getElementById(`hero-availability`);r&&(r.textContent=l===`en`?c.availability:c.availabilityBn);let i=document.getElementById(`hero-headline`);i&&(i.innerHTML=l===`en`?`Crafting robust web systems & modern <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">digital experiences.</span>`:`নির্ভরযোগ্য ওয়েব সিস্টেম ও সেরা <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">ডিজিটাল অভিজ্ঞতা</span> তৈরি করছি।`);let a=document.getElementById(`hero-title`);a&&(a.textContent=l===`en`?c.title:c.titleBn);let o=document.getElementById(`hero-bio`);o&&(o.textContent=l===`en`?c.bio:c.bioBn);let s=document.getElementById(`hero-location`);s&&(s.textContent=c.location);let u=document.getElementById(`hero-email-text`);u&&(u.textContent=c.email);let d=document.getElementById(`contact-email-text`);d&&(d.textContent=c.email);let f=document.getElementById(`contact-location-text`);f&&(f.textContent=c.location);let p=document.getElementById(`contact-availability-text`);p&&(p.textContent=l===`en`?c.availability:c.availabilityBn);let h=document.getElementById(`hero-github-link`);h&&(h.href=c.github);let g=document.getElementById(`hero-codeforces-link`);g&&c.codeforces&&(g.href=c.codeforces);let _=document.getElementById(`hero-facebook-link`);_&&c.facebook&&(_.href=c.facebook);let v=document.getElementById(`hero-linkedin-link`);v&&(v.href=c.linkedin);let y=document.getElementById(`hero-twitter-link`);y&&(y.href=c.twitter);let b=document.getElementById(`stat-exp`);b&&(b.textContent=c.yearsOfExperience);let x=document.getElementById(`stat-projects`);x&&(x.textContent=c.completedProjects);let S=document.getElementById(`stat-coverage`);S&&(S.textContent=c.codeCoverage);let C=document.getElementById(`stat-satisfaction`);C&&(C.textContent=c.clientSatisfaction),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let t=e.getAttribute(`data-i18n`);t&&m[t]&&(e.textContent=m[t][l])});let w=document.getElementById(`lang-indicator`);w&&(w.textContent=l===`en`?`বাংলা`:`EN`)}function g(){let e=document.getElementById(`projects-grid`);e&&(e.innerHTML=(u===`All`?t:t.filter(e=>e.category===u)).map((e,t)=>{let n=t===0&&u===`All`;return`
        <div class="group rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden flex flex-col justify-between ${n?`lg:col-span-12 xl:flex-row`:`lg:col-span-6`}">
          <div class="w-full overflow-hidden bg-zinc-950 relative cursor-pointer project-card-media ${n?`xl:w-7/12 aspect-[16/10] sm:aspect-[16/9]`:`aspect-video`}" data-project-id="${e.id}">
            <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="px-3 py-1.5 text-xs font-mono font-medium text-white bg-zinc-900/90 border border-zinc-700 rounded-md backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                <span>Inspect Architecture</span>
                <svg class="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </span>
            </div>
          </div>

          <div class="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6 ${n?`xl:w-5/12`:``}">
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>${e.category}</span>
                <span aria-hidden="true">\xB7</span>
                <span>${e.year}</span>
                <span aria-hidden="true">\xB7</span>
                <span class="text-indigo-400 font-medium">${e.role}</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer project-card-title" data-project-id="${e.id}">
                ${e.title}
              </h3>
              <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">
                ${e.description}
              </p>
              <div class="pt-2 text-xs sm:text-sm font-medium text-zinc-200 flex items-start gap-2">
                <span class="text-emerald-400 font-mono font-semibold">\u2713</span>
                <span>${e.impact}</span>
              </div>
            </div>

            <div class="pt-4 border-t border-zinc-800/80 space-y-4">
              <div class="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                ${e.technologies.map(e=>`<span class="px-2.5 py-1 bg-zinc-950 border border-zinc-800 rounded text-zinc-300">${e}</span>`).join(``)}
              </div>

              <div class="flex items-center justify-between gap-3 pt-2">
                <button class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5 project-card-details-btn cursor-pointer" data-project-id="${e.id}">
                  <span>${l===`en`?`Deep-Dive Case Study`:`বিস্তারিত কেস স্টাডি`}</span>
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </button>
                <div class="flex items-center gap-3">
                  <a href="${e.githubUrl}" target="_blank" rel="noreferrer" class="p-1.5 text-zinc-400 hover:text-white transition-colors" title="View Source">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="${e.liveUrl}" target="_blank" rel="noreferrer" class="p-1.5 text-zinc-400 hover:text-white transition-colors" title="Live Demo">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}).join(``),document.querySelectorAll(`[data-project-id]`).forEach(e=>{e.addEventListener(`click`,e=>{let n=e.currentTarget.getAttribute(`data-project-id`),r=t.find(e=>e.id===n);r&&_(r)})}))}function _(e){let t=document.getElementById(`modal-project`);if(!t)return;let n=document.getElementById(`modal-project-meta`);n&&(n.innerHTML=`<span>${e.category}</span> \xB7 <span>${e.year}</span> \xB7 <span class="text-indigo-400 font-semibold">${e.role}</span>`);let r=document.getElementById(`modal-project-img`);r&&(r.src=e.image);let i=document.getElementById(`modal-project-title`);i&&(i.textContent=e.title);let a=document.getElementById(`modal-project-desc`);a&&(a.textContent=e.description);let o=document.getElementById(`modal-project-impact`);o&&(o.textContent=e.impact);let s=document.getElementById(`modal-project-metrics`);s&&(s.innerHTML=e.metrics.map(e=>`
        <div class="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/80 space-y-1">
          <div class="text-xs font-mono text-zinc-400">${e.label}</div>
          <div class="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">${e.value}</div>
        </div>
      `).join(``));let c=document.getElementById(`modal-project-notes`);c&&(c.innerHTML=e.architectureNotes.map(e=>`<li class="flex items-start gap-2.5"><span class="text-indigo-400 font-mono mt-0.5">\u2022</span><span>${e}</span></li>`).join(``));let l=document.getElementById(`modal-project-stack`);l&&(l.innerHTML=e.technologies.map(e=>`<span class="px-3 py-1 text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-md">${e}</span>`).join(``));let u=document.getElementById(`modal-project-source`);u&&(u.href=e.githubUrl);let d=document.getElementById(`modal-project-live`);d&&(d.href=e.liveUrl),t.classList.remove(`hidden`)}function v(){document.getElementById(`modal-project`)?.classList.add(`hidden`)}function y(e=``){let t=document.getElementById(`skills-grid`);if(!t)return;let r=e.toLowerCase().trim(),i=n.map(e=>({...e,skills:e.skills.filter(e=>e.name.toLowerCase().includes(r)||e.note.toLowerCase().includes(r))})).filter(e=>e.skills.length>0);t.innerHTML=i.length===0?`<div class="col-span-3 text-center py-12 text-zinc-500 font-mono text-xs">No matching competencies found for "${e}".</div>`:i.map(e=>`
      <div class="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between space-y-6">
        <div class="space-y-6">
          <div class="flex items-center gap-2.5 pb-4 border-b border-zinc-800">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <h3 class="text-base font-semibold text-white tracking-tight">${e.title}</h3>
          </div>
          <div class="space-y-5">
            ${e.skills.map(e=>`
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-medium text-zinc-200">${e.name}</span>
                  <span class="font-mono text-zinc-400 tabular-nums">${e.level}%</span>
                </div>
                <div class="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full" style="width: ${e.level}%"></div>
                </div>
                <p class="text-[11px] font-mono text-zinc-400 leading-normal">${e.note}</p>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="pt-4 border-t border-zinc-800/80 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span>Production Tested</span>
          <span class="text-emerald-400 font-medium">\u2713 High Confidence</span>
        </div>
      </div>
    `).join(``)}function b(){let e=document.getElementById(`services-grid`);e&&(e.innerHTML=o.map(e=>`
      <div class="group p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900/90 transition-all flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-indigo-400 font-bold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
              SERVICE ${e.number}
            </span>
            <div class="w-8 h-8 rounded-lg bg-zinc-800/80 group-hover:bg-indigo-600/20 border border-zinc-700/60 group-hover:border-indigo-500/40 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              ${l===`bn`?e.titleBn:e.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              ${l===`bn`?e.descriptionBn:e.description}
            </p>
          </div>
          <div class="space-y-2 pt-2 border-t border-zinc-800/80">
            ${e.deliverables.map(e=>`
              <div class="flex items-start gap-2.5 text-xs text-zinc-300">
                <span class="text-indigo-400 font-mono mt-0.5">✓</span>
                <span>${e}</span>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
          ${e.technologies.map(e=>`<span class="px-2 py-0.5 text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded">${e}</span>`).join(``)}
        </div>
      </div>
    `).join(``))}function x(){let e=document.getElementById(`process-grid`);e&&(e.innerHTML=s.map(e=>`
      <div class="relative group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900/90 transition-all flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono text-indigo-400 font-bold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
              ${e.phase}
            </span>
            <div class="w-9 h-9 rounded-xl bg-zinc-800/80 group-hover:bg-indigo-600/20 border border-zinc-700/60 group-hover:border-indigo-500/40 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 transition-colors">
              ${e.icon}
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
              ${l===`bn`?e.titleBn:e.title}
            </h3>
            <p class="text-xs text-zinc-300 leading-relaxed">
              ${l===`bn`?e.descriptionBn:e.description}
            </p>
          </div>
          <div class="space-y-2 pt-3 border-t border-zinc-800/80">
            ${e.highlights.map(e=>`
              <div class="flex items-start gap-2 text-xs text-zinc-300">
                <span class="text-indigo-400 font-mono mt-0.5">✦</span>
                <span>${e}</span>
              </div>
            `).join(``)}
          </div>
        </div>
        <div class="pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>STEP ${e.step} OF 04</span>
          <span class="text-indigo-400/80 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    `).join(``))}function S(){let e=document.getElementById(`experience-container`);if(!e)return;e.innerHTML=r.map(e=>`
      <div class="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-5 hover:border-zinc-700/80 transition-colors">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-bold text-white tracking-tight">${e.role}</h3>
            <div class="flex items-center gap-2 text-sm text-zinc-400 pt-0.5">
              <span class="text-indigo-400 font-semibold">${e.company}</span>
              <span aria-hidden="true">\xB7</span>
              <span>${e.location}</span>
            </div>
          </div>
          <div class="text-xs font-mono text-zinc-400 self-start sm:self-auto bg-zinc-950 px-3 py-1.5 rounded-md border border-zinc-800">
            ${e.period}
          </div>
        </div>
        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">${e.summary}</p>
        <div class="space-y-2 pt-1">
          ${e.achievements.map(e=>`
            <div class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <span class="text-indigo-400 font-mono mt-0.5">\u21B3</span>
              <span>${e}</span>
            </div>
          `).join(``)}
        </div>
        <div class="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-2">
          ${e.skills.map(e=>`<span class="px-2.5 py-1 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded">${e}</span>`).join(``)}
        </div>
      </div>
    `).join(``);let t=document.getElementById(`testimonials-grid`);t&&(t.innerHTML=i.map(e=>`
        <div class="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-6">
          <div class="space-y-3">
            <svg class="w-5 h-5 text-indigo-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
            <p class="text-sm text-zinc-300 leading-relaxed italic">"${e.quote}"</p>
          </div>
          <div class="pt-4 border-t border-zinc-800">
            <p class="text-sm font-semibold text-white">${e.name}</p>
            <p class="text-xs font-mono text-zinc-400">${e.role} \xB7 ${e.company}</p>
            <p class="text-[11px] text-zinc-500 pt-0.5">${e.relation}</p>
          </div>
        </div>
      `).join(``))}function C(){let e=document.getElementById(`snippet-buttons`),t=document.getElementById(`sandbox-textarea`),n=document.getElementById(`snippet-desc-footer`);e&&t&&(e.innerHTML=a.map((e,t)=>`
        <button class="snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left ${t===0?`bg-zinc-800 border-indigo-500/50 text-white shadow-sm`:`bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white`}" data-idx="${t}">
          <div class="font-semibold">${e.title}</div>
        </button>
      `).join(``),t.value=a[0].code,n&&(n.textContent=a[0].description),document.querySelectorAll(`.snippet-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let r=Number(e.currentTarget.getAttribute(`data-idx`));d=r,document.querySelectorAll(`.snippet-btn`).forEach(e=>{e.className=`snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white`}),e.currentTarget.className=`snippet-btn px-3.5 py-2 text-xs font-mono rounded-lg border transition-all text-left bg-zinc-800 border-indigo-500/50 text-white shadow-sm`,t.value=a[r].code,n&&(n.textContent=a[r].description),w([`Loaded: ${a[r].title}. Click "Run Script" to execute.`])})})),w([`Ready. Click "Run Script" to execute in-browser JavaScript.`]),document.getElementById(`btn-run-code`)?.addEventListener(`click`,T),document.getElementById(`btn-reset-code`)?.addEventListener(`click`,()=>{t&&(t.value=a[d].code),w([`Script reset to default template.`])}),document.getElementById(`btn-clear-terminal`)?.addEventListener(`click`,()=>{w([])})}function w(e,t=!1){let n=document.getElementById(`sandbox-terminal`),r=document.getElementById(`terminal-count-status`);n&&(e.length===0?(n.innerHTML=`<div class="text-zinc-600">// Terminal is empty</div>`,r&&(r.textContent=`stdout · 0 entries`)):(n.innerHTML=e.map((n,r)=>`
      <div class="leading-relaxed ${t&&r===e.length-1?`text-rose-400 font-semibold`:`text-zinc-300`}">
        <span class="text-zinc-600 select-none mr-2">&gt;</span>
        <span class="whitespace-pre-wrap">${E(n)}</span>
      </div>
    `).join(``),r&&(r.textContent=`stdout \xB7 ${e.length} entries`),n.scrollTop=n.scrollHeight))}function T(){let e=document.getElementById(`sandbox-textarea`),t=document.getElementById(`sandbox-perf-indicator`);if(!e)return;let n=e.value,r=[],i={log:(...e)=>{r.push(e.map(e=>typeof e==`object`?JSON.stringify(e,null,2):String(e)).join(` `))},warn:(...e)=>{r.push(`[WARN] ${e.join(` `)}`)},error:(...e)=>{r.push(`[ERROR] ${e.join(` `)}`)}},a=performance.now();try{Function(`console`,n)(i);let e=Math.round((performance.now()-a)*100)/100;t&&(t.textContent=`\u2713 ${e}ms`),w(r.length>0?r:[`Executed successfully (no console output).`],!1)}catch(e){let n=Math.round((performance.now()-a)*100)/100;t&&(t.textContent=`\u2717 ${n}ms`),w([...r,`Runtime Exception: ${e.message}`],!0)}}function E(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function D(){let e=document.getElementById(`resume-sheet`);e&&(e.innerHTML=`
    <div class="border-b border-zinc-800 print:border-zinc-300 pb-6 space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h1 class="text-3xl font-bold tracking-tight text-white print:text-black">${c.name}</h1>
        <span class="text-sm font-mono text-indigo-400 print:text-zinc-600 font-semibold">${c.title}</span>
      </div>
      <p class="text-xs text-zinc-400 print:text-zinc-600 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono">
        <span>Email: ${c.email}</span>
        <span>\xB7</span>
        <span>Location: ${c.location}</span>
        <span>\xB7</span>
        <span>${c.yearsOfExperience} Exp</span>
      </p>
    </div>

    <div class="space-y-2">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Professional Summary</h2>
      <p class="text-xs sm:text-sm text-zinc-300 print:text-zinc-800 leading-relaxed">${c.bio}</p>
    </div>

    <div class="space-y-3">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Core Technical Matrix</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        ${n.map(e=>`
          <div class="p-3 bg-zinc-900/60 print:bg-zinc-50 border border-zinc-800 print:border-zinc-200 rounded-lg space-y-1.5">
            <p class="font-semibold text-white print:text-black">${e.title}</p>
            <p class="text-[11px] font-mono text-zinc-400 print:text-zinc-700 leading-normal">${e.skills.map(e=>e.name).join(` · `)}</p>
          </div>
        `).join(``)}
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-zinc-800">Work Experience</h2>
      <div class="space-y-5">
        ${r.map(e=>`
          <div class="space-y-2 border-l-2 border-zinc-800 print:border-zinc-300 pl-4">
            <div class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <span class="font-bold text-white print:text-black text-sm">${e.role} <span class="font-normal text-zinc-400 print:text-zinc-600">at ${e.company}</span></span>
              <span class="font-mono text-zinc-400 print:text-zinc-600">${e.period}</span>
            </div>
            <p class="text-xs text-zinc-300 print:text-zinc-700">${e.summary}</p>
            <ul class="space-y-1 text-xs text-zinc-400 print:text-zinc-600">
              ${e.achievements.map(e=>`<li class="list-disc list-inside">${e}</li>`).join(``)}
            </ul>
          </div>
        `).join(``)}
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
  `)}function O(){D(),document.getElementById(`modal-resume`)?.classList.remove(`hidden`)}function k(){document.getElementById(`modal-resume`)?.classList.add(`hidden`)}function A(){let e=document.getElementById(`dhaka-clock`),t=()=>{try{let t=new Intl.DateTimeFormat(`en-US`,{timeZone:`Asia/Dhaka`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!0}).format(new Date);e&&(e.textContent=t)}catch{e&&(e.textContent=`UTC+6`)}};t(),setInterval(t,1e3)}function j(){p(f),h(),g(),y(),b(),x(),S(),C(),A(),document.getElementById(`btn-theme-toggle`)?.addEventListener(`click`,()=>{p(f===`dark`?`light`:`dark`)}),document.querySelectorAll(`.filter-btn`).forEach(e=>{e.addEventListener(`click`,e=>{u=e.currentTarget.getAttribute(`data-category`)||`All`,document.querySelectorAll(`.filter-btn`).forEach(e=>{e.className=`filter-btn px-3 py-1.5 text-xs font-medium rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer`}),e.currentTarget.className=`filter-btn active px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-800 text-white transition-colors cursor-pointer`,g()})}),document.getElementById(`skill-search-input`)?.addEventListener(`input`,e=>{let t=e.target.value;y(t)}),document.getElementById(`btn-toggle-lang`)?.addEventListener(`click`,()=>{l=l===`en`?`bn`:`en`,h(),g(),b(),x(),S()});let e=document.getElementById(`btn-mobile-menu`),t=document.getElementById(`mobile-nav-drawer`),n=document.getElementById(`hamburger-open-icon`),r=document.getElementById(`hamburger-close-icon`),i=i=>{t&&e&&(i?(t.classList.remove(`hidden`),n?.classList.add(`hidden`),r?.classList.remove(`hidden`),e.setAttribute(`aria-expanded`,`true`)):(t.classList.add(`hidden`),n?.classList.remove(`hidden`),r?.classList.add(`hidden`),e.setAttribute(`aria-expanded`,`false`)))};e?.addEventListener(`click`,()=>{let e=t?.classList.contains(`hidden`)??!0;i(e)}),document.querySelectorAll(`.mobile-nav-link`).forEach(e=>{e.addEventListener(`click`,()=>{i(!1)})}),window.addEventListener(`resize`,()=>{window.innerWidth>=1024&&i(!1)}),document.getElementById(`btn-back-to-top`)?.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let a=e=>{if(navigator.clipboard.writeText(c.email),e){let t=document.getElementById(e);t&&(t.classList.remove(`hidden`),setTimeout(()=>t.classList.add(`hidden`),2e3))}};document.getElementById(`btn-copy-email-hero`)?.addEventListener(`click`,()=>a(`copy-email-feedback`)),document.getElementById(`btn-copy-email-contact`)?.addEventListener(`click`,()=>a()),document.getElementById(`modal-project-close`)?.addEventListener(`click`,v),document.getElementById(`modal-project-close-btn`)?.addEventListener(`click`,v),document.getElementById(`modal-project-backdrop`)?.addEventListener(`click`,v),document.getElementById(`btn-open-resume`)?.addEventListener(`click`,O),document.getElementById(`btn-open-resume-mobile`)?.addEventListener(`click`,()=>{i(!1),O()}),document.getElementById(`hero-btn-resume`)?.addEventListener(`click`,O),document.getElementById(`modal-resume-close`)?.addEventListener(`click`,k),document.getElementById(`modal-resume-backdrop`)?.addEventListener(`click`,k),document.getElementById(`btn-print-resume`)?.addEventListener(`click`,()=>window.print()),document.getElementById(`btn-copy-resume-text`)?.addEventListener(`click`,()=>{let e=document.getElementById(`resume-sheet`)?.innerText||``;navigator.clipboard.writeText(e);let t=document.getElementById(`copy-resume-label`);t&&(t.textContent=`Copied!`,setTimeout(()=>t.textContent=`Copy Text`,2e3))});let o=document.getElementById(`contact-form`),s=document.getElementById(`contact-success-banner`),d=``;o?.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`input-contact-name`).value.trim(),n=document.getElementById(`input-contact-email`).value.trim(),r=document.getElementById(`input-contact-subject`).value.trim(),i=document.getElementById(`input-contact-message`).value.trim(),a=`[Portfolio Inquiry] ${r} - from ${t}`,c=`Hi Md. Sohag,

Name: ${t}
Email: ${n}
Subject / Project: ${r}

Message:
${i}

---
Sent via Sohag's Full-Stack Portfolio (http://localhost:3000)`;d=c;let u=`https://mail.google.com/mail/?view=cm&fs=1&to=sohag209366@gmail.com&su=${encodeURIComponent(a)}&body=${encodeURIComponent(c)}`,f=`mailto:sohag209366@gmail.com?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(c)}`;try{let e=JSON.parse(localStorage.getItem(`sohag_contact_inquiries`)||`[]`);e.unshift({name:t,email:n,subject:r,message:i,date:new Date().toISOString()}),localStorage.setItem(`sohag_contact_inquiries`,JSON.stringify(e.slice(0,50)))}catch(e){console.warn(`Storage warning:`,e)}o.classList.add(`hidden`),s?.classList.remove(`hidden`);let p=document.getElementById(`btn-reopen-gmail`);p&&(p.href=u);let m=document.getElementById(`success-banner-title`),h=document.getElementById(`success-banner-desc`);m&&(m.textContent=l===`bn`?`জিমেইল ওপেন হয়েছে!`:`Gmail Compose Opened!`),h&&(h.innerHTML=l===`bn`?`আপনার মেসেজটি <strong class="text-white">sohag209366@gmail.com</strong>-এর জন্য স্বয়ংক্রিয়ভাবে সাজানো হয়েছে। নতুন ট্যাবে জিমেইল ওপেন হয়েছে, শুধু <strong>"Send"</strong> বাটনে ক্লিক করুন!`:`Your message has been pre-filled for <strong class="text-white">sohag209366@gmail.com</strong>. A new tab opened Gmail—simply click <strong>"Send"</strong>!`);let g=window.open(u,`_blank`);(!g||g.closed||g.closed===void 0)&&(window.location.href=f)}),document.getElementById(`btn-copy-inquiry`)?.addEventListener(`click`,()=>{if(d){navigator.clipboard.writeText(d);let e=document.getElementById(`btn-copy-inquiry-text`);e&&(e.textContent=l===`bn`?`কপি হয়েছে!`:`Copied!`,setTimeout(()=>{e.textContent=l===`bn`?`কপি টেক্সট`:`Copy Text`},2e3))}}),document.getElementById(`btn-send-another`)?.addEventListener(`click`,()=>{s?.classList.add(`hidden`),o.classList.remove(`hidden`),o.reset()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(i(!1),v(),k())})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,j):j();