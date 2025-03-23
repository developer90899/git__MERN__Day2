document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
  
    let count = 0;
    // Update the counter display
    function updateCounter() {
      counterElement.textContent = count;
    }
  
    // Increment button click event
    incrementButton.addEventListener("click", function () {
      count++;
      updateCounter();
    });
  
    // Decrement button click event
    decrementButton.addEventListener("click", function () {
      count--;
      updateCounter();
    });
  });
  