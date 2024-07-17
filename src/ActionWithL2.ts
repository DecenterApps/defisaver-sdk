import Dec from 'decimal.js';
import AbiCoder from 'web3-eth-abi';
import { Action } from './Action';
import ActionAbi from './abis/Action.json';

/**
 * Single L2 action that can be executed directly, or combined into a set (ie. supply a vault)
 *
 * @category Base Classes
 */
export class ActionWithL2 extends Action {
  /**
   * Encode arguments for calling the action via DsProxy
   */
  encodeForL2DsProxyCall(): string { return this.encodeInputs(); }

  encodeForL2Recipe() { return `0x${this.encodeInputs().slice(10)}`; } // cut the method id

  encodeInputs() {
    const _arg = this._replaceWithPlaceholders(this.args, this.paramTypes);
    const _paramType = this._formatType(this.paramTypes);
    const executeActionDirectAbi: any = ActionAbi.find(({ name }) => name === 'executeActionDirect');
    return AbiCoder.encodeFunctionCall(executeActionDirectAbi, [AbiCoder.encodeParameter(_paramType, _arg)]);
  }

  addressToBytes20(address:string) { return address.slice(2); }

  boolToBytes1(bool:boolean) { return bool ? '01' : '00'; }

  async getEthValue() { return '0'; }

  numberToBytes2(number:number) {
    const hexNumber = number.toString(16);
    return hexNumber.padStart(4, '0');
  }

  numberToBytes1(number:number) {
    const hexNumber = number.toString(16);
    return hexNumber.padStart(2, '0');
  }

  numberToBytes32(number:number) {
    return AbiCoder.encodeParameter(
      'bytes32',
      AbiCoder.encodeParameter('uint256', number),
    ).slice(2);
  }
}
