/**
 * Emergency fix for mobile scrolling issues
 * This script adds a direct fix for scrolling problems on mobile devices
 */

(function() {
  // Check if we're on a mobile device
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  // Function to apply scrolling fixes
  function fixMobileScrolling() {
    if (!isMobile()) return;
    
    // Find all content containers
    const contentElements = document.querySelectorAll('.page-content, .turn-page');
    
    contentElements.forEach(el => {
      // Add mobile scrolling class
      el.classList.add('mobile-scroll');
      
      // Check if content exceeds container height
      if (el.scrollHeight > el.clientHeight) {
        el.classList.add('overflow-content');
        
        // Force scrollbar to show
        el.style.overflowY = 'scroll';
        el.style.maxHeight = '65vh';
        el.style.height = 'auto';
      }
    });
    
    // Specifically target poem pages
    document.querySelectorAll('[data-page^="poem"] .page-content').forEach(el => {
      el.classList.add('overflow-content');
      el.style.overflowY = 'scroll';
      el.style.maxHeight = '65vh';
    });
  }
  
  // Run fix on load and after page changes
  window.addEventListener('load', fixMobileScrolling);
  window.addEventListener('resize', fixMobileScrolling);
  
  // Run periodically to catch dynamic content
  setInterval(fixMobileScrolling, 2000);
  
  // Apply immediately
  fixMobileScrolling();
})();
