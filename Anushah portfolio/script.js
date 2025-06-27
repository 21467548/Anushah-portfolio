// Dynamic greeting based on time
window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Welcome";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  console.log(`${greeting}, visitor!`);

  // Show a small greeting popup (optional)
  const welcomeMessage = document.createElement("div");
  welcomeMessage.textContent = `${greeting}! 👋`;
  welcomeMessage.style.position = "fixed";
  welcomeMessage.style.bottom = "20px";
  welcomeMessage.style.right = "20px";
  welcomeMessage.style.background = "#007bff";
  welcomeMessage.style.color = "#fff";
  welcomeMessage.style.padding = "10px 20px";
  welcomeMessage.style.borderRadius = "8px";
  welcomeMessage.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  welcomeMessage.style.zIndex = "999";

  document.body.appendChild(welcomeMessage);

  setTimeout(() => {
    welcomeMessage.remove();
  }, 4000);
});
