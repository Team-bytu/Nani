let handler = m => m.reply('*Hola๐ soy ๐ต๐๐๐ ๐๐๐ ๐ Asistente de Axel๐??* , *En que te puedo ayudarยฟ?*_Escribe_ *#help* o *#Menรบ* _para que puedas ver mis funciones_ .*')

handler.customPrefix = /^(Hola)$/i
handler.command = new RegExp
handler.private = false
handler.group = true

module.exports = handler
