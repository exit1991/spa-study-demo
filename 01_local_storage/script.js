'use strict';

const textarea = document.querySelector('.textarea');
const saveBtn = document.querySelector('.save-btn');
const loadBtn = document.querySelector('.load-btn');
const clearBtn = document.querySelector('.clear-btn');

saveBtn.addEventListener('click', () => {
    const inputText = textarea.value;
    localStorage.setItem('demoItem', inputText)
});

loadBtn.addEventListener('click', () => {
    const saveText = localStorage.getItem('demoItem');
    textarea.value = saveText;
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('demoItem');
});

