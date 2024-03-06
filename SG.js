document.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.getElementById('generateBtn');
    var storyDiv = document.getElementById('story');

    generateBtn.addEventListener('click', function() {
        var story = generateStory();
        storyDiv.textContent = story;
    });

    function generateStory() {
        var characters = ['John', 'Alice', 'Bob', 'Emily', 'Michael', 'Sarah'];
        var actions = ['found a mysterious key', 'discovered a hidden treasure', 'met a talking cat',
                       'woke up in a different dimension', 'got lost in a magical forest'];
        var locations = ['in a castle', 'underneath the sea', 'on a distant planet', 'in a haunted house',
                         'in a parallel universe'];

        var character = characters[Math.floor(Math.random() * characters.length)];
        var action = actions[Math.floor(Math.random() * actions.length)];
        var location = locations[Math.floor(Math.random() * locations.length)];

        return character + ' ' + action + ' ' + location + '.';
    }
});
