module.exports = {
    name: 'help',
    description: 'List all commands or info about a specific command.',
    execute(message, args) {
      const data = [];
      const { commands } = message.client;
  
      if (!args.length) {
        data.push('Here\'s a list of all my commands:');
        data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send \`${process.env.BOT_PREFIX}help [command name]\` to get info on a specific command!`);
  
        return message.channel.send(data, { split: true });
      }
  
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
  
      if (!command) {
        return message.reply('That\'s not a valid command!');
      }
  
      data.push(`**Name:** ${command.name}`);
  
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${process.env.BOT_PREFIX}${command.name} ${command.usage}`);
  
      message.channel.send(data, { split: true });
    },
  };
  