const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false 
  
 
    esperar  m . responder ( '🌀 * Tu stiker está en progreso ... * 🌀' )
    }
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Foto/Video extraviado'
      stiker = await sticker(img, true, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(true, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Etiqueta una foto o vídeo hasta 10 seg'
  }
}
handler.help = ['stciker (caption|reply media)', 'stciker <url>', 'stickergif (caption|reply media)', 'stickergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler
