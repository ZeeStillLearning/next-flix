"use client"

import React, { useState, useEffect, useRef } from 'react';
import TvSeriesCard from '@/components/Trending';
import axios from 'axios';
import Navbar from '@/components/Navbar';

interface ITvSeries {
    id: number;
    poster_path: string;
    name: string;
}

interface TvSeriesCardProps {
    tv: ITvSeries;
  }

const series = () => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const [tvSeries, setTvSeries] = useState<ITvSeries[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState<string>('');


    const fetchTvSeries = async (searchKey: string) => {
        setIsSearching(!!searchKey);
        const type = searchKey ? 'search' : 'discover';
        try {
            const response = await axios.get(`${API_URL}/${type}/tv`, {
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    query: searchKey,
                },
            });
            setTvSeries(response.data.results);
        } catch (error) {
            console.error('Error fetching TV series:', error);
        }
    };

    useEffect(() => {
        fetchTvSeries('');
    }, []);

    const searchTvSeries = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchTvSeries(searchKey);
      };

      const renderTvSeries = () =>
      tvSeries.map((tv) => <TvSeriesCard key={tv.id} tv={tv} />);

    return (
        <div>      
        <Navbar searchMovies={searchTvSeries} setSearchKey={setSearchKey} />
        <div className="container-movie max-center">{renderTvSeries()}</div>
        </div>
    )
}

export default series;