import { DioAccount } from "./DioAccount";



class PremiumAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    public deposit(depositValue: number) {
        const value = depositValue + 10
        super.deposit(value)
    }

}

export default PremiumAccount;