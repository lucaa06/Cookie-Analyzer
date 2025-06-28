function classifyCookie(cookie) {
  const trackingKeywords = ["track", "ads", "pixel", "doubleclick", "ga", "analytics"];
  const essentialKeywords = ["session", "csrf", "auth", "secure"];

  const name = cookie.name.toLowerCase();
  if (trackingKeywords.some(k => name.includes(k))) {
    return "Probabilmente usato per tracciamento o pubblicità.";
  }
  if (essentialKeywords.some(k => name.includes(k))) {
    return "Essenziale per il funzionamento del sito.";
  }
  return "Tipo di cookie non riconosciuto o generico.";
}
