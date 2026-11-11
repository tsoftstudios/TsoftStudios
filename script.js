/**
 * TSoftStudios Official Website Scripts
 * Dynamic App Directory, Modals, Filtering, and Navigation
 */

// Comprehensive App Database
const APPS_DATABASE = {
    dayflow: {
        id: "dayflow",
        name: "DayFlow – Routine & Habit Tracker",
        category: "Productivity",
        badgeColor: "blue",
        iconClass: "fa-solid fa-calendar-check",
        iconGradient: "from-blue-600 to-cyan-500",
        tagline: "Master your days with offline-first habit streaks and daily clarity.",
        description: "DayFlow is an elegant, unified mobile daily companion engineered to help you organize daily routines, build resilient habits, track personal finances, jot down mindful notes, and check off prioritized tasks with zero cloud latency.",
        features: [
            "Streak-Driven Habit Engine with customizable reminder schedules",
            "Daily Task & Priority Checklist with subtask tracking",
            "Personal Expense & Budget Tracker to monitor daily spending locally",
            "Wellness & Mood Journaling with offline timestamping",
            "100% Offline-First Architecture — your personal data never leaves your device",
            "Light & Dark Theme with responsive material widgets"
        ],
        platforms: ["Android (Google Play)", "iOS (App Store - Coming Soon)"],
        monetization: "Free version with AdMob support. Optional Pro lifetime upgrade or flexible subscription for ad-free experience.",
        privacyUrl: "privacy.html#dayflow",
        playStoreUrl: "https://play.google.com/store/apps/developer?id=TSoftStudios",
        faq: [
            { q: "Is DayFlow free to use?", a: "Yes, DayFlow's core habit and routine features are free. An optional premium tier is available to remove ads and unlock advanced analytics." },
            { q: "Where is my data saved?", a: "All habit records, notes, and expense transactions are saved locally on your device in an encrypted SQLite database." }
        ]
    },
    creative: {
        id: "creative",
        name: "Lumix Studio AI – Photo & Video Editor",
        category: "Creative",
        badgeColor: "purple",
        iconClass: "fa-solid fa-wand-magic-sparkles",
        iconGradient: "from-purple-600 to-indigo-500",
        tagline: "Smart AI enhancement, aesthetic filters, and seamless video trimming.",
        description: "Lumix Studio brings professional photo and video manipulation to your fingertips. Leverage on-device AI algorithms for background isolation, studio lighting correction, portrait blemish reduction, and fast video clipping.",
        features: [
            "Instant AI Background Removal and studio backdrop replacement",
            "Vibrant cinematic color grading presets and customizable tone curves",
            "Portrait enhancement: skin smoothing, lighting balance, and eye pop",
            "High-precision video trimming, rotation, and aspect ratio conversion for Reels/TikTok",
            "High-resolution 4K export with zero loss in image quality",
            "Zero cloud upload required for basic edits — safe and secure"
        ],
        platforms: ["Android (Google Play)"],
        monetization: "Free with optional Google AdMob rewarded ads to unlock premium artistic filters, or pro subscriptions.",
        privacyUrl: "privacy.html#creative",
        playStoreUrl: "https://play.google.com/store/apps/developer?id=TSoftStudios",
        faq: [
            { q: "Does the app send my photos to an external server?", a: "No, on-device machine learning models process your photos locally whenever device capabilities permit." }
        ]
    },
    pdf: {
        id: "pdf",
        name: "DocuMaster PDF – Scanner & Document Suite",
        category: "PDF & Documents",
        badgeColor: "red",
        iconClass: "fa-solid fa-file-pdf",
        iconGradient: "from-rose-600 to-red-500",
        tagline: "High-speed document scanner, PDF merger, and compression engine.",
        description: "DocuMaster PDF transforms your phone into an ultra-portable document powerhouse. Digitize paper receipts, contracts, and notes using edge-detection camera scanning, merge multiple files into one PDF, compress large attachments, and convert images to PDF instantly.",
        features: [
            "Smart Camera Document Scanner with automatic perspective correction & edge detection",
            "Multi-page PDF Merge and Split utility",
            "PDF Compressor engine to reduce file size for email attachments",
            "Instant Image-to-PDF & PDF-to-Image batch conversion",
            "Offline digital signature and page watermarking",
            "Built-in ultra-fast PDF viewer with nighttime reading mode"
        ],
        platforms: ["Android (Google Play)"],
        monetization: "Free with standard AdMob ads. In-App Purchase available for unlimited batch operations and ad removal.",
        privacyUrl: "privacy.html#pdf",
        playStoreUrl: "https://play.google.com/store/apps/developer?id=TSoftStudios",
        faq: [
            { q: "Can I scan sensitive contracts safely?", a: "Yes. All document scans and conversions execute 100% locally on your smartphone." }
        ]
    },
    utility: {
        id: "utility",
        name: "ZapTools – All-in-One Utility Hub",
        category: "Utilities",
        badgeColor: "amber",
        iconClass: "fa-solid fa-toolbox",
        iconGradient: "from-amber-600 to-orange-500",
        tagline: "A Swiss-army knife toolkit for everyday digital convenience.",
        description: "Stop cluttering your smartphone with a dozen separate single-use tools. ZapTools packs essential calculators, real-time unit and currency converters, device hardware health diagnostics, QR code generation, and file hash checkers into one lightweight app.",
        features: [
            "Over 40+ unit and physical converters (Length, Weight, Speed, Currency, Temp)",
            "Smart financial calculators (Loan EMI, Tip, Discount, Compound Interest)",
            "Hardware diagnostic sensors (Battery temperature, RAM status, Compass, Sound Meter)",
            "Rapid QR & Barcode generator and scanner",
            "Minimalist, battery-friendly dark interface with under 15MB install size"
        ],
        platforms: ["Android (Google Play)"],
        monetization: "Free with non-intrusive AdMob banner ads. One-time low cost upgrade to remove all ads.",
        privacyUrl: "privacy.html",
        playStoreUrl: "https://play.google.com/store/apps/developer?id=TSoftStudios",
        faq: [
            { q: "Does ZapTools consume battery in the background?", a: "No. ZapTools uses zero background services when closed." }
        ]
    },
    learning: {
        id: "learning",
        name: "CodeSprout – Interactive Learning",
        category: "Learning",
        badgeColor: "emerald",
        iconClass: "fa-solid fa-graduation-cap",
        iconGradient: "from-emerald-600 to-teal-500",
        tagline: "Bite-sized mobile coding practice and tech skill mastery.",
        description: "Designed for aspiring software engineers and hobbyists, CodeSprout breaks complex technology topics into 5-minute interactive quizzes, code snippet puzzles, and spaced repetition flashcards.",
        features: [
            "Interactive daily coding puzzles across Python, JavaScript, and Kotlin",
            "Spaced repetition algorithm to reinforce long-term memory",
            "Offline study mode for commutes and flights",
            "Gamified XP, streaks, and milestone completion certificates",
            "Clean syntax cheat sheets and quick reference docs"
        ],
        platforms: ["Android (Google Play)"],
        monetization: "Free starter curriculum. Pro subscription for unlimited practice sessions and certificate downloads.",
        privacyUrl: "privacy.html",
        playStoreUrl: "https://play.google.com/store/apps/developer?id=TSoftStudios",
        faq: [
            { q: "Can I use CodeSprout without internet?", a: "Yes, downloaded modules and practice quizzes function completely offline." }
        ]
    }
};

// Modal Operations
function openAppModal(appId) {
    const app = APPS_DATABASE[appId];
    if (!app) return;

    const modal = document.getElementById("appModal");
    const container = document.getElementById("modalContent");
    if (!modal || !container) return;

    let faqHtml = "";
    if (app.faq && app.faq.length > 0) {
        faqHtml = `
            <div class="mt-6 pt-6 border-t border-slate-800">
                <h4 class="text-sm font-bold text-white mb-3">Frequently Asked Questions</h4>
                <div class="space-y-3">
                    ${app.faq.map(item => `
                        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                            <div class="font-semibold text-slate-200 mb-1">${item.q}</div>
                            <div class="text-slate-400">${item.a}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="flex items-start gap-4 mb-6">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr ${app.iconGradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                <i class="${app.iconClass}"></i>
            </div>
            <div>
                <span class="text-xs font-semibold uppercase tracking-wider text-cyan-400">${app.category}</span>
                <h2 class="text-2xl font-bold text-white tracking-tight">${app.name}</h2>
                <p class="text-xs text-slate-400 mt-1">${app.tagline}</p>
            </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-6">
            ${app.description}
        </p>

        <div class="mb-6">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Features & Highlights</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                ${app.features.map(f => `
                    <div class="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                        <i class="fa-solid fa-circle-check text-cyan-400 mt-0.5 text-[11px]"></i>
                        <span>${f}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-xs text-slate-400 space-y-1.5">
            <div><strong class="text-slate-200">Platforms:</strong> ${app.platforms.join(", ")}</div>
            <div><strong class="text-slate-200">Monetization:</strong> ${app.monetization}</div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div class="flex gap-3">
                <a href="${app.playStoreUrl}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition">
                    <i class="fa-brands fa-google-play"></i> Google Play Store
                </a>
                <a href="${app.privacyUrl}" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition">
                    Privacy Policy
                </a>
            </div>
            <a href="support.html?app=${encodeURIComponent(app.name)}" class="text-xs text-cyan-400 hover:underline">
                Contact Support for this App &rarr;
            </a>
        </div>

        ${faqHtml}
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeAppModal() {
    const modal = document.getElementById("appModal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
}

// Close modal when clicking outside box
window.addEventListener("click", (e) => {
    const modal = document.getElementById("appModal");
    if (e.target === modal) {
        closeAppModal();
    }
});

// ESC key to close modal
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeAppModal();
    }
});

// Category Filtering on apps.html
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Filter Buttons logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    const appCards = document.querySelectorAll(".app-card");

    if (filterButtons.length > 0 && appCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => {
                    b.classList.remove("active", "bg-gradient-to-r", "from-blue-600", "to-cyan-600", "text-white");
                    b.classList.add("text-slate-400");
                });
                btn.classList.add("active", "text-white");
                btn.classList.remove("text-slate-400");

                const targetCategory = btn.getAttribute("data-filter");

                appCards.forEach(card => {
                    const cardCat = card.getAttribute("data-category");
                    if (targetCategory === "all" || cardCat === targetCategory) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // Check URL parameters (e.g. ?app=dayflow or ?cat=productivity)
    const urlParams = new URLSearchParams(window.location.search);
    const appParam = urlParams.get("app");
    const catParam = urlParams.get("cat");

    if (appParam && APPS_DATABASE[appParam.toLowerCase()]) {
        setTimeout(() => {
            openAppModal(appParam.toLowerCase());
        }, 150);
    }

    if (catParam) {
        const matchingBtn = document.querySelector(`.filter-btn[data-filter="${catParam}"]`);
        if (matchingBtn) {
            matchingBtn.click();
        }
    }
});

// Support Form Handler
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("userName") ? document.getElementById("userName").value : "";
    const email = document.getElementById("userEmail") ? document.getElementById("userEmail").value : "";
    const app = document.getElementById("appSelect") ? document.getElementById("appSelect").value : "";
    const topic = document.getElementById("topicSelect") ? document.getElementById("topicSelect").value : "";
    const subject = document.getElementById("subjectLine") ? document.getElementById("subjectLine").value : "";
    const message = document.getElementById("messageContent") ? document.getElementById("messageContent").value : "";

    const mailtoSubject = encodeURIComponent(`[${topic}] ${app} - ${subject}`);
    const mailtoBody = encodeURIComponent(
        `Hello TSoftStudios Support,\n\n` +
        `Sender Name: ${name}\n` +
        `Sender Email: ${email}\n` +
        `Application: ${app}\n` +
        `Inquiry Type: ${topic}\n\n` +
        `Message Details:\n${message}\n\n` +
        `---\nSent via TSoftStudios Official Website Support Portal`
    );

    const toast = document.getElementById("formSuccessToast");
    if (toast) {
        toast.classList.remove("hidden");
    }

    // Launch mail client directly to official support email
    window.location.href = `mailto:tsoftstudios2026@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
}

