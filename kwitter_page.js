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
    room_name= localStorage.getItem("room_name");

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name= message_data['name'];
message= message_data['message'];
like= message_data['like'];

name_width_tag= '<h4>' + name + '</h4>' ;
message_width_tag= '<h4 class="message_h4">' + message + '</h4>';
like_button= "<button class='btn btn-warning' id="+ firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
span_width_tag= "<span class='glyphicon glyphicon-thumbs-up'>  Like: " + like + "</span> </button> <hr>";
row= name_width_tag + message_width_tag + like_button + span_width_tag;
document.getElementById("output").innerHTML+= row;
console.log("test");
//End code
     } });  }); }
getData();

function updateLike(message_id){
     console.log("click on like button-" + message_id);
     button_id= message_id;
     likes= document.getElementById(button_id).value;
     updated_likes= Number(likes) + 1;
     console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
           like: updated_likes
     });
}

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
}

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like:0
    });
    document.getElementById("msg").value="";
}

