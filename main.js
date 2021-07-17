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
     * @param {string} hash - hash of the current block.
     * @param {number} nonce - random data associated to the block - helps implement proof of work.
	 * @returns {void}
	*/
	constructor(index, timestamp, data, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;

		this.hash = this.calculateHash();
		this.nonce = 0;
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
				this.nonce +
				JSON.stringify(this.data)
		).toString();
	};

	/* *
	* Calculates the hash function of a block using SHA256 hash function from the crypto-js library.
	*
	* @param {number} difficulty - the number of zeroes in the beginning we want, will keep calculating hash until finds one - helps implement proof of work.
	* @returns {void}
	*/
	mineBlock = (difficulty) => {
		while (
			this.hash.substring(0, difficulty) !==
			Array(difficulty + 1).join('0')
		) {
			this.nonce += 1;
			this.hash = this.calculateHash();
		}

		console.log('Block mined: ' + this.hash);
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
     * @param {number} difficulty - number of zeroes in the beginning of the hash.
     * 
     * @returns {void}
     */
	constructor() {
		this.chain = [ this.createGenesisBlock() ];
		this.difficulty = 3;
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
		// newBlock.hash = newBlock.calculateHash();
		newBlock.mineBlock(this.difficulty);
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

let scriptCoin = new Blockchain();

console.log('Mining Block 1...');
scriptCoin.addBlock(new Block(1, '16/07/2021', { amount: 4 }));

console.log('Mining Block 2...');
scriptCoin.addBlock(new Block(2, '17/07/2021', { amount: 10 }));

// console.log(JSON.stringify(scriptCoin, null, 4));
