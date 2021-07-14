import Block from './modules/Block';
import Blockchain from './modules/Blockchain';

let scriptCoin = new Blockchain();
scriptCoin.addBlock(new Block(1, '16/07/2021', { amount: 4 }));
scriptCoin.addBlock(new Block(2, '17/07/2021', { amount: 10 }));

console.log(JSON.stringify(scriptCoin, null, 4));
