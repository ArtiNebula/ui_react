import React from 'react';
import './styles/dist/css/tabler.min.css';
// import './styles/dist/css/tabler-flags.min.css';
import './styles/dist/css/tabler-payments.min.css';
import './styles/dist/css/tabler-vendors.min.css';
import './styles/dist/css/demo.min.css';
import Navbar from './Navbar';

const ViewTable = () => {
  const rows = [
    {
      name: "Steel Vengeance",
      city: "Cedar Point, United States",
      type: "RMC Hybrid",
      score: "100.0%",
      date: "August 04, 2021",
      quantity: 74,
      progress: 30,
    },
    {
      name: "Fury 325",
      city: "Carowinds, United States",
      type: "B&M Giga, Hyper, Steel",
      score: "99.3%",
      date: "January 03, 2019",
      quantity: 49,
      progress: 48,
    },
    {
      name: "Wildfire",
      city: "Kolmården, Sweden",
      type: "RMC Twister, Wooden, Terrain",
      score: "99.3%",
      date: "December 28, 2018",
      quantity: 8,
      progress: 9,
    },
    {
      name: "Lightning Rod",
      city: "Dollywood, United States",
      type: "RMC Wooden",
      score: "99.1%",
      date: "November 07, 2020",
      quantity: 104,
      progress: 98,
    },
    // Add more rows as needed
  ];

  return (
    <>
    <Navbar/>
    <div>
      {/* Page Header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              <h2 className="page-title">Datatables</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Page Body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <div id="table-default" className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th><button className="table-sort" data-sort="sort-name">Name</button></th>
                      <th><button className="table-sort" data-sort="sort-city">City</button></th>
                      <th><button className="table-sort" data-sort="sort-type">Type</button></th>
                      <th><button className="table-sort" data-sort="sort-score">Score</button></th>
                      <th><button className="table-sort" data-sort="sort-date">Date</button></th>
                      <th><button className="table-sort" data-sort="sort-quantity">Quantity</button></th>
                      <th><button className="table-sort" data-sort="sort-progress">Progress</button></th>
                    </tr>
                  </thead>
                  <tbody className="table-tbody">
                    {rows.map((item, index) => (
                      <tr key={index}>
                        <td className="sort-name">{item.name}</td>
                        <td className="sort-city">{item.city}</td>
                        <td className="sort-type">{item.type}</td>
                        <td className="sort-score">{item.score}</td>
                        <td className="sort-date">{item.date}</td>
                        <td className="sort-quantity">{item.quantity}</td>
                        <td className="sort-progress" data-progress={item.progress}>
                          <div className="row align-items-center">
                            <div className="col-12 col-lg-auto">{item.progress}%</div>
                            <div className="col">
                              <div className="progress" style={{ width: '5rem' }}>
                                <div
                                  className="progress-bar"
                                  style={{ width: `${item.progress}%` }}
                                  role="progressbar"
                                  aria-valuenow={item.progress}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  aria-label={`${item.progress}% Complete`}
                                >
                                  <span className="visually-hidden">{item.progress}% Complete</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default ViewTable;
