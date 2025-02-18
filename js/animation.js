document.addEventListener("DOMContentLoaded", function () {
  let scrollSpeed = 15; // Adjust scroll speed
  let intervals = {}; // Store separate intervals for each column
  let scrollPaused = {}; // Track if scrolling should stop at the end

  function startScroll(column) {
      let img = column.querySelector("img");
      let imgHeight = img.scrollHeight;
      let columnHeight = column.clientHeight;
      let scrollAmount = 0;
      scrollPaused[column.id] = false; // Reset pause state

      img.style.transition = "transform 1.2s ease-out"; // Smooth scroll effect

      intervals[column.id] = setInterval(() => {
          if (scrollAmount < imgHeight - columnHeight && !scrollPaused[column.id]) {
              scrollAmount += scrollSpeed;
              img.style.transform = `translateY(-${scrollAmount}px)`;
          } else {
              clearInterval(intervals[column.id]); // Stop scrolling when reaching the bottom
              scrollPaused[column.id] = true; // Mark as paused
          }
      }, 30);
  }

  function stopScroll(column) {
      clearInterval(intervals[column.id]);
      let img = column.querySelector("img");
      img.style.transition = "transform 1.2s ease-out"; // Smooth return effect
      img.style.transform = "translateY(0)"; // Reset position
      scrollPaused[column.id] = false; // Reset pause state
  }

  let columns = document.querySelectorAll(".scroll-column");

  columns.forEach(column => {
      column.addEventListener("mouseenter", () => startScroll(column));
      column.addEventListener("mouseleave", () => stopScroll(column));
  });
});




// document.addEventListener("DOMContentLoaded", function () {
//   let scrollSpeed = 10; // Adjust scroll speed
//   let intervals = {}; // Store separate intervals for each column

//   function startScroll(column) {
//       let scrollAmount = 0;
//       let img = column.querySelector("img");
//       let imgHeight = img.scrollHeight;
//       let columnHeight = column.clientHeight;

//       column.style.transition = "transform 1.2s ease-out"; // Smooth scroll effect

//       intervals[column.id] = setInterval(() => {
//           if (scrollAmount < imgHeight - columnHeight) {
//               scrollAmount += scrollSpeed;
//               img.style.transform = `translateY(-${scrollAmount}px)`;
//           } else {
//               scrollAmount = 0; // Reset scroll position
//               img.style.transform = `translateY(0)`;
//           }
//       }, 30);
//   }

//   function stopScroll(column) {
//       clearInterval(intervals[column.id]);
//       column.querySelector("img").style.transition = "transform 1.2s ease-out"; // Smooth return effect
//       column.querySelector("img").style.transform = "translateY(0)"; // Reset position
//   }

//   let columns = document.querySelectorAll(".scroll-column");

//   columns.forEach(column => {
//       column.addEventListener("mouseenter", () => startScroll(column));
//       column.addEventListener("mouseleave", () => stopScroll(column));
//   });
// });
