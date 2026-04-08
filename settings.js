const chalk = require("chalk")
const fs = require("fs")

// ======================== Setting Menu & Media ===================== \\

global.prefix = ['','!','.','#','&']
/*
global.thumbnail = 'https://upld.zone.id/uploads/4xiq6f1iq/1001588048.webp' 
global.music = 'https://files.catbox.moe/w8zj8q.mp3'
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

 COMING SOON

global.thum = global.thumbnail
global.log0 = global.thumbnail
global.err4r = global.thumbnail
global.thumb = global.thumbnail
*/
// ======================== Info Owner ===================== \\
global.ownername = 'YueDev'
global.owner = ['62895345377678']
global.ownernomer = '62895345377678'
global.ownernumber = '62895345377678'
global.ownerNumber = ["62895345377678@s.whatsapp.net"]
global.creator = "62895345377678@s.whatsapp.net"
global.ig = '@yueofficial_'
global.tele = 'nesiadev'
global.ttowner = '@milimnavaofficial'
global.socialm = 'https://github.com/r7yukii23-cmyk'
global.location = 'Indonesia' 
global.ownerweb = "https://yueofficialid.nime.my.id"

// ======================== Info Bot ===================== \\
global.botname = "MilimNava"
global.botnumber = '6283178844137'
global.websitex = "https://yueofficialid.nime.my.id"
global.wagc = "https://chat.whatsapp.com/I4PqjIdgkGJ4XUg3PRjrqR?mode=gi_t"
global.saluran = "https://whatsapp.com/channel/0029Vb7OGAR8F2pMXbPhNW1p"
global.themeemoji = '☄️'
global.wm = "𝐌𝐢𝐥𝐢𝐦𝐍𝐚𝐯𝐚 𝐌𝐃"
global.botscript = 'lo udah gede anjir… masih aja ‘bang ada sc?’ 😭🗿'
global.packname = "MILIMNAVA"
global.author = "\n\n\n\n\nDibuat Oleh YueDev\nNo Wa : 62895345377678"
global.sessionName = 'furina'
global.hituet = 0

// ======================== API Keys ===================== \\
global.nz = [
    'nz-e98e71fd41',
    'nz-f0ccb09fe1',
    'nz-d7f75016a2',
    'nz-97bf45bd87',
    'nz-4ce5fb3be3'
]
global.frch = [
    "29015f61cbaa2b36f26bcd61c0b087c0421e4f8f16c67809d4b67091863bf483",
    "3b00b2f1d5201dee96ed46eca909ef4be8abdbad1bc876fe6384bc42256ed24f"
] 
// ======================== Respon Bot ===================== \\
global.mess = {
   wait: "*bentar anjir… bot lagi mikir, jangan spam 😵*",
   success: "nah gitu kek, berhasil juga 😎",
   on: "udah nyala woy, santai 😝",
   off: "mati dah… udah males gue 😴",
   query: {
       text: "teksnya mana dah? gue bukan tukang nebak 😭",
       link: "linknya mana bro? kosong gini mau ngapain 🗿",
       image: "gambar kagak ada, nyuruh nebak? waras lu? 😤",
   },
   error: {
       fitur: "error njir… sana lapor ke owner 👉 62895345377678 🗿",
   },
   only: {
       group: "ini fitur grup woy, jangan sotoy 😭",
       private: "ini buat pc anjir, jangan di grup 🗿",
       owner: "lu siapa dah? ini khusus owner 👑",
       admin: "bukan admin jangan banyak gaya 😤",
       badmin: "gue aja belum jadi admin anjir 😵",
       premium: "mau premium? chat owner sini 👉 6285187063723, jangan banyak gaya doang 😏💸",
   }
}

// ======================== Auto Reload File ===================== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update '${__filename}'`))
	delete require.cache[file]
	require(file)
})
