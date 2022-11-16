/**
 * Вводные:
 * Представим игровое поле 100x100 метров.
 * В игровом поле находится большое кол-во игровых объектов.
 * У каждого объекта есть координата - XY.
 * Есть персонаж, который тоже находится в игровом поле и тоже имеет координату XY.
 *
 * Задачи:
 * - опишите эффективный алгоритм получения списка игровых объектов, которые находятся в заданном радиусе от персонажа?
 * - набросайте схему классов, которые бы могли представить данную задачку в коде.
 *
 */

/* eslint-disable max-len */
/**
 * Вдохновлялся своим старым кодом
 *
 * Vector - https://gitlab.com/crutches/panorama/-/blob/master/mods/panorama_js/workshop/content/panorama/scripts/core/vector.js
 * Entity - https://gitlab.com/crutches/panorama/-/blob/master/mods/panorama_js/scripts/SDK/Entity.js
 */
/* eslint-enable max-len */

import { Field } from './map/Field';

import { Box } from './objects/Box';
import { Car } from './objects/Car';
import { Hero } from './objects/Hero';
import { Pole } from './objects/Pole';

import { randomVector } from './utils/randomPosition';

const field = new Field(200, 200);

const update = () => {
    const { size } = field;

    // for example
    field.objects.forEach((obj) => {
        if (!(obj instanceof Hero)) {
            return;
        }
        const newPos = randomVector(size);

        obj.position.copy(newPos);
    });
};

const getInfo = () => {
    const range = 50;

    let log = 'All objects\n\n';

    field.objects.forEach((ent) => {
        const { ClassName, position } = ent;
        log += `${ClassName} | ${position}\n`;
    });
    log += '\n-----\n\n';

    const [hero] = field.getEntitiesByClass(Hero);

    const ents = field.inRangeEnt(hero, 50);

    log += `Closest in range: ${range} | count: ${ents.length}\n\n`;

    ents.forEach((ent) => {
        const { ClassName, position } = ent;
        log += `${ClassName} | distance ${hero.distance(ent)} | ${position}\n`;
    });

    log += '-------------------\n';
    console.log(log);
};

const init = () => {
    const { size } = field;

    const hero = new Hero();

    field.add(hero);

    const box = new Box();
    const car = new Car();
    const pole = new Pole();

    box.position.copy(randomVector(size));
    car.position.copy(randomVector(size));
    pole.position.copy(randomVector(size));

    field.add(box);
    field.add(car);
    field.add(pole);

    getInfo();
};

init();
setInterval(getInfo, 2000); // fake render
setInterval(update, 700); // fake update
