document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tooltip-trigger]").forEach((el) => {
    const tooltip = el.querySelector("[data-tooltip]");
    const container = el.closest(".tarjetaNivel");

    el.addEventListener("mouseenter", () => {
      if (!tooltip || !container) return;

      // 1. Mostrar tooltip sin animación primero
      tooltip.style.opacity = "0";
      tooltip.style.pointerEvents = "none";
      tooltip.style.transform = "translateX(-50%)";
      tooltip.style.left = "50%";
      tooltip.classList.add("tooltip-visible");

      // 2. Esperar un frame para que se renderice bien
      requestAnimationFrame(() => {
        const tooltipRect = tooltip.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        let offsetX = "-50%";
        let offsetY = "0";

        const overflowLeft = tooltipRect.left < containerRect.left;
        const overflowRight = tooltipRect.right > containerRect.right;

        if (overflowLeft) {
          tooltip.style.left = "0";
          offsetX = "0";
        } else if (overflowRight) {
          tooltip.style.left = "100%";
          offsetX = "-100%";
        }

        const overflowBottom = tooltipRect.bottom > containerRect.bottom;
        const overflowTop = tooltipRect.top < containerRect.top;

        if (overflowBottom) {
          const exceso = tooltipRect.bottom - containerRect.bottom + 8;
          offsetY = `-${exceso}px`;
        } else if (overflowTop) {
          const exceso = containerRect.top - tooltipRect.top + 8;
          offsetY = `${exceso}px`;
        }

        tooltip.style.transform = `translate(${offsetX}, ${offsetY})`;

        // 3. Activar visibilidad real ahora sí
        tooltip.style.opacity = "";
        tooltip.style.pointerEvents = "";
      });
    });

    el.addEventListener("mouseleave", () => {
      tooltip.classList.remove("tooltip-visible");

    });
  });
});
