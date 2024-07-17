import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendSelfLiquidateWithCollAction extends Action {
  constructor(controller: EthAddress, controllerId: uint256, percentage: uint256, minCrvUsdExpected: uint256, exchangeOrder: Array<any>, to: EthAddress, sellAllCollateral: boolean, gasUsed: uint32) {
    super(
      'LlamaLendSelfLiquidateWithColl',
      getAddr('LlamaLendSelfLiquidateWithColl'),
      [
        'address',
        'uint256',
        'uint256',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'address',
        'bool',
        'uint32',
      ],
      [controller, controllerId, percentage, minCrvUsdExpected, exchangeOrder, to, sellAllCollateral, gasUsed],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[4],
    ];
  }
}