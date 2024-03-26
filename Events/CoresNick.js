require('../index')

const Discord = require('discord.js')
const client = require('../index')

client.on('messageReactionAdd', (react, user) => {
    if (user.bot) return;
    
    const cores = { // Coloque o ID do cargo em cada variável
        // Coloque o nome dos cargos com a inicial 'Cor'
        // Exemplo: Cor Azul, Cor Vermelho
        azul: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        vermelho: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        laranja: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        amarelo: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        verde: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        rosa: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        roxo: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        preto: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        branco: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get('')
    }

    if (react.message.channel.id === '') { // ID DO CANAL DA MENSAGEM
        if (client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.cache.find(role => role.name.startsWith('Cor'))) {
            client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.cache.find(role => role.name.startsWith('Cor')).id)
        } 
        if (react.emoji.name === '🔵') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.azul}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.azul)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🔴') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.vermelho}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.vermelho)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟠') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.laranja}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.laranja)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟡') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.amarelo}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.amarelo)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟢') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.verde}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.verde)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🌹') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.rosa}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.rosa)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟣') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.roxo}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.roxo)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '⚫') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.preto}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.preto)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '⚪') {
            react.message.reply(`Olá ${user}, você alterou a cor do seu nick para ${cores.branco}.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.add(cores.branco)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        }
    }
}) 

client.on('messageReactionRemove', (react, user) => {
    if (user.bot) return;
    
    const cores = { // Coloque o ID do cargo em cada variável
        // Coloque o nome dos cargos com a inicial 'Cor'
        // Exemplo: Cor Azul, Cor Vermelho
        azul: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        vermelho: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        laranja: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        amarelo: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        verde: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        rosa: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        roxo: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        preto: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get(''),
        branco: client.guilds.cache.get(react.message.channel.guildId).roles.cache.get('')
    }

    if (react.message.channel.id === '') { // ID DO CANAL DA MENSAGEM
        if (react.emoji.name === '🔵') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.azul} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.azul)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🔴') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.vermelho} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.vermelho)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟠') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.laranja} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.laranja)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟡') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.amarelo} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.amarelo)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟢') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.verde} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.verde)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🌹') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.rosa} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.rosa)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '🟣') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.roxo} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.roxo)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '⚫') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.preto} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.preto)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        } else if (react.emoji.name === '⚪') {
            react.message.reply(`Olá ${user}, você retirou a cor ${cores.branco} do seu nick.`).then(msg => {
                client.guilds.cache.get(react.message.channel.guildId).members.cache.get(user.id).roles.remove(cores.branco)
                setTimeout( () => {
                    msg.delete().catch(e => {})
                }, 5000)
            })
        }
    }
})