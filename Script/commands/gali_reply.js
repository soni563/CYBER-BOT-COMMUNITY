const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝗦𝗼𝗻𝘂 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("Bsdk")==0 || event.body.indexOf("bsdk")==0 || 
        event.body.indexOf("Chod")==0 || event.body.indexOf("Lowda")==0 || event.body.indexOf("Land")==0 || event.body.indexOf("Sale")==0 || event.body.indexOf("Kutte")==0 || event.body.indexOf("kutte")==0 || event.body.indexOf("Chuthiya")==0 ||  event.body.indexOf("chod")==0 ||    event.body.indexOf("Mc")==0 ||       event.body.indexOf("bal")==0 || event.body.indexOf("Ma ki chut")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Bc")==0 || event.body.indexOf("maa ki chut")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: ".𝗚𝗮𝗹𝗶 𝗸𝘆𝗼 𝗱𝗲𝘁𝗲 𝗵𝗼 ,,𝘁𝘂𝗺𝗵𝗮𝗿𝗮 𝗹𝗮𝗻𝗱 𝗸𝗮𝗮𝘁𝗸𝗲 𝗵𝗮𝘁𝗵 𝗺𝗲 𝗱𝗲 𝗱𝘂𝗻𝗴𝗶 😈😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

		}
