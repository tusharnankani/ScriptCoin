const SHA256 = require('crypto-js/sha256');

/* *
* Implements a Block Class implementing an instance for creating a Block in the chain.
*/
export default class Block {
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
