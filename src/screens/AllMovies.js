import React, { useState } from "react";
import { Row, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SingleMovie } from "./SingleMovie";
import { Spinner } from "../components";

export const AllMovies = () => {
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

  return movies ? (
    <>
      <Row gutter={[20, 10]} justify="center">
        {movies
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
          total={movies?.length}
          pageSize={pageSize}
          onChange={(newPage, _) => setPage(newPage)}
          current={page}
        />
      </Row>
    </>
  ) : (
    <Spinner />
  );
};
