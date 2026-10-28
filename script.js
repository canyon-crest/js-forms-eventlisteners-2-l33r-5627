// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
document.getElementById('btnShout').addEventListener('click', function(){
    outShout.innerHTML = shoutInput.value.toUpperCase()+"!";
})
// STEP 2: Add a click event listener to the button.
//         Inside the listener function:
//         a) Get the text from the input with ID "shoutInput"
//            using .value
//         b) Convert the text to uppercase using .toUpperCase()
//         c) Add "!" to the end
//         d) Display the result in the element with ID "outShout"
//            using .innerHTML
//
//         Example: "hello" → "HELLO!"


document.getElementById('btnCalc').addEventListener('click', () => {
    
    // a) Get the selected size price:
    const radioSizes = document.getElementsByName("rg");
    let sizePrice = 0;
    
    for (let i = 0; i < radioSizes.length; i++) {
        if (radioSizes[i].checked) {
            sizePrice = parseFloat(radioSizes[i].value);
            break;
        }
    }
    
    // b) Count checked toppings:
    const checkboxToppings = document.getElementsByName("cb");
    let checkedCount = 0;
    
    for (let i = 0; i < checkboxToppings.length; i++) {
        if (checkboxToppings[i].checked) {
            checkedCount++;
        }
    }
    const toppingsPrice = checkedCount * 0.50;
    
    // c) Get the service fee:
    const serviceType = document.getElementById("serviceSelect").value;
    let serviceFee = 0;
    
    if (serviceType === "dinein") {
        serviceFee = 0;
    } else if (serviceType === "takeout") {
        serviceFee = 1.50;
    } else if (serviceType === "delivery") {
        serviceFee = 3.00;
    }
    
    // d) Calculate total: size + toppings + service fee
    const total = sizePrice + toppingsPrice + serviceFee;
    
    // e) Get the customer name from the input with ID "myInput"
    let textInputName = document.getElementById("myInput").value.trim();
    if (textInputName === "") {
        textInputName = "Customer";
    }
    
    // f) Display the result in the element with ID "myPara"
    document.getElementById("myPara").innerHTML = textInputName + ", your total is $" + total.toFixed(2);
    
});

// STEP 4: Get the "Clear" button by ID ("clearBtn")
const clearBtn = document.getElementById("clearBtn");

// Add a click event listener.
clearBtn.addEventListener('click', function() {
    // a) Set the name input value to ""
    document.getElementById('myInput').value = "";
    
    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById('r3').checked = true;
    
    // c) Uncheck ALL topping checkboxes (loop through them)
    const checkboxes = document.querySelectorAll('input[name="cb"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    }); 

    // d) Set the service dropdown value to "dinein"
    document.getElementById('serviceSelect').value = "dinein"; 

    // e) Set the output paragraph innerHTML to ""
    document.getElementById('myPara').innerHTML = ""; 
}); 
