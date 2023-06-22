import React, { Component, useState } from 'react';
import DonutChart from './DonutChart';
import './Home.css';

const Home = () => {
    Home.displayName = Home.name;
    const [tableData, setTableData] = useState([
        {
            rank: 1,
            symbol: 'USD',
            name: 'John Doe',
            address: '123 Main St',
            totalHolder: 5,
            totalSupply: 2,
            totalSupplyPercentage: 40,
        },
        {
            rank: 2,
            symbol: 'EUR',
            name: 'Jane Smith',
            address: '456 Elm St',
            totalHolder: 3,
            totalSupply: 1,
            totalSupplyPercentage: 33,
        },
        {
            rank: 3,
            symbol: 'GBP',
            name: 'Michael Johnson',
            address: '789 Oak Ave',
            totalHolder: 4,
            totalSupply: 2,
            totalSupplyPercentage: 50,
        },
        {
            rank: 4,
            symbol: 'JPY',
            name: 'Satoshi Nakamoto',
            address: '321 Pine Rd',
            totalHolder: 2,
            totalSupply: 1,
            totalSupplyPercentage: 50,
        },
        {
            rank: 5,
            symbol: 'CAD',
            name: 'Emily Brown',
            address: '555 Maple Ln',
            totalHolder: 6,
            totalSupply: 3,
            totalSupplyPercentage: 50,
        },
        {
            rank: 6,
            symbol: 'AUD',
            name: 'Oliver Wilson',
            address: '777 Cedar Blvd',
            totalHolder: 4,
            totalSupply: 2,
            totalSupplyPercentage: 50,
        },
        {
            rank: 7,
            symbol: 'USD',
            name: 'Sophia Davis',
            address: '222 Willow Dr',
            totalHolder: 3,
            totalSupply: 1,
            totalSupplyPercentage: 33,
        },
        {
            rank: 8,
            symbol: 'EUR',
            name: 'Daniel Martinez',
            address: '888 Birch Ave',
            totalHolder: 5,
            totalSupply: 2,
            totalSupplyPercentage: 40,
        },
        {
            rank: 9,
            symbol: 'GBP',
            name: 'Isabella Thompson',
            address: '999 Elm St',
            totalHolder: 4,
            totalSupply: 2,
            totalSupplyPercentage: 50,
        },
        {
            rank: 10,
            symbol: 'JPY',
            name: 'Mia Anderson',
            address: '444 Oak Ave',
            totalHolder: 3,
            totalSupply: 1,
            totalSupplyPercentage: 33,
        },
        {
            rank: 11,
            symbol: 'CAD',
            name: 'David Rodriguez',
            address: '111 Maple Ln',
            totalHolder: 5,
            totalSupply: 2,
            totalSupplyPercentage: 40,
        },
        {
            rank: 12,
            symbol: 'AUD',
            name: 'Ava Garcia',
            address: '666 Pine Rd',
            totalHolder: 2,
            totalSupply: 1,
            totalSupplyPercentage: 50,
        },
        {
            rank: 13,
            symbol: 'USD',
            name: 'Liam Clark',
            address: '777 Cedar Blvd',
            totalHolder: 6,
            totalSupply: 3,
            totalSupplyPercentage: 50,
        },
        {
            rank: 14,
            symbol: 'EUR',
            name: 'Emma Lewis',
            address: '555 Willow Dr',
            totalHolder: 4,
            totalSupply: 2,
            totalSupplyPercentage: 50,
        },
        {
            rank: 15,
            symbol: 'GBP',
            name: 'Noah Walker',
            address: '888 Birch Ave',
            totalHolder: 3,
            totalSupply: 1,
            totalSupplyPercentage: 33,
        },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    // Get the starting and ending index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the data for the current page
    const currentPageData = tableData.slice(startIndex, endIndex);

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return tableData.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="home-container">
                <div className="input-chart-container">
                    <form className="input-form">
                        <p className="title">Save / Update Token</p>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Name</label>
                                <input className="input-box" type="text" placeholder="Name" />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Symbol</label>
                                <input className="input-box" type="text" placeholder="Symbol" />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Contract Address</label>
                                <input className="input-box" type="text" placeholder="Contract Address" />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Total Supply</label>
                                <input className="input-box" type="text" placeholder="Total Supply" />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Total Holders</label>
                                <input className="input-box" type="text" placeholder="Total Holders" />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title"></label>
                                <div>
                                    <button className="btn btn-primary" style={{ marginRight: "15px" }}>Save</button>
                                    <button className="btn btn-secondary">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div style={{ flexGrow: 1 }} />
                    <div className="pie-chart">
                        <p className="title">Token Statistics by Total Supply</p>
                        <DonutChart />
                    </div>
                    <div style={{ flexGrow: 1 }} />
                </div>
                <hr />
                <div className="table-container">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Symbol</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Contract Address</th>
                                        <th scope="col">Total Holders</th>
                                        <th scope="col">Total Supply</th>
                                        <th scope="col">Total Supply %</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentPageData.map(item =>
                                        <tr key={item.rank}>
                                            <td>{item.rank}</td>
                                            <td>{item.symbol}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.totalHolder}</td>
                                            <td>{item.totalSupply}</td>
                                            <td>{item.totalSupplyPercentage}</td>
                                            <td>Edit</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Home };