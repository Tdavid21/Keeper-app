import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addCard(newNote) {
    setAllNotes((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    console.log("clicked");
    setAllNotes((prevItems) => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addCard} />
      {allNotes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onChecked={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
