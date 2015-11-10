function onRequest(info, tab) {
  // body...
  var selection = info.selectionText;
  alert(selection);
}

chrome.contextMenus.create({
  title: "Translate '%s'",
  contexts: ["all"],
  onclick: onRequest
});
