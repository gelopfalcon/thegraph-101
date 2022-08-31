```
cd docker
ETHEREUM_RPC=mainnet:https://eth-mainnet.alchemyapi.io/v2/<ALCHEMY_API_KEY> docker-compose up
```

Esto nos dice que todo fue bien
```
docker-graph-node-1  | <TIMESTAMP> INFO Downloading latest blocks from Ethereum. This may take a few minutes..., provider: mainnet-rpc-0, component: BlockIngestor
```

Vamos a usar este contract que está en mainet 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB el famoso Crypto Punk ETH-20 .

Instalar 

```
yarn global add @graphprotocol/graph-cli
```

Luego ir a
```
cd subgraphs
```

Seguido, vamos a crear el scaffolding del subgraph

```
graph init \
  --allow-simple-name \
  --from-contract 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB \
  --network mainnet \
  --index-events \
  --node http://localhost:8020/ \
  punks
```
