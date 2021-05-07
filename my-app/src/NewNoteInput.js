import React, { useState } from 'react';

const NewNoteInput = ({ addNote }) => {

const [note,setNote] = useState('');

const updateNote = (e) => {
    setNote(e.target.value);
};

const onAddNoteClick = () => {
    addNote(note);
    setNote('');
};

    return (
        <div>
            <input
                onChange={updateNote}
                value={note}
                type="text"
                name="note"
                placeholder="Note"
            />
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    );
};

export default NewNoteInput;


