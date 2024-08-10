# Dogemone blockchain explorer
Block explorer for Dogemone CryptoNote based cryptocurrency.

## Installation

1) It takes data from daemon dogemoned. It should be accessible from the Internet. Run dogemoned with open port as follows:
```bash
./dogemoned --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=53000
```

2) Just upload to your website and change `api` variable in `config.js` and in `config.php` to point to your daemon.

## Docker
We can use docker image to deploy an explorer.

Node URL can be replaced on the docker image build.
```shell
docker build . --build-arg RPC_NODE_URL=http://localhost:53000
```

Or provided as env variable into docker container

```shell
docker run dogemone-explorer --env RPC_NODE_URL=http://localhost:53000
```
