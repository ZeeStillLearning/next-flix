// MovieCard.tsx

import React from 'react';
import Link from 'next/link';

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
}

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <Link href={`/movie/${movie.id}`}
        className={`relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out  md:h-36 md:min-w-[260px] md:hover:scale-105`}
        >
          <img
            className="rounded-xl"
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt=""
          />
        </Link>
      ) : (
        <div className="movie-placeholder">No Image Found :(</div>
      )}
      <h1 className='font-bold md:2xl:' style={{ paddingTop: '10px', color: '#B1FBF4' }}>
        {movie.title}
      </h1>
    </div>
  );
};

export default MovieCard;
