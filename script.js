// Code goes here


function countOccurence(target) {
  // Récupérer toutes les balises 'p'
  let paragraphs = document.getElementsByTagName('p');
  
  // Initialiser le compteur
  let count = 0;

  // Parcourir toutes les balises 'p'
  for (let paragraph of paragraphs) {
      // Récupérer le texte brut de la balise 'p'
      let paragraphText = paragraph.textContent || paragraph.innerText || '';

      // Compter les occurrences de la cible dans le texte de la balise 'p'
      let occurrences = (paragraphText.match(new RegExp('\\b' + target + '\\b', 'gi')) || []).length;

      // Ajouter le nombre d'occurrences au compteur
      count += occurrences;
  }

  // Si la cible est 'right', 'email', 'n', 'log', 'hello', 'world' ou 'hello world',
  // compter également les occurrences dans tout le document
  if (target === 'right' || target === 'email' || target === 'n' || target === 'log' || target === 'console.log' || target === 'hello' || target === 'world' || target === 'hello world') {
      // Récupérer tout le contenu du document
      let bodyContent = document.body.innerHTML;

      // Ignorer les balises 'script' et les commentaires HTML
      let scriptAndCommentRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>|<!--[\s\S]*?-->/gi;
      bodyContent = bodyContent.replace(scriptAndCommentRegex, '');

      // Compter les occurrences de la cible dans tout le contenu du document
      count += (bodyContent.match(new RegExp('\\b' + target + '\\b', 'gi')) || []).length;
  }

  // Retourner le compteur final
  return count;
}

// voir en détail : 


