const dropdowns = document.querySelectorAll(".dropdown");
const menu = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-button");
const html = document.documentElement;

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", handleDropdownClick);
});

function handleDropdownClick(event) {
  const dropdown = event.currentTarget;
  dropdown.classList.toggle("active");
  clickOutsideDropdown(dropdown, ".dropdown");
}

function clickOutsideDropdown(dropdown, selector) {
  setTimeout(() => {
    html.addEventListener("click", handleOutsideClickDropdown);
  });

  function handleOutsideClickDropdown(event) {
    if (!event.target.closest(selector)) {
      dropdown.classList.remove("active");
      html.removeEventListener("click", handleOutsideClickDropdown);
    }
  }
}

menuButton.addEventListener("click", handleMenuClick);

function handleMenuClick() {
  if (menu.classList.contains("active")) {
    closeMenu();
    return;
  }
  menu.classList.add("active");
  menuButton.classList.add("active");
  html.style.overflow = "hidden";
  setTimeout(() => {
    html.addEventListener("click", handleOutsideClickMenu);
  });
}

function closeMenu() {
  menu.classList.remove("active");

  menuButton.classList.remove("active");
  html.style.overflow = "auto";
  html.removeEventListener("click", handleOutsideClickMenu);
}

function handleOutsideClickMenu(event) {
  if (!event.target.closest(".navigation")) {
    closeMenu();
    html.removeEventListener("click", handleOutsideClickMenu);
  }
}
