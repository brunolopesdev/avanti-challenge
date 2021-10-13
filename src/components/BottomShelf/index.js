import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import DataContext from "../../Context";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./index.scss"
import { Products } from "../Products";


export const BottomShelf = () => {

    return (
        <section className="avanti__shelf">
            <h1 className="shelf__title">Os mais vendidos</h1>
            <article className="shelf-container">
                <Swiper
                    spaceBetween={500}
                    slidesPerView={4}
                    breakpoints={{
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        425: {
                            width: 425,
                            slidesPerView: 1,
                        },
                        375: {
                            width: 375,
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Products />
                    </SwiperSlide>
                </Swiper>
            </article>
        </section>
    )
}
