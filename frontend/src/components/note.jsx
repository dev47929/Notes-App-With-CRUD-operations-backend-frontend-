import { useState, useEffect } from "react";

async function getNotesData() {
  const url = "http://localhost:3000/api/notes/"
  let response = await fetch(url);
  response = await response.json()
  return response.notes;
}


const Note = ({ notes, setNotes }) => {
  useEffect(() => {
    async function fetchNotes() {
      const data = await getNotesData();
      setNotes(data);
    }
    fetchNotes();
  }, [setNotes]);

  const url = "http://localhost:3000/api/notes/"
  const deleteNote = async (id) => {
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.ok) {
      console.log("Request Successfull")
      setNotes((notes) => notes.filter((note) => note._id !== id));
    } else {
      console.log("Failed")
    }
  }

  return <>
    <hr className="mt-10" />
    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-3 md:justify-center items-center">
      <div className="bg-gray-900 zd:m-5 m-2 flex flex-col p-6 md:w-3/10 w-4/5  rounded-2xl ">
        <h1 className="text-white font-bold text-center">This is a Sample Note</h1>
        <p className="font-light m-3">Sample Note Content , You cannot delete this note!</p>
        <div className="flex flex-row justify-start">
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-2/5 text-center " onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      </div>
      <div className="bg-gray-900 zd:m-5 m-2 flex flex-col p-6 md:w-3/10 w-4/5  rounded-2xl ">
        <h1 className="text-white font-bold text-center">This is a Sample Note</h1>
        <p className="font-light m-3">Sample Note Content , You cannot delete this note!</p>
        <div className="flex flex-row justify-start">
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-2/5 text-center " onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      </div>
      <div className="bg-gray-900 zd:m-5 m-2 flex flex-col p-6 md:w-3/10 w-4/5  rounded-2xl ">
        <h1 className="text-white font-bold text-center">This is a Sample Note</h1>
        <p className="font-light m-3">Sample Note Content , You cannot delete this note!</p>
        <div className="flex flex-row justify-start">
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-2/5 text-center " onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      </div>

      {
        notes.map((note) => {
          return (
            <div key={note._id} className="bg-gray-900 zd:m-5 m-2 flex flex-col p-6 md:w-3/10 w-4/5  rounded-2xl ">
              <h1 className="text-white font-bold text-center">{note.noteTitle}</h1>
              <p className="font-light m-3">{note.noteContent}</p>
              <div className="flex flex-row justify-start">
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-2/5 text-center " onClick={() => deleteNote(note._id)}>Delete</button>
              </div>
            </div>
          )
        }
        )
      }
    </div>
  </>
}

export default Note;
export { getNotesData };