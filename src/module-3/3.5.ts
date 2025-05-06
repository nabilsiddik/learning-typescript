{


    // Access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number; // Make private if do not want to access by the child class. Make protected if want to access by the child class

        constructor(id: number, name: string, balance: number){
            this.id = id
            this.name = name 
            this._balance = balance
        }

        addDeposit(amount: number){
            this._balance += amount
        }

        showBalance(){
            console.log(`${this.name} has ${this._balance} taka on his account`)
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            // Getting access from parent classs as it is protected, not private
            console.log(this._balance)
        }
    }

    const goribManusherAccount = new BankAccount(111, 'Mr. Gorib', 20)
    goribManusherAccount.showBalance()
    goribManusherAccount.addDeposit(500)
    goribManusherAccount.showBalance()



}