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
    "cta-primary": t.ctaPrimary,
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
    "premium-price": t.premiumPrice,
    "premium-period": t.premiumPeriod,
    "premium-discount": t.premiumDiscount,
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
    "footer-copyright": t.footerCopyright,
    "footer-made": t.footerMade,
    "developer-title": t.developerTitle,
    "link-playstore": t.linkPlaystore,
    "link-appstore": t.linkAppstore,
    "modal-close": t.modalClose,
  };

  Object.keys(directMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = directMap[id];
  });

  // Update direction
  const isAr = currentLang === "ar";
  document.body.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", currentLang);
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
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
