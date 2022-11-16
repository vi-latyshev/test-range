export class Vector {
    constructor(
        public x: number = 0,
        public y: number = 0
    ) { }

    public copy(vector: Vector): this {
        const { x, y } = vector;

        this.x = x;
        this.y = y;

        return this;
    }

    public distanceSqr(vector: Vector): number {
        const x = this.x - vector.x;
        const y = this.y - vector.y;

        return x * x + y * y;
    }

    public distance(vector: Vector): number {
        return Math.sqrt(this.distanceSqr(vector));
    }

    public isInRange(vector: Vector, range: number) {
        // return this.position.distance(vector) < range; // less perf
        return this.distanceSqr(vector) < range ** 2;
    }

    public toString(): string {
        return `Vector(${this.x},${this.y})`;
    }
}
