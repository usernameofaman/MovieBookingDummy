import React from "react";
// import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import styles from "./slide.module.css";
import { useRouter } from "next/navigation";

type Movie = {
  url: string;
  name: string;
};

type SliderProps = {
  movies: Movie[];
};

const perPageOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  arrows: false,
  pagination: false,
};

const Slider: React.FC<SliderProps> = ({ movies }) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.nowshowingtext}>
        <h2>Now Showing</h2>
      </div>
      <div style={{display:"flex" , justifyContent:"space-around"}}>
        {/* <Splide className={styles.slidercontainer} options={perPageOptions} aria-label="My Favorite Images"> */}
        {movies.map((movie:Movie) => (
          <div key={movie.url}>
            <div onClick={() => router.push(`/book/${movie.name}`)} className={styles.postercontainer}>
              <div
                className={styles.movieposter}
                style={{
                  background: `url(${movie.url}) no-repeat center/cover`,
                }}
              ></div>
              <div className={styles.moviename}>{movie.name}</div>
            </div>
          </div>
        ))}
        {/* </Splide> */}
      </div>
    </div>
  );
};

export default Slider;
