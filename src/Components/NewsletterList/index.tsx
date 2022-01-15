
import styles from "./style.module.css";
import SearchBar from "../SearchBar/SearchBar";
import more from "../../assets/data/Images/more-vertical.svg";
import moreGrey from "../../assets/data/Images/more-button.svg";
import { useHistory } from "react-router-dom";
import { NewsletterListProps } from "./type";

const NewsletterList = (props: NewsletterListProps) => {
	const history = useHistory();

	return (
		<div className={styles["box-container"]}>
			<div className={styles["box-inside"]}>
				<div className={styles["inbox-title"]}>
					INBOX
					<div className={styles["filter-button"]}></div>
					<div className={styles["box-right"]}>
						<SearchBar />
						<div className={styles["box-right-buttons"]}>
							<img src={more} className={styles["more-btn"]} />
						</div>
					</div>
				</div>

				<div className={styles["box-border-wrap"]}>
					<div className={styles["box-border-shadow"]}></div>
					<div className={styles["box-border"]}>
						{props.emails.map((post) => {
							// if(post.active){

							// if (post.id === "93ddd566-2c40-4e0d-8bd1-a6a0d06ec946") {
							// 	return (
							// 		<div
							// 			className={`${styles["box-card"]} ${styles["card-active"]}`}
							// 			onClick={() => {
							// 				history.push(`newsletter/${post.id}`);
							// 			}}
							// 		>
							// 			<div className={styles["box-card-left"]}>
							// 				<div className={styles["active-circle"]}></div>
							// 			</div>
							// 			<div className={styles["box-card-middle"]}>
							// 				{post.subject}
							// 				<div className={styles["box-card-line"]}></div>
							// 				<div className={styles["box-card-author"]}>
							// 					<div
							// 						className={styles["author-profile"]}
							// 						style={{
							// 							backgroundImage:
							// 								"url(" +
							// 								"https://media-exp1.licdn.com/dms/image/C4D0BAQFi8FW8aiAIXA/company-logo_200_200/0/1621857385310?e=2159024400&v=beta&t=F0QtdzEaUDoNCPFUdDpJLOl2qh58xw55BxFsOapiwmM" +
							// 								")",
							// 							backgroundSize: "cover",
							// 						}}
							// 					></div>
							// 					<div className={styles["author-profile-text"]}>
							// 						{/* {post.author} */}
							// 						Morning Brew
							// 						<div className={styles["date-posted"]}>
							// 							{/* {post.posted} */}2 hours ago
							// 						</div>
							// 					</div>
							// 				</div>
							// 			</div>
							// 			<div className={styles["box-card-right"]}>
							// 				<img
							// 					src={moreGrey}
							// 					className={styles["more-button-grey"]}
							// 				/>
							// 			</div>
							// 		</div>
							// 	);
							// }

							return (
								<div
									className={`${styles["box-card"]}`}
									onClick={() => {
										history.push(`newsletter/${post.id}`);
									}}
								>
									<div className={styles["box-card-left"]}>
										<div className={styles["active-circle"]}></div>
									</div>
									<div className={styles["box-card-middle"]}>
										{post.subject}
										<div className={styles["box-card-line"]}></div>
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
												{/* {post.author} */}
												Morning Brew
												<div className={styles["date-posted"]}>
													{/* {post.posted} */}2 hours ago
												</div>
											</div>
										</div>
									</div>
									<div className={styles["box-card-right"]}>
										<img
											src={moreGrey}
											className={styles["more-button-grey"]}
										/>
									</div>
								</div>
							);
							// }
							// else{
							//     return(
							//         <div className={styles["box-card"]}>
							//             <div className={styles["box-card-left"]}>
							//                 {/* <div className="active-circle"></div> */}
							//             </div>
							//             <div className={styles["box-card-middle"]}>
							//                 {post.title}
							//                 <div className={styles["box-card-line"]}></div>
							//                 <div className={styles["box-card-author"]}>
							//                     <div className={styles["author-profile"]}
							//                         style={{
							//                             backgroundImage:"url(" + post.profile + ")",
							//                             backgroundSize: 'cover'
							//                         }}
							//                     > </div>
							//                     <div className={styles["author-profile-text"]}>
							//                         {post.author}
							//                         <div className={styles["date-posted"]}>
							//                             {post.posted}
							//                         </div>
							//                     </div>
							//                 </div>
							//             </div>
							//             <div className={styles["box-card-right"]}>
							//                 <img src={moreGrey} className={styles["more-button-grey"]}/>
							//             </div>
							//         </div>
							//     )

							// }
						})}
					</div>
					<div className={styles["box-bottom-shadow"]}></div>
				</div>
			</div>
		</div>
	);
};

export default NewsletterList;
