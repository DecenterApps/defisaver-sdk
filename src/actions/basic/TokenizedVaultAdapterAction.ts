import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';
import { OperationId } from '../../utils/basic-utils';

/**
 * TokenizedVaultAdapterAction - Action that handles ERC4626 vault operations
 * @category BasicActions
 */
export class TokenizedVaultAdapterAction extends Action {
  /**
   * @param amount For DEPOSIT and REDEEM represents exact input token amount, otherwise represents exact output
   * @param minOutOrMaxIn For DEPOSIT and REDEEM represents min output token amount, otherwise represents max input
   * @param vaultAddress Address of the ERC4626 vault
   * @param from Address from which to pull the input token
   * @param to Asset that will receive the output token
   * @param operationId Enum id that represents the selected operation (DEPOSIT, MINT, WITHDRAW, REDEEM)
   */
  constructor(
    amount: uint256,
    minOutOrMaxIn: uint256,
    vaultAddress: EthAddress,
    from: EthAddress,
    to: EthAddress,
    operationId: OperationId,
  ) {
    super(
      'TokenizedVaultAdapter',
      getAddr('TokenizedVaultAdapter'),
      ['uint256', 'uint256', 'address', 'address', 'address', 'uint8'],
      [amount, minOutOrMaxIn, vaultAddress, from, to, operationId],
    );
  }
}
