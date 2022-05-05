import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ReviewsShows.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ReviewsContainer = () => {
  const [review, setReview] = useState([]);

  React.useEffect(() => {
    fetch("https://afternoon-sierra-16943.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log("from show reviews",review);
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {review.map((data,index)=>(
          <SwiperSlide><div className="review_div" key={index}>
            <p>{data.review}</p>
            </div></SwiperSlide>
        ))}
        
        
      </Swiper>
    </div>
  );
};

export default ReviewsContainer;
