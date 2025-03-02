// Interactive mouse effect
const homeBtn = document.getElementById('homeBtn');
const careerBtn = document.getElementById('careerBtn');

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Button hover effects for the home and career sections
homeBtn.addEventListener('click', () => {
    alert('Learn more about our services!');
});

careerBtn.addEventListener('click', () => {
    alert('Apply for a career with us!');
});
