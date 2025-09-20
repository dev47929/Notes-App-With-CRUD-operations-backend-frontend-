import { useState } from "react"
import Heading from "./components/Heading"
import Note from "./components/note"
import ShowAdd from "./components/showAdd";
import Background from "./components/bg";

function App() {

  const [notes, setNotes] = useState([]);
  const [state, setState] = useState(false);

  return (
    <>
        <Background>
          <ShowAdd
          setNotes = {setNotes}
          state = {state}
          setState = {setState}          
          ></ShowAdd>
          <Heading></ Heading>
          <Note 
            notes = {notes}
            setNotes = {setNotes}
          ></Note>
        </Background>

    </>
  )
}

export default App
