import React from "react";
import { Button, Card, Col, Image } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export const SingleMovie = ({ movie, toggleFavorite }) => {
  const { Meta } = Card;

  return (
    <Col xl={6} lg={6} md={8} sm={12}>
      <Card
        hoverable
        style={{ height: "100%" }}
        cover={
          <Image
            alt={`${movie.title} - movie poster`}
            src={`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`}
            height={"300px"}
            fallback={`${process.env.PUBLIC_URL}/logo.png`}
          />
        }
      >
        <Meta
          title={movie.title}
          description={
            <>
              <div>Release Date: {movie.release_date}</div>
              <div>Rating: {movie.vote_average}</div>
              <Button onClick={() => toggleFavorite(movie.id, movie.favortie)}>
                {!movie.favortie ? (
                  <span>
                    Add to favorties <StarOutlined />
                  </span>
                ) : (
                  <span>
                    Remove from favortie <StarFilled />
                  </span>
                )}
              </Button>
            </>
          }
        />
      </Card>
    </Col>
  );
};
