// scripts.js

// Function to change text content
function changeText() {
    document.getElementById('myText').textContent = 'Text Changed!';
}

// Function to change styles
function changeStyle() {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'green';
    box.style.width = '200px';
    box.style.height = '200px';
}

// Function to update content
function updateContent() {
    const newContent = 'This is the new content!';
    document.getElementById('content').innerHTML = newContent;
}

// Function to add a new element
function addElement() {
    const container = document.getElementById('container');
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = 'Newly Created Element';
    container.appendChild(newElement);
}

// Event listeners
document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('changeStyleButton').addEventListener('click', changeStyle);
document.getElementById('updateContentButton').addEventListener('click', updateContent);
document.getElementById('addElementButton').addEventListener('click', addElement);
