import React, { useState, useEffect } from "react";

const NoteModal = ({ closeModal, addNote, currentNote, editNote }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    } else {
      setTitle("");        // Clear form when adding new note
      setDescription("");
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(currentNote._id, title, description);  // Editing mode
    } else {
      addNote(title, description);                    // Adding new note
    }
    closeModal();
  };

  return (
    <div>
      <div>
        <h2>{currentNote ? "Edit Note" : "Add New Note"}</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Note Description"
          />
          <button type="submit">{currentNote ? "Update Note" : "Add Note"}</button>
        </form>
        <button onClick={closeModal} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default NoteModal;
