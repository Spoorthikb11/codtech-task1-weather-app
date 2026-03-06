chrome.storage.local.get(null, function(data) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  for (let site in data) {
    const div = document.createElement("div");
    div.innerHTML = site + " : " + data[site] + " seconds";
    results.appendChild(div);
  }
});