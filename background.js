
chrome.runtime.onInstalled.addListener(() => {
  console.log("ANNDI BLOCK instalado com sucesso!");

  chrome.declarativeNetRequest.getEnabledRulesets()
    .then((rulesets) => {
      console.log("Regras ativas:", rulesets);
    })
    .catch((error) => {
      console.error("Erro ao verificar regras:", error);
    });
});
