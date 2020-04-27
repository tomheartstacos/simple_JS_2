var repository = [
  {
    creatureName : 'Metapod',
    creatureHeight : 0.7,
    creatureAbilities : ['Shed-skin'],
    creatureTypes : ['Bug'],
  },
  {
    creatureName : 'Charmander',
    creatureHeight : 2.00,
    creatureAbilities : ['Blaze', 'Solar-power'],
    creatureTypes : ['Fire'],
  },
  {
    creatureName : 'Squirtle',
    creatureHeight : 0.5,
    creatureAbilities : ['Rain-dish', 'Torrent'],
    creatureTypes : ['Monster', 'Water  1'],
  },
];

for ( let i = 0; i < repository.length; i++) {
  document.write('<h2>' + repository[i].creatureName + '</h2>' + ' Height: ' + repository[i].creatureHeight)
if (repository[i].creatureHeight >= 2.00) {
  document.write(' (Wow that\'s big!)' )
  }
}
