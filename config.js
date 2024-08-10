var api = 'https://explorer.dogemone.online/rpc';
var apiList = ["https://explorer.dogemone.online/rpc", "http://65.20.104.165:53000"];

var blockTargetInterval = 60;
var coinUnits = 1000000000000;
var symbol = 'DME';
var refreshDelay = 30000;
var blocksPerPage = 20;
var whiteTheme = "css/light.css";
var nightTheme = "css/dark.css";
var addressPattern = new RegExp("^DME[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$");
