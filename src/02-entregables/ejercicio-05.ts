console.log("************** DELIVERABLE 05 *********************");
class SlotMachine {
  protected bote: number
  protected coins: number

  constructor() {
    this.bote = 100
    this.coins = 0
  }

  play(coin?: number) {
    if (coin !== undefined) {
      this.insertCoins(coin)
    }
    if (this.coins === 0) {
      return console.log("Debes ingresar al menos 1 moneda.")
    }
    const ruleta1 = Boolean(Math.round(Math.random()))
    const ruleta2 = Boolean(Math.round(Math.random()))
    const ruleta3 = Boolean(Math.round(Math.random()))
    if (ruleta1 === ruleta2 && ruleta1 === ruleta3) {
      this.bote -= 3
      this.coins -= 1
      console.log(`Felicidades!!!. Has ganado 3 monedas!!, te queda${this.coins > 1 ? "n" : ""} ${this.coins} tirada${this.coins > 1 ? "s" : ""}`)
    } else if (this.coins > 1) {
      this.coins -= 1
      console.log(`Mas suerte la proxima vez, te queda${this.coins > 1 ? "n" : ""} ${this.coins} tirada${this.coins > 1 ? "s" : ""}`)
    } else if (this.coins === 1) {
      this.coins -= 1
      console.log('Mas suerte la proxima vez, no te quedan tiradas')
    }

  }

  insertCoins(coin: number) {
    this.coins += coin
    this.bote += coin
    console.log(`Has insertado ${coin} moneda${coin > 1 ? "s" : ""}.`)
  }
}

const machine1 = new SlotMachine()
machine1.play(5)
machine1.play()
machine1.play()
machine1.play(1)
machine1.play()
console.log(machine1)