const expandButtons = [...document.querySelectorAll('.expand-icon')];
const shrinkButtons = [...document.querySelectorAll('.shrink-icon')];
const answerList = [...document.querySelectorAll('.answer')];


expandButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleExpandButton(index));
});

shrinkButtons.forEach((button, index) => {
    button.addEventListener("click", () => handleShrinkButton(index));
});

function handleExpandButton(expandIndex) {    
    expandButtons.forEach((button, index) => {
        if(index === expandIndex) {
            button.setAttribute('aria-hidden', 'true');
            shrinkButtons[expandIndex].setAttribute('aria-hidden', 'false');
            answerList[expandIndex].setAttribute('aria-hidden', 'false');
        }
    });
}

function handleShrinkButton(shrinkIndex) {
    shrinkButtons.forEach((button, index) => {
        if(index === shrinkIndex) {
            button.setAttribute('aria-hidden', 'true');
            expandButtons[shrinkIndex].setAttribute('aria-hidden', 'false');
            answerList[shrinkIndex].setAttribute('aria-hidden', 'true');
        }
    });
}