import React, { useState } from 'react'
import "../Style/Books.css"
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {
 let[books,setBooks]= useState([])
 let loc=useLocation()
 



  let fetchApi=async()=>{
    let apiData=await fetch('http://localhost:4000/books')
    .then(resp=>resp.json()) //.then((resp)=>{return resp.json()})
    setBooks(apiData)
  }
  fetchApi()
  // console.log(books)
  let navigate=useNavigate()
  let path=loc.pathname.startsWith('/adminportal')
  let readBooks=(id)=>{
    path? navigate(`/adminportal/readbooks/${id}`):navigate(`/userportal/readbooks/${id}`);
   
  }
 
  

  return (
   <>
   <div className="books">
    {
      books.map((elem)=>{
        let{title,authors,categories,pageCount,thumbnailUrl,isbn,status,id}=elem
        let deletebook=()=>{
          let bool=window.confirm(`Do you want to delete ${title} book..?`)
          if(bool)
            {
              fetch(`http://localhost:4000/books/${id}`,{method:"DELETE"})
             alert(`${title} books is deleted`)

            }
            else{
              alert("Book is Not deleted")
            }
          
        }
        let addcart=(id,title,authors,thumbnailUrl)=>{
          let cartobj={
              cardid:id,
              carttitle:title,
              cartauthor:[authors],
              cartimage:thumbnailUrl,

          }
          let duplicate=id.includes(id)
          if(duplicate){
              alert(`${title} already add to cart`)
          }
          else{
              fetch(`http://localhost:4000/cart/${id}`,{
                  method:"POST",
                  headers:{"Content-type":"application/json"},
                  body:JSON.stringify(cartobj)
              })
              alert(`${title} add to cart`)
              navigate('/userportal/cart')
          }

      }
       
        return(
          <>
          <div className="container">
           <div className="img-side">
            <img src={thumbnailUrl} />

           </div>
           <div className="content-side">
            <h4>{title}</h4>
            <div><b>Author:</b> {authors}</div>
            <div><b>Categories: </b>{categories}</div>
            <div><b>RegNo:</b> {isbn}</div>
            <div><b>Publish: </b>{status}</div>
            <div><b>Page Count:</b> {pageCount}</div>
            <div className='btn'>
              <button className='read' onClick={()=>readBooks(id)}>Read Books</button>
              {path?<button className='delete' onClick={deletebook}>Delete</button>:""}
            </div>

           </div>

          </div>
          </>
        )
        
      })
    }

   </div>
   
   </>
  )
}

export default Books
