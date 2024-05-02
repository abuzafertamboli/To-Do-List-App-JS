// input-box
const inputBox = document.querySelector('#input-box');
const addButton = document.querySelector('.add-button');

// list-container
const listContainer = document.querySelector('.list-container');

// pop-up
const popUp = document.querySelector('.pop-up');
const okButton = document.querySelector('.ok-button');
// dark-bg
const darkBg = document.querySelector('.dark-bg');

// add-button
addButton.addEventListener('click', (event) => {
    if (inputBox.value === '') {
        inputBox.setAttribute('disabled', '');
        popUp.classList.add('open-pop-up');
        darkBg.classList.add('show-dark-bg');
    } else {
        // creating li
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // creating span
        let span = document.createElement('span');
        span.classList.add('delete-icon');
        span.innerHTML = "&#10006;";
        li.appendChild(span);
    }
    // cleaning the input-box
    inputBox.value = '';
    saveData();
})

// to activate the enter key on input-box
inputBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
})

// list-container
listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
        saveData();
    } else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData();
    }
})

// save the data
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// show the saved data even after the page is refreshed
function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();

// ok button
okButton.addEventListener('click', (event) => {
    popUp.classList.remove('open-pop-up');
    darkBg.classList.remove('show-dark-bg');
    inputBox.removeAttribute('disabled');
})