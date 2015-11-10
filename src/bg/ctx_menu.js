function onRequest(info, tab) {
  // body...
  var selection = info.selectionText;
  // alert(selection);

  chrome.tts.speak('Hello World');
}

chrome.contextMenus.create({
  title: "Sounzify '%s'",
  contexts: ["all"],
  onclick: onRequest
});
