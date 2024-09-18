// document.getElementById('skill.bt')?.addEventListener('click', () => clickButton(''));
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and skill circles
    var button = document.getElementById('toggleButton');
    var circles = document.querySelectorAll('.circles .circle');
    // Ensure elements are not null
    if (button && circles) {
        button.addEventListener('click', function () {
            // Get the last two circles
            var lastTwoCircles = Array.from(circles).slice(-2);
            // Toggle visibility of the last two circles
            lastTwoCircles.forEach(function (circle) {
                if (circle.classList.contains('hidden')) {
                    circle.classList.remove('hidden');
                    button.textContent = 'Hide Last Skill';
                }
                else {
                    circle.classList.add('hidden');
                    button.textContent = 'Show Last Skill';
                }
            });
        });
    }
});
