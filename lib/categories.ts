import {
	Footprints,
	LampCeiling,
	Plug,
	Shirt,
	Home,
	Dumbbell,
	HeartPulse,
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
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Мужчинам",
			href: "/mujchinam",
			categories: [
				{
					label: "Наушники и гарнитура",
					href: "/electric",
				},
				{
					label: "Акустика и колонки",
					href: "/electric",
				},
				{
					label: "Микрофоны и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Детям",
			href: "/children-clothes",
			categories: [
				{
					label: "Экшн-камеры",
					href: "/electric",
				},
				{
					label: "Объективы",
					href: "/electric",
				},
				{
					label: "Видеокамеры и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Спецодежда",
			href: "/overalls",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Стоковая одежда",
			href: "/stokovaya-odejda",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
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
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Мужчинам",
			href: "/mujchinam-obuv",
			categories: [
				{
					label: "Экшн-камеры",
					href: "/electric",
				},
				{
					label: "Объективы",
					href: "/electric",
				},
				{
					label: "Видеокамеры и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Детям",
			href: "/detyam-obuv",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Уход и аксессуары",
			href: "/uhod-i-aksessuary",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Стоковая обувь",
			href: "/stokovaya-obuv",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
	],
};

export const bytovia = {
	label: "Бытовая техника",
	value: "bytovia",
	icon: Home,
	href: "/bytovia",
	categories: [
		{
			label: "Крупная бытовая техника",
			href: "/large-home-appliances",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для дома",
			href: "/home-appliances",
			categories: [
				{
					label: "Наушники и гарнитура",
					href: "/electric",
				},
				{
					label: "Акустика и колонки",
					href: "/electric",
				},
				{
					label: "Микрофоны и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для общепита",
			href: "/catering-equipment",
			categories: [
				{
					label: "Экшн-камеры",
					href: "/electric",
				},
				{
					label: "Объективы",
					href: "/electric",
				},
				{
					label: "Видеокамеры и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для кухни",
			href: "/kitchen-appliances",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для красоты и здоровья",
			href: "/equipment-for-beauty-and-health",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Климатическая техника",
			href: "/air-conditioning-equipment",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
	],
};

export const house = {
	label: "Дом и сад",
	value: "house",
	icon: LampCeiling,
	href: "/house",
	categories: [
		{
			label: "Текстиль для дома",
			href: "/tekstil-dlya-doma",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Освещение",
			href: "/lighting",
			categories: [
				{
					label: "Наушники и гарнитура",
					href: "/electric",
				},
				{
					label: "Акустика и колонки",
					href: "/electric",
				},
				{
					label: "Микрофоны и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Хозяйственные товары",
			href: "/household-goods",
			categories: [
				{
					label: "Экшн-камеры",
					href: "/electric",
				},
				{
					label: "Объективы",
					href: "/electric",
				},
				{
					label: "Видеокамеры и аксессуары",
					href: "/electric",
				},
			],
		},
		{
			label: "Запчасти для бытовой техники",
			href: "/appliances-parts",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для красоты и здоровья",
			href: "/equipment-for-beauty-and-health",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
		{
			label: "Техника для общепита",
			href: "/catering-equipment",
			categories: [
				{
					label: "Смартфоны",
					href: "/electric",
				},
				{
					label: "Смарт-часы и фитнес-браслеты",
					href: "/electric",
				},
				{
					label: "Аксессуары для смартфонов и телефонов",
					href: "/electric",
				},
			],
		},
	],
};
