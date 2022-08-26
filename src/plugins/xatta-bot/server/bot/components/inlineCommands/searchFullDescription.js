const fullDescription = require('./fullDescription');
const deleteMessage = require('./deleteCurrentMessage');

module.exports = async (query) => {
    const {
        localisation,
        chatId,
        data: { table, flatId },
    } = query;
    await fullDescription(query);

    await strapi.bots.alanyaBot
        .sendMessage(chatId, localisation?.CHOOSE_THE_ACTION.text(flatId), {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            ...localisation?.WRITE_AGENT_INLINE,
                            callback_data: JSON.stringify({
                                action: 'WRITE_AGENT',
                                table,
                                flatId,
                            }),
                        },
                    ],
                    [
                        {
                            ...localisation?.NEXT_INLINE,
                            callback_data: JSON.stringify({
                                action: 'NEXT_FLAT',
                                table,
                                flatId,
                            }),
                        },
                    ],
                ],
            },
        })
        .catch(console.error);

    deleteMessage(query);
};
