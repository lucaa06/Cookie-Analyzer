// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^https?:/.test(tab.url)) {
    console.log(`Pagina caricata: ${tab.url}`);

    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
      console.log(`Cookie trovati su ${tab.url}:`, cookies);

      // Esempio: logga quanti cookie ha trovato
      console.log(`Numero totale di cookie: ${cookies.length}`);
    });
  }
});
