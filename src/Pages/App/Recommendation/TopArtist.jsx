import React from "react";
import {Artist1, Artist2} from '../../../Assets/Artist';

export  function TopArtist() {
  return (
    <div>
    
      <div className="row pt-3 m-0 mt-5">
        <div className="item">
          <div className="card shadow-sm border-0 rounded genCard">
            <div className="card-body p-0">
              <img
                src={Artist1}
                alt=""
                className="w-100 card-img-top cardImage"
              />
              <div className=" albumInnerText">
                <span className="text-muted songCountDetails">Wizkid</span>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card shadow-sm border-0 rounded genCard">
            <div className="card-body p-0">
              <img
                src={Artist2}
                alt=""
                className="w-100 card-img-top cardImage"
              />
              <div className=" albumInnerText">
                <span className="text-muted songCountDetails">Davido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
