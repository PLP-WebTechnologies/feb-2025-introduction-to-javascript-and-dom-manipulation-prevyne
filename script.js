document.addEventListener('DOMContentLoaded', function() {
    // Change text content dynamically
    const textToChange = document.getElementById('text-to-change');
    const changeTextButton = document.getElementById('change-text-btn');
    let textChanged = false;

    changeTextButton.addEventListener('click', function() {
        if (textChanged) {
            textToChange.textContent = 'This is the original text.';
        } else {
            textToChange.textContent = 'The text has been changed!';
        }
        textChanged = !textChanged;
    });

    // Modify CSS styles via JavaScript
    const styleDiv = document.getElementById('style-div');
    const changeStyleButton = document.getElementById('change-style-btn');

    styleDiv.addEventListener('mouseover', function() {
        styleDiv.style.backgroundColor = 'lightcoral';
        styleDiv.style.color = 'white';
    });

    styleDiv.addEventListener('mouseout', function() {
        styleDiv.style.backgroundColor = 'lightblue'; // Revert to original or another style
        styleDiv.style.color = 'black';
    });

    changeStyleButton.addEventListener('click', function() {
        styleDiv.style.border = '2px dashed red';
        styleDiv.style.borderRadius = '10px';
        styleDiv.textContent = 'Style Changed by Button!';
    });

    // Add or remove an element when a button is clicked
    const elementContainer = document.getElementById('element-container');
    const addElementButton = document.getElementById('add-element-btn');
    const removeElementButton = document.getElementById('remove-element-btn');
    let elementCounter = 0;

    addElementButton.addEventListener('click', function() {
        elementCounter++;
        const newElement = document.createElement('div');
        newElement.textContent = `This is new element #${elementCounter}.`;
        newElement.classList.add('new-element');
        newElement.setAttribute('id', `element-${elementCounter}`);
        elementContainer.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', function() {
        const lastAddedElement = elementContainer.querySelector('.new-element:last-child');
        if (lastAddedElement) {
            elementContainer.removeChild(lastAddedElement);
            // Reset counter if no elements are left to prevent it from growing indefinitely if not desired
            if (elementContainer.querySelectorAll('.new-element').length === 0) {
                elementCounter = 0;
            }
        } else {
            alert('No elements to remove.');
        }
    });
});
