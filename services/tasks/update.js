import Prisma from "../../prisma/prisma.js";

const updateTask = async (req, res) => {

    const { id, taskId } = req.params;
    const { assigneeName, assigneeId, assignorName, projectId, projectName, from, to } = req.body;

    try {

        const isTaskPresent = await Prisma.tasks.findUnique({
            where: {
                id: taskId
            }
        });

        if (!isTaskPresent) {
            return res.status(400).json(isTaskPresent);
        }

        // const activeTasks = await Prisma.tasks.findMany({
        //     where: {
        //         assigneeId: assigneeId,
        //         NOT: {
        //             id: taskId
        //         },
        //         OR: [
        //             {
        //                 from: {
        //                     lte: to,
        //                     gte: from
        //                 }
        //             },
        //             {
        //                 to: {
        //                     lte: to,
        //                     gte: from
        //                 }
        //             },
        //             {
        //                 from: {
        //                     lte: from
        //                 },
        //                 to: {
        //                     gte: to
        //                 }
        //             }
        //         ]
        //     }
        // });

        // if (activeTasks.length > 0) {
        //     return res.status(400).json({
        //         message: "Resource already allocated",
        //         data: activeTasks
        //     });
        // }

        const updatedTask = await Prisma.tasks.update({
            where: {
                id: taskId
            },
            data: {
                assignorId: id,
                assignorName,
                assigneeId,
                assigneeName,
                projectId,
                projectName,
                from,
                to
            }
        });

        res.status(200).json(updatedTask);

    } catch (e) {
        console.log(e);
    }
};


export default updateTask;