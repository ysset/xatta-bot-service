'use strict';
const getData = async ({ api, field }) =>
    await strapi.entityService.findMany(api, {
        populate: {
            localisation: {
                fields: [field],
            },
            agent: true,
            createdBy: true,
        },
    });

// Create custom Promise method
const rejectSleep = (time, customReject) =>
    new Promise((_, reject) =>
        setTimeout(() => (customReject ? customReject() : reject('Time is over')), time)
    );
Promise.timeout = (promise = Promise, time, customReject) =>
    Promise.race([promise, rejectSleep(time, customReject)]);

module.exports = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register({ strapi }) {
        strapi.bots = {};
    },

    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    async bootstrap({ strapi }) {
        const complexes = await getData({ api: 'api::complex.complex', field: 'city' });
        const villas = await getData({ api: 'api::villa.villa', field: 'city' });
        const owners = await getData({ api: 'api::owner.owner', field: 'city' });
        const managers = [...new Set(complexes.map((el) => el.createdBy.firstname))];
        const objects = { complexes, villas, owners };
        const count = [];
        managers.forEach((manger) => {
            for (const el in objects) {
                count.push({
                    [el + ' ' + manger]: objects[el].filter(
                        (complex) => complex.createdBy.firstname === manger
                    ).length,
                });
            }
        });
        console.log(count);
        let agents = await strapi.entityService.findMany('api::agent.agent', {
            filters: { $not: { city: null } },
        });
        const [owner] = await strapi.entityService.findMany('api::agent.agent', {
            filters: { isOwner: true },
            fields: ['id'],
        });
        if (agents.length || owner) {
            for (let object of complexes) {
                const { id } =
                    agents.find((agent) => object.localisation.some((el) => el.city === agent.city)) || {};
                if (id || owner)
                    await strapi.entityService.update('api::complex.complex', object.id, {
                        data: { agent: id || owner.id },
                    });
            }
            for (let object of villas) {
                const { id } =
                    agents.find((el) => object.localisation.some((agent) => el.city === agent.city)) || {};
                if (id || owner)
                    await strapi.entityService.update('api::villa.villa', object.id, {
                        data: { agent: id || owner.id },
                    });
            }
            for (let object of owners) {
                const { id } =
                    agents.find((el) => object.localisation.some((agent) => el.city === agent.city)) || {};
                if (id || owner)
                    await strapi.entityService.update('api::owner.owner', object.id, {
                        data: { agent: id || owner.id },
                    });
            }
        }

        const ids = await strapi.entityService.findMany('api::telegram-user.telegram-user', {
            fields: ['id'],
        });
        for (let { id } of ids) {
            await strapi.entityService.update('api::telegram-user.telegram-user', id, {
                data: {
                    filters: {},
                },
            });
        }
    },
};
