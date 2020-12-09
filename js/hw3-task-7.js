const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let id = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        id+= 1;
        const transaction = {
            id,
  amount,
  type,
        };
        
        return transaction;
      
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        let transaction=this.createTransaction(amount, 'deposit');
        this.transactions.push(transaction);
        },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount>this.balance) {
            console.log(`Cнятие суммы ${amount}  не возможно, недостаточно средств, доступно ${this.balance}!`)
            return;
        }
        this.balance -= amount;
        let transaction=this.createTransaction(amount, 'withdraw');
        this.transactions.push(transaction);
  },
   
  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
         if (transaction.id===id) {
             return transaction;
         }
         
        } 
        console.log('Такого id нет');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let typeSum = 0;
        for (const transaction of this.transactions) {
          if (transaction.type===type) {
              typeSum += transaction.amount;
          }
        }
        return typeSum;
  },
};
// console.log(account);
account.deposit(70);
account.deposit(130);
account.withdraw(700);
account.withdraw(50);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('deposit'));