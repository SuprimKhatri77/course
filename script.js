const courseCon = document.querySelectorAll("#courseCon");

courseCon.forEach((courseCon) => {
  const video = courseCon.querySelector("#myVideo");
  courseCon.addEventListener("mouseenter", () => {
    video.play();
  });

  courseCon.addEventListener("mouseleave", () => {
    const video = courseCon.querySelector("#myVideo");
    video.pause();
    video.currentTime = 0;
  });
});
