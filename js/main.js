document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const projectList = document.querySelector(".project-list");

  // Function to display projects under respective button on mobile
  const displayProjects = (category, button) => {
    if (window.innerWidth <= 768) {
      // Move the project list under the clicked button
      button.insertAdjacentElement("afterend", projectList);
    }

    // Show only selected category projects
    projectItems.forEach((item) => {
      if (item.getAttribute("data-category") === category || category === "all") {
        item.style.display = "block"; // Show matching projects
      } else {
        item.style.display = "none"; // Hide non-matching projects
      }
    });

    // Ensure project list is visible on mobile when a button is clicked
    if (window.innerWidth <= 768) {
      projectList.classList.add("active");
    }
  };

  // Set default category to "UX/UI" on page load
  displayProjects("ux-ui", document.querySelector(".category-btn.active"));

  // Add event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      displayProjects(category, button);

      // Update button styles for active category
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Hide projects initially for mobile
  if (window.innerWidth <= 768) {
    projectList.classList.remove("active");
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//   const categoryButtons = document.querySelectorAll(".category-btn");
//   const projectItems = document.querySelectorAll(".project-item");
//   const projectList = document.querySelector(".project-list");

//   // Function to display projects by category
//   const displayProjects = (category) => {
//     projectItems.forEach((item) => {
//       if (
//         item.getAttribute("data-category") === category ||
//         category === "all"
//       ) {
//         item.style.display = "block"; // Show matching projects
//       } else {
//         item.style.display = "none"; // Hide non-matching projects
//       }
//     });

//     // Ensure project list is visible on mobile when a button is clicked
//     if (window.innerWidth <= 768) {
//       projectList.classList.add("active");
//     }
//   };

//   // Set default category to "UX/UI" on page load
//   displayProjects("ux-ui");

//   // Add event listeners to category buttons
//   categoryButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const category = button.getAttribute("data-category");
//       displayProjects(category);

//       // Update button styles for active category
//       categoryButtons.forEach((btn) => btn.classList.remove("active"));
//       button.classList.add("active");
//     });
//   });

//   // Hide projects initially for mobile
//   if (window.innerWidth <= 768) {
//     projectList.classList.remove("active");
//   }
// });
