var mainApp = {}

$(function () {
    var firebase = app_firebase;
    var uid = null
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            uid = user.uid
            console.log(uid);
            // User is signed in.
        } else {
            uid = null
            window.location.replace('index.html')
        }
    });
    function logOut() {
        firebase.auth().signOut()
    }
});