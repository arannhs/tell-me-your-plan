const greetingContainer = document.getElementById("greeting");
const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const userName = localStorage.getItem("userName");

function onLogin(event){
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    
    greetingUser(userName);

}

function greetingUser(userName){
    loginForm.classList.add("hidden");
    
    const greetingH2 = document.createElement("h2");
    greetingH2.innerText = `Hello ${userName}!`;

    greetingContainer.append(greetingH2);
}

loginForm.addEventListener("submit", onLogin);


// 이부분 고쳐야 함!!!!!
if(userName){
    greetingUser(userName);
}