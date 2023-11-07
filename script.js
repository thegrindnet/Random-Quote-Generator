function generate(){
  const quotes = {
    "- Jules Renard" : '“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”',
    "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it is beauty."',
    "- Pierce Brown" : '“Man cannot be freed by the same injustice that enslaved it.”',
  }

  const authors = Object.keys(quotes);

  const author = authors[Math.floor(Math.random() * authors.length)]

  const quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}