const { CONFIG, NETWORKS } = require('./config');

const actionAddresses = {
  [NETWORKS.ethereum.chainId]: {
    // utils
    WrapEth: '0x8EbBd35f84D7f0DFCBEf08fD30CD09176133251A',
    UnwrapEth: '0xDB6C8cFDd7c1C0F8895CDBC01Dbf4A6D4B6d2a29',
    PullToken: '0x254cA89a00d53ab61de2Ba5641DBDC01aE48aed4',
    SendToken: '0x5612e490c9549486dF16b34EBfD0E8b6cF6a1717',
    SumInputs: '0x70907d840aBBc984Fd949311d2f005e6aC4a4D7a',
    SubInputs: '0xe1804b756188F63f723d2FECc02988D0Cc1aB823',
    ChangeProxyOwner: '0x81cA52CfE66421d0ceF82d5F33230e43b5F23D2B',
    TokenBalance: '0xa92B177950F1460119940436515FD857C24494BC',
    AutomationV2Unsub: '0xe35Fb12fE9796847751076aCf5ee7d124108612C',

    // exchange
    DFSSell: '0x1abDDCae131ce200e66140d9fBd0C37F7a40e642',

    // maker
    McdGenerate: '0x2bF4586636329Ae930cFe085a1e57BAb4a8f741b',
    McdGive: '0xD2dc5DA4172a3901C9f26c7cd29eFE656Fc20332',
    McdMerge: '0x66c7f4C7e59b6e780142aaD5c9f427FA5F8dfFc6',
    McdOpen: '0x72AFC60B90c976397C37B5c64DDc067Ea521D388',
    McdPayback: '0xb7C2c78846493Bed18fa07B51fcc5EAFAc9d629C',
    McdSupply: '0x91c3167aC51F92c2f720C6A8418FDF46060698A1',
    McdWithdraw: '0x3c232F0ae183C3e2eb421e8e317318Dfe85a7b10',
    McdClaim: '0xd78783b50227A84d43604843065494e2666182Ab',

    // reflexer
    ReflexerSupply: '0xd7a36CD4ce7CCc2F1376Dc5C48BaC84380A4f698',
    ReflexerWithdraw: '0xD8a14d447AB6789F3bf1Eb763b6306db3FC3d666',
    ReflexerPayback: '0xcC6838d8a61a4b29Ea565d39C38b830f1491cb29',
    ReflexerGenerate: '0x8e8Fd178A5FAE3A29F9CB1A06aBBBCFd5B83beb7',
    ReflexerOpen: '0x4704a7cBd4d913d1233765B70531D601b4384011',

    // not deployed as currently not used
    ReflexerNativeUniV2SaviourDeposit: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourGetReserves: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourWithdraw: '0x0000000000000000000000000000000000000000',

    // aave
    AaveBorrow: '0x1B95E800a869bc3F89914470a7901D93D1401cD1',
    AavePayback: '0x066225964999F1D07C888c5Ac4a6C885bDa88b9A',
    AaveSupply: '0xEbB200a529058B561B42Eab510DA157a63243CEc',
    AaveWithdraw: '0x754C58fA92246414a448c1ed44ea3D1AD446d482',
    AaveCollateralSwitch: '0xFf5dfF1B90bd5Aa6E12768AB497dB90cc9DE6F5d',

    // compound
    CompBorrow: '0x8495579BF6Ae848f7E59686536F834f1d2CCd79C',
    CompClaim: '0x81F488cF7A0128A9DB5e7207042cCAB1CB0ac902',
    CompPayback: '0x2881590d5FfBd1e88BFc0Dc292f10e5377977f87',
    CompSupply: '0xB4CEDe40b249b756Ce0EAa3e14F6af89f25f9a3d',
    CompWithdraw: '0x3792F83D6A82091cb53052458038CC86e206463F',
    CompGetDebt: '0xc2B8f8423bc8Fe2e9A44cA9d364d835D1751b725',
    CompCollateralSwitch: '0xC3d89139508A3883775D3d1E62E2A0fea363b448',

    // flashloan
    FLAaveV2: '0xa4d52ED15018a5be4adE5796899e5d75cc8759C1',
    FLDyDx: '0x08AC78B418fCB0DDF1096533856A757C28d430d7',
    FLMaker: '0xd393582bE148A45585aB202Fa7Cc789Fa5127223',
    FLBalancer: '0x5C7a9f4635AE4F95da2e45317311AAe255FB71B3',

    // uniswap
    UniSupply: '0x9935e12F0218E61c27D7f23eAC9A9D6881a078eC',
    UniWithdraw: '0xf8bb8F68b0A45DC315F3f7602a60cfb274B00951',

    // uniswap V3
    UniCollectV3: '0x331D7C3F6E710cB6cFE94c4Aa04AC3345AC00e00',
    UniMintV3: '0x3dF75BE8Fb0a6186BE9705cACaa6dD2a4Ec3e40C',
    UniSupplyV3: '0x0CA4255b37DD083dBD48Ca74d575F46037992520',
    UniWithdrawV3: '0xe06224593D9c860B2fBF39eEA3b9B8A85b77Fbc4',
    UniCreatePoolV3: '0x9058aAbEdEfe652b1d85DBBAB48Dfa78db613C44',

    // dydx
    DyDxWithdraw: '0x827089C5Fc7653655c4080c660Cd8f755F818443',

    // yearn
    YearnSupply: '0x837D6E7F469b3cC820B0a6Da25415D5aE0A861c4',
    YearnWithdraw: '0x563eF9b1075628E62aDc657702517dEA72ca08d6', // CHECK IF REDEPLOY

    // liquity
    LiquityClose: '0x4B2d174129789a88e92D46342201F207132144b7',
    LiquityBorrow: '0xF978d6C5c8af80a059AdB85EEb64F14C9c436D68',
    LiquityOpen: '0x4EFF392cc69B31Ad159EcfA10305251b2d8E40E0',
    LiquityPayback: '0x8fc7D24414e9740ed9841d9205D458e3677e71f7',
    LiquityWithdraw: '0x733F53579bEcdd3Ed07e745A55Ee9af8B9669048',
    LiquitySupply: '0xD539943e080C2a29e3f1DB2d45Ea7240d7ddDEE2',
    LiquitySPDeposit: '0x5aB0244a00a733f16E6b238B462bdF3538C698E1',
    LiquitySPWithdraw: '0xa71817957eaF993fAA9a1F4B5c2402c0aeFCd9C6',
    LiquityStake: '0x671280800B540cbF073561d84A297a2c4c5D529F',
    LiquityUnstake: '0x86FDD4A6438D448a794A44ABBe47D57590b3350d',
    LiquityEthGainToTrove: '0x65e19f967B3F3cB6466110aD238039F5423E3177',
    LiquityClaim: '0x526735aDcBe5c9059275c5ED2E0574b4a24b875e',
    LiquityRedeem: '0x20B78854658011394C931EF2BF3cEEA2Fe62E7f0',

    // lido
    LidoStake: '0x4a7dd38D2BcA817fb68165155F869ca4179d8060',
    LidoWrap: '0xE637544390db79EdDE0a9CAF352ED0FfF7451bDB',
    LidoUnwrap: '0x910F73Fb8C0Bd15423c0D0BaD9F1ed95187a48fD',

    // insta
    InstPullTokens: '0xf2c87782D6Eff0511e82007119BAC40e9ba86F69',

    // balancer
    BalancerV2Supply: '0xE48123018Db5e9075841C61EA702cEca51621191',
    BalancerV2Withdraw: '0xbED38692438b90AF738F8A7A3142C217DE8fB069',
    BalancerV2Claim: '0xEac7c5bEFaA6E17f1A2e86947eEd6419c74A7C03',

    // GUni
    GUniWithdraw: '0x6F7cD7C0Dd3634E14bAB91FDF3bCE0a4315b3C59',
    GUniDeposit: '0xb247cD4cab056800cCDa7cE1AFB781a8bFA9b57A',

    // Rari
    RariDeposit: '0x77A05c15f62F1fA6471D466001E21C1B189fcA9F',
    RariWithdraw: '0xa052eD427EFa63B5bb87c409449a47e7C50317e3',

    // mStable
    MStableDeposit: '0xdf24ed1250fbfa274316b50Bc9A009aFA8F61E16',
    MStableWithdraw: '0xa4d5d3e56012C1eD8aba4bE246964962DC3F735f',

    MStableClaim: '0xD56F0EC66267958e08c91547c259cCAC006BF118',

    McdRatioCheck: '0x3f09773e5e945C6Aa1bc8a8B3492f507620DE1e1',
    GasFeeTaker: '0x431F1E1A9859EF99953801dbdeB31d2846ADcc0d',

    CurveStethPoolDeposit: '0x0f042a5CC97C4cd8D8136c28F966839f195D08B9', // REDEPLOY
    CurveStethPoolWithdraw: '0x2F4ad71Bd8045d0633B304BD2d94ef349eB09105', // REDEPLOY
  },
  [NETWORKS.optimism.chainId]: {
    DFSSell: '0xf6814226b87303ad32567c1f02ea9fbc6b9c0288',

    // basic
    WrapEth: '0xf5617aE21d837FdA141fae979C02D98E00FCF776',
    UnwrapEth: '0x1643233EB2B30DeE380618C4737A339C75acDb00',
    SendToken: '0x3aAaD64B4942be926c3B9D3792B01D517D2F03a4',

    // aave v3
    AaveV3ATokenPayback: '0x09253083d36bba932f6104a91107028F0eb689Da',
    AaveV3Borrow: '0x975b3110443fD803E1720AAfE73596cA78a30f6c',
    AaveV3CollateralSwitch: '0x77b0F048274CE89769E1e689b1fdf448C4683120',
    AaveV3Payback: '0x50b69e4c019Ca6498a412D668D1F249145979b06',
    AaveV3SetEMode: '0xca44924e4A80d03eF4Bcb5aCA6d34307d9465192',
    AaveV3Supply: '0x50Cbbb8B1C09E59e05Ea94BB3583e5649D5fc3E1',
    AaveV3SwapBorrowRateMode: '0xC5CFc61d565D8586979474bab55Fd5b18a105F50',
    AaveV3Withdraw: '0x29b00207CcA815B16A4AD8F6ad259ac644492C5e',

    // qidao 
    // TODO : when adding qidao addresses change constructor in all qidao actions
    FLAaveV3: '0x90931Ea5DAD74855689Da9Fe0269E6C1f9c71Da6',
  },
};

const otherAddresses = {
  [NETWORKS.ethereum.chainId]: {
    RecipeExecutor: '0xe822d76c2632FC52f3eaa686bDA9Cea3212579D8',
    DFSRegistry: '0x287778F121F134C66212FB16c9b53eC991D32f5b',
    DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
    ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',

    McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
    BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
    AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
    UniswapV3PositionManager : '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    RaiWethUniV2LPToken : '0x8aE720a71622e824F576b4A8C03031066548A3B1',
    BalancerToken : '0xba100000625a3754423978a60c9317c58a424e3D',
    CrvToken: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
    Empty: '0x0000000000000000000000000000000000000000',
  },
  [NETWORKS.optimism.chainId]: {
    RecipeExecutor: '0x5c1cFF487Bed642f27b4B931617A96f22A2Dc5dC',
    DFSRegistry: '0xA1A445d1d8F97cBf380E98759230FcC0f2E23fc1',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',

    DSGuardFactory: '0xc19d0F1E2b38AA283E226Ca4044766A43aA7B02b',
    AdminVault: '0xB64dB2153861ddDE62c8038C6A3c6199FCfBD094',
    DefisaverLogger: '0xC0986E9803a41542c5422dbe336F9B68C55E0a49',
    Empty: '0x0000000000000000000000000000000000000000',

    MAI: '0xdFA46478F9e5EA86d57387849598dbFB2e964b02',
  },
};

/**
 *
 * @param {string} name
 * @param {chainId} [chainId]
 * @returns {EthAddress}
 */
const getAddr = (name, chainId) => {
  const _chainId = typeof chainId === 'undefined' ? CONFIG.chainId : chainId;

  const actions = actionAddresses[_chainId];
  const other = otherAddresses[_chainId];

  if (!actions && !other) throw new Error(`Cannot find address for chainId: ${_chainId}.`);
  if (!actions[name] && !other[name]) throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);

  return actions[name] || other[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
