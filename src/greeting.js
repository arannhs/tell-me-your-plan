const greetingContainer = document.getElementById("greeting");
const greetingText = document.getElementById("greeting-text");
const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");

function onLogin(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    greetingUser(userName);
    
}

function greetingUser(userName){
    greetingText.innerText = `Hello, ${userName}! What are you doing today?`;
    greetingText.classList.remove("hidden");
    clock.classList.remove("hidden");
    todo.classList.remove("hidden");
}


const savedUserName = localStorage.getItem("userName");

if(savedUserName === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLogin);
}else{
    clock.classList.remove("hidden");
    todo.classList.remove("hidden");
    greetingUser(savedUserName);
}