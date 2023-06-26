import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonutChart from './DonutChart';
import './Home.css';

const Home = () => {
    Home.displayName = Home.name;

    // The table data.
    var [tableData, setTableData] = useState([
        {
            rank: 1,
            symbol: 'USD',
            name: 'John Doe',
            address: '123 Main St',
            totalHolder: 15,
            totalSupply: 88,
            totalSupplyPercentage: 40.00,
            price: 0.00,
        },
        {
            rank: 2,
            symbol: 'EUR',
            name: 'Jane Smith',
            address: '456 Elm St',
            totalHolder: 8,
            totalSupply: 564,
            totalSupplyPercentage: 33.00,
            price: 0.00,
        },
        {
            rank: 3,
            symbol: 'GBP',
            name: 'Michael Johnson',
            address: '789 Oak Ave',
            totalHolder: 4,
            totalSupply: 23,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 4,
            symbol: 'JPY',
            name: 'Satoshi Nakamoto',
            address: '321 Pine Rd',
            totalHolder: 333,
            totalSupply: 1,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 5,
            symbol: 'CAD',
            name: 'Emily Brown',
            address: '555 Maple Ln',
            totalHolder: 23,
            totalSupply: 3,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 6,
            symbol: 'AUD',
            name: 'Oliver Wilson',
            address: '777 Cedar Blvd',
            totalHolder: 55,
            totalSupply: 2,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 7,
            symbol: 'USD',
            name: 'Sophia Davis',
            address: '222 Willow Dr',
            totalHolder: 3,
            totalSupply: 75,
            totalSupplyPercentage: 33.00,
            price: 0.00,
        },
        {
            rank: 8,
            symbol: 'EUR',
            name: 'Daniel Martinez',
            address: '888 Birch Ave',
            totalHolder: 5,
            totalSupply: 62,
            totalSupplyPercentage: 40.00,
            price: 0.00,
        },
        {
            rank: 9,
            symbol: 'GBP',
            name: 'Isabella Thompson',
            address: '999 Elm St',
            totalHolder: 4,
            totalSupply: 2,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 10,
            symbol: 'JPY',
            name: 'Mia Anderson',
            address: '444 Oak Ave',
            totalHolder: 3,
            totalSupply: 68,
            totalSupplyPercentage: 33.00,
            price: 0.00,
        },
        {
            rank: 11,
            symbol: 'CAD',
            name: 'David Rodriguez',
            address: '111 Maple Ln',
            totalHolder: 5,
            totalSupply: 22,
            totalSupplyPercentage: 40.00,
            price: 0.00,
        },
        {
            rank: 12,
            symbol: 'AUD',
            name: 'Ava Garcia',
            address: '666 Pine Rd',
            totalHolder: 2,
            totalSupply: 1,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 13,
            symbol: 'USD',
            name: 'Liam Clark',
            address: '777 Cedar Blvd',
            totalHolder: 6,
            totalSupply: 3,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 14,
            symbol: 'EUR',
            name: 'Emma Lewis',
            address: '555 Willow Dr',
            totalHolder: 10,
            totalSupply: 2,
            totalSupplyPercentage: 50.00,
            price: 0.00,
        },
        {
            rank: 15,
            symbol: 'GBP',
            name: 'Noah Walker',
            address: '888 Birch Ave',
            totalHolder: 3,
            totalSupply: 1,
            totalSupplyPercentage: 33.00,
            price: 0.00,
        },
    ]);

    const [currentName, setCurrentName] = useState("");
    const [currentSymbol, setCurrentSymbol] = useState("");
    const [currentContractAddress, setCurrentContractAddress] = useState("");
    const [currentTotalSupply, setCurrentTotalSupply] = useState(0);
    const [currentTotalHolders, setCurrentTotalHolders] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Set the max item per page.

    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    // Get the starting and ending index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the data for the current page
    const currentPageData = tableData.slice(startIndex, endIndex);

    // Get the data from API (incompleted) and sort the table on page load.
    useEffect(() => {
        //getData();
        sortData();
    }, []);

    async function getData() {
        const response = await fetch('http://localhost:8080/getCoinList');
        const data = await response.json();
        console.log(data);
        setTableData(data);
    }

    const handleEdit = (data) => {
        setCurrentName(data.name);
        setCurrentSymbol(data.symbol);
        setCurrentContractAddress(data.address);
        setCurrentTotalSupply(data.totalSupply);
        setCurrentTotalHolders(data.totalHolder);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleReset = (e) => {
        e.preventDefault();
        setCurrentName("");
        setCurrentSymbol("");
        setCurrentContractAddress("");
        setCurrentTotalSupply(0);
        setCurrentTotalHolders(0);
    };

    // WIP: update table data state.
    const handleSave = (e) => {
        e.preventDefault();
        const newItem = {
            rank: 0,
            symbol: currentSymbol,
            name: currentName,
            address: currentContractAddress,
            totalHolder: parseInt(currentTotalHolders, 10),
            totalSupply: parseInt(currentTotalSupply, 10),
            totalSupplyPercentage: 0.01,
            price: 0.00,
        };

        const existingItemIndex = tableData.findIndex(item => item.symbol === newItem.symbol);

        if (existingItemIndex !== -1) {
            const updatedData = [...tableData];
            updatedData[existingItemIndex] = newItem;
            setTableData(updatedData);
        }
        else {
            setTableData(oldData => [...oldData, newItem]);
        }

        sortData();
    };

    // Sort the table by Total Supply.
    const sortData = () => {
        const allTotalSupply = tableData.reduce((accumulator, item) => {
            return accumulator + item.totalSupply;
        }, 0);
        
        tableData.forEach((item) => {
            item.totalSupplyPercentage = parseFloat(((item.totalSupply / allTotalSupply) * 100).toFixed(5), 10);
        });

        const sortedData = [...tableData].sort((a, b) => b.totalSupply - a.totalSupply);

        const updatedData = sortedData.map((item, index) => ({
            ...item,
            rank: index + 1,
        }));

        setTableData(updatedData);
    };

    // Ensure only number input for Total Supply and Total Holder.
    const handleKeyDown = (event) => {
        const keyPressed = event.key;

        // Allow only numbers and specific control keys
        if (!/^[0-9\b]+$/.test(keyPressed)) {
            event.preventDefault();
        }
    };

    return (
        <div>
            <div className="home-container">
                <div className="input-chart-container">
                    <form className="input-form">
                    {/*Add/Save data*/}
                        <p className="title">Save / Update Token</p>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Name</label>
                                <input className="input-box" type="text" placeholder="Name" value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Symbol</label>
                                <input className="input-box" type="text" placeholder="Symbol" value={currentSymbol} onChange={(e) => setCurrentSymbol(e.target.value)} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Contract Address</label>
                                <input className="input-box" type="text" placeholder="Contract Address" value={currentContractAddress} onChange={(e) => setCurrentContractAddress(e.target.value)} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Total Supply</label>
                                <input className="input-box" type="text" placeholder="Total Supply" value={currentTotalSupply} onKeyDown={handleKeyDown} onChange={(e) => setCurrentTotalSupply(e.target.value)} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title">Total Holders</label>
                                <input className="input-box" type="text" placeholder="Total Holders" value={currentTotalHolders} onKeyDown={handleKeyDown} onChange={(e) => setCurrentTotalHolders(e.target.value)} />
                            </div>
                            <div style={{ display: "flex" }}>
                                <label className="input-title"></label>
                                <div>
                                    <button className="btn btn-primary" style={{ marginRight: "15px" }} onClick={(e) => handleSave(e)}>Save</button>
                                    <button className="btn btn-secondary" onClick={ (e) => handleReset(e) }>Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div style={{ flexGrow: 1 }} />
                    {/*Chart Display*/}
                    <div className="pie-chart">
                        <p className="title">Token Statistics by Total Supply</p>
                        <DonutChart />
                    </div>
                    <div style={{ flexGrow: 1 }} />
                </div>
                <hr />
                <div className="table-container">
                    {/*Table Display*/}
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
                                            <td><Link to={`/detail`} state={{ state: item }} key={item.rank}>{item.symbol}</Link></td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td>{item.totalHolder}</td>
                                            <td>{item.totalSupply}</td>
                                            <td>{item.totalSupplyPercentage}%</td>
                                            <td><button type="button" className="btn btn-link" onClick={() => handleEdit(item)}>Edit</button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/*Pagination Control*/}
                        <div style={{ alignSelf: "center" }}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                                    </li>
                                    {Array.from(Array(totalPages).keys()).map((page) => (
                                        <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                                            <button className="page-link" href="#" onClick={() => handlePageChange(page + 1)}>
                                                {page + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
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