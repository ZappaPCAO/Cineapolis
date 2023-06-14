document.querySelectorAll(".-b-expander").forEach(function (el) {
  el.addEventListener("click", () => {
    el.classList.toggle("-b-text-undexpanded");
    if (el.getAttribute("title") === "Expandir")
      el.setAttribute("title", "Disminuir");
    else el.setAttribute("title", "Expandir");
  });
});
