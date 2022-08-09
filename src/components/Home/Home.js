/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
const base_url = "https://image.tmdb.org/t/p/original";
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=828c444f9dd5790fffec9a27d24db4be"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);
  // useEffect(() => {
  //     const getComments=async()=>{
  //       const res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=828c444f9dd5790fffec9a27d24db4be");
  //       const data=await res.json();
  //       setMovies(data.results)
  //     };
  //     getComments();

  // }, []);

  const fetchMovies = async (currentPage) => {
    // eslint-disable-next-line no-template-curly-in-string
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=828c444f9dd5790fffec9a27d24db4be&page=${currentPage}`
    );
    const data = await res.json();
    return data.results;
  };
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const moviesFormServer = await fetchMovies(currentPage);
    setMovies(moviesFormServer);
  };

  const HomeMovies = movies.map((movie) => {
    return (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-12 cards__item"
        key={movie.id}
      >
        <Link className="cards__item__link" to={`/details/${movie.id}`}>
          <figure className="cards__item__pic-wrap">
            <img
              className="cards__item__img"
              alt={movie.original_title}
              src={`${base_url}${movie.poster_path}`}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{movie.original_title}</h5>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="container-fluid">
      <h1>NetFlex Original</h1>
      <div className="row">{HomeMovies}</div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={20}
        marginPagesDisplayed={4}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Home;
