const initialState = {
  user: {},
  cart: [],
  productsByCategory: "",
  products: [
      {
        id: "1",
        title: "El pollo volador",
        image: "https://live.staticflickr.com/46/132554707_97e9e0f1c4_w.jpg",
        categories: ["pizza", "bbq", "chicken"],
        inStock: 1,
        buyingPrice: 1,
        sellingPrice: 2.33,
        description: "BBQ Chicken Pizza",
      },
      {
        id: "2",
        title: "Hongos para volar",
        image: "https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg",
        categories: ["pizza", "Mushroom"],
        inStock: 1,
        buyingPrice: 5,
        sellingPrice: 9.57,
        description: "Mushroom pizza",
      },
      {
        id: "3",
        title: "Salchichón brutal",
        image: "https://live.staticflickr.com/8215/8314519232_af6b7bed29_t.jpg",
        categories: ["pizza"],
        inStock: 1,
        buyingPrice: 3,
        sellingPrice: 5.29,
        description: "Salami pizza",
      },
      {
        id: "4",
        title: "Barquito de Chocolate",
        image: "https://live.staticflickr.com/1646/26680445546_9086b7cd27_t.jpg",
        categories: ["dessert"],
        inStock: 1,
        buyingPrice: 3,
        sellingPrice: 7.02,
        description: "Chocolate con nueces",
      },
      {
        id: "5",
        title: "Don't worry its low fat",
        image: "https://live.staticflickr.com/2083/1616104514_8c12518912_t.jpg",
        categories: ["burger"],
        inStock: 1,
        buyingPrice: 0.5,
        sellingPrice: 2.00,
        description: "West-ward Pharmaceutical Corp",
      },
      {
        id: "6",
        title: "Tradicional Sushi",
        image: "https://live.staticflickr.com/729/32762213142_fb28993753_t.jpg",
        categories: ["sushi"],
        inStock: 1,
        buyingPrice: 11.30,
        sellingPrice: 15.00,
        description: "Dos variantes básicas de sushi",
      },
      {
        id: "7",
        title: "Coffee Hearts",
        image: "https://live.staticflickr.com/6183/6083139179_728921bccc.jpg",
        categories: ["drink"],
        inStock: 1,
        buyingPrice: 1,
        sellingPrice: 1.60,
        description: "Capuchino de corazones",
      },
      {
        id: "8",
        title: "Artabria postre",
        image: "https://live.staticflickr.com/3065/3064798535_1aab23750c_t.jpg",
        categories: ["dessert"],
        inStock: 1,
        buyingPrice: 1.8,
        sellingPrice: 5.24,
        description: "milhoja de mascarpone con fresas y salsa de frambuesa",
      },
      {
        id: "9",
        title: "Fanta Naranja - lata",
        image: "https://live.staticflickr.com/8509/8563942072_01b5850567_t.jpg",
        categories: ["drink"],
        inStock: 1,
        buyingPrice: 3,
        sellingPrice: 3.24,
        description: "Fanta Naranja en lata 250ml",
      },
      ,
      {
        id: "10",
        title: "Camaron en la nube voladora",
        image: "https://live.staticflickr.com/5464/8960691111_6bae8ae117_t.jpg",
        categories: ["sushi"],
        inStock: 1,
        buyingPrice: 7.0,
        sellingPrice: 10.00,
        description: "Camaron sobre arroz y cinta dulce",
      },
      ,
      {
        id: "11",
        title: "Mini spicy burger",
        image: "https://live.staticflickr.com/8863/18127010258_36f7c87c63_t.jpg",
        categories: ["burger"],
        inStock: 1,
        buyingPrice: 1.7,
        sellingPrice: 6.00,
        description: "Pequeñas hamburguesas picantes x2",
      },
      {
        id: "12",
        title: "Hongos para volar doble",
        image: "https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg",
        categories: ["pizza", "Mushroom"],
        inStock: 1,
        buyingPrice: 0.5,
        sellingPrice: 18.20,
        description: "Mushroom pizza doble diámetro",
      }
  ],
  categories: [
    {
      id: "pizza",
      title: "PIZZA",
      logo: "https://live.staticflickr.com/3618/3495871394_b779997772_t.jpg"
    },
    {
      id: "dessert",
      title: "DESSERTS",
      logo: "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg"
    },
    {
      id: "burger",
      title: "BURGERS",
      logo: "https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_t.jpg"
    },
    {
      id: "bowl",
      title: "BOWLS",
      logo: "https://live.staticflickr.com/7187/6968734877_ea96b6f678_t.jpg"
    },
    {
      id: "sushi",
      title: "SUSHI",
      logo: "https://live.staticflickr.com/5552/15282573441_2f6e4ef876_t.jpg"
    },
    {
      id: "drink",
      title: "DRINKS",
      logo: "https://cdn.pixabay.com/photo/2018/04/08/13/17/glass-3301200_960_720.jpg"
    },
  ],
};

export default initialState;
