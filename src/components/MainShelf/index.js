import { Swiper, SwiperSlide } from 'swiper/react';
import { Products } from "../Products/index"
import shelfBanner from "../../assets/shelfBanner.png"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./index.scss"


export const MainShelf = () => {
    return (
        <section className="avanti__shelf">
            <h1 className="shelf__title">Promoção do dia</h1>
            <article className="shelf-container">
                <div className="shelf__banner">
                    <img src={shelfBanner} alt="Banner da Vitrine" />
                </div>

                <Swiper
                    spaceBetween={500}
                    slidesPerView={2}
                    breakpoints={{
                        425: {
                            width: 425,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
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
