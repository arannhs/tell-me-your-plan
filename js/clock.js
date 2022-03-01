const clock = document.getElementById("clock");

//date사용해서 현재 시간 구하기
//10이하인 경우: padStart이용해서 앞자리 0으로 채우기
function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    clock.innerText = `${hour} : ${minutes} : ${seconds}`;
}

setInterval(getClock, 1000);
