const questions = [
  {
    image: 'cat_1.webp',
    options: {
      a: { name: 'Birma', correct: false },
      b: { name: 'Norská lesní kočka', correct: true },
      c: { name: 'Sphynx', correct: false },
    },
    curiosity:
      'Norská lesní kočka je jedním z mála plemen, které se vyvinuly přirozeně bez zásahu člověka. ',
  },
  {
    image: 'cat_2.jpg',
    options: {
      a: { name: 'Ruská modrá kočka', correct: false },
      b: { name: 'Mainská mývalí kočka', correct: false },
      c: { name: 'Perská kočka', correct: true },
    },
    curiosity:
      'Perská kočka patří mezi nejstarší plemena vůbec. Navzdory jménu ale nepochází z Orientu, dle genetické analýzy jsou jejími předky dlouhosrsté domácí kočky z Ruska.',
  },
  {
    image: 'cat_3.jpg',
    options: {
      a: { name: 'Habešská kočka', correct: false },
      b: { name: 'Britská krátkosrstá kočka', correct: true },
      c: { name: 'Korat', correct: false },
    },
    curiosity:
      'Během obou světových válek docházelo mj. ke křízení tohoto plemene s kartuziánskou kočkou. Díky jejich genetické blízkosti byla mezi lety 1970 a 1977 tato dvě plemena spojena chovatelským svazem FIFe v jedno. Modrá varianta byla považována za kartuziánskou, ostatní za britské krátkosrsté. ',
  },
  {
    image: 'cat_4.jpg',
    options: {
      a: { name: 'Ragdoll', correct: true },
      b: { name: 'Perská kočka', correct: false },
      c: { name: 'Turecká van', correct: false },
    },
    curiosity:
      'Ragdoll je prvním kočičím plemenem, na které byla podána patentová přihláška. Stalo se tak v 60.letech 20. století.',
  },
  {
    image: 'cat_5.jpg',
    options: {
      a: { name: 'Siamská kočka', correct: false },
      b: { name: 'Balineska', correct: false },
      c: { name: 'Sphynx', correct: true },
    },
    curiosity:
      'Sphynx patří mezi více "upovídaná" plemena. Hlasité mňoukání ale nečekejme, tuto kočku uslyšíme spíše tiše švitořit.',
  },
  {
    image: 'cat_6.jpg',
    options: {
      a: { name: 'Evropská kočka', correct: true },
      b: { name: 'Norská lesní kočka', correct: false },
      c: { name: 'Habešská kočka', correct: false },
    },
    curiosity:
      'Toto plemeno je nejrozšířenějším domácím plemenem na Starém kontinentu, které se zde vyskytuje po staletí. Při kvalitní péči a dobrém zdraví se může dožít velmi vysokého věku (až 21 let).',
  },
  {
    image: 'cat_7.jpg',
    options: {
      a: { name: 'Siamská kočka', correct: false },
      b: { name: 'Perská kočka', correct: false },
      c: { name: 'Mainská mývalí kočka', correct: true },
    },
    curiosity:
      'Kvůli její mírné a nekonfliktní povaze a zároveň velikosti se mainské mývalí kočce někdy přezdívá “Něžný obr”.',
  },
  {
    image: 'cat_8.jpg',
    options: {
      a: { name: 'Něvská maškaráda', correct: false },
      b: { name: 'Bengálská kočka', correct: true },
      c: { name: 'Birma', correct: false },
    },
    curiosity:
      'Bengálku lze považovat za tzv. "divokou hybridní kočku", tedy křížence mezi divokými a domácímí plemeny. Toto plemeno vzniklo křížením černé domácí kočky s divokou asijskou leopardí kočkou.',
  },
  {
    image: 'cat_9.jpg',
    options: {
      a: { name: 'Briská krátkosrstá kočka', correct: false },
      b: { name: 'Ruská modrá kočka', correct: false },
      c: { name: 'Nebelung', correct: true },
    },
    curiosity:
      'Vzhledem k tomu, že je plemeno Nebelung poměrně mladé a jeho populace není velká, nejsou u něho zatím známy žádné specifické predispozice k chorobám.',
  },
  {
    image: 'cat_10.jpg',
    options: {
      a: { name: 'Habešská kočka', correct: true },
      b: { name: 'Evropská kočka', correct: false },
      c: { name: 'Perská kočka', correct: false },
    },
    curiosity:
      'Název kočky odkazuje na její původ z africké Habeše (dnešní Etiopie), odkud pochází její divocí předkové (pravděpodobně divoké africké kočky). Ty byly v 60. letech 19. století převezeny britskými vojáky do Velké Británie, kde byly dále šlechtěny.',
  },
];
