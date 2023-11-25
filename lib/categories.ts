import {
	Footprints,
	Plug,
	Shirt,
	Dumbbell,
	HeartPulse,
	Car,
	Sparkle,
	Building2,
} from "lucide-react";

export const electronic = {
	label: "Электроника",
	value: "electric",
	icon: Plug,
	href: "/electric",
	categories: [
		{
			label: "Телефоны и смарт-часы",
			href: "/smarthphones-watch",
			categories: [
				{
					label: "Смартфоны",
					href: "/smarthphones",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/smarthwatch",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electronic-acc",
				},
			],
		},
		{
			label: "Аудиотехника",
			href: "/audio-tech",
			categories: [
				{
					label: "Наушники и гарнитура",
					href: "/headphones-and-headset",
				},
				{
					label: "Акустика и колонки",
					href: "/acoustics-and-speakers",
				},
				{
					label: "Микрофоны и аксессуары",
					href: "/microphones-and-accessories",
				},
			],
		},
		{
			label: "Фото и видеокамеры",
			href: "/foto-i-videokamery",
			categories: [
				{
					label: "Экшн-камеры",
					href: "/action-cameras",
				},
				{
					label: "Фотоаппараты",
					href: "/cameras",
				},
				{
					label: "Объективы",
					href: "/lenses",
				},
			],
		},
		{
			label: "Моноблоки и системные блоки",
			href: "/monoblocks-and-system-blocks",
			categories: [
				{
					label: "Моноблоки",
					href: "/monoblocks",
				},
			],
		},
		{
			label: "Компьютеры и комплектующие",
			href: "/computers-and-accessories",
			categories: [
				{
					label: "Системные блоки",
					href: "/system-blocks",
				},
				{
					label: "Комплектующие для ПК",
					href: "/komplektuushchie-dlya-pk",
				},
				{
					label: "Периферия для компьютеров",
					href: "/computer-peripherals",
				},
			],
		},
		{
			label: "Ноутбуки, планшеты и электронные книги",
			href: "/laptops-tablets-and-e-books",
			categories: [
				{
					label: "Ноутбуки",
					href: "/laptops",
				},
				{
					label: "Планшеты",
					href: "/tablets",
				},
				{
					label: "Электронные книги",
					href: "/e-books",
				},
			],
		},
	],
};

export const beaty = {
	label: "Красота и здоровье",
	value: "beaty",
	icon: HeartPulse,
	href: "/beaty",
	categories: [
		{
			label: "Макияж",
			href: "/makeup",
			categories: [
				{
					label: "Тени",
					href: "/eye-shadow",
				},
				{
					label: "Глаза",
					href: "/glaza",
				},
				{
					label: "Брови",
					href: "/brovi",
				},
			],
		},
		{
			label: "Уход за лицом",
			href: "/face1",
			categories: [
				{
					label: "Косметические массажеры",
					href: "/cosmetic-massagers",
				},
				{
					label: "Патчи",
					href: "/patchi",
				},
				{
					label: "Сыворотки для лица",
					href: "/face_serums",
				},
			],
		},
		{
			label: "Уход за волосами",
			href: "/uhod-za-volosami-krasota",
			categories: [
				{
					label: "Шампуни и кондиционеры",
					href: "/hair-shampoos",
				},
				{
					label: "Маски и сыворотки",
					href: "/maski-i-syvorotki",
				},
				{
					label: "Средства для укладки",
					href: "/sredstva-dlya-ukladki",
				},
			],
		},
		{
			label: "Уход за телом",
			href: "/body-care",
			categories: [
				{
					label: "Гели для душа",
					href: "/geli-dlya-dusha",
				},
				{
					label: "Мыло",
					href: "/mylo",
				},
				{
					label: "Крема",
					href: "/kremy",
				},
			],
		},
		{
			label: "Парфюмерия",
			href: "/parfumeriya",
			categories: [
				{
					label: "Парфюмерная вода",
					href: "/parfumernaya-voda",
				},
				{
					label: "Одеколоны",
					href: "/odekolony",
				},
				{
					label: "Духи",
					href: "/duhi",
				},
			],
		},
		{
			label: "Аппаратная косметология",
			href: "/hardware-cosmetology",
			categories: [
				{
					label: "Косметологические аппараты",
					href: "/kosmetologicheskie-apparaty",
				},
				{
					label: "Массажеры",
					href: "/massajery",
				},
				{
					label: "Контактные гели",
					href: "/kontaktnye-geli",
				},
			],
		},
	],
};

export const sport = {
	label: "Спорт и отдых",
	value: "sport",
	icon: Dumbbell,
	href: "/sport",
	categories: [
		{
			label: "Велоспорт",
			href: "/velosport",
			categories: [
				{
					label: "BMX",
					href: "/bmx",
				},
				{
					label: "Детские велосипеды",
					href: "/childrens_bicycles",
				},
				{
					label: "Подростковые велосипеды",
					href: "/teen_bikes",
				},
			],
		},
		{
			label: "Самокаты, скейтборды и электротранспорт",
			href: "/samokaty-skeitbordy-i-eklektrotransport",
			categories: [
				{
					label: "Самокаты",
					href: "/samokaty",
				},
				{
					label: "Скейтборды",
					href: "/skeitbordy",
				},
				{
					label: "Электросамокаты",
					href: "/elektrosamokaty",
				},
			],
		},
		{
			label: "Бег",
			href: "/run",
			categories: [
				{
					label: "Обувь и аксессуары для бега",
					href: "/obuv-i-aksessuary-dlya-bega",
				},
				{
					label: "Одежда для бега",
					href: "/odejda-dlya-bega",
				},
				{
					label: "Поясные сумки и рюкзаки-гидраторы для бега",
					href: "/poyasnye-sumki-i-rukzaki-gidratory-dlya-bega",
				},
			],
		},
		{
			label: "Бокс и боевые искусства",
			href: "/boks-i-boevye-iskusstva",
			categories: [
				{
					label: "Боксерские груши, мешки и манекены",
					href: "/bokserskie-grushi-meshki-i-manekeny",
				},
				{
					label: "Боксерские лапы, макивары и ракетки",
					href: "/bokserskie-lapy-makivary-i-raketki",
				},
				{
					label: "Защита для единоборств",
					href: "/zashchita-dlya-edinoborstv",
				},
			],
		},
		{
			label: "Тренажеры и фитнес",
			href: "/exercise-equipment-fitness",
			categories: [
				{
					label: "Кардиотренажеры",
					href: "/kardiotrenajery",
				},
				{
					label: "Оборудование для фитнеса",
					href: "/oborudovanie-dlya-fitnesa",
				},
				{
					label: "Силовые тренажеры",
					href: "/silovye-trenajery",
				},
			],
		},
		{
			label: "Водные виды спорта",
			href: "/vodnye-vidy-sporta",
			categories: [
				{
					label: "SUP-серфинг",
					href: "/sup-serfing",
				},
				{
					label: "Виндсерфинг",
					href: "/vindserfing",
				},
				{
					label: "Водное поло",
					href: "/vodnoe-polo",
				},
			],
		},
	],
};

export const clothes = {
	label: "Одежда",
	value: "clothes",
	icon: Shirt,
	href: "/clothes",
	categories: [
		{
			label: "Женщинам",
			href: "/jenshchinam",
			categories: [
				{
					label: "Верхняя одежда",
					href: "/jenskaya-verhnyaya-odejda",
				},
				{
					label: "Свитеры, джемперы и кардиганы",
					href: "/jenskie-svitery-djempery-i-kardigany",
				},
				{
					label: "Термобелье",
					href: "/jenskoe-termobele",
				},
			],
		},
		{
			label: "Мужчинам",
			href: "/mujchinam",
			categories: [
				{
					label: "Верхняя одежда",
					href: "/mujskaya-verhnyaya-odejda",
				},
				{
					label: "Свитеры, джемперы и кардиганы",
					href: "/mujskie-svitery-djempery-i-kardigany",
				},
				{
					label: "Футболки и майки",
					href: "/mujskie-futbolki-i-maiki",
				},
			],
		},
		{
			label: "Детям",
			href: "/children-clothes",
			categories: [
				{
					label: "Девочкам",
					href: "/girls",
				},
				{
					label: "Мальчикам",
					href: "/for-boys",
				},
				{
					label: "Новорожденным",
					href: "/newborn",
				},
			],
		},
		{
			label: "Спецодежда",
			href: "/overalls",
			categories: [
				{
					label: "Спецодежда рабочая",
					href: "/working-overalls",
				},
				{
					label: "Медицинская одежда",
					href: "/medical-clothing",
				},
				{
					label: "Сигнальная одежда",
					href: "/signal-clothing",
				},
			],
		},
		{
			label: "Стоковая одежда",
			href: "/stokovaya-odejda",
			categories: [
				{
					label: "Сток мужской одежды",
					href: "/stok-mujskoi-odejdy",
				},
				{
					label: "Сток женской одежды",
					href: "/stok-jenskoi-odejdy",
				},
				{
					label: "Сток детской одежды",
					href: "/stok-detskoi-odejdy",
				},
			],
		},
	],
};

export const shoes = {
	label: "Обувь",
	value: "shoes",
	icon: Footprints,
	href: "/shoes",
	categories: [
		{
			label: "Женщинам",
			href: "/jenshchinam-obuv",
			categories: [
				{
					label: "Кроссовки и кеды",
					href: "/jenskie-krossovki-i-kedy",
				},
				{
					label: "Туфли",
					href: "/jenskie-tufli",
				},
				{
					label: "Мокасины, лоферы и топсайдеры",
					href: "/jenskie-mokasiny-lofery-i-topsaidery",
				},
			],
		},
		{
			label: "Мужчинам",
			href: "/mujchinam-obuv",
			categories: [
				{
					label: "Ботинки и полуботинки",
					href: "/mujskie-botinki-i-polubotinki",
				},
				{
					label: "Кеды, кроссовки и слипоны",
					href: "/mujskie-kedy-krossovki-i-slipony",
				},
				{
					label: "Сапоги и полусапоги",
					href: "/mujskie-sapogi-i-polusapogi",
				},
			],
		},
		{
			label: "Детям",
			href: "/detyam-obuv",
			categories: [
				{
					label: "Девочкам",
					href: "/devochkam",
				},
				{
					label: "Мальчикам",
					href: "/malchikam",
				},
				{
					label: "Новорожденным",
					href: "/novorojdennym",
				},
			],
		},
		{
			label: "Уход и аксессуары",
			href: "/uhod-i-aksessuary",
			categories: [
				{
					label: "Защита для обуви",
					href: "/zashchita-dlya-obuvi",
				},
				{
					label: "Чехлы на обувь",
					href: "/chehly-na-obuv",
				},
				{
					label: "Губки",
					href: "/gubki",
				},
			],
		},
		{
			label: "Стоковая обувь",
			href: "/stokovaya-obuv",
			categories: [
				{
					label: "Сток женской обуви",
					href: "/stok-jenskoi-obuvi",
				},
				{
					label: "Сток мужской обуви",
					href: "/stok-mujskoi-obuvi",
				},
				{
					label: "Сток обуви микс",
					href: "/stok-obuvi-miks",
				},
			],
		},
	],
};

export const autoproducts = {
	label: "Автотовары",
	value: "autoproducts",
	icon: Car,
	href: "/autoproducts",
	categories: [
		{
			label: "Масла и технические жидкости",
			href: "/masla-i-tehnicheskie-jidkosti",
			categories: [
				{
					label: "Индустриальные масла",
					href: "/industrialnye-masla",
				},
				{
					label: "Моторные масла",
					href: "/motornye-masla",
				},
				{
					label: "Трансмиссионные масла",
					href: "/transmissionnye-masla",
				},
			],
		},
		{
			label: "Шины и диски",
			href: "/tires-rims",
			categories: [
				{
					label: "Аксессуары для шин",
					href: "/aksessuary-dlya-shin",
				},
				{
					label: "Датчики давления в шинах",
					href: "/datchiki-davleniya-v-shinah",
				},
				{
					label: "Диски",
					href: "/diski",
				},
			],
		},
		{
			label: "Автоэлектроника",
			href: "/avtoelektronika",
			categories: [
				{
					label: "GPS-навигация",
					href: "/gps-navigaciya",
				},
				{
					label: "Алкотестеры",
					href: "/alkotestery",
				},
				{
					label: "Видеорегистраторы",
					href: "/videoregistratory",
				},
			],
		},
		{
			label: "Уход за автомобилем",
			href: "/car-care",
			categories: [
				{
					label: "Ароматизаторы",
					href: "/aromatizatory",
				},
				{
					label: "Воски и полироли",
					href: "/voski-i-poliroli",
				},
				{
					label: "Жидкости для стеклоомывателя и вода",
					href: "/jidkosti-dlya-stekloomyvatelya-i-voda",
				},
			],
		},
		{
			label: "Аксессуары для автомобилей",
			href: "/aksessuary-dlya-avtomobilei",
			categories: [
				{
					label: "Аварийные принадлежности",
					href: "/avariinye-prinadlejnosti",
				},
				{
					label: "Амортизаторы капота и багажника",
					href: "/amortizatory-kapota-i-bagajnika",
				},
				{
					label: "Багажные системы",
					href: "/bagajnye-sistemy",
				},
			],
		},
		{
			label: "Автозапчасти",
			href: "/auto-parts",
			categories: [
				{
					label: "Автосвет",
					href: "/auto-light",
				},
				{
					label: "Генераторы",
					href: "/generatory",
				},
				{
					label: "Датчики",
					href: "/datchiki",
				},
			],
		},
	],
};

export const build = {
	label: "Строительство",
	value: "build",
	icon: Building2,
	href: "/build",
	categories: [
		{
			label: "Инструменты",
			href: "/instruments",
			categories: [
				{
					label: "Электроинструменты",
					href: "/power-tools",
				},
				{
					label: "Запчасти и аксессуары для инструмента",
					href: "/spare-parts-and-accessories-for-the-tool",
				},
				{
					label: "Наборы инструментов",
					href: "/toolkits",
				},
			],
		},
		{
			label: "Сантехника",
			href: "/plumbing",
			categories: [
				{
					label: "Раковины, умывальники и пьедесталы",
					href: "/rakoviny-umyvalniki-i-pedestaly",
				},
				{
					label: "Кухонные мойки",
					href: "/kuhonnye-moiki",
				},
				{
					label: "Души и душевые кабинки",
					href: "/dushi-i-dushevye-kabinki",
				},
			],
		},
		{
			label: "Водоснабжение",
			href: "/water-supply",
			categories: [
				{
					label: "Водоочистка и фильтры",
					href: "/vodoochistka-i-filtry",
				},
				{
					label: "Трубы и водоснабжение",
					href: "/truby-i-vodosnabjenie",
				},
				{
					label: "Запорная и регулирующая арматура",
					href: "/zapornaya-i-reguliruushchaya-armatura",
				},
			],
		},
		{
			label: "Строительные материалы",
			href: "/construction-materials",
			categories: [
				{
					label: "Строительные смеси",
					href: "/stroitelnye-smesi",
				},
				{
					label: "Строительные блоки",
					href: "/stroitelnye-bloki",
				},
				{
					label: "Изоляционные покрытия и материалы",
					href: "/izolyacionnye-pokrytiya-i-materialy",
				},
			],
		},
		{
			label: "Двери, окна и комплектующие",
			href: "/dveri-okna-i-komplektuushchie",
			categories: [
				{
					label: "Двери",
					href: "/dveri",
				},
				{
					label: "Ручки, замки и фурнитура",
					href: "/ruchki-zamki-i-furnitura",
				},
				{
					label: "Окна",
					href: "/okna",
				},
			],
		},
		{
			label: "Электрика",
			href: "/electrician",
			categories: [
				{
					label: "Автоматика",
					href: "/avtomatika",
				},
				{
					label: "Кабели и провода",
					href: "/kabeli-i-provoda",
				},
				{
					label: "Кабеленесущие системы",
					href: "/kabelenesushchie-sistemy",
				},
			],
		},
	],
};

export const others = {
	label: "Аксессуары",
	value: "others",
	icon: Sparkle,
	href: "/others",
	categories: [
		{
			label: "Женщинам",
			href: "/jenshchinam-aksessuary",
			categories: [
				{
					label: "Сумки",
					href: "/jenskie-sumki",
				},
				{
					label: "Рюкзаки",
					href: "/jenskie-rukzaki",
				},
				{
					label: "Головные уборы",
					href: "/jenskie-golovnye-ubory",
				},
			],
		},
		{
			label: "Мужчинам",
			href: "/mujchinam-aksessuary",
			categories: [
				{
					label: "Спортивные аксессуары",
					href: "/mujskie-sportivnye-aksessuary",
				},
				{
					label: "Сумки",
					href: "/mujskie-sumki",
				},
				{
					label: "Рюкзаки",
					href: "/mujskie-rukzaki",
				},
			],
		},
		{
			label: "Детям",
			href: "/for-children-aksessuary",
			categories: [
				{
					label: "Девочкам",
					href: "/girls-acc",
				},
				{
					label: "Мальчикам",
					href: "/for-boys-acc",
				},
				{
					label: "Видеокамеры и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Путешествия",
			href: "/travels",
			categories: [
				{
					label: "Багаж",
					href: "/baggage",
				},
				{
					label: "Аксессуары для путешествий",
					href: "/travel-accessories",
				},
			],
		},
		{
			label: "Стоковые аксессуары",
			href: "/stokovye-aksessuary",
			categories: [
				{
					label: "Сток женских аксессуаров",
					href: "/stok-jenskih-aksessuarov",
				},
				{
					label: "Сток мужских аксессуаров",
					href: "/stok-mujskih-aksessuarov",
				},
				{
					label: "Сток аксессуаров микс",
					href: "/stok-aksessuarov-miks",
				},
			],
		},
	],
};
