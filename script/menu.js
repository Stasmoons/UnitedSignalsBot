function limitText(limitField, limitNum) {
  if (limitField.value.length > limitNum) {
    limitField.value = limitField.value.substring(0, limitNum);
  }
}

for (let b of backHome) {
  b.onclick = function () {
    backchek = 1
    pageAviator.style["z-index"] = "-100"
    pageAviator.style["position"] = "absolute"
    pageAviator.style["opacity"] = "0"
    pageAviator.classList.remove("b-show");
    
    pageLuckyjet.style["z-index"] = "-100"
    pageLuckyjet.style["position"] = "absolute"
    pageLuckyjet.style["opacity"] = "0"
    pageLuckyjet.classList.remove("b-show");

    pageMines.classList.add("b-none");
    pageMines.classList.remove("b-show");

    pageRoyal.classList.add("b-none");
    pageRoyal.classList.remove("b-show");

    pageBumpucks.classList.add("b-none");
    pageBumpucks.classList.remove("b-show");

    minesImgSignal.classList.add("mines-deactive");
    minesLoading.classList.add("mines-deactive");
    minesScreenStart.classList.remove("mines-deactive");
    minesImgSignal.style["z-index"] = "-1"
    minesSignal.src = `/assets/mines/images/signal`;

    let hash = window.location.hash;
    hash = hash.substr(1);
    if (hash == "en") {
      royalNumberFront.classList.add("start");
      royalNumberBack.classList.add("start");
      royalNumberFront.innerHTML = `START`;
      royalNumberBack.innerHTML = `START`;
    } if (hash == "ru") {
      royalNumberFront.classList.add("start");
      royalNumberBack.classList.add("start");
      royalNumberFront.innerHTML = `НАЧАТЬ`;
      royalNumberBack.innerHTML = `НАЧАТЬ`;
    }

    if (hash == "en") {
      bumpucksNumberFront.classList.add("start");
      bumpucksNumberBack.classList.add("start");
      bumpucksNumberFront.innerHTML = `START`;
      bumpucksNumberBack.innerHTML = `START`;
    } if (hash == "ru") {
      bumpucksNumberFront.classList.add("start");
      bumpucksNumberBack.classList.add("start");
      bumpucksNumberFront.innerHTML = `НАЧАТЬ`;
      bumpucksNumberBack.innerHTML = `НАЧАТЬ`;
    }


    //Шапка
    header.classList.remove("b-none");
    header.classList.add("b-show");
    //Основная страница
    pageHome.classList.remove("b-none");
    pageHome.classList.add("b-show");
    //Меню
    menu.classList.remove("b-none");
    menu.classList.add("b-show");

  }
}

// info.onclick = function () {
//   // Отключаем страницу
//   pageHome.classList.add("b-none");
//   pageHome.classList.remove("b-show");
//   pageChannel.classList.add("b-none");
//   pageChannel.classList.remove("b-show");
//   // Включаем страницу
//   pageInfo.classList.remove("b-none");
//   pageInfo.classList.add("b-show");

//   active.style.removeProperty("margin-left");
//   active.style["transition"] = "0.4s ease-out";
//   active.style["margin-right"] = "176px";
// }

home.onclick = function () {
  // Отключаем страницу
  pageInfo.classList.add("b-none");
  pageInfo.classList.remove("b-show");
  pageChannel.classList.add("b-none");
  pageChannel.classList.remove("b-show");
  // Включаем страницу
  pageHome.classList.remove("b-none");
  pageHome.classList.add("b-show");

  active.style.removeProperty("margin-right");
  active.style.removeProperty("margin-left");
}



function menuGoTimerError(time) {
  menuErrorNotification.classList.remove("luckyjet-deactivate", "b-none");

  const timer = setInterval(() => {
    if (time >= 1) {
      time--;
      menuErrorProgress.style["animation"] = "animateErrorProgress 5s linear infinite";
      menuErrorNotification.style["transform"] = "translateY(0px)";
    } else {
      menuErrorNotification.style["transform"] = "translateY(-99px)";
      menuErrorProgress.style["animation"] = "none";
      clearInterval(timer);
      menuErrorNotification.classList.add("luckyjet-deactivate");
    }

    menuErrorExit.onclick = function () {
      menuErrorNotification.classList.add("luckyjet-deactivate");
      menuErrorNotification.style["transform"] = "translateY(-99px)";
      menuErrorProgress.style["animation"] = "none";;
      clearInterval(timer);
    }
  }, 1000)
}

// channel.onclick = function () {
//   // Отключаем страницу
//   pageHome.classList.add("b-none");
//   pageHome.classList.remove("b-show");
//   pageInfo.classList.add("b-none");
//   pageInfo.classList.remove("b-show");
//   // Включаем страницу
//   pageChannel.classList.remove("b-none");
//   pageChannel.classList.add("b-show");


//   active.style.removeProperty("margin-right");
//   active.style["transition"] = "0.4s ease-out";
//   active.style["margin-left"] = "176px";
// }