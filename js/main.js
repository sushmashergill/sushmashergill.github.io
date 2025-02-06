document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const projectItems = document.querySelectorAll(".project-item");
  
    // Function to display projects by category
    const displayProjects = (category) => {
      projectItems.forEach((item) => {
        if (item.getAttribute("data-category") === category || category === "all") {
          item.style.display = "block"; // Show matching projects
        } else {
          item.style.display = "none"; // Hide non-matching projects
        }
      });
    };
  
    // Set default category to "UX/UI" on page load
    displayProjects("ux-ui");
  
    // Add event listeners to category buttons
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        displayProjects(category);
  
        // Update button styles for active category
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });



  
  


// document.addEventListener("DOMContentLoaded", () => {
//     const categoryButtons = document.querySelectorAll(".category-btn");
//     const projectItems = document.querySelectorAll(".project-item");
  
//     categoryButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         const category = button.getAttribute("data-category");
  
//         projectItems.forEach(item => {
//           if (item.getAttribute("data-category") === category) {
//             item.style.display = "block"; // Show matching projects
//           } else {
//             item.style.display = "none"; // Hide non-matching projects
//           }
//         });
//       });
//     });
//   });
  