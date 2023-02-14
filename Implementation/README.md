*Open console from each folder*

ETHEREUM
Start up node:
  geth --identity "node01" --rpc --rpcport "8545" --rpccorsdomain "*" --datadir "./node01" --port "30303" --nodiscover --rpcapi "db,eth,net,web3,personal,miner,admin" --networkid 1900 --nat "any" --allow-insecure-unlock --ipcdisable --unlock 0xe1f76CEc4539F27dc06AF54048dddc0C3680C0f8 --password password.txt

Access node console:
  geth attach http://127.0.0.1:8545

  Start mining:
    miner.start()


TRUFFLE
  Deploy smart contracts:
    truffle migrate


SERVER
  Start up server:
    npm start

  Access Swagger UI to test system
    http://localhost:8080/docs