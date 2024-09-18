document.addEventListener('DOMContentLoaded', () => {
// Get the button and skill circles
const button = document.getElementById('toggleButton') as HTMLButtonElement;
const circles = document.querySelectorAll('.circles .circle') as NodeListOf<HTMLDivElement>;
// Ensure elements are not null
if (button && circles) {
button.addEventListener('click', () => {
// Get the last two circles
const lastTwoCircles = Array.from(circles).slice(-2);
// Toggle visibility of the last two circles
lastTwoCircles.forEach(circle => {
    if (circle.classList.contains('hidden')) {
        circle.classList.remove('hidden');
        button.textContent = 'Hide Last Skill';} 
    
    else {
        circle.classList.add('hidden');
        button.textContent = 'Show Last Skill';
        }
});
});
}
});
