async function fetchData() {
  const response = await fetch('/data');
  const data = await response.json();
  document.getElementById('data').innerText = `Data from server: ${data.message}`;
}
