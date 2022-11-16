import { Vector } from '../base/Vector';

import { random } from './random';

export const randomVector = (size: Vector) => (
    new Vector(random(0, size.x), random(0, size.y))
);
