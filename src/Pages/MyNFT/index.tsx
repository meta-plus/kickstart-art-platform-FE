import React, { useContext, useEffect, useState } from "react"
import ArtistMembersJSON from "../../contracts/ArtistMembers.json"
import ArtProjectsJSON from "../../contracts/ArtProjects.json"
import MainGameJSON from "../../contracts/MainGame.json"
import FundRasingShareTokenJSON from "../../contracts/FundRasingShareToken.json"
import PlatformTokenJSON from "../../contracts/PlatformToken.json"
import * as styles from "./styles"
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
import { MyArtProject, MyShareNFT } from "./ProjectRow/type"
import MyNFTProjectRow from "./ProjectRow"
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { FPrimaryButton } from "@fantaskticedtechlimited/fui-complib"
import WithLoadingPageWrapper, {
	LoadingPageWrapperContext,
} from "../../layout/WithLoadingPageWrapper2"
import { ArtistMember } from "../Artist/ArtistRow/type"
import { BigNumber, ethers } from "ethers"
import { stringify } from "querystring"
import { ArtProject } from "../Project/ProjectRow/type"

var contract = require("@truffle/contract")

function MyProjectPage() {
	const { account } = useMetaMask()
	const { setLoadingEnd, setLoadingStart } = useContext(
		LoadingPageWrapperContext
	)
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
	const [artProjectList, setArtProjectList] = useState<ArtProject[]>([])
	const GetArtProjectList = async () => {
		try {
			const result = await artProjectInstance?.getAllProjects()
			setArtProjectList(result as unknown as ArtProject[])
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}
	const [myNFTList, setMyNFTList] = useState<MyShareNFT[]>([])
	const GetMyNFTList = async () => {
		try {
			const result = await fundrasingInstance?.getOwnedToken(account!)
			console.log("result", result)
			const tokenIds = result?.map(e => e.toString()) || []
			let tempList :MyShareNFT[] = []
			for(let i = 0; i < tokenIds.length; i++){
				const metaData = await fundrasingInstance?.getMetadataByTokenId(tokenIds[i])
				tempList.push({
					projectId:Number(metaData?.projectId.toString()),
					share:Number( metaData?.share)
				})
				console.log("metaData", metaData)
			}
			setMyNFTList(tempList)
			// console.log("account", account)
			// const filtered = result?.filter(e => {
			// 	return e.artistAddress.toLocaleLowerCase() === account
			// })
			// console.log("filtered", filtered)
			// setArtProjectList(filtered as unknown as MyArtProject[])
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}
	const [artistList, setArtistList] = useState<ArtistMember[]>([])
	const GetArtistMemberList = async () => {
		try {
			const result = await artistMemberInstance?.getAllArtists()
			setArtistList(result as unknown as ArtistMember[])
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}
	const getData = async () => {
		setLoadingStart()
		try {
			await GetMyNFTList()
			await GetArtistMemberList()
			await GetArtProjectList()
		} catch (error) {
			alert(JSON.stringify(error))
		}
		setLoadingEnd()
	}

	useEffect(() => {
		InitContract()
	}, [])

	useEffect(() => {
		if (artistMemberInstance !== null && artProjectInstance !== null) {
			getData()
		}
	}, [artistMemberInstance, artProjectInstance])
	return (
		<div className={styles.ContentContainer}>
			<FStyledText font={FontTypes.H4}>Project list</FStyledText>

			<div className={styles.toolbarContainer}>

				{/* refresh button */}
				<FPrimaryButton onClick={async () => await GetMyNFTList()}>
					Refresh
				</FPrimaryButton>
			</div>

			<div className={styles.topicListDiv}>
				{/* TopicList List looping */}
				{(myNFTList || []).map(
					(nft: MyShareNFT, index: number) => (
						<MyNFTProjectRow
							key={index}
							index={index}
							nft={nft}
							artistList={artistList}
							projectList={artProjectList}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default WithLoadingPageWrapper(MyProjectPage)
