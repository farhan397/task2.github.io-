import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Home from './components/MovieList/MovieList';
import './App.css'






const App = () => {

    const [searchValue, setSearchValue] = useState('')
    const [name, setName] = useState('')




    const handeSubmit = () => {
        if (name !== '') {
            setSearchValue(name)
            setName('')
        }
        else {

            alert('Enter Movie Name')
        }
    }

    const handel = (e) => {
        let value = e.target.value
        setName(value)
    }

    const handelClear = () => {
        setSearchValue('')
        setSearchValue(name)

    }

    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <div className='maindiv mt-1   p-2 pb-4 '>
                        <Navbar.Brand className='text-white  headfont mt-3'>Search Movies</Navbar.Brand>
                        <div className='fielddiv'> <Form.Control className='headersfild Headerborders '
                            onChange={handel}
                            name='name'
                            value={name} />
                            <button onClick={handeSubmit} className='mt-3 bg-primary Headerborders  headerButton'>Search</button>
                        </div>
                    </div>
                </Container></Navbar>

            <Home searchValue={searchValue} handelClear={handelClear} />


        </>
    )
}

export default App




