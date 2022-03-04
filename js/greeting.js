const greetingContainer = document.getElementById("greeting");
const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");

function onLogin(event){
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    
    loginForm.classList.add("hidden");
    
    const greetingUser = document.createElement("h2");
    greetingUser.innerText = `Hello ${userName}!`;

    greetingContainer.append(greetingUser);

}

loginForm.addEventListener("submit", onLogin);