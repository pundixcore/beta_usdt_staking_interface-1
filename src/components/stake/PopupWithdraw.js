import React, { useState, useRef } from "react";
import bigInt from "big-integer";
import Buttons from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../App.css";
import ImgNextGen from "../ImgNextGen";
import usdt from "../images/usdt.svg";

function PopupWithdraw(props) {
  const [message, setMessage] = useState("Withdraw funds");
  const [validAmount, setValidAmount] = useState(false);
  const [textInputRef, setTextInputRef] = useState("0");
  const [txLoading, setTxLoading] = useState(false);
  const textInput = useRef(null);

  const changeHandler = event => {
    let result = !isNaN(+event); // true if its a number, false if not
    if (event == "") {
      setMessage("Withdraw funds");
      setValidAmount(false);
    } else if (bigInt(window.web3Eth.utils.toWei(event, "mWei")).value == 0) {
      setMessage("Withdraw funds");
      setValidAmount(false);
    } else if (bigInt(window.web3Eth.utils.toWei(event, "mWei")).value > bigInt(props.userWithdrawableAmount).value) {
      setMessage("Insufficient withdrawable Amount");
      setValidAmount(false);
    } else {
      setMessage("Withdraw funds");
      setValidAmount(true);
    }
  };

  const setDefault = () => {
    setMessage("Withdraw funds");
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

  const convertTimeStamp = event => {
    var timestamp = event;
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var date = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    return date;
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
              width: "100px",
              border: "0px",
              color: "black",
              padding: "5px 16px",
              backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
              borderRadius: "22px"
            }}
            size="lg"
          >
            Withdraw
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

            <h4 style={{ color: "white", fontSize: "18px", marginBottom: "16px" }}>Withdraw from Liquidity Pool </h4>
            <div
              className=""
              style={{
                color: "silver",
                fontSize: "12px",
                lineHeight: "24px",
                marginBottom: "30px"
              }}
            >
              Note: Your requested withdrawals will be available to withdrawal at the end of the epoch. Withdrawal requests must be confirmed at least 14 days before the end of each epoch.
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
                    Balance: {parseFloat(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 0 })}
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

            {bigInt(window.web3Eth.utils.toWei(textInputRef, "mWei")).value <= bigInt(props.userWithdrawableAmount).value ? (
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
                    Withdrawable: {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 0 })}
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
                          handleClick(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mWei"));
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
                    Balance: {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mwei")).toLocaleString("en-US", { maximumFractionDigits: 0 })}
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
                          handleClick(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mWei"));
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
                  let amount = textInput.current.value.toString();
                  amount = window.web3Eth.utils.toWei(amount, "mWei");
                  setTxLoading(true);
                  if (props.pool_id === 1) {
                    await props.withdraw(amount, process.env.REACT_APP_liquiditystakingV1_address, close);
                  } else if (props.pool_id === 2) {
                    await props.withdraw(amount, process.env.REACT_APP_liquiditystakingV1_address_second, close);
                  }

                  //close();
                }
              }}
            >
              <div className="lkBtSA" style={{ borderRadius: "20px", width: "100%" }}>
                <div className="iqmhrB">
                  <div className="OYMUv">
                    <table>
                      <thead className="iddTJz" style={{ color: "white" }}>
                        <tr>
                          <td className="iddTJz" style={{ textAlign: "start" }} scope="col" width="">
                            Your Pool Share
                          </td>
                          <td className="iddTJz" style={{ textAlign: "end" }} scope="col" width="">
                            {(props.userStakedBalance / props.poolSize) * 100} %
                          </td>
                        </tr>
                        <tr>
                          <td className="iddTJz" style={{ textAlign: "start" }} scope="col" width="">
                            Available at
                          </td>
                          <td className="iddTJz" style={{ textAlign: "end" }} scope="col" width="">
                            {convertTimeStamp(props.poolEndOfCurrentEpoch)}
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>

                {validAmount === true && (
                  <div>
                    {txLoading == false ? (
                      <Buttons type="submit" className="greenGradientButton cell2 center" variant="light">
                        {message}
                      </Buttons>
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

export default PopupWithdraw;
