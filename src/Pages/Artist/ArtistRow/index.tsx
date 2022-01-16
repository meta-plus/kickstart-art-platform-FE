import { TopicRowProps } from "./type";
import * as styles from "./styles";
import {
	FIcon,
	FStyledText,
	FSVGButton,
	FSwitchButton,
} from "@fantaskticedtechlimited/fantasktic-comp-library";
import {
	ColorTypes,
	FontTypes,
} from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types";
import { useHistory } from "react-router-dom";

function ArtistRow(props: TopicRowProps) {
	const history = useHistory();
	const numberFormatter = (num: number) => {
		if (num < 10) return "0" + num.toString();
		else return num.toString();
	};

	return (
		<div className={styles.topicRowDiv()}>
			{/* Number shows on left hand side */}
			<div style={{ minWidth: "3rem" }}>
				<FStyledText font={FontTypes.H5} color={ColorTypes.LIGHTGREY}>
					{numberFormatter(props.artist.id)}
				</FStyledText>
			</div>

			{/* show Icon */}
			<div>
				<img
					src={props.artist.iconURL}
					style={{
						width: "100px",
						// height: "100px",
					}}
				/>
			</div>
			{/* Middle part, show Topic Name */}
			<div
				className={styles.topicRowContentDiv()}
				// redirect to topic detail page on click
				// onClick={() => history.push(`/artist/detail/${props.artist.id}`)}
			>
				{/* data in middle top */}
				<FStyledText font={FontTypes.H6} maxRows={2} whiteSpace="pre-wrap">
					{props.artist.name}
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
					{props.artist.artistAddress ?? ""}
				</FStyledText>
			</div>

			<div style={{
				minWidth:"100px",
				display:"flex",
				flexDirection:"row",
				columnGap:"0.75rem",
				justifyContent:"flex-start",
				alignItems:"center"
			}}>
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
				<FSVGButton
					size="large"
					onClick={() => {
						// props.onMoreActionButtonClick();
					}}
				>
					<FIcon name="more" size="large" strokeColor={ColorTypes.GREY} />
				</FSVGButton>
			</div>
		</div>
	);
}

export default ArtistRow;
