import React,{useState} from 'react'
import { motion} from "framer-motion";
import "./Card.css"

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);
  const img=  props.img_src;

    
  return (
   <>
      {expanded ? (
        <div>expanded card</div>
        // <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
   
   </>
  )
}
function CompactCard({ param, setExpanded }) {
    
    return (
        <>
      <motion.div
        className="CompactCard"
        layoutId="expandableCard"
        // onClick={setExpanded}
        
      >
       
         <img src={param.img_src}/>   
          <div className="radialbar">
            <div>
          <span>${param.name}</span></div>
          <div>
          <span>${param.earth_date}</span>
          </div>
          </div>
        </motion.div>
      </>
    );
  }

export default Card
