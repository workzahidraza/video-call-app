// Elements
const plusBtn = document.getElementById("plusBtn");
const initialScreen = document.getElementById("initialScreen");
const videoScreen = document.getElementById("videoScreen");
const afterPlusBtn = document.querySelector(".afterPlusBtn");
const joinMeet = document.querySelector(".joinMeet");
const createMeet = document.querySelector(".createMeet");
const formTitle = document.getElementById("formTitle");
const meetingForm = document.getElementById("meetingForm");
const roomIdInput = document.getElementById("roomId");
const userNameInput = document.getElementById("userName");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const muteBtn = document.getElementById("muteBtn");
const videoBtn = document.getElementById("videoBtn");
const shareBtn = document.getElementById("shareBtn");
const endBtn = document.getElementById("endBtn");

// WebRTC Variables
let localStream;
let peerConnection;
let roomId;
let isMuted = false;
let isVideoOff = false;
const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] }; // Free STUN server

// Show form on plus button click
plusBtn.addEventListener("click", () => {
  afterPlusBtn.style.display = "block";
});

// Toggle modes
let currentMode = "join";
joinMeet.addEventListener("click", () => {
  currentMode = "join";
  updateForm();
  setActive(joinMeet, createMeet);
});
createMeet.addEventListener("click", () => {
  currentMode = "create";
  updateForm();
  setActive(createMeet, joinMeet);
});

function updateForm() {
  if (currentMode === "join") {
    formTitle.textContent = "Join a Meeting";
    roomIdInput.placeholder = "Enter Room ID";
  } else {
    formTitle.textContent = "Create a Meeting";
    roomIdInput.placeholder = "Room Name (auto-generated)";
    roomIdInput.value = generateRoomId();
  }
}

function setActive(active, inactive) {
  active.classList.add("active");
  inactive.classList.remove("active");
}

function generateRoomId() {
  return Math.random().toString(36).substr(2, 9);
}

// Form submission
meetingForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userName = userNameInput.value.trim();
  roomId = roomIdInput.value.trim() || generateRoomId();

  if (!userName) {
    alert("Please enter your name.");
    return;
  }

  // Start video call
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    localVideo.srcObject = localStream;
    initialScreen.style.display = "none";
    videoScreen.style.display = "block";
    setupPeerConnection();
  } catch (err) {
    alert("Camera/mic access denied or not available.");
    console.error(err);
  }
});

// WebRTC Setup
function setupPeerConnection() {
  peerConnection = new RTCPeerConnection(config);
  localStream
    .getTracks()
    .forEach((track) => peerConnection.addTrack(track, localStream));

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      // In a real app, send candidate to signaling server
      console.log("ICE Candidate:", event.candidate);
    }
  };

  peerConnection.ontrack = (event) => {
    remoteVideo.srcObject = event.streams[0];
  };

  // For simplicity, assume offer/answer exchange via console (replace with server)
  if (currentMode === "create") {
    peerConnection.createOffer().then((offer) => {
      peerConnection.setLocalDescription(offer);
      console.log("Offer created:", offer);
      // Send offer to joiner via signaling
    });
  }
  // For join, you'd receive offer and create answer similarly
}

// Controls
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  localStream.getAudioTracks()[0].enabled = !isMuted;
  muteBtn.innerHTML = isMuted
    ? '<i class="ri-mic-off-fill"></i>'
    : '<i class="ri-mic-fill"></i>';
});

videoBtn.addEventListener("click", () => {
  isVideoOff = !isVideoOff;
  localStream.getVideoTracks()[0].enabled = !isVideoOff;
  videoBtn.innerHTML = isVideoOff
    ? '<i class="ri-camera-off-fill"></i>'
    : '<i class="ri-camera-fill"></i>';
});

shareBtn.addEventListener("click", async () => {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const screenTrack = screenStream.getVideoTracks()[0];
    const sender = peerConnection
      .getSenders()
      .find((s) => s.track.kind === "video");
    sender.replaceTrack(screenTrack);
    screenTrack.onended = () => {
      const videoTrack = localStream.getVideoTracks()[0];
      sender.replaceTrack(videoTrack);
    };
  } catch (err) {
    alert("Screen sharing not supported or denied.");
  }
});

endBtn.addEventListener("click", () => {
  localStream.getTracks().forEach((track) => track.stop());
  peerConnection.close();
  videoScreen.style.display = "none";
  initialScreen.style.display = "block";
  afterPlusBtn.style.display = "none";
});

// Initialize
updateForm();
setActive(joinMeet, createMeet);
