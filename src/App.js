// import logo from './logo.svg';
import './App.css'
import contacts from './contacts.json'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const firstFive = contacts.slice(0, 5)

function App() {
  const [actualContacts, setActualContacts] = useState(firstFive)
  // Contacto aleatorio
  const addContact = () => {
    const randomNumber = Math.random() * contacts.length
    const randomPos = Math.floor(randomNumber)
    const randomContact = contacts[randomPos]
    console.log(randomContact)

    // Mostrar Contacto en la lista
    const contactClone = [...actualContacts]

    contactClone.unshift(randomContact)
    setActualContacts(contactClone)
  }

  // Ordenar Contactos por nombre
  const sortByName = () => {
    const sortContact = [...actualContacts]

    sortContact.sort((elemen2, elemen1) => {
      return elemen2.name.localeCompare(elemen1.name)
    })
    setActualContacts(sortContact)
  }

  // Ordenar Contactos por popularidad

  const sortByPopularity = () => {
    const sortContact = [...actualContacts]

    sortContact.sort((elemen2, elemen1) => {
      return elemen1.popularity - elemen2.popularity
    })
    setActualContacts(sortContact)
  }

  // Remover contactos
  const deleteContact = (borrarId) => {
    const filteredArr = actualContacts.filter((eachElement) => {
      if (eachElement.id === borrarId) {
        return false
      } else {
        return true
      }
    })
    setActualContacts(filteredArr)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <ButtonGroup>
        <Button variant="secondary" onClick={addContact}>
          Add Random Contact
        </Button>
        <Button variant="secondary" onClick={sortByPopularity}>Sort by Popularity</Button>
        <Button variant="secondary" onClick={sortByName}>Sort by Name</Button>
      </ButtonGroup>
      <Table striped bordered hover variant="dark" responsive="sm" >
        <tbody>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Poupularity</h2>
            </th>
            <th>
              <h2>Won Oscar</h2>
            </th>
            <th>
              <h2>Won Emmy</h2>
            </th>
            <th>
              <h2>Action</h2>
            </th>
          </tr>
          {actualContacts.map((eachElement) => {
            return (
              <tr key={eachElement.id}>
                <td>
                  <img src={eachElement.pictureUrl} alt="" width={'150px'} />
                </td>
                <td>{eachElement.name} </td>

                <td>{eachElement.popularity.toFixed(2)}</td>
                <td>
                  <span> {eachElement.wonOscar === true ? '🏆' : null} </span>
                </td>
                <td>
                  <span> {eachElement.wonEmmy === true ? '🌟' : null} </span>
                </td>
                <td>
                  <Button onClick={() => deleteContact(eachElement.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default App
