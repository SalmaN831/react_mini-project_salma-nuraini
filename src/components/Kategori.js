import React, { useEffect, useState } from 'react'
import Header from '../navbar/Header'
import Footer from '../navbar/Footer'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

function Kategori() {
    const [booksData, setBooksData] = useState(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios
            .get(`https://6362193f7521369cd06490fe.mockapi.io/books`)
            .then((res) => {
                setBooksData(res.data);
            })
            .catch((err) =>
            console.log(err));
    }, [])

    return (
        <div>
            <Header />
            <div className='background'>
                <div className='center p-5'>
                    <select required type="text" className='form-select search' value={search} onChange={e => setSearch(e.target.value)}>
                        <option>Pilih kategori buku</option>
                        <option value="Novel">Novel</option>
                        <option value="Bisnis dan Ekonomi">Bisnis dan Ekonomi</option>
                        <option value="Komputer dan Teknologi">Komputer dan Teknologi</option>
                        <option value="Agama dan Spiritual">Agama dan Spiritual</option>
                        <option value="Anak-anak">Anak-anak</option>
                        <option value="Psikologi">Psikologi</option>
                        <option value="Kamus">Kamus</option>
                        <option value="Buku Sekolah">Buku Sekolah</option>
                    </select>
                    <ul className='mt-3 d-flex justify-content-start flex-wrap'>
                        {booksData && booksData.filter((item) => {
                            if (search === "") {
                                return item
                            } else if (item.kategori.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        }).map(item =>
                            <Card style={{ width: '18rem', margin: '3px', textAlign: 'left' }}>
                                <Card.Body className='d-flex flex-row justify-content-between' style={{ color: "rgb(54, 39, 6)" }}>
                                    <div>
                                        <Card.Title>{item.judul}</Card.Title>
                                        <Card.Text>{item.pengarang}</Card.Text>
                                    </div>
                                    <Link to={'./detail/' + item.id} className='detail-icon'><FaSearch size={25} /></Link>
                                </Card.Body>
                            </Card>
                        )}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Kategori
