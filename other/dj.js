var mg = document.createElement("iframe")
mg.setAttribute("id", "mgid")
mg.setAttribute("srcdoc", '<!doctype html><html><embed src="http://swordslasher.com" wmode="window" width="100%" height="100%"></html>')
document.getElementsByTagName("body")[0].appendChild(mg).focus()
var thestyle = document.createElement("style")
thestyle.innerText += "#mgid {position: fixed; left: 0px; top: 0px; width: 100%; height:100%; background: black; z-index: 9999999999; border: none;}"
thestyle.innerText += "body {overflow: hidden;}"
document.getElementsByTagName("body")[0].appendChild(thestyle)
