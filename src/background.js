const imgNum = Math.floor(Math.random() * 8) + 1;

document.body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('image/${imgNum}.jpg')`;
