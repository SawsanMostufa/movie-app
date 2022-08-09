import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
const base_url = "https://image.tmdb.org/t/p/original";
const MovieDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=828c444f9dd5790fffec9a27d24db4be`
      )
      .then((res) => {
        setProduct(res.data);
      });
  }, [params.id]);

  return (
    <Fragment>
      <div className="main">
        <div className="image">
          <img
            src={`${base_url}${product.poster_path}`}
            alt={product.original_title}
          />
        </div>
        <div className="afterImage">
          <h3>{product.original_title}</h3>
          <p>{product.overview}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
