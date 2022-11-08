import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';

function Detail() {
  const {bookid} = useParams();
  const[booksData, setBooksData] = useState({});

  useEffect(() => {
    axios
      .get(`https://6362193f7521369cd06490fe.mockapi.io/books/` + bookid)
      .then((res) => {
        setBooksData(res.data);
      })
      .catch((err) => {
        console.log(err)
      })

    // fetch('https://6362193f7521369cd06490fe.mockapi.io/books/'+bookid).then((res) => {
    //     return res.json();
    // }).then((resp) => {
    //     setBooksData(resp);
    // }).catch((err) => {
    //     console.log(err.massage);
    // })
  })

  return (
    <div className='background'>
    <Header />
      <div className='card m-5' style={{"textAlign" : "left"}}>
        <div className='card-title m-3'>
          <h2>{booksData.judul}</h2>
          <h5>{booksData.pengarang}</h5>
        </div>
        <div className='card-body'>
          {booksData &&
            <div>
              <p>{booksData.keterangan}</p>
              <p>Penerbit : {booksData.penerbit}</p>
              <p>Tahun Terbit : {booksData.tahun}</p>
              <p>ISBN: {booksData.isbn}</p>
              <p>Kategori: {booksData.kategori}</p>
              <Link to='/' className="btn btn-danger">Kembali</Link>
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Detail
