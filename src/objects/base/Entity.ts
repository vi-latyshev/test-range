import { Vector } from '../../base/Vector';

export class Entity {
    public readonly position: Vector = new Vector();

    get ClassName() {
        return this.constructor.name;
    }

    public distanceSqr(vec: Vector | Entity): number {
        if (vec instanceof Vector) {
            return this.position.distanceSqr(vec);
        }

        return this.position.distanceSqr(vec.position);
    }

    public distance(vec: Vector | Entity): number {
        if (vec instanceof Vector) {
            return this.position.distance(vec);
        }

        return this.position.distance(vec.position);
    }

    public isInRange(vec: Vector | Entity, range: number) {
        // return this.distance(vector) < range; // less perf

        if (vec instanceof Vector) {
            return this.distanceSqr(vec) < range ** 2;
        }

        return this.distanceSqr(vec) < range ** 2;
    }
}
