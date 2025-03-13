// src/components/Home.jsx

import React from "react";
import BookCard from "../components/BookCard";
import books from "../booksData";
import "./Home.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";
const Home = () => {
 const Navigate = useNavigate()

  return (
    <div className="home-container" style={{textAlign:'center'}}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <h1 >Book Library</h1>
        <button style={{justifySelf:'flex-end'}} onClick={()=>Navigate('/addBook')} > add book</button>
        </div>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
    );
    
};

export default Home;
