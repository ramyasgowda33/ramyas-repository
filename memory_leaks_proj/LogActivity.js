/**
 * User Activity Log System
 *
 * Objective: Design and implement a JavaScript module for tracking user
 * activities on a web application and generate insights from the activity data.
 *
 * Requirements:
 * 1. Activity Tracker:
 *  * Create a function logActivity(userId, activity) that logs user activities.
 *  * Activities can include actions like "login", "view", "click", and "logout".
 *  * Store activities in a way that they can be efficiently queried by userId and activity type.
 *
 * 2. Activity Insights:
 *  * Implement a function getActivityReport(userId) that returns a report object containing the count of each type of activity for a specific user.
 *  * Include a function getMostActiveUsers() that returns an array of userIds sorted by their total number of activities, descending.
 *
 * 3. Data Persistence:
 *  * Optionally, implement a simple persistence layer (could be localStorage for simplicity) to save and retrieve activity logs between sessions.
 *
 * 4. Error Handling:
 *  * Ensure that all functions gracefully handle invalid inputs and errors.
 *
 * 5. Performance:
 *  * The functions should be optimized for performance, particularly getActivityReport() and getMostActiveUsers().
 */

class User {
    constructor(userId, activity) {
        this.userId = userId;
        this.activity = activity;
    }
}
//global variables
const activity = Object.freeze({
    login: "login",
    view: "view",
    click: "click",
    logout: "logout",
});

const users = []; //array of users

//function calls
logActivity("sramya", activity.login);
logActivity("sramya", activity.view);
logActivity("sramya", activity.view);
logActivity("sramya", activity.view);
logActivity("sramya", activity.click);
logActivity("sramya", activity.click);
logActivity("sowmya", activity.logout);
logActivity("sowmya", activity.logout);
logActivity("lamya", activity.login);
logActivity("lamya", activity.view);
logActivity("gauri", activity.view);
logActivity("gauri", activity.view);
logActivity("gauri", activity.click);
logActivity("kanika", activity.click);

//saveActivity("sramya") - commented since localStorage is not available on server
//getActivityReport(userId) - commented since localStorage is not available on server

const activityReport = getActivityReport("sramya");
const mostActiveUsers = getMostActiveUsers();
console.log(mostActiveUsers.toString());

//function definitions
function logActivity(userId, activity) {
    //if both user & activity doesn't exists previously
    if (users.length === 0 || !users.some((u) => u.userId == userId)) {
        const user = {
            userId: userId,
            activities: [
                {
                    activityType: activity,
                    activityCount: 1,
                },
            ],
        };
        users.push(user);
    } else if (users.length > 0) {
        users.forEach((u) => {
            if (u.userId === userId) {
                let found = u.activities.some((a) => a.activityType === activity);
                if (found) {
                    u.activities.forEach((a) => {
                        if (a.activityType === activity) {
                            a.activityCount++;
                        }
                    });
                } else {
                    u.activities.push({
                        activityType: activity,
                        activityCount: 1,
                    });
                }
            }
        });
    }
}

//Data persistence + Error handling
//Optionally, implement a simple persistence layer (could be localStorage for simplicity) to save and retrieve activity logs between sessions.
function saveActivity(userId) {
    //error handling
    if (typeof localStorage !== "undefined")
        localStorage.setItem(userId, JSON.stringify(userIds[userId]));
    else if (typeof sessionStorage !== "undefined")
        sessionStorage.setItem(userId, JSON.stringify(userIds[userId]));
    else console.log("Web storage is not supported in this environment");
}

function retrieveActivity(userId) {
    //error handling
    if (typeof localStorage !== "undefined") {
        return new User(...JSON.parse(localStorage.getItem(userId)));
    } else if (typeof sessionStorage !== "undefined") {
        return new User(...JSON.parse(sessionStorage.getItem(userId)));
    } else console.log("Web storage is not supported in this environment");
}

//Activity insights
//{} = object literals  = key value pairs
//key : strings/identifiers , value : any data type - object, string, number
// Implement a function getActivityReport(userId) that returns a report object containing the count of each type of activity for a specific user.
function getActivityReport(userId) {
    var reportObj = users.find((x) => x.userId === userId);
    return reportObj;
}

// Include a function getMostActiveUsers() that returns an array of userIds sorted by their total number of activities, descending.
function getMostActiveUsers() {
    //map through subarray
    var result = users.map(function (x) {
        var totalCountPerUser = 0;

        x.activities.forEach((y) => {
            totalCountPerUser = totalCountPerUser + y.activityCount;
        });
        return { userId: x.userId, totalActivityCount: totalCountPerUser };
    });

    //sort the array as per totalCountPerUser
    var x = result.sort(compareCount);

    //return userIds in descending of their count
    return result.map(function (m) {
        return m.userId;
    });
}
// program to sort array by property name

function compareCount(a, b) {
    let comparison = 0;

    if (a.totalActivityCount > b.totalActivityCount) {
        comparison = -1;
    } else if (a.totalActivityCount < b.totalActivityCount) {
        comparison = 1;
    }
    return comparison;
}
