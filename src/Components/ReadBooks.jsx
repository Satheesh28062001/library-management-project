import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../Style/readbooks.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ReadBooks = () => {
    let params = useParams();
    let bookId = params.id;
    let [book, setBook] = useState({});
    useEffect(() => {
        let fetchBookApi = async () => {
            let url = await fetch(`http://localhost:4000/books/${bookId}`);
            let resp = await url.json();
            setBook(resp);
        };
        fetchBookApi();
    }, [bookId]); // Dependency array should include bookId

    let { id, title, pageCount, thumbnailUrl, shortDescription, longDescription, status, authors, categories } = book;

    let [para, setPara] = useState(true);
    let togglePara = () => {
        setPara(!para);
    };
    let [para1, setPara1] = useState(true);
    let togglePara1 = () => {
        setPara1(!para1);
    };

    let navigate = useNavigate();

    let loc = useLocation();
    let path = loc.pathname.startsWith('/adminportal');
    let previous = () => {
        path ? navigate(`/adminportal/books`) : navigate(`/userportal/books`);
    };

    let addCart = async (id, title, authors, thumbnailUrl) => {
        let cartObj = {
            cartid: id,
            carttitle: title,
            cartauthor: authors,
            cartimage: thumbnailUrl
        };

        // Fetch the current cart to check for duplicates
        let cartData = await fetch('http://localhost:4000/cart').then(resp => resp.json());
        let duplicate = cartData.some(item => item.cartid === id);

        if (duplicate) {
            alert(`${title} already added to cart`);
        } else {
            await fetch(`http://localhost:4000/cart`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(cartObj)
            });
            alert(`${title} added to cart`);
            navigate('/userportal/cart');
        }
    };

    return (
        <>
            <div className="readbooks">
                <div className="container">
                    <div className="img-side">
                        <img src={thumbnailUrl} alt={title} />
                        <div className="title">{title}</div>
                    </div>
                    <div className="content-side">
                        <div className="head">
                            <div className="short" onClick={togglePara}>
                                <b>Short Description</b>
                                {para ? "" : <p>{shortDescription}</p>}
                            </div>
                            <div onClick={togglePara}>{para ? <ExpandMoreIcon /> : <ExpandLessIcon />} </div>
                        </div>

                        <div className="head1" onClick={togglePara1}>
                            <div className="long">
                                <b>Long Description</b>
                                {para1 ? "" : <p>{longDescription}</p>}
                            </div>
                            <div onClick={togglePara1}>{para1 ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
                        </div>

                        <div className="under">
                            {para1 && para ? (
                                <>
                                    <div className="status">
                                        <h4>Status</h4>
                                        <b>{status}</b>
                                    </div>
                                    <div className="authors">
                                        <h4>Authors</h4>
                                        <b>{authors}</b>
                                    </div>
                                    <div className="page">
                                        <h4>Page Count</h4>
                                        <b>{pageCount}</b>
                                    </div>
                                    <div className="cate">
                                        <h4>Categories</h4>
                                        <b>{categories}</b>
                                    </div>
                                </>
                            ) : ""}
                        </div>

                        <button className='back' onClick={previous}>Back</button>
                        {path ? '' : <div className='cart'><button onClick={() => addCart(id, title, authors, thumbnailUrl)}>Add to Cart</button></div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReadBooks;