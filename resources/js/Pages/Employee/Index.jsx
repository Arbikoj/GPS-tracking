

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react"

import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';

import Home from "./Index";

// reff : https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler

const UsingFetch = ({auth}) => {
    // add data
    const [post, setPost ] = useState({
        uid:'',
        name:'',
        gender:'',
        birth:''
    })

    
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
        // axios.post('http://127.0.0.1:8000/api/employee', {post},{
        //     headers: {'Content-Type': 'application/json'}
        // })
        // .then(response => console.log(response))
        // .catch(err=> console.log(err))

        // const userData = {
        //     uid: post.uid,
        //     name: post.password
        //   };

        axios.post("http://127.0.0.1:8000/api/employee", {
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


    const [dataku, setUsers] = useState([])
    var no = 1;
    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/employee")
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

    const renderEmployees = () => {
        
    }

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data</h2>}
    >
        <Head title="Data" />

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden p-5 shadow-sm sm:rounded-lg">

                <form onSubmit={handleSubmit}>
                    uid : <input type="text" onChange={handleInput} value={post.uid} name='uid' />
                    name : <input type="text" onChange={handleInput} value={post.name} name='name' />
                    gender : <input type="text" onChange={handleInput} value={post.gender} name='gender' />
                    birth : <input type="text" onChange={handleInput} value={post.birth} name='birth' />
                    <button>submit</button>
                </form>
                {/* <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <InputLabel htmlFor="nama" value="text" />

                    <TextInput
                        type="text"
                        name="uid"
                        className="mt-1 block w-full"
                        onChange={handleInput}
                    />
                        <TextInput
                        type="text"
                        name="name"
                        className="mt-1 block w-full"
                        onChange={handleInput}
                    />
                        <TextInput
                        type="text"
                        name="gender"
                        className="mt-1 block w-full"
                        onChange={handleInput}
                    />
                    <TextInput
                        type="text"
                        name="birth"
                        className="mt-1 block w-full"
                        onChange={handleInput}
                    />
                </div>
                <PrimaryButton >
                        Submit
                    </PrimaryButton>
                </form> */}



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
                    </tr>
                    {dataku.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.uid}</td>
                                <td>{val.name}</td>
                                <td>{val.gender}</td>
                                <td>{val.birth}</td>
                            </tr>
                        )
                        
                    })}
                </table>
    </AuthenticatedLayout>

    );
}

export default UsingFetch