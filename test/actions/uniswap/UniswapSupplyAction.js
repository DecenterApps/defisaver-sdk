const dfs = require('../../../index.js');
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: UniswapSupplyAction', () => {
  let action;

  context('Supply ETH/DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswap.UniswapSupplyAction(
        getAssetInfo('ETH').address,
        getAssetInfo('DAI').address,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        assetAmountInWei('1', 'ETH'),
        assetAmountInWei('1000', 'DAI'),
        assetAmountInWei('1', 'ETH'),
        assetAmountInWei('1000', 'DAI'),
        Date.now() + 1000 * 60 * 10,
      );
    })
    it('encodeForCall', () => encodeForCall(action));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '1');
    })
  })

  context('Supply USDC/DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswap.UniswapSupplyAction(
        getAssetInfo('USDC').address,
        getAssetInfo('DAI').address,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        assetAmountInWei('1000', 'USDC'),
        assetAmountInWei('1000', 'DAI'),
        assetAmountInWei('1000', 'USDC'),
        assetAmountInWei('1000', 'DAI'),
        Date.now() + 1000 * 60 * 10,
      );
    })
    it('encodeForCall', () => encodeForCall(action));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 2);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('USDC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
