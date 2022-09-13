var mg = document.createElement("iframe")
mg.setAttribute("id", "mgid")
mg.setAttribute("srcdoc", '<!doctype html><html><embed src="http://swordslasher.com" wmode="window" width="100%" height="100%"></html>')
document.getElementsByTagName("body")[0].appendChild(mg).focus()
