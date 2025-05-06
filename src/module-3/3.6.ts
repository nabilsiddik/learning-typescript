{


    // Getter and Setter
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number; // Make private if do not want to access by the child class. Make protected if want to access by the child class

        constructor(id: number, name: string, balance: number){
            this.id = id
            this.name = name 
            this._balance = balance
        }

        // addDeposit(amount: number){
        //     this._balance += amount
        // }

        set deposit(amount: number){
            this._balance += amount
        }

        // getBalance(){
        //     console.log(`${this.name} has ${this._balance} taka on his account`)
        // }

        // Applying getter
        get balance(){
            return this._balance
        }
        
    }


    const goribManusherAccount = new BankAccount(111, 'Mr. Gorib', 20)
    // goribManusherAccount.getBalance()
    // goribManusherAccount.addDeposit(500)
    // goribManusherAccount.getBalance()

    // Getter ta function er moto kaj kortese but property er moto access korte partesi
    const myBalance = goribManusherAccount.balance
    console.log(myBalance)

    goribManusherAccount.deposit = 500



}