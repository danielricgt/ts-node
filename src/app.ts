const heroes = [
  {
    id: 1,
    name: "batman",
    owner: "DC",
  },

  {
    id: 1,
    name: "SUPERMAN",
    owner: "DC",
  },
];

const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id);
};


const hero = findHeroById(4);
console.log(hero?.name ?? 'hero not found');