// JS:-

// script.js

const notesList = document.querySelector('.notes-list');
const addNoteForm = document.querySelector('.add-note-form');
const noteTitleInput = document.querySelector('#note-title');
const noteContentInput = document.querySelector('#note-content');

addNoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const noteTitle = noteTitleInput.value;
  const noteContent = noteContentInput.value;

  const newNote = createNote(noteTitle, noteContent);
  addNoteToDOM(newNote);

  noteTitleInput.value = '';
  noteContentInput.value = '';
});

function createNote(noteTitle, noteContent) {
  const noteElement = document.createElement('li');
  noteElement.classList.add('note');

  const noteTitleElement = document.createElement('h2');
  noteTitleElement.classList.add('note-title');
  noteTitleElement.textContent = noteTitle;

  const noteContentElement = document.createElement('p');
  noteContentElement.classList.add('note-content');
  noteContentElement.textContent = noteContent;

  const deleteNoteButton = document.createElement('button');
  deleteNoteButton.classList.add('delete-note');
  deleteNoteButton.textContent = 'Delete Note';
  deleteNoteButton.addEventListener('click', (event) => {
    // Remove the note element from the DOM
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  });

  // Append elements to the note element
  noteElement.appendChild(noteTitleElement);
  noteElement.appendChild(noteContentElement);
  noteElement.appendChild(deleteNoteButton);

  return noteElement;
}

// Assuming you have a function addNoteToDOM that appends the note to the list
function addNoteToDOM(noteElement) {
  notesList.appendChild(noteElement);
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| \\

function createButton(text, className, clickHandler) {
  const button = document.createElement('button');
  button.classList.add(className);
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
}

// Function to add the note to the DOM
function addNoteToDOM(noteElement) {
  notesList.appendChild(noteElement);
}

// Function to handle deleting a note
function deleteNote() {
  this.parentNode.parentNode.removeChild(this.parentNode);
}

// Function to handle editing a note
function editNote() {
  const noteTitleElement = this.parentNode.querySelector('.note-title');
  const noteContentElement = this.parentNode.querySelector('.note-content');

  const newTitle = prompt('Edit Title:', noteTitleElement.textContent);
  const newContent = prompt('Edit Content:', noteContentElement.textContent);

  if (newTitle !== null && newContent !== null) {
    noteTitleElement.textContent = newTitle;
    noteContentElement.textContent = newContent;
  }
}
