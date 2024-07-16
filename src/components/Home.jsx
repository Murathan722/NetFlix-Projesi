import React from "react";
import styled from "styled-components";

// Video Oynatıcı Bileşeni
const VideoPlayer = styled.div`
  width: 100%;
  height: 400px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoTitle = styled.h2`
  font-size: 24px;
`;

// Film Kartı Bileşeni
const MovieCard = styled.div`
  width: 150px;
  height: 250px;
  background-color: #f9f9f9;
  margin: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  text-align: center;
`;

// Film Listesi Bileşeni
const MovieListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Ana Home Bileşeni
const Home = () => {
  // Netflix benzeri bir film listesi
  const movies = [
    { title: "Film 1" },
    { title: "Film 2" },
    { title: "Film 3" },
    { title: "Film 4" },
    { title: "Film 5" },
    { title: "Film 6" },
  ];

  return (
    <div>
      {/* Video oynatıcı */}
      <VideoPlayer>
        <VideoTitle>Video Oynatıcı</VideoTitle>
      </VideoPlayer>

      {/* Film listesi */}
      <MovieListContainer>
        {movies.map((movie, index) => (
          <MovieCard key={index}>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        ))}
      </MovieListContainer>
    </div>
  );
};

export default Home;
