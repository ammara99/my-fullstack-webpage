async function fetchFact() {
  try {
    const response = await fetch('/number-fact');  // Call the backend API
    const data = await response.json();  // Parse the JSON response

    // Display the fact on the webpage
    document.getElementById('fact').innerText = data.fact;
  } catch (error) {
    console.error('Error fetching the fact:', error);
    document.getElementById('fact').innerText = 'Sorry, we couldn\'t fetch a fact at the moment.';
  }
}
