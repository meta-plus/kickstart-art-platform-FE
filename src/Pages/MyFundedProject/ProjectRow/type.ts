import { OnClickFunction } from "@fantaskticedtechlimited/fui-complib/lib/esm/global.types";
import { ArtistMember } from "../../Artist/ArtistRow/type";

export interface MyFundedArtProject{
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
export interface MyFundedArtProjectRowProps {
  index: number;
  artProject: MyFundedArtProject;
  artistList: ArtistMember[]
  onClaimNFT: () => void
}
