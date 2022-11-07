import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './style.css'
import axios from 'axios'

function Admin() {
    const[booksData, setBooksData] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("edit/"+id)
    }
    
    const DeleteBooks = (id) => {
        if (window.confirm('Apakah anda ingin menghapus?')) {
            axios
                .delete(`https://6362193f7521369cd06490fe.mockapi.io/books/` + id)
                .then((res) => {
                    alert('Buku berhasil dihapus')
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err)
                })

            // fetch('https://6362193f7521369cd06490fe.mockapi.io/books/'+id, {
            //     method: "DELETE"
            // }).then((res)=>{
            //     alert('Buku berhasil dihapus')
            //     window.location.reload();
            // }).catch((err)=>{
            //     console.log(err.message)
            // })
        }
    }

    useEffect(() => {
        axios
            .get(`https://6362193f7521369cd06490fe.mockapi.io/books`)
            .then((res) => {
                setBooksData(res.data);
            })
            .catch((err) =>
            console.log(err));

        // fetch('https://6362193f7521369cd06490fe.mockapi.io/books').then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     setBooksData(resp);
        // }).catch((err) => {
        //     console.log(err.massage);
        // })
    }, [])

    return (
        <div className='background'>
            <Header />
            <div className='container mt-5 mb-5' >
                <div className='card bg-card'>
                    <div className='card-title'>
                        <h2 className='mt-3'>Daftar Buku</h2>
                    </div>
                    <div className='card-body' >
                        <div className='divbtn'>
                            <Link to="create" className='btn btn-success'>Tambah Buku</Link>
                        </div>
                        <table className='table table-bordered'>
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <td>ID</td>
                                    <td>Judul</td>
                                    <td>Pengarang</td>
                                    <td>Penerbit</td>
                                    <td>Tahun Terbit</td>
                                    <td>Kategori</td>
                                    <td>ISBN</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                { booksData &&
                                    booksData.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.judul}</td>
                                            <td>{item.pengarang}</td>
                                            <td>{item.penerbit}</td>
                                            <td>{item.tahun}</td>
                                            <td>{item.kategori}</td>
                                            <td>{item.isbn}</td>
                                            <td>
                                                <button onClick={() => LoadEdit(item.id)} className='btn btn-success'>Edit</button>
                                                <button onClick={() => DeleteBooks(item.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admin
