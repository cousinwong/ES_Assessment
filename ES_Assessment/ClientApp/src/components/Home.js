import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <div className="home-container">
                    <div className="input-chart-container">
                        <form className="input-form">
                            <p className="title">Save / Update Token</p>
                            <div style={{ display: "flex", 'flex-direction': "column" }}>
                                <div style={{ display: "flex" }}>
                                    <label className="input-title">Name</label>
                                <input type="text" />
                                </div>
                                <div style={{ display: "flex" }}>

                                </div>
                            </div>
                        </form>
                        <div className="pie-chart">
                            <ul>
                                <li>React for client code</li>
                            <li>Bootstracp for layout and styling</li>
                            </ul>
                        </div>
                    </div>
                    <div className="table-container">
                    </div>
                </div>
            </div>
        );
    }
}
