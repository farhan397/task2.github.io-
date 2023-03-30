import React,{useState} from 'react'
// import { motion} from "framer-motion";
// import { BiMessageSquareX} from "react-icons/bi";
import "./Card.css"


const Card = ({item}) => {
    const [expanded, setExpanded] = useState(false);
  // const img=  props.img_src;

    
  return (
   <>
      {/* {expanded ? (
        
         <ExpandedCard param={item} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={item} setExpanded={() => setExpanded(true)} />
      )} */}

<CompactCard param={item} setExpanded={() => setExpanded(true)} />
   
   </>
  )
}
const getDatafromLS=()=>{
  const data = localStorage.getItem('saveinfos');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
function CompactCard({ param, setExpanded }) {
  const [saveinfo, setsaveinfo] = useState(getDatafromLS);
  const [namerover, setnamerover] = useState("");
  const [dateearth, setdateearth] = useState("");
  const [count, setcount] = useState(0);
  const [status, setstatus] = useState(count);
  
  
    return (
        <>
        <div className="fullcard"> 
      <div
         className="CompactCard"
        style={{
          position:'relative'

        }} >
       
         <img src={param.image} alt="Imgcard"/>   
          <div className="radialbar"
          style={{
            position:'absolute'
  
          }}
          >
            <div className="roverclass">
            <span>${param.title}</span>
          </div>
         
          
          
          </div>
          
          
        </div>
        <div>
          <button 
          //  onClick={savebtnclick}
          style={{
            width:'150px',
            height:'30px',
            backgroundColor:'rgb(73, 214, 160)'
          }}>Save </button>
          </div>
          </div>

      </>
    );
  }
  // function ExpandedCard({ param, setExpanded }) {
    

  //     return(

  //       <div
  //     className="ExpandedCard1"
  //     style={{  
  //       justifyContent:'center',
  //       alignItems:'center'  
  //     }}
  //     layoutId="expandableCard"
  //   >
      
  //     <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
  //       {/* <BiMessageSquareX onClick={setExpanded} /> */}
  //     </div>
  //     <img src={param.img_src} alt="Imgcard" style={{
  //       width:'300px',
  //       height:'300px'
  //     }}/>
  //       <span>{param.rover.name}</span>
  //       <span>{param.earth_date}</span>
      
  //     <span>Last 24 hours</span>
  //   </div>
  //     )
  // }

export default Card
