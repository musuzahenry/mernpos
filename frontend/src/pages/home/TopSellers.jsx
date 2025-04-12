import {useState, useEffect} from "react";
import BookCard from "../books/bookCard";



const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]


const TopSellers = () =>{

    const[books, setBooks] = useState([])
    const[selectedCategory, setSelectedCategory] = useState("Choose a genre")

    useEffect(()=>{
        fetch("books.json")
        .then(res=> res.json())
         .then((data)=>setBooks(data))
    }, [])

const filteredBooks = selectedCategory === "Choose a genre" ? books : books
                                            .filter(book => book.category === selectedCategory.toLowerCase())

console.log(filteredBooks)                                           

    return (
        <div className='py-10'>
          <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
          <div className="mb-8 flex items-center">
            <select 
            onChange ={(e) => setSelectedCategory(e.target.value)}
            name="category" id="category" className="border border-grey-300 bg-[#EAEAEA] rounded-md focus:outline-none">
                {
                    categories.map((category, index)=>(
                        <option key={index} value={category}>{category}</option>)
                    )
                }
                
            </select>
          </div>


          <div>
            {filteredBooks.map((book, index) =>(
             <BookCard key={index} book={book} />
            ))}
          </div>
          
        </div>
    )
}


export default TopSellers