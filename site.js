const header = document.querySelector("[data-header]");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Spielbibliothek nach Fach filtern
const filterBar = document.querySelector("[data-filter-bar]");
if (filterBar) {
  const chips = Array.from(filterBar.querySelectorAll(".filter-chip"));
  const entries = Array.from(document.querySelectorAll("[data-game-grid] .game-entry"));
  const emptyHint = document.querySelector("[data-filter-empty]");

  function applyFilter(fach) {
    let visible = 0;
    entries.forEach((entry) => {
      const match = fach === "alle" || entry.dataset.fach === fach;
      entry.hidden = !match;
      if (match) visible += 1;
    });
    if (emptyHint) emptyHint.hidden = visible !== 0;
    chips.forEach((chip) => {
      const active = chip.dataset.fach === fach;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  filterBar.addEventListener("click", (event) => {
    const chip = event.target.closest(".filter-chip");
    if (chip) applyFilter(chip.dataset.fach);
  });
}
