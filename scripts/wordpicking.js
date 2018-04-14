$(document).ready(function(){
    loadWords();
});

function loadWords() {
    var randWords = getRandom(words, 10);
    var wordIndex = 0;
    console.log(randWords);

    var table = $('#wordgame-table');
    for(var i = 0;i < randWords.length / 2;i++) {
        var row =  $('<tr>').addClass('gametable-row').attr('id', 'gametable-row' + i);
        for(var j = 0;j < 2;j++) {
            var col = $('<td>').addClass('gametable-col').text(randWords[++wordIndex]);
            row.append(col);
        }
        table.append(row);
    }

    /*$.each(randWords, function() {
        var rowId = 'gametable-row' + rowi;

        $('<tr>', {
            'class': 'gametable-row',
            'id': rowId
        }).appendTo('#wordgame-table');

        $('<td>', {
            'class': 'gametable-col',
            'text': randWords[++coli],
        }).hide().appendTo(rowId).fadeIn('slow');

        $('<td>', {
            'class': 'gametable-col',
            'text': randWords[++coli],
        }).hide().appendTo(rowId).fadeIn('slow');

        rowi++;
    });*/
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

var words = 
['Adventure', 'Amazing', 'Bed', 'Bliss', 'Broken', 'Calm', 'Charm', 'Cheer', 'Childhood', 'Clumsy',
 'Comfort', 'Cry', 'Dance', 'Dark', 'Daydream', 'Death', 'Defeat', 'Depression', 'Embrace', 'Empty',
 'Excitement', 'Family', 'Feather', 'Fireflies', 'Fireworks', 'Flower', 'Forgive', 'Friends',
 'Happiness', 'Heart', 'Holiday', 'Hope', 'Joy', 'Laugh', 'Lazy', 'Loud,Love', 'Lucky', 'Marriage',
 'Memories', 'Misery', 'Misfortune', 'Ocean', 'Passion', 'Peaceful', 'Pain', 'Play', 'Prayer',
 'Precious', 'Promise', 'Rainbow', 'Romance', 'Rose', 'Sadness', 'Scars', 'Shame', 'Sing', 'Smile',
 'Special', 'Sunny', 'Sunset', 'Sweet', 'Together', 'Tragedy', 'Treasure', 'Vacation', 'Wonderful',
 'Afterimage', 'Agnozing', 'Ambient', 'Analysis', 'Atone', 'Aura', 'Breath', 'Cage', 'Captive',
 'Contamination', 'Covet', 'Crimson', 'Destiny', 'Determination', 'Disarray', 'Disoriented',
 'Despise', 'Disown', 'Effulgent', 'Entropy', 'Eternity', 'Extreme', 'Fester', 'Graveyard',
 'Heavensent', 'Horror', 'Imagination', 'Incapable', 'Incongruent', 'Inferno', 'Insight',
 'Judgement', 'Lust', 'Meager', 'Melancholy', 'Fickle', 'Frightening', 'Philosophy', 'Pleasure',
 'Portrait', 'Raindrops', 'Sensation', 'Starscape', 'Suicide', 'Tenacious', 'Time', 'Unending',
 'Uncontrollable', 'Uncanny', 'Unrestrained', 'Unstable', 'Vertigo', 'Vibrant', 'Wrath', 'Anger',
 'Boop', 'Bouncy', 'Bubbles', 'Bunny', 'Candy', 'Cheeks', 'Chocolate', 'Clouds', 'Cute', 'Doki doki',
 'Games', 'Giggle', 'Email', 'Fantasy', 'Fluffy', 'Hair', 'Hop', 'Headphones', 'Heartbeat', 'Jump', 'Jumpy',
 'Lipstick', 'Kawaii', 'Kiss', 'Marshmallow', 'Melody', 'Milk', 'Mouse', 'Nibble', 'Nightgown', 'Papa',
 'Parfait', 'Playground', 'Poof', 'Pout', 'Puppy', 'Swimsuit', 'Shopping', 'Skipping', 'Socks', 'Spinning',
 'Sticky', 'Strawberry', 'Sugar', 'Summer', 'Twirl', 'Waterfall', 'Valentine', 'Vanilla']