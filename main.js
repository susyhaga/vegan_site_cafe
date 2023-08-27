//validate email//

// const email = document.getElementById("email").value;


// function validarEmail (emailCapturadoDoFormulario) {
//     let validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (emailCapturadoDoFormulario.match(validarRegExNoEmail)) {
//         console.log("RegEx válido!");
//         document.getElementById("email").style.backgroundColor = "white";
//         document.getElementById("email").style.color = "black";
//         document.getElementById("aviso-erro").style.display = "none";
//         return true;
//     } else {
//         console.log("RegEx Inválido");
//         document.getElementById("email").style.backgroundColor = "red";
//         document.getElementById("email").style.color = "white";
//         document.getElementById("aviso-erro").style.display = "block";
//         return false;
//     }
// }
///////////////////////////////////////////////////////////////////////////

//password//
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("The passwords don't match. Try again");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

