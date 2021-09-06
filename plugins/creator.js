let handler = function (m) {
  // this.sendContact(m.chat, '12485990608', 'Broz', m)
  this.sendContact(m.chat, '12485990608', 'Broz', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
