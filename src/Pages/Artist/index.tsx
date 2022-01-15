import React, { useEffect, useState } from 'react'
import ArtistMembersJSON from '../../contracts/ArtistMembers.json'
import ArtProjectsJSON from '../../contracts/ArtProjects.json'
import MainGameJSON from '../../contracts/MainGame.json'
import FundRasingShareTokenJSON from '../../contracts/FundRasingShareToken.json'
import PlatformTokenJSON from '../../contracts/PlatformToken.json'
import { web3Provider } from '../../config/blockchainConfig'
import { ArtistMembersContract, ArtistMembersInstance, ArtProjectsContract, ArtProjectsInstance, FundRasingShareTokenContract, FundRasingShareTokenInstance, MainGameContract, MainGameInstance, PlatformTokenContract, PlatformTokenInstance } from '../../types/truffle-contracts'
import { useMetaMask } from 'metamask-react'

var contract = require("@truffle/contract");

function Artist() {
    const { account } = useMetaMask()
    const [artistMemberInstance, setArtistMemberInstance] = useState<ArtistMembersInstance>()
    const [mainGameInstance, setMainGameInstance] = useState<MainGameInstance>()
    const [artProjectInstance, setArtProjectInstance] = useState<ArtProjectsInstance>()
    const [platformTokenInstance, setPlatformTokenInstance] = useState<PlatformTokenInstance>()
    const [fundrasingInstance, setFundrasingInstance] = useState<FundRasingShareTokenInstance>()

    const InitContract = async() =>{
        try {
            const ArtistContract = await contract(ArtistMembersJSON) 
            await ArtistContract.setProvider(window.ethereum)
            const ArtistContractWithProvider = ArtistContract as ArtistMembersContract
            const instanceArtistContract = await ArtistContractWithProvider.deployed();
            setArtistMemberInstance(instanceArtistContract)

            const MainGame = await contract(MainGameJSON) 
            await MainGame.setProvider(window.ethereum)
            const MainGameWithProvider = MainGame as MainGameContract
            const instanceMainGame = await MainGameWithProvider.deployed();
            setMainGameInstance(instanceMainGame)

            const ArtProject = await contract(ArtProjectsJSON) 
            await ArtProject.setProvider(window.ethereum)
            const ArtProjectWithProvider = ArtProject as ArtProjectsContract
            const instanceArtProject = await ArtProjectWithProvider.deployed();
            setArtProjectInstance(instanceArtProject)

            const FundRasingShareToken = await contract(FundRasingShareTokenJSON) 
            await FundRasingShareToken.setProvider(window.ethereum)
            const FundRasingShareTokenWithProvider = FundRasingShareToken as FundRasingShareTokenContract
            const instanceFundRasingShareToken = await FundRasingShareTokenWithProvider.deployed();
            setFundrasingInstance(instanceFundRasingShareToken)

            const PlatformToken = await contract(PlatformTokenJSON) 
            await PlatformToken.setProvider(window.ethereum)
            const platformTokenWithProvider = PlatformToken as PlatformTokenContract
            const instancePlatformToken = await platformTokenWithProvider.deployed();
            setPlatformTokenInstance(instancePlatformToken)
        } catch (error) {
            alert('Contract not deployed.')
        }
    }

    const InitArtistMemberList = async() =>{
        try {
            const result = await artistMemberInstance?.getAllArtists()
            console.log("result", result)
        } catch (error) {
            alert(JSON.stringify(error))
        }   

    }

    useEffect(() => {
        InitContract()
    }, [])

    useEffect(() => {
        if(artistMemberInstance !== null){
            InitArtistMemberList()
        }
    }, [artistMemberInstance])
    return (
        <div>
            <button
                onClick={async () => await mainGameInstance?.registerAsArtist("dummy name", "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",{
                    from: account!
                })}
            >Add artist</button>
        </div>
    )
}

export default Artist
