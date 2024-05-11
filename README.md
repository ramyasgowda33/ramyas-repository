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
 */![image](https://github.com/ramyasgowda33/ramyas-repository/assets/47365947/561deb4d-060a-4630-bd4e-1067cda8cab0)
