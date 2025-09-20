import { useState } from "react";
import AddNote from "./addNote";

const ShowAdd = ({setState , setNotes , state}) => {

  return (<>
    <div className="flex justify-center md:justify-start mt-4 md:mx-7 absolute">
      <button type="button" class="absolute my-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 " onClick={() => { setState(true) }}>Add Note</button>
    </div>
    {state && <AddNote
      setState={setState}
      setNotes={setNotes}
    ></AddNote>}

  </>)
}
export default ShowAdd;