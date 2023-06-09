# HTML Page with Parameters

This is an HTML page that automatically sets parameters in the URL and inserts them into a form on page load. It also allows users to update the parameters by clicking a link.

## How it works

1. When the page loads, the JavaScript code is executed.
2. The code first checks if the URL parameters "param1" and "param2" are already present in the URL.
3. If the parameters are not present, the code sets them to default values ("value1" and "value2") and navigates to the modified URL. This ensures that the parameters are always present in the URL.
4. Next, the code retrieves the URL parameters from the current URL and inserts them into the respective form fields.
5. If the URL parameters "param1" and/or "param2" are present, their values are populated in the corresponding input fields of the form.
6. The code also adds an event listener to the "myLink" element (the link in the HTML page).
7. When the link is clicked, the event listener prevents the default behavior (opening the link) and retrieves the values from the form fields.
8. Using the form values, the code builds a new URL with the updated parameter values.
9. Finally, the code navigates to the new URL, updating the parameters in the URL.

## How to use

1. Copy the provided code into an HTML file.
2. Customize the default parameter values ("value1" and "value2") in the JavaScript code if desired.
3. Make sure your HTML markup includes the necessary elements with the correct IDs:
   - "myForm" for the form element
   - "input1" for the first input field
   - "input2" for the second input field
   - "myLink" for the link element
4. Save the HTML file.
5. Open the HTML file in a web browser.

The page will automatically set the default parameters in the URL and insert them into the form fields on page load. You can update the parameter values by modifying the form fields and clicking the link.

