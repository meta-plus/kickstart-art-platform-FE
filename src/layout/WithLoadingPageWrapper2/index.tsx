import { createContext, ElementType, Fragment, ReactNode, useState } from "react";
import { LoadingPageWrapperContextProps } from "./type";
import animationData from "./loading.json";
// import Lottie from "react-lottie";

// https://stackoverflow.com/questions/55696601/react-using-usestate-hooks-in-hoc-causes-error-hooks-can-only-be-called-inside
// https://stackoverflow.com/questions/60556221/react-hooks-inside-a-curry-function-creating-a-hoc-returning-an-error-from-lin
// https://github.com/facebook/react/issues/20531

export const LoadingPageWrapperContext = createContext<LoadingPageWrapperContextProps>({
	isLoadingPageWrapperLoading: false,
    setLoadingStart: () => {},
	setLoadingEnd: () => {},
});

export const WithLoadingPageWrapper = (
	Component: ElementType
) => {
	return function WithLoadingPageWrapper(props: any) {
		const [isLoading, setIsLoading] = useState(false);
		const handleLoadingStop = () => {
			setIsLoading(false);
		};
		const handleLoadingStart = () => {
			setIsLoading(true);
		};
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		};

		const defaultContextValue: LoadingPageWrapperContextProps = {
			isLoadingPageWrapperLoading:isLoading,
			setLoadingStart:handleLoadingStart,
			setLoadingEnd:handleLoadingStop
		};

		return (
			<Fragment>
				<LoadingPageWrapperContext.Provider value={defaultContextValue}>
				{isLoading && (
					<Fragment>
						{/* <Lottie options={defaultOptions} height={400} width={400} /> */}
						<h1>Loading Animation</h1>
					</Fragment>
				)}
				<div style={{display:isLoading ? "none" : "block"}}>
					<Component
						isLoadingPageWrapperLoading={isLoading}
						onLoadingStart={handleLoadingStart}
						onLoadingEnd={handleLoadingStop}
						{...props}
					/>
				</div>
				</LoadingPageWrapperContext.Provider>
			</Fragment>
		);
	};
};

export default WithLoadingPageWrapper;
