const mongoose = require('mongoose');
const Question = require('../models/question')
const uri = 'mongodb://localhost:27017/ourGame'
mongoose.connect(uri, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const gameRawData = [
  {
    collectionTitle: 'Математика',
    collection:
      [{ question: '2+2', answer: '4', value: 200, }, { question: '3+2', answer: '5', value: 400, }, { question: '3*2', answer: '6', value: 600, }, { question: '3^2', answer: '9', value: 800, }, { question: '3/2', answer: '1.5', value: 1000, }]
  },
  {
    collectionTitle: 'Русский язык',
    collection:
      [{ question: 'мыш*', answer: 'ь', value: 200, }, { question: 'м*локо', answer: 'о', value: 400, }, { question: 'со*нце', answer: 'л', value: 600, }, { question: 'в*негрет', answer: 'и', value: 800, }, { question: 'длиннош*', answer: 'еее', value: 1000, }]
  }, {
    collectionTitle: "Месяцы",
    collection: [
      {
        question:
          "'... говорят, во Франции большая часть народа признаёт веру Магомета'. Перед этим наблюдением стоит дата 86 число, ЭТОГО месяца...",
        answer: "Мартобря",
        value: 200,
      },
      {
        question: "В ЭТОМ месяце пророку было ниспослано первое откровение.",
        answer: "Рамадан",
        value: 400,
      },
      {
        question:
          "В названии ЭТОГО израильского города можно найти другое название весеннего месяца Нисана.",
        answer: "Тель-Авив",
        value: 600,
      },
      {
        question:
          "В ЭТОМ месяце, по словам Бутусова: 'Жестокие дети умеют влюбляться, не умеют любить'",
        answer: "Август",
        value: 800,
      },
      {
        question:
          "Раньше ТАК называли апрель, а теперь он ассоциируется с январем — февралем.",
        answer: "Водолей",
        value: 1000,
      },
    ],
  },
  {
    collectionTitle: "Вечная тема",
    collection: [
      {
        question: 'ОНА пела: "Пусть говорят, ничто не вечно под Луной..."',
        answer: "Лайма Вайкуле",
        value: 200,
      },
      {
        question:
          '"И вечный бой, покой нам только снится..." — писал ЭТОТ поэт.',
        answer: "Блок",
        value: 400,
      },
      {
        question:
          '"Вечный покой даруй им, Господи..." Такими словами начинается ЭТА католическая молитва.',
        answer: "Реквием",
        value: 600,
      },
      {
        question: 'Именно ОНИ снились Оле, из песни ЧиЖа "Вечная молодость".',
        answer: "Соло-гитарист и иногда учитель пения",
        value: 800,
      },
      {
        question:
          'ЕГО пьесу "Вечность и один день" можно прочесть девятью различными способами.',
        answer: "Милорад Павич",
        value: 1000,
      },
    ],
  },
  {
    collectionTitle: "Шекспир",
    collection: [
      {
        question: "Родиной Шекспира является именно ЭТОТ город.",
        answer: "Стратфорд-на-Эйвоне",
        value: 200,
      },
      {
        question: "Ричард Бербедж известен тем, что он был первым... КЕМ?",
        answer: "Исполнителем роли Гамлета",
        value: 400,
      },
      {
        question:
          "ЭТОГО философа некоторые считают автором шекспировских произведений.",
        answer: "Бэкон",
        value: 600,
      },
      {
        question: "ЭТОТ предмет Шекспир отписал своей жене в завещании.",
        answer: "Кровать",
        value: 800,
      },
      {
        question: "Пожалуй, самым известным из НИХ является Пейн Кольер.",
        answer: "Фальсификаторы Шекспира",
        value: 1000,
      },
    ],
  },
  {
    collectionTitle: "Моя Монголия",
    collection: [
      {
        question: "Скажите по-монгольски 'монгольская почта'.",
        answer: "Монгол Шуудан",
        value: 200,
      },
      {
        question: "ЭТОТ внук Чингисхана основал Золотую Орду.",
        answer: "Батый",
        value: 400,
      },
      {
        question: "Один тугрик содержит в себе 100...",
        answer: "Мунгу",
        value: 600,
      },
      {
        question:
          "ТАК называется автономный район в составе Китая, близкий сердцу Чапаева, если, конечно, верить Виктору Пелевину.",
        answer: "Внутренняя Монголия",
        value: 800,
      },
      {
        question:
          "Под ЭТИМ именем нам известен простой монгольский парень Ганзор Куяк.",
        answer: "Жугдэрдэмидийн Гуррагча",
        value: 1000,
      },
    ],
  },
  {
    collectionTitle: "Птицы",
    collection: [
      {
        question:
          "Римский бог Пикус был превращен отвергнутой Цирцеей в ЭТУ птицу.",
        answer: "Дятел",
        value: 200,
      },
      {
        question: "ТАКОЕ имя носила чайка, прославленная Ричардом Бахом.",
        answer: "Джонатан Ливингстон",
        value: 400,
      },
      {
        question: "10 миллионов в русском счете назывались еще и ТАК...",
        answer: "Ворон",
        value: 600,
      },
      {
        question: "Символом ЭТОГО католического святого является гусь.",
        answer: "Св. Мартин",
        value: 800,
      },
      {
        question: "Именно по ЭТОЙ причине никто не видел птицу Сиу.",
        answer: "Потому, что это не простая птица",
        value: 1000,
      },
    ],
  },
  {
    collectionTitle: "Одна буква",
    collection: [
      {
        question: "ЭТА буква в азбуке Морзе обозначается одним тире.",
        answer: "Т",
        value: 200,
      },
      {
        question: "ЭТОТ зверь был проклят Св. Микой.",
        answer: "Вепрь Ы",
        value: 400,
      },
      {
        question: "В глаголице последней была именно ЭТА буква.",
        answer: "Ижица",
        value: 600,
      },
      {
        question:
          "Веня Ерофеев очень гордился тем, что его сын знает ЭТУ букву.",
        answer: "Ю",
        value: 800,
      },
      {
        question:
          "При входе в чистилище на лбу у Данте появляются семь букв 'Р', которые обозначали...",
        answer: "Семь смертных грехов",
        value: 1000,
      },
    ],
  }
]

const seeder = async () => {
  for (theme of gameRawData) {
    const collection = theme.collection;
    for (el of collection) {
      const newQuestion = new Question({
        collectionTitle: theme.collectionTitle,
        question: el.question,
        answer: el.answer,
        value: el.value,
      })
      await newQuestion.save()
    }
  }
  mongoose.disconnect()
}

seeder()
