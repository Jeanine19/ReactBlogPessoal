// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/34/77/0f/34770f9aa414259a5cfee6eb174aecc1.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/14/2f/1c/142f1c63598a9f06e3ddefd0e4ea5c17.jpg" alt="Imagem" />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/34/77/0f/34770f9aa414259a5cfee6eb174aecc1.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/96/71/1c/96711c9e5322678a91b1fdbb93b67c97.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.pinimg.com/564x/f7/3b/81/f73b81e425600b3c7f04768f16386db1.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel