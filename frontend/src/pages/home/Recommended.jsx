import {useState, useEffect} from "react";
import BookCard from "../books/bookCard";

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Recommended = () =>{

    const[books, setBooks] = useState([])
    const[selectedCategory, setSelectedCategory] = useState("Choose a genre")

    useEffect(()=>{
        fetch("books.json")
        .then(res=> res.json())
         .then((data)=>setBooks(data))
    }, [])

   
    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6 pb-0'>Recommended For You</h2> 

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


                <div className="pt-0">
                    {
                    books.length > 0 && books.slice(8, 18).map((book, index) =>(
                        <SwiperSlide   key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>))
                    }
                </div>
            

            </Swiper>
     
        </div>
    )

}


export default Recommended 