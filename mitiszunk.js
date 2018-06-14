var drinks = [
    'sör',
    'bor',
    'pálinka',
    'vodka',
    '4-1-es vadász dögborból',
    'habos unicum 2.0',
    'unicum',
    'deci kevert',
    'portoricoi',
    'csibi',
    'whiskeykóla',
    'hargita gyöngye elvitelre!',
    'kűmőves actimel',
    'szilva ízű szeszes ital',
    'cherry',
    '1-1-es vodkasprite (1-1 korsó)',
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
    'napoleon konyak'
];

var randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];

window.onload = function () {
    document.getElementById('mitiszunk').innerText = randomDrink;
}
