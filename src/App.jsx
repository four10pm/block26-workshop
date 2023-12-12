import { useState } from 'react'
import ContactList from './components/contactlist.jsx'
import './App.css'
import ContactRow from './components/contactrow.jsx';
import SelectedContact from './components/selectedcontact.jsx';

function App(contact) {
  const [selectedContactId, setSelectedContactId] = useState(null);
  console.log(selectedContactId);

  const display = () => {
    return selectedContactId ?
      <div>
        <SelectedContact selectedContactId={selectedContactId} />
        <button onClick={() => { setSelectedContactId(null)}}> See List </button>
      </div>
      : <ContactList setSelectedContactId={setSelectedContactId} />
  }

  return (
    <>
      <div>
        {display()}
      </div>
    </>
  )
}

export default App
