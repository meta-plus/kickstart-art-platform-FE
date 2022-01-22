import React, { useEffect, useState } from "react"
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
import { ArtistMember } from "./ArtistRow/type"
import ArtistRow from "./ArtistRow"
import { FStyledText } from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { FSecondaryButton } from "@fantaskticedtechlimited/fui-complib"

var contract = require("@truffle/contract")

function ArtistPage() {
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

	const [artistList, setArtistList] = useState<ArtistMember[]>([])
	const GetArtistMemberList = async () => {
		try {
			const result = await artistMemberInstance?.getAllArtists()
			setArtistList(result as unknown as ArtistMember[])
		} catch (error) {
			alert(JSON.stringify(error))
		}
	}
    
	const registerAsArtist = async () => {
		try {
            let name = prompt("Please enter your name", "Jacky");
            let iconURL = prompt("Please enter your iconURL", "https://scontent.fhkg4-2.fna.fbcdn.net/v/t31.18172-8/10845652_10202013595181141_2908695720798677525_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=WB1YudBH4qsAX-gvAu0&tn=Xz5sFQR7syS-pSPC&_nc_ht=scontent.fhkg4-2.fna&oh=00_AT9QQZgaeuljaxUwlyp28Avg_Aiag-xa8yLdeiUv0BIN4A&oe=620AEC91");
			await mainGameInstance?.registerAsArtist(
				name!,
				iconURL!,
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
		if (artistMemberInstance !== null) {
			GetArtistMemberList()
		}
	}, [artistMemberInstance])
	return (
		<div className={styles.ContentContainer}>
			<FStyledText font={FontTypes.H4}>Artist list</FStyledText>

			<div className={styles.toolbarContainer}>
				{/* New Folder button */}
				<FSecondaryButton
                    labelStyle={{color:"white"}}
					onClick={async () =>
						await registerAsArtist()
					}
				>
					Join Artist
				</FSecondaryButton>

				{/* refresh button */}
				<FSecondaryButton
					onClick={async () => await GetArtistMemberList()}
				>
					Refresh
				</FSecondaryButton>
			</div>

			<div className={styles.topicListDiv}>
				{/* TopicList List looping */}
				{(artistList || []).map(
					(artist: ArtistMember, index: number) => (
						<ArtistRow key={index} index={index} artist={artist} />
					)
				)}
			</div>
		</div>
	)
}

export default ArtistPage
