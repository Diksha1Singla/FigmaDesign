import { Box } from "@mui/material";
import "./index.css"
import { FaBell, FaUserCircle, FaGlobe, FaCog, FaWallet, FaArrowDown } from 'react-icons/fa';
import LineChart from "../../components/Linechart";
import logo from "../../data/images/GridPulseLogo.png"
const Line = () => {
    const data = [
      { code: 'ES0867', rate: '0.13624', time: '18:42:34' },
      { code: 'IN2314', rate: '0.18760', time: '19:43:07' },
      { code: 'HR1238', rate: '0.08921', time: '21:56:45' }
    ];
  return (
    <>
      <div className="LineNavbar">
        <div className="navbarLogo">
          <img src={logo} alt=""/>
          <h1>Grid Pulse</h1>
        </div>
        <div className="navbar">
          <div className="nav-item dropdown">Institutional</div>
          <div className="nav-item dropdown">Wallet <FaWallet /></div>
          <div className="nav-item dropdown">Orders</div>
          <div className="nav-item icon"><FaUserCircle /></div>
          <div className="nav-item icon">
            <FaBell />
            <span className="notification-badge">80</span>
          </div>
          <div className="nav-item deposit-button">
            <FaArrowDown /> Deposit
          </div>
          <div className="nav-item icon"><FaGlobe /> ENG</div>
          <div className="nav-item icon fullscreen-icon">⛶</div>
          <div className="nav-item icon"><FaCog /></div>
        </div>
      </div>


      <div class="container">
        <div class="col">
          <Box m="20px">
            <Box height="75vh" width="70vw">
              <LineChart />
            </Box>
          </Box>
        </div>
        <div style={{display:"flex"}}>
          <div class="col-md-auto">
            <table style={{padding:"-0",margin:"-1rem"}}>
              <thead>
                <tr className="trHead">
                  <th>USB</th>
                  <th>COST</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="tdrow">{row.time}</td>
                    <td className="costrate">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col col-lg-2">
          <table style={{paddingLeft:"3rem",paddingRight:"1rem"}}>
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>MDTL(Rs/kWh)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="tdrow">{row.time}</td>
                    <td className="costrate">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
<div style={{display:"flex",paddingBottom:"2rem"}}>
  <div>
      <div className="row"> 
        <div className="col">
          <h2>Biding Status</h2>
        </div>
        <div className="col">
          <h2>Real Time Price</h2>
        </div>
      </div>

      <table className="supplier-table">
      <thead>
        <tr>
          <th>Supplier Code</th>
            <th className="heading">Rate/Kwh</th>
            <th className="heading">Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="code-cell">{row.code}</td>
            <td className="heading">{row.rate}</td>
            <td className="heading">{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <div>
    <div className="row"> 
        <div className="col">
          <h2>Biding Status</h2>
        </div>
        <div className="col">
          <h2>Real Time Price</h2>
        </div>
      </div>

      <table className="supplier-table">
      <thead>
        <tr>
          <th>Supplier Code</th>
            <th className="heading">Rate/Kwh</th>
            <th className="heading">Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="code-cell">{row.code}</td>
            <td className="heading">{row.rate}</td>
            <td className="heading">{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    {/* <div className="Part3" style={{display:"flex"}}>

        <div className="inputContainer">
          <input type="text" placeholder="2.5"/>
          <input type="text" placeholder="Power"/>
          <input className="PSPCL" type="text" placeholder="PSPCL"/>
          <input type="text" placeholder="Total"/>
          <button>Buy</button>
        </div>

        <div className="inputContainer1">
          <input type="text" placeholder="Cost"/>
          <input type="text" placeholder="Power"/>
          <input className="PSPCL" type="text" placeholder="BHEL"/>
          <input type="text" placeholder="Total"/>
          <button>Sell</button>
        </div>

*/}

    <div className="Part3">
      <div className="LeftPart">
        <div className="inputConatiner">
          <input type="text" placeholder="2.5"/>
          <span className="placeholderLeft cost">Cost</span>
          <span className="placeholderRight cost">INR</span>
        </div>
        <div className="inputConatiner">
          <input type="text" placeholder=""/>
          <span className="placeholderLeft power">Power</span>
          <span className="placeholderRight power">KWh</span>
        </div>
        <input className="PSPCL" type="text" placeholder="PSPCL"/>
        
        <div className="">
          <input type="text" placeholder=""/>
          <span className="placeholderLeft total">Total</span>
          <span className="placeholderRight total">INR</span>
        </div>
      </div>
      <button className="Buy">Buy</button>
      </div>
      <div className="Part3">
      <div className="LeftPart">
      <div className="inputConatiner">
          <input type="text" placeholder="6.5"/>
          <span className="placeholderLeft1 cost">Cost</span>
          <span className="placeholderRight1 cost">INR</span>
        </div>
        <div className="inputConatiner">
          <input type="text" placeholder=""/>
          <span className="placeholderLeft1 power">Power</span>
          <span className="placeholderRight1 power">KWh</span>
        </div>
        <input className="PSPCL" type="text" placeholder="BHEL"/>

        <div className="inputConatiner">
          <input type="text" placeholder=""/>
          <span className="placeholderLeft1 total">Total</span>
          <span className="placeholderRight1 total">INR</span>
        </div>
        <button className="Sell">Sell</button>
      </div>
      </div>

  </div> 
    

    </>
  );
};

export default Line;