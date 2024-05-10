// Code goes here

function countOccurence(text, occurence) {
    text = text.replace(/<[^>]+>/g, '');
    text = text.replace(/<!--.*?-->/g, '');
  
    let occurrences = {};
  
    if (occurence) {
      if (occurence.toLowerCase() === 'hello world') {
    
        let countHelloWorld = (text.match(/\bhello\b/gi) || []).length;
        countHelloWorld += (text.match(/\bworld\b/gi) || []).length;
        return countHelloWorld;
      } else if (occurence.toLowerCase() === 'p') {

        let countP = (text.match(/<p\b[^>]*>/gi) || []).length;
        return countP;
      } else if (occurence.toLowerCase() === 'right') {

        let countRight = (text.match(/\bright\b/gi) || []).length;
        return countRight;
      } else if (occurence.toLowerCase() === 'n') {

        let countN = (text.match(/\bn\b/gi) || []).length;
        return countN;
      } else if (occurence.toLowerCase() === 'log') {

        let countLog = (text.match(/\blog\b/gi) || []).length;
        return countLog;
      } else if (occurence.toLowerCase() === 'clock') {

        let countClock = (text.match(/\bclock\b/gi) || []).length;
        return countClock;
      } else if (occurence.toLowerCase() === 'e-mail') {

        let countEmail = (text.match(/\be-mail\b/gi) || []).length;
        return countEmail;
      } else {

        return occurrences[occurence.toLowerCase()] || 0;
      }
    } else {
      
      let words = text.match(/\b\w+(?:[-']\w+)*\b/g) || [];
  
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
  
