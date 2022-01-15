import {
	FButton,
	FStyledText,
} from "@fantaskticedtechlimited/fantasktic-comp-library"
import { FontTypes } from "@fantaskticedtechlimited/fantasktic-comp-library/lib/esm/types"
import React, { Fragment, useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext"
import * as styles from "./styles"
import { useMetaMask } from "metamask-react"
import { ethers, providers } from "ethers";
import { blockchainConfig, web3Provider } from "../../config/blockchainConfig"

function TopNav() {
	// const {currentUser, signOut} = useContext(AuthContext)
	// const history = useHistory()
	const { status, connect, account } = useMetaMask()
	const [desc, setDesc] = useState<string>("")
    const [balance, setBalance] = useState(0)

    const getBalance = async (_account:string) => {
        const res = await web3Provider.getBalance(_account)
        setBalance(Number(res) / 10 ** 18)
    }

	useEffect(() => {
		if (status === "initializing") {
			setDesc("Synchronisation with MetaMask ongoing...")
		}

		switch (status) {
			case "connected":
                getBalance(account!)
				setDesc(`Connected account: ${account}`)
				break
			case "connecting":
				setDesc(`Connecting`)
				break
			case "initializing":
				setDesc(`initializing`)
				break
			case "notConnected":
				setDesc(`notConnected`)
				break
			case "unavailable":
				setDesc(`Metamask unavailable`)
				break
			default:
				setDesc(`Can not detect metamask`)
		}
	}, [status, account])

    const InitContract = async() =>{
        // const provider  = new Web3.providers.HttpProvider(blockchainConfig.rpcURL);
        // const web3 = new Web3(provider);
        // const balance = await web3.eth.getBalance(account!)
        // setBalance(Number(balance))
    }

	return (
		<div className={styles.topNavBarDiv}>
			<div className={styles.topNavBarUserInfoDiv}>
				{status === "notConnected" ? (
					<FButton
						type="secondary"
						padding="0.5rem"
						onClick={connect}
					>
						{"Connect"}
					</FButton>
				) : (
					<Fragment>
                        <FStyledText font={FontTypes.B16}>{`Token Balance: ${balance ?? 0} ETH`}</FStyledText>
						<FStyledText font={FontTypes.B16}>{desc}</FStyledText>
					</Fragment>
				)}
			</div>
			{/* <Breadcumb routes={routes}/>  */}
		</div>
	)
}

export default TopNav
