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
import { MyFundedArtProject } from "./ProjectRow/type"
import MyFundedArtProjectRow from "./ProjectRow"
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { FPrimaryButton } from "@fantaskticedtechlimited/fui-complib"
import WithLoadingPageWrapper, {
	LoadingPageWrapperContext,
} from "../../layout/WithLoadingPageWrapper2"
import { ArtistMember } from "../Artist/ArtistRow/type"
import { BigNumber, ethers } from "ethers"
import { stringify } from "querystring"

var contract = require("@truffle/contract")

function MyFundedProjectPage() {
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

	const [artProjectList, setArtProjectList] = useState<MyFundedArtProject[]>([])
	const GetMyFundedArtProjectList = async () => {
		try {
			const result = await artProjectInstance?.getAllProjects()

			console.log("result", result)
			const fundedProject = await artProjectInstance?.getFundedProjectByAddress(account!)
			const projectIds = fundedProject?.map(e => e.toString()) || []
			console.log("fundedProject", fundedProject)
			const filtered = result?.filter(e => {
				return projectIds?.includes(e.id.toString())
			})
			console.log("filtered", filtered)
			setArtProjectList(filtered as unknown as MyFundedArtProject[])
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
			await GetMyFundedArtProjectList()
			await GetArtistMemberList()
		} catch (error) {
			alert(JSON.stringify(error))
		}
		setLoadingEnd()
	}

	const initialFundRaise = async () => {
		try {
			let name = prompt(
				"Please enter your project name",
				"Firm a MV: My Love"
			)
			let description = prompt(
				"Please enter your description",
				"i want to rent a production team to file my MV on a beach"
			)
			let targetFundingAmount = prompt(
				"Please enter your targetFundingAmount"
			)
			await mainGameInstance?.kickStartProject(
				name!,
				description!,
				Number(targetFundingAmount),
				{
					from: account!,
				}
			)
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}

	const claimProjectShareNFT = async (projectId: number) => {
		try {
			await mainGameInstance?.claimProjectShareNFT(
				projectId!,
				{
					from: account!,
				}
			)
		} catch (error) {
			alert(JSON.stringify(error))
		}
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


				{/* New Folder button */}
				<FPrimaryButton
					labelStyle={{ color: "white" }}
					onClick={async () => await initialFundRaise()}
				>
					Initiate Fund Raising
				</FPrimaryButton>

				{/* refresh button */}
				<FPrimaryButton onClick={async () => await GetMyFundedArtProjectList()}>
					Refresh
				</FPrimaryButton>
			</div>

			<div className={styles.topicListDiv}>
				{/* TopicList List looping */}
				{(artProjectList || []).map(
					(artProject: MyFundedArtProject, index: number) => (
						<MyFundedArtProjectRow
							key={index}
							index={index}
							artProject={artProject}
							artistList={artistList}
							onClaimNFT={async () => {
								await claimProjectShareNFT(artProject.id)
							}}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default WithLoadingPageWrapper(MyFundedProjectPage)
