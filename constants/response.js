const responseMessages = {
    invalidReqBody: "Invalid request body",
    internalServerError: "Internal server error",
    notFound: "Record not found",
    created: "Employee added successfully",
    createError: "Error while creating employee",
    update: "Updated successfully",
    updateError: "Error while updating",
    taskDeleted: "Task deleted successfully",
    missingId: "Record ID required"
};

const statusCode = {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    exist: 409,
    notExist: 404,
    internalServerError: 500
};

const status = {
    ok: "OK",
    success: "Success",
    badRequest: "BAD_REQUEST",
    unauthorized: "Unauthorized",
    exist: "Record exists",
    notExist: "No records found",
    internalServerError: "Server error"
};

const responses = {
    taskCreated: {
        status: status.ok,
        message: "Task added successfully"
    },
    taskUpdated: {
        status: status.success,
        message: "Task updated successfully"
    },
    taskDeleted: {
        status: status.success,
        message: "Task deleted successfully"
    },
};

module.exports = { responseMessages, statusCode, status, responses };