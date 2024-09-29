const form = document.querySelector('form');

// Attach the submit event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  const height = parseInt(document.querySelector('#height').value); // Get height as an integer
  const weight = parseInt(document.querySelector('#weight').value); // Get weight as an integer
  const results = document.querySelector('#results'); // Get the results element
  const range = document.querySelector('#range'); // Get the range element

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height in centimeters.";
    range.innerHTML = ""; // Clear range message if input is invalid
  }
  // Validate weight
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight in kilograms.";
    range.innerHTML = ""; // Clear range message if input is invalid
  }
  // Calculate and display the BMI
  else {
    const heightInMeters = height / 100; // Convert height to meters
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
    results.innerHTML = `<span>Your BMI is: ${BMI}</span>`; // Display the result

    // Determine the weight range
    if (BMI < 18.5) {
      range.innerHTML = "You are underweight.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      range.innerHTML = "You have a normal weight.";
    } else {
      range.innerHTML = "You are overweight.";
    }
  }
});
