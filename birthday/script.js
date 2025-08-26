document.getElementById('openBtn').addEventListener('click', function() {
    // Animate flap opening
    const flap = document.querySelector('.envelope-flap');
    flap.style.transform = 'rotateX(120deg)';
    // Fade out envelope after animation
    setTimeout(() => {
        document.getElementById('envelope').style.opacity = '0';
    }, 700);
    // Show letter after envelope fades out
    setTimeout(() => {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('letter').classList.remove('hidden');
    }, 1400);
});