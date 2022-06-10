const { MessageEmbed } = require("discord.js");
const getRandomInt = require("../libraries/random");

function team(msg, args) {
  try {
    const teamNumber = parseInt(args[0]);
    const participants = args.slice(1, args.length).filter((player) => player !== "");
    if (!participants.length) {
      const errorEmbed = new MessageEmbed()
        .setColor("#f51848")
        .setTitle("Please provide any participants")
        .setDescription(`[🙁] We can't team up the empty participant for you!`);
      return msg.channel.send({ embeds: [errorEmbed] });
    }
    if (teamNumber > participants.length) {
      const limitEmbed = new MessageEmbed()
        .setColor("#f51848")
        .setTitle("Are you serious?")
        .setDescription(
          `[🙁] You are going to split in to ${teamNumber} team(s) which is more than the actual participants.`
        );
      return msg.channel.send({ embeds: [limitEmbed] });
    }
    if (teamNumber > 128) {
      const limitEmbed = new MessageEmbed()
        .setColor("#f51848")
        .setTitle("Teams has been limited at 128!")
        .setDescription(
          `[🙁] You can not spilt your participants in to more than 128 teams because of memory limitation on production deployment.`
        );
      return msg.channel.send({ embeds: [limitEmbed] });
    }

    const teams = [];
    const marked = [];
    let index = 0;
    for (var i = 0; i < teamNumber; i++) {
      teams.push([]);
    }

    while (marked.length !== participants.length) {
      let whoWillBeChosen = getRandomInt(participants.length);
      if (marked.includes(whoWillBeChosen)) {
        continue;
      }
      teams[index % teamNumber].push(participants[whoWillBeChosen]);
      marked.push(whoWillBeChosen);
      index += 1;
    }
    let text = "**YOUR TEAM IS READY!!**\n\n";
    for (var i = 0; i < teams.length; i++) {
      text += `**TEAM ${i + 1}**\n`;
      for (var j = 0; j < teams[i].length; j++) {
        text += `   ${j + 1}) ${teams[i][j]}\n`;
      }
      text += "\n";
    }
    const embed = new MessageEmbed()
      .setColor("#a2ff1f")
      .setDescription(text)
      .setThumbnail(
        "https://static.onecms.io/wp-content/uploads/sites/23/2018/04/10/sisters_fighting.jpg"
      );
    msg.channel.send({ embeds: [embed] });
  } catch (error) {
    console.log(error);
    const errorEmbed = new MessageEmbed()
      .setColor("#f51848")
      .setTitle("There is an error occurs while teaming up.")
      .setDescription("`" + `${error}` + "`")
      .setFooter(
        '[Tips] Team number must be integer and participants name can be a string without space(" ") or a Discord tag(@user), split each argument with space(" ").'
      );
    msg.channel.send({ embeds: [errorEmbed] });
  }
}
module.exports = team;
