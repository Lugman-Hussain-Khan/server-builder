import axios from "axios";
import logger from "../../utils/logger.js";

const getOrganizationData = async (req, res) => {

    const headerConfig = {
        headers: {
            "Authorization": `Bearer ${process.env.YOUTRACK_TOKEN}`
        }
    };

    try {

        const rawData = await Promise.all([
            axios.get("https://grootan.myjetbrains.com/youtrack/api/admin/projects?$top=-1&fields=archived,description,iconUrl,id,isDemo,name,pinned,ringId,shortName,template&query=", headerConfig),
            axios.get("https://grootan.myjetbrains.com/hub/api/rest/users?$skip=0&fields=id,name,profile(email)&orderBy=name:asc&query=", headerConfig)
        ]);

        const data = {
            projects: rawData[0].data,
            users: rawData[1].data.users
        };

        res.status(200).json(data);
        logger.info("Sent getOrgani");

    } catch (e) {
        console.log(e);
        res.status(500).json({ "error": "Internal server error" });
    }


};


export default getOrganizationData;