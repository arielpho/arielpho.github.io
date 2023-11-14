function toggleTheme() {
    const darkmode = document.querySelector("body");
    darkmode.classList.toggle("dark-mode");
}
document.getElementById("toggleButton").onclick = toggleTheme;