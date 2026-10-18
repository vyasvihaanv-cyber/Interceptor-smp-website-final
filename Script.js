
// Initialize Lucide Icons
if (window.lucide) {
  lucide.createIcons();
}

// Server domain constant (Corrected spelling)
const SERVER_DOMAIN = "play.interceptor.dpdns.org";

// Mobile menu toggle with accessibility state
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  // Close mobile menu when a navigation link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Copy IP Function
function copyIp() {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(SERVER_DOMAIN).catch(() => fallbackCopy());
  } else {
    fallbackCopy();
  }

  showToast();
}

function fallbackCopy() {
  const temp = document.createElement("textarea");
  temp.value = SERVER_DOMAIN;
  temp.setAttribute('readonly', '');
  temp.style.position = 'absolute';
  temp.style.left = '-9999px';
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}

function showToast() {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
  }
}
