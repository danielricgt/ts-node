import { findHeroById } from "./services/hero.services";


const hero = findHeroById(4);
console.log(hero?.name ?? 'hero not found!!');