import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NewNoteInput from './NewNoteInput';
import { addNote } from "./actions";
import { saveNotes, loadNotes } from './notesReducer';

import './App.css';

const App = () => {

  const notes = useSelector(state => state.notes);

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes());
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };


  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>
        })}
      </ul>
      <hr/>
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </>
  );
};

export default App;
