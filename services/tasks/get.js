import Prisma from "../../prisma/prisma.js";

const getTasks = async (req, res) => {

    const { assignor } = req.query;
    const { id } = req.params;

    if (assignor) {
        const tasks = await Prisma.tasks.findMany({
            where: {
                assignorId: id
            }
        });
        return res.status(200).json(tasks);
    }

    const tasks = await Prisma.tasks.findMany({
        where: {
            assigneeId: id
        }
    });

    res.status(200).json(tasks);
};

export default getTasks;