const { useState } = React;

function NoteApp() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1 className="heading">Smart Note Taking Website</h1>
      <div className="notes-container">
        <form
          className="add-note-form"
          onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.elements["noteTitle"].value;
            const content = e.target.elements["noteContent"].value;
            addNote({ title, content });
          }}
        >
          <label htmlFor="note-title" className="title11">
            Note Title:
          </label>
          <input type="text" id="note-title" name="noteTitle" required />
          <label htmlFor="note-content" className="title11">
            Note Content:
          </label>
          <textarea id="note-content" name="noteContent" rows="5" required></textarea>
          <button type="submit">Add Note</button>
        </form>

        <ul className="notes-list">
          {notes.map((note, index) => (
            <li className="note" key={index}>
              <h2 className="note-title">{note.title}</h2>
              <p className="note-content">{note.content}</p>
              <button className="delete-note" onClick={() => deleteNote(index)}>
                Delete Note
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<NoteApp />, document.getElementById("root"));
