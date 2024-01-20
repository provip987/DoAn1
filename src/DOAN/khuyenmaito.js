import Banner from "./TrangChu/banner";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';

function Khuyenmailon() {
    const images = [
        '/khuyenmai/anh1.jpg',
        '/khuyenmai/anh2.jpg',
        '/khuyenmai/anh3.jpg',
    ];

    return (
        <>
            {/* Banner component hiện tại */}
            

            {/* Ticker text nằm ngay dưới Banner */}
            <div className="ticker-wrap">
                <div className="ticker-move">
                    <p>Ưu đãi đặc biệt! Giảm giá 50% tất cả các bữa ăn trong dịp Tết này! Đừng bỏ lỡ những ưu đãi hấp dẫn từ chúng tôi !</p>
                </div>
            </div>
            <div>
            {/* Swiper component cho hình ảnh */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                style={{ width: '100%', height: '100%' }}
            >
                {images.map((imageSrc, index) => (
                    <SwiperSlide key={index}>
                        <img src={imageSrc} alt={`Khuyến mãi ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    );
}

export default Khuyenmailon;