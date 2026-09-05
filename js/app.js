// Mushaffar Website - Main Application Logic

let currentLang = "en";

// ===== Language =====

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  const t = translations[currentLang];

  // Map element IDs to translation keys
  const map = {};
  Object.keys(t).forEach(key => {
    // Convert camelCase to kebab-case ID (e.g., heroTitle -> hero-title)
    const id = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      .replace(/^nav-/, 'nav-')
      .replace(/^cta-/, 'cta-')
      .replace(/^hero-/, 'hero-')
      .replace(/^section-/, 'section-')
      .replace(/^cloud-/, 'cloud-')
      .replace(/^mush-/, 'mush-')
      .replace(/^feat(\d)/, 'feat$1')
      .replace(/^step(\d)/, 'step$1')
      .replace(/^faq-/, 'faq-')
      .replace(/^free-/, 'free-')
      .replace(/^premium-/, 'premium-')
      .replace(/^footer-/, 'footer-')
      .replace(/^link-/, 'link-')
      .replace(/^trust-/, 'trust-');
    map[id] = t[key];
  });

  // Direct ID mapping for elements that don't follow the pattern
  const directMap = {
    "nav-title": t.navTitle,
    "nav-features": t.navFeatures,
    "nav-platforms": t.navPlatforms,
    "nav-pricing": t.navPricing,
    "nav-download": t.navDownload,
    "lang-text": t.langText,
    "hero-badge": t.heroBadge,
    "hero-title": t.heroTitle,
    "hero-subtitle": t.heroSubtitle,
    "hero-description": t.heroDescription,
    "cta-secondary": t.ctaSecondary,
    "trust-1": t.trust1,
    "trust-2": t.trust2,
    "trust-3": t.trust3,
    "trust-4": t.trust4,
    "section-badge": t.sectionBadge,
    "section-title": t.sectionTitle,
    "section-desc": t.sectionDesc,
    "cloud-title": t.cloudTitle,
    "cloud-1": t.cloud1,
    "cloud-2": t.cloud2,
    "cloud-3": t.cloud3,
    "cloud-4": t.cloud4,
    "cloud-5": t.cloud5,
    "mushaffar-title": t.mushaffarTitle,
    "mush-1": t.mush1,
    "mush-2": t.mush2,
    "mush-3": t.mush3,
    "mush-4": t.mush4,
    "mush-5": t.mush5,
    "features-badge": t.featuresBadge,
    "features-title": t.featuresTitle,
    "features-desc": t.featuresDesc,
    "feat1-title": t.feat1Title,
    "feat1-desc": t.feat1Desc,
    "feat2-title": t.feat2Title,
    "feat2-desc": t.feat2Desc,
    "feat3-title": t.feat3Title,
    "feat3-desc": t.feat3Desc,
    "feat4-title": t.feat4Title,
    "feat4-desc": t.feat4Desc,
    "feat5-title": t.feat5Title,
    "feat5-desc": t.feat5Desc,
    "feat6-title": t.feat6Title,
    "feat6-desc": t.feat6Desc,
    "hiw-badge": t.hiwBadge,
    "hiw-title": t.hiwTitle,
    "step1-title": t.step1Title,
    "step1-desc": t.step1Desc,
    "step2-title": t.step2Title,
    "step2-desc": t.step2Desc,
    "step3-title": t.step3Title,
    "step3-desc": t.step3Desc,
    "download-title": t.downloadTitle,
    "download-desc": t.downloadDesc,
    "macos-title": t.macosTitle,
    "macos-subtitle": t.macosSubtitle,
    "macos-status": t.macosStatus,
    "windows-title": t.windowsTitle,
    "windows-subtitle": t.windowsSubtitle,
    "windows-status": t.windowsStatus,
    "linux-title": t.linuxTitle,
    "linux-subtitle": t.linuxSubtitle,
    "linux-status": t.linuxStatus,
    "ios-title": t.iosTitle,
    "ios-subtitle": t.iosSubtitle,
    "ios-status": t.iosStatus,
    "android-title": t.androidTitle,
    "android-subtitle": t.androidSubtitle,
    "android-status": t.androidStatus,
    "chrome-title": t.chromeTitle,
    "chrome-subtitle": t.chromeSubtitle,
    "chrome-status": t.chromeStatus,
    "pricing-badge": t.pricingBadge,
    "pricing-title": t.pricingTitle,
    "pricing-desc": t.pricingDesc,
    "free-plan-name": t.freePlanName,
    "free-price": t.freePrice,
    "free-period": t.freePeriod,
    "free-feat-1": t.freeFeat1,
    "free-feat-2": t.freeFeat2,
    "free-feat-3": t.freeFeat3,
    "free-feat-4": t.freeFeat4,
    "free-feat-5": t.freeFeat5,
    "free-feat-6": t.freeFeat6,
    "free-cta": t.freeCta,
    "popular-badge": t.popularBadge,
    "premium-plan-name": t.premiumPlanName,
    "premium-original-price": t.premiumOriginalPrice,
    "premium-price": t.premiumPrice,
    "premium-save-badge": t.premiumSaveBadge,
    "premium-period": t.premiumPeriod,
    "premium-feat-1": t.premiumFeat1,
    "premium-feat-2": t.premiumFeat2,
    "premium-feat-3": t.premiumFeat3,
    "premium-feat-4": t.premiumFeat4,
    "premium-feat-5": t.premiumFeat5,
    "premium-cta": t.premiumCta,
    "faq-title": t.faqTitle,
    "faq-q1": t.faqQ1,
    "faq-a1": t.faqA1,
    "faq-q2": t.faqQ2,
    "faq-a2": t.faqA2,
    "faq-q3": t.faqQ3,
    "faq-a3": t.faqA3,
    "faq-q4": t.faqQ4,
    "faq-a4": t.faqA4,
    "footer-brand": t.footerBrand,
    "footer-tagline": t.footerTagline,
    "footer-product": t.footerProduct,
    "footer-features": t.footerFeatures,
    "footer-pricing": t.footerPricing,
    "footer-download": t.footerDownload,
    "footer-support": t.footerSupport,
    "footer-contact": t.footerContact,
    "footer-privacy": t.footerPrivacy,
    "footer-copyright": t.footerCopyright.replace("{year}", new Date().getFullYear()),
    "footer-made": t.footerMade,
    "developer-title": t.developerTitle,
    "link-playstore": t.linkPlaystore,
    "link-appstore": t.linkAppstore,
    "modal-close": t.modalClose,
  };

  Object.keys(directMap).forEach(id => {
    const el = document.getElementById(id);
    if (el && directMap[id] !== undefined) el.innerHTML = directMap[id];
  });

  // Update direction
  const isAr = currentLang === "ar";
  document.body.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", currentLang);
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");

  // Update Hero CTA based on detected user OS and current language
  updateHeroCta();
}


// ===== Dynamic OS Platform Detection & Hero CTA =====

const PLATFORMS = {
  mac: {
    key: "ctaMac",
    url: "https://github.com/m-1226/mushaffar-website/releases/latest/download/Mushaffar.dmg",
    event: "macOS Download",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`
  },
  windows: {
    key: "ctaWindows",
    url: "https://github.com/m-1226/mushaffar-website/releases/latest/download/Mushaffar_Windows.zip",
    event: "Windows Download",
    icon: `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M0,3.449L9.75,2.1v9.451H0m10.949-9.602L24,0v11.4H10.949M0,12.6H9.75v9.451L0,20.699M10.949,12.6H24V24l-12.9-1.801"/></svg>`
  },
  linux: {
    key: "ctaLinux",
    url: "https://github.com/m-1226/mushaffar-website/releases/latest/download/Mushaffar-Linux.tar.gz",
    event: "Linux Download",
    icon: `<img src="assets/linux.svg" width="18" height="18" alt="Linux" style="display: inline-block; vertical-align: middle;">`
  },
  android: {
    key: "ctaAndroid",
    url: "https://play.google.com/store/apps/details?id=kryptor.app",
    event: "Android Store Click",
    target: "_blank",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6,11.48 L19.44,8.3a.63.63 0 0 0-.25-.83.63.63 0 0 0-.84.25L16.47,10.5A9.14,9.14 0 0 0 13,9.76 9.14,9.14 0 0 0 9.53,10.5L7.65,7.72a.63.63 0 0 0-.84-.25.63.63 0 0 0-.25.83L8.4,11.48A8.32,8.32 0 0 0 4.5,17.25h17A8.32,8.32 0 0 0 17.6,11.48M7.75,14.5A.75.75 0 1 1 8.5,13.75.75.75 0 0 1 7.75,14.5m8.5,0a.75.75 0 1 1 .75-.75A.75.75 0 0 1 16.25,14.5Z"/></svg>`
  },
  ios: {
    key: "ctaiOS",
    url: "https://apps.apple.com/us/app/mushaffar-%D9%85-%D8%B4%D9%81%D8%B1/id6753790987",
    event: "iOS Store Click",
    target: "_blank",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`
  }
};

function detectUserPlatform() {
  const ua = (navigator.userAgent || "").toLowerCase();
  const platform = (navigator.userAgentData?.platform || navigator.platform || "").toLowerCase();

  // Mobile checks
  if (/android/.test(ua)) return "android";
  if (/ipad|iphone|ipod/.test(ua) || (platform.includes("mac") && navigator.maxTouchPoints > 1)) return "ios";

  // Desktop checks
  if (platform.includes("win") || /windows/.test(ua)) return "windows";
  if (platform.includes("linux") || /linux|x11/.test(ua)) return "linux";
  if (platform.includes("mac") || /macintosh|mac os x/.test(ua)) return "mac";

  return "mac";
}

function updateHeroCta() {
  const os = detectUserPlatform();
  const config = PLATFORMS[os] || PLATFORMS.mac;
  const btn = document.getElementById("hero-download-btn");
  const icon = document.getElementById("hero-download-icon");
  const text = document.getElementById("cta-primary");

  if (btn) {
    btn.href = config.url;
    btn.setAttribute("data-umami-event", config.event);
    if (config.target) {
      btn.setAttribute("target", config.target);
    } else {
      btn.removeAttribute("target");
    }
  }

  if (icon) {
    icon.innerHTML = config.icon;
  }

  if (text) {
    const t = translations[currentLang] || translations.en;
    if (t && t[config.key]) {
      text.textContent = t[config.key];
    }
  }
}

// ===== Dark Mode =====

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("mushaffar-theme", newTheme);
}

function initTheme() {
  const saved = localStorage.getItem("mushaffar-theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

// ===== FAQ Accordion =====

function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const wasOpen = item.classList.contains("open");

  // Close all
  document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));

  // Toggle clicked
  if (!wasOpen) item.classList.add("open");
}

// ===== Modal =====

function openDeveloperModal() {
  const modal = document.getElementById("developer-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeDeveloperModal() {
  const modal = document.getElementById("developer-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ===== Init =====

function init() {
  // Theme
  initTheme();

  // Language — default to Arabic then toggle to set English
  toggleLanguage();

  // AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }

  // ESC to close modal
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDeveloperModal();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
