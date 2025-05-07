import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "../css/NoteCard.css";

const NoteCard = ({ note, onEdit, deleteNote }) => {
  return (
    <div className="note-card">
      <div className="note-content">
        {/* Note title */}
        <h2 className="note-title">{note.title}</h2>
        {/* Note description */}
        <p className="note-description">{note.description}</p>

        {/* Action buttons for editing and deleting */}
        <div className="note-actions">
          <button className="note-edit" onClick={() => onEdit(note)}>
            <FaEdit />
          </button>
          <button className="note-delete" onClick={() => deleteNote(note._id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
