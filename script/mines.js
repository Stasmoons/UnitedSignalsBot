minesGo.onclick = function () {
  pageHome.classList.add("b-none");
  pageHome.classList.remove("b-show");
  header.classList.add("b-none");
  header.classList.remove("b-show");
  // menu.classList.add("b-none");
  // menu.classList.remove("b-show");

  pageMines.classList.remove("b-none");
  pageMines.classList.add("b-show");

  minesImgSignal.classList.add("mines-deactive");
  minesLoading.classList.add("mines-deactive");
  minesScreenStart.classList.remove("mines-deactive");
  minesImgSignal.style["z-index"] = "-1"
}

minesButtonGetSignal.onclick = function () {
  backchek = 0
  minesGameScreen.style["z-index"] = "2";
  minesSignal.classList.add("mines-deactive");
  minesScreenStart.classList.add("mines-deactive");
  minesLoadingSignal.classList.remove("mines-deactive");
  minesButtonGetSignal.disabled = true;
  console.log(backchek);

  const timer = setTimeout(function () {
    if (backchek == 0) {
      minesImgSignal.style["z-index"] = "0"
    }

    if (backchek == 1) {
      clearInterval(timer)
      minesButtonGetSignal.disabled = false;
      backchek == 0
    }

    const range = 40;
    const minesRandomPhotoNumber = Math.floor(Math.random() * (range - 1) + 1);
    minesSignal.src = `assets/mines/images/signals/${minesRandomPhotoNumber}.jpg`;

    minesLoadingSignal.classList.add("mines-deactive");
    minesSignal.classList.remove("mines-deactive");
    minesButtonGetSignal.disabled = false;
  }, 3000);
}