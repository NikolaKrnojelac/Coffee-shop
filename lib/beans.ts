export type Bean = {
  id: number
  slug: string
  number: string
  country: string
  region: string
  name: string
  story: string
  flavours: string[]
  farm: string
  farmCity: string
  coordinates: string
  altitude: string
  harvest: string
  process: string
  brewMethod: string
  temperature: string
  ratio: string
  grind: string
  time: string
  price: string
  image : string
}

export const beans: Bean[] = [
  {
    id: 1,
    slug: 'yirgacheffe-natural',
    number: 'No. 01',
    country: 'Etiopija',
    region: 'Sidama Region',
    name: 'Yirgacheffe Natural',
    story: 'Plantaža porodice Tadesse na jugu Etiopije, na 1.900 metara nadmorske visine. Zrna suše se na afričkim krevetima 21 dan, što daje intenzivan voćni karakter koji je rijedak u filter kafi.',
    flavours: ['Borovnica', 'Bergamot', 'Tamna čokolada', 'Ljubičica'],
    farm: 'Tadesse Farm',
    farmCity: 'Yirgacheffe, Sidama',
    coordinates: '6.1395° N, 38.2699° E',
    altitude: '1.900m',
    harvest: '2024/25',
    process: 'Natural',
    brewMethod: 'Filter',
    temperature: '92°C',
    ratio: '1:16',
    grind: 'Srednje fino',
    time: '3:30 min',
    price: '€14 / 250g',
    image: '/images/yirgacheffe.jpg',
  },
  {
    id: 2,
    slug: 'huila-washed',
    number: 'No. 02',
    country: 'Kolumbija',
    region: 'Huila',
    name: 'Huila Washed',
    story: 'Porodica Gonzalez uzgaja kafu na strmim padinama departmana Huila, na 1.650 metara. Washed proces znači da se zrno opere i fermentira u vodi 36 sati prije sušenja — rezultat je čista, precizna kafa bez voćne "buke".',
    flavours: ['Crvena jabuka', 'Karamela', 'Lješnjak', 'Narančasta korica'],
    farm: 'Gonzalez Farm',
    farmCity: 'Pitalito, Huila',
    coordinates: '1.8347° N, 76.0494° W',
    altitude: '1.650m',
    harvest: '2024',
    process: 'Washed',
    brewMethod: 'Espresso',
    temperature: '93°C',
    ratio: '1:2',
    grind: 'Fino',
    time: '28 sec',
    price: '€13 / 250g',
    image: '/images/huila.jpg',
  },
  {
    id: 3,
    slug: 'cerrado-pulped',
    number: 'No. 03',
    country: 'Brazil',
    region: 'Minas Gerais',
    name: 'Cerrado Pulped Natural',
    story: 'Fazenda Esperança leži u savani Cerrada, na 1.100 metara — niska visina, ali bogato vulkansko tlo. Pulped natural proces uklanja vanjsku kožicu ali ostavlja dio voćne pulpe na zrnu tokom sušenja.',
    flavours: ['Orasi', 'Med', 'Mliječna čokolada', 'Sušena šljiva'],
    farm: 'Fazenda Esperança',
    farmCity: 'Patrocínio, Minas Gerais',
    coordinates: '18.9408° S, 46.9928° W',
    altitude: '1.100m',
    harvest: '2023/24',
    process: 'Pulped Natural',
    brewMethod: 'Espresso',
    temperature: '91°C',
    ratio: '1:2',
    grind: 'Fino',
    time: '27 sec',
    price: '€12 / 250g',
    image: '/images/cerrado.jpg',
  },
]