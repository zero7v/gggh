import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ💖 Hi ✨${name}✨, Wellcome Zero Beta Multi Device Bot *

*📅 time: ${week}, ${date}*
*📈 runtime: ${uptime}*
*📊 time: ${rtotalreg}*



*<𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐙𝐞𝐫𝐨 𝐁𝐎𝐭/>*

° ඬ ⃟ 💟 _${usedPrefix}grupos_
° ඬ ⃟ 💟 _${usedPrefix}estado_
° ඬ ⃟ 💟 _${usedPrefix}infobot_
° ඬ ⃟ 💟 _${usedPrefix}donar_
° ඬ ⃟ 💟 _${usedPrefix}grouplist_
° ඬ ⃟ 💟 _${usedPrefix}owner_
° ඬ ⃟ 💟 _${usedPrefix}script_
° ඬ ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*<𝐁𝐨𝐭 𝐀 𝐆𝐫𝐨𝐮𝐩/>*

°  _${usedPrefix}join *<enlace / link / url>*_

*<𝐆𝐀𝐦𝐞𝐬/>*

°  _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
°  _${usedPrefix}ppt *<papel / tijera /piedra>*_
°  _${usedPrefix}prostituto *<nombre / @tag>*_
°  _${usedPrefix}prostituta *<nombre / @tag>*_
°  _${usedPrefix}gay2 *<nombre / @tag>*_
°  _${usedPrefix}lesbiana *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pregunta *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}slot *<apuesta>*_
° ඬ⃟🎖️ _${usedPrefix}pvp *<@tag>*_
° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}topgays_
° ඬ⃟🎖️ _${usedPrefix}topotakus_
° ඬ⃟🎖️ _${usedPrefix}formarpareja_
° ඬ⃟🎖️ _${usedPrefix}verdad_
° ඬ⃟🎖️ _${usedPrefix}reto_

*<𝐎𝐰𝐧𝐞𝐫 𝐂𝐨𝐦𝐦𝐚𝐧𝐝/>*

° ඬ⃟☑️ _${usedPrefix}enable *welcome*_
° ඬ⃟☑️ _${usedPrefix}disable *welcome*_
° ඬ⃟☑️ _${usedPrefix}enable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}disable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}enable *detect*_
° ඬ⃟☑️ _${usedPrefix}disable *detect*_
° ඬ⃟☑️ _${usedPrefix}enable *audios*_
° ඬ⃟☑️ _${usedPrefix}disable *audios*_
° ඬ⃟☑️ _${usedPrefix}enable *autosticker*_
° ඬ⃟☑️ _${usedPrefix}disable *autosticker*_

*<𝐑𝐞𝐩𝐨𝐫𝐭 𝐄𝐫𝐫𝐫𝐨𝐫/>*

° ඬ⃟🔰 _${usedPrefix}reporte *<texto>*_

*<𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐧𝐝/>*

° ඬ⃟📥 _${usedPrefix}facebook *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}mediafire *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}gitclone *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}tiktok *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}play.1 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}play.2 *<texto / enlace / link / url>*_
° ඬ⃟📥 _${usedPrefix}play *<texto>*_
° ඬ⃟📥 _${usedPrefix}playdoc *<texto>*_
° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
° ඬ⃟📥 _${usedPrefix}imagen *<texto>*_
° ඬ⃟📥 _${usedPrefix}pinteret *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_
° ඬ⃟📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstalk *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}igstory *<nombre de usuario>*_
° ඬ⃟📥 _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*<𝐆𝐫𝐨𝐮𝐩𝐬/>* 

° ඬ⃟💎 _${usedPrefix}add *<numero>*_
° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}infogroup_
° ඬ⃟💎 _${usedPrefix}link_
° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_

*<𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬/>*

° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_

*<𝐋𝐨𝐠𝐨 𝐄𝐟𝐟𝐞𝐭𝐜/>*

° ඬ⃟🖍️ _${usedPrefix}logos *<efecto> <texto>*_
° ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}ytcomment *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}itssostupid_
° ඬ⃟🖍️ _${usedPrefix}pixelar_
° ඬ⃟🖍️ _${usedPrefix}blur_

*<𝐑𝐚𝐧𝐝𝐨𝐦/>*

° ඬ⃟👾 _${usedPrefix}cristianoronaldo_
° ඬ⃟👾 _${usedPrefix}messi_
° ඬ⃟👾 _${usedPrefix}meme_
° ඬ⃟👾 _${usedPrefix}itzy_
° ඬ⃟👾 _${usedPrefix}blackpink_
° ඬ⃟👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 _${usedPrefix}lolivid_
° ඬ⃟👾 _${usedPrefix}loli_
° ඬ⃟👾 _${usedPrefix}navidad_
° ඬ⃟👾 _${usedPrefix}ppcouple_
° ඬ⃟👾 _${usedPrefix}neko_
° ඬ⃟👾 _${usedPrefix}waifu_
° ඬ⃟👾 _${usedPrefix}akira_
° ඬ⃟👾 _${usedPrefix}akiyama_
° ඬ⃟👾 _${usedPrefix}anna_
° ඬ⃟👾 _${usedPrefix}asuna_
° ඬ⃟👾 _${usedPrefix}ayuzawa_
° ඬ⃟👾 _${usedPrefix}boruto_
° ඬ⃟👾 _${usedPrefix}chiho_
° ඬ⃟👾 _${usedPrefix}chitoge_
° ඬ⃟👾 _${usedPrefix}deidara_
° ඬ⃟👾 _${usedPrefix}erza_
° ඬ⃟👾 _${usedPrefix}elaina_
° ඬ⃟👾 _${usedPrefix}eba_
° ඬ⃟👾 _${usedPrefix}emilia_
° ඬ⃟👾 _${usedPrefix}hestia_
° ඬ⃟👾 _${usedPrefix}hinata_
° ඬ⃟👾 _${usedPrefix}inori_
° ඬ⃟👾 _${usedPrefix}isuzu_
° ඬ⃟👾 _${usedPrefix}itachi_
° ඬ⃟👾 _${usedPrefix}itori_
° ඬ⃟👾 _${usedPrefix}kaga_
° ඬ⃟👾 _${usedPrefix}kagura_
° ඬ⃟👾 _${usedPrefix}kaori_
° ඬ⃟👾 _${usedPrefix}keneki_
° ඬ⃟👾 _${usedPrefix}kotori_
° ඬ⃟👾 _${usedPrefix}kurumi_
° ඬ⃟👾 _${usedPrefix}madara_
° ඬ⃟👾 _${usedPrefix}mikasa_
° ඬ⃟👾 _${usedPrefix}miku_
° ඬ⃟👾 _${usedPrefix}minato_
° ඬ⃟👾 _${usedPrefix}naruto_
° ඬ⃟👾 _${usedPrefix}nezuko_
° ඬ⃟👾 _${usedPrefix}sagiri_
° ඬ⃟👾 _${usedPrefix}sasuke_
° ඬ⃟👾 _${usedPrefix}sakura_
° ඬ⃟👾 _${usedPrefix}cosplay_


*<𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫/>*
*- Replay A Song*

° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_

*<𝐂𝐡𝐚𝐧𝐭 𝐀𝐧𝐨𝐧𝐢𝐦𝐨𝐮𝐬/>*

° ඬ⃟📳 _${usedPrefix}start_
° ඬ⃟📳 _${usedPrefix}next_
° ඬ⃟📳 _${usedPrefix}leave_

*<𝐒𝐞𝐚𝐫𝐜𝐡/>*

° ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
° ඬ⃟🔍 _${usedPrefix}google *<texto>*_
° ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_



*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_



*<𝐒𝐭𝐢𝐜𝐤𝐞𝐫/>*

° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}sticker *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}dado_
° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*<𝐨𝐰𝐧𝐞𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝/>*

° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}banchat_
° ඬ⃟👑 _${usedPrefix}unbanchat_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}update_
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/zero7v', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|zero|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
