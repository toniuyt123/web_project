$(document).ready(function(){
    var music = document.createElement('audio');
    music.setAttribute('src', './audio/[DDLC]wordgamemusic.mp3');
    music.autoplay = true;
    music.volume = 0.2;
    createTable();
});

var wordCount = 0;
var constructed = '';
var clickSound = document.createElement('audio');
clickSound.setAttribute('src', './audio/word-click.mp3');

function createTable() {
    var colId = 0;
    var table = $('<table>').attr('id','wordgame-table');
    for(var i = 0;i < 5; i++) {
        var row =  $('<tr>').addClass('gametable-row').attr('id', 'gametable-row' + i);
        for(var j = 0;j < 2;j++) {
            var col = $('<td>').addClass('gametable-col').attr('id', 'gametable-col' + colId++).click(function() {
                clickSound.play();
                $('#word-counter').text(++wordCount);
                constructName($(this));
                if(wordCount == 21) {
                    $('.method-content p, #table-here').remove();
                    showFinalName();
                    return;
                }
                loadWords();
            });
            row.append(col);
            $('<div />', {
                'class': 'horizontal-devider-small'
            }).appendTo(col);
        }
        table.append(row);
    }
    table.appendTo('#table-here')
    loadWords();
}

function loadWords() {
    var randWords = getRandomSet(words, 10);

    for(var i = 0;i < randWords.length;i++) {
        $('#gametable-col' + i).text(randWords[i]);
    }
}

function constructName(choice) {
    word = choice.text();
    
    letters = getRandomNum(1, 3);
    index = getRandomNum(0, word.length - letters);

    for(var i = 0;i < letters;i++) {
        constructed += word[index + i];
    }
}

function showFinalName() {
    console.log("at first = " + constructed);
    constructed = constructed.toLowerCase();
    removal = getRandomNum(10, constructed.length / 1.5);

    //shortening
    for(var i = 0;i < removal;i++) {
        rmIndex = getRandomNum(0, constructed.length);

        constructed = splitString(constructed, rmIndex);
    }
    console.log("shortening = " + constructed);

    //remove much volews
    var chanceToRemove = 0;
    var lastLetter = 2;
    for(var i = 0;i < constructed.length;i++) {
        if(consonants.includes(constructed[i])) {
            if(lastLetter == 1) {
                chanceToRemove = 0;
            } else {
                chanceToRemove += 33;
            }
            lastLetter = 0;
        } else {
            if(lastLetter == 0) {
                chanceToRemove = 0;
            } else {
                chanceToRemove += 33;
            }
            lastLetter = 1;
        }

        removeRoll = getRandomNum(1, 100);
        if(chanceToRemove > removeRoll) {
            constructed = splitString(constructed, i);
            i--;
        }
    }
    constructed = constructed.charAt(0).toUpperCase() + constructed.slice(1);
    console.log("more readable = " + constructed);

    $("<h1>").text("You got:").addClass("game-result-text").appendTo(".method-content")
        .append($("<br>")).append($("<span>").text(constructed));
    $("<div>").text("< Try Again").addClass("right-text").appendTo(".method-content").click(function() {
        window.location.reload();
    }).mouseenter(function() {
        $(this).css('cursor','pointer');
    });;
}

function splitString(word, index) {
    return word.substring(0, index) + word.substring(index + 1);
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSet(arr, n) {
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

 var consonants = ['a', 'e', 'i', 'o', 'u', 'y'];