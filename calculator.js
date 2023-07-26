<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        function calculate(num1, num2, operator) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            if (isNaN(num1) || isNaN(num2)) {
                return 'Error: Please enter numbers only.';
            }

            switch(operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if(num2 != 0) {
                    return num1 / num2;
                } else {
                    return 'Error: Division by zero is not allowed.';
                }
            default:
                return 'Error: Unknown operator.';
            }
        }

        $(document).ready(function() {
            $("#myButton").click(function() {
                var num1 = $('#num1').val();
                var num2 = $('#num2').val();
                var operator = $('#operator').val();

                var result = calculate(num1, num2, operator);
                $('#result').text("Result: " + result);
            });
        });
    </script>
</head>
<body>
    <input type="text" id="num1" placeholder="Enter first number">
    <input type="text" id="num2" placeholder="Enter second number">

    <select id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <button id="myButton">Calculate</button>
    <p id="result"></p>
</body>
</html>
