var firebaseConfig = {
    apiKey: "AIzaSyC_hCL1S3Sjlbsr7kZNK04ABRKpP_HV4ds",
    authDomain: "kwitter-project-743e7.firebaseapp.com",
    databaseURL: "https://kwitter-project-743e7-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-743e7",
    storageBucket: "kwitter-project-743e7.appspot.com",
    messagingSenderId: "884039538977",
    appId: "1:884039538977:web:0bb947ec165562a9eec660"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";


function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("room name- " + Room_names);
      row= "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row ;
 //End code
 });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location= "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}