const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityCloseAction - Closes trove
 */
class LiquityCloseAction extends Action {
  /**
   * @param from Address that will supply the LUSD needed to repay the debt
   * @param to Address that will receive the freed collateral
   */
  constructor(from, to) {
    requireAddress(from);
    requireAddress(to);
    super('LiquityClose',
        getAddr('LiquityClose'),
        ['address','address'],
        [from, to]
    );
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('LUSD').address, owner: this.args[0]}];
  }
}

module.exports = LiquityCloseAction;
