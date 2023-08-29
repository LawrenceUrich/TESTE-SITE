const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const contentTitle = document.querySelector('.content h1');
const contentText = document.querySelector('.content p');

const escolhamTitle = document.querySelector('.content .escolham-title');

circle1.addEventListener('click', () => {
    document.body.style.background = "url('https://wallpapercave.com/wp/wp9005997.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    contentTitle.textContent = "Ele é o verdadeiro mestre das chamas, um campeão de fogo.";
});

circle2.addEventListener('click', () => {
    document.body.style.background = "url('https://i0.wp.com/i.pinimg.com/originals/e4/fc/80/e4fc80440e7c304f6c3b2a8bba200bad.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    contentTitle.textContent = "Nos campos congelados, ele reina como o imbatível campeão de gelo.";
});

circle3.addEventListener('click', () => {
    document.body.style.background = "url('https://wallpapers.com/images/hd/4k-anime-black-rock-shooter-pxfsljoqu6ac91yq.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    contentTitle.textContent = "Nas sombras mais profundas, ela se torna a personificação da escuridão.";
});
