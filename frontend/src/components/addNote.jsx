import { use, useState } from "react";
const AddNote = ({setNotes , setState}) => {

  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")

  const postNote = async () =>{
      const response = await fetch("http://localhost:3000/api/notes/",{
        method:"POST" , 
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          "noteTitle" : title,
          "noteContent" : content,
        })
      });
      if(response.ok){
        console.log("Request Successfull")
        getNotesData();
      }else{
        console.log("Failed")
      }
      setTitle("");
      setContent("");
      setState(false);
  }


  async function getNotesData() {
  const url = "http://localhost:3000/api/notes/"
  let response = await fetch(url);
  response = await response.json()
  setNotes(response.notes);
  return;
}



  return (
    <div className="absolute inset-0 flex justify-center items-start mt-28 bg-black/30 backdrop-blur-3xl z-10">
      <div className="flex flex-col items-start bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg z-20 w-80 m-3">
        <label htmlFor="note-title" className="text-sm font-medium text-gray-900 dark:text-white">Note Title</label>
        <input
          type="text"
          id="note-title"
          placeholder="Enter title..."
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="note-content" className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Note Content</label>
        <input
          type="text"
          id="note-content"
          placeholder="Enter content..."
          className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          onChange={(e)=>setContent(e.target.value)}
        />

        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={()=>postNote()}>Add Note</button>
      </div>
    </div>
  );
};

export default AddNote;
