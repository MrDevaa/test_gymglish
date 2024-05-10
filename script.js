// Code goes here

function countOccurence() {
    var bodyContent = document.querySelector('body').innerHTML;

    bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>|<!--[\s\S]*?-->/g, '');
    bodyContent = bodyContent.replace(/console\.log/g, 'log');
    bodyContent = bodyContent.replace(/o'clock/g, 'clock');
    bodyContent = bodyContent.replace(/<p[^>]*>.*?<\/p>/g, '');

    var words = bodyContent.match(/\b\w+\b/g);
    var occurrences = {};

    words.forEach(function(word) {
        if (occurrences[word]) {
            occurrences[word]++;
        } else {
            occurrences[word] = 1;
        }
    });

    // Renvoyer l'objet occurrences
    return occurrences;
}


