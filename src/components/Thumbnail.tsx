// Thumbnail.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ThumbnailProps {
  movie: {
    id: number;
    backdrop_path?: string;
    poster_path?: string;
    title?: string;
  };
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
          }`}
        className="rounded-sm object-cover md:rounded"
        alt="movie poster"
        sizes="100%"
        fill
      />
      <div className="absolute bottom-0 left-0 p-4 text-white font-bold text-md md:text-md overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[80%]">
        {movie.title}
      </div>
    </Link>
  );
};

export default Thumbnail;