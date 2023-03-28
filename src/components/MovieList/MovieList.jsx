import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import PreviewInfo from '../PreviewInfo/PreviewInfo';
import './MovieList.css';

const MovieList = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState('');
  const [pageCount, setPageCount] = useState(0);
  const [movies, setMovies] = useState([]);

  const [show, setShow] = useState(false)


  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };


  const itemsPerPage = 5;

  useEffect(() => {
    getdataByApi();
  }, [props.searchValue]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;  
    if (movies.length) {
      setCurrentItems(movies.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(movies.length / itemsPerPage));
    } else {
      setCurrentItems([]);
      setPageCount(0);
    }
  }, [itemOffset, itemsPerPage, movies]);
  



  const getdataByApi = async () => {
    try {
      const getData = await axios.get(
        `http://www.omdbapi.com/?s=${props.searchValue}&apikey=ebf8799c`
      );

      const viewdata = getData.data;


      if (viewdata && viewdata.Search) {
        setMovies(viewdata.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {

      setMovies([]);
    }
  };

  const SearchValue = (id) => {
    setSearchValue(id)

    setShow(true)
  }
  const handelClear =()=>{
    
    setCurrentItems([])
   props.handelClear()

  }

  const handleClose = () => setShow(false);
  console.log('movie',currentItems)

  return (
    <>
      <PreviewInfo handleClose={handleClose} searchValue={searchValue} show={show} />
      <Container>
      {currentItems.length ? <button className='btn bg-light mb-3 mt-1' onClick={handelClear}>Clear Page</button> : ''}
        <Row lg={4} md={2} sm={2}  className='  pl-5'>
          {currentItems.length ? (
            currentItems?.map((movie) => (
          
        <Col className='card movie-card  mb-4 me-4' style={{ width: '16rem' }}>   
                  {movie.Poster !== 'N/A' ?  <img
                    src={movie?.Poster}
                    className='card-img mt-2'
                    alt={movie.Title}
                  />   : 
                    <h5 className="poster">No Poster Available</h5>}
                  <div className='card-body'>
                    <p className='card-title'> Movie title  </p>
                    <p className='card-text'>{movie.Title}</p>
                  
                    <p className='card-title'> Year of release  </p>
                    <p className='card-text'>{movie.Year}</p>
                    <button className='btnn btn text-white bg-primary ' onClick={() => { SearchValue(movie.imdbID) }}>More Info</button>
                
                </div></Col>  
           
            ))
          ) : (
            <p>No movies found.</p>
          )}

        </Row>
 {currentItems.length ? <ReactPaginate
            breakLabel="..."
            nextLabel="Next Page ⏩"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=" ⏪ Previous Page"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
          /> : null}
         
      </Container>
    </>
  );
};

export default MovieList;
