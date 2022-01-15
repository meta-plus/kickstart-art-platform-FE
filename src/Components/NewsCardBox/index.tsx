import React, { useEffect, useState } from "react";
// import styles from "./style.module.css";
import * as styles from './style'
import { NewsCardProps } from "./type";
import { useHistory } from "react-router-dom";
import Wrap from "../Wrap/Wrap";
import backButton from "../../assets/data/Images/back-button.svg";
import more from "../../assets/data/Images/more-vertical.svg";
import animationData from "./loading.json";
import parse from "html-react-parser";
import axios from "axios";

const NewsCardBox = (props: NewsCardProps) => {
	const history = useHistory();

	useEffect(() => {
		console.log(props.email.subject);
	}, []);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleDropdown = () => {
		alert("It works")
	}

	const up = () => {
		return (
			<div className={styles["boxNewsUp"]}>
				<div
					className={styles["upBackButton"]}
					style={{
						backgroundImage: "url(" + backButton + ")",
						backgroundSize: "cover",
					}}
					onClick={history.goBack}
				></div>
				<div
					className={`${
						styles["upTitle"]
					}`}
				>
					{props.email.subject}
					<div className={styles["upMenuButton"]}>
					
				</div>
				
				</div>
				<div className={styles["boxRightButtons"]}
						onClick={handleDropdown}
					>
						<img src={more} className={styles["moreBtn"]} />
				</div>
				
			</div>
		);
	};

	const down = () => {
		return (
			<>
				<div className={`${styles["boxCard"]} ${styles["boxCardNews"]}`}>
					<div className={styles["boxCardMiddle"]}>
						{props.email.subject}
						<div className={styles["boxCardAuthor"]}>
							<div
								className={styles["authorProfile"]}
								style={{
									backgroundImage:
										"url(" +
										"https://media-exp1.licdn.com/dms/image/C4D0BAQFi8FW8aiAIXA/company-logo_200_200/0/1621857385310?e=2159024400&v=beta&t=F0QtdzEaUDoNCPFUdDpJLOl2qh58xw55BxFsOapiwmM" +
										")",
									backgroundSize: "cover",
								}}
							></div>
							<div className={styles["authorProfileText"]}>
								Morning Brew
								<div className={styles["datePosted"]}>2 hours ago</div>
							</div>
						</div>
						<div className={styles["boxCardLine"]}></div>
					</div>
				</div>
				<div className={styles["boxCardContent"]}>
					{
						// parse(email1)
						parse(props.email.html)
					}
				</div>
			</>
		);
	};

	return <Wrap upElement={up} downElement={down} />;
};

export default NewsCardBox;
