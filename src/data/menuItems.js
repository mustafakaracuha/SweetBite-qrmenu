const menuItems = [
    // TATLI
    {
        id: 1,
        category: "TATLI",
        name: "Tatlı Çeşitleri",
        price: 100,
        description: "Lezzetli tatlılar, çikolatalı, muzlu..",
    },


    // SICAK İÇECEKLER
    {
        id: 3,
        category: "SICAK İÇECEKLER",
        name: "Türk Kahvesi",
        price: 40,
        description: "Klasik Türk kahvesi, ince çekilmiş kahve ile hazırlanır.",
    },
    {
        id: 4,
        category: "SICAK İÇECEKLER",
        name: "Dibek Kahvesi",
        price: 40,
        description: "Özel taş havanda dövülerek hazırlanan aromatik kahve.",
    },
    {
        id: 5,
        category: "SICAK İÇECEKLER",
        name: "Menengiç Kahvesi",
        price: 50,
        description: "Menengiç bitkisinden elde edilen, sağlıklı ve lezzetli kahve.",
    },
    {
        id: 6,
        category: "SICAK İÇECEKLER",
        name: "Osmanlı Kahvesi",
        price: 50,
        description: "Özel baharatlarla tatlandırılmış geleneksel Osmanlı kahvesi.",
    },
    {
        id: 7,
        category: "SICAK İÇECEKLER",
        name: "Sahlep",
        price: 60,
        description: "Kış aylarının vazgeçilmezi, sıcak ve lezzetli sahlep.",
    },
    {
        id: 8,
        category: "SICAK İÇECEKLER",
        name: "Adacayı",
        price: 50,
        description: "Doğal ve rahatlatıcı adaçayı.",
    },
    {
        id: 9,
        category: "SICAK İÇECEKLER",
        name: "Kış Çayı",
        price: 50,
        description: "Soğuk günlerde iç ısıtan özel karışım kış çayı.",
    },
    {
        id: 10,
        category: "SICAK İÇECEKLER",
        name: "Papatya Çayı",
        price: 50,
        description: "Rahatlatıcı ve hafif papatya çayı.",
    },
    {
        id: 11,
        category: "SICAK İÇECEKLER",
        name: "Sıcak Çikolata",
        price: 60,
        description: "Zengin çikolata aromasıyla sıcak içecek.",
    },
    {
        id: 12,
        category: "SICAK İÇECEKLER",
        name: "Expresso",
        price: 65,
        description: "Yoğun ve aromatik klasik espresso.",
    },
    {
        id: 13,
        category: "SICAK İÇECEKLER",
        name: "Latte",
        price: 65,
        description: "Espresso ve sıcak sütün mükemmel birleşimi.",
    },
    {
        id: 14,
        category: "SICAK İÇECEKLER",
        name: "Cappuccino",
        price: 65,
        description: "Espresso, sıcak süt ve süt köpüğünden oluşan klasik içecek.",
    },
    {
        id: 15,
        category: "SICAK İÇECEKLER",
        name: "Karamel",
        price: 65,
        description: "Karamel aromalı sıcak içecek.",
    },
    {
        id: 16,
        category: "SICAK İÇECEKLER",
        name: "Yeşil Çay",
        price: 50,
        description: "Sağlıklı ve doğal yeşil çay.",
    },
    {
        id: 17,
        category: "SICAK İÇECEKLER",
        name: "Ihlamur",
        price: 50,
        description: "Rahatlatıcı ve ferahlatıcı ıhlamur çayı.",
    },
    {
        id: 18,
        category: "SICAK İÇECEKLER",
        name: "K. Meyve Çayı",
        price: 50,
        description: "Karışık meyve aromalarıyla zenginleştirilmiş çay.",
    },
    {
        id: 19,
        category: "SICAK İÇECEKLER",
        name: "Double Ex",
        price: 75,
        description: "Ekstra yoğun ve güçlü double espresso.",
    },
    {
        id: 20,
        category: "SICAK İÇECEKLER",
        name: "Americano",
        price: 60,
        description: "Espresso ve sıcak su ile hazırlanan hafif kahve.",
    },
    {
        id: 21,
        category: "SICAK İÇECEKLER",
        name: "D. Sakız Türk Kahvesi",
        price: 50,
        description: "Damla sakızlı Türk kahvesi.",
    },
    {
        id: 22,
        category: "SICAK İÇECEKLER",
        name: "S. Beyaz Çikolata",
        price: 60,
        description: "Sıcak beyaz çikolata içeceği.",
    },
    {
        id: 23,
        category: "SICAK İÇECEKLER",
        name: "S. Nescafe",
        price: 60,
        description: "Sıcak nescafe içeceği.",
    },



    // SOĞUK İÇECEKLER
    {
        id: 24,
        category: "SOĞUK İÇECEKLER",
        name: "Cola",
        price: 40,
        description: "Serinletici gazlı içecek.",
    },
    {
        id: 25,
        category: "SOĞUK İÇECEKLER",
        name: "Limonata",
        price: 50,
        description: "Ferahlatıcı ve taze limonata.",
    },
    {
        id: 26,
        category: "SOĞUK İÇECEKLER",
        name: "Ice Americano",
        price: 50,
        description: "Buzlu, serinletici Amerikan kahvesi.",
    },
    {
        id: 27,
        category: "SOĞUK İÇECEKLER",
        name: "Ice Latte",
        price: 65,
        description: "Buzlu süt ve espresso karışımı.",
    },
    {
        id: 28,
        category: "SOĞUK İÇECEKLER",
        name: "Fanta",
        price: 40,
        description: "Meyve aromalı gazlı içecek.",
    },
    {
        id: 29,
        category: "SOĞUK İÇECEKLER",
        name: "Sade Soda",
        price: 25,
        description: "Doğal maden suyu.",
    },
    {
        id: 30,
        category: "SOĞUK İÇECEKLER",
        name: "M. Soda",
        price: 30,
        description: "Meyve aromalı maden suyu.",
    },
    {
        id: 31,
        category: "SOĞUK İÇECEKLER",
        name: "RedBull",
        price: 60,
        description: "Enerji içeceği.",
    },
    {
        id: 32,
        category: "SOĞUK İÇECEKLER",
        name: "Ayran",
        price: 30,
        description: "Geleneksel Türk yoğurt içeceği.",
    },
    {
        id: 33,
        category: "SOĞUK İÇECEKLER",
        name: "Su",
        price: 15,
        description: "Temiz içme suyu.",
    },
    {
        id: 34,
        category: "SOĞUK İÇECEKLER",
        name: "Churcill",
        price: 40,
        description: "Limon ve soda karışımı serinletici içecek.",
    },



    // NARGİLE
    {
        id: 35,
        category: "NARGİLE",
        name: "Klasik",
        price: 170,
        description: "Geleneksel nargile deneyimi.",
    },
    {
        id: 36,
        category: "NARGİLE",
        name: "Blonde",
        price: 150,
        description: "Hafif aromalı ve pürüzsüz içimli nargile.",
    },
    {
        id: 37,
        category: "NARGİLE",
        name: "Dark",
        price: 250,
        description: "Yoğun aromalı ve güçlü içimli nargile.",
    },

    

    // DONDURMA
    {
        id: 38,
        category: "DONDURMA",
        name: "Milkshake",
        price: 100,
        description: "Süt ve dondurma ile hazırlanan soğuk içecek.",
    },
    {
        id: 39,
        category: "DONDURMA",
        name: "Dondurma",
        price: 30,
        description: "Çeşitli aromalarda lezzetli dondurma.",
    },
    {
        id: 40,
        category: "DONDURMA",
        name: "Extra Fındık",
        price: 40,
        description: "Dondurmanıza ekstra lezzet katacak fındık.",
    },
    {
        id: 41,
        category: "DONDURMA",
        name: "Extra Limon",
        price: 105,
        description: "Ferahlık sağlayan limon aroması.",
    },
];

export default menuItems;
