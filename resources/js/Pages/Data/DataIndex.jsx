

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from "react"


import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';

function modalAdd() {
    <Modal>
        <h1>heheh</h1>
    </Modal>
    }

const UsingFetch = ({auth}) => {
    const [dataku, setUsers] = useState([])

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/data")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data)
        })
    }

    useEffect(() => {
        fetchData()
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

                    
                    <PrimaryButton onClick={modalAdd}>
                        Add Data
                    </PrimaryButton>

                    <div>
                        {dataku.length > 0 && (
                            <ul>
                            {dataku.map(gps => (
                                <li key={gps.id}>{gps.lang}</li>
                            ))}
                            </ul>
                        )}
                        </div>
                                </div>
                            </div>
                    </div>

                    <table>
                    <tr>
                        <th>EM</th>
                        <th>Lang</th>
                        <th>Lat</th>
                        <th>date</th>
                    </tr>
                    {dataku.map((val, key) => {
                    return (
                            <tr key={key}>
                                <td>{val.employees_id}</td>
                                <td>{val.lang}</td>
                                <td>{val.lat}</td>
                                <td>{val.date}</td>
                            </tr>
                        )
                    })}
                </table>
    </AuthenticatedLayout>

    );
}

export default UsingFetch