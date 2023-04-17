import { Type, Entity } from '@lastolivegames/becsy'

/**
 * @enum {number}
 */
export const NodeTypes = {
    CAMERA: 0,
    LIGHT: 1,
    TRANSFORM_NODE: {
        EMPTY: 2,
        ABSTRACT_MESH: 3
    }
}

export class BabylonNode {
    static schema = {
        type: {type: Type.uint8, default: NodeTypes.TRANSFORM_NODE.EMPTY},
        name: {type: Type.dynamicString(32), default: 'noname'},
        parent: {type: Type.ref, default: undefined}
    }
    /**
     * @type {NodeTypes|number}
     */
    type
    /**
     * @type {string}
     */
    name
    /**
     * @type {Entity}
     */
    parent
}