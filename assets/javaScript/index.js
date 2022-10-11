var appElement = document.querySelector("#App-1");
var card = appElement.querySelector(".flip-card-inner");
var formMessage = appElement.querySelector(".App-message");
var answerElement = appElement.querySelector("#answer");
var lengthArr = appElement.querySelector(".lengthArr");
var flipCardFrontEle = appElement.querySelector("#flip-card-front");
var cardNext = appElement.querySelector("#next");
var coating = appElement.querySelector(".coating");
var timeSum = appElement.querySelector(".timeSum");
var btnStar = appElement.querySelector("#btnStar");
var btnPause = appElement.querySelector("#btnPause");
var btnSubmits = appElement.querySelector("#btnSubmits");
var submitResult = appElement.querySelector("#submitResult");
var questionFrontId = appElement.querySelector("#questionFront");
var suggestions = appElement.querySelector("#suggestions");
var suggestionsMsg = appElement.querySelector(".suggestions");
var suggestionsElement = appElement.querySelector("#suggestionsBack");
var minRequirements = 30;

var vocabularyEnglish = [
  // Từ vựng căn bản:
  [
    "Ethnic groups (peoples)",
    "(n) các dân tộc",
    "Gợi ý: Ethnic groups (peoples)",
    "Hai_co_tam.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/1.mp3",
  ],
  [
    "Ethnic minority groups",
    "(n) các dân tộc thiểu số",
    "Gợi ý: Ethnic minority groups",
    "Hatrang.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/2.mp3",
  ],
  [
    "Mountainous regions",
    "n: vùng núi",
    "Gợi ý: Mountainous regions",
    "MisaCute.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/3.mp3",
  ],
  [
    "Account for",
    "v) chiếm",
    "Gợi ý: Account for",
    "ChinBacNuiRung.jpg",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/4.mp3",
  ],
  [
    "Diverse",
    "adj) đa dạng",
    "Gợi ý: Diverse",
    "PhotDoi.jpg",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/5.mp3",
  ],
  [
    "Majority",
    "n) đa số",
    "Gợi ý: Majority",
    "Annotation 2022-10-01 180957.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/6.mp3",
  ],
  [
    "Minority",
    "n) thiểu số",
    "Gợi ý: Minority",
    "Thanh_ngu.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/7.mp3",
  ],
  [
    "Gather",
    "v) tụ tập, tập trung",
    "Gợi ý: Gather",
    "khaigiang8A6_2022.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/8.mp3",
  ],
  [
    "Museum of Ethnology",
    "n) bảo tàng dân tộc học",
    "Gợi ý: Museum of Ethnology",
    "GVCN8A6_2022.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/9.mp3",
  ],
  [
    "Curious about",
    "adj) tò mò về",
    "Gợi ý: Curious about ",
    "tapthe8A6.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/10.mp3",
  ],
  [
    "Customs",
    "n) phong tục",
    "Gợi ý: Customs",
    "trungthu2022.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/11.mp3",
  ],
  [
    "Stilt house",
    "n) nhà sàn",
    "Gợi ý: Stilt house",
    "Dai_Nhan.png",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/1.mp3",
  ],
  [
    "Communal house",
    "n) đình làng, nhà rông",
    "Gợi ý: Communal house",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/2.mp3",
  ],
  [
    "Pagoda",
    "n) chùa",
    "Gợi ý: Pagoda",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/3.mp3",
  ],
  [
    "Temple",
    "n) đền",
    "Gợi ý: Temple",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/4.mp3",
  ],
  [
    "Ceremony",
    "n) nghi lễ",
    "Gợi ý: Ceremony",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/5.mp3",
  ],
  [
    "Festival",
    "n) Lễ hội",
    "Gợi ý: Festival ",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/6.mp3",
  ],
  ["Shawl", "n) Khăn phiêu", "Gợi ý: Shawl", ""],
  [
    "Waterwheel",
    "n) cối xay nước, cọn nước",
    "Gợi ý: Waterwheel",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/7.mp3",
  ],
  [
    "Terraced field",
    "n: ruộng bậc thang",
    "Gợi ý: Terraced field",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/9.mp3",
  ],
  [
    "Open-air market",
    "n: chợ ngoài trời",
    "Gợi ý: Open-air market",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/10.mp3",
  ],
  [
    "Cultivation",
    "n) việc cày cấy, trồng trọt",
    "Gợi ý: Cultivation",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/1.mp3",
  ],
  [
    "Plough",
    "v: Cày",
    "Gợi ý: Plough",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/2.mp3",
  ],
  [
    "Five-coloured sticky rice",
    "n: xôi ngũ sắc",
    "Gợi ý: Five-coloured sticky rice",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/3.mp3",
  ],
  [
    "Spin thread",
    "v.phr) kéo sợi",
    "Gợi ý: Spin thread",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/4.mp3",
  ],
  [
    "Dye",
    "v: nhuộm",
    "Gợi ý: Dye",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/5.mp3",
  ],
  [
    "Weave",
    "v) đan, dệt (vải, thảm, ...)",
    "Gợi ý: Weave",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/6.mp3",
  ],
  [
    "Embroidery",
    "n) họa tiết thêu, vải thêu",
    "Gợi ý: Embroidery",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/7.mp3",
  ],
  [
    "Worship",
    "v) thờ",
    "Gợi ý: Worship",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/8.mp3",
  ],
  [
    "Ancestor",
    "n: tổ tiên",
    "Gợi ý: Ancestor",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/9.mp3",
  ],
  // Cấu trúc ngữ pháp:
  [
    "Question word",
    "(How, When, Where, Why, What, Who, Whose, Which) gọi là gì?",
    "Gợi ý: Học lại đi",
    "3",
  ],
  [
    "Question word + V …?",
    "Công thức câu cơ bản với Question word",
    "Gợi ý: Question word + V …?",
    "3",
  ],
  // [
  //   "Which ethnic group has the smallest population?",
  //   "Dịch câu: Dân tộc nào có dân số ít nhất?",
  //   "Gợi ý: Which ethnic group has the smallest population?",
  //   "3",
  // ],
  // [
  //   "Câu hỏi tân ngữ/ bổ ngữ/ trạng ngữ",
  //   "Công thức câu này là gì: Question word + aux./ modal + S + V …?",
  //   "Gợi ý: Câu hỏi tân ngữ/ bổ ngữ/ trạng ngữ: là những câu hỏi bắt đầu bằng từ để hỏi (How, When, Where, Why, What, Who, Whose, Which) theo sau bởi trợ động từ (be, do, have) hoặc động từ khuyết thiếu (should, could, may, ...) tiếp đến là chủ ngữ và động từ ở dạng nguyên thể.",
  //   "3",
  // ],
  // [
  //   "Where can we find terraced fields?",
  //   "Dịch câu: Chúng ta có thể tìm thấy ruộng bậc thang ở đâu?",
  //   "Gợi ý: Where can we find terraced fields?",
  //   "3",
  // ],
  // [
  //   "Which of you have visited the Temple of Literature?",
  //   "Dịch câu: Ai trong số các em đã từng thăm quan Văn Miếu?",
  //   "Gợi ý: Which of you have visited the Temple of Literature?",
  //   "3",
  // ],
  // [
  //   "Which dish do you prefer, ‘pho’ or ‘bun cha’?",
  //   "Dịch câu: Em thích món ăn nào hơn, phở hay bún chả?",
  //   "Gợi ý: Which dish do you prefer, ‘pho’ or ‘bun cha’?",
  //   "3",
  // ],
  // [
  //   "Yes/ No questions",
  //   "Đây là loại câu gì: Aux./ Modal + S + V …?",
  //   "Gợi ý: Yes/ No questions",
  //   "3",
  // ],
  // [
  //   "Yes, S + aux./ modal. or No, S + aux./ modal + not.",
  //   "Loại câu này (Aux./ Modal + S + V …?) có dạng trả lời ntn?",
  //   "Gợi ý: Yes, S + aux./ modal. or  No, S + aux./ modal + not.",
  //   "3",
  // ],
  // [
  //   "Did they visit SaPa last month? - Yes, they did",
  //   "Dịch và trả lời câu: Họ đi SaPa tháng trước phải không?",
  //   "Gợi ý: Did they visit SaPa last month? - Yes, they did",
  //   "3",
  // ],
  // [
  //   "Which ethnic groups live mostly in the Central Highlands?",
  //   "Hoàn thành câu: ...ethnic groups live mostly in the Central Highlands?",
  //   "Gợi ý: Which ethnic groups live mostly in the Central Highlands?",
  //   "3",
  // ],
  // [
  //   "Why do the minority ethnic people seldom go to hospital?",
  //   "Hoàn thành câu: ...do the minority ethnic people seldom go to hospital?",
  //   "Gợi ý: Why do the minority ethnic people seldom go to hospital?",
  //   "3",
  // ],
  // [
  //   "Why do you like to eat 'Thang Co' a dish of the H'mong?",
  //   "Hoàn thành câu: ...do you like to eat 'Thang Co' a dish of the H'mong?",
  //   "Gợi ý: Why do you like to eat 'Thang Co' a dish of the H'mong?",
  //   "3",
  // ],
  // [
  //   "What gifts do you often buy when you visit Ha Giang province?",
  //   "Hoàn thành câu: ...gifts do you often buy when you visit Ha Giang province? ",
  //   "Gợi ý: What gifts do you often buy when you visit Ha Giang province?",
  //   "3",
  // ],
  // [
  //   "How long does it take to travel from Hanoi to Sapa by train?",
  //   "Hoàn thành câu: ...does it take to travel from Hanoi to Sapa by train?",
  //   "Gợi ý: How long does it take to travel from Hanoi to Sapa by train?",
  //   "3",
  // ],
  // [
  //   "What age do the minority ethnic boys and girls often get married?",
  //   "Hoàn thành câu: ...age do the minority ethnic boys and girls often get married?",
  //   "Gợi ý: What age do the minority ethnic boys and girls often get married?",
  //   "3",
  // ],
  // [
  //   "At the communal house.",
  //   "Trả lời câu sau: Where can I find the oldest person in your village?",
  //   "Gợi ý: At the communal house.",
  //   "3",
  // ],
  // [
  //   "How should I go to Viet Nam Museum of Ethnology?",
  //   "Đặt câu hỏi cho câu trả lời sau: You should go by bus.",
  //   "Gợi ý: How should I go to Viet Nam Museum of Ethnology?",
  //   "3",
  // ],
  // [
  //   "Whose costume is the simplest?",
  //   "Đặt câu hỏi cho câu trả lời sau: The Tay's",
  //   "Gợi ý: Whose costume is the simplest?",
  //   "3",
  // ],
  // [
  //   "Do the minority ethnic people in Sapa speak English well?",
  //   "Đặt câu hỏi cho câu trả lời sau: Yes, they do.",
  //   "Gợi ý: Do the minority ethnic people in Sapa speak English well?",
  //   "3",
  // ],
  // [
  //   "They represent the 5 elements of life.",
  //   "Trả lời câu sau: What do the colours of five-sticky rice represent?",
  //   "Gợi ý: They represent the 5 elements of life.",
  //   "3",
  // ],
  // [
  //   "a + countable singular noun (phrase) starting with a consonant sound",
  //   "Sử dụng mạo từ (a) trong trường hợp nào?",
  //   "Gợi ý: a + countable singular noun (phrase) starting with a consonant sound <br> Mạo từ a chỉ được sử dụng trước các (cụm) danh từ đếm được số ít và mang nghĩa là một, mỗi, từng hay bất kỳ. Đồng thời, từ đứng ngay sau a phải bắt đầu bằng một phụ âm.",
  //   "3",
  // ],
  // [
  //   "an + countable singular noun (phrase) starting with a vowel sound",
  //   "Sử dụng mạo từ (an) trong trường hợp nào?",
  //   "Gợi ý: an + countable singular noun (phrase) starting with a vowel sound <br>Mạo từ an chỉ được sử dụng trước các (cụm) danh từ đếm được số ít và mang nghĩa là một, mỗi, từng hay bất kỳ. Đồng thời, từ đứng ngay sau an phải bắt đầu bằng một nguyên âm.",
  //   "3",
  // ],
  // [
  //   "1. the + noun (phrase) that is easily understood 2. the + noun (phrase) that has already been mentioned 3. the + noun (phrase) that is unique 4. the + superlative comparison",
  //   "Trường hợp nào dùng mạo từ (the) ?",
  //   "Gợi ý: 1. the + noun (phrase) that is easily understood 2. the + noun (phrase) that has already been mentioned 3. the + noun (phrase) that is unique 4. the + superlative comparison <br>Mạo từ the đứng trước những (cụm) danh từ mà người đọc và người nghe đều dễ dàng biết được đối tượng mà nó nhắc đến. The cũng đứng trước (cụm) danh từ được nhắc đến trước đó hoặc (cụm) danh từ chỉ những khái niệm duy nhất. Đặc biệt, chúng ta luôn dùng the trước tính từ hoặc trạng từ ở dạng so sánh nhất.",
  //   "3",
  // ],
  // [
  //   "Viet Nam is the fatherland of many ethnic groups.",
  //   "Hoàn thành: Viet Nam is ... fatherland of many ethnic groups.",
  //   "Gợi ý: Viet Nam is the fatherland of many ethnic groups.",
  //   "3",
  // ],
  // [
  //   "In the plain and midland, ethnic groups grow water rice, building the culture of villages and hamlets.",
  //   "Hoàn thành: In the plain and midland, ethnic groups grow water rice, building ... culture of villages and hamlets.",
  //   "Gợi ý: In the plain and midland, ethnic groups grow water rice, building the culture of villages and hamlets.",
  //   "3",
  // ],
  // [
  //   "Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a population of around 1 million each.",
  //   "Hoàn thành: Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with ... population of around 1 million each.",
  //   "Gợi ý: Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a population of around 1 million each.",
  //   "3",
  // ],
  // [
  //   "The most appropriate manner of greeting the Vietnamese is a gentle handshake and a smile.",
  //   "Hoàn thành: ... most appropriate manner of greeting ... Vietnamese is ... gentle handshake and a smile. ",
  //   "Gợi ý: The most appropriate manner of greeting the Vietnamese is a gentle handshake and a smile.",
  //   "3",
  // ],
  // [
  //   "Waterwheels play an important role in many minority ethnic groups' lives.",
  //   "Hoàn thành: Waterwheels play ... important role in many minority ethnic groups' lives.",
  //   "Gợi ý: Waterwheels play an important role in many minority ethnic groups' lives.",
  //   "3",
  // ],
  // [
  //   "Đã đọc tối thiểu 3 lần",
  //   "Dạng câu: (Alternative questions?) được trả lời ntn?",
  //   "Gợi ý: Đã đọc tối thiểu 3 lần: Với dạng câu hỏi lựa chọn (trong câu hỏi thường có từ or đứng giữa các lựa chọn), câu trả lời thường theo 3 cách. Cách thứ nhất, nêu tên các lựa chọn. Cách thứ hai, đồng ý với tất cả các lựa chọn bằng cách dùng các từ như: Both, Both of them, .... Cách thứ ba, từ chối tất cả các lựa chọn bằng cách dùng các từ như: Neither, None of them, ....",
  //   "3",
  // ],
  // ["", "", "Gợi ý: ", "3"],
  // ["", "", "Gợi ý: ", "3"],
  // ["", "", "Gợi ý: ", "3"],
  // ["", "", "Gợi ý: ", "3"],
  // // ['0', '1', '2', '3', '4', '5', '6'],
];
var songs = [
  "Lười học thì chóng làm quan",
  "Luyện mãi thành tài, miệt mài tất giỏi",
  "Sai rồi! Cố gắng lên con",
  "Gần đúng rồi bạn, Cố lên nào",
  "Học thầy chẳng tày học bạn.",
  "Ngu dốt là tội ác, là giặc",
  "Có học mới biết, có đi mới đến.",
  "Học là học đạo làm người <br> Con đừng lêu lổng kẻ cười người chê.",
  "The eye sees only what the mind is prepared to comprehend.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Being ignorant is not so much a shame, as being unwilling to learn.",
  "Ngu dốt là tội ác, là giặc",
];
var congratulationMusic;
var correctAnswer;
var randomNumbers = [];
var randomTerm;
var n = 0;
var i = 0;
var j = 0;

// Tìm số (n) ngẫu nhiên theo index trong phạm vi max được truyền vào
function randomNumber(max) {
  // Xét (n) không cho lặp lại mỗi khi gọi hàm:
  j++;
  if (j === max - 1) {
    j = 0;
    randomNumbers = [];
  }
  n = Math.floor(Math.random() * max);
  var check = randomNumbers.includes(n);
  if (!check) {
    randomNumbers.push(n);
  } else {
    while (check) {
      n = Math.floor(Math.random() * max);
      check = randomNumbers.includes(n);
      if (!check) {
        randomNumbers.push(n);
      }
    }
  }
}

// Tạo câu hỏi ngẫu nhiên và hiển thị ra giao diện
function getRandomQuestion() {
  // Gọi hàm tạo (n) ngẫu nhiên để  lấy (n) làm chỉ mục
  var lengths = vocabularyEnglish.length;
  randomNumber(lengths);
  randomTerm = vocabularyEnglish[n];
  questionFrontId.innerHTML = `${randomTerm[1]}`;
  speakerWaves();
  lengthArr.innerHTML = `Nhập lại bằng English  ${i} / ${lengths}`;
  i++;

  for (var items of randomTerm) {
    // Xử lý nếu có ảnh thì hiển thị ra giao diện khi hàm được gọi.
    if (items.includes("png") || items.includes("jpg")) {
      var itemImg = items;
      flipCardFrontEle.src = `./assets/img/${itemImg}`;
    }
    // Xử lý nếu có audio thì Sửa src cho audioItemElement.
    var itemMp3;
    if (items.includes("audio") || items.includes("mp3")) {
      itemMp3 = items;
      // questionFrontId.innerHTML = `Listen, rewrite what you hear:`;
      audioQuestionElement.style.display = "block";
      audioItemElement.src = `${itemMp3}`;
    }
    if (itemMp3 === undefined) {
      var noAudioItem = audioLists[6];
      itemMp3 = `./assets/audio/${noAudioItem}.mp3`;
      audioItemElement.loop;
      audioItemElement.src = `${itemMp3}`;
    }
    // Xử lý hiển thị gợi ý:
    var itemSuggestions = items.endsWith("Gợi ý:", 6);
    var suggestionsValue;
    if (itemSuggestions) {
      suggestionsValue = items;
      suggestionsElement.innerHTML = `${suggestionsValue.slice(6)}`;
    }
    if (suggestionsValue === undefined) {
      suggestionsElement.innerHTML = `Câu này dễ mà con <br> Cố gắng suy nghĩ xem nào!`;
    }
  }
  correctAnswer = randomTerm[0];
  console.log(`Gợi ý dành cho bạn: `, correctAnswer);
  // return randomTerm;
}
// Xử lý Audio khi có audio question music:
var audioQuestionElement = appElement.querySelector(".audioQuestions");
var audioItemElement = appElement.querySelector(".audioItem");
function speakerWaves() {
  if (audioItemElement) {
    var speakerWaveEle = document.querySelector(".speakerWave");
    speakerWaveEle.addEventListener("click", () => {
      audioItemElement.style.transform = "scale(0.3)";
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    });
  }
}

// Xử lý khi Click vào Btn Next
cardNext.addEventListener("click", function () {
  handleTest = function (answerElement) {
    if (formMessage) {
      var testPunctuation = /[!:;"',.?-]/;
      if (
        testPunctuation.test(correctAnswer) &&
        !testPunctuation.test(answerElement.value)
      ) {
        if (answerElement.value && !testPunctuation.test(answerElement.value)) {
          suggestionsMsg.innerHTML = `Chú ý: Sử dụng dấu câu cho chính xác`;
          answerElement.classList.add("invalid");
        }
      }
      if (answerElement.value === "") {
        answerElement.classList.add("invalid");
        suggestionsMsg.innerHTML = `"Nhân bất học bất tri lý. <br> Ngọc bất trác, bất thành khí!" <br>*  *  *<br> "Không có Tri thức là tự làm nhục Chính mình!" `;
      }
      if (answerElement.value === correctAnswer) {
        card.classList.remove("is-flipped");
        audioQuestionElement.style.display = "none";
        getRandomQuestion();
        if (i - 1 === minRequirements) {
          congratulationMusic = audioLists[9];
          audioPlay(congratulationMusic);
        } else if (i - 1 === minRequirements * 2) {
          congratulationMusic = audioLists[9];
          audioPlay(congratulationMusic);
        } else {
          var audioYeahList = audioLists[2];
          audioPlay(audioYeahList);
        }
        return undefined;
      } else {
        submitResult.innerHTML = "";
        answerElement.classList.add("invalid");
        var audioErrorList = audioLists[0];
        audioPlay(audioErrorList);
        getRandomSong();
      }
    }
    var testUppercase = /[A-Z]/;
    if (answerElement.value && !testUppercase.test(answerElement.value)) {
      if (!testUppercase.test(answerElement.value)) {
        suggestionsMsg.innerHTML = `Chú ý: Cần viết "HOA" cho chính xác`;
        answerElement.classList.add("invalid");
      }
    }
    return formMessage;
  };
  if (handleTest(answerElement) === undefined) {
    answerElement.focus();
  }
  if (i - 1 === minRequirements) {
    submitResult.classList.add("correctResults");
    btnSubmits.textContent = "Nộp bài!";
    submitResult.innerHTML = `Chúc mừng bạn!<br> Bạn đã vượt qua thử thách. <br> Bạn vẫn có thể tiếp tục luyện tập <br> Nếu bạn muốn nâng cao Trình độ!`;
    /* Object.assign để hợp nhất Object tạo Css inline nhưng phức tạp */
    // Object.assign(submitResult.style, {
    //   padding: '10px 0',
    //   marginBottom: '9px',
    // });
  } else if (i - 1 === minRequirements * 2) {
    submitResult.classList.add("correctResults");
    submitResult.innerHTML = ` Bạn là người thật chăm chỉ đấy <br> "Có công mài sắt có ngày nên kim" <br> Chúc mừng bạn cán mốc ${
      minRequirements * 2
    } câu đúng!`;
  }
});

//  Ngẫu nhiên in ra cấu chửi bới (Hát):
function getRandomSong() {
  var songLength = songs.length;
  randomNumber(songLength);
  let newRandomSong;
  newRandomSong = songs[n];
  formMessage.innerHTML = `${newRandomSong}`;
}
// Xử lý nút gợi ý:
suggestions.addEventListener("click", function () {
  submitResult.innerHTML = "";
  formMessage.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");

  // Kết hợp css Xử lý xoay ảnh:
  // Xử lý hiển thị massage chỉ dẫn gợi ý:
  if (answerElement.value === "") {
    card.classList.toggle("is-flipped");
    answerElement.classList.add("invalid");
    suggestionsMsg.innerHTML = `<div id='sum10'>Lười học là "Bệnh cần chống như chống giặc!"</div>`;
    if (card.matches(".is-flipped")) {
      suggestions.textContent = "Đóng gợi ý";
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    } else {
      suggestionsMsg.innerHTML = "";
      suggestions.textContent = "Xem gợi ý";
      answerElement.classList.remove("invalid");
    }
    return;
  } else if (answerElement.value === correctAnswer) {
    card.classList.toggle("is-flipped");
    answerElement.classList.remove("invalid");
    suggestionsElement.innerHTML = `Xin chúc mừng bạn đã đưa ra đáp án hoàn toàn chính xác!`;
    congratulationMusic = audioLists[9];
    audioPlay(congratulationMusic);
  } else {
    card.classList.toggle("is-flipped");
    answerElement.classList.add("invalid");
    suggestionsMsg.innerHTML = `<div id='sum10'>Click Next để kiểm tra kết quả của bạn!</div>`;
    if (card.matches(".is-flipped")) {
      if (isPlayIng) {
        pauseBackgroundMusic();
      }
      audioItemElement.play();
    }
  }
});

// Hướng dẫn nộp bài
btnSubmits.addEventListener("click", function () {
  formMessage.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  if (!answerElement.value) {
    answerElement.classList.add("invalid");
    if (i === 1) {
      submitResult.innerHTML = `<div id='sum10' class="canTrai">Bạn bấm Star để bắt đâu trả lời câu hỏi<br> Nhập xong đáp án bấm tiếp tục để đi tiếp <br>Không nghĩ được đáp án bấm "Xem gợi ý" để nhận trợ giúp (Chỉ những câu khó) <br> Khi click Star sẽ bắt đầu tính thời gian<br>Cảm ơn bạn đã ủng hộ chúng tôi! <br> Vui lòng không tự động sao chép, chia sẻ dưới mọi hình thức.</div>`;
    }
    if (seconds > 5) {
      submitResult.innerHTML = `<div id='sum10'>Bạn cần trả lời tối thiểu ${minRequirements} Câu hỏi trước khi bấm Dừng lại</div>`;
    }

    if (i > minRequirements) {
      submitResult.classList.remove("correctResults");
      submitResult.classList.add("correctResult");
      answerElement.classList.remove("invalid");
      submitResult.innerHTML = `Chúc mừng bạn đã vượt qua thử thách! <br> Kết quả của bạn đã được gửi tới hòm thư: nguyenthanhhoa075@gmail.com.`;
      stop();
      watch.isOn ? stopWhenOn() : watch.reset();
      backgroundMusic.pause();
      btnSubmits.textContent = "Nộp bài!";
      var audioGoodBeyList = audioLists[3];
      audioPlay(audioGoodBeyList);
      myStopFunction();
      coating.style.display = "block";
      coating.style.opacity = 0;
    }
    return;
  }
  if (i < minRequirements) {
    answerElement.classList.add("invalid");
    submitResult.innerHTML = `<div id='sum10'>Hoàn thành ${minRequirements} câu đúng trước khi Dừng lại<br> Đừng nản chí! Kiên trì bạn sẽ Thành Công</div>`;
  }
});

btnStar.addEventListener("click", function () {
  answerElement.focus();
  suggestions.textContent = "Xem gợi ý";
  coating.style.display = "none";
});

coating.addEventListener("click", function () {
  coating.style.opacity = 1;
  coating.innerHTML = "Vui lòng Click Star để bắt đầu";
});

// Xóa massage lỗi và input value khi focus input:
answerElement.addEventListener("focus", function handleClearError(e) {
  playBackgroundMusic();
  formMessage.innerHTML = "";
  submitResult.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  answerElement.classList.remove("invalid");
  answerElement.classList.remove("addInvalid");
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");
  if (card.matches(".is-flipped")) {
    card.classList.remove("is-flipped");
  }
  suggestions.textContent = "Xem gợi ý";
  e.target.value = "";
});

// Chặn hành vi mặc định của Keydown và gán cho keydown Enter bằng onClick cardNext
answerElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cardNext.click();
    answerElement.value = "";
  }
});

// Xử lý so sánh (Tham chiếu) input value với chỗi gốc:
answerElement.oninput = function () {
  formMessage.innerHTML = "";
  submitResult.innerHTML = "";
  suggestionsMsg.innerHTML = "";
  answerElement.classList.remove("invalid");
  submitResult.classList.remove("correctResult");
  submitResult.classList.remove("correctResults");

  // Xử lý báo lỗi khi nhập trường đầu vào bị sai:
  let intInputValue = correctAnswer;
  let result = intInputValue.includes(answerElement.value);
  if (result) {
    answerElement.classList.remove("addInvalid");
    answerElement.classList.add("unInvalid");
  } else {
    answerElement.classList.remove("unInvalid");
    answerElement.classList.add("addInvalid");
  }
};

//  Các hàm xử lý Audio:
var audioLists = [
  /* 0 */ "Am_Ohno",
  /* 1 */ "Uoc_mo_cua_Me",
  /* 2 */ "yeah",
  /* 3 */ "Tambiet",
  /* 4 */ "Nhac_nen_hay",
  /* 5 */ "Tieng_bom",
  /* 6 */ "Tiengkimgiaydonghokeu",
  /* 7 */ "Xin_chao",
  /* 8 */ "WelcomeToWonderland",
  /* 9 */ "Tieng_voTay0133",
];
var audioElement = document.querySelector("#audios");
function audioPlay(audioList) {
  audioElement.src = `./assets/audio/${audioList}.mp3`;
  audioElement.play();
}

var backgroundMusic;
var isPlayIng = false;
function playBackgroundMusic() {
  backgroundMusic = appElement.querySelector("#backgroundMusic");
  isPlayIng = true;
  backgroundMusic.play();
}
function pauseBackgroundMusic() {
  isPlayIng = false;
  backgroundMusic.pause();
}

function Dong_ho() {
  var gio = document.getElementById("gio");
  var gios = document.getElementById("gios");
  var phut = document.getElementById("phut");
  var phuts = document.getElementById("phuts");
  var giay = document.getElementById("giay");
  var giays = document.getElementById("giays");
  var Gio_hien_tai = new Date().getHours();
  var Phut_hien_tai = new Date().getMinutes();
  var Giay_hien_tai = new Date().getSeconds();

  gio.innerHTML = Gio_hien_tai;
  gios.innerHTML = Gio_hien_tai;
  if (Phut_hien_tai < 10) {
    phut.innerHTML = ` : 0${Phut_hien_tai}`;
    phuts.innerHTML = ` : 0${Phut_hien_tai}`;
  } else {
    phut.innerHTML = ` : ${Phut_hien_tai}`;
    phuts.innerHTML = ` : ${Phut_hien_tai}`;
  }
  if (Giay_hien_tai < 10) {
    giay.innerHTML = ` : 0${Giay_hien_tai}`;
    giays.innerHTML = ` : 0${Giay_hien_tai}`;
  } else {
    giay.innerHTML = ` : ${Giay_hien_tai}`;
    giays.innerHTML = ` : ${Giay_hien_tai}`;
  }
}
var Dem_gio = setInterval(Dong_ho, 1000);
function myStopFunction() {
  clearInterval(Dem_gio);
}

var dates = new Date();
var date = dates.getDate();
var current_date;
if (date < 10) {
  current_date = `Ngày 0${dates.getDate()} / ${
    dates.getMonth() + 1
  } / ${dates.getFullYear()}`;
} else {
  current_date = `${dates.getDate()} / ${
    dates.getMonth() + 1
  } / ${dates.getFullYear()}`;
}
document.querySelector(".shows_date").innerHTML = current_date;
document.querySelector(".shows_dates").innerHTML = current_date;
var seconds;
function Stopwatch(elem) {
  var time = 0;
  var offset;
  var interval;
  function update() {
    if (this.isOn) {
      time += delta();
    }
    elem.textContent = timeFormatter(time);
  }

  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  function timeFormatter(time) {
    time = new Date(time);

    var minutes = time.getMinutes().toString();
    seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();
    var millisecond = Math.floor(milliseconds / 10);

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    if (millisecond < 10) {
      millisecond = `0${millisecond}`;
    }

    if (seconds > 5) {
      btnSubmits.textContent = "Stop";
    }
    var result = `${minutes} : ${seconds} : ${millisecond}`;
    return result;
  }

  this.start = function () {
    interval = setInterval(update.bind(this), 1);
    offset = Date.now();
    this.isOn = true;
    this.isOnStarAudio = true;
  };

  this.stop = function () {
    clearInterval(interval);
    interval = null;
    this.isOn = false;
    this.isOnStarAudio = true;
  };

  this.reset = function () {
    time = 0;
    interval = null;
    this.isOn = false;
    this.isOnStarAudio = false;
    update();
  };
  this.isOn = false;
  this.isOnStarAudio = false;
}

function start() {
  watch.start();
  // btnSubmits.textContent = 'Stop';
}

function stop() {
  btnStar.textContent = "Start";
  watch.stop();
}

function stopWhenOn() {
  btnStar.textContent = "Start";
  watch.stop();
  watch.reset();
}

btnStar.addEventListener("click", function () {
  var audioHelloList = audioLists[7];
  if (!watch.isOnStarAudio) {
    audioPlay(audioHelloList);
  }
  if (!watch.isOn) {
    start();
  }
});

btnPause.addEventListener("click", function () {
  if (watch.isOn) {
    backgroundMusic.pause();
    stop();
  }
});

// var count = 0;
// document.getElementById("beep").addEventListener(
//   "ended",
//   function () {
//     if (count <= 30) {
//       this.play();
//       count++;
//     }
//   },
//   false
// );
//  <audio id="beep" controls autoplay>
//    <source src="./assets/audio/Tiengkimgiay.mp3" type="audio/mpeg" />
//    Your browser does not support the audio element.
//  </audio>;
