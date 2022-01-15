// import styles from "./style.module.css";
import * as styles from './style'
import { NewsletterListProps } from "./type";
import { useHistory } from "react-router-dom";
import Wrap from "../Wrap/Wrap";
import moreGrey from "../../assets/data/Images/more-button.svg";
import { FSearchBar } from '@fantaskticedtechlimited/fui-complib';
import { useState } from 'react';

const NewsletterBox = (props: NewsletterListProps) => {
	const history = useHistory();
    const [searchValue, setSearchValue] = useState<string>("")

	const test = () => {
		return (
			<>
				<div className={styles["contentHeaderLeft"]}>
					<label>INBOX</label>
				</div>
				<div className={styles["contentHeaderRight"]}>
					<FSearchBar
                        value={searchValue}
                        renderValue={(v)=>setSearchValue(v)}
                        placeholder='Search'
                        containerClassName={styles.searchBarNew}
                    />

				</div>
			</>
		);
	};

	const test2 = () => {
		return (
			<div>
				{props.emails.map((post) => {
					return (
						<div
							className={`${styles["boxCard"]}`}
							onClick={() => {
								history.push(`newsletter/${post.id}`);
							}}
                            key={post.id}
						>
							<div className={styles["boxCardLeft"]}>
								<div className={styles["activeCircle"]}></div>
							</div>
							<div className={styles["boxCardMiddle"]}>
								{post.subject}
								<div className={styles["boxCardLine"]}></div>
								<div className={styles["boxCardAuthor"]}>
									<div
										className={styles["authorProfile"]}
										style={{
											backgroundImage:
												"url(" +
												"https://media-exp1.licdn.com/dms/image/C4D0BAQFi8FW8aiAIXA/company-logo_200_200/0/1621857385310?e=2159024400&v=beta&t=F0QtdzEaUDoNCPFUdDpJLOl2qh58xw55BxFsOapiwmM" +
												")",
											backgroundSize: "40px",
										}}
									></div>
									<div className={styles["authorProfileText"]}>
										{/* {post.author} */}
										Morning Brew
										<div className={styles["datePosted"]}>
											{/* {post.posted} */}2 hours ago
										</div>
									</div>
								</div>
							</div>
							<div className={styles["boxCardRight"]}>
								<img src={moreGrey} className={styles["moreButtonGrey"]} />
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return <Wrap upElement={test} downElement={test2} />;
};

export default NewsletterBox;
