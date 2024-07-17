import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a flashloan from Aave v3 with fee enabled
 *
 * @category Flashloans
 */
export class AaveV3FlashLoanAction extends ActionWithL2 implements FlashLoanId {
  public flashLoanId = 5;

  /**
   * @param loanAmounts
   * @param tokens
   * @param modes
   * @param loanPayer
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(tokens: Array<EthAddress>, loanAmounts: Array<uint256>, modes: Array<uint256>, loanPayer: EthAddress, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super(
      'FLAaveV3WithFee',
      getAddr('FLAaveV3'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []],
    );
  }
}
