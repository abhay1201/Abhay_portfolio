function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Add transition for smooth opening and closing
    menu.style.transition = "max-height 0.3s ease-in-out";
}
// JavaScript to set dynamic widths for progress bars
document.addEventListener("DOMContentLoaded", function() {
    // Define percentages for each interest area
    const percentages = [70, 80, 60, 50, 90];
    
    // Select all progress bars
    const progressBars = document.querySelectorAll(".progress-bar");
    
    // Set width for each progress bar based on percentages array
    progressBars.forEach((bar, index) => {
        bar.style.width = `${percentages[index]}%`;
        bar.textContent = `${percentages[index]}%`;
    });
});
