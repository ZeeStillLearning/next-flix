// TvSeries.tsx
import React from 'react';
import Link from 'next/link';

interface ITvSeries {
  id: number;
  poster_path: string;
  name: string;
}

interface TvSeriesProps {
  tv: ITvSeries;
}


const TvSeriesCard: React.FC<TvSeriesProps> = ({ tv }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="tv-series-card">
      {tv.poster_path ? (
        <Link href={`/tv/${tv.id}`} className={`relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out  md:h-36 md:min-w-[260px] md:hover:scale-105`}>
          <img
            className="rounded-xl"
            src={`${IMAGE_PATH}${tv.poster_path}`}
            alt=""
          />
        </Link>
      ) : (
        <div className="tv-series-placeholder">No Image Found :(</div>
      )}
      <h1 className='font-bold md:2xl:' style={{ paddingTop: '10px', color: '#B1FBF4' }}>
        {tv.name}
      </h1>
    </div>
  );
};

export default TvSeriesCard;
