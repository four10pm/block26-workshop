import { useEffect, useState } from 'react'

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState({address: {}, company: {}})
    console.log("Contact:", selectedContactId);

    useEffect(() => {
        const fetchSelectedContact = async () => {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
                console.log("data:", data)
                console.log("data.name:", data.name)
                console.log("contact.name:", contact.name)
            }
            catch (error) {
                console.log(error.message)
            }
        }
     
        fetchSelectedContact();
      
    }, [])

    return (
        <div>
            <h2> {contact.name} </h2>
            <p> <strong> Username: </strong> {contact.username} </p>
            <p> <strong> Email: </strong> {contact.email} </p>
            <p> <strong> Phone: </strong> {contact.phone} </p>
            <p> <strong> Address: </strong> {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode} </p>
            <p> <strong> Website: </strong> {contact.website} </p>
            <p> <strong> Company: </strong> {contact.company.name} : {contact.company.catchPhrase} - <em> {contact.company.bs} </em> </p>
        </div>
    )
}