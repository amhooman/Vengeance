var mg = document.createElement("iframe")
mg.setAttribute("id", "mgid")
mg.setAttribute("srcdoc", '<meta content="width=device-width,initial-scale=1"name=viewport><div height=100% id=ruffle width=100%></div><script src=https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle@0.1.0-nightly.2022.6.25/ruffle.min.js></script><script>window.RufflePlayer = window.RufflePlayer || {}; window.addEventListener("load", (event) => { const ruffle = window.RufflePlayer.newest(); const player = ruffle.createPlayer(); const container = document.getElementById("ruffle"); player.id = "player"; player.style.width = "100%"; player.style.height = "100%"; container.appendChild(player); player.load("https://cdn.jsdelivr.net/gh/BinBashBanana/gstore/bloonstd1.swf"); });</script>')
document.getElementsByTagName("body")[0].appendChild(mg).focus()
var thestyle = document.createElement("style")
thestyle.innerText += "#mgid {position: fixed; left: 0px; top: 0px; width: 100%; height:100%; background: black; z-index: 9999999999; border: none;}"
thestyle.innerText += "body {overflow: hidden;}"
document.getElementsByTagName("body")[0].appendChild(thestyle)
