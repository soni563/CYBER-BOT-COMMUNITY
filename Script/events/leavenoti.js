module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif", "randomgif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
	const path = join(__dirname, "events", "123.mp4");
	const pathGif = join(path, `${threadID}123.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "╭═════⊹⊱✫⊰⊹═════╮ \n ⚠️ 𝗕𝗥𝗘𝗔𝗞𝗜𝗜𝗡𝗚 𝗡𝗘𝗪𝗦 ⚠️\n╰═════⊹⊱✫⊰⊹═════╯\n\n{session}||{name} 𝗦𝗨𝗡𝗢 𝗦𝗨𝗡𝗢...\n𝗬𝗘 𝗚𝗥𝗢𝗨𝗣 𝗦𝗘 𝗚𝗬𝗕 𝗛𝗢 𝗚𝗬𝗘 𝗛𝗔𝗜!\n 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 𝗞𝗜 𝗧𝗥𝗙 𝗦𝗘 \n𝗗𝗨𝗞𝗛 𝗞𝗘 𝗦𝗔𝗧𝗛 𝗞𝗘𝗛𝗡𝗜 𝗣𝗔𝗗𝗥𝗔𝗛𝗜 𝗛𝗔𝗜..\n\n— 𝗪𝗢 𝗔𝗕 𝗡𝗔𝗛𝗜 𝗥𝗔𝗛𝗘 .. 𝗠𝗧𝗟𝗕 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗜𝗜 𝗡𝗛𝗜 𝗥𝗔𝗛𝗘!\n𝗣𝗔𝗥 𝗛𝗠𝗘𝗦𝗛𝗔 𝗛𝗠𝗔𝗥𝗘 𝗗𝗜𝗟𝗟 𝗠𝗘 𝗥𝗔𝗛𝗘𝗡𝗚𝗘, 𝗔𝗖𝗧𝗜𝗩𝗘 𝗠𝗘𝗠𝗕𝗘𝗥𝗦 𝗞𝗜 𝗧𝗥𝗔𝗛 | \n\n⏰ 𝗗𝗔𝗧𝗘 𝗔𝗡𝗗 𝗧𝗜𝗜𝗠𝗘: {time}\n⚙️𝗦𝗧𝗔𝗧𝗨𝗦: {type} (𝗞𝗛𝗨𝗗 𝗚𝗬𝗔 𝗛𝗔𝗜 𝗬𝗛 𝗞𝗜𝗦𝗜𝗡𝗘 𝗕𝗛𝗔𝗚𝗔𝗬𝗔 𝗛𝗔𝗜 𝗞𝗨𝗖𝗛 𝗣𝗧𝗔 𝗡𝗛𝗜𝗜 𝗖𝗛𝗔𝗟𝗥𝗛𝗜 )?" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝗠𝗢𝗥𝗡𝗜𝗡𝗚" : 
    hours > 10 && hours <= 12 ? "𝗔𝗙𝗔𝗧𝗘𝗥𝗡𝗢𝗢𝗡" :
    hours > 12 && hours <= 18 ? "𝗘𝗩𝗘𝗡𝗜𝗜𝗡𝗚" : "𝗡𝗜𝗜𝗚𝗛𝗧").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
                            }
