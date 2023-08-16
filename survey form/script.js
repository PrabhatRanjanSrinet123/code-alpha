document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const feedback = document.getElementById("feedback").value;

    // You can process the form data here (e.g., send it to a server)

    alert("Survey submitted successfully!");
    form.reset();
  });
});
