import Block from './Block';

/* *
 * Implements a Blockchain Class implementing an instance of chain of multiple Blocks.
 */
export default class Blockchain {
	/* *
     * Initializes a new {@code Blockchain} instance. 
     *
     * @param {array Block} chain - an array of multiple blocks combined to form a blockchain.
     * 
     * @returns {void}
     */
	constructor() {
		this.chain = [ this.createGenesisBlock() ];
	}

	/* *
     * Creates the first blcok in the blockchain. The first block has to be manually created and is called the Genesis Block.
     *
     * @returns {Block}  - the first block - the genesis block
     */
	createGenesisBlock = () => {
		return new Block(0, '15/07/2020', 'Genesis Block', '0');
	};

	/* *
     * Gets the latest block in the blockchain. 
     *
     * @returns {Block}  - the latest block
     */
	getLatestBlock = () => {
		return this.chain[this.chain.length - 1];
	};

	/* *
     * Adding a new block on to the chain - array of Blocks
     * Set the previousHash
     * Calculate new hash
     * Push the Block
     * 
     * @param {Block} newBlock - the new block to be added
     * @returns {void}  
     */
	addBlock = (newBlock) => {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	};

	/* *
     * Verifies the integrity of Blockchain.
     * 
     * @returns {boolean} - blockchain valid/invalid.
     */
	isChainValid = () => {
		for (let i = 1; i < this.chain.length; ++i) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];
			return (
				currentBlock.hash !== currentBlock.calculateHash() ||
				currentBlock.previousHash !== previousBlock.hash
			);
		}
	};
}
