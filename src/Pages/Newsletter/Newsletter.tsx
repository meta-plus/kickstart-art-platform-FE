import "./Newsletter.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import { NewsletterProps } from "./style";
import axios from "axios";
import { Fragment, memo, ReactNode, useEffect, useState } from "react";
import WithLoadingPageWrapper from "../../layout/WithLoadingPageWrapper";
import { useParams } from "react-router-dom";
import { Email } from "../../assets/type/backend.type";
import NewsCardBox from "../../Components/NewsCardBox/index"

const Newsletter = (props: NewsletterProps) => {
	let params = useParams<{ newsletterId: string }>();
	const [newsletter, setNewsletter] = useState<Email | null>(null);
	const handleGetEmailById = async (newsletterId: string) => {
		props.onLoadingStart();
		try {
			const result = await axios.get("http://innoplus.xyz:4000/emails");
			if (Array.isArray(result.data.data)) {
				let found = (result.data.data as Email[]).find((e) => e.id === newsletterId);
				if (found) {
					setNewsletter(found);
				} else {
					setNewsletter(null);
				}
			} else {
				setNewsletter(null);
			}
		} catch (error) {
			console.error("error", error);
			setNewsletter(null);
			alert(`Error: ${JSON.stringify(error)}`);
		}

		props.onLoadingEnd();
	};
	useEffect(() => {
		params.newsletterId
			? handleGetEmailById(params.newsletterId)
			: setNewsletter(null);
	}, [params.newsletterId]);

	return (
		// <Fragment>{newsletter && <NewsCard email={newsletter} />}</Fragment>
		<Fragment>{newsletter && <NewsCardBox email={newsletter} />}</Fragment>
	);
};

export default WithLoadingPageWrapper(Newsletter);
