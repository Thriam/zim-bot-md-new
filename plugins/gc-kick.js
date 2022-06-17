import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|remove|\-)$/i
handler.group = true
handler.botAdmin = true
handler.owner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
