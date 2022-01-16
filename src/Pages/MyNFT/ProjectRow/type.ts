import { OnClickFunction } from "@fantaskticedtechlimited/fui-complib/lib/esm/global.types";
import { ArtistMember } from "../../Artist/ArtistRow/type";

export interface MyArtProject{
  id:number
  artistAddress:string
  name: string
  description: string
  iconURL: string
  targetFundingAmount: number
  currentFundingAmount: number
  totalFunder: number
  isOpen: boolean
  dataURL: string

}

export interface MyShareNFT{
  projectId:number,
  share:number
}

export interface MyArtProjectRowProps {
  index: number;
  nft: MyShareNFT;
  artistList: ArtistMember[]
  projectList: MyArtProject[]
  // onEndTheProject: () => void
}
