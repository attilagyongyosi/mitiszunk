var drinks = [
    'sör',
    'bor',
    'pálinka',
    'vodka',
    '4-1-es vadász dögborból',
    'rozé',
    'ouzo',
    'abszint',
    'pultjava',
    'tálca kacsa',
    'tüske',
    'almáspite',
    'ukránmetil',
    'whiskey',
    'tátratea',
    'napoleon konyak',
];

var randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];

window.onload = function () {
    document.getElementById('mitiszunk').innerText = randomDrink;
}
