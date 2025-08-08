const saleItems = [


    {
        id: 1,
        name: "Galaxy  Slippers", price: 5.99,
        image: "./images/blueslip.webp",
        tags: ["shoes", "slipper", "sparkle"],
        description: "Magnificant Blue Sparkle slippers (Sizes 0-6) Look like a princess in these glam slippers "
    },
    {
        id: 2,
        name: "ButterFly Clips", price: .99,
        image: "./images/clip2.jpg",
        tags: ["hair", "clips", "butterfly", "hair stuff"],
        description: " ButterFly hair clips All Different Colors ",

    },
    {
        id: 3,
        name: "Kitty Clips", price: .99,
        image: "./images/hellokity.webp",
        tags: ["hair", "clips", "butterfly", "hair stuff", "hello kitty", 'cat', 'kitty'],
        description: " 2 Cute Hello Kitty clips ",

    },

    {
        id: 4,
        name: "Chakra Bracelet", price: 1.99,
        image: "./images/purple-chakra-bracelet.jpg",
        tags: ["beads", "jewelry", "bracelet",],
        description: "Chakra Energy beads ",
    },
    {
        id: 5,
        name: "Travel Bag", price: 3.99,
        image: "./images/glovela.webp",
        tags: ["bags", "backpack", "glovela", "travel", "pink", "bag", "purse"],
        description: "Soft,Plush,made for travel",
    },
    {
        id: 6,
        name: "Custom Purses", price: 7.99,
        image: "./images/namepurse.webp",
        tags: ["purse", "bag", "travel", "custom", "name"],
        description: "Personlize With your Name Pink or Blue"
    },

    {
        id: 7,
        name: "Giirrlly Scrunchies", price: .99,
        image: "./images/hair-scrunchies.png",
        tags: ["scrunchies", "hair", "brush", "clips", "hair ties",],
        description: "Hair Scrunchies to secure your hair(buy all 6)",
    },
    {
        id: 8,
        name: "Pinguin Purse", price: 4.99,
        image: "./images/pinguin.jpg",
        tags: ["purse", "pinuin", "bird", "travel", "bag", "backpack", "animal", "pink"],
        description: "Cute little Birdie purse,Select your color when you order"
    },
    {
        id: 9,
        name: "Golden Deer Purse", price: 15.99,
        image: "./images/pinkpurse2.jpg",
        tags: ["purse", "deer", "animal", "travel", "bag", "backpack", "pink"],
        description: "Bambie Inspired Purse, faux leather ,"
    },
    {
        id: 10,
        name: " Coconut Lotion ", price: 8.00,
        image: "./images/babylotion.webp",
        tags: ["skin", "lotion", "dryskin", "face", "body lotion", "baby lotion", "oil"],
        description: "Suave coconut Lotion 20oz"
    },
    {
        id: 11,
        name: "CupCake Sweater", price: 6.00,
        image: "./images/cupcake_sweater.jpg",
        tags: ['clothes', 'shirt', 'sweater', 'cupcake', 'cold', 'candy', 'winter'],
        description: "Wool Sweater All sizes",

    },
    {
        id: 12,
        name: "Make up set ", price: 25.00,
        image: "./images/makeup8.webp",
        tags: ['animal', 'cat', 'kitten', 'purse', 'bag', 'travel', 'pink', 'set'],
        description: " Washable makeup set "
    },
    {
        id: 13,
        name: "Bonsai Curls ", price: 3.00,
        image: "./images/bonsaiKids.jpg",
        tags: ['hair', 'shampoo', 'conditioner', 'wash', 'rinse', 'comb', 'brush', 'clips'],
        description: "Bonsai shampoo and conditioner "
    },
    {
        id: 14,
        name: "Super Nail Kit ", price: 4.00,
        image: "./images/supernails.webp",
        tags: ['nails', 'kit', 'set', 'press on', 'super', 'cool',],
        description: "Cool super nails kit"
    },
    {
        id: 15,
        name: "YummyLips Gloss ", price: 7.00,
        image: "./images/yummyLips1.jpg",
        tags: ['gloss', 'lip', 'lipgloss', 'lipstick', 'yummy', 'collection'],
        description: "Lip gloss collection get them ALL(6 pieces) "
    },
    {
        id: 16,
        name: "Complete Make Up ", price: 20.00,
        image: "./images/supernailkit.webp",
        tags: ['nail', 'kit', 'nail kit'],
        description: " Washable Make up kit 100pieces"
    },
    {
        id: 17,
        name: "Scrunchie Bow ", price: 2.00,
        image: "./images/bow.jpg",
        tags: ['hair', 'bow', 'scrunchie', 'hair tie'],
        description: "2 piece hair bow set ",
    },
    {
        id: 18,
        name: "Blossom clips ", price: 1.00,
        image: "./images/Cherryblossom-lp.webp",
        tags: ['hair', 'bow', 'scrunchie', 'hair tie', "hair Clips"],
        description: "Stylish Hair clips set of 2",
    },
    {
        id: 19,
        name: "Sun Bum ", price: 3.99,
        image: "./images/sunscreen.webp",
        tags: ['hair', 'bow', 'scrunchie', 'hair tie', "hair Clips"],
        description: "Protect Youir SKin with sun block 20oz",
    },
    {
        id: 20,
        name: "Footies", price: 3.99,
        image: "./images/sock3.jpg",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "Multi-color Footies 4 pair",
    },
    {
        id: 21,
        name: "Fashion Watch", price: 10.00,
        image: "./images/$10watch.jpg",
        tags: ['watch', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'time', 'braclet', 'jewelery', 'gold', 'diamonds'],
        description: "Girrly Fashion watch lifetime warranty",
    },
    {
        id: 22,
        name: "Pink Watch", price: 10.00,
        image: "./images/watch2.webp",
        tags: ['watch', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'time', 'braclet', 'jewelery', 'gold', 'diamonds'],
        description: " Colorful sport watch, lifetime warranty"
    },
    {
        id: 23,
        name: "Heart Watch Set", price: 12.00,
        image: "./images/watchset.jpg",
        tags: ['watch', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'time', 'braclet', 'jewelery', 'gold', 'diamonds'],
        description: " Watch, Braclet , and heart bangle set ",

    },
    {
        id: 24,
        name: "Salon Kit", price: 20.00,
        image: "./images/salonkit.webp",
        tags: ['hair', 'lotion', 'nails', 'salon', 'blow dryer'],
        description: "Complete salon set! ",
    },
    {
        id: 25,
        name: "Sun Dress", price: 20.00,
        image: "./images/purpsundress.webp",
        tags: ['hair', 'lotion', 'nails', 'salon', 'blow dryer'],
        description: "Purple Sun dress all Sizes"
    },
    {
        id: 26,
        name: "KItty Lips", price: .99,
        image: "./images/kittylips.jpg",
        tags: ['hair', 'lotion', 'nails', 'salon', "lip gloss"],
        description: "Kitty Lips lip gloss"
    },
    {
        id: 27,
        name: "Lilo JewelryBox", price: 9.99,
        image: "./images/lilobox.webp",
        tags: ['box', 'jewels', 'jewerly', 'gold', 'sivler', 'jewerly box'],
        description: "Keep all your jewerly safe with lilo "
    },
    {
        id: 28,
        name: "Barbie Kit", price: 9.99,
        image: "./images/barbiekit.webp",
        tags: ['barbie', 'makeup', 'eyeliner', 'blush'],
        description: "Complete Barbie makeupkit(washable) skin safe",
    },
]
const MaddiesItems = [
    {
        id: 1,
        name: "Mini Purses",
        price: 7.99,
        image: "./images/kid1.webp",
        tags: ['purse', 'bag', 'mini purse',],
        description: " Fashionable Mini purses for all your goodies"


    },
    {
        id: 2,
        name: "Pinky Nikes",
        price: 25.99,
        image: "./images/pinknike.jpg",
        tags: ['shoes', 'slippers', 'socks', 'nike', 'runnig shoes', 'tennis shoes', 'gym'],
        description: "Nike Airforce Ones (limited offer) sizes 0-7girls",
    },
    {
        id: 3,
        name: " FlyAway Sweater", price: 6.99,
        image: "./images/sweater2.webp",
        tags: ["sweater", 'shirts', 'blazer', 'romper',],
        description: " Stay warm in 100% cotton sweater",
    },
    {
        id: 4,
        name: "Giirrly Pinky Purse", price: 5.99,
        image: "./images/pinky.jpg",
        tags: ['purse', 'pink', 'gold', 'bag', 'purses'],
        description: " Soft faux leather purse",
    },
    {
        id: 5,
        name: "Just Pretty Purse", price: 5.99,
        image: "./images/pinkwhite.jpg",
        tags: ['purse', 'bag', 'pretty purse', 'travel'],
        description: "Fashion bow purse (limited offer)"
    },
    {
        id: 6,
        name: "GiirrlyyTravel Set", price: 7.99,
        image: "./images/purseset2.jpg",
        tags: ['purse', 'travel', 'bag', 'travel set'],
        description: "Travel set with purse and wallet"
    },

    {
        id: 7,
        name: "Giirrlly Glows ", price: 10.99,
        image: "./images/gloss.webp",
        tags: ['shoes', 'glow', 'light ups'],
        description: " GlowuP shoes sizes 0-3"
    },
    {
        id: 8,
        name: "Galaxy Earings", price: 4.99,
        image: "./images/galaxy-earrings.jpg",
        tags: ['earrings', 'jewelry', 'ears'],
        description: "Love space? Where the Galaxy on your ears!",
    },
    {
        id: 9,
        name: "BEST DAY EVER Sweater", price: 5.99,
        image: "./images/bestday.webp",
        tags: ['sweater', 'shirt', 'romper'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 10,
        name: "BellBottom Jeans",
        price: 4.99,
        image: "./images/kids.jpg",
        tags: ['jeans', 'cargo', 'cargo pockets'],
        description: "These products are an example and will be replaced with Giirrllyy Products"

    },

    {
        id: 11,
        name: "Galaxy GemStone ",
        price: 4.99,
        image: "./images/gemstone-jewelry.jpg",
        tags: ['gemstone', 'necklace', 'galaxy', 'jewelry', 'gems'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 12,
        name: "Pricess Necklace",
        price: 15.99,
        image: "./images/pretty-gold-necklace.jpg",
        tags: ['jewelry', 'gold', 'necklace'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 13,
        name: " Cargo jeans",
        price: 13.99,
        image: "./images/cargojean.webp",
        tags: ['jeans', 'cargo', 'pants'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 14,
        name: " Purple Sundress",
        price: 13.99,
        image: "./images/purpdress.webp",
        tags: ['jeans', 'cargo', 'pants', 'dress', 'shorts', 'tshirt'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 15,
        name: " Frozen dress",
        price: 11.99,
        image: "./images/frozendress.jpg",
        tags: ['jeans', 'cargo', 'pants', 'dress', 'shorts', 'tshirt'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 16,
        name: " Elsa dress",
        price: 10.99,
        image: "./images/elsadress.jpg",
        tags: ['jeans', 'cargo', 'pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 17,
        name: " Color Socks",
        price: 6.99,
        image: "./images/socks.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 19,
        name: " 3pair CottonSock",
        price: 5.99,
        image: "./images/sock2.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 20,
        name: "Dress Suit",
        price: 15.99,
        image: "./images/pinkDRess.jpg",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 21,
        name: "BUtterfly Dress",
        price: 15.99,
        image: "./images/butterflydress.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 22,
        name: "BUtterfly Dress",
        price: 15.99,
        image: "./images/butterflydress.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'shoes'],
        description: "These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 23,
        name: "Harley Davidson",
        price: 12.99,
        image: "./images/harley.jpg",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'dress', 'pink dress', 'sundress', 'romper', 'skirt', 'harley Davidson'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 24,
        name: "Princes Dress",
        price: 16.99,
        image: "./images/princessDress1.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'dress', 'pink dress', 'sundress', 'romper', 'princess dress', 'skirt'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 25,
        name: "NewYork Set",
        price: 16.99,
        image: "./images/newyork.webp",
        tags: ['pants', 'dress', 'shorts', 'tshirt', 'frozen', 'disney', 'socks', 'dress', 'pink dress', 'sundress', 'romper', 'princess dress', 'skirt', "tank top", 'sleeper', 'pajamas'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 26,
        name: "Heart Watch",
        price: 10.99,
        image: "./images/heartwatch.jpg",
        tags: ['watch', 'frozen', 'disney', 'dress', 'pink dress', 'sundress', 'romper', 'princess dress', 'skirt', 'pajamas', 'heart', 'jelwery', 'silver'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 27,
        name: "Dolphin Necklace",
        price: 9.99,
        image: "./images/dolphine.jpg",
        tags: ['watch', 'frozen', 'disney', 'dress', 'pink dress', 'sundress', 'romper', 'princess dress', 'skirt', 'pajamas', 'heart', 'jelwery', 'dolphin'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 28,
        name: "Dazzle Jewels",
        price: 9.99,
        image: "./images/dazzle.jpg",
        tags: ['watch', 'frozen', 'disney', 'dress', 'pink dress', 'sundress', 'romper', 'princess dress', 'skirt', 'pajamas', 'heart', 'jelwery', 'dolphin', 'dazzle', 'jewel'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 29,
        name: "Faux Fur",
        price: 13.99,
        image: "./images/ponybox.jpg",
        tags: ['frozen', 'romper', 'princess dress', 'skirt', 'pajamas', 'heart', 'jelwery', 'dolphin', 'dazzle', 'coat', "jacket", 'winter'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 30,
        name: "Assorted Socks",
        price: 11.99,
        image: "./images/assortsocks.webp",
        tags: ['frozen', 'romper', 'princess dress', 'skirt', 'pajamas', 'dazzle', 'coat', "jacket", 'winter', 'socks'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
]
const MarleysLux = [
    {
        id: 1,
        name: "Full hair ", price: 9.99,
        image: "./images/Curly-Kids.jpg",
        tags: ["hair", "curls", "curly kids", "shampoo", "conditioner", "wash", "rinse"],
        description:"These products are an example and will be replaced with Giirrllyy Products"

    },
    {
        id: 2,
        name: "Nail Art Studio", price: 6.99,
        image: "./images/nailkit2.jpg",
        tags: ["nails", 'art', 'kit', 'nailkit', 'presson', 'manicure', 'art', "nails"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 3,
        name: "Mixed Chicks", price: 12.99,
        image: "./images/mixedchickshair.jpg",
        tags: ["hair", "curls", "curly kids", "shampoo", "conditioner", "wash", "rinse", 'mixed chicks', 'mixed', 'hair care', 'mixed girls', 'moisturizer'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 4,
        name: "Toysical Nail Kit ", price: 9.99,
        image: "./images/toysicalNails.webp",
        tags: ["nails", 'art', 'kit', 'nail kit', 'presson', 'manicure', 'art', "nails", "'nail polish'"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 5,
        name: "62Nail Kit", price: 9.99,
        image: "./images/nailKits.webp",
        tags: ["nails", 'art', 'kit', 'nailkit', 'presson', 'manicure', 'art', "nails", "'nail polish'"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 6,
        name: "Shea Shampoo", price: 7.99,
        image: "./images/Shea-Moisture.jpg",
        tags: ["shea butter", 'shampoo', 'conditioner', 'moisturizer'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },

    {
        id: 7,
        name: "Giirrlly Scrunchies", price: .99,
        image: "./images/hair-scrunchies.png",
        tags: ["scrunchies", 'hair', "hair ties", "scrunch", 'ponytail', 'hair scrunchies', 'clips', 'hair clips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 8,
        name: "Grip Clips Combs", price: 1.99,
        image: "./images/comb.jpg",
        tags: ["scrunchies", 'hair', "hair ties", "scrunch", 'ponytail', 'hair scrunchies', ' clips', 'hair clips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 9,
        name: "Cherry Blossom Clips", price: 0.99,
        image: "./images/Cherryblossom-lp.webp",
        tags: ["scrunchies", 'hair', "hair ties", "scrunch", 'ponytail', 'hair scrunchies', ' clips', 'hair clips', 'cherry', 'mini clips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 10,
        name: "Mini Clips", price: 2.99,
        image: "./images/clip2.jpg",
        tags: ["scrunchies", 'hair', "hair ties", "scrunch", 'ponytail', 'hair scrunchies', ' clips', 'hair clips', 'mini clips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 11,
        name: "Mixed Girl Hair", price: 10.00,
        image: "./images/mixedgirlkit.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 12,
        name: "Mixed Chicks kit", price: 9.99,
        image: "./images/mixedchicks.webp",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 13,
        name: "Giirrlly Dryer", price: 12.99,
        image: "./images/blowdryer1.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 14,
        name: "Giirrlly Clips", price: 5.99,
        image: "./images/hairclipss.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 15,
        name: "Hair Dryer", price: 15.99,
        image: "./images/hairdryer1.webp",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 16,
        name: "Blow Dryer", price: 14.99,
        image: "./images/hairdyer4.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 17,
        name: "Hair Dryer", price: 12.99,
        image: "./images/hairdyer4.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 18,
        name: "Color Clips", price: 11.99,
        image: "./images/hairclips.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer', 'hairpens', "hair clips", 'clips'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 19,
        name: "Shampoo", price: 9.99,
        image: "./images/shampoo1.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer', 'hairpens', "hair clips", 'clips'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 20,
        name: "Hair clipset", price: 9.99,
        image: "./images/clipset.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer', 'hairpens', "hair clips", 'clips'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 21,
        name: "Rhinestones clips", price: 9.99,
        image: "./images/rhinestone.jpg",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer', 'hairpens', "hair clips", 'clips'],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 22,
        name: "Hair Bows ", price: 9.99,
        image: "./images/hairbows.avif",
        tags: ["mixed", 'hair', 'hair kit', 'wash', 'shampoo', 'rinse', 'gel',
            'mixed girl', 'conditioner', 'blow dryer', 'dryer', 'hair dryer', 'hairpens', "hair clips", 'clips', "bows"],
            description:"These products are an example and will be replaced with Giirrllyy Products"
    },
]
const Jazzys = [
    {
        id: 1,
        name: "Marshmellow Gloss", price: 5.00,
        image: "./images/gloss.webp",
        tags: ["gloss", 'marshemellow', 'flavored', 'lip gloss', 'claires', "balm", "flavored gloss"],
        description:"These products are an example and will be replaced with Giirrllyy Products"

    },
    {
        id: 2,
        name: " Glam Gloss", price: 5.00,
        image: "./images/glamgloss.webp",
        tags: ["gloss", "lips", 'balm', 'glam gloss',],
        description:"These products are an example and will be replaced with Giirrllyy Products"

    },
    {
        id: 3,
        name: "Custom PressOns", price: 3.00,
        image: "./images/nailcolage4.jpg",
        tags: ['nails', 'press on', 'maniucure', 'polish',],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 4,
        name: "Flavored Gloss", price: 5.25,
        image: "./images/coco.jpg",
        tags: ['flavored', 'cococut', 'lip gloss', 'gloss', 'balm', 'lip gloss', 'lips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 5,
        name: "Eyebrow wax", price: 7.50,
        image: "./images/magicGirl.webp",
        tags: ['eyes', 'eyebrows', 'wax', 'lashes', 'eyeliner'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 6,
        name: "SunScreen", price: 5.99,
        image: "./images/sunscreen.webp",
        tags: ['sun screen', 'sun', 'sun bum', 'sun block'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 7,
        name: "Eyeliner set", price: 9.99,
        image: "./images/lagirleyliner.jpg",
        tags: ['eyes', 'eyebrows', 'wax', 'lashes', 'eyeliner'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 7,
        name: "Shea Butter", price: 6.99,
        image: "./images/babylotion.webp",
        tags: ['coconut', 'shea', 'butter', 'lotion', 'oil', 'coco butter', "skin"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },

    {
        id: 8,
        name: "Designer PressOn", price: 12.00,
        image: "./images/nailcollage5.jpg",
        tags: ["nails", 'press on', 'designer nails', 'nail polish'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 9,
        name: "LOLO Lips", price: 4.99,
        image: "./images/lips.webp",
        tags: ['lips', 'gloss', 'lip gloss', 'lip liner'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 10,
        name: "Nail Set", price: 8.99,
        image: "./images/nailcollage1.jpg",
        tags: ['nails', 'manicure', 'nail set',],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 11,
        name: "Lip Balm set ", price: 6.00,
        image: "./images/americanGirlLips.webp",
        tags: ['lip balm', 'gloss', 'lip gloss'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 12,
        name: "Island Lips", price: 5.00,
        image: "./images/islandLips.jpg",
        tags: ['island lips', 'lip gloss', 'lip balm', 'lips'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 13,
        name: "EyeShadow kit", price: 12.00,
        image: "./images/makupkit2.jpg",
        tags: ['island lips', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 14,
        name: "Makeup kit", price: 12.00,
        image: "./images/makeupkit3.jpg",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 15,
        name: "Barbie Eyeshadow", price: 11.00,
        image: "./images/BarbieShadow.jpg",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 16,
        name: "Beauty Mask", price: 7.99,
        image: "./images/facemask.jpg",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes', 'facemask', 'beautymask', 'sleepmask'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 17,
        name: "Skin Cleanse", price: 13.99,
        image: "./images/s-l400.jpg",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes', 'facemask', 'beautymask', 'sleepmask', 'skin', 'whips', 'acne'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 18,
        name: "Face Cleanse", price: 10.99,
        image: "./images/GRP-SHOT-4_SQUARE.webp",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes', 'facemask', 'beautymask', 'sleepmask', 'skin', 'whips', 'acne'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 19,
        name: "Amercan Cleanse", price: 10.99,
        image: "./images/facewipes.webp",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes', 'facemask', 'beautymask', 'sleepmask', 'skin', 'whips', 'acne'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 20,
        name: "Glam Kit ", price: 9.99,
        image: "./images/glamkit.webp",
        tags: ['skintone', 'lip gloss', 'lip balm', 'lips', 'makeup', 'eyeliner', 'eyeshadow', 'blush', 'barbie', 'eyes', 'lashes', 'facemask', 'beautymask', 'sleepmask', 'skin', 'whips', 'acne'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },

]
const Jewels = [
    {
        id: 1,
        name: "Diamond Watch ", price: 12.99,
        image: "./images/watch12.jpg",
        tags: ["watch", "diamond", "time", "gold"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 2,
        name: "Mermaid Necklace ", price: 6.99,
        image: "./images/mermaids.jpg",
        tags: ["watch", "diamond", "time", "gold"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 3,
        name: "Watch/Braclet set ", price: 17.99,
        image: "./images/watchset3.jpg",
        tags: ["watch", "diamond", "time", "gold", "heart",],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 4,
        name: "Glam Set ", price: 15.99,
        image: "./images/rings.jpg",
        tags: ["rings", "diamond", "time", "gold", "heart", "necklace"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },

    {
        id: 5,
        name: "Pinky watch ", price: 8.99,
        image: "./images/watch8.webp",
        tags: ["Watch", "time", "pink", "heart", "necklace"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 6,
        name: "Dazzle Set ", price: 8.99,
        image: "./images/dazzle.jpg",
        tags: ["Watch", "time", "pink", "heart", "necklace", 'Jewels'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 7,
        name: "Keep SafeBox ", price: 9.99,
        image: "./images/keepsafe.jpg",
        tags: ["Watch", "time", "pink", "heart", "necklace", 'Jewels', "keep safe", "box", "jewelery box"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 8,
        name: "Charm Set", price: 16.99,
        image: "./images/charmset.webp",
        tags: ["Watch", "time", "pink", "heart", "necklace", 'Jewels', "keep safe", "box", "jewelery box", "charms"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 9,
        name: "Dolphin charm", price: 16.99,
        image: "./images/dolphin1.jpg",
        tags: ["Watch", "time", "pink", "heart", "necklace", 'Jewels', "keep safe", "box", "jewelery box", "charms", 'dolphin'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 10,
        name: "Dolphin Necklace", price: 15.99,
        image: "./images/dolphin4.webp",
        tags: ["heart", "necklace", 'Jewels', "keep safe", "box", "jewelery box", "charms", 'dolphin', "gold", "silver"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 11,
        name: "Drip Heart", price: 12.99,
        image: "./images/dripheart.avif",
        tags: ["heart", "necklace", 'Jewels', "keep safe", "box", "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 12,
        name: "SeaNecklace", price: 11.99,
        image: "./images/seaShells.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 13,
        name: "Bracelet Set", price: 10.99,
        image: "./images/bluewatchset.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 14,
        name: "ButterFly Set", price: 15.99,
        image: "./images/butterflywatchset.jpg",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 15,
        name: "Unicorn BoxSet", price: 15.99,
        image: "./images/ponybox.jpg",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 16,
        name: "Bead Necklace", price: 6.99,
        image: "./images/beadNeclace.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 17,
        name: "Custom Bangels", price: 23.99,
        image: "./images/bracelets.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', 'ocean', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 17,
        name: "Heart Watchset", price: 10.99,
        image: "./images/heartwatch3.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 18,
        name: "Gold Links", price: 12.99,
        image: "./images/goldlinks.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', "watch", "bracelet"],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 19,
        name: "Pink Watch", price: 19.99,
        image: "./images/ruby.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', "watch", "bracelet", 'ruby', 'gems'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 20,
        name: "Kids Watch", price: 3.99,
        image: "./images/kidswatch.webp",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', "watch", "bracelet", 'ruby', 'gems'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },
    {
        id: 21,
        name: "Yaomio set", price: 10.99,
        image: "./images/Yaomiao-3.png",
        tags: ["heart", "necklace", 'Jewels', "jewelery box", "charms", 'dolphin', "gold", "silver", 'ring', 'sea shells', "watch", "bracelet", 'ruby', 'gems'],
        description:"These products are an example and will be replaced with Giirrllyy Products"
    },

]
// ?==========================================================================





function createCard({ id, name, price, image, tags, description }) {

    return `
    <article class="cards">
        <div class="flip-card-inner" id="card${id}">
            <div class="flip-card-front">
                <img src="${image}" class="pics">
                <p id="itemName">${name}</p>


                </a>
                <div id="flexForCardBtns">
                <button class="productInfo" onclick="flipIt('card${id}')"> Item Details </button>

                <button id="addToCart" onclick="addToCart(${id})"> Add to Cart</button>
</div>
            </div>


            <div class="flip-card-back">
            <img src="${image}" class="flipPic">
            <p id="itemInfo">${description}</p>
            <p>$${price}</p>
            <button id="addToCart" onclick="addToCart(${id})"> Add to Cart</button>
            <button class="productInfo" onclick="flipIt('card${id}')"> Close </button>
            </div>
        </div>
    </article>`

}
function flipIt(cardId) {
    const card = document.getElementById(cardId)
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped')
    } else {
        card.classList.add('flipped')
    }
}


// ?========================================================================
//! Shopping cart logic
let cart = [];
function addToCart(productId) {
    const product = saleItems.find(p => p.id === productId);
    console.log(productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
        <span id="cartItems">${item.name} x${item.quantity}</span>
        <button id="removeBtn" onclick="removeFromCart(${item.id})">Remove</button>
      `;
        cartItemsDiv.appendChild(div);
    });
    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}
// Expose functions to global scope
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
// Initial render
renderCart();




//main is the id tagged on the HTML
const main = document.getElementById("main")

const cards =
    saleItems.map((items) => createCard(items)).join('');
main.innerHTML = cards


// ?================================================================
// !Function for searching for items
const searchForm = document.querySelector('form')
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let search
    // getting information from the search imput box
    for (const value of formData.values()) {
        console.log(value);
        search = value.toLowerCase()
    }

    // need to write a filter function to filter through the data and return all products that have the "search value" in the description
    if (search === '') {
        main.replaceChildren([])
        main.innerHTML = saleItems.map((items) => createCard(items)).join('');

    }
    else {
        const AllItems = [...saleItems, ...Jazzys, ...MaddiesItems, ...MarleysLux]

        const filterItems = AllItems.filter(product => product.tags.includes(search))
        console.log(filterItems);
        // all items need to have the same information in the description i.e if one has an "tag:" the others MUST have one even if its just an empty array. less a error be thrown

        // clear the display to change the mproducts to the new array (filterItems)
        main.replaceChildren([])
        // rewritting the item that was found to the html
        main.innerHTML = filterItems.map((names) => createCard(names)).join('')
        main.innerHTML += `<button class='goBack'>⬅️Go Back</button>`
    }
    document.querySelector('.goBack').addEventListener('click', () => {
        main.replaceChildren([])
        main.innerHTML = saleItems.map((names) => createCard(names)).join('');
    })
})


// ?==================================================================
// Greeting
const today = new Date();
let hourNow = today.getHours();
let greeting
if (hourNow > 18) {
    greeting = 'Evening Giirrllyy\n Login/Signup';
}
else if (hourNow > 12) {
    greeting = 'Afternoon Giirrlly\n Login/SignUp';
}
else if (hourNow > 0) {
    greeting = "Morning Giirrllyy\n Login/signup";
}
else {
    greeting = 'Welcome Giirrllyy';



}
document.getElementById("logInModal").innerText = `${greeting}`;



// ?=========================================================================

// ! ----Scroll to Top of Page Button----------
// Get the button:
let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Function and Event listener on the item Details button. When clicked the card flips giving user Item details

// const itemDetails = document.querySelectorAll('.productInfo');
// itemDetails.forEach(btn => {
// btn.addEventListener('click', (e) => {
//     const cardId = e.target.parentElement.parentElement.parentElement.id
//     const cards = document.querySelectorAll('.cards')
//     console.log(cards);
//     cards.forEach(card => {
//         console.log(card.id);
//         console.log(card.firstElementChild);
//         if (card.firstElementChild.id === cardId) {
//             card.firstElementChild.classList.add('flipped')
//         } else if (card.firstElementChild.classList.contains('flipped')) {
//             card.firstElementChild.classList.remove('flipped')
//         }
//     })
// })
// })


// ?=====================================================
const logo = document.querySelector('h1');
logo.addEventListener('click', () => navigation('Daily Deals'));

//Generate pages

function navigation(destination) {
    console.dir(destination);
    document.querySelectorAll('#navflex > button').forEach(btn => {
        if (btn === destination || btn.textContent === destination) {
            btn.classList.add('active')
        } else if (btn.classList.contains('active')) {
            btn.classList.remove('active')
        }
    })
    document.getElementById("main").replaceChildren([])
    // get the #onSaleSign, inside ifs change .textContent
    const saleSign = document.getElementById("onSaleSign")
    // if else, switch
    // home page here will be moved to the final else as the fallback!!
    if (destination.textContent === "Daily Deals" || destination === "Daily Deals") {
        main.innerHTML = saleItems.map((items) => createCard(items)).join('');
        saleSign.textContent = " !We got the DEALS GIRL!! "
    } else if (destination.textContent === "Maddies Fab Fashion") {
        main.innerHTML = MaddiesItems.map((items) => createCard(items)).join('');
        saleSign.textContent = " !Flashy and Classy Styles! "
    } else if (destination.textContent.includes("Marleys")) {
        main.innerHTML = MarleysLux.map((items) => createCard(items)).join('')
        saleSign.textContent = " !Your Fav Hair Products and Glam Nails! "
    } else if (destination.textContent.includes("Jazzy")) {
        main.innerHTML = Jazzys.map((items) => createCard(items)).join('')
        saleSign.textContent = " ! Your BEAUTIFUL Girl Get Jazzy ! "
    } else if (destination.textContent.includes('Glam Jewelry')) {
        main.innerHTML = Jewels.map((items) => createCard(items)).join('')
        saleSign.textContent = " !Bling Bling make it Flashy! "
    }
    else {
        main.innerHTML = saleItems.map((items) => createCard(items)).join('')
    }



}

// EventListner Generating maddies page 

// document.getElementById('maddiesPage').addEventListener("click", maddiesFabFashion)
document.getElementById('navflex').addEventListener('click', (e) => navigation(e.target))


//! Function for the login modal. When clicked the the function is called and the modal pops up 
//Get the modal
const loginModal = document.getElementById('logInModal');
loginModal.addEventListener("click", handleLogIn);


// ?Function creating the pop over for the log in
function handleLogIn() {
    // First div contains pic and welcome greeting in login modal
    const divForGreeting = document.createElement('div');


    // Welcome greeting in Modal
    const girlyLoginGreeting = document.createElement("p");
    girlyLoginGreeting.textContent = ('Giirrllyy.Com Login');

    girlyLoginGreeting.className = "girlylogingreeting";

    // Login Image

    const girlylogo = document.createElement('div')
    const logoimage = document.
        createElement("img")
    logoimage.src = "./images/cake.jpg"
    logoimage.className = "logoImageModal"


    // using <dialog> with the form inside of it
    const dialog = document.createElement('dialog')
    dialog.id = "modal"

    const form = document.
        createElement('form')
    form.id = "loginForm"




    //? User Input for user name
    const nameInput = document.createElement('input')
    // nameInput.setAttribute('required', true);
    nameInput.className = "Input1"
    nameInput.setAttribute('placeholder', "Enter UseName");

    //? User input for password 
    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('name', 'userPassword');
    passwordInput.className = "Input1"
    // passwordInput.setAttribute('required', true);
    passwordInput.className = "Input1"
    // placeholder="Enter Password"
    passwordInput.setAttribute('placeholder', 'Enter Password',);
    //? Remember Me check Box
    const remeberMeCheckBox = document.createElement('label')
    remeberMeCheckBox.textContent = "Remeber Me"
    remeberMeCheckBox.id = "rememberMe"

    const checkboxInput = document.createElement('input')
    checkboxInput.className = "checkboxInput"
    checkboxInput.setAttribute('type', 'checkbox')


    //?The Login button
    const submitLogInBtn = document.createElement('button')
    submitLogInBtn.className = "loginBtn"
    submitLogInBtn.textContent = "Login"
    submitLogInBtn.setAttribute('type', 'submit')


    //? Sign up button
    const signUpBtn = document.createElement('button')

    signUpBtn.className = "signUpBtn"
    signUpBtn.textContent = "Create New Account"
    signUpBtn.setAttribute("id", "newacct")
    signUpBtn.setAttribute("type", "button")
    signUpBtn.addEventListener('click', (e) => {
        console.log(e.target)
    })

    //?  Sign up using social media 
    const signUpWithSocial = document.createElement('div')

    const socialMediaLinks = document.
        createElement("a")
    socialMediaLinks.className = "medialinkstyling"
    socialMediaLinks.href = "#"
    socialMediaLinks.className = "socialmedia"
    socialMediaLinks.textContent = "Sign up using"


    //?Social Media Links 
    const socialMediaLogo = document.createElement('img')
    socialMediaLogo.src = "./images/facebook.svg"
    socialMediaLogo.className = "socialMediaLogos"

    const socialMediaLogo2 = document.createElement('img')
    socialMediaLogo2.src = "./images/google.svg"
    socialMediaLogo2.className = "socialMediaLogos"

    const socialMediaLogo3 = document.createElement('img')
    socialMediaLogo3.src = "./images/instagram.svg"
    socialMediaLogo3.className = "socialMediaLogos"

    //? Close Dialog Button
    const closeDialogBtn = document.createElement('button')

    closeDialogBtn.textContent = "Close"
    closeDialogBtn.id = 'closeDialog'
    closeDialogBtn.addEventListener('click', (e) => {
        e.preventDefault()
        dialog.close()
        console.log();
    })



    //? Appending the elements to the dialog 
    girlylogo.append(logoimage)
    dialog.append(girlyLoginGreeting, girlylogo)


    socialMediaLinks.append(socialMediaLogo)
    signUpWithSocial.append(socialMediaLinks)

    socialMediaLinks.append(socialMediaLogo2)
    signUpWithSocial.append(socialMediaLinks)

    socialMediaLinks.append(socialMediaLogo3)
    signUpWithSocial.append(socialMediaLinks)




    form.append(nameInput, passwordInput, remeberMeCheckBox, checkboxInput, submitLogInBtn, signUpBtn, signUpWithSocial, closeDialogBtn,)

    dialog.append(form)
    document.body.append(dialog)
    dialog.showModal()
}
;



// Function creating new acct form from  loginmodal 
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// function for the create acct 