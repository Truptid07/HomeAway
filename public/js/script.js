(() => {
  "use strict";

  // Bootstrap form validation
  const forms = document.querySelectorAll(".needs-validation");
  if (forms.length > 0) {
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  // Tax switch toggle
  const taxSwitch = document.getElementById("flexSwitchCheckDefault");
  if (taxSwitch) {
    taxSwitch.addEventListener("click", () => {
      const taxInfo = document.getElementsByClassName("tax-info");
      for (let info of taxInfo) {
        info.style.display = (info.style.display !== "inline") ? "inline" : "none";
      }
    });
  }

  // Filter scroll buttons
  document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const filtersContainer = document.getElementById("filters-container");
    const filterEl = document.querySelector(".filter");

    if (leftBtn && rightBtn && filtersContainer && filterEl) {
      const filterWidth = filterEl.offsetWidth + 32;

      leftBtn.addEventListener("click", function () {
        filtersContainer.scrollLeft -= filterWidth;
      });

      rightBtn.addEventListener("click", function () {
        filtersContainer.scrollLeft += filterWidth;
      });
    }
  });

  // Touch scroll for filters
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("filters-container");

    if (container) {
      let startX;
      let scrollLeft;

      container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = container.scrollLeft;
      });

      container.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = startX - x;
        container.scrollLeft = scrollLeft + walk;
      });
    }
  });
})();
