var drinks = [
    'sör',
    'bor',
    'pálinka',
    'vodka',
    '4-1-es vadász dögborból',
    'habos unicum 2.0',
    'unicum',
    'búvár',
    'tengeralattjáró',
    'deci kevert',
    'portoricoi',
    'csibi',
    'whiskeykóla',
    'hargita gyöngye elvitelre!',
    'kőműves actimel',
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
    'napoleon konyak',
    'the famous grouse',
    'cider',
    '12%-os van pur',
    'tátrakacsa',
    'keserű'
];

var renderRandom = function () {
    var randomDrink;
    do {
        randomDrink = drinks[ Math.floor(Math.random() * drinks.length) ];
    } while (randomDrink === localStorage.getItem('drink'));

    localStorage.setItem('drink', randomDrink);
    document.getElementById('mitiszunk').innerText = randomDrink;
};

window.onload = function () {
    renderRandom();
};
