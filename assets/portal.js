document.addEventListener("DOMContentLoaded", () => {
  const date = new Intl.DateTimeFormat(document.documentElement.lang || "en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  document.querySelectorAll("[data-portal-date]").forEach((element) => {
    element.textContent = date;
  });
});
