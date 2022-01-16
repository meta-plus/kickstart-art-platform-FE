import { OnClickFunction } from "@fantaskticedtechlimited/fui-complib/lib/esm/global.types";
import { ArtistMember } from "../../Artist/ArtistRow/type";

export interface ArtProject{
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
export interface ArtProjectRowProps {
  index: number;
  artProject: ArtProject;
  artistList: ArtistMember[]
  onFundTheProject: () => void
}
