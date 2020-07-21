const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("comfirm");
const checkBox = document.getElementById("checkbox");
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector(".close-btn");
const submit = document.querySelector('button')



// Checking erorr in form
function showError(input, message) {
    const formValidate = input.parentElement;
    formValidate.className = "form-validate error";
    const small = formValidate.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formValidate = input.parentElement;
    formValidate.className = "form-validate success";
}

//Check if email is valid 
function checkValid(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid")
    }
}


// Check required input
function checkInputField(inputField){
    inputField.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getUpper(input)} is required`);
        }else{
            showSuccess(input);
            
        }
    });
}

// Get input lenght
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getUpper(input)} must be at least ${min} character`);
    }else if(input.value.length > max){
        showError(input, `${getUpper(input)} must be less than ${max} character`);
    }
    else{
        showSuccess(input)
    }
}

// Get upper case
function getUpper(input){
   return  input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check password match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Password do not match");
    }
}

// Form validate

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputField([username, email, password, confirmPass]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkValid(email);
    checkPasswordsMatch(password, confirmPass);
    modalOverlay.classList.add('open-modal');
});


closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
})