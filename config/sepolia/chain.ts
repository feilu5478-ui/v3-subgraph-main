import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0xCbaec1555707dFAff3303ed6123Db16Eb67F1791'

export const REFERENCE_TOKEN = '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14'
export const STABLE_TOKEN_POOL = '0x1c766A9FD8818B3e8b4f87Ca85Cc40b89843B604'

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
  // '0x319F1266A4008459D761cA2DB7710358ed9a018a',
]

export const STABLE_COINS: string[] = [
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC
  // '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0', // USDT
  // '0x319F1266A4008459D761cA2DB7710358ed9a018a',
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
