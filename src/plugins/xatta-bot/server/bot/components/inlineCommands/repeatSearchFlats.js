const searchFlatsFunc = require('./searchFlats');

module.exports = async (query) => {
    const { messageId, chatId } = query;

    const params = {
        data: {
            watchedHousings: [],
        },
    };

    await strapi.bots.alanyaBot.deleteMessage(chatId, messageId).catch((e) => {
        console.error(e);
    });

    await strapi.entityService
        .update('api::telegram-user.telegram-user', query.user.id, params)
        .catch((e) => {
            console.log(e);
        })
        .catch((e) => {
            console.error(e);
        });

    return await searchFlatsFunc(query).catch((e) => {
        console.error(e);
    });
};
