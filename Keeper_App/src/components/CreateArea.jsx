import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [contentStatus, setContentStatus] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      if (name === "title") {
        return { title: value, content: prevValue.content };
      } else if (name === "content") {
        return { title: prevValue.title, content: value };
      }
    });
  }

  function addNote(event) {
    props.onAdd(newNote);
    setNewNote({ title: "", content: "" });
    event.preventDefault();
  }

  function onClikcHandle() {
    console.log("clicked");
    setContentStatus(true);
    console.log(contentStatus);
  }

  return (
    <div>
      <form className="create-note">
        <Zoom in={true}>
          <input
            hidden={contentStatus === true ? false : true}
            onChange={handelChange}
            name="title"
            placeholder="Title"
            value={newNote.title}
          />
        </Zoom>
        <textarea
          onChange={handelChange}
          onClick={onClikcHandle}
          name="content"
          placeholder="Take a note..."
          rows={contentStatus === true ? 3 : 1}
          value={newNote.content}
        />
        <Zoom in={contentStatus === true ? true : false}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
