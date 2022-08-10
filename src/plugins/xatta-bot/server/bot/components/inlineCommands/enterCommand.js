module.exports = async (msg) => {
    const { user, localisation, chatId } = msg;

    if (user.showPromo) {
        await strapi.bots.alanyaBot.sendMessage(chatId, localisation?.FIRST_TIME_START_PRESS.text);
        await strapi.entityService.update('api::telegram-user.telegram-user', user.id, {
            data: {
                showPromo: false,
            },
        });
    }

    await strapi.bots.alanyaBot
        .sendMessage(chatId, localisation?.WELCOME, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            ...localisation?.FAVORITE,
                            callback_data: JSON.stringify({
                                action: 'FAVORITE_HOUSINGS',
                            }),
                        },
                        {
                            ...localisation?.SEARCH,
                            callback_data: JSON.stringify({
                                action: 'SEARCH',
                            }),
                        },
                    ],
                ],
            },
        })
        .catch((e) => {
            console.error(e);
        });
};
