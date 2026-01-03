export function initScrollReveal() {
    const elements = document.querySelectorAll(".animate-fade-in-up-init");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up-visible");
            entry.target.classList.remove("animate-fade-in-up-init");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    elements.forEach((el) => {
      el.classList.add("animate-fade-in-up-init");
      observer.observe(el);
    });
  }
  