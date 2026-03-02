let stream = null;

const param = {
  audio: true,
  video: true,
};

const videoUser = document.querySelector(".user");
const cameraBtn = document.querySelector(".Camera");
const endCallBtn = document.querySelector(".endCall");

async function getVideo() {
  try {
    stream = await navigator.mediaDevices.getUserMedia(param);
    videoUser.srcObject = stream;
  } catch {
    console.log("provide acces");
  }
}
cameraBtn.addEventListener("click", () => {
  getVideo();
});

endCallBtn.addEventListener("click", () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop()); // ⭐ stop all tracks
    videoUser.srcObject = null; // video blank karo
  }
});