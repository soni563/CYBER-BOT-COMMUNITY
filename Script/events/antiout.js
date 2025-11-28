module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`𝗦𝗼𝗿𝗿𝘆 𝗯𝗲𝗰𝗵𝗮𝗿𝗲 𝗸𝗼 𝗮𝗱𝗱 𝗻𝗵𝗶 𝗸𝗮𝗿 𝗽𝗮𝗶 🥺💔 \n 𝗸𝗮𝗵𝗶 ${name}  𝗻𝗲 𝗺𝘂𝗷𝗵𝗲 𝗯𝗹𝗼𝗰𝗸 𝘁𝗼 𝗻𝗮𝗵𝗶 𝗸𝗿 𝗱𝗶𝘆𝗲   \n\n ──────·····✦·····──── \n 𝗙𝗲𝗲𝗹𝗶𝗶𝗻𝗴𝗹𝗲𝘀𝘀 𝗯𝗼𝘁 | `, event.threadID)
   } else api.sendMessage(`𝗦𝘂𝗻𝗼, ${name} 𝘆𝗲 𝗴𝗿𝗼𝘂𝗽 𝗴𝗮𝗻𝗴 𝗵𝗮𝗶! \n 𝘆𝗵𝗮 𝘀𝗲 𝗯𝗵𝗮𝗴𝗻𝗲 𝗸𝗶 𝗸𝗼𝘀𝗵𝗶𝘀𝗵 𝗺𝗮𝘁 𝗸𝗿𝗻𝗮! \n 𝘁𝘂𝗺𝗵𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝗶𝗼𝗻 𝗸𝗶𝘀𝗻𝗲 𝗱𝗶𝘆𝗮 𝗷𝗮𝗻𝗲 𝗸𝗮 🤨🤨 𝗱𝘂𝗯𝗮𝗿𝗲 𝗴𝘆𝗲 𝘁𝗼 𝗳𝗶𝗿 𝘂𝘁𝗵𝗮 𝗹𝗮𝘂𝗻𝗴𝗶𝗶 😘💋 \n\n ── ·······✦·······──── \n 𝗙𝗲𝗲𝗹𝗶𝗶𝗻𝗴𝗹𝗲𝘀𝘀 𝗯𝗼𝘁 | `, event.threadID);
  })
 }
}
