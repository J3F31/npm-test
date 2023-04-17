import { CTest } from '@j3f3/ms'
import { TestComponent } from '@j3f3/npm-test'
import { System } from '@lastolivegames/becsy'


export class SystemRead extends System {
    test = this.singleton.read(CTest)

    execute() {
        console.log(`Reading with value of ${this.test.value}`)
    }
}