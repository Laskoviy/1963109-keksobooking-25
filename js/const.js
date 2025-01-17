const GET_LINK = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_LINK = 'https://25.javascript.pages.academy/keksobooking';
const HOTELS_COUNT = 10;
const LAT_START = 35.65;
const LAT_END = 35.7;
const LNG_START = 139.7;
const LNG_END = 139.8;
const BUILDINGS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const TYPE_OF_ROOM = ['standart', 'comfort', 'luxe', 'president'];
const FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_EXAMPLES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const MAX_GUESTS = '100';
const MAIN_MARKER_PATH = './img/main-pin.svg';
const MARKER_PATH = './img/pin.svg';
const HOTEL_MIN_PRICE = 3000;
const BUNGALOW_MIN_PRICE = 0;
const FLAT_MIN_PRICE = 1000;
const HOUSE_MIN_PRICE = 5000;
const PALACE_MIN_PRICE = 10000;
const DEFAULT_COORDINATES = {
  defaultLat: 35.68950,
  defaultLng: 139.69171,
};
// Адрес по умолчанию
const MAIN_MARKER_SIZE = [52, 52];
const MARKER_SIZE = [40, 40];
const OFFER_MIN_PRICE = 1000;
const OFFER_MAX_PRICE = 1000000;
const OFFER_MIN_ROOMS = 1;
const OFFER_MAX_ROOMS = 10;
const OFFER_MIN_GUESTS = 1;
const OFFER_MAX_GUESTS = 10;
const MARKERS_COUNT = 10;
const DELAY = 500;
const TITLE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TITLE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


export {
  TITLE_LAYER_URL, TITLE_LAYER_ATTRIBUTION, DELAY, MARKERS_COUNT, POST_LINK, GET_LINK, OFFER_MIN_GUESTS, OFFER_MAX_GUESTS, OFFER_MIN_ROOMS, OFFER_MAX_ROOMS, OFFER_MIN_PRICE, OFFER_MAX_PRICE, MAIN_MARKER_SIZE, MARKER_SIZE, HOTELS_COUNT, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE, MAIN_MARKER_PATH, MARKER_PATH, DEFAULT_COORDINATES, LAT_START, LAT_END, LNG_START, LNG_END, BUILDINGS, CHECK_TIME, TYPE_OF_ROOM, FACILITIES, PHOTO_EXAMPLES, MAX_GUESTS
};
