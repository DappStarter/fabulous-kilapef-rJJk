require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember honey hockey argue bone soccer'; 
let testAccounts = [
"0x832f09348e4089540132923d4ec79e77cf1cea907768c98532824cf9c7e94eb8",
"0x0238debd12ee546fc8534041abf52d0fc29bdb65908e53a4f3d1032991d66d50",
"0x8e7da47e8146b0951718699a2467c11dc8f37e0156643503a058f37847b416ff",
"0x84402d5691b1b4b4f43fef97557730ef1f7b2cb141e12251e831ad5b69e66066",
"0x1596b91183a764ee769cbf389cd031d46bd2c5920a177d685a357052c80602dc",
"0x342acf6cb7f3430dbee6393dba40a5bc8b3778f3050338da752b691f2db5030a",
"0xf9798188dcc911c24957cc163aa3148538c8cae9dab70c30c353fcdbaff6e76a",
"0xe200159d4a91cb36d998206c1edcd6fc2fc09b701da30aece3371bb1df07ced3",
"0x68f260bf946d7b8c0a8a50d5c55ea57cfcf843aeffb67d3ea44392ee174678f5",
"0xbfdc8fdd290d3843a043027ab0a5f04fc23d12e8d2f80ab3ac3143bd4b2d4abb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

