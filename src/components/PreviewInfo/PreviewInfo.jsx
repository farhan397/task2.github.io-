
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import './PreviewInfo.css';


import Draggable from 'react-draggable';

const DragableModal = (props) => {
  const { children } = props;

  return (
    <Draggable handle=".modal-header">
      <div className="modal-dialog lg">
        <div className="modal-content">{children}</div>
      </div>
    </Draggable>
  );
};



const PreviewInfo = (props) => {
  
const [data ,setData]=useState('')
    const [information, setInformation] = useState([])
    console.log(props)
   
    useEffect(() => {
        getdataByApi();
    }, [props.searchValue]);

    const getdataByApi = async () => {
        try {
            const getData = await axios.get(
                ` http://www.omdbapi.com/?i=${props.searchValue}&plot=full&apikey=ebf8799c`
            );

            const viewdata = getData.data;


            if (viewdata) {
                setInformation(viewdata);
            } else {
                setInformation([]);
            }
        } catch (err) {

            setInformation([]);
        }
    };

    const handelClose = () => {
   
       
        props.handleClose()
    }


    return (

        <Modal  show={props.show} onHide={handelClose} dialogAs={DragableModal} >
          {information ? (
  <Container>
    <Modal.Header closeButton>
      <h5>Movie Information</h5>
    </Modal.Header>
    <Modal.Body>
      {information.Poster !== 'N/A' ? (
        <img
          src={information?.Poster}
          className="modalimage"
          alt={information?.Title}
        />
      ) : (
        <h5 className="poster">No Poster Available</h5>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Container>
        <span className="card-title">Movie Title:</span>
        <span className="card-text">{information?.Title}</span>
        <br />
        <span className="card-title">Movie Duration:</span>
        <span className="card-text">{information?.Runtime}</span>
        <br />
        <span className="card-title">Movie Genre:</span>
        <span className="card-text">{information?.Genre}</span>
        <br />
        <span className="card-title">Movie Rating:</span>
        {information?.Ratings && information.Ratings[0] && (
          <span className="card-text">{information.Ratings[0].Value}</span>
        )}
      </Container>
    </Modal.Footer>
  </Container>
) : (
  <div >Loading...</div>
)}

        </Modal>

    );
}

export default PreviewInfo;