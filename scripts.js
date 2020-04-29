var pokemonRepository = (function () {
  var repositoryList = [
    { creatureName : 'Metapod', creatureHeight : 0.7,  creatureAbilities : ['Shed-skin'], creatureTypes : ['Bug'] },
    { creatureName : 'Charmander', creatureHeight : 6, creatureAbilities : ['Blaze', 'Solar-power'], creatureTypes : ['Fire'] },
    { creatureName : 'Squirtle', creatureHeight : 0.5, creatureAbilities : ['Rain-dish', 'Torrent'], creatureTypes : ['Monster', 'Water  1'] },
  ];
  function getAll() {
    return repositoryList;
  }

  function add(pokemon) {
    repositoryList.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll
};
})();
console.log(pokemonRepository.getAll());
pokemonRepository.add({ creatureName: 'Tornadus', creatureHeight: 1.5, types: ['flying'] });
document.write(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {

;
});
