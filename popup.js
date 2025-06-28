function getCurrentTabUrl(callback) {
  const queryInfo = { active: true, currentWindow: true };
  chrome.tabs.query(queryInfo, (tabs) => {
    callback(tabs[0].url);
  });
}

getCurrentTabUrl((url) => {
  chrome.cookies.getAll({ url }, (cookies) => {
    let output = '';
    for (let cookie of cookies) {
      let classification = classifyCookie(cookie);
      output += `<p><strong>${cookie.name}</strong>: ${classification}</p>`;
    }
    document.getElementById('cookieResults').innerHTML = output || 'Nessun cookie trovato.';
  });
});
