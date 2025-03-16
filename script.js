document.addEventListener("DOMContentLoaded", function () {
  // Get all links that have a hash (#) in their href
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return; // Skip if href is just "#"

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return; // Skip if target element doesn't exist

      // Get the header height for offset
      const headerHeight = document.querySelector("header").offsetHeight;

      // Calculate the target position
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      // Smooth scroll to target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});
