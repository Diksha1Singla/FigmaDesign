import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { useState } from "react";

const Pie = () => {
    // useState
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (

    <div className="body">
        <div className="navbar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row-sm-9"></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row-sm-11">
                        <div className="tools-container">
      <h2 className="tools-header">Tools</h2>
      <div className="accordion">
        {["Thresholding", "Forecasting", "Rate List", "Last Changes", "Threshold"].map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-title" onClick={() => handleToggle(index)}>
              <span>{item}</span>
              <span>{activeIndex === index ? "▾" : "▸"}</span>
            </div>
            {activeIndex === index && item === "Threshold" && (
              <div className="accordion-content">
                <h3>Sessions By Device</h3>
                <table className="sessions-table">
                  <thead>
                    <tr>
                      <th>Channel</th>
                      <th>Traffic (%)</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Expected</td>
                      <td>
                        <div className="progress-bar" style={{ backgroundColor: "#645af2", width: "63%" }} />
                      </td>
                      <td>63.28%</td>
                    </tr>
                    <tr>
                      <td>Overall</td>
                      <td>
                        <div className="progress-bar" style={{ backgroundColor: "#ff7133", width: "85%" }} />
                      </td>
                      <td>85.28%</td>
                    </tr>
                    <tr>
                      <td>Minimum</td>
                      <td>
                        <div className="progress-bar" style={{ backgroundColor: "#26c373", width: "45%" }} />
                      </td>
                      <td>45.28%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    // <Box m="20px">
    //   <Header title="Pie Chart" subtitle="Simple Pie Chart" />
    //   <Box height="75vh">
    //     <PieChart />
    //   </Box>
    // </Box>
  );
};

export default Pie;



    