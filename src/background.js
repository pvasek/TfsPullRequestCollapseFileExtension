function showPageAction(tabId, changeInfo, tab) {
	console.log("evaluating page action...");
	if (tab.url.indexOf('/pullrequest/') > -1) {
		console.log("show...");
		chrome.pageAction.show(tabId);
	}	
}

chrome.tabs.onUpdated.addListener(showPageAction);