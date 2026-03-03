const progress = document.getElementById("progress");
const sectionEls = [...document.querySelectorAll("section")];
const links = [...document.querySelectorAll(".nav-link")];

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
};

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
};

const observer = new IntersectionObserver(onIntersect, {
  rootMargin: "-40% 0px -45% 0px",
  threshold: 0.01,
});
sectionEls.forEach((el) => observer.observe(el));

links.forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    target.classList.add("highlight");
    setTimeout(() => target.classList.remove("highlight"), 900);
  });
});

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.previousElementSibling?.textContent?.trim();
    if (!text) return;

    const previousLabel = btn.textContent;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Скопировано";
      setTimeout(() => {
        btn.textContent = previousLabel;
      }, 1200);
    } catch {
      btn.textContent = "Не удалось";
      setTimeout(() => {
        btn.textContent = previousLabel;
      }, 1400);
    }
  });
});

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
