
      function calculateSum() {
        // Get the input values
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);

        // Check if the input values are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
          alert('Please enter valid numbers');
          return;
        }

        // Calculate the sum
        var sum = num1 + num2;

        // Display the sum
        alert('The sum is: ' + sum);
      }
    