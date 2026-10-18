```javascript
// Initialize Lucide Icons
lucide.createIcons();

// Server domain constant
const SERVER_DOMAIN = "play.intercrptor.dpdns.org";

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Copy IP Function
function copyIp() {
  // Cross-platform copy fallback
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(SERVER_DOMAIN);
  } else {
    const temp = document.createElement("textarea");
    temp.value = SERVER_DOMAIN;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }

  // Show toast notification
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
```
