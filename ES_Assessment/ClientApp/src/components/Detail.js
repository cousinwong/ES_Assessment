import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DonutChart from './DonutChart';
import './Detail.css';

const Detail = (props) => {
    const location = useLocation();

    return (
        <div className="detail-container">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", margin: "1% 1%" }}>
                    <button type="button" className="btn btn-secondary" onClick={() => { window.history.back() }}>Back</button>
                    <p className="title">Save / Update Token</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                        <label className="input-title">Price: </label>
                        <label className="input-title" style={{ fontWeight: "bold" }}>$ {location.state.state.price }</label>
                    </div>
                    <hr style={{ margin: "10px 50px"}} />
                    <div style={{ display: "flex" }}>
                        <label className="input-title">Total Supply:</label>
                        <label className="input-title">{location.state.state.totalSupply}</label>
                    </div>
                    <hr style={{ margin: "10px 50px" }} />
                    <div style={{ display: "flex" }}>
                        <label className="input-title">Total Holders:</label>
                        <label className="input-title">{location.state.state.totalHolder}</label>
                    </div>
                    <hr style={{ margin: "10px 50px" }} />
                    <div style={{ display: "flex" }}>
                        <label className="input-title">Name:</label>
                        <label className="input-title">{location.state.state.name}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Detail };