import React, { useState } from "react";
import { Row, Pagination, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SingleMovie } from "./SingleMovie";

export const MyMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movieState.movies);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const toggleFavorite = (movieID, status) => {
    const modifiedList = movies.map((movie) => {
      if (movie.id === movieID) {
        return {
          ...movie,
          favortie: !status,
        };
      }
      return movie;
    });

    dispatch({
      type: "SET_MOVIES",
      payload: modifiedList,
    });
  };

  const getMoviesCount = () => {
    return movies?.filter((movie) => movie.favortie).length;
  };

  return getMoviesCount() > 0 ? (
    <>
      <Row gutter={[20, 10]} justify="center">
        {movies
          .filter((movie) => movie.favortie)
          .slice(pageSize * page - pageSize, pageSize * page)
          .map((movie) => (
            <SingleMovie
              key={movie.id}
              movie={movie}
              toggleFavorite={toggleFavorite}
            />
          ))}
      </Row>
      <Row justify="end">
        <Pagination
          style={{ marginTop: "20px" }}
          total={getMoviesCount()}
          pageSize={pageSize}
          onChange={(newPage, _) => setPage(newPage)}
          current={page}
        />
      </Row>
    </>
  ) : (
    <Empty />
  );
};
