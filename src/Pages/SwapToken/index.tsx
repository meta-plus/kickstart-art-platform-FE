import React, { useEffect, useState } from "react"
import ArtistMembersJSON from "../../contracts/ArtistMembers.json"
import ArtProjectsJSON from "../../contracts/ArtProjects.json"
import MainGameJSON from "../../contracts/MainGame.json"
import FundRasingShareTokenJSON from "../../contracts/FundRasingShareToken.json"
import PlatformTokenJSON from "../../contracts/PlatformToken.json"
import {
	ArtistMembersContract,
	ArtistMembersInstance,
	ArtProjectsContract,
	ArtProjectsInstance,
	FundRasingShareTokenContract,
	FundRasingShareTokenInstance,
	MainGameContract,
	MainGameInstance,
	PlatformTokenContract,
	PlatformTokenInstance,
} from "../../types/truffle-contracts"
import { useMetaMask } from "metamask-react"
import { FSecondaryButton } from "@fantaskticedtechlimited/fui-complib"
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { ethers } from "ethers"
import { web3Provider } from "../../config/blockchainConfig"
var contract = require("@truffle/contract")

function SwapTokenPage() {
	const { account } = useMetaMask()
	const [artistMemberInstance, setArtistMemberInstance] =
		useState<ArtistMembersInstance>()
	const [mainGameInstance, setMainGameInstance] = useState<MainGameInstance>()
	const [artProjectInstance, setArtProjectInstance] =
		useState<ArtProjectsInstance>()
	const [platformTokenInstance, setPlatformTokenInstance] =
		useState<PlatformTokenInstance>()
	const [fundrasingInstance, setFundrasingInstance] =
		useState<FundRasingShareTokenInstance>()

	const InitContract = async () => {
		try {
			const ArtistContract = await contract(ArtistMembersJSON)
			await ArtistContract.setProvider(window.ethereum)
			const ArtistContractWithProvider =
				ArtistContract as ArtistMembersContract
			const instanceArtistContract =
				await ArtistContractWithProvider.deployed()
			setArtistMemberInstance(instanceArtistContract)

			const MainGame = await contract(MainGameJSON)
			await MainGame.setProvider(window.ethereum)
			const MainGameWithProvider = MainGame as MainGameContract
			const instanceMainGame = await MainGameWithProvider.deployed()
			setMainGameInstance(instanceMainGame)

			const ArtProject = await contract(ArtProjectsJSON)
			await ArtProject.setProvider(window.ethereum)
			const ArtProjectWithProvider = ArtProject as ArtProjectsContract
			const instanceArtProject = await ArtProjectWithProvider.deployed()
			setArtProjectInstance(instanceArtProject)

			const FundRasingShareToken = await contract(
				FundRasingShareTokenJSON
			)
			await FundRasingShareToken.setProvider(window.ethereum)
			const FundRasingShareTokenWithProvider =
				FundRasingShareToken as FundRasingShareTokenContract
			const instanceFundRasingShareToken =
				await FundRasingShareTokenWithProvider.deployed()
			setFundrasingInstance(instanceFundRasingShareToken)

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

	
	const abi = [
		{
		  "constant": true,
		  "inputs": [
			{
			  "name": "_owner",
			  "type": "address"
			}
		  ],
		  "name": "balanceOf",
		  "outputs": [
			{
			  "name": "balance",
			  "type": "uint256"
			}
		  ],
		  "payable": false,
		  "type": "function"
		}
	  ]
	const [balance, setBalance] = useState(0)
	const getBalance = async () =>{
		try {
			const contract = new ethers.Contract("0xc11F0a4e9Fb6524B1a07AaA8c6117dB2b56ca59a", abi, web3Provider);
			const balance = (await contract.balanceOf(account!)).toString()
			setBalance(Number(balance))
		} catch (error) {
			console.log("error", error)
			alert(JSON.stringify(error))
		}
	}

	useEffect(() => {
		if (platformTokenInstance) {
			console.log("platformTokenInstance", platformTokenInstance)
			getBalance()
		}
	}, [platformTokenInstance])
	const mintToken = async () => {
		try {
			
			let amount = prompt("Please enter your name")
			await platformTokenInstance?.mint(account!, amount!, {
				from: account!,
			})
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}

	return (
		<div>
            <FStyledText
                font={FontTypes.H5}
            >
                {`Token Balance: ${balance / 10 ** 18} `}
            </FStyledText>
			<FSecondaryButton
				labelStyle={{ color: "white" }}
				onClick={mintToken}
			>
				Mint Token
			</FSecondaryButton>
		</div>
	)
}

export default SwapTokenPage
