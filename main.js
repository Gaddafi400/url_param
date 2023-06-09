window.addEventListener("DOMContentLoaded", function () {
    // Get the current URL
    const url = new URL(window.location.href);
  
    // Set the desired parameters if they are not already present
    if (!url.searchParams.has("param1") || !url.searchParams.has("param2")) {
      url.searchParams.set("param1", "value1");
      url.searchParams.set("param2", "value2");
  
      // Navigate to the modified URL
      window.location.href = url.toString();

    }
    console.log(url)
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
  
    // Insert parameters into the form fields
    const form = document.getElementById("myForm");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
  
    if (urlParams.has("param1")) {
      input1.value = urlParams.get("param1");
    }
  
    if (urlParams.has("param2")) {
      input2.value = urlParams.get("param2");
    }
  
    // Handle link click event
    const link = document.getElementById("myLink");
    link.addEventListener("click", function (event) {
      event.preventDefault();
  
      // Get the values from the form
      const param1Value = input1.value;
      const param2Value = input2.value;
  
      // Build the URL with the form values
      const url = new URL(link.href);
      url.searchParams.set("param1", param1Value);
      url.searchParams.set("param2", param2Value);
  
      // Navigate to the new URL
      window.location.href = url.toString();
    });
  });
  