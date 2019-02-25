console.log("TFS extension injecting script...");
var injectedScript = document.createElement('script');
injectedScript.src = chrome.extension.getURL("collapseexpand.js");
injectedScript.onload = function() {
    this.parentNode.removeChild(this);
};
document.documentElement.appendChild(injectedScript);

