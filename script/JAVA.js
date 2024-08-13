document.addEventListener("DOMContentLoaded", function() {
    const droneLink = document.querySelector('.drone-link .image-description');
    const roboLink = document.querySelector('.robo-link .image-description');
    const macheLink = document.querySelector('.mache-link .image-description');
    const fulewarLink = document.querySelector('.fulewar-link .image-description');
    const mangoLink = document.querySelector('.mango-link .image-description');
    const jackfruitLink = document.querySelector('.jackfruit-link .image-description');
    const appleLink = document.querySelector('.apple-link .image-description');

    droneLink.addEventListener('click', function() {
        window.location.href = 'drone-method.html';
    });

    roboLink.addEventListener('click', function() {
        window.location.href = 'robo.html';
    });

    macheLink.addEventListener('click', function() {
        window.location.href = 'machine.html';
    });

    fulewarLink.addEventListener('click', function() {
        window.location.href = 'Cauliflower.html';
    });

    mangoLink.addEventListener('click', function() {
        window.location.href = 'mango.html';
    });

    jackfruitLink.addEventListener('click', function() {
        window.location.href = 'jackfruit.html';
    });

    appleLink.addEventListener('click', function() {
        window.location.href = 'apple.html';
    });
});
