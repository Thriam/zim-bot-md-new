let media = './drips.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hello 👋🏻, join the official groups to have a good time using the Bot*

*GROUPS:*
*1.-* EVA 1

*2.-* EVA 2

`.trim(), m, media, [['ZIMBOT MENU', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
