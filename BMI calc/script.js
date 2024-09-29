const form = document.querySelector('form');

// Attach the submit event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  const height = parseInt(document.querySelector('#height').value); // Get height as an integer
  const weight = parseInt(document.querySelector('#weight').value); // Get weight as an integer
  const results = document.querySelector('#results'); // Get the results element

  // Validate height
  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height in centimeters.";
  }
  // Validate weight
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight in kilograms.";
  }
  // Calculate and display the BMI
  else {
    const heightInMeters = height / 100; // Convert height to meters
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
    results.innerHTML = `<span>Your BMI is: ${BMI}</span>`; // Display the result
  }
  const range= document.querySelector('#range');
  if(results<18.6){
    range.innerHTML="you are under weight"
  }
  else if(results>=18.6&&results<=24.9){
    range.innerHTML="you are normal weight"
  }
  else{
    range.innerHTML="you are over weight"
  }
});
