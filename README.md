# NEO HACKATHON
The project delivers a DevOps Engine to smart contracts to handle exploits on chain via attack vector patterns recognition. It uses the transaction in the Mempool and if any of the transaction  patterns match the attack vector patterns, it will directly alert the owner of the contract and pause the contract immediately.

The other scope of the project's engine is to enable alerting the users on any events that are subscribed to. 

The use cases include:
- Defi ecosystems contracts 
- User trust dependency by enabling security over transperancy
- Staying on date with crucial actions over your contracts throguh alerting
- Avoiding exploits by the Monitoring


### Loom Link -
https://www.loom.com/share/978e6068b44b48578c33de3a88852ab0
## Application and usage

This MSA based event driven Microservice is built to monitor various transactions towards a specific contract and to trigger a specific action based on the transaction type if malicious.
![Screenshot 2023-04-13 170829](https://user-images.githubusercontent.com/81789395/231747863-17e65eb3-9eda-4343-ba20-cebca0fcb115.png)


Note : The contract code is deliberately made vulnerable to reentrancy attack and TOD attack for demonstration purpose.

Current MVP version is built to monitor reentrancy attack and Transaction-Ordering Dependence (TOD) Attack.

All the events emitted are also stored in mongoDB
There are 3 microservices in this project:
1. Listener_MS - This microservice listens to the following events
   
   a. Stake --stakes ether from user
   
   b. Unstake --unstakes ether from contract

2. MemPool_MS - this microservice monitors the mempool for following interaction patterns to PAUSE THE CONTRACT

    a. Same function being called consecutively by same address within 20 blocks

    b. Gas sent for the transaction is less than required

    c. Stake and unstake are called within 20 blocks of each other

    d. consecutive ether transfer from contract within 20 blocks

3. Mailing_MS - This microservice sends an email to the owner of smartcontract upon event emit of stake or unstake.


4. Kafka Docker setup - a single channel called stakeClient is used to communicate between Listener_MS and Mailer_MS.


## Getting started
Start port for Kafka 9092; Zookeeper 2181;
```
export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)

```
### Start all the services
```
npm run ClearDocker
npm run startKafka
npm run startListener
npm run startMem
npm run startMailer
```
in different Bash instances

## Testing

go to contracts folder and copy code to remix and run at address 0xb95634DC908C2b3A55f1d9Bb6876b354c24dA13c ;

call stake with value 1000 or 1000000000000000000 wei ;

reduce gas fee in metamask to test mempool_MS response ;

check mail upon listener_MS response from CatnipKong05 ;


