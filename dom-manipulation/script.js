document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
      { text: "The purpose of our lives is to be happy.", category: "Happiness" },
    ];
  
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
    const addQuoteButton = document.getElementById('addQuoteButton');
    const newQuoteText = document.getElementById('newQuoteText');
    const newQuoteCategory = document.getElementById('newQuoteCategory');
  
    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      quoteDisplay.textContent = `${randomQuote.text} - ${randomQuote.category}`;
    }
  
    function addQuote() {
      const text = newQuoteText.value.trim();
      const category = newQuoteCategory.value.trim();
      if (text && category) {
        quotes.push({ text, category });
        newQuoteText.value = '';
        newQuoteCategory.value = '';
        alert('Quote added successfully!');
      } else {
        alert('Please enter both a quote and a category.');
      }
    }
  
    newQuoteButton.addEventListener('click', showRandomQuote);
    addQuoteButton.addEventListener('click', addQuote);
  
    displayRandomQuote();
  });