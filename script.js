// Code goes here

function countOccurence(text, occurence) {
  // Supprimer les balises HTML et les commentaires
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/<!--.*?-->/g, '');

  // Si un mot spécifique est spécifié, compter ses occurrences
  if (occurence) {
    // Convertir le texte et l'occurrence en minuscules pour une recherche insensible à la casse
    text = text.toLowerCase();
    occurence = occurence.toLowerCase();
    
    // Compter les occurrences du mot spécifié
    let count = 0;
    let words = text.match(/\b\w+(?:[-']\w+)*\b/g) || [];
    words.forEach(word => {
      if (word.trim() === occurence) {
        count++;
      }
    });
    return count;
  } else {
    // Si aucun mot spécifique n'est spécifié, compter toutes les occurrences de tous les mots
    let words = text.match(/\b\w+(?:[-']\w+)*\b/g) || [];
    let occurrences = {};

    words.forEach(word => {
      if (word.trim() !== '') {
        word = word.toLowerCase();
        occurrences[word] = (occurrences[word] || 0) + 1;
      }
    });

    let totalCount = 0;
    for (let word in occurrences) {
      totalCount += occurrences[word];
    }
    return totalCount;
  }
}
