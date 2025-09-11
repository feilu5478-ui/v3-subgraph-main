import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x9e6b86c489EDFeb3CbfB42DCBB72d41dD2D2C56C'

export const REFERENCE_TOKEN = '0x190CC27320047cD3bdaF6a6d8ecEa028D2b79C64'
export const STABLE_TOKEN_POOL = '0x5B2Ce17b650E35e8573D347FA802d1bF74a72a3f'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('5')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  //   '0x82fb927676b53b6eE07904780c7be9b4B50dB80b', // DAI
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC
  // '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0', // USDT
  '0x319F1266A4008459D761cA2DB7710358ed9a018a',
]

export const STABLE_COINS: string[] = [
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC
  // '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0', // USDT
  '0x319F1266A4008459D761cA2DB7710358ed9a018a',
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
