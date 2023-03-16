import React from "react";
import "./Datafilter.css";

const Datafilter = () => {


  return (
    <>
      <div className="inputfield">
        <div
          class="dropdownitems"
          
        >
          <div>
            <div class="select1">
              <label
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,
                  bottom: "4.5ex",
                  left: "2em",
                  padding: "0 5px",
                  zIndex: 1,
                  backgroundColor: "white",
                }}
              >
                Rover
              </label>

              <select name="format" id="format">
                <option selected>Enter value...</option>
                <option>Curiosity</option>
             
              </select>
            </div>
            <label
              style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
            ></label>
          </div>
          {/* select2 item */}

          <div>
            <div class="select1">
              <label
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,
                  bottom: "4.5ex",
                  left: "2em",
                  padding: "0 5px",
                  zIndex: 1,
                  backgroundColor: "white",
                }}
              >
                Camera
              </label>

              <select name="format" id="format">
                <option selected>Enter value...</option>
                <option>Mast Camera</option>
                
              </select>
            </div>
            <label
              style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
            ></label>
          </div>
        </div>
        <button class="buttonp">Search</button>
      </div>
    </>
  );
};

export default Datafilter;
