# Uniswap V3 and V3-Tokens Subgraph

## Development

1. Install dependencies
`yarn install`

2. Build a v3 subgraph
`yarn build --network <network> --subgraph-type v3` 

3. Deploy a v3 subgraph
`yarn build --network <network> --subgraph-type v3 --deploy`

4. Build a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens`

5. Deploy a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens --deploy`

Note: Deployments will fail if there are uncommitted changes in the subgraph. Please commit your changes before deploying.


## 使用 Graph CLI 部署命令：
1. 安装 Graph CLI 命令：
`yarn global add @graphprotocol/graph-cli`
或
`npm install -g @graphprotocol/graph-cli`
2. 构建subgraph.yaml文件：
`yarn build --network <network> --subgraph-type v3`
3. 部署至Alchemy命令：
`graph deploy <子图名称> <可选参数：yaml文件名称> --version-label <版本号> --node https://subgraphs.alchemy.com/api/subgraphs/deploy --deploy-key <部署密钥> --ipfs https://ipfs.satsuma.xyz`
例：`graph deploy uni v3-subgraph.yaml --version-label v1 --node https://subgraphs.alchemy.com/api/subgraphs/deploy --deploy-key 8vxxxxxxx --ipfs https://ipfs.satsuma.xyz`
如果没有提供yaml文件名称将默认为subgraph.yaml
4. 部署至studio官方命令：
`graph deploy --node https://api.studio.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ --deploy-key 6cxxxxxxxxxxxxxxxx uni-sep v3-subgraph.yaml`