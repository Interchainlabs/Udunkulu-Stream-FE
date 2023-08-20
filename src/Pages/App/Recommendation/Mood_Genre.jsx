import React from "react";
import { Mood1,Mood2,Mood3,Mood4,Mood5,Mood6,Mood7,Mood8,Mood9,Mood10,Mood11, Mood12, Mood13, Mood14 } from "../../../Assets/Moods";
export function Mood_Genre() {
  return (
    <div>
      <p className="header-text">Moods</p>
      <div className="row pt-3 m-0">
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(34, 0, 200, 0.3), rgba(0, 112, 255, 0.2)),url(${Mood1}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood2}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(241, 255, 82, 0.3), rgba(210, 147, 30, 0.2)),url(${Mood3}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(180, 255, 48, 0.49), rgba(102, 151, 114, 0.2)),url(${Mood4}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(26, 215, 20, 0.3), rgba(87, 242, 96, 0.2)),url(${Mood5}`,
            }}
          >
            
          </div>
        </div>
        
      </div>


      {/* GENRE */}
      <p className="header-text">Genre</p>
      <div className="row pt-3 m-0">
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(104, 172, 204, 0.3), rgba(123, 199, 255, 0.2)),url(${Mood6}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(187, 60, 60, 0.3), rgba(178, 76, 76, 0.2)),url(${Mood7}`,
            }}
          >
           
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(197, 217, 215, 0.3), rgba(166, 208, 225, 0.2) ),url(${Mood8}`,
            }}
          >
           
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood9}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(243, 103, 0, 0.3), rgba(255, 132, 0, 0.2)),url(${Mood10}`,
            }}
          >
            
          </div>
        </div>

        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood11}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(247, 155, 155, 0.3), rgba(223, 163, 163, 0.2)),url(${Mood12}`,
            }}
          >
           
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(130, 128, 128, 0.3), rgba(110, 107, 107, 0.2)),url(${Mood13}`,
            }}
          >
            
          </div>
        </div>
        <div className="item">
          <div
            className="card h-50 mood-card card-s"
            style={{
              background: `linear-gradient(rgba(239, 5, 5, 0.3), rgba(189, 6, 6, 0.2)),url(${Mood14}`,
            }}
          >
            
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
