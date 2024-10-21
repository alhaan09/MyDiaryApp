document.addEventListener('DOMContentLoaded', function() {
    const diary = document.getElementById('diary');
    const saveButton = document.getElementById('saveButton');
    const notesDiv = document.getElementById('notes');

    // Load saved notes from local storage
    loadNotes();

    // Save the note when the save button is clicked
    saveButton.addEventListener('click', function() {
        const noteContent = diary.value.trim();
        if (noteContent) {
            saveNote(noteContent);
            diary.value = '';
        }
    });

    // Save the note to local storage
    function saveNote(noteContent) {
        const notes = getNotes();
        notes.push(noteContent);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }

    // Get the notes from local storage
    function getNotes() {
        const notes = localStorage.getItem('notes');
        return notes ? JSON.parse(notes) : [];
    }

    // Display the notes on the page
    function displayNotes() {
        const notes = getNotes();
        notesDiv.innerHTML = '';
        notes.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note';
            noteDiv.textContent = note;
            notesDiv.appendChild(noteDiv);
        });
    }

    // Load and display notes when the page is loaded
    function loadNotes() {
        displayNotes();
    }
});
