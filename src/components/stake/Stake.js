import React from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MediaQuery from "react-responsive";
import Buttons from "react-bootstrap/Button";
import "reactjs-popup/dist/index.css";
import "../App.css";
import ImgNextGen from "../ImgNextGen";
import PopupDeposit from "./PopupDeposit";

import nftBackground from "../images/dots-bg.png";
import bannerFX from "../images/bannerFX.png";
import usdt from "../images/usdt.svg";
import fx from "../images/fx.svg";
import marginxLogo from "../images/marginx-title.svg";
import CountdownTimer from "../CountdownTimer";
import bigInt from "big-integer";
import HorizontalScroll from "react-horizontal-scrolling";

function StakeMenu(props) {
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

  const NOW_IN_MS = new Date().getTime();
  const contentStyle = {
    background: "#1e1f23",
    border: "0px solid #596169",
    padding: "20px",
    width: "380px",
    borderRadius: "15px",
    minWidth: "320px"
  };

  return (
    <div id="content" style={{ margin: "0", color: "#ff9a04", maxWidth: "1000px" }}>
      <MediaQuery minWidth={981}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3rem",
            width: "100%"
          }}
        >
          <div
            className="card cardbody badgebody"
            style={{
              marginBottom: "30px",
              marginRight: "20px",
              color: "white",
              width: "490px",
              height: "220px",
              borderRadius: "25px"
            }}
          >
            <div
              className="card-body"
              style={{
                marginLeft: "5px",
                padding: "10px",
                backgroundImage: `url(${bannerFX})`,
                borderRadius: "25px",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                zIndex: "0"
              }}
            >
              <div className="textWhite rowC" style={{ fontSize: "20px", color: "white" }}>
                <ImgNextGen srcWebp={marginxLogo} style={{ marginLeft: "0px", marginRight: "18px" }} width="105" alt="" />
                <div>
                  <div className="bzThwT mb-2 mt-4">
                    <b>USDT</b>
                  </div>
                  <div className="kXLvz mb-4" style={{ fontSize: "27px" }}>
                    <b>Welcome to MarginX Liquidity Pool</b>
                  </div>

                  {/* <ButtonGroup>
                    <div className="mr-3">
                      <Buttons
                        className="textWhiteLargeButton cell2 center"
                        style={{
                          height: "35px",
                          width: "100%",
                          minWidth: "138px",
                          border: "0px",
                          color: "white",
                          padding: "5px 16px",
                          backgroundColor: "black",
                          borderRadius: "22px"
                        }}
                        size="lg"
                        onClick={() => {
                          window.open(`https://youtu.be/2xZAVXF-x2Y`, "_blank");
                        }}
                      >
                        &#8599; Learn more
                      </Buttons>
                    </div>
                    <div>
                      <Buttons
                        className="textWhiteLargeButton cell2 center"
                        style={{
                          height: "35px",
                          width: "100%",
                          minWidth: "138px",
                          border: "0px",
                          color: "black",
                          padding: "5px 16px",
                          backgroundColor: "white",
                          borderRadius: "22px"
                        }}
                        size="lg"
                        onClick={() => {
                          window.open(`https://forum.starscan.io/t/maker-liquidity-pool-usdt-erc-20-beta/4955`, "_blank");
                        }}
                      >
                        &#8599; Read more
                      </Buttons>
                    </div>
                  </ButtonGroup> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="mr-auto card cardbody"
            style={{
              marginLeft: "0px",
              color: "white",
              height: "220px",
              width: "490px",
              borderRadius: "25px",
              backgroundImage: `url(${nftBackground})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <div className="card-body" style={{ padding: "15px" }}>
              <div
                className="ml-auto mr-auto card cardbodyBlack float-right"
                style={{
                  marginBottom: "12px",
                  color: "white",
                  maxWidth: "400px"
                }}
              >
                <div className="card-body" style={{ padding: "15px" }}>
                  <div className="ePxacs">
                    <div className="ctBHOr">+</div>Rewards
                  </div>
                  <div
                    className="textWhite rowC mb-2"
                    style={{
                      fontSize: "1.25rem",
                      color: "white",
                      lineHeight: "1.5rem"
                    }}
                  >
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {props.accountLoading ? (
                              <div
                                className="eWMWa-D"
                                style={{
                                  fontSize: "1.25rem",
                                  color: "white",
                                  lineHeight: "1.5rem"
                                }}
                              >
                                {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) + parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")) + parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether")) >= //Issei
                                0 ? (
                                  <div>
                                    {(parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) + parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")) + parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether"))).toLocaleString("en-US", {
                                      maximumFractionDigits: 2
                                    })}{" "}
                                  </div>
                                ) : (
                                  <div>TBD</div>
                                )}
                              </div>
                            ) : (
                              <span>-</span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <div style={{ textAlign: "end" }}>
                      <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "0px" }} width="28px" alt="" />
                    </div>
                  </div>
                  {/* {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) + parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")) + parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether")) == 0 ? (
                    <Buttons
                      className="buttonGradientBorder cell3 center"
                      style={{
                        height: "38px",
                        width: "80px",
                        cursor: "not-allowed",
                        opacity: "0.5"
                      }}
                    >
                      Claim
                    </Buttons>
                  ) : (
                    <Buttons
                      className="buttonGradientBorder cell3 center"
                      style={{ height: "38px", width: "80px" }}
                      size="lg"
                      onClick={() => {
                        props.claimRewardAll();
                      }}
                    >
                      <div className="linearGradientText center">Claim</div>
                    </Buttons>
                    
                  )} */}
                </div>
              </div>

              <div className="textWhite" style={{ fontSize: "20px", color: "white" }}>
                <big>
                  <b>Portfolio</b>
                </big>
              </div>
              <div style={{ color: "grey" }}>Track balances (Ethereum & FXCore)</div>
              <div>
                <table>
                  <thead className="textBlackSmall" style={{ color: "white" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        {props.accountLoading ? (
                          <div
                            className="eWMWa-D"
                            style={{
                              fontSize: "1.25rem",
                              color: "white",
                              lineHeight: "1.5rem"
                            }}
                          >
                            <div>
                              {(parseFloat(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mwei")) + parseFloat(window.web3Fx.utils.fromWei(props.userUSDTBalance_third, "mwei"))).toLocaleString("en-US", {
                                maximumFractionDigits: 0
                              })}{" "}
                            </div>
                            <div className="JYkOF">
                              <ImgNextGen
                                srcWebp={usdt}
                                style={{
                                  marginLeft: "6px",
                                  marginRight: "0px"
                                }}
                                width="24px"
                                alt=""
                              />
                            </div>
                          </div>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        {props.accountLoading ? (
                          <div
                            className="eWMWa-D"
                            style={{
                              fontSize: "1.25rem",
                              color: "white",
                              lineHeight: "1.5rem"
                            }}
                          >
                            <div>
                              {(parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mwei")) + parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance_second, "mwei")) + parseFloat(window.web3Fx.utils.fromWei(props.userStakedBalance_third, "mwei"))).toLocaleString("en-US", {
                                maximumFractionDigits: 0
                              })}{" "}
                            </div>
                            <div className="JYkOF">
                              <ImgNextGen
                                srcWebp={usdt}
                                style={{
                                  marginLeft: "6px",
                                  marginRight: "0px"
                                }}
                                width="24px"
                                alt=""
                              />
                            </div>
                          </div>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        {props.accountLoading ? (
                          <div
                            className="eWMWa-D"
                            style={{
                              fontSize: "1.25rem",
                              color: "white",
                              lineHeight: "1.5rem"
                            }}
                          >
                            <div>
                              {(
                                parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mwei")) +
                                parseFloat(
                                  window.web3Eth.utils.fromWei(
                                    props.userWithdrawableAmount_second, //Issei
                                    "mwei"
                                  )
                                ) +
                                parseFloat(
                                  window.web3Fx.utils.fromWei(
                                    props.userWithdrawableAmount_third, //Issei
                                    "mwei"
                                  )
                                )
                              ).toLocaleString("en-US", {
                                maximumFractionDigits: 0
                              })}{" "}
                            </div>
                            <div className="JYkOF">
                              <ImgNextGen
                                srcWebp={usdt}
                                style={{
                                  marginLeft: "6px",
                                  marginRight: "0px"
                                }}
                                width="24px"
                                alt=""
                              />
                            </div>
                          </div>
                        ) : (
                          <span>-</span>
                        )}
                      </td>
                    </tr>
                  </thead>
                  <tbody className="" style={{ color: "white" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        Wallet
                      </td>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        Deposited
                      </td>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        Available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={980}>
        <div
          className="card cardbody badgebody"
          style={{
            marginBottom: "20px",
            color: "white",
            height: "200px",
            minWidth: "300px",
            maxWidth: "490px",
            borderRadius: "25px"
          }}
        >
          <div
            className="card-body"
            style={{
              marginLeft: "0px",
              padding: "15px",
              backgroundImage: `url(${bannerFX})`,
              borderRadius: "25px",
              backgroundPosition: "bottom center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              zIndex: "0"
            }}
          >
            <MediaQuery minWidth={481}>
              <div className="textWhite rowC" style={{ fontSize: "20px", color: "white" }}>
                <ImgNextGen srcWebp={marginxLogo} style={{ marginLeft: "0px", marginRight: "18px" }} width="105" alt="" />
                <div>
                  <div className="bzThwT mb-2 mt-3">
                    <b>USDT</b>
                  </div>
                  <div className="kXLvz mb-3" style={{ fontSize: "25px", lineHeight: "2.3rem" }}>
                    <b>Welcome to MarginX Liquidity Pool</b>
                  </div>
                  {/* <ButtonGroup>
                    <div className="mr-3">
                      <Buttons
                        className="textWhiteLargeButton cell2 center"
                        style={{
                          height: "35px",
                          width: "100%",
                          minWidth: "138px",
                          border: "0px",
                          color: "white",
                          padding: "5px 16px",
                          backgroundColor: "black",
                          borderRadius: "22px"
                        }}
                        size="lg"
                        onClick={() => {
                          window.open(`https://youtu.be/2xZAVXF-x2Y`, "_blank");
                        }}
                      >
                        &#8599; Learn more
                      </Buttons>
                    </div>
                    <div>
                      <Buttons
                        className="textWhiteLargeButton cell2 center"
                        style={{
                          height: "35px",
                          width: "100%",
                          minWidth: "138px",
                          border: "0px",
                          color: "black",
                          padding: "5px 16px",
                          backgroundColor: "white",
                          borderRadius: "22px"
                        }}
                        size="lg"
                        onClick={() => {
                          window.open(`https://forum.starscan.io/t/maker-liquidity-pool-usdt-erc-20-beta/4955`, "_blank");
                        }}
                      >
                        &#8599; Read more
                      </Buttons>
                    </div>
                  </ButtonGroup> */}
                </div>
              </div>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
              <div className="bzThwT mb-2 mt-3">
                <b>USDT</b>
              </div>
              <div className="kXLvz mb-3" style={{ fontSize: "25px", lineHeight: "2.3rem" }}>
                <b>Welcome to MarginX Liquidity Pool</b>
              </div>
              {/* <ButtonGroup>
                <div className="mr-2">
                  <Buttons
                    className="textWhiteLargeButton cell2 center"
                    style={{
                      height: "35px",
                      width: "100%",
                      minWidth: "138px",
                      border: "0px",
                      color: "white",
                      padding: "5px 16px",
                      backgroundColor: "black",
                      borderRadius: "22px"
                    }}
                    size="lg"
                    onClick={() => {
                      window.open(`https://youtu.be/2xZAVXF-x2Y`, "_blank");
                    }}
                  >
                    &#8599; Learn more
                  </Buttons>
                </div>
                <div>
                  <Buttons
                    className="textWhiteLargeButton cell2 center"
                    style={{
                      height: "35px",
                      width: "100%",
                      minWidth: "138px",
                      border: "0px",
                      color: "black",
                      padding: "5px 16px",
                      backgroundColor: "white",
                      borderRadius: "22px"
                    }}
                    size="lg"
                    onClick={() => {
                      window.open(`https://forum.starscan.io/t/maker-liquidity-pool-usdt-erc-20-beta/4955`, "_blank");
                    }}
                  >
                    &#8599; Read more
                  </Buttons>
                </div>
              </ButtonGroup> */}
            </MediaQuery>
          </div>
        </div>

        <div
          className="mr-auto card cardbody"
          style={{
            marginBottom: "20px",
            marginLeft: "0px",
            color: "white",
            height: "220px",
            minWidth: "300px",
            maxWidth: "490px",
            borderRadius: "25px",
            backgroundImage: `url(${nftBackground})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="card-body" style={{ padding: "15px" }}>
            <div
              className="ml-auto mr-auto card cardbodyBlack float-right"
              style={{
                marginBottom: "12px",
                color: "white",
                maxWidth: "400px"
              }}
            >
              <div className="card-body" style={{ padding: "15px" }}>
                <div className="ePxacs">
                  <div className="ctBHOr">+</div>Rewards
                </div>
                <div
                  className="textWhite rowC mb-2"
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    lineHeight: "1.5rem"
                  }}
                >
                  <td style={{ textAlign: "start" }} scope="col" width="120">
                    {props.accountLoading ? (
                      <div
                        className="eWMWa-D"
                        style={{
                          fontSize: "1.25rem",
                          color: "white",
                          lineHeight: "1.5rem"
                        }}
                      >
                        <div>
                          {props.accountLoading ? (
                            <div
                              className="eWMWa-D"
                              style={{
                                fontSize: "1.25rem",
                                color: "white",
                                lineHeight: "1.5rem"
                              }}
                            >
                              {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) +
                                parseFloat(
                                  window.web3Eth.utils.fromWei(
                                    props.userEarnedRewardAmount_second, //Issei
                                    "Ether"
                                  )
                                ) +
                                parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether")) >= //issei
                              0 ? (
                                <div>
                                  {(
                                    parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) +
                                    parseFloat(
                                      window.web3Eth.utils.fromWei(
                                        props.userEarnedRewardAmount_second, //Issei
                                        "Ether"
                                      )
                                    ) +
                                    parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether"))
                                  ).toLocaleString("en-US", {
                                    maximumFractionDigits: 2
                                  })}{" "}
                                </div>
                              ) : (
                                <div>TBD</div>
                              )}
                            </div>
                          ) : (
                            <span>-</span>
                          )}
                        </div>
                      </div>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                  <div>
                    <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "0px" }} width="28px" alt="" />
                  </div>
                </div>
                {/* {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")) +
                  parseFloat(
                    window.web3Eth.utils.fromWei(
                      props.userEarnedRewardAmount_second, //Issei
                      "Ether"
                    )
                  ) +
                  parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether")) ==
                0 ? (
                  <Buttons
                    className="buttonGradientBorder cell3 center"
                    style={{
                      height: "38px",
                      width: "80px",
                      cursor: "not-allowed",
                      opacity: "0.5"
                    }}
                  >
                    Claim
                  </Buttons>
                ) : (
                  <Buttons
                    className="buttonGradientBorder cell3 center"
                    style={{ height: "38px", width: "80px" }}
                    size="lg"
                    onClick={() => {
                      props.claimRewardAll();
                    }}
                  >
                    <div className="linearGradientText center">Claim</div>
                  </Buttons>
                )} */}
              </div>
            </div>

            <div className="textWhite" style={{ fontSize: "20px", color: "white" }}>
              <big>
                <b>Portfolio</b>
              </big>
            </div>
            <div style={{ color: "grey" }}>Track balances (Ethereum & FXCore)</div>

            <div>
              <table>
                <thead className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {(parseFloat(window.web3Eth.utils.fromWei(props.userUSDTBalance, "mwei")) + parseFloat(window.web3Fx.utils.fromWei(props.userUSDTBalance_third, "mwei"))).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen srcWebp={usdt} style={{ marginLeft: "6px", marginRight: "0px" }} width="24px" alt="" />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {(
                              parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mwei")) +
                              parseFloat(
                                window.web3Eth.utils.fromWei(
                                  props.userStakedBalance_second, //Issei
                                  "mwei"
                                )
                              ) +
                              parseFloat(window.web3Fx.utils.fromWei(props.userStakedBalance_third, "mwei"))
                            ).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen srcWebp={usdt} style={{ marginLeft: "6px", marginRight: "0px" }} width="24px" alt="" />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {(
                              parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mwei")) +
                              parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount_second, "mwei")) +
                              parseFloat(
                                window.web3Fx.utils.fromWei(
                                  props.userWithdrawableAmount_third, //Issei
                                  "mwei"
                                )
                              )
                            ).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen srcWebp={usdt} style={{ marginLeft: "6px", marginRight: "0px" }} width="24px" alt="" />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Wallet
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Deposited
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </MediaQuery>

      <div className="mr-auto" style={{ marginTop: "10px", color: "white" }}>
        <div className="card-body">
          <div className="textWhite mb-1" style={{ fontSize: "1.5rem", color: "white" }}>
            <b>Liquidity Pool Incentives</b>
          </div>
          <div style={{ color: "grey" }}>Share the PnL and/or earn rewards for providing liquidity to verified Market Makers & participating in AI Bots Trading on MarginX.</div>
        </div>
      </div>

      {/* <MediaQuery minWidth={981}>
        <HorizontalScroll>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "3rem",
              marginLeft: "3rem",
              marginRight: "3rem",
              marginBottom: "3rem",
              width: "100%"
            }}
          > */}
      <div className="lkBtSA" style={{ borderRadius: "20px", marginRight: "20px", marginBottom: "16px" }}>
        {/* <Link to="/liquidity" className='exLink0'> */}
        <div
          className="card cardbody"
          style={{
            height: "100%",
            color: "white",
            minWidth: "300px",
            maxWidth: "490px"
          }}
        >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }}>
              <div className="float-left textWhite" style={{ fontSize: "1.1rem", color: "white" }}>
                Maker Liquidity Pool USDT (ERC20)
              </div>
              {/* <div className="float-right" style={{ marginLeft: "10px" }}>
                                  <ImgNextGen
                                      srcWebp={usdt}
                                      width="32px" height="32px" alt=""
                                  />
                              </div> */}
              <Link
                to={{
                  pathname: "/liquidity",
                  state: { from: "first_liquidity_pool" }
                }}
                className="exLink0"
              >
                <div className="float-right" style={{ marginLeft: "10px" }}>
                  <Buttons
                    className="textWhiteLargeButton cell2 center"
                    style={{
                      height: "35px",
                      width: "100%",
                      border: "0px",
                      color: "black",
                      padding: "5px 16px",
                      backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                      borderRadius: "22px"
                    }}
                    size="lg"
                  >
                    More Info
                  </Buttons>
                </div>
              </Link>
            </div>
            <div>
              <table>
                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.poolSize, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                            /{" "}
                            {parseFloat(window.web3Eth.utils.fromWei(props.maxPoolSize, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate, "Ether") * 86400).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={fx}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="28px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Pool Size
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Yield / day
                    </td>
                  </tr>
                </tbody>

                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {props.APR.toLocaleString("en-US", {
                              maximumFractionDigits: 2
                            })}{" "}
                            %
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Your Deposit
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      APR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </Link> */}

        {props.wallet || props.walletConnect ? (
          <div className="iqmhrB">
            <div className="OYMUv">
              <div className="eWMWa-D">
                {props.userEarnedRewardAmount >= 0 ? (
                  <span>
                    {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")).toLocaleString("en-US", {
                      maximumFractionDigits: 2
                    })}
                  </span>
                ) : (
                  <span>TBD</span>
                )}
                <div>
                  <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "15px" }} width="28px" alt="" />
                </div>
              </div>
              <div className="iddTJh">Your rewards</div>
            </div>
            <div className="rowC">
              {props.userEarnedRewardAmount == 0 ? (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Claim
                </Buttons>
              ) : (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px"
                  }}
                  size="lg"
                  onClick={async () => {
                    console.log("1st claim button clicked");
                    //await props.switchNetwork(process.env.REACT_APP_chainid);
                    props.claimReward(process.env.REACT_APP_liquiditystakingV1_address, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid);
                  }}
                >
                  <div className="linearGradientText center">Claim</div>
                </Buttons>
              )}
              {props.userUSDTBalance > 0 && parseInt(props.remainingPoolDepositedSize) > 0 ? (
                <PopupDeposit poolSize={props.poolSize} maxPoolSize={props.maxPoolSize} remainingPoolDepositedSize={props.remainingPoolDepositedSize} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} stake={props.stake} approve={props.approve} pool_id={1} connectMetamask={props.connectMetamask} switchNetwork={props.switchNetwork} />
              ) : (
                <Buttons
                  className="textWhiteLargeButton cell2 center"
                  style={{
                    height: "40px",
                    width: "80px",
                    border: "0px",
                    color: "black",
                    padding: "5px 16px",
                    backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                    borderRadius: "22px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Deposit
                </Buttons>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="lkBtSA" style={{ borderRadius: "20px" }}>
        {/* <Link to="/liquidity" className='exLink0'> */}
        <div
          className="card cardbody"
          style={{
            height: "100%",
            color: "white",
            minWidth: "300px",
            maxWidth: "490px"
          }}
        >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }}>
              <div className="float-left textWhite" style={{ fontSize: "1.1rem", color: "white" }}>
                AI Bots Trading Pool USDT (ERC20)
              </div>
              {/* <div className="float-right" style={{ marginLeft: "10px" }}>
                                  <ImgNextGen
                                      srcWebp={usdt}
                                      width="32px" height="32px" alt=""
                                  />
                              </div> */}
              <Link
                to={{
                  pathname: "/liquidity",
                  state: { from: "second_liquidity_pool" }
                }}
                className="exLink0"
              >
                <div className="float-right" style={{ marginLeft: "10px" }}>
                  <Buttons
                    className="textWhiteLargeButton cell2 center"
                    style={{
                      height: "35px",
                      width: "100%",
                      border: "0px",
                      color: "black",
                      padding: "5px 16px",
                      backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                      borderRadius: "22px"
                    }}
                    size="lg"
                  >
                    More Info
                  </Buttons>
                </div>
              </Link>
            </div>
            <div>
              <table>
                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.poolSize_second, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                            /{" "}
                            {parseFloat(window.web3Eth.utils.fromWei(props.maxPoolSize_second, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>- %{/* {parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate_second, "Ether") * 86400).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })} */}</div>
                          {/* <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={fx}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="28px"
                              alt=""
                            />
                          </div> */}
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Pool Size
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      This week's APR {/* Yield / day */}
                    </td>
                  </tr>
                </tbody>

                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance_second, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>- %{/* {props.APR_second.toLocaleString("en-US", {
                              maximumFractionDigits: 2
                            })}{" "}
                            % */}</div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Your Deposit
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Last epoch's APR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </Link> */}

        {props.wallet || props.walletConnect ? (
          <div className="iqmhrB">
            <div className="OYMUv">
              <div className="eWMWa-D">
                {props.userEarnedRewardAmount_second >= 0 ? (
                  <span>
                    {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")).toLocaleString("en-US", {
                      maximumFractionDigits: 2
                    })}
                  </span>
                ) : (
                  <span>TBD</span>
                )}
                <div>
                  <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "15px" }} width="28px" alt="" />
                </div>
              </div>
              <div className="iddTJh">Your rewards</div>
            </div>
            <div className="rowC">
              {props.userEarnedRewardAmount_second == 0 ? (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Claim
                </Buttons>
              ) : (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px"
                  }}
                  size="lg"
                  onClick={async () => {
                    console.log("2nd claim button clicked");
                    //await props.switchNetwork(process.env.REACT_APP_chainid);
                    props.claimReward(process.env.REACT_APP_liquiditystakingV1_address_second, process.env.REACT_APP_chainid, process.env.REACT_APP_networkid);
                    console.log("2nd claim button clicked finished");
                  }}
                >
                  <div className="linearGradientText center">Claim</div>
                </Buttons>
              )}
              {props.userUSDTBalance > 0 && parseInt(props.remainingPoolDepositedSize_second) > 0 ? (
                <PopupDeposit poolSize={props.poolSize_second} maxPoolSize={props.maxPoolSize_second} remainingPoolDepositedSize={props.remainingPoolDepositedSize_second} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} stake={props.stake} approve={props.approve} pool_id={2} connectMetamask={props.connectMetamask} switchNetwork={props.switchNetwork} />
              ) : (
                <Buttons
                  className="textWhiteLargeButton cell2 center"
                  style={{
                    height: "40px",
                    width: "80px",
                    border: "0px",
                    color: "black",
                    padding: "5px 16px",
                    backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                    borderRadius: "22px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Deposit
                </Buttons>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {/* </div>
        </HorizontalScroll>
      </MediaQuery> */}

      <div className="lkBtSA" style={{ borderRadius: "20px" }}>
        {/* <Link to="/liquidity" className='exLink0'> */}
        <div
          className="card cardbody"
          style={{
            height: "100%",
            color: "white",
            minWidth: "300px",
            maxWidth: "490px"
          }}
        >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }}>
              <div className="float-left textWhite" style={{ fontSize: "1.1rem", color: "white" }}>
                Maker Liquidity Pool USDT (FXCore)
              </div>
              {/* <div className="float-right" style={{ marginLeft: "10px" }}>
                                  <ImgNextGen
                                      srcWebp={usdt}
                                      width="32px" height="32px" alt=""
                                  />
                              </div> */}
              <Link
                to={{
                  pathname: "/liquidity",
                  state: { from: "third_liquidity_pool" }
                }}
                className="exLink0"
              >
                <div className="float-right" style={{ marginLeft: "10px" }}>
                  <Buttons
                    className="textWhiteLargeButton cell2 center"
                    style={{
                      height: "35px",
                      width: "100%",
                      border: "0px",
                      color: "black",
                      padding: "5px 16px",
                      backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                      borderRadius: "22px"
                    }}
                    size="lg"
                  >
                    More Info
                  </Buttons>
                </div>
              </Link>
            </div>
            <div>
              <table>
                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Fx.utils.fromWei(props.poolSize_third, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                            /{" "}
                            {parseFloat(window.web3Fx.utils.fromWei(props.maxPoolSize_third, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate_second, "Ether") * 86400).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={fx}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="28px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Pool Size
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Yield / day
                    </td>
                  </tr>
                </tbody>

                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.accountLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {parseFloat(window.web3Fx.utils.fromWei(props.userStakedBalance_third, "mwei")).toLocaleString("en-US", {
                              maximumFractionDigits: 0
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen
                              srcWebp={usdt}
                              style={{
                                marginLeft: "6px",
                                marginRight: "0px"
                              }}
                              width="24px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <span>-</span>
                      )}
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {props.APR_second.toLocaleString("en-US", {
                              maximumFractionDigits: 2
                            })}{" "}
                            %
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      Your Deposit
                    </td>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      APR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </Link> */}

        {props.wallet || props.walletConnect ? (
          <div className="iqmhrB">
            <div className="OYMUv">
              <div className="eWMWa-D">
                {props.userEarnedRewardAmount_third >= 0 ? (
                  <span>
                    {parseFloat(window.web3Fx.utils.fromWei(props.userEarnedRewardAmount_third, "Ether")).toLocaleString("en-US", {
                      maximumFractionDigits: 2
                    })}
                  </span>
                ) : (
                  <span>TBD</span>
                )}
                <div>
                  <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "15px" }} width="28px" alt="" />
                </div>
              </div>
              <div className="iddTJh">Your rewards</div>
            </div>
            <div className="rowC">
              {props.userEarnedRewardAmount_third == 0 ? (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Claim
                </Buttons>
              ) : (
                <Buttons
                  className="buttonGradientBorder cell3 center"
                  style={{
                    height: "38px",
                    width: "80px",
                    marginRight: "10px"
                  }}
                  size="lg"
                  onClick={async () => {
                    console.log("3rd claim button clicked");
                    //await props.switchNetwork(process.env.REACT_APP_chainid_fxevm);
                    props.claimReward(process.env.REACT_APP_liquiditystakingV1_address_third, process.env.REACT_APP_chainid_fxevm, process.env.REACT_APP_networkid_fxevm);
                  }}
                >
                  <div className="linearGradientText center">Claim</div>
                </Buttons>
              )}
              {props.userUSDTBalance_third > 0 && parseInt(props.remainingPoolDepositedSize_third) > 0 ? (
                <PopupDeposit poolSize={props.poolSize_third} maxPoolSize={props.maxPoolSize_third} remainingPoolDepositedSize={props.remainingPoolDepositedSize_third} userUSDTBalance={props.userUSDTBalance_third} userStakedBalance={props.userStakedBalance_third} userUSDTStakingAllowance={props.userUSDTStakingAllowance_third} stake={props.stake} approve={props.approve} pool_id={3} connectMetamask={props.connectMetamask} switchNetwork={props.switchNetwork} />
              ) : (
                <Buttons
                  className="textWhiteLargeButton cell2 center"
                  style={{
                    height: "40px",
                    width: "80px",
                    border: "0px",
                    color: "black",
                    padding: "5px 16px",
                    backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                    borderRadius: "22px",
                    cursor: "not-allowed",
                    opacity: "0.5"
                  }}
                >
                  Deposit
                </Buttons>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {/* </div>
        </HorizontalScroll>
      </MediaQuery> */}

      <MediaQuery minWidth={981}>
        <div className="mr-auto" style={{ marginTop: "40px", color: "white", maxWidth: "400px" }}>
          <div className="card-body">
            <div className="textWhite mb-1" style={{ fontSize: "1.5rem", color: "white" }}>
              <b>Epoch</b>
            </div>
            <div style={{ color: "grey" }}>Each Epoch lasts 28 days.</div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={980}>
        <div className="mr-auto" style={{ marginTop: "30px", color: "white", maxWidth: "400px" }}>
          <div className="card-body">
            <div className="textWhite mb-1" style={{ fontSize: "1.5rem", color: "white" }}>
              <b>Epoch</b>
            </div>
            <div style={{ color: "grey" }}>Each Epoch lasts 28 days.</div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={981}>
        <div className="cCeSgm">
          <div className="card cardbody" style={{ marginBottom: "12px", height: "180px", color: "white" }}>
            <div className="card-body">
              <div style={{ marginBottom: "80px" }}>
                <div className="float-left textBlackLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                  Countdown
                </div>
              </div>
              <div>
                <table>
                  <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        {props.blockchainLoading ? (
                          <div
                            className="eWMWa-D"
                            style={{
                              fontSize: "1.25rem",
                              color: "white",
                              lineHeight: "1.5rem"
                            }}
                          >
                            <CountdownTimer targetDate={NOW_IN_MS + parseInt(props.poolTimeRemainingInCurrentEpoch * 1000)} />
                          </div>
                        ) : (
                          <span className="loader"></span>
                        )}
                      </td>
                    </tr>
                  </thead>
                  <tbody className="textBlackSmall" style={{ color: "white" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        until the next epoch on {props.blockchainLoading ? <span>{convertTimeStamp(props.poolEndOfCurrentEpoch)}</span> : <span>-</span>}.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="mr-auto card cardbody" style={{ marginBottom: "12px", height: "180px", color: "white" }}>
              <div className="card-body">
                <div style={{ marginBottom: "80px" }}>
                  <div className="float-left textBlackLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                    Reward Pool
                  </div>
                </div>
                <div className="center">
                  <table>
                    <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          {props.blockchainLoading ? (
                            <div
                              className="eWMWa-D"
                              style={{
                                fontSize: "1.25rem",
                                color: "white",
                                lineHeight: "1.5rem"
                              }}
                            >
                              <div>
                                {(parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate, "Ether") * props.poolEpochInterval) + parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate_second, "Ether") * props.poolEpochInterval_second)).toLocaleString("en-US", {
                                  maximumFractionDigits: 3
                                })}{" "}
                              </div>
                              <div className="JYkOF">
                                <ImgNextGen
                                  srcWebp={fx}
                                  style={{
                                    marginLeft: "6px",
                                    marginRight: "0px"
                                  }}
                                  width="28px"
                                  alt=""
                                />
                              </div>
                            </div>
                          ) : (
                            <span className="loader"></span>
                          )}
                        </td>
                      </tr>
                    </thead>
                    <tbody className="textBlackSmall" style={{ color: "white" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          will be distributed this epoch.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={980}>
        <div
          className="card cardbody"
          style={{
            marginBottom: "16px",
            height: "180px",
            minWidth: "300px",
            maxWidth: "490px",
            color: "white"
          }}
        >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }}>
              <div className="float-left textBlackLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                Countdown
              </div>
            </div>
            <div>
              <table>
                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <CountdownTimer targetDate={NOW_IN_MS + parseInt(props.poolTimeRemainingInCurrentEpoch * 1000)} />
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      until the next epoch on {props.blockchainLoading ? <span>{convertTimeStamp(props.poolEndOfCurrentEpoch)}</span> : <span>-</span>}.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div
          className="mr-auto card cardbody"
          style={{
            marginBottom: "16px",
            height: "180px",
            minWidth: "300px",
            maxWidth: "490px",
            color: "white"
          }}
        >
          <div className="card-body">
            <div style={{ marginBottom: "80px" }}>
              <div className="float-left textBlackLarge">Reward Pool</div>
            </div>
            <div className="center">
              <table>
                <thead className="textBlackSmall" style={{ color: "white", height: "35px" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      {props.blockchainLoading ? (
                        <div
                          className="eWMWa-D"
                          style={{
                            fontSize: "1.25rem",
                            color: "white",
                            lineHeight: "1.5rem"
                          }}
                        >
                          <div>
                            {(parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate, "Ether") * props.poolEpochInterval) + parseFloat(window.web3Eth.utils.fromWei(props.poolRewardRate_second, "Ether") * props.poolEpochInterval_second)).toLocaleString("en-US", {
                              maximumFractionDigits: 3
                            })}{" "}
                          </div>
                          <div className="JYkOF">
                            <ImgNextGen srcWebp={fx} style={{ marginLeft: "6px", marginRight: "0px" }} width="28px" alt="" />
                          </div>
                        </div>
                      ) : (
                        <span className="loader"></span>
                      )}
                    </td>
                  </tr>
                </thead>
                <tbody className="textBlackSmall" style={{ color: "white" }}>
                  <tr>
                    <td style={{ textAlign: "start" }} scope="col" width="120">
                      will be distributed this epoch.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </MediaQuery>

      <div
        className="mr-auto card cardbody"
        style={{
          marginTop: "5px",
          height: "100%",
          minWidth: "300px",
          width: "100%",
          color: "white"
        }}
      >
        <div className="card-body">
          <ul className="gradient-text" style={{ marginBottom: "0px" }}>
            <div className="gradient-text" style={{ marginTop: "0px", fontSize: "18px" }}>
              Things to note:
            </div>
            <li className="gradient-text" style={{ marginTop: "15px", fontSize: "15px" }}>
              ONLY private blockchain wallets can participate. Please do not send funds from an exchange.
            </li>
            <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
              There are no principal guarantees for this version of the MarginX Liquidity Pool.
            </li>
            <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
              $ETH is required to pay the gas fees for withdrawals.
            </li>
            <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
              Participants need to request for withdrawals manually on maker.marginx.io.
            </li>
            <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
              MarginX is not liable for any loss of funds due to user’s negligence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StakeMenu;
