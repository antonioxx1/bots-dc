require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("interactionCreate", async(interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "formulario") {
        if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal")
        .setTitle("Formulário");
  
        const pergunta1 = new Discord.TextInputBuilder()
        .setCustomId("pergunta1") // Coloque o ID da pergunta
        .setLabel("Qual o seu nome completo?") // Coloque a pergunta
        .setMaxLength(30) // Máximo de caracteres para a resposta
        .setMinLength(5) // Mínimo de caracteres para a respósta
        .setPlaceholder("Responda aqui") // Mensagem que fica antes de escrever a resposta
        .setRequired(true) // Deixar para responder obrigatório (true | false)
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
  
        const pergunta2 = new Discord.TextInputBuilder()
        .setCustomId("pergunta2") // Coloque o ID da pergunta
        .setLabel("Qual sua idade?") // Coloque a pergunta
        .setMaxLength(30) // Máximo de caracteres para a resposta
        .setPlaceholder("Responda aqui!") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)
  
        const pergunta3 = new Discord.TextInputBuilder()
        .setCustomId("pergunta3") // Coloque o ID da pergunta
        .setLabel("Qual seu nick in game?") // Coloque a pergunta
        .setPlaceholder("Responda aqui") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)

        const pergunta4 = new Discord.TextInputBuilder()
        .setCustomId("pergunta4")
        .setLabel("Nos conte um pouco sobre você")
        .setMaxLength(800) // Máximo de caracteres para a resposta
        .setMinLength(100)
        .setPlaceholder("Responda aqui")
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)

        const pergunta5 = new Discord.TextInputBuilder()
        .setCustomId("pergunta5")
        .setLabel("Por que você quer ser staff do servidor?")
        .setMaxLength(500) // Máximo de caracteres para a resposta
        .setMinLength(50)
        .setPlaceholder("Responda aqui")
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)
  
        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(pergunta1),
          new Discord.ActionRowBuilder().addComponents(pergunta2),
          new Discord.ActionRowBuilder().addComponents(pergunta3),
          new Discord.ActionRowBuilder().addComponents(pergunta4),
          new Discord.ActionRowBuilder().addComponents(pergunta5)
        )
  
        await interaction.showModal(modal)
      }
    } else if (interaction.isModalSubmit()) {
      if (interaction.customId === "modal") {
        let resposta1 = interaction.fields.getTextInputValue("pergunta1")
        let resposta2 = interaction.fields.getTextInputValue("pergunta2")
        let resposta3 = interaction.fields.getTextInputValue("pergunta3")
        let resposta4 = interaction.fields.getTextInputValue("pergunta4")
        let resposta5 = interaction.fields.getTextInputValue("pergunta5")
  
        if (!resposta1) resposta1 = "Não informado."
        if (!resposta2) resposta2 = "Não informado."
        if (!resposta3) resposta3 = "Não informado."
        if (!resposta4) resposta4 = "Não informado."
        if (!resposta5) resposta5 = "Não informado."
  
        let embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`O usuário ${interaction.user} enviou o formulário abaixo:`)
        .addFields(
          {
            name: `Qual o seu nome completo:`,
            value: `*Resposta:* \`${resposta1}\``,
            inline: false
          },
          {
            name: `Qual sua idade:`,
            value: `*Resposta:* \`${resposta2}\``,
            inline: false
          },
          {
            name: `Nick:`,
            value: `*Resposta:* \`${resposta3}\``,
            inline: false
          },
          {
            name: `Sobre você:`,
            value: `*Resposta:* \`${resposta4}\``,
            inline: false
          },
          {
            name: `O porque quer ser staff:`,
            value: `*Resposta:* \`${resposta5}\``,
            inline: false
          }
        );
  
        interaction.reply({ content: `Olá **${interaction.user.username}**, seu formulário foi enviado com sucesso! Agora aguarde para a próxima etapa.`, ephemeral: true})
        await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
      }
    }
  })