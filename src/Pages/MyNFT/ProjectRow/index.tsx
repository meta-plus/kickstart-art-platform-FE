import { MyArtProjectRowProps } from "./type"
import * as styles from "./styles"
import {
	FIcon,
	FStyledText,
	FSVGButton,
	FSwitchButton,
} from "@fantaskticedtechlimited/fantasktic-comp-library"
import {
	ColorTypes,
	FontTypes,
} from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import { useHistory } from "react-router-dom"
import {
	FPrimaryButton,
	FSecondaryButton,
} from "@fantaskticedtechlimited/fui-complib"

function MyNFTProjectRow(props: MyArtProjectRowProps) {

	const numberFormatter = (num: number) => {
		if (num < 10) return "0" + num.toString()
		else return num.toString()
	}
	console.log("projectList", props.projectList)
	console.log("artistList", props.artistList)
	console.log("nft", props.nft)
	const project = props.projectList.find(
		(e) => e.id == props.nft.projectId
	)
	const artist = props.artistList.find(
		(e) => e.artistAddress == project?.artistAddress
	)
	console.log("project", project)
	console.log("artist", artist)

	return (
		<div className={styles.topicRowDiv()}>
			{/* Number shows on left hand side */}
			<div style={{ minWidth: "3rem" }}>
				<FStyledText font={FontTypes.H5} color={ColorTypes.LIGHTGREY}>
					{numberFormatter(props.nft.projectId)}
				</FStyledText>
			</div>

			{/* show Icon */}
			{/* <div>
				<img
					src={artist!.iconURL}
					style={{
						width: "100px",
						height: "100px",
					}}
				/>
			</div> */}

			{/* Middle part, show Topic Name */}
			<div
				className={styles.topicRowContentDiv()}
				// redirect to topic detail page on click
				// onClick={() => history.push(`/artist/detail/${props.artProject.id}`)}
			>
				{/* data in middle top */}
				<FStyledText
					font={FontTypes.H6}
					maxRows={2}
					whiteSpace="pre-wrap"
				>
					{project!.name}
				</FStyledText>

				{/* data in middle bottom */}
				{/* description */}
				<FStyledText
					font={FontTypes.B12}
					color={ColorTypes.GREY}
					whiteSpace="pre-wrap"
					overflowWrap="break-word"
					maxRows={1}
				>
					{`Artist: ${artist?.name}`}
				</FStyledText>
			</div>

			<div
				style={{
					minWidth: "100px",
					display: "flex",
					flexDirection: "column",
					columnGap: "0.75rem",
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}
			>
				{/* Button on Right side */}
				{/* <FSwitchButton
					size="small"
					isToggled={props.topicData.isEnable}
					// update with open flag later
					onClick={() => {
						props.onToggleButtonClick();
					}}
				/> */}

				{/* More Action button */}
				{/* <FSVGButton
					size="large"
					onClick={() => {
						// props.onMoreActionButtonClick();
					}}
				>
					<FIcon name="more" size="large" strokeColor={ColorTypes.GREY} />
				</FSVGButton> */}
				<FStyledText
					font={FontTypes.B14}
					color={ColorTypes.GREY}
					whiteSpace="pre-wrap"
					overflowWrap="break-word"
					maxRows={1}
				>
					{`Total Funder: ${project!.totalFunder}`}
				</FStyledText>
				<FStyledText
					font={FontTypes.B16}
					color={ColorTypes.BLACK}
					whiteSpace="pre-wrap"
					overflowWrap="break-word"
					maxRows={1}
				>
					{`My Share: ${props.nft.share}%`}
				</FStyledText>
				{/* <FStyledText
					font={FontTypes.B16}
					color={ColorTypes.BLACK}
					whiteSpace="pre-wrap"
					overflowWrap="break-word"
					maxRows={1}
				>
					{`${props.artProject.currentFundingAmount} / ${props.artProject.targetFundingAmount}`}
				</FStyledText> */}
			</div>
			<div
				style={{
					minWidth: "100px",
					display: "flex",
					flexDirection: "row",
					columnGap: "0.75rem",
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>

			</div>
		</div>
	)
}

export default MyNFTProjectRow
