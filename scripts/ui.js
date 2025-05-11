// ui.js
// This file contains the UI logic for the application.

import { pushDataToDB, updatePropertyInDB, deletePropertyInDB } from "./firebase.js";

const keyElm = document.getElementById("key");
const firstnameElm = document.getElementById("firstname");
const lastnameElm = document.getElementById("lastname");
const nicknameElm = document.getElementById("nickname");
const ageElm = document.getElementById("age");
const mathElm = document.getElementById("math");
const sciElm = document.getElementById("sci");
const engElm = document.getElementById("eng");
const phyElm = document.getElementById("phy");
const chemElm = document.getElementById("chem");
const bioElm = document.getElementById("bio");
const submitElm = document.getElementById("add-student");

const sampleDataStrcture = {
    name: {
        firstname: "john",
        lastname: "doe",
        nickname: "johnny",
    },
    age: 40,
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

// push new data to the database
// pushDataToDB(sampleDataStrcture);

// update specific property in the database
const pathRef = "studentData/-OQ-1thE-JC-Rgy9yT_W/education/al";
const dataToUpdate = {
    bio: 65
};
// updatePropertyInDB(pathRef, dataToUpdate);

// delete specific property in the database
const pathRefRemove = "studentData/-OPzks6N13StkghuC3xt";
// deletePropertyInDB(pathRefRemove);
