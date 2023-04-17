import { System } from '@lastolivegames/becsy'
import { TestComponent } from './TestComponent'

export class SystemWrite extends System {
    test = this.singleton.write(TestComponent)

    initialize() {
        console.log(`Initial value of ${this.test.value}`)
        this.test.value = 1
        console.log(`Writing value to ${this.test.value}`)
    }
}