'use strict';

// Element toggle function
const elementToggleFunc = function(elem) {
  elem.classList.toggle("active");
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function() {
  elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function() {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function() {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Function to handle element toggle
select.addEventListener("click", function() {
  elementToggleFunc(this);
});

// Function to handle filtering
const filterFunc = function(selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const category = filterItems[i].dataset.category.toLowerCase();
    if (selectedValue === "all" || selectedValue === category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Event listeners for filter buttons
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function() {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    // Toggle active class on filter buttons
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Event listener for select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function() {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter items
const filterItems = document.querySelectorAll("[data-filter-item]");

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function() {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function() {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
