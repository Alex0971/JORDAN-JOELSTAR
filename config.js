const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Joelstar1@gmail.com" // no need
global.location="Lagos,Nigeria." // no need


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/jamesxtreme/JORDAN-JOELSTAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P" ; 
global.THUMB_IMAGE = process.env.IMAGE || "https://telegra.ph/file/5a06979ab4afb8ab7dccb.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349054039891" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349054039891,2347061138624";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349054039891,2347061138624";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f81015230c96d1f53ab60.mp4" // set images here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349054039891";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://miles-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNZY2RaU0t6Q3RpVWdjMmR1UWM3V0g5cElOenlxaHQvRVE1MUp4R0dVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFd3aFNGTTk0RGRIZ05RZHU1L3dZYjF4d1Z4ZGp6Tzc5SnhrMDZZRkJXUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUDFpYy9QOEJDb0s3dzlWbWIweExIMGFLWVdtVDQxM1BZYTVxRlE2bzE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVHhpWDEwTkl4MEVwa0h6WlNjaEN2ejd5NGs2VzBzdDFVcllsZjlVNGpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHZ05Lc1RMY2lMSDlwYzlKTS84VzA0cnZaMXk4WGt2dmNzMjVNREZGR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhIdlNWQUluV0pHWkJJTG40LzY3d3dqUTlzRnJlWFNLbHhHSE5XaVVNV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09ZSG9LMUpPaXB3Ry9WVFYvdngwZkczeTlDRWRHV1hmR240cysyRDIzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm51bDZ6ZTRGbTE5dVhOVFJWVW5MbDZBQTJqQ3lJNFJkVkJoL0RLWFJYbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBTTUc4V3VaMnVFc3NGVm84cUdBaHdvbFBlaEpvMnZNU1dqcGJmMlJPRWNSaEh3b3NSODZUalN2ZzJ5VW5JazlLZlJ2V25aeWJLNzF3K1NPM3NWd2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJHQTZJMTh3RjF5blFmVzQ1T01TZ29ENHVpUjJneFpYNlZZSUpVMURkZXhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE2MTA2MTQ3ODQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY0Q0EyODA5MjQ1QTAxRjU1Qjc0RDAxMDc5QjQ0NkUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTQ1NjUzOTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE2MTA2MTQ3ODQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI3M0I4N0NGMjcwOEM1Q0I4QjhCNEU2RjRCNkVCQkQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTQ1NjUzOTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxiTzM1aTBtU1JhMXM3dHc4MFVZOVEiLCJwaG9uZUlkIjoiOTJlMTgyOTktNzc2MC00ZTFkLTg1ZDAtNDM4NDk0NzE4YzNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKbzRaTkZYSTBYOGgxbEN0SVBySWt1YlYwdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0MjVEL2xWYjN0N3F4dDFIYzBFTkw0SXE1TE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFNSWTVFU1QiLCJtZSI6eyJpZCI6IjE2MTA2MTQ3ODQ4OjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmK7ig53ig5/bneGthMyKzIrgv5Tgv5NBbGV48J+YkuKDn/CfjLnig5/MqcypzKnMpeqmv+C/kyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDdZbUxzRkVQN2h5TEVHR0JRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiLzBvWDNBekVuOGZNSE5lbjg5QVQvT2tIQWxIS3drK1Q4VVpyWDV3aVFWVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMFJkOG1mbXNWRExhalg2T3VjTEpsRFlja3NadVJkaS9NUUZ2Y2syb0FZb0o3ZXFnbUpFbkpydmRYRDRmbHRkWHJpWmFTQkRSUGs4bVkwaHB1V1ZqRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkllTVZFYUU5amlvNi9GZ0YrUmNGOVpiY1N1R0JYa3ZidTNrTlZ1WHg4U0prYUY0K0ZsMUpDalhjY1pLWkNQWTlGTFFRZjVCblVwTGtoTG90d3gxNGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTYxMDYxNDc4NDg6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZjlLRjl3TXhKL0h6QnpYcC9QUUUvenBCd0pSeXNKUGsvRkdhMStjSWtGViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDU2NTM4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGbFEifQ=="  // PUT your SESSIOmRhdGEiOiI0MjVEL2xWYjN0N3F4dDFIYzBFTkw0SXE1TE09In0sInJlZ22zdHJh*  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "🅼︎🅸🄻🅴🅂",
  ownername:process.env.OWNER_NAME|| "JORDAN-JOELSTAR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MILES"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
