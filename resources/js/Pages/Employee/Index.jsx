

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react"

import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import { Button, Modal } from 'react-bootstrap';

import Home from "./Index";

// reff : https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler

const UsingFetch = ({auth}) => {
    // add data
    const baseUrl = 'http://127.0.0.1:8000/';

    const [dataku, setUsers] = useState([])
    const [detail, setDetail] = useState([]);
    const [post, setPost ] = useState({
        id:'',
        uid:'',
        name:'',
        gender:'',
        birth:''
    })

    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleInput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setPost({
            ...post, 
            [name]:value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post(baseUrl+"api/employee", {
        uid: post.uid,
        name: post.name,
        gender: post.gender,
        birth: post.birth
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(function(response) {
        {fetchData()}
        
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    })
}
// ,{
//     headers: {'Content-Type': 'application/json'}
// })
const handleUpdate = updateId => {
    axios.put(baseUrl+`api/employee/${updateId}`, { 
        uid: post.uid,
        name: post.name,
        gender: post.gender,
        birth: post.birth
     }).then(response => {
        console.log(response.data); // Optional: Handle the response
        setPost(response.data);

        {fetchData()}
        // {fetchData()}
      })
      .catch(error => {
        console.error(error);
      });
  };

    const handleDelete = itemId => {
        axios.delete(baseUrl+`api/employee/${itemId}`)
          .then(response => {
            {fetchData()}
          })
          .catch(error => {
            console.error(error);
          });
      };




      const handleDetail = itemId => {
        axios.get(baseUrl+`api/employee/${itemId}`)
        .then(response => {
            console.log(response.data);
            setPost(response.data);
        })
        .catch(error => {
            console.error(error);
          });
    }

    var no = 1;
    const fetchData = () => {
        fetch(baseUrl+"api/employee")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data</h2>}
    >
        <Head title="Data" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden p-5 shadow-sm sm:rounded-lg">
                          <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

                <form >
                    uid : <input type="text" onChange={handleInput} value={post.uid} name='uid' />
                    name : <input type="text" onChange={handleInput} value={post.name} name='name' />
                    gender : <input type="text" onChange={handleInput} value={post.gender} name='gender' />
                    birth : <input type="text" onChange={handleInput} value={post.birth} name='birth' />
                    <button onClick={handleSubmit}>submit</button>
                    <button onClick={()=>handleUpdate(post.id)} className='p-2 bg-emerald-300'>edit</button>
                    <button onSubmit={()=>handleUpdate(post.id)} className='p-2 bg-emerald-300'>editneww</button>

                    {post.id}

                </form>
                </div>
            </div>
                    
                    </div>

                    <table>
                    <tr>
                        <th>No</th>
                        <th>UID</th>
                        <th>Nama</th>
                        <th>Gender</th>
                        <th>Tanggal Lahir</th>
                        <th>Aksi</th>
                    </tr>
                    {dataku.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.uid}</td>
                                <td>{val.name}</td>
                                <td>{val.gender}</td>
                                <td>{val.birth}</td>
                                <td>
                                    <button onClick={()=>handleDelete(val.id)} className='p-2 bg-red-500'>delete</button>
                                    <button onClick={()=>handleUpdate(val.id)} className='p-2 bg-emerald-300'>edit</button>
                                    <button onClick={()=>handleDetail(val.id)} className='p-2 bg-red-500'>detail</button>


                                </td>

                            </tr>
                        )
                        
                    })}

                    
                </table>

                {detail ? (
                        <div>
                            <h1>{detail.id}</h1>
                            <h1>{detail.uid}</h1>
                            <h1>{detail.name}</h1>
                            <h1>{detail.gender}</h1>
                            <h1>{detail.birth}</h1>
                            
                        </div>
                    ):(
                        <p>data kosong</p>
                    )}
    </AuthenticatedLayout>

    );
}

export default UsingFetch



// hari ini

// generate GKO

// uid-datetime-lat-long

// datetime
// lat
// long

// datetime
// lat
// long

// datetime
// lat
// long