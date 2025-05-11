// firebase.js
// This file contains the Firebase logic for the application.

// UI Trigger imported from ui.js
import { onValUiTrigger } from "./ui.js";

// Initial Settings
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getDatabase, ref, push, onValue, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-database.js";
const appSettings = {
  databaseURL: "https://student-data-5d702-default-rtdb.asia-southeast1.firebasedatabase.app/"
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const studentDataInDB = ref(database, "studentData");

onValue(studentDataInDB, (snapshot) => {
    if (snapshot.exists()) {
        //const let data = Object.values(snapshot.val()); // Convert object to array with values only
        //const let data = Object.keys(snapshot.val()); // Convert object to array with keys only
        const data = Object.entries(snapshot.val()); // Convert object to array of key-value pairs
        console.log("[onValue:]", data);
        onValUiTrigger(data); // Trigger UI function in ui.js with the fetched data
    } else {
        console.log("[onValue:] No data available.");
    }
});

export function pushDataToDB(dataToPush) {
    push(studentDataInDB, dataToPush);
}

export function updatePropertyInDB(pathRef, dataToUpdate) {
    // Example pathRef: "studentData/-OQ-1thE-JC-Rgy9yT_W/education/ol"
    // Example dataToUpdate: { math: 100, sci: 200 }
    const updateRef = ref(database, pathRef);
    update(updateRef, dataToUpdate);
}

export function deletePropertyInDB(pathRef) {
    // Example pathRef: "studentData/-OQ-1thE-JC-Rgy9yT_W"
    // Example pathRef: "studentData/-OQ-1thE-JC-Rgy9yT_W/education/ol"
    const deleteRef = ref(database, pathRef);
    remove(deleteRef);
}


// *************************
// onValue() should be used as a trigger to get a snapshot of the database whenever a change happens. It shouldn't be used to get the database whenever needed. For that, use the get() method.
// export function getDB() {
//     return new Promise((resolve, reject) => {
//         onValue(studentDataInDB, (snapshot) => {
//             if (snapshot.exists()) {
//                 const data = Object.entries(snapshot.val());
//                 console.log(`[onValue]`, data);
//                 resolve(data); // Resolve the promise with the fetched data
//             } else {
//                 console.log(`[onValue] No data available.`);
//                 resolve([]); // Resolve with an empty array if no data
//             }
//         }, (error) => {
//             console.error(`[onValue] Error fetching data:`, error);
//             reject(error); // Reject the promise if there's an error
//         });
//     });
// }
// console.log("Test:", getDB());
// *************************


// ************************
// // This function is not used in the current code, but it can be used to get data from the database. It works but can't use because of async/await won't return the data.
// export function getDB() {
    //     onValue(studentDataInDB, (snapshot) => {
        //         if (snapshot.exists()) {
            //             //const let data = Object.values(snapshot.val()); // Convert object to array with values only
            //             //const let data = Object.keys(snapshot.val()); // Convert object to array with keys only
            //             let data = Object.entries(snapshot.val()); // Convert object to array of key-value pairs
            //             console.log("[onValue:]", data);
            //             return data;
            //         }
            //         else {
                //             console.log("[onValue:] No data available.");
//         }
//     });
// }
// getDB();
// ************************
