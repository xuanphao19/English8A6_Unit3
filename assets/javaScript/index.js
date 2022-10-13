var appElement = document.querySelector("#App-1");
var card = appElement.querySelector(".flip-card-inner");
var flipCardFrontEle = appElement.querySelector("#flip-card");
var flipCardElement = appElement.querySelector(".flipCard");
var canvasBlock = appElement.querySelector(".canvasBlock");
var formMessage = appElement.querySelector(".App-message");
var answerElement = appElement.querySelector("#answer");
var lengthArr = appElement.querySelector(".lengthArr");
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
var minRequirements = 20;

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
  [
    "Shawl",
    "n) Khăn phiêu",
    "Gợi ý: Shawl",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/7.mp3",
  ],
  [
    "Waterwheel",
    "n) cối xay nước, cọn nước",
    "Gợi ý: Waterwheel",
    "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/8.mp3",
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
    "How, When, Where, Why, What, Who, Whose, Which",
    "Nêu những Question word cơ bản",
    "How, When, Where, Why, What, Who, Whose, Which",
    "3",
  ],
  [
    "Question word + V ...?",
    "Công thức câu cơ bản với Question word",
    "Gợi ý: Question word + V ...?",
    "3",
  ],
  [
    "Excited",
    "Điền từ trái nghĩa với: Bored",
    "Gợi ý: Excited",
    "https://dic.tienganh123.com/sound/b/bore.mp3",
  ],
  [
    "Majority",
    "Điền từ trái nghĩa với: Minority",
    "Gợi ý: Majority",
    "https://dic.tienganh123.com/sound/m/minority.mp3",
  ],
  [
    "Curious",
    "Điền từ trái nghĩa với: Incurious",
    "Gợi ý: Curious",
    "https://dic.tienganh123.com/sound/i/incurious.mp3",
  ],
  [
    "traditional",
    "Điền từ trái nghĩa với: modern",
    "Gợi ý: traditional",
    "https://dic.tienganh123.com/sound/m/modern.mp3",
  ],
  [
    "interesting",
    "Điền từ trái nghĩa với: boring",
    "Gợi ý: interesting",
    "https://dic.tienganh123.com/sound/b/boring.mp3",
  ],
  [
    "simple",
    "Điền từ trái nghĩa với: complicated",
    "Gợi ý: simple",
    "https://dic.tienganh123.com/sound/c/complicated.mp3",
  ],
  [
    "important",
    "Điền từ trái nghĩa với: insignificant",
    "Gợi ý: important",
    "https://dic.tienganh123.com/sound/i/insignificant.mp3",
  ],
  [
    "mountainous",
    "Điền từ trái nghĩa với: flat",
    "Gợi ý: mountainous",
    "https://dic.tienganh123.com/sound/f/flat.mp3",
  ],
  [
    "minor",
    "Điền từ trái nghĩa với: major",
    "Gợi ý: minor",
    "https://dic.tienganh123.com/sound/m/major.mp3",
  ],
  [
    "diversity",
    "Nhập dạng danh từ: diverse",
    "Gợi ý: diversity",
    "https://dic.tienganh123.com/sound/d/diverse.mp3",
  ],
  [
    "minority",
    "Nhập dạng danh từ: minor",
    "Gợi ý: minority",
    "https://dic.tienganh123.com/sound/m/minor.mp3",
  ],
  [
    "culture",
    "Nhập dạng danh từ: cultural",
    "Gợi ý: culture",
    "https://dic.tienganh123.com/sound/c/cultural.mp3",
  ],
  [
    "ethnology or ethnic or ethnicity",
    "Nhập dạng danh từ: ethnic",
    "Gợi ý: ethnology or ethnic or ethnicity",
    "https://dic.tienganh123.com/sound/e/ethnic.mp3",
  ],
  [
    "tradition",
    "Nhập dạng danh từ: traditional",
    "Gợi ý: tradition",
    "https://dic.tienganh123.com/sound/t/traditional.mp3",
  ],
  [
    "majority",
    "Nhập dạng danh từ: major",
    "Gợi ý: majority",
    "https://dic.tienganh123.com/sound/m/major.mp3",
  ],

  [
    "Which ethnic group has the smallest population?",
    "Dịch câu: Dân tộc nào có dân số ít nhất?",
    "Gợi ý: Which ethnic group has the smallest population?",
    "3",
  ],
  // [
  //   "Câu hỏi có tân ngữ/ bổ ngữ/ trạng ngữ: là những câu hỏi bắt đầu bằng từ để hỏi theo sau bởi trợ động từ (be, do, have) hoặc động từ khuyết thiếu",
  //   "Công thức này là câu gì: Question word + aux./ modal + S + V …?",
  //   "Gợi ý: Câu hỏi có tân ngữ/ bổ ngữ/ trạng ngữ: là những câu hỏi bắt đầu bằng từ để hỏi (How, When, Where, Why, What, Who, Whose, Which) theo sau bởi trợ động từ (be, do, have) hoặc động từ khuyết thiếu (should, could, may, ...) tiếp đến là chủ ngữ và động từ ở dạng nguyên thể.",
  //   "3",
  // ],
  // [
  //   "Where can we find terraced fields?",
  //   "Dịch câu: Chúng ta có thể tìm thấy ruộng bậc thang ở đâu?",
  //   "Gợi ý: Where can we find terraced fields?",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson4/lythuyet/2.mp3",
  // ],
  // [
  //   "Which of you have visited the Temple of Literature?",
  //   "Dịch câu: Ai trong số các em đã từng thăm quan Văn Miếu?",
  //   "Gợi ý: Which of you have visited the Temple of Literature?",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson4/lythuyet/3.mp3",
  // ],
  // [
  //   "Which dish do you prefer, 'pho' or 'bun cha'?",
  //   "Dịch câu: Em thích món ăn nào hơn, phở hay bún chả?",
  //   "Gợi ý: Which dish do you prefer, 'pho' or 'bun cha'?",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson4/lythuyet/4.mp3",
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
  //   "Did they visit SaPa last month? Yes, they did",
  //   "Dịch và trả lời câu: Họ đi SaPa tháng trước phải không?",
  //   "Gợi ý: Did they visit SaPa last month? Yes, they did",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson4/lythuyet/5.mp3",
  // ],
  // [
  //   "Which ethnic groups live mostly in the Central Highlands?",
  //   "Hoàn thành câu: ...ethnic groups live mostly in the Central Highlands?",
  //   // "Những dân tộc nào sống chủ yếu ở vùng Tây nguyên?",
  //   "Gợi ý: Which ethnic groups live mostly in the Central Highlands?",
  //   "3",
  // ],
  // [
  //   "Why do the minority ethnic people seldom go to hospital?",
  //   "Hoàn thành câu: ...do the minority ethnic people seldom go to hospital?",
  //   // "Tại sao những người dân tộc thiểu số lại hiếm khi đi bệnh viện thế nhỉ?",
  //   "Gợi ý: Why do the minority ethnic people seldom go to hospital?",
  //   "3",
  // ],
  // [
  //   "Why do you like to eat 'Thang Co' a dish of the H'mong?",
  //   "Hoàn thành câu: ...do you like to eat 'Thang Co' a dish of the H'mong?",
  //   // "Tại sao bạn lại thích ăn món "Thắng Cố" - một món ăn của người dân tộc H'Mông thế?",
  //   "Gợi ý: Why do you like to eat 'Thang Co' a dish of the H'mong?",
  //   "3",
  // ],
  // [
  //   "What gifts do you often buy when you visit Ha Giang province?",
  //   "Hoàn thành câu: ...gifts do you often buy when you visit Ha Giang province? ",
  //   // "Bạn thường mua quà tặng gì khi tới thăm tỉnh Hà Giang?",
  //   "Gợi ý: What gifts do you often buy when you visit Ha Giang province?",
  //   "3",
  // ],
  // [
  //   "How long does it take to travel from Hanoi to Sapa by train?",
  //   "Hoàn thành câu: ...does it take to travel from Hanoi to Sapa by train?",
  //   // "Đi tàu từ Hà Nội lên Sa Pa mất bao lâu?",
  //   "Gợi ý: How long does it take to travel from Hanoi to Sapa by train?",
  //   "3",
  // ],
  // [
  //   "What age do the minority ethnic boys and girls often get married?",
  //   "Hoàn thành câu: ...age do the minority ethnic boys and girls often get married?",
  //   // "Con trai và con gái người dân tộc thiểu số thường kết hôn ở tuổi nào?",
  //   "Gợi ý: What age do the minority ethnic boys and girls often get married?",
  //   "3",
  // ],
  // [
  //   "At the communal house.",
  //   "Trả lời câu sau: Where can I find the oldest person in your village?",
  //   "Gợi ý: At the communal house.",
  //   "3",
  // ],
  [
    "How should I go to Viet Nam Museum of Ethnology?",
    "Đặt câu hỏi cho câu trả lời sau: You should go by bus.",
    "Gợi ý: How should I go to Viet Nam Museum of Ethnology?",
    "3",
  ],
  [
    "Whose costume is the simplest?",
    "Đặt câu hỏi cho câu trả lời sau: The Tay's",
    "Gợi ý: Whose costume is the simplest?",
    "3",
  ],
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
  //   "In the northwest of the house compound.",
  //   "Trả lời câu sau: Where is the kitchen located in the house compound?",
  //   "Gợi ý: In the northwest of the house compound.",
  //   "3",
  // ],
  // [
  //   "The kitchen God.",
  //   "Trả lời câu sau: Who is believed to live in the kitchen?",
  //   "Gợi ý: The kitchen God.",
  //   "3",
  // ],
  // [
  //   "Sweet.",
  //   "Trả lời câu sau: Which do the women NOT make offerings of to worship the kitchen?",
  //   "Gợi ý: Sweet.",
  //   "3",
  // ],
  // [
  //   "The human mouth.",
  //   "Trả lời câu sau: What does the entrance of the kitchen symbolize?",
  //   "Gợi ý: The human mouth.",
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
  // [
  //   "How many ethnic groups are there in Viet Nam?",
  //   "Listen, rewrite what you hear:",
  //   // "Có bao nhiêu dân tộc ở Việt Nam?",
  //   "Gợi ý: How many ethnic groups are there in Viet Nam?",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/1-1.mp3",
  // ],
  // [
  //   "The majority of the other 53 ethnic minority groups gather in the mountainous regions.",
  //   "Listen, rewrite what you hear:",
  //   // "Phần lớn 53 dân tộc thiểu số còn lại sống tập trung ở các vùng núi.",
  //   "Gợi ý: The majority of the other 53 ethnic minority groups gather in the mountainous regions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/2-1.mp3",
  // ],
  // [
  //   "Most of the H'mong people live in the mountainous regions.",
  //   "Listen, rewrite what you hear:",
  //   // "Phần lớn người dân tộc H'Mông sống ở các vùng núi.",
  //   "Gợi ý: Most of the H'mong people live in the mountainous regions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/3-1.mp3",
  // ],
  // [
  //   "Most of the H'mong people live in the mountainous regions.",
  //   "Listen, rewrite what you hear:",
  //   // "Phần lớn người dân tộc H'Mông sống ở các vùng núi.",
  //   "Gợi ý: Most of the H'mong people live in the mountainous regions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/3-1.mp3",
  // ],
  // [
  //   "There are 54 ethnic groups in Viet Nam among which Kinh people account for 86% of the population.",
  //   "Listen, rewrite what you hear:",
  //   // "Có 54 dân tộc ở Việt Nam, trong đó dân tộc kinh chiếm 86% tổng dân số.",
  //   "Gợi ý: There are 54 ethnic groups in Viet Nam among which Kinh people account for 86% of the population.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/4-1.mp3",
  // ],
  // [
  //   "How diverse!",
  //   "Listen, rewrite what you hear:",
  //   // "Đa dạng thế!",
  //   "Gợi ý: How diverse!",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/5-1.mp3",
  // ],
  // [
  //   "The majority of the other 53 ethnic minority groups gather in the mountainous regions.",
  //   "Listen, rewrite what you hear:",
  //   // "Phần lớn 53 dân tộc thiểu số còn lại sống tập trung ở các vùng núi.",
  //   "Gợi ý: The majority of the other 53 ethnic minority groups gather in the mountainous regions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/6-1.mp3",
  // ],
  // [
  //   "The Odu ethnic minority group has the smallest population in Viet Nam.",
  //   "Listen, rewrite what you hear:",
  //   // "Dân tộc thiểu số Ơ Đu là dân tộc có dân số ít nhất ở Việt Nam.",
  //   "Gợi ý: The Odu ethnic minority group has the smallest population in Viet Nam.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/7-1.mp3",
  // ],
  // [
  //   "In the Central Highlands the Cham, Khmer, Ede mostly gather.",
  //   "Listen, rewrite what you hear:",
  //   // "Người dân tộc Chăm, Khơ Me, Ê Đê ... tập trung chủ yếu ở vùng Tây Nguyên.",
  //   "Gợi ý: In the Central Highlands the Cham, Khmer, Ede mostly gather.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/8-1.mp3",
  // ],
  // [
  //   "If you are curious about the ethnic peoples' customs and cultures, visit Viet Nam Museum of Ethnology.",
  //   "Listen, rewrite what you hear:",
  //   // "Nếu bạn tò mò về phong tục và văn hóa của các dân tộc, hãy tới thăm bảo tàng dân tộc học Việt Nam.",
  //   "Gợi ý: If you are curious about the ethnic peoples' customs and cultures, visit Viet Nam Museum of Ethnology.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/9-1.mp3",
  // ],
  // [
  //   "The foreign visitors are always curious about the locals' daily lives.",
  //   "Listen, rewrite what you hear:",
  //   // "Du khách nước ngoài luôn tò mò về cuộc sống hàng ngày của những người dân địa phương.",
  //   "Gợi ý: The foreign visitors are always curious about the locals' daily lives.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/10-1.mp3",
  // ],
  // [
  //   "Each ethnic group has their own customs.",
  //   "Listen, rewrite what you hear:",
  //   // "Mỗi dân tộc có phong tục riêng của họ.",
  //   "Gợi ý: Each ethnic group has their own customs.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson1/vocab/audio/11-1.mp3",
  // ],
  // [
  //   "Stilt houses are often made from wood, bamboo and cane.",
  //   "Listen, rewrite what you hear:",
  //   // "Những ngôi nhà sàn thường được dựng từ gỗ, tre và trúc.",
  //   "Gợi ý: Stilt houses are often made from wood, bamboo and cane.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/1-1.mp3",
  // ],
  // [
  //   "Communal houses combine the role of a village meeting house and a place of worship.",
  //   "Listen, rewrite what you hear:",
  //   // "Đình làng mang vai trò như một nơi tụ họp của cả làng và cũng là nơi thờ cúng.",
  //   "Gợi ý: Communal houses combine the role of a village meeting house and a place of worship.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/2-1.mp3",
  // ],
  // [
  //   "The One Pillar Pagoda has unique architecture.",
  //   "Listen, rewrite what you hear:",
  //   // "Ngôi chùa một cột mang kiến trúc rất độc đáo.",
  //   "Gợi ý: The One Pillar Pagoda has unique architecture.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/3-1.mp3",
  // ],
  // [
  //   "Hanoi is famous for Ngoc Son temple. ",
  //   "Listen, rewrite what you hear:",
  //   //  "Hà Nội nổi tiếng với địa danh đền Ngọc Sơn.",
  //   "Gợi ý: Hanoi is famous for Ngoc Son temple. ",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/4-1.mp3",
  // ],
  // [
  //   "Red Dao ethnic people in Yen Bai mountainous province are playing music at a wedding ceremony.",
  //   "Listen, rewrite what you hear:",
  //   //  "Một nhóm người dân tộc Dao đỏ ở tỉnh miền núi Yên Bái đang chơi nhạc trong một lễ cưới.",
  //   "Gợi ý: Red Dao ethnic people in Yen Bai mountainous province are playing music at a wedding ceremony.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/5-1.mp3",
  // ],
  // [
  //   "Festivals in different regions of Viet Nam show our multicultural society.",
  //   "Listen, rewrite what you hear:",
  //   // "Các lễ hội ở những vùng miền khác nhau trên đất nước Việt Nam của chúng ta thể hiện một xã hội đa văn hóa.",
  //   "Gợi ý: Festivals in different regions of Viet Nam show our multicultural society.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/6-1.mp3",
  // ],
  // [
  //   "Black Thai women often wear the shawl.",
  //   "Listen, rewrite what you hear:",
  //   // "Phụ nữ dân tộc Thái đen thường đội khăn piêu.",
  //   "Gợi ý: Black Thai women often wear the shawl.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/7-1.mp3",
  // ],
  // [
  //   "Visiting Cao Bang province, you will see a lot of waterwheels on rivers.",
  //   "Listen, rewrite what you hear:",
  //   //  "Đến thăm tỉnh Cao Bằng, các em sẽ thấy rất nhiều cọn nước trên các dòng sông.",
  //   "Gợi ý: Visiting Cao Bang province, you will see a lot of waterwheels on rivers.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/8-1.mp3",
  // ],
  // [
  //   "The terraced fields in Sa Pa look like a picture of nature with great beauty.",
  //   // "Ruộng bậc thang ở Sa Pa trông như bức tranh thiên nhiên mang vẻ đẹp hùng vĩ.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: The terraced fields in Sa Pa look like a picture of nature with great beauty.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/9-1.mp3",
  // ],
  // [
  //   "Most of the open-air markets of ethnic peoples start in the early morning.",
  //   "Listen, rewrite what you hear:",
  //   //  "Hầu hết các phiên chợ ngoài trời của bà con dân tộc thiểu số bắt đầu từ sáng sớm",
  //   "Gợi ý: Most of the open-air markets of ethnic peoples start in the early morning.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson2/vocab/audio/10-1.mp3",
  // ],

  // [
  //   "Wet rice cultivation is common in Viet Nam.",
  //   "Listen, rewrite what you hear:",
  //   // "Trồng lúa nước rất phổ biến ở Việt Nam.",
  //   "Gợi ý: Wet rice cultivation is common in Viet Nam.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/1-1.mp3",
  // ],
  // [
  //   "They often hold the ploughing and rice planting competition in 'Long tong' festival.",
  //   "Listen, rewrite what you hear:",
  //   // "Họ thường tổ chức cuộc thi cày và cấy lúa trong lễ hội 'Lồng Tồng'",
  //   "Gợi ý: They often hold the ploughing and rice planting competition in 'Long tong' festival.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/2-1.mp3",
  // ],
  // [
  //   "They often cook five-coloured sticky rice for the Tet celebration.",
  //   "Listen, rewrite what you hear:",
  //   // "Họ thường nấu xôi ngũ sắc để ăn Tết.",
  //   "Gợi ý: They often cook five-coloured sticky rice for the Tet celebration.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/3-1.mp3",
  // ],
  // [
  //   "They spin thread, dye it dark indigo and weave cloth with a little embroidery.",
  //   "Listen, rewrite what you hear:",
  //   // "Họ quay sợi, nhuộm sợi màu chàm và dệt những tấm vải với rất ít họa tiết thêu.",
  //   "Gợi ý: They spin thread, dye it dark indigo and weave cloth with a little embroidery.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/4-1.mp3",
  // ],
  // [
  //   "He dyed his hair gray.",
  //   "Listen, rewrite what you hear:",
  //   // "Anh ấy đã nhuộm tóc thành màu hoa râm.",
  //   "Gợi ý: He dyed his hair gray.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/5-1.mp3",
  // ],
  // [
  //   "Those minority ethnic girls are skilled at spinning and weaving.",
  //   "Listen, rewrite what you hear:",
  //   // "Những cô gái dân tộc thiểu số ấy rất thành thục quay sợi và dệt vải.",
  //   "Gợi ý: Those minority ethnic girls are skilled at spinning and weaving.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/6-1.mp3",
  // ],
  // [
  //   "H'mong colourful traditional costumes are decorated with a lot of embroidery.",
  //   "Listen, rewrite what you hear:",
  //   // "Trang phục truyền thống sặc sỡ của người dân tộc H'Mông được trang trí với rất nhiều họa tiết thêu.",
  //   "Gợi ý: H'mong colourful traditional costumes are decorated with a lot of embroidery.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/7-1.mp3",
  // ],
  // [
  //   "They worship their ancestors and the Gods of natural environment.",
  //   "Listen, rewrite what you hear:",
  //   // "Họ thờ tổ tiên và các vị thần thiên nhiên.",
  //   "Gợi ý: They worship their ancestors and the Gods of natural environment.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/8-1.mp3",
  // ],
  // [
  //   "They worship their ancestors and the Gods of natural environment.",
  //   "Listen, rewrite what you hear:",
  //   // "Họ thờ tổ tiên và các vị thần thiên nhiên.",
  //   "Gợi ý: They worship their ancestors and the Gods of natural environment.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson6/lythuyet/audio/9-1.mp3",
  // ],

  // [
  //   "Now, I would like to talk about the Cham people.",
  //   "Listen, rewrite what you hear: ",
  //   // "Bây giờ, tôi muốn trình bày về dân tộc chăm.",
  //   "Gợi ý: Now, I would like to talk about the Cham people.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/1.mp3",
  // ],
  // [
  //   "Have you ever talked to a Cham person? Well, there are many interesting things about this ethnic group that I want to share with you.",
  //   "Listen, rewrite what you hear: ",
  //   // "Các bạn đã bao giờ nói chuyện với 1 người dân tộc Chăm chưa? Dân tộc này có nhiều điều thú vị mà tôi muốn chia sẻ với các bạn sau đây.",
  //   "Gợi ý: Have you ever talked to a Cham person? Well, there are many interesting things about this ethnic group that I want to share with you.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/2.mp3",
  // ],
  // [
  //   "I was really impressed by the folk dance of the Cham people. That's why I read more about them and here is some information I would like to tell you.",
  //   "Listen, rewrite what you hear: ",
  //   // "Tôi đã rất ấn tượng với điệu múa dân gian của người dân tộc Chăm. Do đó, tôi đã đọc nhiều hơn về họ và sau đây là 1 số thông tin tôi muốn chia sẻ cùng các bạn.",
  //   "Gợi ý: I was really impressed by the folk dance of the Cham people. That's why I read more about them and here is some information I would like to tell you.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/3.mp3",
  // ],
  // [
  //   "With a population of 162 thousand, the Cham gather mainly in southern provinces such as Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "Listen, rewrite what you hear: ",
  //   // "Với dân số 162 nghìn người, dân tộc Chăm sống tập trung chủ yếu ở các tỉnh miền Nam như Ninh Thuận, Bình Thuận, Đồng Nai và Tây Ninh.",
  //   "Gợi ý: With a population of 162 thousand, the Cham gather mainly in southern provinces such as Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/6.mp3",
  // ],
  // [
  //   "The Cham have a population of nearly 162 thousand people living in the provinces of Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "Listen, rewrite what you hear: ",
  //   // "Dân tộc Chăm có dân số gần 162 nghìn người sống ở các tỉnh Ninh Thuận, Bình Thuận, Đồng Nai và Tây Ninh.",
  //   "Gợi ý: The Cham have a population of nearly 162 thousand people living in the provinces of Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/7.mp3",
  // ],
  // [
  //   "Their language belongs to the Malayo-Polynesian group.",
  //   "Listen, rewrite what you hear: ",
  //   // "Ngôn ngữ của họ thuộc ngữ hệ Nam đảo.",
  //   "Gợi ý: Their language belongs to the Malayo-Polynesian group.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/8.mp3",
  // ],
  // [
  //   "The Cham language belongs to the Malayo-Polynesian group.",
  //   "Listen, rewrite what you hear: ",
  //   // "Ngôn ngữ của người Chăm thuộc ngữ hệ Nam đảo.",
  //   "Gợi ý: The Cham language belongs to the Malayo-Polynesian group.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/9.mp3",
  // ],
  // [
  //   "Well, their production activities are rather diverse. Like most other groups in Viet Nam, they cultivate wet rice. Besides that, they also fish and make handicrafts. I was impressed by their hand-made pottery and I adored their silk.",
  //   "Listen, rewrite what you hear: ",
  //   // "À, hoạt động sản xuất của họ khá đa dạng. Giống như hầu hết các dân tộc ở Việt Nam, họ trồng lúa nước. Bên cạnh đó, họ cũng đánh bắt cá và làm đồ thủ công. Tôi đã ấn tượng với đồ gốm thủ công của họ và tôi thích vải lụa của họ.",
  //   "Gợi ý: Well, their production activities are rather diverse. Like most other groups in Viet Nam, they cultivate wet rice. Besides that, they also fish and make handicrafts. I was impressed by their hand-made pottery and I adored their silk.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/14.mp3",
  // ],
  // [
  //   "Their production activities include: cultivating wet rice, fishing and making handicrafts. The Cham are famous for their silk and hand-made pottery.",
  //   "Listen, rewrite what you hear: ",
  //   // "Hoạt động sản xuất của họ bao gồm: trồng lúa nước, đánh bắt cá và làm đồ thủ công. Người Chăm nổi tiếng với vải lụa và đồ gốm làm bằng tay.",
  //   "Gợi ý: Their production activities include: cultivating wet rice, fishing and making handicrafts. The Cham are famous for their silk and hand-made pottery.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/15.mp3",
  // ],
  // [
  //   "The Cham have a tradition of wet rice cultivation. They are also experienced in fishing and making handicrafts, especially silk and hand-made pottery.",
  //   "Listen, rewrite what you hear: ",
  //   // "Người Chăm có truyền thống trồng lúa nước. Họ cũng có nhiều kinh nghiệm trong đánh bắt cá và làm đồ thủ công, đặc biệt là vải lụa và đồ gốm làm bằng tay.",
  //   "Gợi ý: The Cham have a tradition of wet rice cultivation. They are also experienced in fishing and making handicrafts, especially silk and hand-made pottery.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/16.mp3",
  // ],
  // [
  //   "Every year, they hold the Kate festival to commemorate the dead and honour heroes in the Cham community. Various agricultural ceremonies are performed during the year for a new canal, for young rice and for so many other occasions.",
  //   "Listen, rewrite what you hear: ",
  //   // "Hàng năm, họ tổ chức lễ hội Ka-tê để tưởng nhớ những người đã khuất và vinh danh những người anh hùng trong cộng đồng người Chăm. Các nghi lễ nông nghiệp khác nhau cũng được tổ chức trong suốt cả năm vào dịp mừng 1 con kênh mới, mừng lúa non và rất nhiều các dịp khác nữa.",
  //   "Gợi ý: Every year, they hold the Kate festival to commemorate the dead and honour heroes in the Cham community. Various agricultural ceremonies are performed during the year for a new canal, for young rice and for so many other occasions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/lythuyet/19.mp3",
  // ],
  // [
  //   "population",
  //   "With the ... of about 400, the Brau people is one of the least populous groups in Viet Nam. ",
  //   // "Với dân số khoảng 400 người, dân tộc Brâu là một trong những dân tộc ít dân nhất ở Việt Nam.",
  //   "Gợi ý: population",
  //   "",
  // ],
  // [
  //   "gather or live",
  //   "Hoàn thành: Most Brau people ... in Dac Me village, Bo Y commune, Ngoc Hoi district, Kon Tum province. ",
  //   // "Hầu hết người Brâu sống ở làng Đắc Mế, xã Bờ Y, huyện Ngọc Hồi, tỉnh Kon Tum.",
  //   "Gợi ý: gather or live",
  //   "",
  // ],
  // [
  //   "belongs",
  //   "Hoàn thành: The Brau speak Brao which ... to Mon-Khmer language group.",
  //   // "Dân tộc Brâu nói tiếng Brao một ngôn ngữ thuộc nhóm Môn-Khơ Me.",
  //   "Gợi ý: belongs",
  //   "",
  // ],

  // [
  //   "grow or cultivate or plant",
  //   "Hoàn thành: Leading a nomadic life, the Brau ... rice and corn using simple tools like digging sticks.",
  //   // "Sống cuộc sống du mục, người Brâu trồng lúa và ngô sử dụng những công cụ thô sơ ví dụ như gậy đào lỗ tra hạt.",
  //   "Gợi ý: grow or cultivate or plant",
  //   "",
  // ],
  // [
  //   "festival",
  //   "Hoàn thành: The most important ... in the year of the Brau is the 'new rice' celebration after each harvest time.",
  //   // "Lễ hội quan trọng nhất trong năm của người Brâu là lễ mừng cơm mới sau mỗi mùa thu hoạch.",
  //   "Gợi ý: festival",
  //   "",
  // ],
  // [
  //   "Around 1,200,000 people.",
  //   "Trả lời: What is the population of the Hoa in Viet Nam?",
  //   "",
  //   "Gợi ý: Around 1,200,000 people.",
  //   "",
  // ],
  // [
  //   "They gather mainly in Lam Dong province.",
  //   "Trả lời: Where do the Churu mainly live?",
  //   "Gợi ý: They gather mainly in Lam Dong province.",
  //   "",
  //   "",
  // ],
  // [
  //   "It belongs to Mon Khmer group.",
  //   "Trả lời: Which group does Ba Na language belong to?",
  //   "Gợi ý: It belongs to Mon Khmer group.",
  //   "",
  //   "",
  // ],
  // [
  //   "It is at the end of Lunar November or December.",
  //   "Trả lời: When is New Year holiday for the H'mong people?",
  //   "Gợi ý: It is at the end of Lunar November or December.",
  //   "",
  //   "",
  // ],
  // [
  //   "To show the Pa Then's strength and wish to conquer nature, send bad spirits away and bring them peace.",
  //   "Trả lời: Why do the Pa Then celebrate fire jumping festival?",
  //   "Gợi ý: To show the Pa Then's strength and wish to conquer nature, send bad spirits away and bring them peace.",
  //   "",
  //   "",
  // ],
  // [
  //   "Have you ever talked to a Cham person? Well, there are many fascinating things about this ethnic group that I want to share with you. ",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: Have you ever talked to a Cham person? Well, there are many fascinating things about this ethnic group that I want to share with you. ",
  //   "",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/1.mp3",
  // ],
  // [
  //   "The Cham have a population of about 162 thousand inhabitants living in the provinces of Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: The Cham have a population of about 162 thousand inhabitants living in the provinces of Ninh Thuan, Binh Thuan, Dong Nai and Tay Ninh.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/2.mp3",
  //   "",
  // ],
  // [
  //   "Their language belongs to the Malayo-Polynesian group.",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: Their language belongs to the Malayo-Polynesian group.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/3.mp3",
  //   "",
  // ],
  // [
  //   "The Cham have a tradition of wet rice cultivation. They are also experienced in fishing and making handicrafts, especially silk and hand-made pottery.",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: The Cham have a tradition of wet rice cultivation. They are also experienced in fishing and making handicrafts, especially silk and hand-made pottery.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/4.mp3",
  //   "",
  // ],
  // [
  //   "Every year, they hold the Kate festival to commemorate the dead and honour heroes in the Cham community. Various agricultural ceremonies are performed during the year for a new canal, for young rice and for so many other occasions.",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: Every year, they hold the Kate festival to commemorate the dead and honour heroes in the Cham community. Various agricultural ceremonies are performed during the year for a new canal, for young rice and for so many other occasions.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/5.mp3",
  //   "",
  // ],
  // [
  //   "Personally, I find the Cham ethnic people very interesting. Experience their way of life if possible, it's worth your time",
  //   "Listen, rewrite what you hear: ",
  //   "Gợi ý: Personally, I find the Cham ethnic people very interesting. Experience their way of life if possible, it's worth your time",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson7/ex4/6.mp3",
  //   "",
  // ],
  // [
  //   "false",
  //   "Listen, confirm true or false: <br> Five-coloured sticky rice is a popular dish in Southern Viet Nam.",
  //   "Gợi ý: Trả lời Đúng hoặc Sai bằng English",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson8/ex1/1.mp3",
  //   "",
  // ],
  // [
  //   "false",
  //   "Listen, confirm true or false: <br>  The dish is in nine colours.",
  //   "Gợi ý: Trả lời Đúng hoặc Sai bằng English",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson8/ex1/1.mp3",
  //   "",
  // ],
  // [
  //   "true",
  //   "Listen, confirm true or false: <br> Each of the colours represents an important element of life.",
  //   "Gợi ý: Trả lời Đúng hoặc Sai bằng English",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson8/ex1/1.mp3",
  //   "",
  // ],
  // [
  //   "false",
  //   "Listen, confirm true or false: <br> Those elements are believed to create perfect harmony for heaven, earth and animals.",
  //   "Gợi ý: Trả lời Đúng hoặc Sai bằng English",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson8/ex1/1.mp3",
  //   "",
  // ],
  // [
  //   "true",
  //   "Listen, confirm true or false: <br> They often prepare this dish to celebrate Tet holiday.",
  //   "Gợi ý: Trả lời Đúng hoặc Sai bằng English",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson8/ex1/1.mp3",
  //   // "",
  // ],
  // [
  //   "This is a very easy dish to make.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: This is a very easy dish to make.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/1.mp3",
  //   // "Đây là một món ăn rất dễ làm.",
  // ],
  // [
  //   "Try this delicious recipe.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: Try this delicious recipe.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/2.mp3",
  //   // "Hãy thử công thức nấu ăn ngon tuyệt này.",
  // ],
  // [
  //   "It is very simple to make 'Xoi Gac' the unique red sticky rice if you follow these steps.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: It is very simple to make 'Xoi Gac' the unique red sticky rice if you follow these steps.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/3.mp3",
  //   // "Làm món 'Xôi Gấc' rất đơn giản nếu bạn thực hiện theo những bước sau.",
  // ],
  // [
  //   "Once the rice is drained, add the salt.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: Once the rice is drained, add the salt.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/4.mp3",
  //   // "Khi gạo đã được để ráo, hãy bỏ thêm chút muối."
  // ],
  // [
  //   "After the rice is drained, add the salt.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: After the rice is drained, add the salt.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/5.mp3",
  //   // "Sau khi gạo được để ráo, hãy cho thêm muối."
  // ],
  // [
  //   "Before adding the salt, drain the rice.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: Before adding the salt, drain the rice.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/6.mp3",
  //   // "Trước khi thêm muối, hãy để ráo gạo."
  // ],
  // [
  //   "Serve this dish with ...",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: Trong phần kết cuối cùng, thường chúng ta sẽ miêu tả cách trình bày món ăn khi đã hoàn thành. Có thể sử dụng các cụm từ như: Serve this dish with ...",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/7.mp3",
  //   // ""
  // ],
  // [
  //   "This dish is delicious with ...",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: Trong phần kết cuối cùng, thường chúng ta sẽ miêu tả cách trình bày món ăn khi đã hoàn thành. Có thể sử dụng các cụm từ như: This dish is delicious with ...",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/8.mp3",
  //   // ""
  // ],
  // [
  //   "It is very simple to make 'Xoi Gac' the unique red sticky rice if you follow these steps. First, rinse and then soak the sticky rice in water. After 6 to 8 hours, drain the rice well. Next, add the white wine to the “gac” seeds before you squish and squeeze them tightly. Then, mix the sticky rice, the “gac” seeds and some salt together thoroughly and wait for 10 minutes. The next step is to steam the mixture for at least 30 minutes. Remember to check if it is fully cooked before gently mixing in the sugar and coconut milk. After steaming it for 5 more minutes, you now can serve this delicious dish with some shredded coconut.",
  //   "Listen, rewrite what you hear:",
  //   "Gợi ý: It is very simple to make 'Xoi Gac' the unique red sticky rice if you follow these steps. First, rinse and then soak the sticky rice in water. After 6 to 8 hours, drain the rice well. Next, add the white wine to the “gac” seeds before you squish and squeeze them tightly. Then, mix the sticky rice, the “gac” seeds and some salt together thoroughly and wait for 10 minutes. The next step is to steam the mixture for at least 30 minutes. Remember to check if it is fully cooked before gently mixing in the sugar and coconut milk. After steaming it for 5 more minutes, you now can serve this delicious dish with some shredded coconut.",
  //   "https://www.tienganh123.com/file/phothong/lop8-moi/unit3/lesson9/lythuyet/9.mp3",
  //   // ""
  // ],
  [
    "What is Black Thai ethnic cuisine famous for?",
    "Viết lại câu sau: What is Black Thai ethnic cuisine famous for?",
    "Gợi ý: What is Black Thai ethnic cuisine famous for?",
    "",
    "",
  ],
  [
    "What is stored and served in large earthen jars?",
    "Viết lại câu sau: What is stored and served in large earthen jars?",
    "Gợi ý: ",
    "",
    "",
  ],
  [
    "Where can I find restaurants serving the best dishes of 'carried-under-arm' pig? or Where can we find restaurants serving the best dishes of 'carried-under-arm' pig?",
    "Viết lại câu sau: Where can I find restaurants serving the best dishes of 'carried-under-arm' pig? or Where can we find restaurants serving the best dishes of 'carried-under-arm' pig?",
    "Gợi ý: ",
    "",
    "",
  ],
  [
    "Who usually catch the frog for food in the forest when night falls?",
    "Viết lại câu sau: Who usually catch the frog for food in the forest when night falls?",
    "Gợi ý: ",
    "",
    "",
  ],
  [
    "Why is the Coho's food often served dry?",
    "Viết lại câu sau: Why is the Coho's food often served dry?",
    "Gợi ý: ",
    "",
    "",
  ],
  // [
  //   "Most of the community activities take place at the communal houses",
  //   "Hoàn thành câu: Most of the community activities take place at the ...",
  //   "Gợi ý: Most of the community activities take place at the communal houses",
  //   "",
  //   "",
  // ],
  // [
  //   "To prepare for the traditional Vietnamese wedding, people often choose a date and time for the marriage ceremony.",
  //   "Hoàn thành câu: To prepare for the traditional Vietnamese wedding, people often choose a date and time for the marriage ...",
  //   "Gợi ý: To prepare for the traditional Vietnamese wedding, people often choose a date and time for the marriage ceremony.",
  //   "",
  //   "",
  // ],
  // [
  //   "Khmer people have a unique cultural heritage which is their traditional dances.",
  //   "Hoàn thành câu: Khmer people have a unique cultural heritage which is their ...",
  //   "Gợi ý: Khmer people have a unique cultural heritage which is their traditional dances.",
  //   "",
  //   "",
  // ],
  // [
  //   "Dak Lak is the most ethnically diverse province with 44 different ethnic groups.",
  //   "Hoàn thành câu: Dak Lak is the most ethnically ... with 44 different ethnic groups.",
  //   "Gợi ý: Dak Lak is the most ethnically diverse province with 44 different ethnic groups.",
  //   "",
  //   "",
  // ],
  // [
  //   "September and October is the most beautiful time to enjoy the fairy scene of terraced fields in Hoang Su Phi, Ha Giang.",
  //   "Hoàn thành câu: September and October is the most beautiful time to enjoy the fairy scene of ... in Hoang Su Phi, Ha Giang.",
  //   "Gợi ý: September and October is the most beautiful time to enjoy the fairy scene of terraced fields in Hoang Su Phi, Ha Giang.",
  //   "",
  //   "",
  // ],
  // [
  //   "Ethnic minorities account for nearly 15 percent of the population in Vietnam.",
  //   "Hoàn thành câu: ... account for nearly 15 percent of the population in Vietnam.",
  //   "Gợi ý: Ethnic minorities account for nearly 15 percent of the population in Vietnam.",
  //   "",
  //   "",
  // ],
  // [
  //   "Two small bedrooms. or Two small bedrooms are on either side of the common room.",
  //   "Trả lời câu: What are on either side of the common room?",
  //   "Gợi ý: Two small bedrooms. or Two small bedrooms are on either side of the common room.",
  //   "",
  //   "",
  // ],
  // [
  //   "The head of the house's. or The head of the house's is on the left side of the great room.",
  //   "Trả lời câu: Whose bedroom is on the left side of the great room?",
  //   "Gợi ý: The head of the house's. or The head of the house's is on the left side of the great room.",
  //   "",
  //   "",
  // ],
  // [
  //   "Father-in-law and older brothers-in-law. or Father-in-law and older brothers-in-law are not allowed to enter the couple's room.",
  //   "Trả lời câu: Who is not allowed to enter the couple's room?",
  //   "Gợi ý: Father-in-law and older brothers-in-law. or Father-in-law and older brothers-in-law are not allowed to enter the couple's room.",
  //   "",
  //   "",
  // ],
  // [
  //   "After the funeral. or They return to their bedroom, or move to the parents' bedroom after the funeral.",
  //   "Trả lời câu: When do the couple return to their bedroom, or move to the parents' bedroom if they are the oldest son and daughter-in-law?",
  //   "Gợi ý: After the funeral. or They return to their bedroom, or move to the parents' bedroom after the funeral.",
  //   "",
  //   "",
  // ],
  // [
  //   "In the common room. or They will sleep in the common room. or They'll sleep in the common room.",
  //   "Trả lời câu: Where will their widowed mother or father sleep?",
  //   "Gợi ý: In the common room. or They will sleep in the common room. or They'll sleep in the common room.",
  //   "",
  //   "",
  // ],

  // ["", "", "Gợi ý: ", "", ""],
  // // ['0', '1', '2', '', '4', '5', '6'],
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
  lengthArr.innerHTML = `<pre>English 8A6 Unit3     <span style = "color:red">${i}</span> / ${lengths}</pre>`;
  i++;

  for (var items of randomTerm) {
    // Xử lý nếu có ảnh thì hiển thị ra giao diện khi hàm được gọi.
    var itemImg;
    if (items.includes("png") || items.includes("jpg")) {
      canvasBlock.classList.add("canvasNone");
      flipCardElement.classList.add("flipCardBlock");
      itemImg = items;
      flipCardFrontEle.src = `./assets/img/${itemImg}`;
      console.log(`có ảnh các bác ơi!!!!!!!!!: `);
    }
    if (itemImg === undefined) {
      canvasBlock.classList.remove("canvasNone");
      flipCardElement.classList.remove("flipCardBlock");
      flipCardFrontEle.src = "";
    }
    // Xử lý nếu có audio thì Sửa src cho audioItemElement.
    var itemMp3;
    if (
      items.includes("audio") ||
      items.includes("mp3") ||
      items.includes("sound")
    ) {
      itemMp3 = items;
      // questionFrontId.innerHTML = `Listen, rewrite what you hear:`;
      audioQuestionElement.style.display = "block";
      audioItemElement.src = `${itemMp3}`;
    }
    if (itemMp3 === undefined) {
      var noAudioItem = audioLists[6];
      itemMp3 = `./assets/audio/${noAudioItem}.mp3`;
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
  answerElement.style.height = "40px";
  audioItemElement.pause();
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
  autoGrow(answerElement);

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

// Mở rộng hộp nhập dữ liệu đầu vào answer:
function autoGrow(answerElement) {
  answerElement.style.height = answerElement.scrollHeight + "px";
}

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
  backgroundMusic.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
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
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.95;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
  // console.log(`11111111111`, second);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  // ctx.fillStyle = "violet";
  ctx.fill();
  var img = document.getElementById("scream");
  ctx.drawImage(img, -132, -132, 265, 285);
  grad = ctx.createRadialGradient(0, 0, radius * 0.85, 0, 0, radius * 1.18);
  // grad.addColorStop(0, "green");
  // grad.addColorStop(0.4, "#fccdff");
  // grad.addColorStop(1, "blue");
  grad.addColorStop(0, "#333");
  grad.addColorStop(0.4, "white");
  grad.addColorStop(1, "#333");
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.14;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.075, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.strokeStyle = "#0000ffb3";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  var gradient;
  ctx.font = radius * 0.16 + "px Verdana";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgb(239 0 255)";
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.8);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.8);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.46, radius * 0.08);
  //minute
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.7, radius * 0.065);
  // second
  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.82, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
