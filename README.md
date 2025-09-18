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

## subgraph 子图
subgraph 定义了你希望通过 GraphQL API 提供的数据、数据源和数据访问模式。开发者可以选择直接使用别人已经部署[17]的 subgraph，或者自己定义并部署 subgraph。

1. GraphQL Schema GraphQL模式
GraphQL Schema 定义了你想保存和查询的数据类型/实体。也可定义如关系或全文搜索的配置项。
2. subgraph 清单（ yaml 配置）
manifest 定义了 subgraph 索引的智能合约、合约的 ABI、关注这些合约的事件，以及如何将事件数据映射到 Graph 节点存储并允许查询。
3. AssemblyScript 映射
AssemblyScript 映射允许您使用 schema 中定义的实体类型保存要索引的数据。Graph CLI 还使用 schema 与智能合约的 ABI 的组合生成 AssemblyScript 类型。
4. 通过@derivedFrom 建立关系
通过@derivedFrom 字段在实体上定义反向查询，这样就在实体上创建了一个虚拟字段，使它可以被查询，但不能通过映射 API 手动设置。实际上，这是从另一个实体上定义的关系中衍生出来的。这样的关系，对存储关系的两者意义不大，如果只存储一方而派生另一方，则索引和查询性能都会更好。

## subgrap 配置文件解析
    1. subgraph.yaml
    `## 指示当前使用的 graph 解析 API 所使用的版本
    specVersion: 0.0.2  

    ## 描述此 subgraph 的作用目的  ( 可选项 )
    description: Gravatar for Ethereum   

    ## 一个链接指向, 指示此 subgraph 存放的仓库地址 ( 可选项 )
    repository: https://github.com/graphprotocol/example-subgraph  

    ## 此 subgraph 的模式定义 
    schema:  
    ## 模式定义文件路径  
    file: ./schema.graphql  

    ## 数据源定义 
    dataSources:
    ## 描述数据源的数据类型，这里表示数据源是以太坊的合约
    - kind: ethereum/contract
        ## 数据源的名字 
        name: Gravity
        ## 数据源所在的区块链网络，这里 mainnet 表示的是主网 
        network: mainnet
        ## 数据源在区块链网络上的具体相关信息
        source:
        ## 数据源所在的合约地址
        address: '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'
        ## 合约对应的 abi 名字，具体对应到下面 mapping/abis 中的 name 所指示的 ABI 名字 
        abi: Gravity
        ## 进行索引的起始区块
        startBlock: 1000
        ## 数据源字段映射
        mapping:
        ## 目前为固定值，这里只能填写 ethereum/events
        kind: ethereum/events
        ## 解析映射所使用的 API 版本 
        apiVersion: 0.0.4 
        ## Mapping API 解析映射时所使用的语言，当前可填写的值只有 wasm/assemblyscript. 
        language: wasm/assemblyscript
        ## 实体定义
        entities:
            ## 实体的名字，需要和 schema.graphql 中的名字对应
            - Gravatar
        ##  contract 对应的 ABI 文件信息
        abis:
            ## contract 名字
            - name: Gravity
            ## contract 对应的 abi 文件路径
            file: ./abis/Gravity.json
        ## 合于事件对应的处理映射信息
        eventHandlers:
            ## event 的名字
            - event: NewGravatar(uint256,address,string,string)
            ## event 对应在 mapping.ts 文件中的处理函数
            handler: handleNewGravatar
            - event: UpdatedGravatar(uint256,address,string,string)
            handler: handleUpdatedGravatar
        ## mapping.ts 文件存放路径
        file: ./src/mapping.ts`
    2. schema.graphql
    实体定义的文件, 使用 GraphQL 接口定义语言, 具体参考网上相关文档
    3. mapping.ts
    定义如何转换区块数据到实体数据