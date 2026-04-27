 
      // =========================
      // Hamburger Menu Toggle
      // =========================
      const hamburger = document.getElementById("hamburger");
      const mobileMenu = document.getElementById("mobileMenu");

      if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("open");
          mobileMenu.classList.toggle("open");
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            mobileMenu.classList.remove("open");
          });
        });
      }

      // =========================
      // Plan Selection
      // =========================
      function selectPlan(el) {
        document.querySelectorAll(".plan-option").forEach((plan) => {
          plan.classList.remove("selected");
        });
        el.classList.add("selected");
      }

      // =========================
      // Carousel Scroll Buttons
      // =========================
      function scrollCarousel(id, dir) {
        const container = document.getElementById(id);
        if (!container) return;

        const card = container.querySelector(".vid-card");
        if (!card) return;

        const cardWidth = card.offsetWidth + 16;
        container.scrollBy({
          left: dir * cardWidth * 2,
          behavior: "smooth",
        });
      }

      // =========================
      // Drag / Swipe Carousel
      // =========================
      document.querySelectorAll(".carousel").forEach((carousel) => {
        let startX = 0;
        let scrollLeft = 0;
        let isDragging = false;

        carousel.addEventListener("mousedown", (e) => {
          isDragging = true;
          startX = e.pageX - carousel.offsetLeft;
          scrollLeft = carousel.scrollLeft;
          carousel.style.cursor = "grabbing";
        });

        carousel.addEventListener("mouseleave", () => {
          isDragging = false;
          carousel.style.cursor = "";
        });

        carousel.addEventListener("mouseup", () => {
          isDragging = false;
          carousel.style.cursor = "";
        });

        carousel.addEventListener("mousemove", (e) => {
          if (!isDragging) return;

          e.preventDefault();
          const x = e.pageX - carousel.offsetLeft;
          carousel.scrollLeft = scrollLeft - (x - startX);
        });
      });

      // =========================
      // Drag-to-scroll (vidRow)
      // =========================
      const row = document.getElementById("vidRow");

      if (row) {
        let startX = 0;
        let scrollLeft = 0;
        let isDragging = false;

        row.addEventListener("mousedown", (e) => {
          isDragging = true;
          startX = e.pageX - row.offsetLeft;
          scrollLeft = row.scrollLeft;
        });

        row.addEventListener("mouseleave", () => (isDragging = false));
        row.addEventListener("mouseup", () => (isDragging = false));

        row.addEventListener("mousemove", (e) => {
          if (!isDragging) return;

          e.preventDefault();
          row.scrollLeft = scrollLeft - (e.pageX - row.offsetLeft - startX);
        });
      }

      // =========================
      // FAQ Accordion
      // =========================
      const faqList = document.getElementById("faqList");

      if (faqList) {
        faqList.addEventListener("click", (e) => {
          const trigger = e.target.closest(".faq-trigger");
          if (!trigger) return;

          const item = trigger.closest(".faq-item");
          const isOpen = item.classList.contains("open");

          // Close all items
          document.querySelectorAll(".faq-item").forEach((faq) => {
            faq.classList.remove("open");
            faq
              .querySelector(".faq-trigger")
              .setAttribute("aria-expanded", "false");
          });

          // Open clicked item
          if (!isOpen) {
            item.classList.add("open");
            trigger.setAttribute("aria-expanded", "true");
          }
        });
      }