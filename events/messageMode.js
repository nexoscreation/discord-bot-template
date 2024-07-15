module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        // Offensive Words Logic
        const offensiveWords = ['badword1', 'badword2', 'badword3']; // Add your offensive words here
        const messageContent = message.content.toLowerCase();

        for (const word of offensiveWords) {
            if (messageContent.includes(word)) {
                await message.delete();
                return message.channel.send(`${message.author}, your message contained offensive language and has been removed.`);
            }
        }
    },
};
