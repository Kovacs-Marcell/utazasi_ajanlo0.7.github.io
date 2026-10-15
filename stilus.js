const utiCélok = [
  { id:1, nev:"Maldív-szigetek", hely:"Indiai-óceán", kategoria:"strand", ar:189000,
    ertekeles:4.9, cimke:"TOP AJÁNLAT", kozlekedes:"boat",
    leiras:"A Maldív-szigetek a világ legromantikusabb úti célja: 1200 korallsziget, víz feletti bungalók, kristálytiszta lagúnák. A szigetek között a legjobb közlekedés a hajó és a repülő – autó csak a fő szigeten (Malé) van.",
    kepek:[
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'28°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'10h 30m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Dhivehi', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'MVR', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h1a', nev:'Conrad Maldives Rangali', csillag:5, ar:245000, tavolsag:'0.5 km', ertekeles:9.6,  kep:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop&q=80'],
        leiras:'A Conrad Maldives Rangali egy luxus resort két privát szigeten, víz feletti bungalókkal és a híres Ithaa víz alatti étteremmel.',
        szolgaltatasok:[{ikon:'fa-swimming-pool',nev:'Víz feletti bungaló'},{ikon:'fa-spa',nev:'Spa & Wellness'},{ikon:'fa-utensils',nev:'5 étterem'}] },
      { id:'h1b', nev:'Gili Lankanfushi', csillag:5, ar:198000, tavolsag:'1.2 km', ertekeles:9.4,  kep:'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Öko-luxus resort privát szigeten, korallzátonyokkal és fenntartható luxussal.',
        szolgaltatasok:[{ikon:'fa-leaf',nev:'Öko-barát'},{ikon:'fa-spa',nev:'Spa'}] },
      { id:'h1c', nev:'Baros Maldives', csillag:5, ar:176000, tavolsag:'2.8 km', ertekeles:9.2,  kep:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Elegáns boutique resort kristálytiszta lagúnával.',
        szolgaltatasok:[{ikon:'fa-umbrella-beach',nev:'Privát tengerpart'},{ikon:'fa-spa',nev:'Spa'}] }
    ],
    latnivalok:[
      { ikon:'fa-water', nev:'Búvárkodás', alcim:'5 km · 4.9★' },
      { ikon:'fa-fish', nev:'Delfin túra', alcim:'2 km · 4.8★' },
      { ikon:'fa-sun', nev:'Naplemente', alcim:'0.5 km · 5.0★' },
      { ikon:'fa-umbrella-beach', nev:'Privát sziget', alcim:'12 km · 4.7★' }
    ],
    velemenyek:[
      { nev:'Kiss Andrea', datum:'2026.08.12', pont:'10', szoveg:'Életem legszebb nyaralása! A víz olyan tiszta, hogy látni a halakat.' },
      { nev:'Nagy Péter', datum:'2026.07.25', pont:'9.5', szoveg:'Csodálatos hely, a bungaló tökéletes volt.' }
    ]
  },
  { id:2, nev:"Svájci Alpok", hely:"Zermatt, Svájc", kategoria:"hegy", ar:142000,
    ertekeles:4.8, cimke:"", kozlekedes:"car",
    leiras:"A Svájci Alpok Európa leglenyűgözőbb hegyvidéke. Zermatt városa a Matterhorn lábánál fekszik. Zermatt autómentes, de a környező hegyekhez autóval érdemes menni.",
    kepek:[
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'5°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'2h 10m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Német', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'CHF', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h2a', nev:'Grand Hotel Zermatterhof', csillag:5, ar:198000, tavolsag:'0.3 km', ertekeles:9.5, kep:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80','https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Az 1879-ben alapított Grand Hotel Zermatterhof eleganciája páratlan.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Spa'},{ikon:'fa-utensils',nev:'Fine dining'}] },
      { id:'h2b', nev:'Mont Cervin Palace', csillag:5, ar:176000, tavolsag:'0.5 km', ertekeles:9.3, kep:'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Elegáns 5 csillagos szálloda Zermatt szívében.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Wellness'},{ikon:'fa-swimming-pool',nev:'Medence'}] },
      { id:'h2c', nev:'Hotel Schweizerhof', csillag:4, ar:128000, tavolsag:'1.0 km', ertekeles:9.0, kep:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Kényelmes szálloda közvetlenül a vasútállomás mellett.',
        szolgaltatasok:[{ikon:'fa-train',nev:'Vasút mellett'},{ikon:'fa-mountain',nev:'Hegyi kilátás'}] }
    ],
    latnivalok:[
      { ikon:'fa-mountain', nev:'Matterhorn kilátás', alcim:'0.2 km · 5.0★' },
      { ikon:'fa-skiing', nev:'Sípályák', alcim:'1 km · 4.9★' },
      { ikon:'fa-train', nev:'Gornergrat vasút', alcim:'3 km · 4.8★' },
      { ikon:'fa-hiking', nev:'Öt-tó túra', alcim:'4 km · 4.9★' }
    ],
    velemenyek:[
      { nev:'Tóth Gábor', datum:'2026.08.05', pont:'10', szoveg:'A Matterhorn látképe önmagában megérte az utat!' },
      { nev:'Horváth Judit', datum:'2026.07.14', pont:'9.5', szoveg:'Zermatt varázslatos város, autómentes!' }
    ]
  },
  { id:3, nev:"Kyoto", hely:"Japán", kategoria:"varos", ar:98000,
    ertekeles:4.9, cimke:"KULTÚRA", kozlekedes:"car",
    leiras:"Kyoto Japán kulturális fővárosa, ahol több mint 1600 buddhista templom található. A vonat és a metró kiváló, de a környező helyekhez autó praktikus.",
    kepek:[
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'18°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'13h 20m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Japán', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'JPY', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h3a', nev:'The Ritz-Carlton Kyoto', csillag:5, ar:245000, tavolsag:'0.8 km', ertekeles:9.7, kep:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Luxus szálloda a Kamogawa folyó partján.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Spa'},{ikon:'fa-utensils',nev:'Kaiseki'}] },
      { id:'h3b', nev:'Four Seasons Kyoto', csillag:5, ar:198000, tavolsag:'1.5 km', ertekeles:9.5, kep:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Modern luxus hotel hagyományos japán kerttel.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Spa'},{ikon:'fa-tree',nev:'Japánkert'}] },
      { id:'h3c', nev:'Ryokan Yoshida-sanso', csillag:4, ar:128000, tavolsag:'2.2 km', ertekeles:9.3, kep:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Autentikus ryokan tatami szobákkal.',
        szolgaltatasok:[{ikon:'fa-hot-tub',nev:'Onsen'},{ikon:'fa-utensils',nev:'Kaiseki'}] }
    ],
    latnivalok:[
      { ikon:'fa-torii-gate', nev:'Fushimi Inari', alcim:'4 km · 5.0★' },
      { ikon:'fa-tree', nev:'Bambuszerdő', alcim:'8 km · 4.8★' },
      { ikon:'fa-landmark', nev:'Kinkaku-ji', alcim:'6 km · 4.9★' },
      { ikon:'fa-user-tie', nev:'Gion negyed', alcim:'1 km · 4.7★' }
    ],
    velemenyek:[
      { nev:'Molnár Zsófia', datum:'2026.08.20', pont:'10', szoveg:'Kyoto egyszerűen lenyűgöző!' },
      { nev:'Farkas Dávid', datum:'2026.07.10', pont:'9.5', szoveg:'Rengeteg templom, mindegyik más!' }
    ]
  },
  { id:4, nev:"Masai Mara", hely:"Kenya", kategoria:"kaland", ar:235000,
    ertekeles:4.7, cimke:"KALAND", kozlekedes:"car",
    leiras:"A Masai Mara Nemzeti Rezervátum Kenya leghíresebb szafari területe. A szafarihoz terepjáró (4x4) szükséges.",
    kepek:[
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'25°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'9h 45m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Szuahéli', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'KES', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h4a', nev:'Angama Mara', csillag:5, ar:385000, tavolsag:'2 km', ertekeles:9.8, kep:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Luxus tented camp a Mara szurdok szélén.',
        szolgaltatasok:[{ikon:'fa-binoculars',nev:'Game drive'},{ikon:'fa-utensils',nev:'Fine dining'}] },
      { id:'h4b', nev:'Mara Plains Camp', csillag:5, ar:298000, tavolsag:'5 km', ertekeles:9.5, kep:'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Exkluzív szafari tábor a Nagy Vándorlás útvonalán.',
        szolgaltatasok:[{ikon:'fa-paw',nev:'Vadállat les'},{ikon:'fa-hot-air-balloon',nev:'Hőlégballon'}] }
    ],
    latnivalok:[
      { ikon:'fa-paw', nev:'Öt nagy vadállat', alcim:'1 km · 5.0★' },
      { ikon:'fa-water', nev:'Mara folyó', alcim:'12 km · 4.9★' },
      { ikon:'fa-hot-air-balloon', nev:'Hőlégballon', alcim:'3 km · 4.8★' },
      { ikon:'fa-users', nev:'Masai falu', alcim:'6 km · 4.6★' }
    ],
    velemenyek:[
      { nev:'Szűcs Bence', datum:'2026.08.01', pont:'10', szoveg:'Hihetetlen élmény volt!' },
      { nev:'Juhász Réka', datum:'2026.07.15', pont:'9', szoveg:'A Nagy Vándorlás csodálatos.' }
    ]
  },
  { id:5, nev:"Bali", hely:"Indonézia", kategoria:"strand", ar:76000,
    ertekeles:4.8, cimke:"TOP AJÁNLAT", kozlekedes:"car",
    leiras:"Bali az istenek szigete, ahol rizsteraszok, vulkánok és tengerpartok találkoznak. Autó vagy robogó szükséges a felfedezéshez.",
    kepek:[
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'30°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'14h 30m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Indonéz', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'IDR', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h5a', nev:'Four Seasons Sayan', csillag:5, ar:218000, tavolsag:'1.2 km', ertekeles:9.6, kep:'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Luxus resort az Ayung folyó völgyében.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Spa'},{ikon:'fa-swimming-pool',nev:'Privát medence'}] },
      { id:'h5b', nev:'COMO Uma Ubud', csillag:5, ar:165000, tavolsag:'2.5 km', ertekeles:9.4,  kep:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Modern luxus resort Ubud szívében.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Wellness'},{ikon:'fa-om',nev:'Yoga'}] },
      { id:'h5c', nev:'Alila Ubud', csillag:4, ar:98000, tavolsag:'4.0 km', ertekeles:9.1,  kep:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Elegáns szálloda végtelen medencével.',
        szolgaltatasok:[{ikon:'fa-swimming-pool',nev:'Végtelen medence'},{ikon:'fa-tree',nev:'Rizsterasz'}] }
    ],
    latnivalok:[
      { ikon:'fa-tree', nev:'Tegallalang rizsteraszok', alcim:'8 km · 4.9★' },
      { ikon:'fa-place-of-worship', nev:'Tanah Lot templom', alcim:'25 km · 4.8★' },
      { ikon:'fa-om', nev:'Ubud majomerdő', alcim:'2 km · 4.6★' },
      { ikon:'fa-water', nev:'Nusa Penida', alcim:'20 km · 4.9★' }
    ],
    velemenyek:[
      { nev:'Lakatos Emese', datum:'2026.08.18', pont:'10', szoveg:'Bali minden várakozásomat felülmúlta!' },
      { nev:'Papp Tamás', datum:'2026.07.22', pont:'9.5', szoveg:'A szörfözés Kuta-n fantasztikus volt!' }
    ]
  },
  { id:6, nev:"Norvég fjordok", hely:"Geiranger, Norvégia", kategoria:"hegy", ar:158000,
    ertekeles:4.9, cimke:"", kozlekedes:"boat",
    leiras:"A norvég fjordok a UNESCO világörökség részei. A fjordokon a hajó a legjobb közlekedési eszköz.",
    kepek:[
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'8°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'3h 15m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Norvég', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'NOK', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h6a', nev:'Hotel Union Geiranger', csillag:5, ar:185000, tavolsag:'0.5 km', ertekeles:9.4, kep:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Történelmi szálloda a Geiranger-fjord partján.',
        szolgaltatasok:[{ikon:'fa-water',nev:'Fjord kilátás'},{ikon:'fa-spa',nev:'Spa'}] },
      { id:'h6b', nev:'Havila Hotel Geiranger', csillag:4, ar:128000, tavolsag:'0.8 km', ertekeles:9.1, kep:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Modern szálloda festői kilátással.',
        szolgaltatasok:[{ikon:'fa-water',nev:'Fjord kilátás'},{ikon:'fa-ship',nev:'Hajókikötő'}] }
    ],
    latnivalok:[
      { ikon:'fa-ship', nev:'Fjord hajókirándulás', alcim:'0 km · 5.0★' },
      { ikon:'fa-water', nev:'Hét nővér vízesés', alcim:'3 km · 4.9★' },
      { ikon:'fa-mountain', nev:'Dalsnibba kilátó', alcim:'8 km · 4.8★' },
      { ikon:'fa-hiking', nev:'Skageflå túra', alcim:'2 km · 4.9★' }
    ],
    velemenyek:[
      { nev:'Takács Gergő', datum:'2026.07.28', pont:'10', szoveg:'A fjordok túláradóan szépek!' },
      { nev:'Simon Krisztina', datum:'2026.06.15', pont:'9.5', szoveg:'A Skageflå túra meredek, de a kilátás megéri!' }
    ]
  },
  { id:7, nev:"Párizs", hely:"Franciaország", kategoria:"varos", ar:67000,
    ertekeles:4.6,  cimke:"", kozlekedes:"car",
    leiras:"Párizs a világ legromantikusabb városa. Autóval a városon kívüli helyek (Versailles, Giverny) is elérhetők.",
    kepek:[
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'15°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'2h 20m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Francia', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'EUR', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h7a', nev:'Ritz Paris', csillag:5, ar:325000, tavolsag:'0.5 km', ertekeles:9.8,  kep:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80'],
        leiras:'A legendás Ritz Paris a Vendôme téren.',
        szolgaltatasok:[{ikon:'fa-spa',nev:'Spa'},{ikon:'fa-utensils',nev:'Fine dining'}] },
      { id:'h7b', nev:'Le Meurice', csillag:5, ar:245000, tavolsag:'0.8 km', ertekeles:9.6,  kep:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Palota-szálloda a Tuileries kert mellett.',
        szolgaltatasok:[{ikon:'fa-palette',nev:'Művészet'},{ikon:'fa-utensils',nev:'Michelin étterem'}] },
      { id:'h7c', nev:'Hôtel du Louvre', csillag:4, ar:128000, tavolsag:'1.2 km', ertekeles:9.0,  kep:'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Elegáns szálloda a Louvre közelében.',
        szolgaltatasok:[{ikon:'fa-landmark',nev:'Központi'},{ikon:'fa-subway',nev:'Metro mellett'}] }
    ],
    latnivalok:[
      { ikon:'fa-tower-observation', nev:'Eiffel-torony', alcim:'3 km · 4.9★' },
      { ikon:'fa-landmark', nev:'Louvre Múzeum', alcim:'2 km · 4.8★' },
      { ikon:'fa-church', nev:'Notre-Dame', alcim:'1.5 km · 4.7★' },
      { ikon:'fa-palette', nev:'Montmartre', alcim:'4 km · 4.8★' }
    ],
    velemenyek:[
      { nev:'Fekete Anita', datum:'2026.08.10', pont:'9', szoveg:'Párizs mindig jó ötlet!' },
      { nev:'Rácz Márk', datum:'2026.07.05', pont:'9.5', szoveg:'A Montmartre a kedvenc helyem!' }
    ]
  },
  { id:8, nev:"Izland", hely:"Reykjavík, Izland", kategoria:"kaland", ar:198000,
    ertekeles:4.9,  cimke:"EGYEDI", kozlekedes:"car",
    leiras:"Izland a tűz és jég országa. Autóval a legjobb felfedezni a szigetet.",
    kepek:[
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop&q=80"
    ],
    info:[
      { ikon:'fa-thermometer-half', ertek:'2°C', cimke:'Átlaghőmérséklet' },
      { ikon:'fa-plane', ertek:'3h 45m', cimke:'Repülési idő' },
      { ikon:'fa-language', ertek:'Izlandi', cimke:'Nyelv' },
      { ikon:'fa-money-bill', ertek:'ISK', cimke:'Pénznem' }
    ],
    kozeli:[
      { id:'h8a', nev:'Hotel Rangá', csillag:4, ar:168000, tavolsag:'2 km', ertekeles:9.5,  kep:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Luxus szálloda Dél-Izlandon csillagvizsgálóval.',
        szolgaltatasok:[{ikon:'fa-star',nev:'Csillagvizsgáló'},{ikon:'fa-hot-tub',nev:'Geotermikus'}] },
      { id:'h8b', nev:'Ion Adventure Hotel', csillag:4, ar:138000, tavolsag:'15 km', ertekeles:9.2,  kep:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Design szálloda lávamezőn.',
        szolgaltatasok:[{ikon:'fa-mountain',nev:'Lávamező'},{ikon:'fa-spa',nev:'Spa'}] },
      { id:'h8c', nev:'Canopy by Hilton', csillag:4, ar:98000, tavolsag:'1.5 km', ertekeles:9.0,  kep:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80',
        kepek:['https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&auto=format&fit=crop&q=80'],
        leiras:'Modern szálloda Reykjavík szívében.',
        szolgaltatasok:[{ikon:'fa-city',nev:'Központi'},{ikon:'fa-utensils',nev:'Étterem'}] }
    ],
    latnivalok:[
      { ikon:'fa-hot-tub', nev:'Blue Lagoon', alcim:'45 km · 4.9★' },
      { ikon:'fa-fire', nev:'Geysir gejzír', alcim:'80 km · 4.8★' },
      { ikon:'fa-water', nev:'Gullfoss vízesés', alcim:'100 km · 4.9★' },
      { ikon:'fa-star', nev:'Északi fény', alcim:'20 km · 4.7★' }
    ],
    velemenyek:[
      { nev:'Mészáros Bálint', datum:'2026.02.14', pont:'10', szoveg:'Az északi fény látványa életem legszebb élménye!' },
      { nev:'Gulyás Petra', datum:'2026.08.03', pont:'9.5', szoveg:'Nyáron is gyönyörű!' }
    ]
  }
];

const autoKategoriak = [
  { id:'suv', nev:'SUV', ikon:'fa-truck-monster' },
  { id:'coupe', nev:'Coupé', ikon:'fa-car-side' },
  { id:'cabrio', nev:'Cabrio', ikon:'fa-car-side' },
  { id:'szedan', nev:'Szedán', ikon:'fa-car' },
  { id:'kisauto', nev:'Kisautó', ikon:'fa-car' },
  { id:'terepjaro', nev:'Terepjáró 4x4', ikon:'fa-truck-pickup' },
  { id:'limuzin', nev:'Limuzin', ikon:'fa-car-side' },
  { id:'elektromos', nev:'Elektromos', ikon:'fa-charging-station' }
];

const autok = [
  { id:'suv1', kat:'suv', nev:'Range Rover Velar', tipus:'Luxus SUV', ules:5, valto:'Automata', uzemanyag:'Dízel', ertekeles:4.9,  ar:68000,
    kep:'https://media.cdn-jaguarlandrover.com/api/v2/images/124197/w/640/h/360.jpg',
    leiras:'Elegáns és erőteljes SUV, ideális hosszú utazásokra.',
    jellemzok:['4WD','Bőr ülés','Panoráma tető','GPS'] },
  { id:'suv2', kat:'suv', nev:'BMW X5', tipus:'Prémium SUV', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.8,  ar:72000,
    kep:'https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-134-6602d491051b2.jpg?crop=0.702xw:0.591xh;0.131xw,0.276xh&resize=2048:*',
    leiras:'Sportos és kényelmes SUV, kiváló vezetési élmény.',
    jellemzok:['Hibrid','Bőr ülés','Head-up display','360° kamera'] },
  { id:'suv3', kat:'suv', nev:'Toyota RAV4', tipus:'Kompakt SUV', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.7,  ar:42000,
    kep:'https://www.actualidadmotor.com/wp-content/uploads/2022/02/Toyota-RAV4-2026-Portada-2048x1229.jpeg',
    leiras:'Megbízható és gazdaságos SUV.',
    jellemzok:['Hibrid','Tolatókamera','Apple CarPlay'] },
  { id:'suv4', kat:'suv', nev:'Volvo XC90', tipus:'Családi SUV', ules:7, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.9,  ar:78000,
    kep:'https://upload.wikimedia.org/wikipedia/commons/2/23/Volvo_XC90_T8_AWD_Plug-in_Hybrid_Plus_%28II%2C_2._Facelift%29_%E2%80%93_f_03102025.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    leiras:'Hétüléses luxus SUV, a legmagasabb biztonsági színvonallal.',
    jellemzok:['7 ülés','Biztonsági csomag','Bowers & Wilkins audio'] },
  { id:'coupe1', kat:'coupe', nev:'Ford Mustang GT', tipus:'Izomautó', ules:4, valto:'Manuális', uzemanyag:'Benzin', ertekeles:4.9,  ar:58000,
    kep:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=80',
    leiras:'Ikonicus V8-as izomautó, amerikai stílus.',
    jellemzok:['V8 motor','Sport felfüggesztés','Bőr ülés'] },
  { id:'coupe2', kat:'coupe', nev:'Porsche 911', tipus:'Sport coupé', ules:2, valto:'Automata', uzemanyag:'Benzin', ertekeles:5.0,  ar:145000,
    kep:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80',
    leiras:'A legendás Porsche 911 – a sportautók etalonja.',
    jellemzok:['Sport Plus','Launch control','Sport kipufogó'] },
  { id:'coupe3', kat:'coupe', nev:'Mercedes-AMG C63', tipus:'Sport szedán', ules:5, valto:'Automata', uzemanyag:'Benzin', ertekeles:4.8,  ar:95000,
    kep:'https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-c63-s-e-performance-118-65d7969b525e3.jpg?crop=0.742xw:0.628xh;0.207xw,0.204xh&resize=2048:*',
    leiras:'Erő és elegancia – az AMG C63 lenyűgöző teljesítményt nyújt.',
    jellemzok:['AMG motor','Sport mód','Adaptív felfüggesztés'] },
  { id:'cab1', kat:'cabrio', nev:'BMW 4 Series Cabrio', tipus:'Kabrió', ules:4, valto:'Automata', uzemanyag:'Benzin', ertekeles:4.8,  ar:68000,
    kep:'https://www.topgear.com/sites/default/files/2021/06/P90414424_highRes_bmw-m440i-xdrive-con.jpg',
    leiras:'Lenyitható tetős élmény, prémium belső térrel.',
    jellemzok:['Lenyitható tető','Bőr ülés','Sport mód'] },
  { id:'cab2', kat:'cabrio', nev:'Mercedes E-Class Cabrio', tipus:'Elegáns kabrió', ules:4, valto:'Automata', uzemanyag:'Benzin', ertekeles:4.7,  ar:72000,
    kep:'https://parkers-images.bauersecure.com/wp-images/2035/cut-out/930x620/merc_eclass_cab_10-17.jpg',
    leiras:'Elegáns és kényelmes kabrió.',
    jellemzok:['Aircap','Bőr ülés','Hangrendszer'] },
  { id:'cab3', kat:'cabrio', nev:'Mini Cooper Cabrio', tipus:'Retro kabrió', ules:4, valto:'Manuális', uzemanyag:'Benzin', ertekeles:4.6,  ar:38000,
    kep:'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/xoprzocaup2ck54od0ps.jpg',
    leiras:'Stílusos és ügyes kis kabrió.',
    jellemzok:['Retro dizájn','Lenyitható tető','Ügyes méret'] },
  { id:'szed1', kat:'szedan', nev:'Toyota Camry', tipus:'Középkategóriás', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.8,  ar:38000,
    kep:'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=80',
    leiras:'Megbízható és kényelmes szedán.',
    jellemzok:['Hibrid','Bőr ülés','Tolatókamera'] },
  { id:'szed2', kat:'szedan', nev:'BMW 5 Series', tipus:'Luxus szedán', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.9,  ar:62000,
    kep:'https://hips.hearstapps.com/mtg-prod/65c4b712fa54cf0008f2013a/2020-bmw-5-series-9.jpg?w=768&width=768&q=75&format=webp',
    leiras:'Prémium szedán fejlett technológiával.',
    jellemzok:['Hibrid','Head-up display','Harman Kardon audio'] },
  { id:'szed3', kat:'szedan', nev:'Audi A6', tipus:'Prémium szedán', ules:5, valto:'Automata', uzemanyag:'Dízel', ertekeles:4.8,  ar:58000,
    kep:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop&q=80',
    leiras:'Elegáns és technológiailag fejlett szedán.',
    jellemzok:['Quattro','Virtual Cockpit','Bőr ülés'] },
  { id:'kis1', kat:'kisauto', nev:'VW Polo', tipus:'Városi kisautó', ules:5, valto:'Manuális', uzemanyag:'Benzin', ertekeles:4.6,  ar:22000,
    kep:'https://magazin.kocsi.hu/wp-content/uploads/volkswagen_polo_5-door_18.jpeg',
    leiras:'Gazdaságos és könnyen parkolható kisautó.',
    jellemzok:['Alacsony fogyasztás','Könnyű parkolás'] },
  { id:'kis2', kat:'kisauto', nev:'Fiat 500', tipus:'Retro kisautó', ules:4, valto:'Manuális', uzemanyag:'Benzin', ertekeles:4.5,  ar:18000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6hmRU1MoZAD_bOeCcG7S1aT27F0jouBEvfcO1Hq3EeqdEihI5c7-mgTJ&s=10',
    leiras:'Olasz stílus és báj.',
    jellemzok:['Retro dizájn','Kompakt méret'] },
  { id:'kis3', kat:'kisauto', nev:'Renault Clio', tipus:'Kompakt', ules:5, valto:'Manuális', uzemanyag:'Benzin', ertekeles:4.7,  ar:24000,
    kep:'https://d1ek71enupal89.cloudfront.net/images/blocks_png/RENAULT/CLIO/5DR/75RenCliTecEtecHyb5DrBluFR1_800.jpg',
    leiras:'Modern felszereltség és kényelem.',
    jellemzok:['Érintőképernyő','Tolatókamera'] },
  { id:'ter1', kat:'terepjaro', nev:'Jeep Wrangler', tipus:'Terepjáró', ules:5, valto:'Automata', uzemanyag:'Benzin', ertekeles:4.9,  ar:42000,
    kep:'https://upload.wikimedia.org/wikipedia/commons/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    leiras:'Tökéletes szafarihoz és nehéz terephez.',
    jellemzok:['4WD','Lemerülő képesség','Szafari felszerelés'] },
  { id:'ter2', kat:'terepjaro', nev:'Land Rover Defender', tipus:'Terepjáró', ules:5, valto:'Automata', uzemanyag:'Dízel', ertekeles:4.8,  ar:62000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73yMSE1gul7YSRop1H2Fpm8SqgoF-eOUI8ZFMl6taDzUUN_V5-ke67jQ&s=10',
    leiras:'Robusztus és megbízható terepjáró.',
    jellemzok:['4WD','Difizár','Terrain Response'] },
  { id:'ter3', kat:'terepjaro', nev:'Mercedes G-Class', tipus:'Luxus terepjáró', ules:5, valto:'Automata', uzemanyag:'Benzin', ertekeles:5.0,  ar:98000,
    kep:'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&auto=format&fit=crop&q=80',
    leiras:'A legendás G-Klasse – luxus és terepképesség.',
    jellemzok:['4WD','Három zár','Luxus belső'] },
  { id:'lim1', kat:'limuzin', nev:'Mercedes S-Class', tipus:'Luxus limuzin', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:5.0,  ar:125000,
    kep:'https://di-uploads-pod7.dealerinspire.com/mercedesbenzofchantily/uploads/2025/10/2026-Mercedes-Benz-S-Class.jpg',
    leiras:'A luxus csúcsa – masszázs ülések.',
    jellemzok:['Masszázs ülés','Hátsó klíma','Burmester audio'] },
  { id:'lim2', kat:'limuzin', nev:'BMW 7 Series', tipus:'Luxus limuzin', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.9,  ar:118000,
    kep:'https://cdn.motor1.com/images/mgl/40YXwY/1423:979:6086:4562/2027-bmw-7-series.webp',
    leiras:'Fejlett technológia és luxus kényelem.',
    jellemzok:['Executive Lounge','Bowers & Wilkins','Hátsó szórakoztató'] },
  { id:'lim3', kat:'limuzin', nev:'Audi A8 L', tipus:'Limuzin', ules:5, valto:'Automata', uzemanyag:'Hibrid', ertekeles:4.8,  ar:108000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS4xXG_zKShlCeZnuZnKMgyT7ktvTuf4Dm9T2Sox4xA&s=10',
    leiras:'Hosszított luxus limuzin.',
    jellemzok:['Hosszított','Hátsó masszázs','Bang & Olufsen'] },
  { id:'el1', kat:'elektromos', nev:'Tesla Model 3', tipus:'Elektromos szedán', ules:5, valto:'Automata', uzemanyag:'Elektromos', ertekeles:4.9,  ar:52000,
    kep:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=80',
    leiras:'Néma, gyors és környezetbarát.',
    jellemzok:['Autopilot','500 km hatótáv','Gyors töltés'] },
  { id:'el2', kat:'elektromos', nev:'Tesla Model Y', tipus:'Elektromos SUV', ules:5, valto:'Automata', uzemanyag:'Elektromos', ertekeles:4.8,  ar:62000,
    kep:'https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&auto=format&fit=crop&q=80',
    leiras:'Elektromos SUV hatalmas csomagtérrel.',
    jellemzok:['Autopilot','Nagy csomagtér','Panoráma tető'] },
  { id:'el3', kat:'elektromos', nev:'BMW i4', tipus:'Elektromos coupé', ules:5, valto:'Automata', uzemanyag:'Elektromos', ertekeles:4.7,  ar:58000,
    kep:'https://images.ctfassets.net/c9t6u0qhbv9e/2g0WvLOtnjlkr9dYexRQO4/411018f87fd9a0cfa28047626dea4d92/2025_BMW_i4_Blue_Front_Quarter.JPG',
    leiras:'Sportos elektromos coupé.',
    jellemzok:['Elektromos','Sport mód','iDrive'] }
];

const hajoKategoriak = [
  { id:'vitorlas', nev:'Vitorlás', ikon:'fa-sailboat' },
  { id:'motorcsonak', nev:'Motorcsónak', ikon:'fa-ship' },
  { id:'yacht', nev:'Yacht', ikon:'fa-ship' },
  { id:'katamaran', nev:'Katamarán', ikon:'fa-ship' },
  { id:'setahajo', nev:'Sétahajó', ikon:'fa-ship' },
  { id:'halaszhajo', nev:'Halászhajó', ikon:'fa-anchor' },
  { id:'speedboat', nev:'Speedboat', ikon:'fa-rocket' },
  { id:'parti', nev:'Partmenti hajó', ikon:'fa-umbrella-beach' }
];

const hajok = [
  { id:'vit1', kat:'vitorlas', nev:'Bavaria 46 Cruiser', tipus:'Vitorlás yacht', kapacitas:'8 fő', hossz:'14 m', ertekeles:4.9,  ar:95000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxIFKgRL19XCkZ5NuNAM0eJd7M-7mybLRTiWY_Ohj8osorqkKsWqc_m0&s=10',
    leiras:'Klasszikus vitorlás yacht hosszú távú utazásokra.',
    jellemzok:['Vitorlás','4 kabin','Kapitány','Teljes ellátás'] },
  { id:'vit2', kat:'vitorlas', nev:'Jeanneau Sun Odyssey', tipus:'Vitorlás', kapacitas:'6 fő', hossz:'12 m', ertekeles:4.8,  ar:78000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARiAgT5FLQitW8X_Gu27s9T8_3HDzfgSoVrEAwltUjJE1aJtQV4spITE&s=10',
    leiras:'Kényelmes és gyors vitorlás.',
    jellemzok:['Vitorlás','3 kabin','Napozó terasz'] },
  { id:'vit3', kat:'vitorlas', nev:'Lagoon 46 Catamaran', tipus:'Vitorlás katamarán', kapacitas:'10 fő', hossz:'14 m', ertekeles:5.0,  ar:145000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03RtyFS1BSYapTfp1UamziFqXu_TRliqXq_5BkR-zDfGAHT248y4buzg&s=10',
    leiras:'Stabil és tágas vitorlás katamarán.',
    jellemzok:['Katamarán','4 kabin','Jakuzzi','Kapitány'] },
  { id:'vit4', kat:'vitorlas', nev:'Beneteau Oceanis 51', tipus:'Luxus vitorlás', kapacitas:'10 fő', hossz:'15 m', ertekeles:4.9,  ar:165000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZRcZMp52oZxdZ0Xi1bsQzVjIQzT3Gas1X8PSAJm-4cUDgAQYsCORAgZE&s=10',
    leiras:'Luxus vitorlás yacht modern dizájnnal.',
    jellemzok:['Luxus','5 kabin','Kapitány','Séf'] },
  { id:'mot1', kat:'motorcsonak', nev:'Yamaha 242X', tipus:'Motorcsónak', kapacitas:'10 fő', hossz:'7 m', ertekeles:4.7,  ar:52000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6thv09GodksWt1RY5T4ymoaLPa2pQ9jTgHjRCqDdSLL5KGQEkaemBPjA&s=10',
    leiras:'Gyors és szórakoztató motorcsónak.',
    jellemzok:['Gyors','Wakeboard','Hangrendszer'] },
  { id:'mot2', kat:'motorcsonak', nev:'Sea Ray 280', tipus:'Motorcsónak', kapacitas:'8 fő', hossz:'8 m', ertekeles:4.8,  ar:62000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75n2MxnJfj5V2kGT-J0GGjwE_iwS2MmYgQDt-b9TX07DfNpuz63dnP8i6&s=10',
    leiras:'Elegáns motorcsónak napozó terasszal.',
    jellemzok:['Napozó terasz','Hűtőszekrény','Bimini top'] },
  { id:'yac1', kat:'yacht', nev:'Sunseeker Manhattan 68', tipus:'Luxus yacht', kapacitas:'8 fő', hossz:'21 m', ertekeles:5.0,  ar:385000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoV-OdyNWVsqp4l1WdkhBHYzGUTkpNmETCdJUiqini6Orz7Y3BIGP7AqQ&s=10',
    leiras:'Luxus yacht személyzettel, séffel és jakuzzival.',
    jellemzok:['Személyzet','Séf','Jakuzzi','4 kabin'] },
  { id:'yac2', kat:'yacht', nev:'Azimut 55', tipus:'Luxus yacht', kapacitas:'8 fő', hossz:'17 m', ertekeles:4.9,  ar:285000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xKKFKd3D5uzgZJAIiRX3V4auuM_8E5hzPs_F1LR_a_0V5DKrqN1IcSc&s=10',
    leiras:'Olasz luxus yacht stílusos dizájnnal.',
    jellemzok:['Luxus','3 kabin','Személyzet'] },
  { id:'kat1', kat:'katamaran', nev:'Lagoon 50', tipus:'Katamarán', kapacitas:'12 fő', hossz:'15 m', ertekeles:4.9,  ar:185000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8dqSGO6DIC_nPuYWbjGTc1r9Ow9tIUu5GbG6Yc-TuhLJHOoKXqTgiB3g&s=10',
    leiras:'Tágas és stabil katamarán.',
    jellemzok:['Stabil','Jakuzzi','4 kabin','Napozó terasz'] },
  { id:'set1', kat:'setahajo', nev:'Fjord sétahajó', tipus:'Sétahajó', kapacitas:'80 fő', hossz:'30 m', ertekeles:4.7,  ar:85000,
    kep:'https://static.b24.co/fotos/xlarge/726321-fedda9bfac803d4b365f13eb0d7600a6-x-9153502-62c58067fa54def15a90130d15e95ea5.jpg',
    leiras:'Idegenvezetős sétahajó fjordtúrákhoz.',
    jellemzok:['Idegenvezető','Fedett terasz','Étterem'] },
  { id:'set2', kat:'setahajo', nev:'Naplemente sétahajó', tipus:'Sétahajó', kapacitas:'40 fő', hossz:'20 m', ertekeles:4.9,  ar:65000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuZWE5unzy_FsDSTBBGw897o_XBDPLjXy-jkSbQIWku57mggDoaWRk10&s=10',
    leiras:'Romantikus naplemente hajó pezsgővel.',
    jellemzok:['Pezsgő','Élő zene','Naplemente'] },
  { id:'hal1', kat:'halaszhajo', nev:'Klasszikus halászhajó', tipus:'Halászhajó', kapacitas:'12 fő', hossz:'15 m', ertekeles:4.7,  ar:68000,
    kep:'https://vitorlazasmagazin.hu/wp-content/uploads/2023/09/446926120221020135612-scaled.jpg',
    leiras:'Autentikus halászhajó élmény.',
    jellemzok:['Horgászat','Friss hal','Kapitány'] },
  { id:'spd1', kat:'speedboat', nev:'Yamaha 275SD', tipus:'Speedboat', kapacitas:'8 fő', hossz:'8 m', ertekeles:4.8,  ar:78000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNCZyjKdcI2MAeLtu8pRLlQKBb9FDb6H71ZCHe4y7gI--EhAPDXncYYZA&s=10',
    leiras:'Nagy teljesítményű speedboat.',
    jellemzok:['Gyors','Wakeboard','Hangrendszer'] },
  { id:'spd2', kat:'speedboat', nev:'Cigarette Racing', tipus:'Speedboat', kapacitas:'6 fő', hossz:'12 m', ertekeles:5.0,  ar:145000,
    kep:'https://cigaretteracing.com/wp-content/uploads/2023/08/vid-1024x576.jpg',
    leiras:'Verseny speedboat – 130 km/h felett.',
    jellemzok:['130+ km/h','Verseny','Sport'] },
  { id:'par1', kat:'parti', nev:'Partmenti taxi hajó', tipus:'Partmenti hajó', kapacitas:'20 fő', hossz:'10 m', ertekeles:4.6,  ar:32000,
    kep:'https://cdn.montenegrosubmarine.me/tours/kotor-bay-highlights-1h/kotor-bay-highlights-1h_1.webp',
    leiras:'Gyors és praktikus hajó.',
    jellemzok:['Gyors','Praktikus','Városi'] },
  { id:'par2', kat:'parti', nev:'Kis sziget shuttle', tipus:'Partmenti hajó', kapacitas:'12 fő', hossz:'9 m', ertekeles:4.7,  ar:38000,
    kep:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQye4gk8u4AfDlWc9HMT6Emq2aNeixzyGXLzw1BBF1yY0Kikq207jPCGgRR&s=10',
    leiras:'Rendszeres járat a közeli szigetek között.',
    jellemzok:['Rendszeres','Napozó terasz','Olcsó'] }
];

let aktualisSzuro = 'mind';
let kivalasztottUtiCel = null;
let kivalasztottLegitarsasag = null;
let kivalasztottSzállás = null;
let kivalasztottSzoba = null;
let kivalasztottFizetesiMod = null;
let kivalasztottJarmu = null;
let kivalasztottJarmuTipus = null;
let kivalasztottKozeliSzállás = null;
let aktualisJarmuKategoria = null;
let vegsoOsszeg = 0;
let aktualisGaleriaIndex = 0;
let aktualisGaleria = [];

function temaValtas(){
  document.body.classList.toggle('sotet-mod');
  try{ localStorage.setItem('tema', document.body.classList.contains('sotet-mod') ? 'sotet' : 'vilagos'); }catch(e){}
}
(function initTema(){
  try{ if(localStorage.getItem('tema') === 'sotet') document.body.classList.add('sotet-mod'); }catch(e){}
})();

function oldalMutatas(oldalId){
  document.querySelectorAll('.oldal').forEach(o => o.classList.remove('aktiv'));
  document.getElementById(oldalId).classList.add('aktiv');
  window.scrollTo({ top:0, behavior:'smooth' });
}
function szekcioUgras(szekcioId){
  if(!document.getElementById('oldalKezdo').classList.contains('aktiv')){
    oldalMutatas('oldalKezdo');
    setTimeout(() => {
      const el = document.getElementById(szekcioId);
      if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 100);
  } else {
    const el = document.getElementById(szekcioId);
    if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  }
}

function arFormazas(szam){ return szam.toLocaleString('hu-HU') + ' Ft'; }

function kartyakRender(){
  const wrap = document.getElementById('kartyakDoboz');
  const szurt = aktualisSzuro === 'mind' ? utiCélok : utiCélok.filter(d => d.kategoria === aktualisSzuro);
  wrap.innerHTML = szurt.map(d => `
    <div class="kartya">
      <div class="kartya-img" style="background-image: url('${d.kepek[0]}');" onclick="utiCelReszletek(${d.id})">
        ${d.cimke ? `<span class="kartya-badge">${d.cimke}</span>` : '<span></span>'}
        <span class="kartya-price">${arFormazas(d.ar)}</span>
      </div>
      <div class="kartya-body">
        <div class="kartya-cat"><i class="fas fa-tag"></i> ${d.kategoria}</div>
        <h3 onclick="utiCelReszletek(${d.id})">${d.nev}</h3>
        <div class="kartya-loc"><i class="fas fa-map-marker-alt"></i> ${d.hely}</div>
        <p class="kartya-desc">${d.leiras.substring(0,110)}...</p>
        <div class="kartya-feats">${d.info.slice(0,2).map(f => `<span class="feat">${f.ertek} · ${f.cimke}</span>`).join('')}</div>
        <div class="kartya-lablec">
          <div class="kartya-rating"><i class="fas fa-star"></i> ${d.ertekeles} értékelés</div>
          <button class="book-btn" onclick="event.stopPropagation(); utiCelReszletek(${d.id})">
            <i class="fas fa-eye"></i> Részletek
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function keresesJavaslat(ertek){
  const box = document.getElementById('keresesJavaslatok');
  const q = ertek.trim().toLowerCase();
  if(q === ''){
    box.innerHTML = utiCélok.map(d => `
      <div class="javaslat-elem" onclick="utiCelReszletek(${d.id})">
        <div class="javaslat-kep" style="background-image: url('${d.kepek[0]}');"></div>
        <div class="javaslat-szoveg"><strong>${d.nev}</strong><span>${d.hely} · ${arFormazas(d.ar)}</span></div>
      </div>
    `).join('');
    box.classList.add('mutat');
    return;
  }
  const talalatok = utiCélok.filter(d =>
    d.nev.toLowerCase().includes(q) || d.hely.toLowerCase().includes(q) 
  );
  if(talalatok.length === 0){
    box.innerHTML = `<div style="padding:1.2rem;text-align:center;color:#6b6b80;">Nincs találat</div>`;
    box.classList.add('mutat');
    return;
  }
  box.innerHTML = talalatok.map(d => `
    <div class="javaslat-elem" onclick="utiCelReszletek(${d.id})">
      <div class="javaslat-kep" style="background-image: url('${d.kepek[0]}');"></div>
      <div class="javaslat-szoveg"><strong>${d.nev}</strong><span>${d.hely} · ${arFormazas(d.ar)}</span></div>
    </div>
  `).join('');
  box.classList.add('mutat');
}

document.addEventListener('click', (e) => {
  const box = document.getElementById('keresesJavaslatok');
  const input = document.getElementById('keresesUtiCel');
  if(box && !box.contains(e.target) && e.target !== input) box.classList.remove('mutat');
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && e.target.id === 'keresesUtiCel') keresesIndit();
});

function keresesIndit(){
  const keresettSzoveg = document.getElementById('keresesUtiCel').value.trim();
  const q = keresettSzoveg.toLowerCase();
  document.getElementById('keresesJavaslatok').classList.remove('mutat');
  if(q === ''){ kartyakRender(); szekcioUgras('kartyakDoboz'); return; }
  const talalatok = utiCélok.filter(d =>
    d.nev.toLowerCase().includes(q) || d.hely.toLowerCase().includes(q)
  );
  const wrap = document.getElementById('kartyakDoboz');
  if(talalatok.length === 0){
    wrap.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#6b6b80;">Nincs találat a(z) "${keresettSzoveg}" keresésre.</p>`;
  } else {
    wrap.innerHTML = `<p style="grid-column:1/-1;font-size:1.1rem;font-weight:600;color:#6b6b80;margin-bottom:1rem;">
      ${talalatok.length} találat a(z) "${keresettSzoveg}" keresésre</p>` + talalatok.map(d => `
      <div class="kartya">
        <div class="kartya-img" style="background-image: url('${d.kepek[0]}');" onclick="utiCelReszletek(${d.id})">
          ${d.cimke ? `<span class="kartya-badge">${d.cimke}</span>` : '<span></span>'}
          <span class="kartya-price">${arFormazas(d.ar)}</span>
        </div>
        <div class="kartya-body">
          <div class="kartya-cat"><i class="fas fa-tag"></i> ${d.kategoria}</div>
          <h3 onclick="utiCelReszletek(${d.id})">${d.nev}</h3>
          <div class="kartya-loc"><i class="fas fa-map-marker-alt"></i> ${d.hely}</div>
          <p class="kartya-desc">${d.leiras.substring(0,110)}...</p>
          <div class="kartya-lablec">
            <div class="kartya-rating"><i class="fas fa-star"></i> ${d.ertekeles} értékelés</div>
            <button class="book-btn" onclick="event.stopPropagation(); utiCelReszletek(${d.id})">
              <i class="fas fa-eye"></i> Részletek
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
  szekcioUgras('kartyakDoboz');
}

document.getElementById('szuroGombok').addEventListener('click', (e) => {
  const btn = e.target.closest('.szuro-gomb');
  if(!btn) return;
  document.querySelectorAll('.szuro-gomb').forEach(b => b.classList.remove('aktiv'));
  btn.classList.add('aktiv');
  aktualisSzuro = btn.getAttribute('data-szuro');
  kartyakRender();
});

function kapcsolatKuld(e){
  e.preventDefault();
  document.getElementById('kapcsolatSiker').classList.add('mutat');
  e.target.reset();
  setTimeout(() => document.getElementById('kapcsolatSiker').classList.remove('mutat'), 5000);
}

function utiCelReszletek(destId){
  kivalasztottUtiCel = utiCélok.find(d => d.id === destId);
  if(!kivalasztottUtiCel) return;

  document.getElementById('reszletNev').textContent = kivalasztottUtiCel.nev;
  document.getElementById('reszletHely').textContent = kivalasztottUtiCel.hely;
  document.getElementById('reszletErtekeles').textContent = kivalasztottUtiCel.ertekeles;
  document.getElementById('reszletLeiras').textContent = kivalasztottUtiCel.leiras;
  document.getElementById('reszletAr').innerHTML = arFormazas(kivalasztottUtiCel.ar) + ' <small style="font-size:0.85rem;color:#6b6b80;font-weight:500;">/ fő</small>';

  aktualisGaleria = kivalasztottUtiCel.kepek;
  aktualisGaleriaIndex = 0;

  document.getElementById('reszletGaleria').innerHTML = kivalasztottUtiCel.kepek.slice(0,5).map((kep,i) => `
    <div class="galeria-img" style="background-image: url('${kep}');" onclick="nagyKepNyitas('reszlet', ${i})"></div>
  `).join('');

  document.getElementById('reszletInfoSav').innerHTML = kivalasztottUtiCel.info.map(i => `
    <div class="info-elem">
      <i class="fas ${i.ikon}"></i>
      <div class="val">${i.ertek}</div>
      <div class="lab">${i.cimke}</div>
    </div>
  `).join('');

  document.getElementById('kozeliGrid').innerHTML = kivalasztottUtiCel.kozeli.map(n => `
    <div class="nearby-kartya" onclick="szallasMegnyitas('${n.id}')">
      <div class="kozeli-kep" style="background-image: url('${n.kep}');">
        <span class="kozeli-tavolsag"><i class="fas fa-walking"></i> ${n.tavolsag}</span>
      </div>
      <div class="kozeli-tartalom">
        <h4>${n.nev}</h4>
        <div class="stars">${'★'.repeat(n.csillag)}${'☆'.repeat(5-n.csillag)} · <span style="color:#00d9c0;font-weight:700;">${n.ertekeles}</span></div>
        <div class="ar">${arFormazas(n.ar)} <small style="font-size:0.7rem;color:#6b6b80;">/ éj</small></div>
        <button class="megnezes-gomb"><i class="fas fa-eye"></i> Részletek</button>
      </div>
    </div>
  `).join('');

  document.getElementById('latnivalok').innerHTML = kivalasztottUtiCel.latnivalok.map(a => `
    <div class="latnivalo">
      <div class="latnivalo-ikon"><i class="fas ${a.ikon}"></i></div>
      <div class="latnivalo-szoveg"><strong>${a.nev}</strong><span>${a.alcim}</span></div>
    </div>
  `).join('');

  document.getElementById('velemenyekLista').innerHTML = kivalasztottUtiCel.velemenyek.map(v => `
    <div class="velemeny">
      <div class="velemeny-fejlec">
        <div class="velemeny-avatar">${v.nev.charAt(0)}</div>
        <div><div class="velemeny-nev">${v.nev}</div><div class="velemeny-datum">${v.datum}</div></div>
        <div class="velemeny-pont">${v.pont}</div>
      </div>
      <p class="velemeny-szoveg">${v.szoveg}</p>
    </div>
  `).join('');

  kozlekedesValasztasRender();
  oldalMutatas('oldalReszletek');
}

function kozlekedesValasztasRender(){
  const hajo = kivalasztottUtiCel.kozlekedes === 'boat';
  document.getElementById('kozlekedesAjanlas').innerHTML = hajo
    ? '<i class="fas fa-lightbulb" style="color:#c8f135;"></i> Ez a hely vizekkel körülvett – a <strong>hajó</strong> a legjobb választás!'
    : '<i class="fas fa-lightbulb" style="color:#c8f135;"></i> Ez a hely szárazföldi kalandokkal teli – az <strong>autó</strong> a legpraktikusabb!';

  const autoKartya = `
    <div class="jarmu-type-kartya vt-car" onclick="jarmuKategoriaNyitas('car')" style="min-height:200px;">
      ${!hajo ? '<span style="position:absolute;top:15px;right:15px;background:#c8f135;color:#0f1123;font-size:0.7rem;font-weight:900;padding:0.35rem 0.8rem;border-radius:20px;z-index:2;">AJÁNLOTT</span>' : ''}
      <div>
        <div class="jarmu-type-kartya-icon">🚗</div>
        <h2 style="font-size:1.5rem;">Autóbérlés</h2>
        <p>Fedezd fel a helyet a saját tempódban.</p>
      </div>
      <button class="jarmu-type-kartya-cta">Autók →</button>
    </div>
  `;
  const hajoKartya = `
    <div class="jarmu-type-kartya vt-boat" onclick="jarmuKategoriaNyitas('boat')" style="min-height:200px;">
      ${hajo ? '<span style="position:absolute;top:15px;right:15px;background:#c8f135;color:#0f1123;font-size:0.7rem;font-weight:900;padding:0.35rem 0.8rem;border-radius:20px;z-index:2;">AJÁNLOTT</span>' : ''}
      <div>
        <div class="jarmu-type-kartya-icon">⛵</div>
        <h2 style="font-size:1.5rem;">Hajóbérlés</h2>
        <p>Fedezd fel a vizeket és a partokat.</p>
      </div>
      <button class="jarmu-type-kartya-cta">Hajók →</button>
    </div>
  `;
  document.getElementById('kozlekedesValasztas').innerHTML = hajo ? (hajoKartya + autoKartya) : (autoKartya + hajoKartya);
}

function szallasMegnyitas(szallasId){
  if(!kivalasztottUtiCel) return;
  const szallas = kivalasztottUtiCel.kozeli.find(n => n.id === szallasId);
  if(!szallas) return;

  kivalasztottKozeliSzállás = szallas;
  document.getElementById('szallasNev').textContent = szallas.nev;
  document.getElementById('szallasHely').textContent = kivalasztottUtiCel.nev + ' · ' + szallas.tavolsag;
  document.getElementById('szallasErtekeles').textContent = szallas.ertekeles;
  document.getElementById('szallasLeiras').textContent = szallas.leiras;
  document.getElementById('szallasAr').innerHTML = arFormazas(szallas.ar) + ' <small style="font-size:0.85rem;color:#6b6b80;font-weight:500;">/ éj</small>';

  aktualisGaleria = szallas.kepek;
  aktualisGaleriaIndex = 0;

  document.getElementById('szallasGaleria').innerHTML = szallas.kepek.slice(0,5).map((kep,i) => `
    <div class="galeria-img" style="background-image: url('${kep}');" onclick="nagyKepNyitas('szallas', ${i})"></div>
  `).join('');

  document.getElementById('szallasInfoSav').innerHTML = `
    <div class="info-elem"><i class="fas fa-star"></i><div class="val">${szallas.csillag} csillag</div><div class="lab">Kategória</div></div>
    <div class="info-elem"><i class="fas fa-walking"></i><div class="val">${szallas.tavolsag}</div><div class="lab">Központtól</div></div>
    <div class="info-elem"><i class="fas fa-thumbs-up"></i><div class="val">${szallas.ertekeles}/10</div><div class="lab">Értékelés</div></div>
  `;

  document.getElementById('szallasSzolgaltatasok').innerHTML = szallas.szolgaltatasok.map(s => `
    <div class="latnivalo">
      <div class="latnivalo-ikon"><i class="fas ${s.ikon}"></i></div>
      <div class="latnivalo-szoveg"><strong>${s.nev}</strong></div>
    </div>
  `).join('');

  document.getElementById('szallasVelemenyekLista').innerHTML = `
    <div class="velemeny">
      <div class="velemeny-fejlec">
        <div class="velemeny-avatar">M</div>
        <div><div class="velemeny-nev">Magyar Vendég</div><div class="velemeny-datum">2026.08.10</div></div>
        <div class="velemeny-pont">${szallas.ertekeles}</div>
      </div>
      <p class="velemeny-szoveg">Csodálatos szállás, minden tökéletes volt!</p>
    </div>
    <div class="velemeny">
      <div class="velemeny-fejlec">
        <div class="velemeny-avatar">K</div>
        <div><div class="velemeny-nev">Kiss Péter</div><div class="velemeny-datum">2026.07.22</div></div>
        <div class="velemeny-pont">9.2</div>
      </div>
      <p class="velemeny-szoveg">Remek elhelyezkedés, gyönyörű kilátás.</p>
    </div>
  `;
  oldalMutatas('oldalSzallas');
}
function visszaUtiCelhez(){
  if(kivalasztottUtiCel) oldalMutatas('oldalReszletek');
  else oldalMutatas('oldalKezdo');
}
function szallasKivalasztEsFoglal(){ foglalashoz(); }

function jarmuKategoriaNyitas(tipus){
  kivalasztottJarmuTipus = tipus;
  kivalasztottJarmu = null;
  aktualisJarmuKategoria = null;
  const kategoriak = tipus === 'car' ? autoKategoriak : hajoKategoriak;
  document.getElementById('kategoriaCim').textContent = tipus === 'car' ? 'Autóbérlés' : 'Hajóbérlés';
  document.getElementById('kategoriaAlcim').textContent = tipus === 'car'
    ? 'Válassz alkategóriát: SUV, Coupé, Cabrio, Szedán, Kisautó, Terepjáró, Limuzin, Elektromos'
    : 'Válassz alkategóriát: Vitorlás, Motorcsónak, Yacht, Katamarán, Sétahajó, Halászhajó, Speedboat, Partmenti';
  document.getElementById('alkategoriaSav').innerHTML = `
    <button class="alkategoria-gomb aktiv" onclick="jarmuSzuro(null, event)">
      <i class="fas fa-th-large"></i> Összes
    </button>
  ` + kategoriak.map(c => `
    <button class="alkategoria-gomb" onclick="jarmuSzuro('${c.id}', event)">
      <i class="fas ${c.ikon}"></i> ${c.nev}
    </button>
  `).join('');
  jarmuvekRender(null);
  oldalMutatas('oldalJarmuKategoria');
}
function jarmuSzuro(katId, event){
  aktualisJarmuKategoria = katId;
  document.querySelectorAll('.alkategoria-gomb').forEach(b => b.classList.remove('aktiv'));
  if(event && event.target) event.target.closest('.alkategoria-gomb').classList.add('aktiv');
  jarmuvekRender(katId);
}
function jarmuvekRender(katSzuro){
  const osszes = kivalasztottJarmuTipus === 'car' ? autok : hajok;
  const szurt = katSzuro ? osszes.filter(v => v.kat === katSzuro) : osszes;
  const grid = document.getElementById('jarmuRacs');
  if(szurt.length === 0){
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#6b6b80;">Nincs jármű ebben a kategóriában.</p>';
    return;
  }
  grid.innerHTML = szurt.map(v => `
    <div class="jarmu-kartya">
      <div class="jarmu-img" style="background-image: url('${v.kep}');">
        <span class="jarmu-tag ${kivalasztottJarmuTipus === 'boat' ? 'blue' : ''}">${v.tipus}</span>
        <span class="jarmu-rating-badge"><i class="fas fa-star"></i> ${v.ertekeles} értékelés</span>
      </div>
      <div class="jarmu-body">
        <h4>${v.nev}</h4>
        <div class="jarmu-specs">
          ${kivalasztottJarmuTipus === 'boat' ? `
            <div class="jarmu-spec"><i class="fas fa-users"></i> ${v.kapacitas}</div>
            <div class="jarmu-spec"><i class="fas fa-ruler-horizontal"></i> ${v.hossz}</div>
          ` : `
            <div class="jarmu-spec"><i class="fas fa-users"></i> ${v.ules} ülés</div>
            <div class="jarmu-spec"><i class="fas fa-cog"></i> ${v.valto}</div>
            <div class="jarmu-spec"><i class="fas fa-gas-pump"></i> ${v.uzemanyag}</div>
            <div class="jarmu-spec"><i class="fas fa-star"></i> ${v.ertekeles}/5</div>
          `}
        </div>
        <p class="jarmu-desc">${v.leiras}</p>
        <div class="jarmu-features">
          ${v.jellemzok.map(f => `<span class="jarmu-feature">${f}</span>`).join('')}
        </div>
        <div class="jarmu-lablec">
          <div class="jarmu-price-box">
            <div class="from">Bérlés / nap</div>
            <div class="amount">${arFormazas(v.ar)} <small>/ nap</small></div>
          </div>
          <button class="jarmu-book-btn" onclick="jarmuKivalasztEsFoglal('${v.id}')">
            <i class="fas fa-check"></i> Kiválasztom
          </button>
        </div>
      </div>
    </div>
  `).join('');
}
function jarmuKivalasztEsFoglal(jarmuId){
  const lista = kivalasztottJarmuTipus === 'car' ? autok : hajok;
  kivalasztottJarmu = lista.find(v => v.id === jarmuId);
  if(!kivalasztottJarmu) return;
  foglalashoz();
}

function nagyKepNyitas(forras, index){
  if(forras === 'szallas' && kivalasztottKozeliSzállás){
    aktualisGaleria = kivalasztottKozeliSzállás.kepek;
  } else if(kivalasztottUtiCel){
    aktualisGaleria = kivalasztottUtiCel.kepek;
  }
  aktualisGaleriaIndex = index;
  document.getElementById('kepNagyitoKep').src = aktualisGaleria[index];
  document.getElementById('kepNagyito').classList.add('mutat');
}
function nagyKepBezar(e){
  if(e) e.stopPropagation();
  document.getElementById('kepNagyito').classList.remove('mutat');
}
function nagyKepLapoz(e, irany){
  e.stopPropagation();
  aktualisGaleriaIndex += irany;
  if(aktualisGaleriaIndex < 0) aktualisGaleriaIndex = aktualisGaleria.length - 1;
  if(aktualisGaleriaIndex >= aktualisGaleria.length) aktualisGaleriaIndex = 0;
  document.getElementById('kepNagyitoKep').src = aktualisGaleria[aktualisGaleriaIndex];
}
document.addEventListener('keydown', (e) => {
  if(document.getElementById('kepNagyito').classList.contains('mutat')){
    if(e.key === 'Escape') nagyKepBezar();
    if(e.key === 'ArrowLeft') nagyKepLapoz(e, -1);
    if(e.key === 'ArrowRight') nagyKepLapoz(e, 1);
  }
});

const legitarsasagok = [
  { id:'wizz', nev:'Wizz Air', ikon:'✈️', meta:'Közvetlen · 2h 45m', ar:45000 },
  { id:'ryan', nev:'Ryanair', ikon:'🛫', meta:'Közvetlen · 2h 30m', ar:38000 },
  { id:'lufth', nev:'Lufthansa', ikon:'🛩️', meta:'1 átszállás · 4h 10m', ar:62000 },
  { id:'emir', nev:'Emirates', ikon:'🛬', meta:'1 átszállás · 5h 20m', ar:89000 }
];
const szobaTipusok = [
  { id:'basic', nev:'Alap csomag', ikon:'🎒', meta:'Szállás + reggeli', ar:0 },
  { id:'plus', nev:'Plusz csomag', ikon:'🍽️', meta:'All inclusive', ar:35000 },
  { id:'lux', nev:'Luxus csomag', ikon:'👑', meta:'Privát idegenvezető', ar:78000 },
  { id:'family', nev:'Családi csomag', ikon:'👨‍👩‍👧', meta:'Gyerek programok', ar:42000 }
];

function foglalashoz(){
  if(!kivalasztottUtiCel){ alert('Válassz úti célt!'); return; }
  document.getElementById('foglalasUtiCel').textContent = kivalasztottUtiCel.nev;
  document.getElementById('osszegUtiCel').textContent = kivalasztottUtiCel.nev;
  if(!kivalasztottKozeliSzállás){
    kivalasztottLegitarsasag = null;
    kivalasztottSzállás = null;
    kivalasztottSzoba = null;
  }
  legitarsasagokRender();
  kozeliSzállásokRender();
  szobakRender();
  osszegFrissit();
  oldalMutatas('oldalFoglalas');
}
function visszaFoglalasbol(){
  if(kivalasztottJarmu) {
    oldalMutatas('oldalJarmuKategoria');
  }
  else if(kivalasztottKozeliSzállás) {
    szallasMegnyitas(kivalasztottKozeliSzállás.id);
  }
  else if(kivalasztottUtiCel) {
    utiCelReszletek(kivalasztottUtiCel.id);
  }
  else {
    oldalMutatas('oldalKezdo');
  }
}
function legitarsasagokRender(){
  document.getElementById('legitarsasagok').innerHTML = legitarsasagok.map(a => `
    <div class="lehetoseg-kartya ${kivalasztottLegitarsasag === a.id ? 'kivalasztott' : ''}" onclick="legitarsasagValaszt('${a.id}')">
      <span class="lehetoseg-ikon">${a.ikon}</span>
      <div class="lehetoseg-nev">${a.nev}</div>
      <div class="lehetoseg-meta">${a.meta}</div>
      <div class="lehetoseg-ar">${arFormazas(a.ar)} <small style="font-size:0.75rem;color:#6b6b80;">/ fő</small></div>
    </div>
  `).join('');
}
function kozeliSzállásokRender(){
  const wrap = document.getElementById('szallasLehetosegek');
  if(!kivalasztottUtiCel || !kivalasztottUtiCel.kozeli){
    wrap.innerHTML = '<p style="text-align:center;color:#6b6b80;grid-column:1/-1;">Nincs elérhető szállás.</p>';
    return;
  }
  wrap.innerHTML = kivalasztottUtiCel.kozeli.map(h => `
    <div class="szallas-lehetoseg ${kivalasztottSzállás === h.id ? 'kivalasztott' : ''}" onclick="kozeliSzallasValaszt('${h.id}')">
      <div class="szallas-lehetoseg-kep" style="background-image: url('${h.kep}');">
        <span class="szallas-lehetoseg-csillag">${'★'.repeat(h.csillag)}${'☆'.repeat(5-h.csillag)}</span>
      </div>
      <div class="szallas-lehetoseg-tartalom">
        <h4>${h.nev}</h4>
        <div class="szallas-ertekeles-sor">
          <span class="score">${h.ertekeles}</span>
          <span>értékelés</span>
        </div>
        <div class="hotel-distance"><i class="fas fa-walking"></i> ${h.tavolsag} a központtól</div>
        <div class="szallas-ar">${arFormazas(h.ar)} <small>/ éj</small></div>
      </div>
    </div>
  `).join('');
}
function szobakRender(){
  document.getElementById('szobaLehetosegek').innerHTML = szobaTipusok.map(r => `
    <div class="lehetoseg-kartya ${kivalasztottSzoba === r.id ? 'kivalasztott' : ''}" onclick="szobaValaszt('${r.id}')">
      <span class="lehetoseg-ikon">${r.ikon}</span>
      <div class="lehetoseg-nev">${r.nev}</div>
      <div class="lehetoseg-meta">${r.meta}</div>
      <div class="lehetoseg-ar">${r.ar === 0 ? 'Ingyenes' : '+' + arFormazas(r.ar)} <small style="font-size:0.75rem;color:#6b6b80;">/ fő</small></div>
    </div>
  `).join('');
}
function legitarsasagValaszt(id){ kivalasztottLegitarsasag = id; legitarsasagokRender(); osszegFrissit(); }
function szobaValaszt(id){ kivalasztottSzoba = id; szobakRender(); osszegFrissit(); }
function kozeliSzallasValaszt(szallasId){
  kivalasztottSzállás = szallasId;
  if(kivalasztottUtiCel) kivalasztottKozeliSzállás = kivalasztottUtiCel.kozeli.find(n => n.id === szallasId);
  kozeliSzállásokRender();
  osszegFrissit();
}
function osszegFrissit(){
  const legitarsasag = legitarsasagok.find(a => a.id === kivalasztottLegitarsasag);
  const szoba = szobaTipusok.find(r => r.id === kivalasztottSzoba);
  const vendégek = parseInt(document.getElementById('foglalasLetszam').value) || 2;
  let szallas = null;
  if(kivalasztottSzállás && kivalasztottUtiCel) szallas = kivalasztottUtiCel.kozeli.find(n => n.id === kivalasztottSzállás);
  document.getElementById('osszegLegitarsasag').textContent = legitarsasag ? legitarsasag.nev : '—';
  document.getElementById('osszegSzallas').textContent = szallas ? szallas.nev : '—';
  document.getElementById('osszegSzoba').textContent = szoba ? szoba.nev : '—';
  document.getElementById('osszegLetszam').textContent = vendégek + ' fő';
  if(kivalasztottJarmu){
    document.getElementById('osszegJarmuSor').style.display = 'flex';
    document.getElementById('osszegJarmu').textContent = kivalasztottJarmu.nev + ' (' + arFormazas(kivalasztottJarmu.ar) + '/nap)';
  } else {
    document.getElementById('osszegJarmuSor').style.display = 'none';
  }
  let osszeg = 0;
  if(kivalasztottUtiCel) osszeg += kivalasztottUtiCel.ar * vendégek;
  if(legitarsasag) osszeg += legitarsasag.ar * vendégek;
  if(szallas) osszeg += szallas.ar * 7;
  if(szoba) osszeg += szoba.ar * vendégek;
  if(kivalasztottJarmu) osszeg += kivalasztottJarmu.ar * 7;
  vegsoOsszeg = osszeg;
  document.getElementById('osszegVegso').textContent = arFormazas(osszeg);
}
document.addEventListener('change', (e) => {
  if(e.target && e.target.id === 'foglalasLetszam') osszegFrissit();
});
function fizeteshez(){
  if(!kivalasztottLegitarsasag){ alert('Kérjük, válassz légitársaságot!'); return; }
  if(!kivalasztottSzállás){ alert('Kérjük, válassz szállást!'); return; }
  if(!kivalasztottSzoba){ alert('Kérjük, válassz szobát / csomagot!'); return; }
  const nev = document.getElementById('foglalasNev').value.trim();
  const email = document.getElementById('foglalasEmail').value.trim();
  const telefon = document.getElementById('foglalasTelefon').value.trim();
  if(!nev || !email || !telefon){ alert('Kérjük, töltsd ki az utas adatait!'); return; }
  if(!email.includes('@') || !email.includes('.')){ alert('Kérjük, érvényes e-mail címet adj meg!'); return; }
  if(!/^(?:\+36|06)[\s-]?(?:20|30|31|50|70)(?:[\s-]?\d){7}$/.test(telefon.replace(/\s+/g, ''))){ alert('A telefonszám csak számokat tartalmazhat!'); return;}
  if(!nev|| !/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$/.test(nev)){ alert('A név csak betüket tartalmazhat!'); return; }
  document.getElementById('fizetendoOsszeg').textContent = arFormazas(vegsoOsszeg);
  oldalMutatas('oldalFizetes');
}

function fizetesiModValaszt(mod){
  kivalasztottFizetesiMod = mod;
  document.querySelectorAll('.fizetesi-mod').forEach(el => {
    el.classList.toggle('kivalasztott', el.getAttribute('data-mod') === mod);
  });
  const kartyaUrlap = document.getElementById('kartyaUrlap');
  const penztarcaInfo = document.getElementById('penztarcaInfo');
  if(mod === 'kartya'){
    kartyaUrlap.classList.add('mutat');
    penztarcaInfo.classList.remove('mutat');
    document.getElementById('fizetesGombSzoveg').textContent = 'Fizetés bankkártyával';
  } else {
    kartyaUrlap.classList.remove('mutat');
    penztarcaInfo.classList.add('mutat');
    const info = {
      apple:{ ikon:'🍎', cim:'Apple Pay', leiras:'A fizetés gombra kattintva átirányítunk az Apple Pay felületére.' },
      google:{ ikon:'🅶', cim:'Google Pay', leiras:'A fizetés gombra kattintva a Google Pay felülete nyílik meg.' },
      paypal:{ ikon:'🅿️', cim:'PayPal', leiras:'A fizetés gombra kattintva bejelentkezhetsz PayPal fiókodba.' }
    }[mod];
    document.getElementById('penztarcaIkon').textContent = info.ikon;
    document.getElementById('penztarcaCim').textContent = info.cim;
    document.getElementById('penztarcaLeiras').textContent = info.leiras;
    document.getElementById('fizetesGombSzoveg').textContent = 'Fizetés ' + info.cim + '-jel';
  }
}
function kartyaSzamFrissit(input){
  let ertek = input.value.replace(/\s+/g, '').replace(/\D/g, '').substring(0, 16);
  const formazott = ertek.replace(/(.{4})/g, '$1 ').trim();
  input.value = formazott;
  document.getElementById('kartyaSzamKijelzo').textContent = formazott || '•••• •••• •••• ••••';
}
function kartyaNevFrissit(input){
  const ertek = input.value.replace(/[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]/g, '');
  input.value = ertek;
  document.getElementById('kartyaNevKijelzo').textContent = ertek || 'VEZETÉKNÉV NÉV';
}
function kartyaLejaratFrissit(input){
  let ertek = input.value.replace(/\D/g, '').substring(0, 4);
  if(ertek.length >= 3) ertek = ertek.substring(0, 2) + '/' + ertek.substring(2);
  input.value = ertek;
  document.getElementById('kartyaLejaratKijelzo').textContent = ertek || 'HH/ÉÉ';
}
function kartyaCvvFrissit(input){
  let ertek = input.value.replace(/\D/g, '').substring(0, 4);
  input.value = ertek;
}
function kartyaLejaratEllenorzes(lejarat){
  const egyezes = /^(\d{2})\/(\d{2})$/.exec(lejarat);
  if (!egyezes) return 'Add meg a lejárati dátumot HH/ÉÉ formátumban!';
  const honap = Number(egyezes[1]);
  const ev = 2000 + Number(egyezes[2]);
  if (honap < 1 || honap > 12) return 'Érvénytelen lejárati hónap! 01 és 12 közötti értéket adj meg.';
  const ma = new Date();
  if (ev < ma.getFullYear() || (ev === ma.getFullYear() && honap < ma.getMonth() + 1)) {
    return 'A bankkártya lejárt. Adj meg egy érvényes lejárati dátumot!';
  }
  return null;
}
function fizetesFeldolgoz(){
  if(!kivalasztottFizetesiMod){ alert('Kérjük, válassz fizetési módot!'); return; }
  if(kivalasztottFizetesiMod === 'kartya'){
    const szam = document.getElementById('kartyaSzam').value.replace(/\s+/g, '');
    const nev = document.getElementById('kartyaNev').value.trim();
    const lejarat = document.getElementById('kartyaLejarat').value;
    const cvv = document.getElementById('kartyaCvv').value;
    if(szam.length < 16){ alert('Kérjük, add meg a teljes kártyaszámot!'); return; }
    if(!nev|| !/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ\s]+$/.test(nev)){ alert('Kérjük, érvényes kártyabirtokos nevet adj meg!'); return; }
    const lejaratiHiba = kartyaLejaratEllenorzes(lejarat);
    if(lejaratiHiba){ alert(lejaratiHiba); document.getElementById('kartyaLejarat').focus(); return; }
    if(!/^\d{3}$/.test(cvv)){ alert('Kérjük, add meg a 3 jegyű CVC/CVV kódot!'); return; }
  }
  szamlaGeneralas();
  oldalMutatas('oldalSzamla');
}

function szamlaGeneralas(){
  const legitarsasag = legitarsasagok.find(a => a.id === kivalasztottLegitarsasag);
  const szoba = szobaTipusok.find(r => r.id === kivalasztottSzoba);
  const vendégek = parseInt(document.getElementById('foglalasLetszam').value) || 2;
  const nev = document.getElementById('foglalasNev').value.trim();
  const email = document.getElementById('foglalasEmail').value.trim();
  const telefon = document.getElementById('foglalasTelefon').value.trim();
  let szallas = null;
  if(kivalasztottSzállás && kivalasztottUtiCel) szallas = kivalasztottUtiCel.kozeli.find(n => n.id === kivalasztottSzállás);
  const ref = 'UV-2026-' + Math.random().toString(36).substring(2, 7).toUpperCase();
  const datum = new Date().toISOString().split('T')[0];

  document.getElementById('szamlaAzonosito').textContent = ref;
  document.getElementById('szamlaDatum').textContent = datum;
  document.getElementById('szamlaUgyfel').textContent = nev;
  document.getElementById('szamlaEmail').textContent = email;
  document.getElementById('szamlaTelefon').textContent = telefon;
  document.getElementById('szamlaUtiCel').textContent = kivalasztottUtiCel.nev;
  document.getElementById('szamlaLetszam').textContent = vendégek + ' fő';

  let tetelek = [];
  tetelek.push({ nev:'Úti cél csomag', reszletek:kivalasztottUtiCel.nev + ' · ' + kivalasztottUtiCel.hely, ar:kivalasztottUtiCel.ar * vendégek });
  if(legitarsasag) tetelek.push({ nev:'Légijegy · ' + legitarsasag.nev, reszletek:vendégek + ' fő · oda-vissza', ar:legitarsasag.ar * vendégek });
  if(szallas) tetelek.push({ nev:'Szállás · ' + szallas.nev, reszletek:'7 éjszaka · ' + szallas.csillag + ' csillag', ar:szallas.ar * 7 });
  if(szoba) tetelek.push({ nev:szoba.nev, reszletek:vendégek + ' fő részére', ar:szoba.ar * vendégek });
  if(kivalasztottJarmu) tetelek.push({ nev:(kivalasztottJarmuTipus === 'boat' ? 'Hajóbérlés · ' : 'Autóbérlés · ') + kivalasztottJarmu.nev, reszletek:kivalasztottJarmu.tipus + ' · 7 nap', ar:kivalasztottJarmu.ar * 7 });

  document.getElementById('szamlaTetelek').innerHTML = tetelek.map(t => `
    <tr>
      <td><strong>${t.nev}</strong></td>
      <td style="color:#6b6b80;font-size:0.85rem;">${t.reszletek}</td>
      <td><strong>${arFormazas(t.ar)}</strong></td>
    </tr>
  `).join('');
  document.getElementById('szamlaOsszeg').textContent = arFormazas(vegsoOsszeg);
  const modNevek = { kartya:'Bankkártya', apple:'Apple Pay', google:'Google Pay', paypal:'PayPal' };
  document.getElementById('szamlaFizetesiMod').textContent = modNevek[kivalasztottFizetesiMod] || '—';
}
function szamlaEmailben(){
  const email = document.getElementById('szamlaEmail').textContent;
  document.getElementById('emailCimzett').textContent = email;
  document.getElementById('emailElkuldveUzenet').classList.add('mutat');
  setTimeout(() => document.getElementById('emailElkuldveUzenet').classList.remove('mutat'), 6000);
}

const indulasDatum = document.getElementById('keresesTol');
const visszautDatum = document.getElementById('keresesIg');

const ma = new Date().toISOString().split('T')[0];

indulasDatum.min = ma;
visszautDatum.min = ma;

indulasDatum.addEventListener('change', function(){
    visszautDatum.min = this.value;
});

kartyakRender();