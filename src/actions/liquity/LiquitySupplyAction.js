const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquitySupplyAction - Supplies collateral to the trove
 */
class LiquitySupplyAction extends Action {
  /**
   * @param collAmount Amount of WETH tokens to supply
   * @param from Address where the tokens are pulled from
   */
  constructor(collAmount, from, upperHint, lowerHint) {
    requireAddress(from);
    super('LiquitySupply',
        getAddr('LiquitySupply'),
        ['uint256','address', 'address','address'],
        [collAmount, from, upperHint, lowerHint]
    );
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('WETH').address, owner: this.args[1]}];
  }
}

module.exports = LiquitySupplyAction;
