import { MdSpaceDashboard } from 'react-icons/md'
import { GiAirMan } from 'react-icons/gi'
import logoD from '../../assets/Logo-Dark.svg'
import Image from 'next/image'
import Elp from '../../assets/elp.svg'
import { BsCoin } from 'react-icons/bs'
import { AiFillWallet, AiOutlineTransaction } from 'react-icons/ai'
import { BiNetworkChart } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import Metamaskicon from '../../assets/metamask.svg'
import WalletConnect from '../../assets/walletconnect.png'

export const LogoDark = ({ height, width }) => (
  <Image src={logoD} height={height} width={width} />
)

export const LogoElipse = ({ height, width, className }) => (
  <Image src={Elp} height={height} width={width} className={className} />
)

export const MetamaskLogo = ({ height, width }) => (
  <Image src={Metamaskicon} height={height} width={width} />
)

export const WalletConnectLogo = ({ height, width }) => (
  <Image src={WalletConnect} height={height} width={width} />
)

export const Icons = {
  wallet: <BsCoin />,
  apps: <MdSpaceDashboard />,
  nft: <GiAirMan />,
  connect: <AiFillWallet />,
  network: <BiNetworkChart />,
  cross: <GrFormClose />,
  transaction: <AiOutlineTransaction />,
}
