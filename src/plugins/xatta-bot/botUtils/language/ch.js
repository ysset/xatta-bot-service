module.exports = {
    lang: 'ch',
    WELCOME:
        '你好！\n' +
        '\n' +
        '引入一个智能目录来选择土耳其的房地产！\n' +
        '\n' +
        '您可以直接从开发商那里选择新建筑中的豪华别墅和公寓！\n' +
        '\n' +
        '我们的目标是汇集此目录中的所有房产，帮助您在土耳其舒适地购买新房！\n' +
        '\n' +
        '按开始开始。\n' +
        '\n' +
        '合作 @oknemzuk_gelo',
    MENU_BUTTON: '菜单',
    CONTROL_PANEL: {
        text: '控制面板',
    },
    START: {
        text: '/开始',
        regex: /\/start/,
    },
    NO_FLATS: '不幸的是公寓已经结束了（',
    NO_CARS: '不幸的是，汽车都结束了（',
    SERVER_ERROR: '对不起，发生错误，请重试或稍后再试！',
    SAVED: '添加到收藏夹',
    FAVORITE: {
        text: '已保存❤️',
    },
    SELECT_SUBGROUP: {
        text: '选择子组',
    },
    FAVORITE_HOUSINGS: {
        text: '物业❤️',
    },
    SEARCH: {
        text: '搜索🔍',
    },
    SEARCH_FLATS: {
        text: '房产🔍',
    },
    REPEAT_SEARCH_FLATS: {
        text: '再次搜索属性',
    },
    NO_FAVORITE_NOW: '您还没有保存任何不动产！',
    UN_AUTHORIZE: '我们似乎找不到特色公寓，请重启机器人！',
    WRITE_AGENT_INLINE: {
        text: '联系人',
    },
    WRITE_AGENT: {
        userText: (username, agentUsername) =>
            `${username} 这里是房地产经纪人 https://t.me/${agentUsername} 的链接。 \n请给他发短信 =) `,
        realtorText: (username, agentUsername) =>
            `${agentUsername} 用户 https://t.me/${username} 对您的公寓感兴趣。 `,
        orderInfo: ({ id, title, cost, city, district, locationUrl, paymentMethod }) =>
            `公寓：\nid：${id} \n名称：${title} \n价格：${cost} \n地址：${city} ${district}${
                locationUrl ? ` \n位置：${locationUrl}` : ''
            } \n${paymentMethod}`,
    },
    CHOOSE_THE_ACTION: {
        text: (flatId) => `公寓号：${flatId} \n选择操作：`,
    },
    HOUSING_FULL_DESCRIPTION: ({
        title,
        cost,
        city,
        housingArea,
        rooms,
        locationUrl,
        caption,
        metersFromTheSea,
        constructionCompletionDate,
    }) =>
        `${title} \nPrice: ${cost} | City: ${city} ${housingArea ? `\nArea ${housingArea} m2 |` : ''} ${
            rooms ? `Rooms: ${rooms}` : ''
        } \nLocation: ${locationUrl} ${metersFromTheSea ? `\nTo sea: ${metersFromTheSea} m` : ''} ${
            constructionCompletionDate ? `\nCompletion Date: ${constructionCompletionDate}` : ''
        } \n\n${caption}`,
    GO_BACK_ACTION: {
        text: '<<返回',
    },
    DELETE_ACTION: {
        text: '从收藏夹中删除',
    },
    DELETED: {
        text: '该公寓已从收藏夹中删除。',
    },
    FULL_DESCRIPTION: {
        text: '详细说明',
    },
    SAVE_INLINE: {
        text: '保存',
    },
    NEXT_INLINE: {
        text: '下一个',
    },
    FIRST_TIME_START_PRESS: {
        text:
            '用于选择房地产的目录机器人\n' +
            '\n' +
            '\n' +
            '\n' +
            ' • 你为什么需要我？\n' +
            '\n' +
            '我会让你轻松选择任何属性。\n' +
            '现在您无需长时间滚动浏览个人电报频道，试图将您喜欢的选项保存在某个地方，只需按“下一步➡️”按钮即可查看，如果您喜欢公寓，请按“保存❤️”按钮\n' +
            '\n' +
            '您可以自己寻找公寓，查看阿拉尼亚的房价，立即预订并购买您喜欢的选项。\n' +
            '\n' +
            ' • 我能做什么？\n' +
            '\n' +
            '更多关于命令\n' +
            '\n' +
            '你想探索目录吗？ — 按“搜索🔍”\n' +
            '\n' +
            '查看最喜欢的选项？ — “救了❤️”\n' +
            '\n' +
            '缺少命令按钮？ - 点击麦克风左侧的图标\n' +
            '\n' +
            '保留你最喜欢的公寓？ - “保存❤️”（当您保存公寓时，它会从常规列表中消失并出现在“已保存❤️”选项卡中）\n' +
            '\n' +
            '去下一个公寓？ - “下一个➡️”\n' +
            '\n' +
            '联系卖家？ - “联系📶”\n' +
            '\n' +
            '需要帮忙？ - 按“菜单”，然后按“帮助”。\n' +
            '\n' +
            '\n' +
            '另外，我有一个方便的分割。\n' +
            '\n' +
            ' 1. 正在建设中。\n' +
            '\n' +
            '你想投资房地产吗？ \n' +
            '那么请随意选择这个项目，我们会添加从基坑到最终完成的最佳房地产选项。\n' +
            '\n' +
            '2. 新建筑。\n' +
            '\n' +
            '你想在新房子里买一套公寓吗？\n' +
            '这里是您的最佳选择，从单人房到复式房。\n' +
            '\n' +
            ' 3. 转售。\n' +
            '\n' +
            '如果您想在预算内购买公寓，请研究这个细分市场。有时，这里会出现真正的钻石）\n' +
            '\n' +
            '4. 别墅。\n' +
            '\n' +
            '精英房地产。 \n' +
            '除了拥有领土和游泳池等明显优势外，您将有机会几乎立即获得土耳其公民身份。\n' +
            '\n' +
            '\n' +
            '能够直接从机器人联系卖家。\n' +
            '\n' +
            '你为自己选好了公寓吗？ - 您可以安全地点击“联系📶”按钮。将打开一个聊天窗口，您可以在其中澄清您感兴趣的任何细节并就购买房地产达成一致。\n',
    },
};
