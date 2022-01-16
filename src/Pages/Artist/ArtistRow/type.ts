
export interface ArtistMember{
  id:number
  artistAddress:string
  name: string
  iconURL: string
}
export interface TopicRowProps {
  index: number;
  artist: ArtistMember;
}
