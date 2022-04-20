import Image from 'next/image'
import NFTKitty from '../../assets/kitty-eth.svg'
import Punk from '../../assets/punk.png'
import Ape from '../../assets/ape.svg'
import Doge from '../../assets/Doge.png'
import Dai from '../../assets/DAI.png'
import Link from '../../assets/Link.png'

export const KittyNft = ({ height, width }) => (
  <div
    className={`overflow-hidden w-[${width}px] h-[${height}px] rounded-full`}
  >
    <Image src={NFTKitty} height={height} width={width} />
  </div>
)

export const PunkNft = ({ height, width }) => (
  <div className={`h-[50px] w-[50px] overflow-hidden rounded-full`}>
    <Image src={Punk} height={height} width={width} />
  </div>
)

export const ApeNft = ({ height, width }) => (
  <div className={`h-[50px] w-[50px] overflow-hidden rounded-full bg-white`}>
    <Image src={Ape} height={height} width={width} />
  </div>
)

export const DAI = ({ height, width }) => (
  <div
    className={`overflow-hidden w-[${width}px] h-[${height}px] rounded-full`}
  >
    <Image src={Dai} height={height} width={width} />
  </div>
)
export const DOGE = ({ height, width }) => (
  <div
    className={`overflow-hidden w-[${width}px] h-[${height}px] rounded-full`}
  >
    <Image src={Doge} height={height} width={width} />
  </div>
)
export const LINK = ({ height, width }) => (
  <div
    className={`overflow-hidden w-[${width}px] h-[${height}px] rounded-full`}
  >
    <Image src={Link} height={height} width={width} />
  </div>
)
