import React from "react";
import { withRouter } from "react-router";
import "./CSS/Dronestats.css"
import DroneFPV from '../Asset/Drone_FPV.mp4';

const Dronestats = ({ history }) => {
    return (
        <div className="drone-status-page">
        <div className="left-section">
          <div className="rotation-section">
            {/* Drone's Degree of Rotation */}
            <div className="rotation-info">
              <h2>Degree of Rotation</h2>
              {/* Drone Rotation API */}
            </div>
          </div>
            <div className="stats-section">
            {/* Drone stats */}
            <div className="stats-info">
                <h2>Drone Status</h2>
                <div className="stats-display">
                    <div className="stats-item">
                        <p class = "stats-item-topic">Ground speed</p>
                        <p>Value 1</p>
                    </div>
                    <div className="stats-item">
                        <p class = "stats-item-topic" >Altitude</p>
                        <p>Value 2</p>
                    </div>
                    <div className="stats-item">
                        <p class = "stats-item-topic">Distance to WP(m)</p>
                        <p>Value 3</p>
                    </div>
                    <div className="stats-item">
                        <p class = "stats-item-topic" >Yaw (Degrees)</p>
                        <p>Value 4</p>
                    </div>
                    <div className="stats-item">
                        <p class = "stats-item-topic">Vertical speed (km/h)</p>
                        <p>Value 5</p>
                    </div>
                    <div className="stats-item">
                        <p class = "stats-item-topic" >Distance to Ground</p>
                        <p>Value 6</p>
                    </div>
                </div>
                </div>
          </div>
        </div>

        
        <div className="right-section">
          {/* Drone FOV and video display */}
          <div className="fov-video">
            <h2 style={{color: "white"}}>Drone FPV</h2>
            <video autoPlay loop muted playsInline src={DroneFPV}></video>
          </div>
        </div>
      </div>
    );
  };

export default withRouter(Dronestats);