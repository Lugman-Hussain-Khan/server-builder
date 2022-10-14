const { Prisma } = require("../../prisma/prisma");

const findTaskWithDate = async (id, from, to) => {
    const tasks = await Prisma.tasks.findMany({
        where: {
            assigneeId: id,
            OR: [
                {
                    from: {
                        lte: to,
                        gte: from
                    }
                },
                {
                    to: {
                        lte: to,
                        gte: from
                    }
                },
                {
                    from: {
                        lte: from
                    },
                    to: {
                        gte: to
                    }
                }
            ]
        }
    });

    return tasks;
};

module.exports = { findTaskWithDate };