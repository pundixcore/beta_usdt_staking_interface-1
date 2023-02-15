import React, { Component } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Buttons from "react-bootstrap/Button";
import "reactjs-popup/dist/index.css";
import "../App.css";

import PopupDeposit from "./PopupDeposit";
import PopupRequestWithdraw from "./PopupRequestWithdraw";
import PopupWithdraw from "./PopupWithdraw";
import CountdownTimer from "../CountdownTimer";
import ImgNextGen from "../ImgNextGen";
import usdt from "../images/usdt.svg";
import fx from "../images/fx.svg";

import { useLocation } from "react-router-dom";

function StakeLiquidity(props) {
  const location = useLocation();
  const { from } = location.state;

  if (from === "first_liquidity_pool") {
    const NOW_IN_MS = new Date().getTime();

    return (
      <div id="content" style={{ margin: "0", color: "#ff9a04" }}>
        <MediaQuery minWidth={1001}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className="exLink0">
              <div className="backButton center mr-3">&#8592;</div>
            </Link>
            <div style={{ width: "100%" }}>
              <label className="textWhite" style={{ marginTop: "25px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>Maker Liquidity Pool</b>
                </big>
              </label>
              <div className="" style={{ color: "grey" }}>
                Deposit and earn rewards for contributing to MarginX Market Maker Liquidity Pool.
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <Link to="/" className="exLink0">
            <div className="backButton center mr-3">&#8592;</div>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100%" }}>
              <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>Maker Liquidity Pool</b>
                </big>
              </label>
              <div className="" style={{ color: "grey" }}>
                Deposit and earn rewards for contributing to MarginX Market Maker Liquidity Pool.
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={601}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px"
            }}
          >
            <div
              style={{
                flex: "0 0 34rem",
                display: "flex",
                flexDirection: "column",
                width: "calc(50% - 1rem)"
              }}
            >
              <div className="blackBox">
                <div
                  className="card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    maxWidth: "265px",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Pool Size
                      </div>
                    </div>
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
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            Total deposits
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    maxWidth: "265px",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Yield
                      </div>
                    </div>
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
                                    width="25px"
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
                            Estimated yield / day
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="blackBox">
                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "20px" }}>
                  <div
                    className="ml-auto mr-auto card cardbody mr-2"
                    style={{
                      height: "160px",
                      maxWidth: "265px",
                      color: "white"
                    }}
                  >
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Deposited
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              {" "}
                              This pool accepts USDT (ERC-20)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userUSDTBalance > 0 ? (
                        <PopupDeposit userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} stake={props.stake} approve={props.approve} pool_id={1} />
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
                  ) : null}
                </div>

                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "20px" }}>
                  <div
                    className="ml-auto mr-auto card cardbody"
                    style={{
                      height: "160px",
                      maxWidth: "265px",
                      color: "white"
                    }}
                  >
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Earned
                        </div>
                      </div>
                      <table>
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
                                  {props.userEarnedRewardAmount >= 0 ? (
                                    <div>
                                      {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")).toLocaleString("en-US", {
                                        maximumFractionDigits: 2
                                      })}{" "}
                                    </div>
                                  ) : (
                                    <div>TBD</div>
                                  )}
                                  <div className="JYkOF">
                                    <ImgNextGen
                                      srcWebp={fx}
                                      style={{
                                        marginLeft: "6px",
                                        marginRight: "0px"
                                      }}
                                      width="25px"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              {" "}
                              Deposit to earn rewards
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userEarnedRewardAmount == 0 ? (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "38px",
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
                          Claim
                        </Buttons>
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "38px",
                            width: "80px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px"
                          }}
                          size="lg"
                          onClick={() => {
                            props.claimReward(process.env.REACT_APP_liquiditystakingV1_address);
                          }}
                        >
                          Claim
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>

              <div style={{ marginTop: "2.5rem", display: "block" }}>
                <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                  <big>
                    <b>Withdraws</b>
                  </big>
                </label>
                <div className="mb-4" style={{ color: "grey" }}>
                  View and manage your pending and available withdraws.
                </div>
                <div style={{ marginTop: "1.5rem", display: "block" }}>
                  <div className="blackBox">
                    <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                      <div
                        className="ml-auto mr-auto card cardbody"
                        style={{
                          height: "160px",
                          maxWidth: "265px",
                          color: "white"
                        }}
                      >
                        <div className="card-body">
                          <div style={{ marginBottom: "65px" }}>
                            <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                              Pending
                            </div>
                          </div>
                          <table>
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
                                        {parseFloat(window.web3Eth.utils.fromWei(props.userInactiveBalanceNextEpoch, "mWei")).toLocaleString("en-US", {
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
                                    <div>-</div>
                                  )}
                                </td>
                              </tr>
                            </thead>
                            <tbody className="textBlackSmall" style={{ color: "white" }}>
                              <tr>
                                <td style={{ textAlign: "start" }} scope="col" width="120">
                                  In requested withdraws
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {props.wallet || props.walletConnect ? (
                        <div className="iqmhrC">
                          {props.userActiveBalanceNextEpoch > 0 && parseInt(props.poolTimeRemainingInCurrentEpoch) > parseInt(props.poolBlackoutWindow) ? (
                            <PopupRequestWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch} poolSize={props.poolSize} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} userActiveBalanceNextEpoch={props.userActiveBalanceNextEpoch} requestWithdraw={props.requestWithdraw} poolTimeRemainingInCurrentEpoch={props.poolTimeRemainingInCurrentEpoch} poolBlackoutWindow={props.poolBlackoutWindow} pool_id={1} />
                          ) : (
                            <Buttons
                              className="textWhiteLargeButton cell2 center"
                              style={{
                                height: "40px",
                                width: "100px",
                                border: "0px",
                                color: "black",
                                padding: "5px 16px",
                                backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                                borderRadius: "22px",
                                cursor: "not-allowed",
                                opacity: "0.5"
                              }}
                            >
                              Request
                            </Buttons>
                          )}
                        </div>
                      ) : null}
                    </div>

                    <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                      <div
                        className="ml-auto mr-auto card cardbody"
                        style={{
                          height: "160px",
                          maxWidth: "265px",
                          color: "white"
                        }}
                      >
                        <div className="card-body">
                          <div style={{ marginBottom: "65px" }}>
                            <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                              Available
                            </div>
                          </div>
                          <table>
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
                                        {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mWei")).toLocaleString("en-US", {
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
                                    <div>-</div>
                                  )}
                                </td>
                              </tr>
                            </thead>
                            <tbody className="textBlackSmall" style={{ color: "white" }}>
                              <tr>
                                <td style={{ textAlign: "start" }} scope="col" width="120">
                                  Ready to withdraw
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {props.wallet || props.walletConnect ? (
                        <div className="iqmhrC">
                          {props.userWithdrawableAmount > 0 ? (
                            <PopupWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch} poolSize={props.poolSize} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} userWithdrawableAmount={props.userWithdrawableAmount} withdraw={props.withdraw} pool_id={1} />
                          ) : (
                            <Buttons
                              className="textWhiteLargeButton cell2 center"
                              style={{
                                height: "40px",
                                width: "100px",
                                border: "0px",
                                color: "black",
                                padding: "5px 16px",
                                backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                                borderRadius: "22px",
                                cursor: "not-allowed",
                                opacity: "0.5"
                              }}
                            >
                              Withdraw
                            </Buttons>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="blackBox">
                    <div
                      className="card cardbody"
                      style={{
                        marginBottom: "12px",
                        height: "160px",
                        maxWidth: "265px",
                        color: "white"
                      }}
                    >
                      <div className="card-body">
                        <div style={{ marginBottom: "65px" }}>
                          <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                            Blackout Window
                          </div>
                        </div>
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
                                    <CountdownTimer targetDate={NOW_IN_MS + props.timeRemainingNextBlackout * 1000} />
                                  </div>
                                ) : (
                                  <div className="loader"></div>
                                )}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="textBlackSmall" style={{ color: "white" }}>
                            <tr>
                              <td style={{ textAlign: "start" }} scope="col" width="120">
                                until next blackout window.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="card cardbody"
                      style={{
                        marginBottom: "12px",
                        height: "160px",
                        maxWidth: "265px",
                        color: "white"
                      }}
                    >
                      <div className="card-body">
                        <div style={{ marginBottom: "65px" }}>
                          <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                            Next Epoch
                          </div>
                        </div>
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
                                  <div className="loader"></div>
                                )}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="textBlackSmall" style={{ color: "white" }}>
                            <tr>
                              <td style={{ textAlign: "start" }} scope="col" width="120">
                                until the next epoch.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mr-auto card cardbody"
                style={{
                  marginTop: "0px",
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
                      There are no principal guarantees for this version of the Maker Liquidity Pool.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      $ETH is required to pay the gas fees for withdrawals.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      Participants need to request for withdrawals and claim their rewards manually on maker.marginx.io.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      MarginX is not be liable for any loss of funds due to user’s negligence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <MediaQuery minWidth={1001}>
              <div
                className="mr-auto card cardbody"
                style={{
                  marginLeft: "15px",
                  marginBottom: "0px",
                  height: "100%",
                  color: "white",
                  width: "calc(50% - 1rem)"
                }}
              >
                <div className="card-body">
                  <div style={{ paddingBottom: "10px" }}>
                    <div className="textBlackSmall" style={{ color: "white", marginBottom: "10px" }}>
                      <div
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        ABOUT
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div style={{ textAlign: "start" }} width="120">
                        MarginX Maker Liquidity Pool is a dedicated fund handled by professional market makers, to provide liquidity and depth on MarginX, and in return to help earn maker rewards.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }} width="120">
                        The mechanics are simple. Users deposit funds into a smart contract on Ethereum which bridges the funds automatically into f(x)Core and, subsequently, MarginX.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }} width="120">
                        Only whitelisted and verified market makers can ‘borrow’ these funds from the liquidity pool to trade, and the funds can only be deployed for market making through a dedicated MarginX wallet address.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        RISKS
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div style={{ textAlign: "start" }} width="120">
                        Market makers will refer to an external price oracle and the statistical distribution order to fill in the order book depth.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }} width="120">
                        Statistically speaking, market making is a profitable trading strategy as it earns the spread for every transaction. However, the team has no track record and historical statistics to support this assumption. Thus, there will be neither promised returns nor principal guarantees for this beta version of the Maker Liquidity Pool.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }} width="120">
                        Participants deposit at their own risk. Due to requests for privacy by the external market makers, the team will not reveal their identities at this stage as well.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        scope="col"
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        REWARDS
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        The Maker Liquidity Pool serves as an upgrade to the Maker Incentive section of the 100-Day Incentive Program. All participants of the Maker Liquidity Pool shall be rewarded in $FX, to an average 9,000 $FX daily (remaining balance from Maker Incentive section).
                      </div>
                      <br />
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        Users will receive $FX, distributed continuously according to each user's portion of the total USDT in the pool.
                      </div>
                      <br />
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        Users must request to withdraw USDT at least 14 days before the current epoch ends. If users do not request to withdraw, the deposited USDT is rolled over into the next epoch.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        scope="col"
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        DISCUSS
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        Need help? Post your question on our forum.
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          marginTop: "15px"
                        }}
                      >
                        <Buttons
                          className="textWhiteLargeButton cell2 center mr-2"
                          style={{
                            height: "32px",
                            width: "30%",
                            minWidth: "115px",
                            maxWidth: "122px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundColor: "white",
                            borderRadius: "22px"
                          }}
                          size="lg"
                          onClick={() => {
                            window.open(`https://forum.starscan.io/t/proposal-of-maker-liquidity-pool-usdt-erc-20-beta/4955`, "_blank");
                          }}
                        >
                          &#8599; Forums
                        </Buttons>
                        {/* <Buttons className="textWhiteLargeButton cell2 center" style={{ height: '32px', width: '30%', maxWidth: '122px', border: '0px solid white', color: 'white', padding: "5px 16px", backgroundColor: "#3a3c44", borderRadius: '22px' }} size="lg" onClick={() => {
                                                window.open(`https://discord.com/invite/7yUjqadZFq`, '_blank')
                                            }}>&#8599; Discord</Buttons> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MediaQuery>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
          <div style={{ justifyContent: "space-between", marginTop: "32px" }}>
            <div
              className="ml-auto mr-auto card cardbody"
              style={{
                marginBottom: "12px",
                height: "160px",
                width: "100%",
                color: "white"
              }}
            >
              <div className="card-body">
                <div style={{ marginBottom: "65px" }}>
                  <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                    Pool Size
                  </div>
                </div>
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
                    </tr>
                  </thead>
                  <tbody className="textBlackSmall" style={{ color: "white" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        Total deposits
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="ml-auto mr-auto card cardbody"
              style={{
                marginBottom: "12px",
                height: "160px",
                width: "100%",
                color: "white"
              }}
            >
              <div className="card-body">
                <div style={{ marginBottom: "65px" }}>
                  <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                    Yield
                  </div>
                </div>
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
                                width="25px"
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
                        Estimated yield / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
              <div className="ml-auto mr-auto card cardbody mr-2" style={{ height: "160px", width: "100%", color: "white" }}>
                <div className="card-body">
                  <div style={{ marginBottom: "65px" }}>
                    <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                      Deposited
                    </div>
                  </div>
                  <table>
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
                                {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance, "mWei")).toLocaleString("en-US", {
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
                            <div>-</div>
                          )}
                        </td>
                      </tr>
                    </thead>
                    <tbody className="textBlackSmall" style={{ color: "white" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          {" "}
                          This pool accepts USDT (ERC-20)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {props.wallet || props.walletConnect ? (
                <div className="iqmhrC">
                  {props.userUSDTBalance > 0 ? (
                    <PopupDeposit userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} stake={props.stake} approve={props.approve} pool_id={1} />
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
              ) : null}
            </div>
            <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
              <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                <div className="card-body">
                  <div style={{ marginBottom: "65px" }}>
                    <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                      Earned
                    </div>
                  </div>
                  <table>
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
                              {props.userEarnedRewardAmount >= 0 ? (
                                <div>
                                  {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount, "Ether")).toLocaleString("en-US", {
                                    maximumFractionDigits: 2
                                  })}{" "}
                                </div>
                              ) : (
                                <div>TBD</div>
                              )}
                              <div className="JYkOF">
                                <ImgNextGen
                                  srcWebp={fx}
                                  style={{
                                    marginLeft: "6px",
                                    marginRight: "0px"
                                  }}
                                  width="25px"
                                  alt=""
                                />
                              </div>
                            </div>
                          ) : (
                            <div>-</div>
                          )}
                        </td>
                      </tr>
                    </thead>
                    <tbody className="textBlackSmall" style={{ color: "white" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          {" "}
                          Deposit to earn rewards
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {props.wallet || props.walletConnect ? (
                <div className="iqmhrC">
                  {props.userEarnedRewardAmount == 0 ? (
                    <Buttons
                      className="textWhiteLargeButton cell2 center"
                      style={{
                        height: "38px",
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
                      Claim
                    </Buttons>
                  ) : (
                    <Buttons
                      className="textWhiteLargeButton cell2 center"
                      style={{
                        height: "38px",
                        width: "80px",
                        border: "0px",
                        color: "black",
                        padding: "5px 16px",
                        backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                        borderRadius: "22px"
                      }}
                      size="lg"
                      onClick={() => {
                        props.claimReward(process.env.REACT_APP_liquiditystakingV1_address);
                      }}
                    >
                      Claim
                    </Buttons>
                  )}
                </div>
              ) : null}
            </div>

            <div style={{ marginTop: "2.5rem", display: "block" }}>
              <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>Withdraws</b>
                </big>
              </label>
              <div className="mb-4" style={{ color: "grey" }}>
                View and manage your pending and available withdraws.
              </div>
              <div style={{ marginTop: "1.5rem", display: "block" }}>
                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                  <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Pending
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userInactiveBalanceNextEpoch, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              In requested withdraws
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userActiveBalanceNextEpoch > 0 ? (
                        <PopupRequestWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch} poolSize={props.poolSize} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} userActiveBalanceNextEpoch={props.userActiveBalanceNextEpoch} requestWithdraw={props.requestWithdraw} pool_id={1} />
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "40px",
                            width: "100px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px",
                            cursor: "not-allowed",
                            opacity: "0.5"
                          }}
                        >
                          Request
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>

                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                  <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Available
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              Ready to withdraw
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userWithdrawableAmount > 0 ? (
                        <PopupWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch} poolSize={props.poolSize} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance} userUSDTStakingAllowance={props.userUSDTStakingAllowance} userWithdrawableAmount={props.userWithdrawableAmount} withdraw={props.withdraw} pool_id={1} />
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "40px",
                            width: "100px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px",
                            cursor: "not-allowed",
                            opacity: "0.5"
                          }}
                        >
                          Withdraw
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>

                <div
                  className="ml-auto mr-auto card cardbody mr-2"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    width: "100%",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Blackout Window
                      </div>
                    </div>
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
                                <CountdownTimer targetDate={NOW_IN_MS + props.timeRemainingNextBlackout * 1000} />
                              </div>
                            ) : (
                              <div className="loader"></div>
                            )}
                          </td>
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            until next blackout window.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="ml-auto mr-auto card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    width: "100%",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Next Epoch
                      </div>
                    </div>
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
                              <div className="loader"></div>
                            )}
                          </td>
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            until the next epoch.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="mr-auto card cardbody"
                  style={{
                    marginTop: "0px",
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
                        There are no principal guarantees for this version of the Maker Liquidity Pool.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        $ETH is required to pay the gas fees for withdrawals.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        Participants need to request for withdrawals and claim their rewards manually on maker.marginx.io.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        MarginX is not be liable for any loss of funds due to user’s negligence.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <div
            className="mr-auto card cardbody"
            style={{
              marginTop: "12px",
              marginBottom: "12px",
              height: "100%",
              color: "white"
            }}
          >
            <div className="card-body">
              <div style={{ paddingBottom: "10px" }}>
                <div className="textBlackSmall" style={{ color: "white", marginBottom: "10px" }}>
                  <div
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    ABOUT
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div style={{ textAlign: "start" }} width="120">
                    MarginX Maker Liquidity Pool is a dedicated fund handled by professional market makers, to provide liquidity and depth on MarginX, and in return to help earn maker rewards.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }} width="120">
                    The mechanics are simple. Users deposit funds into a smart contract on Ethereum which bridges the funds automatically into f(x)Core and, subsequently, MarginX.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }} width="120">
                    Only whitelisted and verified market makers can ‘borrow’ these funds from the liquidity pool to trade, and the funds can only be deployed for market making through a dedicated MarginX wallet address.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    RISKS
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div style={{ textAlign: "start" }} width="120">
                    Market makers will refer to an external price oracle and the statistical distribution order to fill in the order book depth.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }} width="120">
                    Statistically speaking, market making is a profitable trading strategy as it earns the spread for every transaction. However, the team has no track record and historical statistics to support this assumption. Thus, there will be neither promised returns nor principal guarantees for this beta version of the Maker Liquidity Pool.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }} width="120">
                    Participants deposit at their own risk. Due to requests for privacy by the external market makers, the team will not reveal their identities at this stage as well.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    scope="col"
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    REWARDS
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                    The Maker Liquidity Pool serves as an upgrade to the Maker Incentive section of the 100-Day Incentive Program. All participants of the Maker Liquidity Pool shall be rewarded in $FX, to an average 9,000 $FX daily (remaining balance from Maker Incentive section).
                  </div>
                  <br />
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                    Users will receive $FX, distributed continuously according to each user's portion of the total USDT in the pool.
                  </div>
                  <br />
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                    Users must request to withdraw USDT at least 14 days before the current epoch ends. If users do not request to withdraw, the deposited USDT is rolled over into the next epoch.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    scope="col"
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    DISCUSS
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                    Need help? Post your question on our forum.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "15px"
                    }}
                  >
                    <Buttons
                      className="textWhiteLargeButton cell2 center mr-2"
                      style={{
                        height: "32px",
                        width: "30%",
                        minWidth: "115px",
                        maxWidth: "122px",
                        border: "0px",
                        color: "black",
                        padding: "5px 16px",
                        backgroundColor: "white",
                        borderRadius: "22px"
                      }}
                      size="lg"
                      onClick={() => {
                        window.open(`https://forum.starscan.io/t/proposal-of-maker-liquidity-pool-usdt-erc-20-beta/4955`, "_blank");
                      }}
                    >
                      &#8599; Forums
                    </Buttons>
                    {/* <Buttons className="textWhiteLargeButton cell2 center" style={{ height: '32px', width: '30%', maxWidth: '122px', border: '0px solid white', color: 'white', padding: "5px 16px", backgroundColor: "#3a3c44", borderRadius: '22px' }} size="lg" onClick={() => {
                                        window.open(`https://discord.com/invite/7yUjqadZFq`, '_blank')
                                    }}>&#8599; Discord</Buttons> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  } else if (from === "second_liquidity_pool") {
    // second pool
    const NOW_IN_MS = new Date().getTime();

    return (
      <div id="content" style={{ margin: "0", color: "#ff9a04" }}>
        <MediaQuery minWidth={1001}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className="exLink0">
              <div className="backButton center mr-3">&#8592;</div>
            </Link>
            <div style={{ width: "100%" }}>
              <label className="textWhite" style={{ marginTop: "25px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>AI Bots Trading Pool</b>
                </big>
              </label>
              <div className="" style={{ color: "grey" }}>
                Deposit and earn rewards for participating in AI Bots Trading on MarginX.
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <Link to="/" className="exLink0">
            <div className="backButton center mr-3">&#8592;</div>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100%" }}>
              <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>AI Bots Trading Pool</b>
                </big>
              </label>
              <div className="" style={{ color: "grey" }}>
                Deposit and earn rewards for participating in AI Bots Trading on MarginX.
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={601}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "32px"
            }}
          >
            <div
              style={{
                flex: "0 0 34rem",
                display: "flex",
                flexDirection: "column",
                width: "calc(50% - 1rem)"
              }}
            >
              <div className="blackBox">
                <div
                  className="card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    maxWidth: "265px",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Pool Size
                      </div>
                    </div>
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
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            Total deposits
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    maxWidth: "265px",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Yield
                      </div>
                    </div>
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
                                    width="25px"
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
                            Estimated yield / day
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="blackBox">
                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "20px" }}>
                  <div
                    className="ml-auto mr-auto card cardbody mr-2"
                    style={{
                      height: "160px",
                      maxWidth: "265px",
                      color: "white"
                    }}
                  >
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Deposited
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance_second, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              {" "}
                              This pool accepts USDT (ERC-20)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userUSDTBalance > 0 ? (
                        <PopupDeposit userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} stake={props.stake} approve={props.approve} pool_id={2} />
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
                  ) : null}
                </div>

                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "20px" }}>
                  <div
                    className="ml-auto mr-auto card cardbody"
                    style={{
                      height: "160px",
                      maxWidth: "265px",
                      color: "white"
                    }}
                  >
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Earned
                        </div>
                      </div>
                      <table>
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
                                  {props.userEarnedRewardAmount_second >= 0 ? (
                                    <div>
                                      {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")).toLocaleString("en-US", {
                                        maximumFractionDigits: 2
                                      })}{" "}
                                    </div>
                                  ) : (
                                    <div>TBD</div>
                                  )}
                                  <div className="JYkOF">
                                    <ImgNextGen
                                      srcWebp={fx}
                                      style={{
                                        marginLeft: "6px",
                                        marginRight: "0px"
                                      }}
                                      width="25px"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              ) : (
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              {" "}
                              Deposit to earn rewards
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userEarnedRewardAmount_second == 0 ? (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "38px",
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
                          Claim
                        </Buttons>
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "38px",
                            width: "80px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px"
                          }}
                          size="lg"
                          onClick={() => {
                            props.claimReward(process.env.REACT_APP_liquiditystakingV1_address_second);
                          }}
                        >
                          Claim
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>

              <div style={{ marginTop: "2.5rem", display: "block" }}>
                <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                  <big>
                    <b>Withdraws</b>
                  </big>
                </label>
                <div className="mb-4" style={{ color: "grey" }}>
                  View and manage your pending and available withdraws.
                </div>
                <div style={{ marginTop: "1.5rem", display: "block" }}>
                  <div className="blackBox">
                    <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                      <div
                        className="ml-auto mr-auto card cardbody"
                        style={{
                          height: "160px",
                          maxWidth: "265px",
                          color: "white"
                        }}
                      >
                        <div className="card-body">
                          <div style={{ marginBottom: "65px" }}>
                            <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                              Pending
                            </div>
                          </div>
                          <table>
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
                                        {parseFloat(window.web3Eth.utils.fromWei(props.userInactiveBalanceNextEpoch_second, "mWei")).toLocaleString("en-US", {
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
                                    <div>-</div>
                                  )}
                                </td>
                              </tr>
                            </thead>
                            <tbody className="textBlackSmall" style={{ color: "white" }}>
                              <tr>
                                <td style={{ textAlign: "start" }} scope="col" width="120">
                                  In requested withdraws
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {props.wallet || props.walletConnect ? (
                        <div className="iqmhrC">
                          {props.userActiveBalanceNextEpoch_second > 0 && parseInt(props.poolTimeRemainingInCurrentEpoch_second) > parseInt(props.poolBlackoutWindow_second) ? (
                            <PopupRequestWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch_second} poolSize={props.poolSize_second} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} userActiveBalanceNextEpoch={props.userActiveBalanceNextEpoch_second} requestWithdraw={props.requestWithdraw} poolTimeRemainingInCurrentEpoch={props.poolTimeRemainingInCurrentEpoch_second} poolBlackoutWindow={props.poolBlackoutWindow_second} pool_id={2} />
                          ) : (
                            <Buttons
                              className="textWhiteLargeButton cell2 center"
                              style={{
                                height: "40px",
                                width: "100px",
                                border: "0px",
                                color: "black",
                                padding: "5px 16px",
                                backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                                borderRadius: "22px",
                                cursor: "not-allowed",
                                opacity: "0.5"
                              }}
                            >
                              Request
                            </Buttons>
                          )}
                        </div>
                      ) : null}
                    </div>

                    <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                      <div
                        className="ml-auto mr-auto card cardbody"
                        style={{
                          height: "160px",
                          maxWidth: "265px",
                          color: "white"
                        }}
                      >
                        <div className="card-body">
                          <div style={{ marginBottom: "65px" }}>
                            <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                              Available
                            </div>
                          </div>
                          <table>
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
                                        {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount_second, "mWei")).toLocaleString("en-US", {
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
                                    <div>-</div>
                                  )}
                                </td>
                              </tr>
                            </thead>
                            <tbody className="textBlackSmall" style={{ color: "white" }}>
                              <tr>
                                <td style={{ textAlign: "start" }} scope="col" width="120">
                                  Ready to withdraw
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {props.wallet || props.walletConnect ? (
                        <div className="iqmhrC">
                          {props.userWithdrawableAmount_second > 0 ? (
                            <PopupWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch_second} poolSize={props.poolSize_second} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} userWithdrawableAmount={props.userWithdrawableAmount_second} withdraw={props.withdraw} pool_id={2} />
                          ) : (
                            <Buttons
                              className="textWhiteLargeButton cell2 center"
                              style={{
                                height: "40px",
                                width: "100px",
                                border: "0px",
                                color: "black",
                                padding: "5px 16px",
                                backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                                borderRadius: "22px",
                                cursor: "not-allowed",
                                opacity: "0.5"
                              }}
                            >
                              Withdraw
                            </Buttons>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="blackBox">
                    <div
                      className="card cardbody"
                      style={{
                        marginBottom: "12px",
                        height: "160px",
                        maxWidth: "265px",
                        color: "white"
                      }}
                    >
                      <div className="card-body">
                        <div style={{ marginBottom: "65px" }}>
                          <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                            Blackout Window
                          </div>
                        </div>
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
                                    <CountdownTimer targetDate={NOW_IN_MS + props.timeRemainingNextBlackout_second * 1000} />
                                  </div>
                                ) : (
                                  <div className="loader"></div>
                                )}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="textBlackSmall" style={{ color: "white" }}>
                            <tr>
                              <td style={{ textAlign: "start" }} scope="col" width="120">
                                until next blackout window.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="card cardbody"
                      style={{
                        marginBottom: "12px",
                        height: "160px",
                        maxWidth: "265px",
                        color: "white"
                      }}
                    >
                      <div className="card-body">
                        <div style={{ marginBottom: "65px" }}>
                          <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                            Next Epoch
                          </div>
                        </div>
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
                                    <CountdownTimer targetDate={NOW_IN_MS + parseInt(props.poolTimeRemainingInCurrentEpoch_second * 1000)} />
                                  </div>
                                ) : (
                                  <div className="loader"></div>
                                )}
                              </td>
                            </tr>
                          </thead>
                          <tbody className="textBlackSmall" style={{ color: "white" }}>
                            <tr>
                              <td style={{ textAlign: "start" }} scope="col" width="120">
                                until the next epoch.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mr-auto card cardbody"
                style={{
                  marginTop: "0px",
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
                      There are no principal guarantees for this version of MarginX AI Bots Trading Pool.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      $ETH is required to pay the gas fees for withdrawals.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      Participants need to request for withdrawals and claim their rewards manually on maker.marginx.io.
                    </li>
                    <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                      MarginX is not be liable for any loss of funds due to user’s negligence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <MediaQuery minWidth={1001}>
              <div
                className="mr-auto card cardbody"
                style={{
                  marginLeft: "15px",
                  marginBottom: "0px",
                  height: "100%",
                  color: "white",
                  width: "calc(50% - 1rem)"
                }}
              >
                <div className="card-body">
                  <div style={{ paddingBottom: "10px" }}>
                    <div className="textBlackSmall" style={{ color: "white", marginBottom: "10px" }}>
                      <div
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        ABOUT
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div style={{ textAlign: "start" }}>
                        MarginX AI Bots Trading Pool is a way to allow participants deposit their funds into a smart contract on Ethereum, and let fund managers (i.e. a series of artificial intelligence trading algorithms) deploy and run trading strategies on their behalf.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }}>
                        To be more specific, this feature uses machine learning frameworks to analyze millions of data points and execute trades at the optimal price with a specific strategy.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        INSURANCE
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div style={{ textAlign: "start" }} width="120">
                        Despite the fact that the fund managers of the pool can only deploy on MarginX (they cannot execute a rug pull), an insurance mechanic has to be put in place, since these fund managers have full control over participants’ funds right after they have made their deposits. To balance and protect the participants’ interests, an insurance pool shall be implemented.
                      </div>
                      <br />
                      <div style={{ textAlign: "start" }} width="120">
                        An insurance pool is a sum of money provided by the fund manager into an escrow account, which acts as a safety net or insurance fund for participants. If the loss of the pool exceeds the insurance threshold (15%), the smart contract will compensate the affected participants by deducting from the insurance pool. However, in any event, the fund manager shall not be liable for any more compensation than the total amount of the insurance pool, even if the loss is greater than the insurance pool.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        scope="col"
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        REWARDS
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        To encourage participation of the AI Bots Trading Pool, all participants will receive daily $FX rewards proportional to the amount of USDT they deposit, against the total amount of USDT in the pool. The total amount of $FX rewards to be distributed daily for the AI Bots Trading Pool is 3,000 $FX.
                      </div>
                    </div>
                  </div>

                  <div className="borderTop">
                    <div
                      className="textBlackSmall"
                      style={{
                        color: "white",
                        paddingTop: "15px",
                        marginBottom: "10px"
                      }}
                    >
                      <div
                        scope="col"
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          color: "silver"
                        }}
                        width="120"
                      >
                        DISCUSS
                      </div>
                    </div>
                    <div className="textBlackSmall" style={{ color: "white" }}>
                      <div scope="col" style={{ textAlign: "start" }} width="120">
                        Need help? Post your question on our forum.
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          marginTop: "15px"
                        }}
                      >
                        <Buttons
                          className="textWhiteLargeButton cell2 center mr-2"
                          style={{
                            height: "32px",
                            width: "30%",
                            minWidth: "115px",
                            maxWidth: "122px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundColor: "white",
                            borderRadius: "22px"
                          }}
                          size="lg"
                          onClick={() => {
                            window.open(`https://forum.starscan.io/t/marginx-ai-bots-trading-pool-usdt-erc20-beta/5053`, "_blank");
                          }}
                        >
                          &#8599; Forums
                        </Buttons>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MediaQuery>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
          <div style={{ justifyContent: "space-between", marginTop: "32px" }}>
            <div
              className="ml-auto mr-auto card cardbody"
              style={{
                marginBottom: "12px",
                height: "160px",
                width: "100%",
                color: "white"
              }}
            >
              <div className="card-body">
                <div style={{ marginBottom: "65px" }}>
                  <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                    Pool Size
                  </div>
                </div>
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
                    </tr>
                  </thead>
                  <tbody className="textBlackSmall" style={{ color: "white" }}>
                    <tr>
                      <td style={{ textAlign: "start" }} scope="col" width="120">
                        Total deposits
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="ml-auto mr-auto card cardbody"
              style={{
                marginBottom: "12px",
                height: "160px",
                width: "100%",
                color: "white"
              }}
            >
              <div className="card-body">
                <div style={{ marginBottom: "65px" }}>
                  <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                    Yield
                  </div>
                </div>
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
                                width="25px"
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
                        Estimated yield / day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
              <div className="ml-auto mr-auto card cardbody mr-2" style={{ height: "160px", width: "100%", color: "white" }}>
                <div className="card-body">
                  <div style={{ marginBottom: "65px" }}>
                    <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                      Deposited
                    </div>
                  </div>
                  <table>
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
                                {parseFloat(window.web3Eth.utils.fromWei(props.userStakedBalance_second, "mWei")).toLocaleString("en-US", {
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
                            <div>-</div>
                          )}
                        </td>
                      </tr>
                    </thead>
                    <tbody className="textBlackSmall" style={{ color: "white" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          {" "}
                          This pool accepts USDT (ERC-20)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {props.wallet || props.walletConnect ? (
                <div className="iqmhrC">
                  {props.userUSDTBalance > 0 ? (
                    <PopupDeposit userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} stake={props.stake} approve={props.approve} pool_id={2} />
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
              ) : null}
            </div>
            <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
              <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                <div className="card-body">
                  <div style={{ marginBottom: "65px" }}>
                    <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                      Earned
                    </div>
                  </div>
                  <table>
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
                              {props.userEarnedRewardAmount_second >= 0 ? (
                                <div>
                                  {parseFloat(window.web3Eth.utils.fromWei(props.userEarnedRewardAmount_second, "Ether")).toLocaleString("en-US", {
                                    maximumFractionDigits: 2
                                  })}{" "}
                                </div>
                              ) : (
                                <div>TBD</div>
                              )}
                              <div className="JYkOF">
                                <ImgNextGen
                                  srcWebp={fx}
                                  style={{
                                    marginLeft: "6px",
                                    marginRight: "0px"
                                  }}
                                  width="25px"
                                  alt=""
                                />
                              </div>
                            </div>
                          ) : (
                            <div>-</div>
                          )}
                        </td>
                      </tr>
                    </thead>
                    <tbody className="textBlackSmall" style={{ color: "white" }}>
                      <tr>
                        <td style={{ textAlign: "start" }} scope="col" width="120">
                          {" "}
                          Deposit to earn rewards
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {props.wallet || props.walletConnect ? (
                <div className="iqmhrC">
                  {props.userEarnedRewardAmount_second == 0 ? (
                    <Buttons
                      className="textWhiteLargeButton cell2 center"
                      style={{
                        height: "38px",
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
                      Claim
                    </Buttons>
                  ) : (
                    <Buttons
                      className="textWhiteLargeButton cell2 center"
                      style={{
                        height: "38px",
                        width: "80px",
                        border: "0px",
                        color: "black",
                        padding: "5px 16px",
                        backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                        borderRadius: "22px"
                      }}
                      size="lg"
                      onClick={() => {
                        props.claimReward(process.env.REACT_APP_liquiditystakingV1_address_second);
                      }}
                    >
                      Claim
                    </Buttons>
                  )}
                </div>
              ) : null}
            </div>

            <div style={{ marginTop: "2.5rem", display: "block" }}>
              <label className="textWhite" style={{ marginTop: "5px", fontSize: "22px", color: "white" }}>
                <big>
                  <b>Withdraws</b>
                </big>
              </label>
              <div className="mb-4" style={{ color: "grey" }}>
                View and manage your pending and available withdraws.
              </div>
              <div style={{ marginTop: "1.5rem", display: "block" }}>
                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                  <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Pending
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userInactiveBalanceNextEpoch_second, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              In requested withdraws
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userActiveBalanceNextEpoch_second > 0 ? (
                        <PopupRequestWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch_second} poolSize={props.poolSize_second} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} userActiveBalanceNextEpoch={props.userActiveBalanceNextEpoch_second} requestWithdraw={props.requestWithdraw} pool_id={2} />
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "40px",
                            width: "100px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px",
                            cursor: "not-allowed",
                            opacity: "0.5"
                          }}
                        >
                          Request
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>

                <div className="lkBtSA" style={{ borderRadius: "20px", marginBottom: "12px" }}>
                  <div className="ml-auto mr-auto card cardbody" style={{ height: "160px", width: "100%", color: "white" }}>
                    <div className="card-body">
                      <div style={{ marginBottom: "65px" }}>
                        <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                          Available
                        </div>
                      </div>
                      <table>
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
                                    {parseFloat(window.web3Eth.utils.fromWei(props.userWithdrawableAmount_second, "mWei")).toLocaleString("en-US", {
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
                                <div>-</div>
                              )}
                            </td>
                          </tr>
                        </thead>
                        <tbody className="textBlackSmall" style={{ color: "white" }}>
                          <tr>
                            <td style={{ textAlign: "start" }} scope="col" width="120">
                              Ready to withdraw
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {props.wallet || props.walletConnect ? (
                    <div className="iqmhrC">
                      {props.userWithdrawableAmount_second > 0 ? (
                        <PopupWithdraw poolEndOfCurrentEpoch={props.poolEndOfCurrentEpoch_second} poolSize={props.poolSize_second} userUSDTBalance={props.userUSDTBalance} userStakedBalance={props.userStakedBalance_second} userUSDTStakingAllowance={props.userUSDTStakingAllowance_second} userWithdrawableAmount={props.userWithdrawableAmount_second} withdraw={props.withdraw} pool_id={2} />
                      ) : (
                        <Buttons
                          className="textWhiteLargeButton cell2 center"
                          style={{
                            height: "40px",
                            width: "100px",
                            border: "0px",
                            color: "black",
                            padding: "5px 16px",
                            backgroundImage: "linear-gradient(90deg, #18eed8 1%, #a6f616 100%)",
                            borderRadius: "22px",
                            cursor: "not-allowed",
                            opacity: "0.5"
                          }}
                        >
                          Withdraw
                        </Buttons>
                      )}
                    </div>
                  ) : null}
                </div>

                <div
                  className="ml-auto mr-auto card cardbody mr-2"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    width: "100%",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Blackout Window
                      </div>
                    </div>
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
                                <CountdownTimer targetDate={NOW_IN_MS + props.timeRemainingNextBlackout_second * 1000} />
                              </div>
                            ) : (
                              <div className="loader"></div>
                            )}
                          </td>
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            until next blackout window.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="ml-auto mr-auto card cardbody"
                  style={{
                    marginBottom: "12px",
                    height: "160px",
                    width: "100%",
                    color: "white"
                  }}
                >
                  <div className="card-body">
                    <div style={{ marginBottom: "65px" }}>
                      <div className="float-left textWhiteLarge" style={{ fontSize: "1.25rem", color: "white" }}>
                        Next Epoch
                      </div>
                    </div>
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
                                <CountdownTimer targetDate={NOW_IN_MS + parseInt(props.poolTimeRemainingInCurrentEpoch_second * 1000)} />
                              </div>
                            ) : (
                              <div className="loader"></div>
                            )}
                          </td>
                        </tr>
                      </thead>
                      <tbody className="textBlackSmall" style={{ color: "white" }}>
                        <tr>
                          <td style={{ textAlign: "start" }} scope="col" width="120">
                            until the next epoch.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="mr-auto card cardbody"
                  style={{
                    marginTop: "0px",
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
                        There are no principal guarantees for this version of MarginX AI Bots Trading Pool.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        $ETH is required to pay the gas fees for withdrawals.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        Participants need to request for withdrawals and claim their rewards manually on maker.marginx.io.
                      </li>
                      <li className="gradient-text" style={{ marginTop: "5px", fontSize: "15px" }}>
                        MarginX is not be liable for any loss of funds due to user’s negligence.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={1000}>
          <div
            className="mr-auto card cardbody"
            style={{
              marginTop: "12px",
              marginBottom: "12px",
              height: "100%",
              color: "white"
            }}
          >
            <div className="card-body">
              <div style={{ paddingBottom: "10px" }}>
                <div className="textBlackSmall" style={{ color: "white", marginBottom: "10px" }}>
                  <div
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    ABOUT
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div style={{ textAlign: "start" }}>
                    MarginX AI Bots Trading Pool is a way to allow participants deposit their funds into a smart contract on Ethereum, and let fund managers (i.e. a series of artificial intelligence trading algorithms) deploy and run trading strategies on their behalf.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }}>
                    To be more specific, this feature uses machine learning frameworks to analyze millions of data points and execute trades at the optimal price with a specific strategy.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    INSURANCE
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div style={{ textAlign: "start" }} width="120">
                    Despite the fact that the fund managers of the pool can only deploy on MarginX (they cannot execute a rug pull), an insurance mechanic has to be put in place, since these fund managers have full control over participants’ funds right after they have made their deposits. To balance and protect the participants’ interests, an insurance pool shall be implemented.
                  </div>
                  <br />
                  <div style={{ textAlign: "start" }} width="120">
                    An insurance pool is a sum of money provided by the fund manager into an escrow account, which acts as a safety net or insurance fund for participants. If the loss of the pool exceeds the insurance threshold (15%), the smart contract will compensate the affected participants by deducting from the insurance pool. However, in any event, the fund manager shall not be liable for any more compensation than the total amount of the insurance pool, even if the loss is greater than the insurance pool.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    scope="col"
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    REWARDS
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                  To encourage participation of the AI Bots Trading Pool, all participants will receive daily $FX rewards proportional to the amount of USDT they deposit, against the total amount of USDT in the pool. The total amount of $FX rewards to be distributed daily for the AI Bots Trading Pool is 3,000 $FX.
                  </div>
                </div>
              </div>

              <div className="borderTop">
                <div
                  className="textBlackSmall"
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "10px"
                  }}
                >
                  <div
                    scope="col"
                    style={{
                      textAlign: "start",
                      fontSize: "12px",
                      color: "silver"
                    }}
                    width="120"
                  >
                    DISCUSS
                  </div>
                </div>
                <div className="textBlackSmall" style={{ color: "white" }}>
                  <div scope="col" style={{ textAlign: "start" }} width="120">
                    Need help? Post your question on our forum.
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      marginTop: "15px"
                    }}
                  >
                    <Buttons
                      className="textWhiteLargeButton cell2 center mr-2"
                      style={{
                        height: "32px",
                        width: "30%",
                        minWidth: "115px",
                        maxWidth: "122px",
                        border: "0px",
                        color: "black",
                        padding: "5px 16px",
                        backgroundColor: "white",
                        borderRadius: "22px"
                      }}
                      size="lg"
                      onClick={() => {
                        window.open(`https://forum.starscan.io/t/marginx-ai-bots-trading-pool-usdt-erc20-beta/5053`, "_blank");
                      }}
                    >
                      &#8599; Forums
                    </Buttons>
                    {/* <Buttons className="textWhiteLargeButton cell2 center" style={{ height: '32px', width: '30%', maxWidth: '122px', border: '0px solid white', color: 'white', padding: "5px 16px", backgroundColor: "#3a3c44", borderRadius: '22px' }} size="lg" onClick={() => {
                                        window.open(`https://discord.com/invite/7yUjqadZFq`, '_blank')
                                    }}>&#8599; Discord</Buttons> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default StakeLiquidity;
