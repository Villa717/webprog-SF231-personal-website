const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  localStorage.setItem("theme", body.classList.contains("light-theme") ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
}

const text = ["Andrei", "a Developer", "a Learner"];
let index = 0;
const dynamicText = document.getElementById("dynamicText");

setInterval(() => {
  dynamicText.textContent = text[index];
  index = (index + 1) % text.length;
}, 2000);

document.getElementById("scrollProjects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !msg) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
  } else {
    formMsg.textContent = "Message sent successfully!";
    formMsg.style.color = "lightgreen";
    this.reset();
  }
});
