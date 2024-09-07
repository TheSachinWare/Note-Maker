document.addEventListener('DOMContentLoaded', () => {
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
  
    // Function to create a new note element
    function createNote(noteTitle, noteContent) {
      const noteElement = document.createElement('li');
      noteElement.classList.add('note');
  
      const noteTitleElement = document.createElement('h2');
      noteTitleElement.classList.add('note-title');
      noteTitleElement.textContent = noteTitle;
  
      const noteContentElement = document.createElement('p');
      noteContentElement.classList.add('note-content');
      noteContentElement.textContent = noteContent;
  
      const deleteNoteButton = createButton('Delete Note', 'delete-note', deleteNote);
      const editNoteButton1 = createButton('EditButton1', 'edit-note1', editNote1); // Added EditButton1 button
  
      // Append elements to the note element
      noteElement.appendChild(noteTitleElement);
      noteElement.appendChild(noteContentElement);
      noteElement.appendChild(deleteNoteButton);
      noteElement.appendChild(editNoteButton1); // Appended EditButton1 button
  
      return noteElement;
    }
  
    // Function to create a button
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
  
    // Function to handle editing using EditButton1
    function editNote1() {
      const noteTitleElement = this.parentNode.querySelector('.note-title');
      const noteContentElement = this.parentNode.querySelector('.note-content');
  
      const newTitle = prompt('Edit Title (EditButton1):', noteTitleElement.textContent);
      const newContent = prompt('Edit Content (EditButton1):', noteContentElement.textContent);
  
      if (newTitle !== null && newContent !== null) {
        noteTitleElement.textContent = newTitle;
        noteContentElement.textContent = newContent;
      }
    }
  });
  