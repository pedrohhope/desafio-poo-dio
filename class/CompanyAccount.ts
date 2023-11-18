import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if (this.validateStatus()) {
      this.addBalance(loanValue)
      console.log('Voce pegou um empréstimo')
    }
  }


}
