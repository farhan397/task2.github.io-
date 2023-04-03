import {useState} from 'react'
import axios from "axios";


// useEffect(() => {
//     const [mydata, setdata] = useState([]);
//     Axios.get(baseURL)
//       .then((Response) => {
//         setdata(Response.data);
//         console.log(mydata);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// const apiUrl = `http://www.omdbapi.com/?s=kabhi&apikey=c2062f5b`;
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY`;

   
export const APIdata=()=>{
  return(
  axios.get(apiUrl)
  .then((Response) => {
    // setdata(Response.data.Search);
    // console.log(mydata);
  })
  .catch((error) => {
    console.log(error);
  })
  );
// console.log(first);
}


  
    // export const APIdatas= [
    //   {
    //     id: 424926,
    //     sol: 1000,
    //     camera: {
    //     id: 22,
    //     name: "MAST",
    //     rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg",
    //     earth_date: "2023-03-20",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424927,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg",
    //     earth_date: "2023-03-20",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2023-03-20",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424927,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg",
    //     earth_date: "2023-03-20",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2023-03-20",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
    //   {
    //     id: 424928,
    //     sol: 1000,
    //     camera: {
    //       id: 22,
    //       name: "MAST",
    //       rover_id: 5,
    //       full_name: "Mast Camera"
    //     },
    //     img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg",
    //     earth_date: "2015-07-30",
    //     rover: {
    //       id: 5,
    //       name: "Curiosity",
    //       landing_date: "2012-08-06",
    //       launch_date: "2011-11-26",
    //       status: "active"
    //     }
    //   },
      
    // ]

