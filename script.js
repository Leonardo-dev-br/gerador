let slideElement = document.getElementById("slider");
let buttonElement = document.getElementById("button");
let sizePassword = document.getElementById("valor");
let password = document.getElementById("password");
let containerPassword = document.getElementById("container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value; 

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < slideElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n)); 
        }

      containerPassword.classList.remove("hide");  
      password.innerHTML = pass;
      novaSenha = pass;
}

function copyPassaword() {
    navigator.clipboard.writeText(novaSenha).then(() => {
        alert("Senha copiada com sucesso!");
    });
}