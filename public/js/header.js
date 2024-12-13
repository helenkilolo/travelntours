document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Ensure all elements exist
  if (mobileMenuToggle && mobileNav && mobileMenuClose) {
    // Show the mobile menu
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.remove('hidden');
      mobileNav.classList.add('flex');
    });

    // Hide the mobile menu
    mobileMenuClose.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      mobileNav.classList.remove('flex');
    });
  } else {
    console.error('Mobile menu elements not found');
  }
});

