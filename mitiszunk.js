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
    'tátrakacsa'
];

var weddingDrinks = [
    'Jägermeister',
    'Unicum',
    'Jim Beam',
    'Vilmoskörte',
    'Metaxa',
    'Gin',
    'Bacardi',
    'Finlandia',
    'Feeney’s',
    'Berentzen',
    'Házi pálinka'
];

var isWeddingDate = function () {
    var weddingDate = new Date('2019-04-26');
    var today = new Date();

    return today.toDateString() === weddingDate.toDateString();
};

var renderRandom = function () {
    var drinkList = isWeddingDate() ? weddingDrinks : drinks;

    if (isWeddingDate()) {
        document.getElementById('lagzi-p').classList.replace('hide', 'show');
    }

    var randomDrink;
    do {
        randomDrink = drinkList[ Math.floor(Math.random() * drinkList.length) ];
    } while (randomDrink === localStorage.getItem('drink'));

    localStorage.setItem('drink', randomDrink);
    document.getElementById('mitiszunk').innerText = randomDrink;
};

window.onload = function () {
    renderRandom();
};
