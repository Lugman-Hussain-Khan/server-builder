import Prisma from "../../prisma/prisma.js";
import moment from "moment-business-days";
import logger from "../../utils/logger.js";

const addTask = async (req, res) => {
    const { id } = req.params;
    const { assigneeName, assigneeId, assignorName, projects, from, to } = req.body;

    // try {

    //     logger.info(`Checking for user availabitliy - UserId:${assigneeId}`);

    //     const isTaskPresent = await Prisma.tasks.findMany({
    //         where: {
    //             assigneeId,
    //             OR: [
    //                 {
    //                     from: {
    //                         lte: to,
    //                         gte: from
    //                     }
    //                 },
    //                 {
    //                     to: {
    //                         lte: to,
    //                         gte: from
    //                     }
    //                 },
    //                 {
    //                     from: {
    //                         lte: from
    //                     },
    //                     to: {
    //                         gte: to
    //                     }
    //                 }
    //             ]
    //         }
    //     });

    //     if (isTaskPresent.length > 0) {
    //         return res.status(400).json({
    //             message: "Resource already allocated",
    //             data: isTaskPresent
    //         });
    //     }

    //     logger.info(` - UserId:${assigneeId}`);


    // } catch (e) {
    //     console.log(e);
    // }

    try {
        projects.map(async (project, index) => {
            await Prisma.tasks.create({
                data: {
                    assignorId: id,
                    assignorName,
                    assigneeId,
                    assigneeName,
                    projectId: JSON.parse(project).id,
                    projectName: JSON.parse(project).name,
                    from,
                    to,
                    workingDays: moment(to).add(1, "days").businessDiff(moment(from))
                }
            });
            if (index === projects.length - 1) {
                return res.status(201).json({
                    message: "Task created",
                });
            }
        });



    } catch (e) {
        console.log(e);
    }
};

export default addTask;