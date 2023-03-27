import React, { useState, useRef } from "react";
import bigInt from "big-integer";
import Buttons from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";
import ImgNextGen from "../ImgNextGen";
import usdt from "../images/usdt.svg";

function PopupDeposit(props) {
  const [message, setMessage] = useState("Enter Deposit Amount");
  const [validAmount, setValidAmount] = useState(false);
  const [txLoading, setTxLoading] = useState(false);
  const [textInputRef, setTextInputRef] = useState("0");
  const textInput = useRef(null);

  const changeHandler = event => {
    let result = !isNaN(+event); // true if its a number, false if not
    if (event == "") {
      setMessage("Enter Deposit Amount");
      setValidAmount(false);
    } else if (bigInt(window.web3Eth.utils.toWei(event, "mWei")).value == 0) {
      setMessage("Enter Deposit Amount");
      setValidAmount(false);
    } else if (bigInt(window.web3Eth.utils.toWei(event, "mWei")).value > bigInt(props.userUSDTBalance).value) {
      setMessage("Insufficient Balance");
      setValidAmount(false);
    } else if (bigInt(window.web3Eth.utils.toWei(event, "mWei")).value > bigInt(props.remainingPoolDepositedSize).value) {
      setMessage(`Vault $${parseFloat(window.web3Eth.utils.fromWei(props.maxPoolSize, "mWei")).toLocaleString("en-US", { maximumFractionDigits: 0 })} deposit cap reached.`);
      setValidAmount(false);
    } else {
      setMessage("Enter Deposit Amount");
      setValidAmount(true);
    }
  };

  const setDefault = () => {
    setMessage("Enter Deposit Amount");
    setValidAmount(false);
    setTextInputRef("0");
    setTxLoading(false);
  };

  const handleClick = event => {
    textInput.current.value = event;
    if (textInput.current.value == "") {
      setTextInputRef("0");
    } else {
      setTextInputRef(textInput.current.value);
    }
  };

  function checkValue(event) {
    textInput.current.value = handleDecimalsOnValue(event.target.value);
    if (textInput.current.value == "") {
      setTextInputRef("0");
    } else {
      setTextInputRef(textInput.current.value);
    }
  }

  function handleDecimalsOnValue(value) {
    const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,6})/s;
    return value.match(regex)[0];
  }

  const contentStyle = {
    background: "#1e1f23",
    border: "0px solid #596169",
    padding: "20px",
    width: "380px",
    borderRadius: "15px",
    minWidth: "320px"
  };

  return (
    <div id="content">
      <Popup
        trigger={open => (
          <Buttons
            className="textWhiteLargeButton cell2 center"
            style={{
              height: "40px",
              width: "80px",
              border: "0px",
              color: "black",
              padding: "5px 16px",
              backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
              borderRadius: "22px"
            }}
            size="lg"
          >
            Deposit
          </Buttons>
        )}
        modal
        {...{ contentStyle }}
        onClose={setDefault}
      >
        {close => (
          <div>
            <Buttons
              className="close cell2"
              style={{
                background: "#1e1f23",
                color: "#fff",
                borderRadius: "12px",
                fontSize: "18px"
              }}
              onClick={close}
            >
              &#x2715;
            </Buttons>

            <h4 style={{ color: "white", fontSize: "18px", marginBottom: "16px" }}> Deposit on Liquidity Pool </h4>
            <div
              className=""
              style={{
                color: "silver",
                fontSize: "12px",
                lineHeight: "24px",
                marginBottom: "30px"
              }}
            >
              Note: Withdrawals are processed once every 28 days and must be requested at least 14 days before the end of the epoch.
            </div>

            <div className="" style={{ marginBottom: "18px" }}>
              <div
                className="cell2"
                style={{
                  backgroundColor: "#2a2c32",
                  borderRadius: "10px",
                  height: "100%",
                  width: "100%",
                  minWidth: "150px",
                  padding: "20px 20px"
                }}
              >
                <div className="flex-space-between" style={{ display: "flex", marginBottom: "40px" }}>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "16px"
                    }}
                  >
                    Asset
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px"
                    }}
                  >
                    Deposited: {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 4 })}
                  </div>
                </div>
                <div className="rowC">
                  <img src={usdt} className="mr-1" width="24px" height="24px" alt="" />
                  <h6
                    className="center"
                    style={{
                      color: "white",
                      fontSizw: "16px",
                      lineHeight: "24px",
                      marginBottom: "0px"
                    }}
                  >
                    USDT Token
                  </h6>
                </div>
              </div>
            </div>
            {bigInt(window.web3Eth.utils.toWei(textInputRef, "mWei")).value <= bigInt(props.userUSDTBalance).value && bigInt(window.web3Eth.utils.toWei(textInputRef, "mWei")).value <= bigInt(props.remainingPoolDepositedSize).value ? (
              <div
                className="label cell2"
                style={{
                  backgroundColor: "#101314",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "10px",
                  height: "100%",
                  width: "100%",
                  minWidth: "150px",
                  padding: "20px 20px",
                  marginBottom: "22px"
                }}
              >
                <div className="flex-space-between" style={{ display: "flex", marginBottom: "40px" }}>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "16px"
                    }}
                  >
                    Amount
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px"
                    }}
                  >
                    Balance: {parseFloat(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 4 })}
                  </div>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    id="inputColor"
                    step="any"
                    min="0"
                    ref={textInput}
                    style={{
                      fontSize: "18px",
                      background: "none",
                      padding: "0px",
                      border: "0px",
                      height: "24px"
                    }}
                    className="form-control cell"
                    placeholder="0"
                    onChange={event => {
                      if (!/[0-9.]/.test(event.key)) {
                        event.preventDefault();
                      }
                      checkValue(event, "change");
                      changeHandler(event.target.value);
                    }}
                    required
                  />
                  <div className="input-group-append" style={{}}>
                    <div className="input-group-text leftCardbody" style={{ padding: "0" }}>
                      <div
                        className="textTransparentButton2"
                        onClick={event1 => {
                          let depositAmount = "0";
                          if (bigInt(props.remainingPoolDepositedSize).value > bigInt(props.userUSDTBalance).value) {
                            // console.log("Other Hello", props.remainingPoolDepositedSize);
                            depositAmount = props.userUSDTBalance;
                          } else {
                            // console.log("Hello", props.remainingPoolDepositedSize);
                            depositAmount = props.remainingPoolDepositedSize.toString();
                          }
                          handleClick(window.web3Eth.utils.fromWei(depositAmount, "mWei"));
                          changeHandler(textInput.current.value);
                        }}
                      >
                        Max
                      </div>
                    </div>
                    <div
                      className="input-group-text rightCardbody"
                      style={{
                        color: "white",
                        fontSize: "16px",
                        padding: "0rem"
                      }}
                    >
                      <ImgNextGen srcWebp={usdt} height="24" className="mr-1" alt="" />
                      USDT
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="cell2"
                style={{
                  backgroundColor: "#101314",
                  border: "1px solid red",
                  borderRadius: "10px",
                  height: "100%",
                  width: "100%",
                  minWidth: "150px",
                  padding: "20px 20px",
                  marginBottom: "22px"
                }}
              >
                <div className="flex-space-between" style={{ display: "flex", marginBottom: "40px" }}>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "16px"
                    }}
                  >
                    Amount
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px"
                    }}
                  >
                    Balance: {parseFloat(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 4 })}
                  </div>
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    autoComplete="off"
                    id="inputColor"
                    step="any"
                    min="0"
                    ref={textInput}
                    style={{
                      fontSize: "18px",
                      background: "none",
                      padding: "0px",
                      border: "0px",
                      height: "24px"
                    }}
                    className="form-control cell"
                    placeholder="0"
                    onChange={event => {
                      if (!/[0-9.]/.test(event.key)) {
                        event.preventDefault();
                      }
                      checkValue(event, "change");
                      changeHandler(event.target.value);
                    }}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text leftCardbody" style={{ padding: "0" }}>
                      <div
                        className="textTransparentButton2"
                        onClick={event1 => {
                          let depositAmount = "0";
                          if (bigInt(props.remainingPoolDepositedSize).value > bigInt(props.userUSDTBalance).value) {
                            depositAmount = props.userUSDTBalance;
                          } else {
                            depositAmount = props.remainingPoolDepositedSize.toString();
                          }
                          handleClick(window.web3Eth.utils.fromWei(depositAmount, "mWei"));
                          changeHandler(textInput.current.value);
                        }}
                      >
                        Max
                      </div>
                    </div>
                    <div
                      className="input-group-text cardbody"
                      style={{
                        color: "white",
                        fontSize: "16px",
                        padding: "0rem"
                      }}
                    >
                      <ImgNextGen srcWebp={usdt} height="24" className="mr-1" alt="" />
                      USDT
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form
              className="mb-1"
              onSubmit={async event => {
                event.preventDefault();
                if (validAmount === true) {
                  if (bigInt(props.userUSDTStakingAllowance).value >= bigInt(window.web3Eth.utils.toWei(textInputRef, "mWei")).value) {
                    let amount = textInput.current.value.toString();
                    amount = window.web3Eth.utils.toWei(amount, "mWei");
                    setTxLoading(true);
                    if (props.pool_id === 1) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid);
                      await props.stake(amount, process.env.REACT_APP_liquiditystakingV1_address, close, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid);
                    } else if (props.pool_id === 2) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid);
                      await props.stake(amount, process.env.REACT_APP_liquiditystakingV1_address_second, close, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid);
                    } else if (props.pool_id === 3) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid_fxevm);
                      await props.stake(amount, process.env.REACT_APP_liquiditystakingV1_address_third, close, process.env.REACT_APP_chainid_fxevm, process.env.REACT_APP_networkid_fxevm);
                    }
                    //close();
                  } else {
                    setTxLoading(true);
                    if (props.pool_id === 1) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid);
                      await props.approve(process.env.REACT_APP_liquiditystakingV1_address, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid, close);
                    } else if (props.pool_id === 2) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid);
                      await props.approve(process.env.REACT_APP_liquiditystakingV1_address_second, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid, close);
                    } else if (props.pool_id === 3) {
                      //await props.switchNetwork(process.env.REACT_APP_chainid_fxevm);
                      await props.approve(process.env.REACT_APP_liquiditystakingV1_address_third, process.env.REACT_APP_chainid_fxevm, process.env.REACT_APP_networkid_fxevm, close);
                    }
                    setTxLoading(false);
                  }
                }
              }}
            >
              <div>
                {validAmount === true && (
                  <div>
                    {txLoading == false ? (
                      <div>
                        {bigInt(props.userUSDTStakingAllowance).value >= bigInt(window.web3Eth.utils.toWei(textInputRef, "mWei")).value ? (
                          <Buttons type="submit" className="greenGradientButton cell2 center" variant="light">
                            Deposit funds
                          </Buttons>
                        ) : (
                          <Buttons type="submit" className="greenGradientButton cell2 center" variant="light">
                            Approve USDT
                          </Buttons>
                        )}
                      </div>
                    ) : (
                      <Buttons type="submit" className="greenGradientButton cell2 center" variant="light">
                        <div className="lds-ellipsis">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </Buttons>
                    )}
                  </div>
                )}
                {validAmount === false && (
                  <Buttons
                    type="submit"
                    className="textWhiteLargeButton cell2 center"
                    variant="light"
                    style={{
                      height: "40px",
                      width: "100%",
                      color: "black",
                      padding: "5px 16px",
                      cursor: "not-allowed",
                      opacity: "0.5",
                      border: "0px",
                      backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                      borderRadius: "22px"
                    }}
                  >
                    {message}
                  </Buttons>
                )}
              </div>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default PopupDeposit;
