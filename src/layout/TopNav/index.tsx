import {
	FButton,
	FStyledText,
} from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import * as styles from "./styles"
import { useMetaMask } from "metamask-react"
import { ethers, providers } from "ethers"
import { blockchainConfig, web3Provider } from "../../config/blockchainConfig"
import {
	PlatformTokenContract,
	PlatformTokenInstance,
} from "../../types/truffle-contracts"
import PlatformTokenJSON from "../../contracts/PlatformToken.json"
var contract = require("@truffle/contract")

function TopNav() {
	const [platformTokenInstance, setPlatformTokenInstance] =
		useState<PlatformTokenInstance>()

	const InitContract = async () => {
		try {
			const PlatformToken = await contract(PlatformTokenJSON)
			await PlatformToken.setProvider(window.ethereum)
			const platformTokenWithProvider =
				PlatformToken as PlatformTokenContract
			const instancePlatformToken =
				await platformTokenWithProvider.deployed()
			setPlatformTokenInstance(instancePlatformToken)
		} catch (error) {
			alert("Contract not deployed.")
		}
	}

	useEffect(() => {
		InitContract()
	}, [])
	const { status, connect, account } = useMetaMask()
	const [desc, setDesc] = useState<string>("")
	const [chainBalance, setChainBalance] = useState(0)

	const getChainBalance = async (_account: string) => {
		const res = await web3Provider.getBalance(_account)
		setChainBalance(Number(res) / 10 ** 18)
	}

	const abi = [
		{
			constant: true,
			inputs: [
				{
					name: "_owner",
					type: "address",
				},
			],
			name: "balanceOf",
			outputs: [
				{
					name: "balance",
					type: "uint256",
				},
			],
			payable: false,
			type: "function",
		},
	]
	const [balance, setBalance] = useState(0)
	const getTokenBalance = async () => {
		try {
			const contract = new ethers.Contract(
				platformTokenInstance?.address!,
				abi,
				web3Provider
			)
			const balance = (await contract.balanceOf(account!)).toString()
			setBalance(Number(balance) / 10 ** 18)
		} catch (error) {
			console.log("error", error)
			alert(JSON.stringify(error))
		}
	}

	useEffect(() => {
		if (status === "initializing") {
			setDesc("Synchronisation with MetaMask ongoing...")
		}

		switch (status) {
			case "connected":
				getChainBalance(account!)
				setDesc(`Connected account: ${account}`)
				break
			case "connecting":
				setDesc(`Connecting`)
				break
			case "initializing":
				setDesc(`initializing`)
				break
			case "notConnected":
				setDesc(`notConnected`)
				break
			case "unavailable":
				setDesc(`Metamask unavailable`)
				break
			default:
				setDesc(`Can not detect metamask`)
		}
	}, [status, account])

	useEffect(() => {
		if (platformTokenInstance) {
			console.log("platformTokenInstance", platformTokenInstance)
			getTokenBalance()
		}
	}, [platformTokenInstance])

	return (
		<div className={styles.topNavBarDiv}>
			
			<div className={styles.topNavBarUserInfoDiv}>
				{status === "notConnected" ? (
					<FButton
						type="secondary"
						padding="0.5rem"
						onClick={connect}
					>
						{"Connect"}
					</FButton>
				) : (
					<Fragment>
						<FStyledText font={FontTypes.B16}>{`ETH Balance: ${
							chainBalance ?? 0
						} ETH`}</FStyledText>
						<FStyledText font={FontTypes.B16}>{`Token Balance: ${
							balance ?? 0
						} PTK`}</FStyledText>
						{/* <FStyledText font={FontTypes.B16}>{desc}</FStyledText> */}
					</Fragment>
				)}
			</div>
			{/* <Breadcumb routes={routes}/>  */}
		</div>
	)
}

export default TopNav
