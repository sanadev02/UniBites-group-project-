const restList = document.getElementById('#restList');

//create element & render cafe

//function renderRest(doc) {

//let li = document.createElement('li');

//let name = document.createElement('span');

//let address = document.createElement('span');

//let price = document.createElement('span');

//let rating = document.createElement('span');

//let tel = document.createElement('span');

//li.setAttribute('data-id', doc.id);

//name.textContent = doc.data().name;

//address.textContent = doc.data().address;

//price.textContent = doc.data().price;

//rating.textContent = doc.data().rating;

//tel.textContent = doc.data().tel;

//li.appendChild(name);

//li.appendChild(address);

//li.appendChild(price);

//li.appendChild(rating);

//li.appendChild(tel);

//restList.appendChild(li);

//}

//getting data




// Initialize Firebase

var config = {

    apiKey: "AIzaSyC0V4EhCIvwLwCP2A_Cyxqb8npnlOHVQuo",

    authDomain: "yellow-4c9b9.firebaseapp.com",

    projectId: "yellow-4c9b9",

    storageBucket: "yellow-4c9b9.appspot.com",

    messagingSenderId: "966190739095",

    appId: "1:966190739095:web:b6dfb279ef580d3a1a43d2",

    measurementId: "G-5MEBG3G65L"

};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({

    timestampsInSnapshots: true


});

db.collection('restaurants').get().then(snapshot => {

    let tableHtml = "<th><td>name</td><td>address</td><td>price</td><td>tel</td><td>rating</td></th>";

    snapshot.docs.forEach(doc => {

        console.log(doc.data().name)

        tableHtml += "<tr>"

        tableHtml += "<td>" + doc.data().name + "</td>"

        tableHtml += "<td>" + doc.data().address + "</td>"

        tableHtml += "<td>" + doc.data().price + "</td>"

        tableHtml += "<td>" + doc.data().tel + "</td>"

        tableHtml += "<td>" + doc.data().rating + "</td>"

        tableHtml += "</tr>"

    });

    document.getElementById("restTab").innerHTML = tableHtml;

});