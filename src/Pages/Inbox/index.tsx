import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./inbox.css";
import { InboxProps } from "./type";
import { Email } from "../../assets/type/backend.type";
import NewsletterList from "../../Components/NewsletterList";
import NewsletterBox from '../../Components/NewsletterBox/NewsletterBox'
import WithLoadingPageWrapper from "../../layout/WithLoadingPageWrapper";
function Inbox(props: InboxProps) {
	const [emails, setEmails] = useState<Email[]>([]);
	const handleGetEmails = async () => {
		props.onLoadingStart();
		try {
			const result = await axios.get("http://innoplus.xyz:4000/emails")
			if (Array.isArray(result.data.data)) {
				setEmails(result.data.data);
				console.log(result.data.data)
			} else {
				setEmails([]);
			}
		} catch (error) {
			console.error("error", error);
			setEmails([]);
			alert(`Error: ${JSON.stringify(error)}`);
		}
		
		props.onLoadingEnd();
	};
	useEffect(() => {
		handleGetEmails();
	}, []);

	return <Fragment>{emails && <NewsletterBox emails={emails} />}</Fragment>;
}

export default WithLoadingPageWrapper(Inbox);
