import { FText } from "@fantaskticedtechlimited/fui-complib";
import React, { memo, useEffect } from "react";

function Home() {
	useEffect(() => {
		console.log("Home page init");
	}, []);
	return (
		<FText
			children="This is Home Page."
			style={{
				textAlign: "center",
                marginTop: "1rem"
			}}
		/>
	);
}

const PureHome = memo(Home, () => true);
export default PureHome;
