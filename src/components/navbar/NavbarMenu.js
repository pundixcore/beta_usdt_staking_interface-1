import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';
import MediaQuery from 'react-responsive';
import Buttons from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import ImgNextGen from '../ImgNextGen';
import { slide as Menu } from 'react-burger-menu'
import Dropdown from 'react-bootstrap/Dropdown'
import 'reactjs-popup/dist/index.css';
import '../App.css';

import marginx_logo_white from '../images/marginx_logo_white.png';
import coin98 from '../images/coin98.webp';
import fox from '../images/metamask-fox.svg';
import walletconnectlogo from '../images/walletconnect-logo.svg';


function NavbMenu(props) {
  const [alert, setAlert] = useState(false);
  const [show2, show2Dropdown] = useState(false);

  const showAlert = () => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 2000)
  }

  const contentStyle = { background: '#1e1f23', border: "0px solid #596169", padding: '20px', width: "420px", borderRadius: "15px", minWidth: "320px" };



  return (
    <Navbar className="navbar top" style={{ height: "70px", position: "fixed", width: "100%", top: "0", zIndex: "999", backgroundColor: "black" }}>
      <Nav>
        <MediaQuery maxWidth={950}>
          <Menu right className='cell2'>
            <div className='burgerText'><NavLink className='burgerText' to='/' activeStyle={{ fontWeight: "bold", color: "ffae00" }}>Maker LP</NavLink></div>
            <div className='burgerText'><div className='burgerText' onClick={() => {
              window.open(`https://forum.starscan.io/c/marginx/51`, '_blank')
            }}>Forums &#8599;</div></div>
            <div className='burgerText'><div className='burgerText' onClick={() => {
              window.open(`https://trade.marginx.io/`, '_blank')
            }}>Trade &#8599;</div></div>
          </Menu>
        </MediaQuery>

        <div style={{ cursor: 'pointer' }} onClick={() => {
          window.open(`https://marginx.io/`, '_blank')
        }}>
          <ImgNextGen
            srcWebp={marginx_logo_white}
            height="50" alt=""
          />
        </div>

        <div >
          <ul className="topright rowC">
            <div className="rowC mr-4" style={{ textDecoration: 'none' }}>
              <MediaQuery minWidth={951}>
                <div
                  style={{ marginLeft: "10px", color: "grey" }}
                ><NavLink className="textSmallBold1" activeClassName="gradient-text" to="/">Maker LP</NavLink>
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div className="textSmallBold1" onClick={() => {
                    window.open(`https://forum.starscan.io/c/marginx/51`, '_blank')
                  }}>&#8599; Forums</div></div>
                <div
                  style={{ marginLeft: "30px" }}
                ><div className="textSmallBold1" onClick={() => {
                  window.open(`https://trade.marginx.io/`, '_blank')
                }}>&#8599; Trade</div></div>
              </MediaQuery>
            </div>


            {props.wallet || props.walletConnect ?
              <Dropdown
                onMouseEnter={() => show2Dropdown(true)}
                onMouseLeave={() => show2Dropdown(false)}
                show={show2}
                autoClose="outside"
                style={{ padding: '0px' }}
              >
                <div style={{ margin: '0px', padding: '5px' }}>
                  <Dropdown.Toggle className='textWhiteLargeButton center cell2' variant="warning" size="sm" style={{ display: 'flex', backgroundColor: "#1e1f23", border: '0px', padding: "5px 16px", width: '147.6px', height: '32px', borderRadius: '22px' }}>
                    <span className="cell2 dropdown" style={{ fontSize: '15px', marginRight: "5px" }}>{props.first4Account}...{props.last4Account}</span>
                    <span className="cell2 dropdown" style={{ fontSize: "6px" }}>&#9660;</span>
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu className='cell2' style={{ marginTop: '0px', backgroundColor: "#1e1f23", padding: '5px', minWidth: '110px', width: '157.6px', maxWidth: '160px', borderRadius: '10px' }}>
                  <Dropdown.Item className="cell2" style={{ margin: '0px', padding: '13px' }}>
                    <div className="dropdown" style={{ fontSize: '13px' }} onClick={() => {
                      window.open(`https://etherscan.io/address/${props.account}`, '_blank')
                    }}>View on Etherscan</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="cell2" style={{ margin: '0px', padding: '13px' }}>
                    <div className="dropdown" style={{ fontSize: '13px' }} onClick={async () => {
                      navigator.clipboard.writeText(props.account)
                      showAlert(true)
                    }}>Copy Address</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="cell2" style={{ margin: '0px', padding: '13px' }}>
                    <div className="dropdown" style={{ fontSize: '13px' }} onClick={async () => {
                      props.setWalletTrigger(false)
                      if (props.walletConnect == true) {
                        await props.WalletDisconnect()
                      }
                      await show2Dropdown(false)
                    }}>Disconnect</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Popup trigger={open => (
                <div style={{ margin: '0px', padding: '5px' }}>
                  <MediaQuery minWidth={401}>
                    <Buttons className="textWhiteLargeButton cell2 center" style={{ height: '32px', width: '100%', color: 'black', border: '0px', padding: "5px 16px", backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)", borderRadius: '22px' }} size="lg" >Connect Wallet</Buttons>
                  </MediaQuery>
                  <MediaQuery maxWidth={400}>
                    <Buttons className="textWhiteLargeButton cell2 center" style={{ height: '32px', width: '100%', color: 'black', border: '0px', padding: "5px 16px", backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)", borderRadius: '22px' }} size="lg" >Connect</Buttons>
                  </MediaQuery>
                </div>)} modal {...{ contentStyle }}>
                {close => (
                  <div>
                    <Buttons className="close cell2" style={{ background: "#1e1f23", color: '#fff', borderRadius: "12px", paddingTop: "5px", fontSize: "25px" }} onClick={close}>
                      &#x2715;
                    </Buttons>
                    <h4 className="center cell2 mb-2" style={{ color: 'white', fontSize: '24px', padding: "5px 0px 20px" }}> Connect Wallet </h4>
                    <div className="center" style={{ marginBottom: '15px' }}>
                      <div className="verticalCenter cell2" type="button" style={{ backgroundColor: '#101314', borderRadius: '8px', height: "80px", width: "100%", minWidth: "150px", padding: "6px 25px" }} onClick={async () => {
                        await props.connectMetamask()
                      }}>
                        <span className='mr-4'><img src={fox} width="23" height="23" alt="" /></span>
                        <span style={{ color: 'white' }}>Metamask</span>
                      </div>
                    </div>

                    <div className="center" style={{ marginBottom: '15px' }}>
                      <div className="verticalCenter cell2" type="button" style={{ backgroundColor: '#101314', borderRadius: '8px', height: "80px", width: "100%", minWidth: "150px", padding: "6px 25px" }} onClick={async () => {
                        await props.connectCoin98()
                      }}>
                        <span className='mr-4'><img src={coin98} width="23" height="23" alt="" /></span>
                        <span style={{ color: 'white' }}>Coin98</span>
                      </div>
                    </div>

                    <div className="center mb-2">
                      <div className="verticalCenter cell2" type="button" style={{ backgroundColor: '#101314', borderRadius: '8px', height: "80px", width: "100%", minWidth: "150px", padding: "6px 25px" }} onClick={async () => {
                        await props.mobileWalletConnect()
                      }}>
                        <span className='mr-4'><img src={walletconnectlogo} width="23" height="23" alt="" /></span>
                        <span style={{ color: 'white' }}>WalletConnect</span>
                      </div>
                    </div>

                  </div>
                )}
              </Popup>
            }
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </Nav>

      <Alert className="topRightAlert" style={{ backgroundColor: '#2A2C32', color: 'white', border: '0px', borderRadius: '15px' }} show={alert} variant="dark">

        <Alert.Heading style={{ fontSize: '16px' }}>Copied<Buttons className="close cell2" style={{ background: "#1e1f23", color: '#fff', borderRadius: "12px", fontSize: "18px" }} onClick={() => setAlert(false)}>
          &#x2715;
        </Buttons></Alert.Heading>

        <p style={{ fontSize: '12px' }}>
          You just copied {props.account}
        </p>
        <div className="d-flex justify-content-end">

        </div>
      </Alert>
    </Navbar>
  );
}

export default NavbMenu;
