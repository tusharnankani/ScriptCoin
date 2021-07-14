const SHA256 = require('crypto-js/sha256');

/* *
 * Implements a Block Class implementing an instance for creating a Block in the chain.
 */
class Block {
	/* *
     * Initializes a new {@code Block} instance. 
     *
     * @param {number} index - location where the block sits on the blockchain.
     * @param {string} timestamp - time when the block was created.
     * @param {*} data - all the data associated with the block.
     * @param {string} previousHash - hash of the previous block.
     * @returns {void}
     */
	constructor(index, timestamp, data, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;

		this.hash = this.calculateHash;
	}

	/* *
     * Calculates the hash function of a block using SHA256 hash function from the crypto-js library.
     *
     * @returns {string} hash - calculated hash taking in consideration all related data.
     */
	calculateHash = () => {
		return SHA256(
			this.index +
				this.previousHash +
				this.timestamp +
				JSON.stringify(this.data)
		).toString();
	};
}

/* *
 * Implements a Blockchain Class implementing an instance of chain of multiple Blocks.
 */
class Blockchain {
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
     * @param {Block} - the new block to be added
     * @returns {void}  
     */
	addBlock = (newBlock) => {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	};
}
