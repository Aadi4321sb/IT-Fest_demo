
//error handler
let handleError = function(err){
    console.log('ERROR: ' + err);
};


let remoteController = document.getElementById('remote-container');


function addVideoStream(elementId){

    let streamDiv = document.createElement("div");

    streamDiv.id = elementId;

    streamDiv.style.transform = "rotateY(180deg)";

    remoteContainer.appendChild(streamDiv);
};


function removeVideoStream(elementId){
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
};



let client = AgoraRTC. createclient({
    mode:'rtc',
    code: 'vp8',
});


client.init("0a874c3574df40938f5a941a24e3714d", function(){
    console.log('client initialized!');
}, function(err){
    console.log('client init failed' , err);
});



client.join("null","myChannel", null, (uid)=>{
    

    let localStream = AgoraRTC.createStream({
        audio: true;
        video: true;
    });

    localStream.init(()=>{
        // Play the local stream
        localStream.play('me');
        // Publish the local stream to channel
        client.publish(localStream, handleError);
    },handleError);
    
},handleError);



client.on('stream-added', function(evt){
    client.subscribe(evt.stream, handleError);
});

client.on('stream-subscribed', function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
});




client.on('stream-removed', function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});



client.on('peer-leave', function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});
