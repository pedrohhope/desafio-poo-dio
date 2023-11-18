export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private readonly status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  protected getName = (): string => {
    return this.name
  }

  protected addBalance = (balance: number): void => {
    this.balance = this.balance + balance
  }

  public deposit(depositValue: number) {
    if (this.validateStatus()) {
      console.log('Voce depositou')
      this.balance = depositValue
    }
  }

  public withdraw = (withdrawValue: number): void => {
    if (this.validateStatus() && this.validateBalance(withdrawValue)) {
      this.balance = this.balance - withdrawValue
      console.log('Voce sacou')
    }
  }

  protected getBalance = (): number => {
    return this.balance
  }

  private validateBalance = (value: number): boolean => {
    if (value > this.balance) {
      throw new Error('Saldo insuficiente');
    }

    return true
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida')
  }
}
