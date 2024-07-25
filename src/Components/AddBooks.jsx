import React, { useRef, useState } from 'react'
import "../Style/addbooks.css"


const AddBooks = () => {
  let bookTitle=useRef()
  let bookImg=useRef()
  let bookAuthor=useRef()
  let bookCat=useRef()
  let bookReg=useRef()
  let bookStatus=useRef()
  let bookPage=useRef()
  let bookLong=useRef()
  let bookShort=useRef()
  let[bool,setBool]=useState(true)


  

  

  

  let handleSubmit=(e)=>{
    e.preventDefault()
    let newBook={
      title:bookTitle.current.value,
      thumbnailUrl:bookImg.current.value,
      authors:[bookAuthor.current.value],
      categories:[bookCat.current.value],
      isbn:bookReg.current.value,
      status:bookStatus.current.value,
      pageCount:bookPage.current.value,
      longDescription:bookLong.current.value,
      shortDescription:bookShort.current.value



      
    }



   fetch(`http://localhost:4000/books`,{
    method:"POST", 
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(newBook)
   })
  }

  return (
    <>
    <div className="addbooks">
      <form onSubmit={handleSubmit}>
        <input ref={bookTitle} type="text" placeholder='Enter Book name' />
        <input ref={bookImg} type="text" placeholder='Enter img Path'/>
        <input ref={bookAuthor} type="text" placeholder='Enter Author Name'/>
        <input ref={bookCat} type="text" placeholder='Enter Book Categeries' />
        <input ref={bookReg} type="text" placeholder='Enter Book Register number'/>
        <input ref={bookStatus} type="text" placeholder='Enter Book Status'/>
        <input ref={bookPage} type="text" placeholder='Enter Book Page Count' />
        <input ref={bookLong} type="text" placeholder='Enter Long description'/>
        <input ref={bookShort} type="text"  placeholder='Enter Short Description'/>

        <button className='add-btn'>Add Books</button>
      </form>
    </div>
    </>
  )
}

export default AddBooks
