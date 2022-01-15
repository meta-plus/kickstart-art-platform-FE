import React, { useEffect, useState } from "react";
import styles from "./NewsCard.module.css";
import parse from "html-react-parser";
import backButton from "../../assets/data/Images/back-button.svg";
import more from "../../assets/data/Images/more-vertical.svg";
import { NewsCardProps } from "./type";

const NewsCard = (props: NewsCardProps) => {
	const newTop = () => {
		return (
			<div className={styles["box-news-up"]}>
				<div
					className={styles["up-back-button"]}
					style={{
						backgroundImage: "url(" + backButton + ")",
						backgroundSize: "cover",
					}}
				></div>
				<div
					className={`${
						styles["up-title"]
					} ${"animate__animated animate__fadeInUp animate__faster"}`}
				>
					☕ Running Interference
				</div>
				<div className={styles["up-actions"]}></div>
				<div className={styles["up-menu-button"]}>
					<div className={styles["box-right-buttons"]}>
						<img src={more} className={styles["more-btn"]} />
					</div>
				</div>
			</div>
		);
		// }
		// else{
		//     return(
		//             <div className={styles["box-news-up"]}>
		//                     <div className={styles["up-back-button"]}
		//                         style={{
		//                             backgroundImage: "url(" + backButton + ")",
		//                             backgroundSize: 'cover'
		//                         }}
		//                     >
		//                     </div>
		//                     <div className={styles["up-title"]}>
		//                         {/* ☕ Bob */}
		//                     </div>
		//                     <div className={styles["up-actions"]}>

		//                     </div>
		//                     <div className={styles["up-menu-button"]}>
		//                         <div className={styles["box-right-buttons"]}>
		//                             <img src={more} className={styles["more-btn"]}/>
		//                         </div>
		//                     </div>
		//             </div>
		//     )}
	};

	return (
		<>
			<div className={styles["box-container-news"]}>
				{newTop()}

				<div className={styles["box-news-main"]}>
					<div className={styles["box-border-shadow"]}></div>
					<div
						className={`${styles["box-border"]} ${styles["box-border-news"]}`}
					>
						<div className="upper-shadow"></div>
						<div className={`${styles["box-card"]} ${styles["box-card-news"]}`}>
							<div className={styles["box-card-middle"]}>
								☕ Running Interference
								<div className={styles["box-card-author"]}>
									<div
										className={styles["author-profile"]}
										style={{
											backgroundImage:
												"url(" +
												"https://media-exp1.licdn.com/dms/image/C4D0BAQFi8FW8aiAIXA/company-logo_200_200/0/1621857385310?e=2159024400&v=beta&t=F0QtdzEaUDoNCPFUdDpJLOl2qh58xw55BxFsOapiwmM" +
												")",
											backgroundSize: "cover",
										}}
									></div>
									<div className={styles["author-profile-text"]}>
										Morning Brew
										<div className={styles["date-posted"]}>2 hours ago</div>
									</div>
								</div>
								<div className={styles["box-card-line"]}></div>
							</div>
						</div>
						<div className={styles["box-card-content"]}>
							{
								// parse(email1)
								parse(props.email.html)
							}
						</div>
					</div>
					<div className={styles["box-bottom-shadow"]}></div>
				</div>
			</div>
		</>
	);
};

export default NewsCard;
