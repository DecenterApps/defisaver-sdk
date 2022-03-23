const Action = require("@defisaver/sdk/src/Action");
const {getAddr} = require("@defisaver/sdk/src/addresses");

class ReflexerRatioTrigger extends Action {

  constructor(vaultId, ratio, state) {
    super("ReflexerRatioTrigger", getAddr("ReflexerRatioTrigger"), [["uint256", "uint256", "uint8"]], [[...arguments]]);
  }
}

module.exports = ReflexerRatioTrigger;
