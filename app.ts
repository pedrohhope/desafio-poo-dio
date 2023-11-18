import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('Estado inicial da conta: ', peopleAccount)
peopleAccount.deposit(200)
console.log('Estado após o depósito: ', peopleAccount)
console.log(peopleAccount)
peopleAccount.withdraw(200)
console.log('Estado após o saque: ', peopleAccount)
console.log(peopleAccount)
peopleAccount.withdraw(200)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('Estado inicial da conta: ', companyAccount)
companyAccount.deposit(200)
console.log('Estado após o depósito: ', companyAccount)
console.log(companyAccount)
companyAccount.withdraw(200)
console.log('Estado após o saque: ', companyAccount)
console.log(companyAccount)
companyAccount.getLoan(200)
console.log('Estado após o empréstimo: ', companyAccount)
console.log(companyAccount)
