import {useState, useEffect} from "react";
import BookCard from "../books/bookCard";

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





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
        <div className='py-12'>
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

   
      <Swiper
        slidesPerView={1}
        spaceBetween={30}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        navigation = {true}
        className="mySwiper"
      >


          <div>
            {
            filteredBooks.length > 0 && filteredBooks.map((book, index) =>(
                <SwiperSlide   key={index}>
                    <BookCard book={book} />
                </SwiperSlide>))
            }
          </div>
       

      </Swiper>



          
        </div>
    )
}


export default TopSellers