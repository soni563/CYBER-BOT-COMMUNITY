module.exports.config = {
  name: "antibd",
  eventType: ["log:user-nickname"],
  version: "0.0.1",
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁",
  description: "Against changing Bot's nickname"
};

module.exports.run = async function({ api, event, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMINBOT } = global.config;
    var { nickname } = await Threads.getData(threadID, botID);
    var nickname = nickname ? nickname : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMINBOT.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID)
        var info = await Users.getData(author);
       return api.sendMessage({ body: `${info.name} - 𝗧𝘂 𝘁𝗵𝗼𝗱𝗮 𝗯𝗲𝗵𝗻𝗸𝗮 𝗹𝗼𝘄𝗱𝗮 𝗵𝗮𝗶𝗶 𝗸𝘆𝗮 🤨🤨\n 𝗢𝘄𝗻𝗲𝗿 𝘀𝗶𝗿𝗳 𝗻𝗶𝗰𝗸𝗻𝗮𝗺𝗲 𝗰𝗵𝗮𝗻𝗴𝗲 𝗸𝗿 𝘀𝗸𝘁𝗮 𝗵𝗮𝗶 𝘁𝘂 𝗴𝗮𝗻𝗱 𝗺𝗮𝗿𝗮 😏😇❤️`}, threadID);
    }  
        }
