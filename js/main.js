console.log("main.js is connected!");
(function () {
  let newUsersList = document.querySelector(".new-users-list");

  // READ THE PDF BEFORE STARTING
  // Step 1-5 is read the pdf.

  // Add your code here
  // Select the form with the class name "new-user-form"
  let newUserForm = document.querySelector(".new-user-form");

  // Add an event listener to the form
  newUserForm.addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Create variables for each input element
    let usernameElement = event.target.elements.username; // event.target is the form, and elements is the collection of all the input elements in the form
    let cityElement = event.target.elements.city;
    let provinceElement = event.target.elements.province;

    // Create new variables for each input element value
    let username = usernameElement.value; // the value of the input element
    let city = cityElement.value;
    let province = provinceElement.value;

    // Log the values to the console
    console.log(username);
    console.log(city);
    console.log(province);

    // Create a variable called "isFormValid" and set it to true
    let isFormValid = true; // this variable will be used to check if the form is valid

    // Use the validator functions "isValueNotEmpty" and "hasWhiteSpace" to check if the username, city, and province are valid
    // Validate username
    if (!isValueNotEmpty(username) || hasWhiteSpace(username)) {
      // If the username is not valid, set the isFormValid variable to false and log an error message to the console
      isFormValid = false;
      console.log("Username is invalid");
      // On the usernameElement, add the class "is-invalid    " if the username is not valid, and remove the class "is-invalid
      usernameElement.classList.add("is-invalid");
    } else {
      // If the username is valid, remove the class "is-invalid
      usernameElement.classList.remove("is-invalid");
    }
    // Validate city
    if (!isValueNotEmpty(city)) {
      // If the city is not valid, set the isFormValid variable to false and log an error message to the console
      isFormValid = false;
      console.log("City is invalid");
      // On the cityElement, add the class "is-invalid    " if the city is not valid, and remove the class "is-invalid
      cityElement.classList.add("is-invalid");
    } else {
      // If the city is valid, remove the class "is-invalid
      cityElement.classList.remove("is-invalid");
    }
    // Validate province

    if (!isValueNotEmpty(province)) {
      // If the province is not valid, set the isFormValid variable to false and log an error message to the console
      isFormValid = false;
      console.log("Province is invalid");
      // On the provinceElement, add the class "is-invalid
      provinceElement.classList.add("is-invalid");
    } else {
      // If the province is valid, remove the class "is-invalid
      provinceElement.classList.remove("is-invalid");
    }
    // If the "isFormValid" value is true, call the provided "addUser" function and pass the username, city, and province as arguments
    if (isFormValid) {
      addUser(username, city, province);
    }
    // Reset the values of each input on submit
    usernameElement.value = "";
    cityElement.value = "";
    provinceElement.value = "";
  });

  // the isValueNotEmpty function:
  // returns true if value not empty
  // returns false if the value is empty
  function isValueNotEmpty(value) {
    if (value !== "") {
      return true;
    }
    return false;
  }

  // the hasWhiteSpace function
  // returns true if s has whitespace
  // returns false if s does not have whitespace
  function hasWhiteSpace(s) {
    return /\s/.test(s);
  }

  // adds user to the page.
  function addUser(username, city, province) {
    let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
    newUsersList.innerHTML = newUsersList.innerHTML + newUser;
  }
})();
