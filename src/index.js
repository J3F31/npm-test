import { World } from "@lastolivegames/becsy"
import { WorldDefs } from './ecs-defs'

const WorldRef = await World.create({
    defs: WorldDefs
})

WorldRef.build(sys => {
    
})

const run = () => {
    WorldRef.execute()
    requestAnimationFrame(run)
}
run()