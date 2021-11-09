const { MessageEmbed } = require('discord.js');
const getRandomInt = require("../libraries/random");

function team(msg, args) {
    
    
    try {
        const teamNumber = parseInt(args[0]);
        const participants = args.slice(1,args.length).filter(player => player !== "");
        const teams = []
        const marked = []
        let index = 0
        for (var i=0; i<teamNumber ; i++) { teams.push([]) }

        while (marked.length !== participants.length) {
            let whoWillBeChosen = getRandomInt(participants.length);
            if (marked.includes(whoWillBeChosen)) {
                continue
            }
            teams[index % teamNumber].push(participants[whoWillBeChosen]);
            marked.push(whoWillBeChosen);
            index += 1;
        }
        let text = "**YOUR TEAM IS READY!!**\n\n"
        for (var i=0; i<teams.length; i++) {
            text += `**TEAM ${i+1}**\n`
            for (var j=0; j<teams[i].length; j++) {
                text += `   ${j+1}) ${teams[i][j]}\n`
            }
            text += "\n"
        }
        const embed = new MessageEmbed()
        .setColor('#a2ff1f')
        .setDescription(text)
        .setThumbnail('https://static.onecms.io/wp-content/uploads/sites/23/2018/04/10/sisters_fighting.jpg')
        msg.channel.send({ embeds: [embed] });
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = team