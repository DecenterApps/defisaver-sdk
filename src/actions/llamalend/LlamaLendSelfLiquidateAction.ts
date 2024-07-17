import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { CONFIG } from '../../config';
import { EthAddress, uint256 } from '../../types';

/**
 *
 * @category LlamaLend
 */
export class LlamaLendSelfLiquidateAction extends Action {
  /**
  @param controllerAddress Address of the llamalend market controller
  @param minDebtAssetExpected Minimum amount of debt asset as collateral for the user to have
  @param from Address from which to pull debt asset if needed
  @param to Address that will receive the debt asset and collateral asset
  */
  constructor(
    controllerAddress: EthAddress,
    minDebtAssetExpected: uint256,
    from: EthAddress,
    to: EthAddress,
    debtAsset: EthAddress,
  ) {
    super(
      'LlamaLendSelfLiquidate',
      getAddr('LlamaLendSelfLiquidate'),
      ['address', 'uint256', 'address', 'address'],
      [controllerAddress, minDebtAssetExpected, from, to],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[2],
      asset: this.args[4],
    }];
  }
}
