

const actionAddresses = {
  // maker
  "McdGenerate": "0x40F0Cf9a9F61251E7f75E59b8dD88fd5d32AA612",
  'McdWithdraw': '0xa819c79b2559AC4E974D4A685063B3f828F47beB',
  'McdSupply': '0x0bCF4f9325D89DC504585D44BB819Df4b153Abf6',
  'McdPayback': '0xC94D840A5eA787Ea796436BF7aba06e54EBc8138',
  'McdOpen': '0x5D1D78fFBef7bE0F936c169fd570326deAA45886',

  // aave
  'AaveBorrow': '0x4c656A1b1683aBe95B5Dc091F09a693eeD8A12fe',
  'AaveMigrateLend': '0x2dc30098E2011B463bB70B955E0682b4AAb98456',
  'AavePayback': '0x1D69cFa59158F2BF5726d55869113DDFB9DeB99B',
  'AaveSupply': '0xaD9355E39DEeD86E4589F98066568A1cB11d191A',
  'AaveWithdraw': '0xaE773cB397b6DE7f4D8377558b0a7632E7536888',

  // aave v1
  'AavePaybackV1': '0xbF3d14995D4A4A719A3B9101DE60baa47De60F39',
  'AaveWithdrawV1': '0xA6664C04eAFab42f8E9cBd2fdB31f496C88D8fe4',

  // compound
  'CompBorrow': '0x3d809511ab8F62a5f14f97f8A947da1b818D28Ad',
  'CompPayback': '0xa690739B3EeF144D313F8E839340c0BB1E9dFC60',
  'CompSupply': '0x0D6F5Ae7b2FA153bC337c64eCA9B9d10E31EF808',
  'CompWithdraw': '0xdF7dF636Fa868933fe8Df49Cc3eD7754Edf4DB20',

  // flashloan
  'FLCustomAaveV2': '0x5F348a484F7A36FE89e371b547a6CA8b7c690012',
  'FLAave': '0xf09723F08eEa6d48e65acE9e4aFE7E09B7884D67',
  'FLAaveV2': '0xAD2b66e18405e913c46e31c6eB15646410923089',
  'FLDyDx': '0xfeE401aa4d4b16F39995cd37EDcD35C5CB02627e',

  // exchange
  'DFSSell': '0xD1AB205932F6fD788dFB06eC4533e8C3711d5d4a',
  'DFSBuy': '0xBD495a33740Bf0dCD998351EE974b5c304eC754C',

  // utils
  'SumInputs': '0x989D9f9d3817aD3F451734A8250553C013034203',
  'SendToken': '0xa3aDe42FAFe3B378654ade89192c18E52FFf20cA',
  'PullToken': '0xdCbdeeB21C1D56C83B8639e28c15478D895E1A9d',

  // uniswap
  'UniSupply': '0x5F128F17737970a3D40256a9fa417C90F4EECAe9',
  'UniWithdraw': '0x47A8e129c4D096407FB8537D4BBdAc077b07bF46'

};

const otherAddresses = {
  'McdCdpManager': '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
  'BCdpManager': '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
}


const getAddr = (name) => {
  if (!actionAddresses[name] && !otherAddresses[name]) return '0x0';

  return actionAddresses[name] || otherAddresses[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
