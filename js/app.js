// Main Application Logic

// State Management
let currentLang = "en";

/**
 * Toggle between English and Arabic languages
 */
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  const t = translations[currentLang];

  // Update all text content
  const updates = {
    "nav-title": t.navTitle,
    "lang-text": t.langText,
    "hero-badge": t.heroBadge,
    "hero-title": t.heroTitle,
    "hero-subtitle": t.heroSubtitle,
    "hero-description": t.heroDescription,
    "cta-primary": t.ctaPrimary,
    "cta-secondary": t.ctaSecondary,
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
    "download-title": t.downloadTitle,
    "download-desc": t.downloadDesc,
    "macos-status": t.macosStatus,
    "macos-title": t.macosTitle,
    "macos-subtitle": t.macosSubtitle,
    "macos-btn": t.macosBtn,
    "ios-status": t.iosStatus,
    "ios-title": t.iosTitle,
    "ios-subtitle": t.iosSubtitle,
    "android-status": t.androidStatus,
    "android-title": t.androidTitle,
    "android-subtitle": t.androidSubtitle,
    "windows-status": t.windowsStatus,
    "windows-title": t.windowsTitle,
    "windows-subtitle": t.windowsSubtitle,
    "windows-btn": t.windowsBtn,
    "chrome-status": t.chromeStatus,
    "chrome-title": t.chromeTitle,
    "chrome-subtitle": t.chromeSubtitle,
    "footer-brand": t.footerBrand,
    "footer-tagline": t.footerTagline,
    "footer-product": t.footerProduct,
    "footer-features": t.footerFeatures,
    "footer-security": t.footerSecurity,
    "footer-pricing": t.footerPricing,
    "footer-download": t.footerDownload,
    "footer-support": t.footerSupport,
    "footer-docs": t.footerDocs,
    "footer-privacy": t.footerPrivacy,
    "footer-terms": t.footerTerms,
    "footer-contact": t.footerContact,
    "footer-copyright": t.footerCopyright,
    "footer-made": t.footerMade,
    "developer-title": t.developerTitle,
    "link-playstore": t.linkPlaystore,
    "link-appstore": t.linkAppstore,
    "modal-close": t.modalClose,
  };

  // Apply updates to DOM
  Object.keys(updates).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = updates[id];
    }
  });

  // Update HTML direction
  document.body.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", currentLang);
}

/**
 * Smooth scroll to downloads section
 */
function scrollToDownloads() {
  const downloadsSection = document.querySelector(".downloads");
  if (downloadsSection) {
    downloadsSection.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Open developer profile modal
 */
function openDeveloperModal() {
  const modal = document.getElementById("developer-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

/**
 * Close developer profile modal
 */
function closeDeveloperModal() {
  const modal = document.getElementById("developer-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Close modal on overlay click
 */
function handleModalOverlayClick(event) {
  if (event.target.classList.contains("modal-overlay")) {
    closeDeveloperModal();
  }
}

/**
 * Initialize event listeners
 */
function initEventListeners() {
  // CTA button scroll
  const ctaSecondary = document.getElementById("cta-secondary");
  if (ctaSecondary) {
    ctaSecondary.addEventListener("click", scrollToDownloads);
  }

  // Modal overlay click to close
  const modal = document.getElementById("developer-modal");
  if (modal) {
    modal.addEventListener("click", handleModalOverlayClick);
  }

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDeveloperModal();
    }
  });
}

/**
 * Initialize the application
 */
function init() {
  // Set initial language on page load
  toggleLanguage();

  // Setup event listeners
  initEventListeners();

  console.log("Mushaffar website initialized");
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
