import { Vector } from '../base/Vector';
import { Entity } from '../objects/base/Entity';

import type { Constructor } from '../types/types';

export class Field {
    public readonly size: Vector;

    public readonly objects: Entity[] = [];

    constructor(sizeX: number, sizeY: number) {
        this.size = new Vector(sizeX, sizeY);
    }

    public add(entity: Entity) {
        this.objects.push(entity);
    }

    public getEntitiesByClass<T extends Entity>(class_: Constructor<T>): T[] {
        return this.objects.filter((ent) => ent instanceof class_) as T[];
    }

    public inRangeEnt(entity: Entity, range: number): Entity[] {
        const { position } = entity;

        return this.objects.filter((ent) => ent !== entity && ent.isInRange(position, range));
    }
}
