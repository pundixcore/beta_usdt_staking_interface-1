import React, { Component } from "react";
import Web3 from "web3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WalletConnectProvider from "@walletconnect/web3-provider";

import claimProxy from "../abis/claimProxy.json";
import SystemCoin from "../abis/SystemCoin.json";
import LiquidityStakingV1 from "../abis/LiquidityStakingV1.json";

import NavbMenu from "./navbar/NavbarMenu";
import Stake from "./stake/Stake";
import StakeLiquidity from "./stake/StakeLiquidity";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadGecko();
    await this.loadBlockchainData();
    // while (this.state.wallet == false || this.state.walletConnect == false) {
    while (this.state.wallet == false || this.state.wallet == true) {
      if ((this.state.wallet || this.state.walletConnect) == true) {
        await this.delay(20000);
        await this.loadBlockchainData();
        await this.loadBlockchainUserData();
      } else {
        await this.delay(20000);
        await this.loadBlockchainData();
      }
    }
  }

  async loadGecko() {
    let responseGecko = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=fx-coin&vs_currencies=usd`);
    const geckoPrice = await responseGecko.json();
    const fxPrice = geckoPrice["fx-coin"]["usd"];
    this.setState({ fxPrice });
  }

  async loadBlockchainData() {
    const web3Eth = window.web3Eth;
    const networkId = process.env.REACT_APP_networkid;
    this.setState({ networkId });
    const farmNetwork = process.env.REACT_APP_farmnetwork;
    this.setState({ farmNetwork });

    if (window.ethereum) {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      this.setState({ chainId });

      if (this.state.chainId == "0x61") {
        this.setState({ networkName: "BSC Testnet" });
      } else if (this.state.chainId == "0x38") {
        this.setState({ networkName: "BSC" });
      } else if (this.state.chainId == "0x1") {
        this.setState({ networkName: "Ethereum" });
      } else if (this.state.chainId == "0x3") {
        this.setState({ networkName: "Ropsten" });
      } else if (this.state.chainId == "0x4") {
        this.setState({ networkName: "Rinkeby" });
      } else if (this.state.chainId == "0x2a") {
        this.setState({ networkName: "Kovan" });
      } else if (this.state.chainId == "0x89") {
        this.setState({ networkName: "Polygon" });
      } else if (this.state.chainId == "0x13881") {
        this.setState({ networkName: "Mumbai" });
      } else if (this.state.chainId == "0xa869") {
        this.setState({ networkName: "Fuji" });
      } else if (this.state.chainId == "0xa86a") {
        this.setState({ networkName: "Avalanche" });
      }

      window.ethereum.on("chainChanged", this.handleChainChanged);
      window.ethereum.on("accountsChanged", this.handleAccountsChanged);
    } else {
      this.setState({ chainID: "0x" });
      this.setState({ networkName: "Unavailable" });
    }

    // Load contract
    const fxToken = new web3Eth.eth.Contract(SystemCoin.abi, process.env.REACT_APP_fxtoken_address);
    const liquidityStakingV1 = new web3Eth.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address);

    /* Added the below for additional pools */
    const liquidityStakingV1_second = new web3Eth.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address_second);

    /* Added the below for additional pools */
    const usdtToken = new web3Eth.eth.Contract(SystemCoin.abi, process.env.REACT_APP_usdt_address);

    this.setState({ fxToken });
    this.setState({ liquidityStakingV1 });
    this.setState({ liquidityStakingV1_second });
    this.setState({ usdtToken });

    /*
    For the first pool 
    */
    let response0 = this.loadPoolSize(process.env.REACT_APP_liquiditystakingV1_address);
    let response1 = this.loadPoolRewardRate(process.env.REACT_APP_liquiditystakingV1_address);
    let response2 = this.loadPoolTimeRemainingInCurrentEpoch(process.env.REACT_APP_liquiditystakingV1_address);
    let response4 = this.loadTimeRemainingNextBlackout(process.env.REACT_APP_liquiditystakingV1_address);
    let response5 = this.loadPoolEpochParam(process.env.REACT_APP_liquiditystakingV1_address);
    let response6 = this.loadPoolStartOfCurrentEpoch(process.env.REACT_APP_liquiditystakingV1_address);
    let response7 = this.loadBlackoutWindow(process.env.REACT_APP_liquiditystakingV1_address);
    let response8 = this.loadMaxPoolSize(process.env.REACT_APP_liquiditystakingV1_address);

    let poolSize = await response0;
    let poolRewardRate = await response1;
    let poolTimeRemainingInCurrentEpoch = await response2;
    let timeRemainingNextBlackout = await response4;
    let poolEpochInterval = await response5;
    let poolStartOfCurrentEpoch = await response6;
    let poolBlackoutWindow = await response7;
    let maxPoolSize = await response8;

    let APR = ((window.web3Eth.utils.fromWei(poolRewardRate, "Ether") * 31536000 * this.state.fxPrice) / window.web3Eth.utils.fromWei(poolSize, "mWei")) * 100;
    let remainingPoolDepositedSize = maxPoolSize - poolSize;
    let poolEndOfCurrentEpoch = parseInt(poolStartOfCurrentEpoch) + parseInt(poolEpochInterval);

    this.setState({ poolSize });
    this.setState({ poolRewardRate });
    this.setState({ poolTimeRemainingInCurrentEpoch });
    this.setState({ timeRemainingNextBlackout });
    this.setState({ poolEpochInterval });
    this.setState({ poolEndOfCurrentEpoch });
    this.setState({ poolBlackoutWindow });
    this.setState({ maxPoolSize });
    this.setState({ remainingPoolDepositedSize });
    this.setState({ APR });

    /*
    For the second pool 
    */
    let response0_second = this.loadPoolSize(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response1_second = this.loadPoolRewardRate(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response2_second = this.loadPoolTimeRemainingInCurrentEpoch(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response4_second = this.loadTimeRemainingNextBlackout(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response5_second = this.loadPoolEpochParam(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response6_second = this.loadPoolStartOfCurrentEpoch(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response7_second = this.loadBlackoutWindow(process.env.REACT_APP_liquiditystakingV1_address_second);
    let response8_second = this.loadMaxPoolSize(process.env.REACT_APP_liquiditystakingV1_address_second);

    let poolSize_second = await response0_second;
    let poolRewardRate_second = await response1_second;
    let poolTimeRemainingInCurrentEpoch_second = await response2_second;
    let timeRemainingNextBlackout_second = await response4_second;
    let poolEpochInterval_second = await response5_second;
    let poolStartOfCurrentEpoch_second = await response6_second;
    let poolBlackoutWindow_second = await response7_second;
    let maxPoolSize_second = await response8_second;

    let APR_second = ((window.web3Eth.utils.fromWei(poolRewardRate_second, "Ether") * 31536000 * this.state.fxPrice) / window.web3Eth.utils.fromWei(poolSize_second, "mWei")) * 100;
    let remainingPoolDepositedSize_second = maxPoolSize_second - poolSize_second;
    let poolEndOfCurrentEpoch_second = parseInt(poolStartOfCurrentEpoch_second) + parseInt(poolEpochInterval_second);

    this.setState({ poolSize_second });
    this.setState({ poolRewardRate_second });
    this.setState({ poolTimeRemainingInCurrentEpoch_second });
    this.setState({ timeRemainingNextBlackout_second });
    this.setState({ poolEpochInterval_second });
    this.setState({ poolEndOfCurrentEpoch_second });
    this.setState({ poolBlackoutWindow_second });
    this.setState({ maxPoolSize_second });
    this.setState({ remainingPoolDepositedSize_second });
    this.setState({ APR_second });

    this.setState({ blockchainLoading: true });
  }

  async loadPoolSize(address) {
    let poolSize;
    const liquidityStakingV1 = new window.web3Eth.eth.Contract(LiquidityStakingV1.abi, address);
    poolSize = await liquidityStakingV1.methods.getTotalActiveBalanceCurrentEpoch().call();

    return poolSize;
  }

  async loadMaxPoolSize(address) {
    let maxPoolSize;
    const liquidityStakingV1 = new window.web3Eth.eth.Contract(LiquidityStakingV1.abi, address);

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      return "500000000000";
    } else {
      maxPoolSize = await liquidityStakingV1.methods.getMaxPoolSize().call();
    }
    return maxPoolSize;
  }

  async loadPoolRewardRate(address) {
    let poolRewardRate;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      poolRewardRate = await this.state.liquidityStakingV1.methods.getRewardsPerSecond().call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      poolRewardRate = await this.state.liquidityStakingV1_second.methods.getRewardsPerSecond().call();
    }
    return poolRewardRate;
  }

  async loadPoolTimeRemainingInCurrentEpoch(address) {
    let poolTimeRemainingInCurrentEpoch;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      poolTimeRemainingInCurrentEpoch = await this.state.liquidityStakingV1.methods.getTimeRemainingInCurrentEpoch().call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      poolTimeRemainingInCurrentEpoch = await this.state.liquidityStakingV1_second.methods.getTimeRemainingInCurrentEpoch().call();
    }
    return poolTimeRemainingInCurrentEpoch;
  }

  async loadTimeRemainingNextBlackout(address) {
    let timeRemainingNextBlackout = 0;
    let blackoutWindow = await this.state.liquidityStakingV1.methods.getBlackoutWindow().call();
    // let blackoutWindow = "60";
    let poolTimeRemainingInCurrentEpoch;

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      poolTimeRemainingInCurrentEpoch = await this.state.liquidityStakingV1.methods.getTimeRemainingInCurrentEpoch().call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      poolTimeRemainingInCurrentEpoch = await this.state.liquidityStakingV1_second.methods.getTimeRemainingInCurrentEpoch().call();
    }

    if (parseInt(poolTimeRemainingInCurrentEpoch) >= parseInt(blackoutWindow)) {
      timeRemainingNextBlackout = poolTimeRemainingInCurrentEpoch - blackoutWindow;
    } else {
      timeRemainingNextBlackout = 0;
    }
    return timeRemainingNextBlackout;
  }

  async loadPoolEpochParam(address) {
    let poolEpochParam;

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      poolEpochParam = await this.state.liquidityStakingV1.methods.getEpochParameters().call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      poolEpochParam = await this.state.liquidityStakingV1_second.methods.getEpochParameters().call();
    }

    return poolEpochParam[0];
  }

  async loadPoolStartOfCurrentEpoch(address) {
    let currentEpochNum;
    let startOfCurrentRpoch;

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      currentEpochNum = await this.state.liquidityStakingV1.methods.getCurrentEpoch().call();
      startOfCurrentRpoch = await this.state.liquidityStakingV1.methods.getStartOfEpoch(currentEpochNum).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      currentEpochNum = await this.state.liquidityStakingV1_second.methods.getCurrentEpoch().call();
      startOfCurrentRpoch = await this.state.liquidityStakingV1_second.methods.getStartOfEpoch(currentEpochNum).call();
    }

    return startOfCurrentRpoch;
  }

  async loadBlackoutWindow(address) {
    let blackoutWindow;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      blackoutWindow = await this.state.liquidityStakingV1.methods.getBlackoutWindow().call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      blackoutWindow = await this.state.liquidityStakingV1_second.methods.getBlackoutWindow().call();
    }

    return blackoutWindow;
  }

  /* **************************************************************************************************************
   * ************** Load User blockchain data **********************************************************************
   * ***************************************************************************************************************/

  async loadBlockchainUserData() {
    /*
    1st liquidity pool
    */
    let userResponse0 = this.loadUserUSDTBalance();
    let userResponse1 = this.loadUserStakedBalance(process.env.REACT_APP_liquiditystakingV1_address);
    let userResponse2 = this.loadUserUSDTStakingAllowance(process.env.REACT_APP_liquiditystakingV1_address);
    let userResponse3 = this.loadUserEarnedRewardAmount(process.env.REACT_APP_liquiditystakingV1_address);
    let userResponse4 = this.loadUserWithdrawableAmount(process.env.REACT_APP_liquiditystakingV1_address);
    let userResponse5 = this.loadUserInactiveBalanceNextEpoch(process.env.REACT_APP_liquiditystakingV1_address);
    let userResponse6 = this.loadUserActiveBalanceNextEpoch(process.env.REACT_APP_liquiditystakingV1_address);

    let userUSDTBalance = await userResponse0;
    let userStakedBalance = await userResponse1;
    let userUSDTStakingAllowance = await userResponse2;
    let userEarnedRewardAmount = await userResponse3;
    let userWithdrawableAmount = await userResponse4;
    let userInactiveBalanceNextEpoch = await userResponse5;
    let userActiveBalanceNextEpoch = await userResponse6;

    this.setState({ userUSDTBalance });
    this.setState({ userStakedBalance });
    this.setState({ userUSDTStakingAllowance });
    this.setState({ userEarnedRewardAmount });
    this.setState({ userWithdrawableAmount });
    this.setState({ userInactiveBalanceNextEpoch });
    this.setState({ userActiveBalanceNextEpoch });

    /*
    2nd liquidity pool
    */
    let userResponse1_second = this.loadUserStakedBalance(process.env.REACT_APP_liquiditystakingV1_address_second);
    let userResponse2_second = this.loadUserUSDTStakingAllowance(process.env.REACT_APP_liquiditystakingV1_address_second);
    let userResponse3_second = this.loadUserEarnedRewardAmount(process.env.REACT_APP_liquiditystakingV1_address_second);
    let userResponse4_second = this.loadUserWithdrawableAmount(process.env.REACT_APP_liquiditystakingV1_address_second);
    let userResponse5_second = this.loadUserInactiveBalanceNextEpoch(process.env.REACT_APP_liquiditystakingV1_address_second);
    let userResponse6_second = this.loadUserActiveBalanceNextEpoch(process.env.REACT_APP_liquiditystakingV1_address_second);

    let userStakedBalance_second = await userResponse1_second;
    let userUSDTStakingAllowance_second = await userResponse2_second;
    let userEarnedRewardAmount_second = await userResponse3_second;
    let userWithdrawableAmount_second = await userResponse4_second;
    let userInactiveBalanceNextEpoch_second = await userResponse5_second;
    let userActiveBalanceNextEpoch_second = await userResponse6_second;

    this.setState({ userStakedBalance_second });
    this.setState({ userUSDTStakingAllowance_second });
    this.setState({ userEarnedRewardAmount_second });
    this.setState({ userWithdrawableAmount_second });
    this.setState({ userInactiveBalanceNextEpoch_second });
    this.setState({ userActiveBalanceNextEpoch_second });
    this.setState({ accountLoading: true });
  }

  //  Async User Info Function
  async loadUserUSDTBalance() {
    let usdtTokenBalance = await this.state.usdtToken.methods.balanceOf(this.state.account).call();
    return usdtTokenBalance;
  }

  async loadUserStakedBalance(address) {
    let stakedBalance;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      stakedBalance = await this.state.liquidityStakingV1.methods.getActiveBalanceCurrentEpoch(this.state.account).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      stakedBalance = await this.state.liquidityStakingV1_second.methods.getActiveBalanceCurrentEpoch(this.state.account).call();
    }
    return stakedBalance;
  }

  async loadUserUSDTStakingAllowance(address) {
    let usdtStakingAllowance;

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      usdtStakingAllowance = await this.state.usdtToken.methods.allowance(this.state.account, process.env.REACT_APP_liquiditystakingV1_address).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      usdtStakingAllowance = await this.state.usdtToken.methods.allowance(this.state.account, process.env.REACT_APP_liquiditystakingV1_address_second).call();
    }

    return usdtStakingAllowance;
  }

  async loadUserEarnedRewardAmount(address) {
    try {
      let userReward;
      if (address === process.env.REACT_APP_liquiditystakingV1_address) {
        userReward = await this.state.liquidityStakingV1.methods.getStakerReward(this.state.account).call();
      } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
        userReward = await this.state.liquidityStakingV1_second.methods.getStakerReward(this.state.account).call();
      }
      return userReward;
    } catch (e) {
      console.log(e);
      return "-1";
    }
  }

  async loadUserWithdrawableAmount(address) {
    let withdrawableAmount;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      withdrawableAmount = await this.state.liquidityStakingV1.methods.getStakeAvailableToWithdraw(this.state.account).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      withdrawableAmount = await this.state.liquidityStakingV1_second.methods.getStakeAvailableToWithdraw(this.state.account).call();
    }
    return withdrawableAmount;
  }

  async loadUserInactiveBalanceNextEpoch(address) {
    let inactiveBalanceNextEpoch;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      inactiveBalanceNextEpoch = await this.state.liquidityStakingV1.methods.getInactiveBalanceNextEpoch(this.state.account).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      inactiveBalanceNextEpoch = await this.state.liquidityStakingV1_second.methods.getInactiveBalanceNextEpoch(this.state.account).call();
    }

    return inactiveBalanceNextEpoch;
  }

  async loadUserActiveBalanceNextEpoch(address) {
    let activeBalanceNextEpoch;
    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      activeBalanceNextEpoch = await this.state.liquidityStakingV1.methods.getActiveBalanceNextEpoch(this.state.account).call();
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      activeBalanceNextEpoch = await this.state.liquidityStakingV1_second.methods.getActiveBalanceNextEpoch(this.state.account).call();
    }

    return activeBalanceNextEpoch;
  }

  // ***********************************************************************************************************************************************
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    }
    //window.web3Eth = new Web3(`https://rpc.ankr.com/eth`);
    window.web3Eth = new Web3(`https://rpc.ankr.com/eth_goerli`);
    try {
      let id = await window.web3Eth.eth.net.isListening();
    } catch (e) {
      console.log(e);
      await this.loadWeb3_2();
    }
    this.setState({ loading: true });
  }

  async loadWeb3_2() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    }
    //window.web3Eth = new Web3(`https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_alchemy_goerli}`);
    window.web3Eth = new Web3(`https://eth-goerli.g.alchemy.com/v2/${process.env.REACT_APP_alchemy_goerli}`);
    this.setState({ loading: true });
  }

  connectMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async () => {
          await this.switchNetwork();
          const chainId = await window.ethereum.request({
            method: "eth_chainId"
          });
          if (chainId == process.env.REACT_APP_chainid) {
            // await this.WalletDisconnect()
            await this.setWalletTrigger(true);
            this.loadBlockchainUserData();
          }
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else {
      alert("No wallet provider was found");
    }
  };

  connectCoin98 = () => {
    if (window.coin98) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(async accounts => {
          let chainId = await window.ethereum.request({
            method: "eth_chainId"
          });
          if (chainId == "0xa86a") {
            if (accounts[0]) {
              this.WalletDisconnect();
              this.setWalletTrigger(true);
            } else {
              alert("No wallet found, please create wallet");
            }
          } else {
            alert("Wrong Network, please switch to Avalanche network");
          }
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else {
      alert("No wallet provider was found");
    }
  };

  mobileWalletConnect = async () => {
    window.provider = new WalletConnectProvider({
      rpc: {
        // 530: "https://fx-json-web3.functionx.io:8545"
        // 43114: "https://api.avax.network/ext/bc/C/rpc"
        // 56: `https://bsc-dataseed.binance.org/`
        5: `https://eth-goerli.g.alchemy.com/v2/${process.env.REACT_APP_alchemy_goerli}`
        //1: `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_alchemy_goerli}`
      },
      // chainId: 530,
      // chainId: 43114,
      //chainId: 1
      chainId: 5
    });
    await window.provider.enable();
    window.web3Con = await new Web3(window.provider);
    const accounts = await window.web3Con.eth.getAccounts();
    const chainId = await window.provider.request("eth_chainId");
    this.setState({ account: accounts[0] });
    const first4Account = this.state.account.substring(0, 5);
    const last4Account = this.state.account.slice(-4);
    this.setState({ first4Account: first4Account });
    this.setState({ last4Account: last4Account });
    this.setState({ walletConnect: true });
    this.setWalletTrigger(false);
    this.loadBlockchainUserData();

    // Subscribe to accounts change
    window.provider.on("accountsChanged", this.handleAccountsChanged);
    // Subscribe to session disconnection
    window.provider.on("disconnect", (code, reason) => {
      // console.log(code, reason);
      this.WalletDisconnect();
    });
    window.provider.on("chainChanged", async () => {
      this.WalletDisconnect();
      alert("You're connected to an unsupported network.");
    });
  };

  WalletDisconnect = async () => {
    if (window.provider.connected == true) {
      await window.provider.disconnect();
      this.setState({ walletConnect: false });
      this.setState({ accountLoading: false });
    }
    this.loadBlockchainUserData();
  };

  switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: process.env.REACT_APP_chainid }]
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          // console.log(switchError.code)
          // await window.ethereum.request({
          //   method: 'wallet_addEthereumChain',
          //   params: [{
          //     chainId: '0x1', rpcUrls: [''], chainName: 'Ethereum Mainnet',
          //     nativeCurrency: {
          //       name: 'AVAX',
          //       symbol: 'AVAX', // 2-6 characters long
          //       decimals: 18
          //     }, blockExplorerUrls: ['https://snowtrace.io/']
          //   }],
          // });
          const chainId = await window.ethereum.request({
            method: "eth_chainId"
          });
          this.setState({ chainId });
          if (this.state.chainId == "0x61") {
            this.setState({ networkName: "BSC Testnet" });
          } else if (this.state.chainId == "0x38") {
            this.setState({ networkName: "BSC" });
          } else if (this.state.chainId == "0x1") {
            this.setState({ networkName: "Ethereum" });
          } else if (this.state.chainId == "0x3") {
            this.setState({ networkName: "Ropsten" });
          } else if (this.state.chainId == "0x4") {
            this.setState({ networkName: "Rinkeby" });
          } else if (this.state.chainId == "0x2a") {
            this.setState({ networkName: "Kovan" });
          } else if (this.state.chainId == "0x89") {
            this.setState({ networkName: "Polygon" });
          } else if (this.state.chainId == "0x13881") {
            this.setState({ networkName: "Mumbai" });
          } else if (this.state.chainId == "0xa869") {
            this.setState({ networkName: "Fuji" });
          } else if (this.state.chainId == "0xa86a") {
            this.setState({ networkName: "Avalanche" });
          }
        } catch (addError) {
          // handle "add" error
        }
      }
      // handle other "switch" errors
    }
  };

  handleAccountsChanged = async accounts => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      this.setWalletTrigger(false);
    } else if (accounts[0] !== this.state.account) {
      const accounts = await window.web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      // this.setState({ account: "0x81Fc59079c9cc02386BeFA4814ceA370Be4f7F44" })
      const first4Account = this.state.account.substring(0, 5);
      const last4Account = this.state.account.slice(-4);
      this.setState({ first4Account: first4Account });
      this.setState({ last4Account: last4Account });
      this.setState({ airdropCheck: false });
      this.setState({ collRatioChangeUpdate: [] });
      this.loadBlockchainUserData();
      // Do any other work!
    }
  };

  handleChainChanged = async () => {
    // We recommend reloading the page, unless you must do otherwise
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    this.setState({ chainId });
    if (chainId != process.env.REACT_APP_chainid) {
      this.setWalletTrigger(false);
    }
    if (this.state.chainId == "0x61") {
      this.setState({ networkName: "BSC Testnet" });
    } else if (this.state.chainId == "0x38") {
      this.setState({ networkName: "BSC" });
    } else if (this.state.chainId == "0x1") {
      this.setState({ networkName: "Ethereum" });
    } else if (this.state.chainId == "0x3") {
      this.setState({ networkName: "Ropsten" });
    } else if (this.state.chainId == "0x4") {
      this.setState({ networkName: "Rinkeby" });
    } else if (this.state.chainId == "0x2a") {
      this.setState({ networkName: "Kovan" });
    } else if (this.state.chainId == "0x89") {
      this.setState({ networkName: "Polygon" });
    } else if (this.state.chainId == "0x13881") {
      this.setState({ networkName: "Mumbai" });
    } else if (this.state.chainId == "0xa869") {
      this.setState({ networkName: "Fuji" });
    } else if (this.state.chainId == "0xa86a") {
      this.setState({ networkName: "Avalanche" });
    }
    this.switchNetwork();
    // Run any other necessary logic...
  };

  addTokenWallet = async i => {
    let brtAddress = this.state.poolSegmentInfoUpgradeable[i].vaultAddresses[this.state.farmNetworkId];
    let brtSymbol = this.state.poolSegmentInfoUpgradeable[i].lpTokenPairSymbol;
    // We recommend reloading the page, unless you must do otherwise
    window.ethereum
      .request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: brtAddress,
            symbol: `BRT2-${brtSymbol}`,
            decimals: 18
            // image: 'https://foo.io/token-image.svg',
          }
        }
      })
      .then(success => {
        if (success) {
          console.log("Successfully added to wallet!");
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .catch(console.error);
    // Run any other necessary logic...
  };

  addFXTokenWallet = async () => {
    // We recommend reloading the page, unless you must do otherwise
    window.ethereum
      .request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: process.env.REACT_APP_fxtoken_address,
            symbol: "FX",
            decimals: 18,
            image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3884.png"
          }
        }
      })
      .then(success => {
        if (success) {
          console.log("Successfully added to wallet!");
        } else {
          throw new Error("Something went wrong.");
        }
      })
      .catch(console.error);
    // Run any other necessary logic...
  };

  setWalletTrigger = async state => {
    if (state == false) {
      await this.setState({ wallet: state });
      this.setState({ accountLoading: state });
    } else {
      const accounts = await window.web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      // this.setState({ account: "0x81Fc59079c9cc02386BeFA4814ceA370Be4f7F44" })
      const first4Account = this.state.account.substring(0, 5);
      const last4Account = this.state.account.slice(-4);
      this.setState({ first4Account: first4Account });
      this.setState({ last4Account: last4Account });
      this.setState({ wallet: state });
    }
  };

  delay = ms => new Promise(res => setTimeout(res, ms));

  timeConverter = UNIX_timestamp => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    var min = a.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    var sec = a.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
    var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  /* ============================== Smart Contract function ==============================
   */
  stake = async (amount, address, close) => {
    let liquidityStaking;
    let intWeb3;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address);
      await liquidityStaking.methods
        .stake(amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address_second);
      await liquidityStaking.methods
        .stake(amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    }
  };

  approve = async address => {
    let usdtToken;
    let intWeb3;
    let spenderAddress;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }
    usdtToken = new intWeb3.eth.Contract(SystemCoin.abi, process.env.REACT_APP_usdt_address);

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      spenderAddress = process.env.REACT_APP_liquiditystakingV1_address;
      await usdtToken.methods
        .approve(spenderAddress, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
        .send({ from: this.state.account })
        .then(async result => {
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      spenderAddress = process.env.REACT_APP_liquiditystakingV1_address_second;
      await usdtToken.methods
        .approve(spenderAddress, "115792089237316195423570985008687907853269984665640564039457584007913129639935")
        .send({ from: this.state.account })
        .then(async result => {
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    }
  };

  withdraw = async (amount, address, close) => {
    let liquidityStaking;
    let intWeb3;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address);
      await liquidityStaking.methods
        .withdrawStake(this.state.account, amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address_second);
      await liquidityStaking.methods
        .withdrawStake(this.state.account, amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    }
  };

  requestWithdraw = async (amount, address, close) => {
    let liquidityStaking;
    let intWeb3;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address);
      await liquidityStaking.methods
        .requestWithdrawal(amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address_second);
      await liquidityStaking.methods
        .requestWithdrawal(amount)
        .send({ from: this.state.account })
        .on("transactionHash", () => {
          close();
          return "transactionHash";
        })
        .then(async result => {
          await this.loadBlockchainData();
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    }
  };

  claimReward = async address => {
    let liquidityStaking;
    let intWeb3;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }

    if (address === process.env.REACT_APP_liquiditystakingV1_address) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address);
      await liquidityStaking.methods
        .claimRewards(this.state.account)
        .send({ from: this.state.account })
        .then(async result => {
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    } else if (address === process.env.REACT_APP_liquiditystakingV1_address_second) {
      liquidityStaking = new intWeb3.eth.Contract(LiquidityStakingV1.abi, process.env.REACT_APP_liquiditystakingV1_address_second);
      await liquidityStaking.methods
        .claimRewards(this.state.account)
        .send({ from: this.state.account })
        .then(async result => {
          await this.loadBlockchainUserData();
        })
        .catch(err => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            alert("Something went wrong...Code: 4001 User rejected the request.");
          } else {
            console.error(err);
          }
        });
    }
  };

  claimRewardAll = async () => {
    let liquidityStaking;
    let intWeb3;
    let claim = false;
    let claim2 = false;

    if (this.state.walletConnect == true) {
      intWeb3 = window.web3Con;
    } else if (this.state.wallet == true) {
      intWeb3 = window.web3;
    }

    liquidityStaking = new intWeb3.eth.Contract(claimProxy.abi, process.env.REACT_APP_claimRewards_allPool_address);

    if (this.state.userEarnedRewardAmount > 0) {
      claim = true;
    }

    if (this.state.userEarnedRewardAmount_second > 0) {
      claim2 = true;
    }

    await liquidityStaking.methods
      .claimRewards([claim, claim2])
      .send({ from: this.state.account })
      .then(async result => {
        await this.loadBlockchainUserData();
      })
      .catch(err => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          alert("Something went wrong...Code: 4001 User rejected the request.");
        } else {
          console.error(err);
        }
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      loading: false,
      blockchainLoading: false,
      wallet: false,
      walletConnect: false,
      accountLoading: false,
      userUSDTBalance: "0",
      userStakedBalance: "0",
      userWithdrawableAmount: "0",
      userEarnedRewardAmount: "0",
      poolEndOfCurrentEpoch: "0",
      poolBlackoutWindow: "150",

      userStakedBalance_second: "0",
      userWithdrawableAmount_second: "0",
      userEarnedRewardAmount_second: "0",
      poolEndOfCurrentEpoch_second: "0",
      poolBlackoutWindow_second: "150"
    };
  }

  render() {
    let stakeContent;
    let stakeLiquidityContent;
    let navMenuContent;
    let footerContent;

    navMenuContent = <NavbMenu account={this.state.account} first4Account={this.state.first4Account} last4Account={this.state.last4Account} wallet={this.state.wallet} networkName={this.state.networkName} walletConnect={this.state.walletConnect} BAVAPrice={this.state.BAVAPrice} setWalletTrigger={this.setWalletTrigger} connectMetamask={this.connectMetamask} mobileWalletConnect={this.mobileWalletConnect} connectCoin98={this.connectCoin98} WalletDisconnect={this.WalletDisconnect} addUSBTokenWallet={this.addUSBTokenWallet} addBAVATokenWallet={this.addBAVATokenWallet} sortFarm={this.sortFarm} />;
    footerContent = <Footer />;
    stakeContent = (
      <Stake
        poolSize={this.state.poolSize} // require duplicate
        poolSize_second={this.state.poolSize_second}
        poolRewardRate={this.state.poolRewardRate} // require duplicate
        poolRewardRate_second={this.state.poolRewardRate_second}
        poolTimeRemainingInCurrentEpoch={this.state.poolTimeRemainingInCurrentEpoch} // require duplicate
        poolTimeRemainingInCurrentEpoch_second={this.state.poolTimeRemainingInCurrentEpoch_second}
        timeRemainingNextBlackout={this.state.timeRemainingNextBlackout} // require duplicate
        timeRemainingNextBlackout_second={this.state.timeRemainingNextBlackout_second}
        poolEpochInterval={this.state.poolEpochInterval} // require duplicate
        poolEpochInterval_second={this.state.poolEpochInterval_second}
        poolEndOfCurrentEpoch={this.state.poolEndOfCurrentEpoch} // require duplicate
        poolEndOfCurrentEpoch_second={this.state.poolEndOfCurrentEpoch_second}
        poolBlackoutWindow={this.state.poolBlackoutWindow} // require duplicate
        poolBlackoutWindow_second={this.state.poolBlackoutWindow_second}
        maxPoolSize={this.state.maxPoolSize}
        remainingPoolDepositedSize={this.state.remainingPoolDepositedSize}
        maxPoolSize_second={this.state.maxPoolSize_second}
        remainingPoolDepositedSize_second={this.state.remainingPoolDepositedSize_second}
        APR={this.state.APR}
        APR_second={this.state.APR_second}
        userUSDTBalance={this.state.userUSDTBalance} // no need to add duplicate for this
        userStakedBalance={this.state.userStakedBalance} // require duplicate
        userStakedBalance_second={this.state.userStakedBalance_second}
        userUSDTStakingAllowance={this.state.userUSDTStakingAllowance} // require duplicate
        userUSDTStakingAllowance_second={this.state.userUSDTStakingAllowance_second}
        userEarnedRewardAmount={this.state.userEarnedRewardAmount} // require duplicate
        userEarnedRewardAmount_second={this.state.userEarnedRewardAmount_second}
        userWithdrawableAmount={this.state.userWithdrawableAmount} // require duplicate
        userWithdrawableAmount_second={this.state.userWithdrawableAmount_second}
        userInactiveBalanceNextEpoch={this.state.userInactiveBalanceNextEpoch} // require duplicate
        userInactiveBalanceNextEpoch_second={this.state.userInactiveBalanceNextEpoch_second}
        wallet={this.state.wallet}
        walletConnect={this.state.walletConnect}
        accountLoading={this.state.accountLoading}
        blockchainLoading={this.state.blockchainLoading}
        connectMetamask={this.connectMetamask}
        mobileWalletConnect={this.mobileWalletConnect}
        connectCoin98={this.connectCoin98}
        stake={this.stake}
        approve={this.approve}
        withdraw={this.withdraw}
        requestWithdraw={this.requestWithdraw}
        claimReward={this.claimReward}
        claimRewardAll={this.claimRewardAll}
      />
    );
    stakeLiquidityContent = (
      <StakeLiquidity
        poolSize={this.state.poolSize} // require duplicate
        poolSize_second={this.state.poolSize_second}
        poolRewardRate={this.state.poolRewardRate} // require duplicate
        poolRewardRate_second={this.state.poolRewardRate_second}
        poolTimeRemainingInCurrentEpoch={this.state.poolTimeRemainingInCurrentEpoch} // require duplicate
        poolTimeRemainingInCurrentEpoch_second={this.state.poolTimeRemainingInCurrentEpoch_second}
        timeRemainingNextBlackout={this.state.timeRemainingNextBlackout} // require duplicate
        timeRemainingNextBlackout_second={this.state.timeRemainingNextBlackout_second}
        poolEpochInterval={this.state.poolEpochInterval} // require duplicate
        poolEpochInterval_second={this.state.poolEpochInterval_second}
        poolEndOfCurrentEpoch={this.state.poolEndOfCurrentEpoch} // require duplicate
        poolEndOfCurrentEpoch_second={this.state.poolEndOfCurrentEpoch_second}
        poolBlackoutWindow={this.state.poolBlackoutWindow} // require duplicate
        poolBlackoutWindow_second={this.state.poolBlackoutWindow_second}
        maxPoolSize={this.state.maxPoolSize}
        remainingPoolDepositedSize={this.state.remainingPoolDepositedSize}
        maxPoolSize_second={this.state.maxPoolSize_second}
        remainingPoolDepositedSize_second={this.state.remainingPoolDepositedSize_second}
        APR={this.state.APR}
        APR_second={this.state.APR_second}
        userUSDTBalance={this.state.userUSDTBalance} // no need to add duplicate for this
        userStakedBalance={this.state.userStakedBalance} // require duplicate
        userStakedBalance_second={this.state.userStakedBalance_second}
        userUSDTStakingAllowance={this.state.userUSDTStakingAllowance} // require duplicate
        userUSDTStakingAllowance_second={this.state.userUSDTStakingAllowance_second}
        userEarnedRewardAmount={this.state.userEarnedRewardAmount} // require duplicate
        userEarnedRewardAmount_second={this.state.userEarnedRewardAmount_second}
        userWithdrawableAmount={this.state.userWithdrawableAmount} // require duplicate
        userWithdrawableAmount_second={this.state.userWithdrawableAmount_second}
        userInactiveBalanceNextEpoch={this.state.userInactiveBalanceNextEpoch} // require duplicate
        userInactiveBalanceNextEpoch_second={this.state.userInactiveBalanceNextEpoch_second}
        userActiveBalanceNextEpoch={this.state.userActiveBalanceNextEpoch} // require duplicate
        userActiveBalanceNextEpoch_second={this.state.userActiveBalanceNextEpoch_second}
        accountLoading={this.state.accountLoading}
        blockchainLoading={this.state.blockchainLoading}
        wallet={this.state.wallet}
        walletConnect={this.state.walletConnect}
        connectMetamask={this.connectMetamask}
        mobileWalletConnect={this.mobileWalletConnect}
        connectCoin98={this.connectCoin98}
        stake={this.stake}
        approve={this.approve}
        withdraw={this.withdraw}
        requestWithdraw={this.requestWithdraw}
        claimReward={this.claimReward}
      />
    );

    return (
      <Router>
        <ScrollToTop>
          <div>
            <Switch>
              <Route path="/" exact>
                {" "}
                {navMenuContent}{" "}
              </Route>
              <Route path="/liquidity/" exact>
                {" "}
                {navMenuContent}{" "}
              </Route>
            </Switch>
            <div
              className="container-fluid"
              style={{
                position: "relative",
                paddingTop: "100px",
                paddingLeft: "15px",
                paddingRight: "15px"
              }}
            >
              <main role="main" className="content ml-auto mr-auto" style={{ maxWidth: "1000px" }}>
                <Switch>
                  <Route path="/" exact>
                    {" "}
                    {stakeContent}{" "}
                  </Route>
                  <Route path="/liquidity" exact>
                    {" "}
                    {stakeLiquidityContent}{" "}
                  </Route>
                </Switch>
              </main>
            </div>
            <div
              className="container-fluid"
              style={{
                padding: "0px",
                marginTop: "150px",
                position: "relative"
              }}
            >
              {footerContent}
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
