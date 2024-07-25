import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import emptycart from '../Images/Empty_Shopping_Cart_blog.webp'
import "../Style/cart.css"

const Cart = () => {
    
        let[cart,setCart]=useState([])
        let navigate=useNavigate()
        useEffect(()=>{
            let fetchApi= async()=>{
                let apiData= await fetch(`http://localhost:4000/cart`)
                .then(resp=>resp.json())
                setCart(apiData)
            }
            fetchApi()

        },[cart])
    
    let viewButton=(id)=>{
        navigate(`/userportal/readbooks/${id}`)
    }
    let visitBooks=()=>{
        navigate(`/userportal/books`)
    }
    let deleteCart=(id,cartid,carttitle)=>{
        fetch(`http://localhost:4000/cart/${id}`,
            {method:"DELETE"}
        )
        alert(`${carttitle} removed from cart`)
    }







 if(cart.length!==0)
    {
        return (
            <>
            <div className="carddata">
                <div className="header">My Cart</div>
                <table border={5} >
                    <thead>
                        <tr>
                        <th>No.Of.Items</th>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th >View Cart</th>
                        <th>Delete Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((elem,index)=>{
                                let{id,cartid,carttitle,cartauthor,cartimage}=elem
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{cartid}</td>
                                        <td>{carttitle}</td>
                                        <td><img src={cartimage} alt="Something went wrong...!"/></td>
                                        <td>{cartauthor}</td>
                                        <td ><button className='viewcart' onClick={()=>viewButton(cartid)} >View Cart</button></td>
                                        <td ><button className='removecart' onClick={()=>deleteCart(id,cartid.carttitle) } >Delete Card</button></td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
            
            </>
          )
    }
    else{
        return(
            <>
            <div className="cartcontainer">
                <div className="cartdisplay"><img src={emptycart} alt="" /></div>
                <div className="cartnavbutton"><button onClick={visitBooks}>Visit Books</button></div>
            </div>
            </>
        )
    }
}

export default Cart
 
