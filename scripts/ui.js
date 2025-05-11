// ui.js
// This file contains the UI logic for the application.

import { pushDataToDB, updatePropertyInDB, deletePropertyInDB, getValueOnce } from "./firebase.js";

const sampleDataStrcture = {
    name: {
        firstname: "jeromy",
        lastname: "mcguire",
        nickname: "jerry",
    },
    age: 37,
    education: {
        ol: {
            math: 10,
            sci: 20,
            eng: 30,
        },
        al: {
            phy: 40,
            chem: 50,
            bio: 60,
        },
    }
};

console.log("sampleDataStrcture", sampleDataStrcture);

// Get entire database onValue()
export function onValUiTrigger(data){
    console.log("onValUiTrigger", data);
    // loop through the data and console log the key and value
    data.forEach((item) => {
        const [key, value] = item;
        console.log("key", key);
        console.log("value", value);
        console.log("firstname", value.name.firstname);
    });
}

// push new data to the database
// pushDataToDB(sampleDataStrcture);

// update specific property in the database
const pathRef = "studentData/-OQ0OH9zGpeK86CVrKQQ/education/ol";
const dataToUpdate = {
    eng: 15
};
// updatePropertyInDB(pathRef, dataToUpdate);

// delete specific property in the database
const pathRefRemove = "studentData/-OQ0-ZD_sGeMBccc4yt8";
// deletePropertyInDB(pathRefRemove);

// Get value of a node once.
console.log("From ui.js: getValue()", getValueOnce('-OQ0OH9zGpeK86CVrKQQ/education'));