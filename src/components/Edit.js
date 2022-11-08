import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Header from '../navbar/Header'
import Footer from '../navbar/Footer'
import axios from 'axios';
import swal from 'sweetalert'

function Edit() {
  const { bookid } = useParams();
  const [id, setId] = useState("");
  const [judul, setJudul] = useState("");
  const [penerbit, setPenerbit] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [tahun, setTahun] = useState("");
  const [isbn, setISBN] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const booksData = { id, judul, pengarang, penerbit, tahun, isbn, keterangan, kategori };
    axios
      .put(`https://6362193f7521369cd06490fe.mockapi.io/books/` + bookid, booksData)
      .then((res) => {
        swal("Berhasil!", "Buku berhasil diedit!", "success");
        // alert('Buku berhasil diedit')
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err)
      })

    // fetch('https://6362193f7521369cd06490fe.mockapi.io/books/' + bookid, {
    //   method: "PUT",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(booksData)
    // }).then((res) => {
    //   alert('Buku berhasil diedit')
    //   navigate('/books')
    // }).catch((err) => {
    //   console.log(err.message)
    // })
  }

  useEffect(() => {
    axios
      .get(`https://6362193f7521369cd06490fe.mockapi.io/books/` + bookid)
      .then((res) => {
        setId(res.data.id);
        setJudul(res.data.judul);
        setPengarang(res.data.pengarang);
        setPenerbit(res.data.penerbit);
        setTahun(res.data.tahun);
        setISBN(res.data.isbn);
        setKategori(res.data.kategori);
        setKeterangan(res.data.keterangan);
      })
      .catch((err) =>
        console.log(err));


    // fetch('https://6362193f7521369cd06490fe.mockapi.io/books/' + bookid).then((res) => {
    //   return res.json();
    // }).then((resp) => {
    //   setId(resp.id);
    //   setJudul(resp.judul);
    //   setPengarang(resp.pengarang);
    //   setPenerbit(resp.penerbit);
    //   setTahun(resp.tahun);
    //   setISBN(resp.isbn);
    //   setKategori(resp.kategori);
    //   setKeterangan(resp.keterangan);
    // }).catch((err) => {
    //   console.log(err.massage);
    // })
  }, [])

  return (
    <div className='background'>
      <Header />
      <div className='row mt-5 mb-5'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card'>
              <div className='card-title'>
                <h2 className='mt-3'>Edit Buku</h2>
              </div>
              <div className='card-body' style={{ "textAlign": "left" }}>
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label>ID</label>
                    <input className='form-control' value={id} disabled="disabled" />
                  </div>
                  <div className='form-group'>
                    <label>Judul</label>
                    <input className='form-control' required value={judul} onChange={e => setJudul(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label>Pengarang</label>
                    <input className='form-control' required value={pengarang} onChange={e => setPengarang(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label>Penerbit</label>
                    <input className='form-control' required value={penerbit} onChange={e => setPenerbit(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label>Tahun Terbit</label>
                    <input className='form-control' required value={tahun} onChange={e => setTahun(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label>ISBN</label>
                    <input className='form-control' required value={isbn} onChange={e => setISBN(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <label>Kategori</label>
                    <select className='form-select' required type="text" value={kategori} onChange={e => setKategori(e.target.value)}>
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
                  </div>
                  <div className='form-group'>
                    <label>Keterangan</label>
                    <textarea className='form-control' required value={keterangan} onChange={e => setKeterangan(e.target.value)} />
                  </div>
                  <div className='form-group'>
                    <button className='btn btn-success' type='submit'>Simpan</button>
                    <Link to='/admin' className='btn btn-danger'>Kembali</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Edit
