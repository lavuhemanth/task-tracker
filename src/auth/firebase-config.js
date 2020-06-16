import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAep0ePNQobQg4kHssPREfsY46W5vHiaiE",
    authDomain: "task-tracker-86e5f.firebaseapp.com",
    databaseURL: "https://task-tracker-86e5f.firebaseio.com",
    projectId: "task-tracker-86e5f",
    storageBucket: "task-tracker-86e5f.appspot.com",
    messagingSenderId: "672035833630",
    appId: "1:672035833630:web:3a0f21c23cf3bfba67ab0f",
    measurementId: "G-VJ1RGQBH7J"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const data = database.ref('/').once('value').then((snapshot) => {
    console.log("SNap from db :: ", snapshot.val());
    const data = snapshot.val();
    let resData = {
        projectList: []
    };
    let projectKeysList = Object.keys(data.projects);
    projectKeysList.forEach(key => {
        resData.projectList.push(data.projects[key]);
    })
    console.log("Project List :: ", resData.projectList);
    return resData
})
export { firebase, database, data };