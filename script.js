const dropdownItems = document.querySelectorAll(".dropdown");
const mobMenu = document.querySelector(".menu");
const menuToggler = document.querySelector(".navbar-toggler");

if (window.innerWidth > 700) {
    [...dropdownItems].forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", (e) => {
            const activeDropdown = e.target;
            const activeDropdownList = activeDropdown.querySelector(".dropdown-list");
            activeDropdownList.classList.add("show");
        });
        dropdown.addEventListener("mouseleave", (e) => {
            const activeDropdown = e.target;
            const activeDropdownList = activeDropdown.querySelector(".dropdown-list");
            activeDropdownList.classList.remove("show");
        });
    });
} else {
    [...dropdownItems].forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.preventDefault();
            const activeDropdown = e.target.parentElement;
            console.log(activeDropdown);
            const activeDropdownList = activeDropdown.querySelector(".dropdown-list");
            activeDropdownList.classList.toggle("show");
        });
    });
}

menuToggler.addEventListener("click", () => {
    mobMenu.classList.toggle("show");
});
