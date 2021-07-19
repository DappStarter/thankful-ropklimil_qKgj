require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind evil idea fork bottom sure'; 
let testAccounts = [
"0xd12b4a1e192c5999ad8a905786f4bbe829e118a1afc24c9195bd42d9b89de71e",
"0x705b1b31c2d3eaf495e0a8b46a46f8f32fcdea011116c1b6c5de891d0a19e849",
"0xee43946c238dcf33b7f9e9dbaaa2bdd3aede0e9189f019701fa855093a4cfe24",
"0x4073c511072a18a4aa7d5be316b490906f32cfb464030b3b3ba56d5de44088ba",
"0xa52d91e9132bd7617aabfaf59ad288f4a2a5bfd0f33959d9fb3892080b3a5245",
"0xdb7e094e05d7dd0053143b055e0c96fab0f222625b7a27c763dfb1031db5e8ba",
"0x0a2988b4bff7e1e90a6649d4a80fbf19e71a38b53389a8c6d39bd044c19177f7",
"0xa2eaec45e59c28ae9bcce9277f44b359a0a2b622e55024348cb1244daa35aca2",
"0x9d05f177cd47c56d4c04123ae02bc29b084a40da60b7199b20db22729e7ffe14",
"0x97f6cf3d7443433ccfcdafb16277c2fc50f64682eaae4794232359ddeed20ab7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


