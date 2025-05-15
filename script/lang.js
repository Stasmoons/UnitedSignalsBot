// location.href = window.location.pathname + "#en";

const langArr = {
  "choose": {
    "en": "CHOOSE GAME",
    "ru": "ВЫБРАТЬ ИГРУ",
  },

  "info": {
    "en": "Info",
    "ru": "Инфо",
  },

  "home": {
    "en": "Home",
    "ru": "Домой",
  },

  "channel": {
    "en": "channel",
    "ru": "Канал"
  },

  "infoTitle": {
    "en": "INSTRUCTIONS",
    "ru": "Инструкция",
  },

  "infoMainContent": {
    "en": "The bot is based on and trained using OpenAI's neural network cluster 🖥[ChatGPT-v4].<br><br>For training, the bot played 🎰over 8000 games.Currently, bot users successfully make 20-30% of their 💸capital daily!<br><br>The bot is still learning, and its accuracy is at 85%!<br>Follow these instructions for maximum profit:<br><br>🔸 1. Register at the 1WIN betting office.If it doesn’t open - use a VPN (Sweden).I use VPN Super Unlimited Proxy Access to signals will not be available without registration!<br>🔸 2. Deposit funds into your account.<br>🔸 3. Go to the 1win games section and select the game.<br>🔸 4. Request a signal from the bot and place bets based on the bot’s signals.<br>🔸 5. In case of a losing signal, we advise you to double (X2) your bet to fully cover the loss in the next signal.<br>",
    "ru": "Бот основан и обучен с использованием нейронных сетей OpenAI 🖥[ChatGPT-v4].<br><br>Для обучения бот сыграл 🎰более 8000 игр. В настоящее время пользователи бота успешно зарабатывают 20-30% своих 💸 капитал ежедневно!<br><br>Бот все еще учится, и его точность составляет 85%!<br>Для получения максимальной прибыли следуйте этим инструкциям:<br><br>🔸 1. Зарегистрируйтесь в букмекерской компании 1WIN. Если не открывается - используйте VPN (Швеция). Я использую VPN Super Unlimited Proxy. Без регистрации доступ к сигналам будет невозможен!<br>🔸 2. Внесите средства на свой счет.<br>🔸 3. Зайдите в раздел 1win games и выберите игру.<br>🔸 4. Запросите сигнал от бота и делайте ставки по сигналам бота.<br>🔸 5. В случае проигрышного сигнала советуем удвоить (Х2) ваша ставка полностью покроет убыток в следующем сигнале.<br>"
  },

  "channelTitle": {
    "en": "Join our TG channel",
    "ru": "Присоединяйтесь к нашему TG каналу",
  },

  "channelButtton": {
    "en": "JOIN CHANNEL",
    "ru": "ПРИСОЕДИНИТЬСЯ",
  },

  "allGameStartOne": {
    "en": "CLICK ON<br>«GET SIGNAL»",
    "ru": "НАЖМИТЕ НА<br>«ПОЛУЧИТЬ СИГНАЛ»",
  },

  "allGameStartTwo": {
    "en": "START",
    "ru": "НАЧАТЬ"
  },
  "allGameGetSignal": {
    "en": "GET SIGNAL",
    "ru": "ПОЛУЧИТЬ СИГНАЛ",
  },
  "allGameGameHere": {
    "en": "GAME HERE",
    "ru": "ИГРАТЬ",
  },
  "notification": {
    "en": "Wait for the time to expire",
    "ru": "Подождите, пока истечет<br>время"
  },

  "instOneOne": {
    "en": "1. Chose game",
    "ru": "1. Выберите игру",
  },

  "instOneTwo": {
    "en": "2. Change number of cells",
    "ru": "2. Измените количество ячеек",
  },

  "instOneThree": {
    "en": "3. Select 6x15",
    "ru": "3. Выберите 6x15",
  },

  "instOneFour": {
    "en": "4. Play Game",
    "ru": "4. Начните играть",
  },

  "instTwoTwo": {
    "en": "2. Chose 3 traps",
    "ru": "2. Выберите 3 ловушки"
  }

}

select.addEventListener("change", changeURLLanguage);

const allLang = ["ru", "en"]

//Перенаправляем на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;

  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload()
  }
  select.value = hash

  //Изменяем контент на страницах
  // document.querySelector(".lng-choose").innerHTML = langArr["choose"][hash]
  // document.querySelector(".lng-info").innerHTML = langArr[info][hash]


  for (let key in langArr) {
    document.querySelectorAll(".lng-" + key).forEach((object) => {
      object.innerHTML = langArr[key][hash]
    })
  }

}