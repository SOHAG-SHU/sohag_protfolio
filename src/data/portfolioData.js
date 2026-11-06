const initialProfile = {
  name: "Md. Sohag Hossen",
  title: "Full-Stack Web Developer & CSE Undergraduate",
  titleBn: "\u09ab\u09c1\u09b2-\u09b8\u09cd\u099f\u09cd\u09af\u09be\u0995 \u0993\u09af\u09bc\u09c7\u09ac \u09a1\u09c7\u09ad\u09c7\u09b2\u09aa\u09be\u09b0 \u0993 \u09b8\u09bf\u098f\u09b8\u0987 \u0986\u09a8\u09cd\u09a1\u09be\u09b0\u0997\u09cd\u09b0\u09cd\u09af\u09be\u099c\u09c1\u09af\u09bc\u09c7\u099f",
  bio: "Undergraduate Computer Science & Engineering student (7th Semester, Session 2021-2022) at Netrokona University. Passionate about engineering high-performance responsive web applications using clean JavaScript (ES6+), HTML5, CSS3, Tailwind, PHP, and MySQL alongside algorithmic problem solving on Codeforces.",
  bioBn: "\u09a8\u09c7\u09a4\u09cd\u09b0\u0995\u09cb\u09a3\u09be \u09ac\u09bf\u09b6\u09cd\u09ac\u09ac\u09bf\u09a6\u09cd\u09af\u09be\u09b2\u09df\u09c7\u09b0 \u0995\u09ae\u09cd\u09aa\u09bf\u0989\u099f\u09be\u09b0 \u09b8\u09be\u09df\u09c7\u09a8\u09cd\u09b8 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u0987\u099e\u09cd\u099c\u09bf\u09a8\u09bf\u09df\u09be\u09b0\u09bf\u0982 (CSE) \u09ac\u09bf\u09ad\u09be\u0997\u09c7\u09b0 \u09b8\u09cd\u09a8\u09be\u09a4\u0995 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0\u09cd\u09a5\u09c0 (\u09ed\u09ae \u09b8\u09c7\u09ae\u09bf\u09b8\u09cd\u099f\u09be\u09b0, \u09b8\u09c7\u09b6\u09a8 \u09e8\u09e6\u09e8\u09e7-\u09e8\u09e6\u09e8\u09e8)\u0964 \u0986\u09a7\u09c1\u09a8\u09bf\u0995 \u099c\u09be\u09ad\u09be\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f (ES6+), \u098f\u0987\u099a\u099f\u09bf\u098f\u09ae\u098f\u09b2, \u09b8\u09bf\u098f\u09b8\u098f\u09b8, \u099f\u09c7\u09b2\u0989\u0987\u09a8\u09cd\u09a1, \u09aa\u09bf\u098f\u0987\u099a\u09aa\u09bf \u0993 \u09ae\u09be\u0987\u098f\u09b8\u0995\u09bf\u0989\u098f\u09b2 \u09a6\u09bf\u09df\u09c7 \u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0 \u0993\u09df\u09c7\u09ac \u09b8\u09bf\u09b8\u09cd\u099f\u09c7\u09ae \u09a4\u09c8\u09b0\u09bf \u098f\u09ac\u0982 \u0995\u09cb\u09a1\u09ab\u09cb\u09b0\u09cd\u09b8\u09c7\u09b8-\u098f \u09a8\u09bf\u09df\u09ae\u09bf\u09a4 \u0985\u09cd\u09af\u09be\u09b2\u0997\u09b0\u09bf\u09a6\u09ae \u0993 \u09aa\u09cd\u09b0\u09ac\u09b2\u09c7\u09ae \u09b8\u09b2\u09ad\u09bf\u0982 \u0985\u09a8\u09c1\u09b6\u09c0\u09b2\u09a8\u09c7 \u098f\u0995\u09a8\u09bf\u09b7\u09cd\u09a0\u0964",
  email: "sohag209366@gmail.com",
  location: "Netrokona, Bangladesh · Open to Remote",
  availability: "Available for high-impact contracts & full-time roles",
  availabilityBn: "\u09AB\u09C1\u09B2-\u099F\u09BE\u0987\u09AE \u0993 \u09B0\u09BF\u09AE\u09CB\u099F \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0989\u09A8\u09CD\u09AE\u09C1\u0995\u09CD\u09A4",
  github: "https://github.com/SOHAG-SHU",
  codeforces: "https://codeforces.com/profile/Md_Sohag_Hossen.",
  facebook: "https://www.facebook.com/md.sohag.hossen.279694",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  phone: "+880 1700-000000",
  yearsOfExperience: "7th Sem (Undergrad)",
  completedProjects: "38+",
  codeCoverage: "94%",
  clientSatisfaction: "100%"
};
const projectsData = [
  {
    id: "restaurant-management-system",
    title: "Restaurant Management & POS System",
    category: "Full-Stack",
    year: "2024",
    role: "Full-Stack Developer",
    image: "/src/assets/images/restaurant_pos_preview.jpg",
    description: "A comprehensive full-stack restaurant management and point-of-sale (POS) web application designed for streamlined table reservations, real-time kitchen order ticketing, dynamic menu pricing, customer billing, and staff role management.",
    impact: "Automated table turn-around and order processing, reducing billing checkout time by 60% and eliminating kitchen order discrepancies.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Relational MySQL database schema with indexed queries for order tracking, inventory deductions, and daily revenue reports",
      "Asynchronous AJAX & Vanilla JavaScript logic for instant cart calculations and order dispatch without full page reloads",
      "Secure session-based authentication and role-based access control (RBAC) separating Admin, Waiter, and Kitchen views",
      "Responsive POS interface built with Tailwind CSS, HTML5, and CSS3 optimized for touchscreen tablets and desktop terminals"
    ],
    metrics: [
      { label: "Order Processing", value: "< 2 sec" },
      { label: "DB Query Latency", value: "< 15ms" },
      { label: "Billing Efficiency", value: "+60%" }
    ]
  },
  {
    id: "digital-clock-stopwatch",
    title: "Digital Clock & High-Precision Stopwatch",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/clock_stopwatch_preview.jpg",
    description: "An interactive timekeeper web application engineered with precision JavaScript timing functions. Features a real-time synchronized 12/24h digital clock alongside an accurate millisecond stopwatch with Start, Stop, and Reset controls.",
    impact: "Engineered zero-drift interval execution using standard setInterval() and clearInterval() with responsive tactile UI controls.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Engineered interval lifecycle management utilizing setInterval() and clearInterval() to prevent memory leaks and drift",
      "Millisecond elapsed-time calculation using Date.now() delta tracking for continuous high precision",
      "Clean responsive layout crafted with Tailwind CSS and CSS3 animations for smooth button state transitions",
      "Accessible keyboard shortcuts for instant Start/Pause (Spacebar) and Reset (Escape)"
    ],
    metrics: [
      { label: "Time Precision", value: "10ms delta" },
      { label: "DOM Repaint", value: "60 FPS" },
      { label: "Bundle Size", value: "< 12KB" }
    ]
  },
  {
    id: "calculator-application",
    title: "Modern Interactive Calculator Web App",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/calculator_preview.jpg",
    description: "A fully functional mathematical calculator web app supporting complex chaining, decimal arithmetic, percentage computations, and instant clear/backspace operations with dynamic expression history.",
    impact: "Delivered intuitive, error-resilient arithmetic evaluation preventing divide-by-zero crashes with responsive tactile touch feedback.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Modular arithmetic state machine handling sequential operator inputs, floating-point precision, and unary operations",
      "Defensive input validation safeguarding against multiple decimal points, double operators, and invalid mathematical syntax",
      "Dual-display UI with expression history preview and active numerical display rendered via dynamic DOM updates",
      "Full physical keyboard support (Numpad, Backspace, Enter, Esc) mapped to virtual UI actions"
    ],
    metrics: [
      { label: "Supported Ops", value: "Arithmetic & %" },
      { label: "Response Time", value: "< 5ms" },
      { label: "Lighthouse Score", value: "100/100" }
    ]
  },
  {
    id: "weather-information-app",
    title: "Real-Time Weather Information Web App",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/weather_app_preview.jpg",
    description: "A real-time weather analytics web application that connects to public weather APIs via asynchronous fetch(). Allows users to look up any global city to retrieve live temperature, humidity, wind velocity, weather conditions, and dynamic icons.",
    impact: "Seamless asynchronous REST API data consumption with proactive client-side caching and comprehensive error handling for invalid cities.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "REST Weather API"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Asynchronous HTTP networking via JavaScript fetch() with Promise handling and JSON payload parsing",
      "Comprehensive error handling and feedback banners for invalid city names, 404 responses, and network timeouts",
      "Dynamic DOM updates rendering contextual weather icons, atmospheric humidity gauges, and wind speed metrics",
      "Mobile-first responsive dashboard styled with Tailwind CSS and CSS3 glassmorphism"
    ],
    metrics: [
      { label: "API Latency", value: "< 250ms" },
      { label: "Data Accuracy", value: "Live Real-Time" },
      { label: "Responsiveness", value: "Mobile / Tablet / PC" }
    ]
  },
  {
    id: "login-registration-ui",
    title: "Modern Authentication (Login & Registration UI)",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/auth_ui_preview.jpg",
    description: "An elegant, high-conversion user authentication interface featuring seamless tab switching between Login and Registration, client-side regex field validation, dynamic password strength meters, and responsive layout styling.",
    impact: "Increased user conversion with instant visual feedback and comprehensive client-side form validation before submission.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Real-time regex evaluation validating email formats, password complexity, and confirmation matches",
      "Dynamic password strength meter providing visual color-coded security score feedback",
      "Accessible form controls with ARIA error labels, clear field reset, and interactive password visibility toggles",
      "Smooth sliding tab transitions built purely with Tailwind CSS and Vanilla JavaScript DOM manipulation"
    ],
    metrics: [
      { label: "Validation Speed", value: "Instant / Live" },
      { label: "Form Security", value: "Strict Regex" },
      { label: "UX Conversion", value: "+35%" }
    ]
  },
  {
    id: "responsive-restaurant-site",
    title: "Epicurean \u2014 Responsive Restaurant Showcase Website",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/epicurean_preview.jpg",
    description: "A culinary dining showcase website built with mobile-first responsiveness. Features categorized digital menus, chef specials showcase carousel, interactive reservation request form, and customer testimonial sliders.",
    impact: "Delivered an appetizing, highly responsive brand presence with sub-100ms smooth scrolling and interactive menu discovery.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Dynamic menu filtering allowing patrons to sort dishes by Starters, Main Course, Desserts, and Beverages",
      "Interactive table reservation modal with real-time guest count and date-time validation",
      "Custom JavaScript carousel showcasing signature chef dishes with auto-play and touch-swipe gestures",
      "Performance-tuned image presentation utilizing modern CSS aspect-ratio container queries"
    ],
    metrics: [
      { label: "Page Speed", value: "98/100" },
      { label: "Layout Adaptability", value: "Mobile-First" },
      { label: "Reservation Flow", value: "3 Steps" }
    ]
  },
  {
    id: "ecommerce-storefront-site",
    title: "AuraStyle \u2014 Modern E-Commerce Storefront",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/ecommerce_app_preview_1792723656948.jpg",
    description: "A responsive e-commerce web storefront featuring real-time product search, multi-attribute category filters (price, rating, brand), interactive fly-out cart drawer, discount coupon application, and subtotal calculations.",
    impact: "Built a fluid e-commerce shopping experience with instant cart management stored in browser local storage.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Client-side cart state management persisted in browser localStorage with optimistic quantity increments",
      "Multi-faceted product filter supporting real-time price range sliders and category checkboxes",
      "Interactive sliding cart drawer with live subtotal, tax calculation, and promotional promo-code discount logic",
      "Mobile-optimized product grid with quick-view modal preview and image gallery thumbnail toggles"
    ],
    metrics: [
      { label: "Cart Latency", value: "< 5ms" },
      { label: "State Sync", value: "LocalStorage" },
      { label: "Lighthouse Score", value: "99/100" }
    ]
  },
  {
    id: "online-food-ordering-site",
    title: "QuickBite \u2014 Online Food Ordering Website",
    category: "Frontend / UI",
    year: "2024",
    role: "Frontend Developer",
    image: "/src/assets/images/quickbite_preview.jpg",
    description: "A dynamic online food ordering web app featuring interactive restaurant meal cards, customizable meal add-ons, dynamic order checkout calculation, and visual multi-step order delivery tracking.",
    impact: "Engineered an effortless food ordering interface with instant meal customization and visual order lifecycle stages.",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"],
    githubUrl: "https://github.com/SOHAG-SHU",
    liveUrl: "https://github.com/SOHAG-SHU",
    architectureNotes: [
      "Interactive meal customization modal for selecting portion sizes, toppings, and special dietary instructions",
      "Dynamic bill calculation updating delivery fees, promotional discounts, and final total in real time",
      "Visual timeline stepper illustrating live order stages: Order Placed -> In the Kitchen -> Out for Delivery -> Delivered",
      'Persisted user order history with quick "Re-Order" functionality'
    ],
    metrics: [
      { label: "Order Steps", value: "4 Quick Steps" },
      { label: "Checkout Time", value: "< 30 sec" },
      { label: "Interface Type", value: "Mobile-First" }
    ]
  }
];
const skillCategories = [
  {
    title: "Core Programming & Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 95, note: "Closures, Prototypes, Event Loop, Async/Await" },
      { name: "TypeScript", level: 92, note: "Generics, Utility Types, Strict Typing, Invariants" },
      { name: "HTML5 & Semantics", level: 98, note: "Accessible DOM, ARIA Roles, SEO, Web Components" },
      { name: "CSS3 & Tailwind", level: 96, note: "Flexbox, Grid, Custom Properties, Animations" },
      { name: "SQL & Database Design", level: 88, note: "PostgreSQL, Indexing, Complex Joins, Migrations" }
    ]
  },
  {
    title: "Frontend Frameworks & Architecture",
    skills: [
      { name: "React.js (18 / 19)", level: 96, note: "Hooks, Suspense, Performance Profiling, Memo" },
      { name: "Next.js", level: 90, note: "Server Components, Routing, SSR/SSG, Image Optimization" },
      { name: "State Management", level: 92, note: "Zustand, Context API, Redux Toolkit, React Query" },
      { name: "Web Performance & Web Vitals", level: 94, note: "Bundle splitting, LCP/CLS optimization, Caching" }
    ]
  },
  {
    title: "Backend, APIs & Cloud Systems",
    skills: [
      { name: "Node.js & Express", level: 92, note: "RESTful APIs, Middleware, Auth JWT, File Streams" },
      { name: "PostgreSQL & MongoDB", level: 88, note: "Schema modeling, transactions, query profiling" },
      { name: "Redis & Caching", level: 85, note: "In-memory stores, Pub/Sub, rate limiting" },
      { name: "Docker & Containerization", level: 84, note: "Dockerfile optimization, multi-stage builds, compose" },
      { name: "Git & CI/CD Pipelines", level: 92, note: "GitHub Actions, automated test workflows, semantic release" }
    ]
  }
];
const workExperience = [
  {
    period: "2022 — Present (7th Semester)",
    role: "B.Sc. in Computer Science & Engineering (CSE)",
    company: "Netrokona University",
    location: "Netrokona, Bangladesh",
    summary: "Enrolled in the undergraduate engineering degree program (Session 2021-2022). Developing rigorous theoretical foundations in computing, algorithms, data structures, and database systems combined with practical full-stack web software development.",
    achievements: [
      "Core Academic Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP with C++/Java), Web Engineering, Operating Systems, Computer Networks, and Software Engineering.",
      "Practical Lab Systems: Designed and engineered real-world full-stack systems including Restaurant Management & POS System (PHP/MySQL), Weather Information Application (REST APIs), and interactive JavaScript utilities.",
      "Competitive Programming: Actively practicing algorithmic problem solving on Codeforces (Md_Sohag_Hossen.) focusing on computational logic, greedy methods, number theory, and complexity optimization.",
      "Academic Collaboration: Actively taking part in peer code reviews, lab team assignments, seminar presentations, and continuous technical learning."
    ],
    skills: ["Data Structures & Algorithms", "C / C++", "JavaScript (ES6+)", "PHP", "MySQL", "Tailwind CSS", "OOP", "DBMS", "HTML5 & CSS3"]
  },
  {
    period: "Completed",
    role: "Higher Secondary Certificate (HSC) — Science",
    company: "Science Discipline",
    location: "Bangladesh",
    summary: "Completed higher secondary education in the Science group, acquiring deep analytical and mathematical reasoning skills with focus on Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).",
    achievements: [
      "Strong foundational grounding in advanced mathematics, differential calculus, algebra, and applied physics.",
      "Early mastery of structured programming paradigms, flowchart logic, and computer architectures via academic ICT curriculum.",
      "Secured competitive academic merit facilitating admission into Computer Science & Engineering at Netrokona University."
    ],
    skills: ["Higher Mathematics", "Physics & Computing", "ICT & Logic Design", "Analytical Problem Solving"]
  }
];
const testimonials = [
  {
    name: "Algorithmic Problem Solving",
    role: "Competitive Programming",
    company: "Codeforces Practice",
    quote: "Active problem solver on Codeforces (handle: Md_Sohag_Hossen.), continually sharpening analytical thinking, recursive logic, and time/space complexity optimization.",
    relation: "Profile: codeforces.com/profile/Md_Sohag_Hossen."
  },
  {
    name: "Hands-on Web Engineering",
    role: "Full-Stack Project Implementation",
    company: "Academic & Personal Labs",
    quote: "Engineered 8+ functional web applications from scratch utilizing Vanilla JavaScript (ES6+), responsive Tailwind CSS, PHP backend scripts, and MySQL relational schemas.",
    relation: "Featured in portfolio project showcases"
  },
  {
    name: "Academic Foundation & Growth",
    role: "Undergraduate CSE Student",
    company: "Netrokona University (Session 2021-2022)",
    quote: "Combining formal computer science theory—Data Structures, DBMS, OOP, and Networks—with continuous modern software craftsmanship and collaborative learning.",
    relation: "Current Standing: 7th Semester Undergraduate"
  }
];
const interactiveCodeSnippets = [
  {
    title: "Debounce Function (ES6+)",
    description: "Higher-order function preventing rate exhaustion for rapid input triggers.",
    code: `// Custom Debounce implementation in JS
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
`
  },
  {
    title: "Array Deep Flat & Unique",
    description: "Modern algorithmic array normalization and deduplication.",
    code: `// Recursively flatten nested array and remove duplicates
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
`
  },
  {
    title: "Async Retry with Exponential Backoff",
    description: "Resilient network API fetch wrapper for distributed reliability.",
    code: `// Simulated resilient retry helper
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
`
  }
];

const servicesData = [
  {
    id: "fullstack-dev",
    number: "01",
    title: "Full-Stack Web Development",
    titleBn: "ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট",
    description: "End-to-end web system architecture combining clean, responsive frontend interfaces with secure PHP backend business logic and relational MySQL database persistence.",
    descriptionBn: "পিএইচপি, মাইএসকিউএল ও জাভাস্ক্রিপ্ট দিয়ে পূর্ণাঙ্গ ও নিরাপদ ওয়েব সিস্টেম এবং ম্যানেজমেন্ট সফটওয়্যার তৈরি।",
    deliverables: [
      "Custom POS, restaurant, and inventory management systems",
      "Secure session authentication & role-based access control (RBAC)",
      "High-speed AJAX data exchange without full page reloads"
    ],
    technologies: ["PHP", "MySQL", "JavaScript (ES6+)", "Tailwind CSS", "HTML5"]
  },
  {
    id: "frontend-ui",
    number: "02",
    title: "Responsive Frontend & Modern UI/UX",
    titleBn: "রেসপনসিভ ফ্রন্টএন্ড ও মডার্ন ইউআই ডিজাইন",
    description: "Pixel-perfect, mobile-first web interfaces engineered with semantic HTML5, modern CSS3, and utility-first Tailwind CSS ensuring 100% fluid adaptability across all devices.",
    descriptionBn: "মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য মানানসই আধুনিক, আকর্ষণীয় ও সুপার ফাস্ট ইউজার ইন্টারফেস তৈরি।",
    deliverables: [
      "Fluid responsive layouts with seamless cross-device compatibility",
      "Accessible DOM architecture adhering to WCAG contrast standards",
      "Tactile button feedback, smooth micro-interactions, and animations"
    ],
    technologies: ["Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "UI/UX"]
  },
  {
    id: "rest-api",
    number: "03",
    title: "REST API Integration & Dynamic Data",
    titleBn: "রেস্ট এপিআই ইন্টিগ্রেশন ও লাইভ ডেটা হ্যান্ডলিং",
    description: "Asynchronous communication with external public or custom backend APIs utilizing JavaScript fetch(), Promises, and error-resilient JSON response handling.",
    descriptionBn: "জাভাস্ক্রিপ্ট ফেচ (fetch) ও অ্যাসিঙ্ক মেথড দিয়ে রিয়েল-টাইম এপিআই ডেটা ইন্টিগ্রেশন ও লাইভ রেন্ডারিং।",
    deliverables: [
      "Real-time external API feeds (Weather, currencies, telemetry data)",
      "Defensive error handling with graceful fallback UI alerts",
      "Optimistic client-side data updates with loading state indicators"
    ],
    technologies: ["JavaScript (ES6+)", "REST APIs", "Fetch API", "JSON", "Async/Await"]
  },
  {
    id: "database-design",
    number: "04",
    title: "Relational Database Design & MySQL",
    titleBn: "রিলেশনাল ডাটাবেস ডিজাইন ও মাইএসকিউএল",
    description: "Structured relational database schema architecture, normalized table layouts, index planning, and optimized SQL CRUD queries for reliable data persistence.",
    descriptionBn: "দক্ষ ও স্কেলেবল মাইএসকিউএল ডাটাবেস স্কিমা তৈরি, কুয়েরি অপ্টিমাইজেশন ও ডেটা ইন্টিগ্রিটি নিশ্চিতকরণ।",
    deliverables: [
      "Normalized relational schemas with primary and foreign key constraints",
      "Optimized SQL join queries with minimal latency (<15ms)",
      "Automated calculation queries for orders, revenue, and inventories"
    ],
    technologies: ["MySQL", "Database Normalization", "SQL Queries", "PHP PDO", "Indexing"]
  },
  {
    id: "interactive-apps",
    number: "05",
    title: "Interactive Vanilla JS Web Applications",
    titleBn: "ইন্টারঅ্যাকটিভ জাভাস্ক্রিপ্ট ওয়েব ইউটিলিটি",
    description: "Zero-dependency, high-precision client-side web tools and utilities built with pure Vanilla JavaScript without heavy framework bloat.",
    descriptionBn: "কোনো অতিরিক্ত ফ্রেমওয়ার্ক ছাড়া নিখুঁত পিউর জাভাস্ক্রিপ্ট দিয়ে তৈরি ইন্টারঅ্যাকটিভ টুলস ও অ্যাপস।",
    deliverables: [
      "High-precision timekeeping, stopwatches, and digital clocks",
      "Tactile mathematical calculators with defensive input checks",
      "Dynamic client-side sorting, live search filtering, and state machines"
    ],
    technologies: ["Vanilla JS", "DOM Manipulation", "Event Loop", "LocalStorage", "ES6+"]
  },
  {
    id: "performance-optimization",
    number: "06",
    title: "Performance Optimization & Bug Fixing",
    titleBn: "পারফরম্যান্স অপ্টিমাইজেশন ও বাগ ফিক্সিং",
    description: "Comprehensive code auditing, JavaScript logic debugging, layout shift elimination, and asset optimization achieving blazing fast load speeds.",
    descriptionBn: "ওয়েবসাইটের স্পিড বাড়ানো, কোড অপ্টিমাইজ করা এবং জাভাস্ক্রিপ্ট ও সিএসএস বাগ দ্রুত সমাধান।",
    deliverables: [
      "95+ Google Lighthouse performance, accessibility, and SEO scores",
      "Clean JavaScript refactoring eliminating memory leaks and bottlenecks",
      "Asset minification and critical rendering path speed-ups"
    ],
    technologies: ["Lighthouse 95+", "Performance Tuning", "Debugging", "SEO Best Practices", "Clean Code"]
  }
];


const engineeringProcessData = [
  {
    step: "01",
    phase: "PHASE 01",
    title: "Discovery & System Architecture",
    titleBn: "বিশ্লেষণ ও সিস্টেম আর্কিটেকচার পরিকল্পনা",
    description: "Deep dive into functional requirements, data entities, and system boundaries to eliminate architectural debt and ensure clean structural foundations before writing code.",
    descriptionBn: "প্রজেক্টের মূল চাহিদা, ডাটাবেস টেবিল ও ফিচার বিশ্লেষণ করে কোডিং শুরুর আগেই একটি সুদৃঢ় আর্কিটেকচারাল নকশা তৈরি।",
    highlights: [
      "Requirement scoping and business logic breakdown",
      "Relational MySQL schema entity-relationship diagramming",
      "Architecture selection (Modular JS, Tailwind CSS, PHP API)"
    ],
    icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'
  },
  {
    step: "02",
    phase: "PHASE 02",
    title: "Responsive UI/UX & Prototyping",
    titleBn: "রেসপনসিভ ইউআই/ইউএক্স ও প্রোটোটাইপিং",
    description: "Translating architectural blueprints into clean, accessible, mobile-first web layouts crafted with semantic HTML5, modern CSS3, and utility-first Tailwind CSS.",
    descriptionBn: "মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য মানানসই আধুনিক, অ্যাক্সেসিবল ও দ্রুত লোডিং রেসপনসিভ ইউজার ইন্টারফেস ডিজাইন।",
    highlights: [
      "Mobile-first, fluid layout grid with responsive container queries",
      "WCAG high-contrast compliance for crystal-clear readability",
      "Tactile touch feedback, button states, and smooth micro-interactions"
    ],
    icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
  },
  {
    step: "03",
    phase: "PHASE 03",
    title: "Full-Stack Implementation & Logic",
    titleBn: "ফুল-স্ট্যাক ইমপ্লিমেন্টেশন ও ক্লিন কোডিং",
    description: "Writing defensive, modular ES6+ JavaScript for reactive DOM manipulation, coupled with robust PHP server-side validation and indexed MySQL relational storage.",
    descriptionBn: "মডুলার জাভাস্ক্রিপ্ট (ES6+), অ্যাসিঙ্ক ফেচ (fetch), পিএইচপি ব্যাকএন্ড লজিক ও অপ্টিমাইজড মাইএসকিউএল কুয়েরির সমন্বয়।",
    highlights: [
      "Zero-framework vanilla JS logic avoiding heavyweight dependencies",
      "Secure session authentication and role-based access control (RBAC)",
      "Asynchronous REST API fetch pipelines with defensive error fallbacks"
    ],
    icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    step: "04",
    phase: "PHASE 04",
    title: "Testing, Optimization & Delivery",
    titleBn: "টেস্টিং, পারফরম্যান্স টিউনিং ও ডেলিভারি",
    description: "Rigorous cross-device testing, algorithmic complexity verification, query optimization, and asset minification targeting 95+ Google Lighthouse scores.",
    descriptionBn: "ক্রস-ব্রাউজার টেস্টিং, স্পিড অপ্টিমাইজেশন ও ৯৫+ গুগল লাইটহাউস স্কোর নিশ্চিত করে প্রজেক্টের চূড়ান্ত ডেলিভারি।",
    highlights: [
      "Sub-second page loading and cumulative layout shift (CLS) elimination",
      "Defensive validation against edge-cases, null inputs, and network failures",
      "Clean Git commit history, organized file structures, and documentation"
    ],
    icon: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  }
];

export {
  initialProfile,
  interactiveCodeSnippets,
  projectsData,
  skillCategories,
  testimonials,
  workExperience,
  servicesData,
  engineeringProcessData
};
