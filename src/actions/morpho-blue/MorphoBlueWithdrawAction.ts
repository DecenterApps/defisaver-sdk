import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoBlueWithdrawAction - Withdraw interest earning tokens from MorphoBlue
 *
 * @category MorphoBlue
 */
export class MorphoBlueWithdrawAction extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param withdrawAmount - Amount of tokens to withdraw (uint.max for full withdrawal)
   * @param onBehalf - From whose position should we withdraw tokens
   * @param to - address which will receive withdrawn tokens
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    withdrawAmount:uint256,
    onBehalf:EthAddress,
    to:EthAddress,
  ) {
    super(
      'MorphoBlueWithdraw',
      getAddr('MorphoBlueWithdraw'),
      [['address', 'address', 'address', 'address', 'uint256'], 'uint256', 'address', 'address'],
      [[loanToken, collateralToken, oracle, irm, lltv], withdrawAmount, onBehalf, to],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [];
  }
}
