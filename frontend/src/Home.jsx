import React, { useState, useEffect } from "react";
import Particles from "./Styles/Particles";
import Navbar from "./components/Navbar";
import NoteModal from "./components/NoteModal";
import axios from "axios";
import NoteCard from "./components/NoteCard";
import { useAuth } from "./context/ContextProvider";
import "./css/Home.css"; 

function Home() {
  const { user, notes, setNotes } = useAuth();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]);

  useEffect(() => {
    if (query.trim() === '') {
      setFilteredNotes(notes);
    } else {
      const filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [query, notes]);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setNotes(data.notes); 
    } catch (error) {
      console.error("Fetch Notes Error:", error.response?.data || error.message);
      if (error.response && error.response.status === 401) {
        console.warn("Session expired or unauthorized. Signing out...");
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentNote(null);
  };

  const onEdit = (note) => {
    setCurrentNote(note);
    setModalOpen(true);
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/note/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (response.data.success) {
        fetchNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/note/${id}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      if (response.data.success) {
        fetchNotes();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="homecomponent">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <Navbar setQuery={setQuery} />

        <div className="note-container">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <NoteCard key={note._id} note={note} onEdit={onEdit} deleteNote={deleteNote} />
            ))
          ) : (
            <p className="no-notes-text">{user ? "No Notes" : "Please sign in to view notes."}</p>
          )}
        </div>

        <button 
  onClick={() => setModalOpen(true)} 
  disabled={!user} 
  className="add-note-button"
>
  +
</button>


        {isModalOpen && user && (
          <div className={`modal-overlay ${isModalOpen ? 'show' : ''}`}>
            <div className={`modal-content ${isModalOpen ? 'open' : ''}`}>
              <NoteModal
                closeModal={closeModal}
                addNote={addNote}
                currentNote={currentNote}
                editNote={editNote}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
