'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Drinks', [
      {
        userId: 1,
        storeId: 1,
        name: 'Guinness',
        description: 'Dry Irish stout that originated in the brewery of Arthur Guinness at St. James\'s Gate in Dublin, Ireland in 1759.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/guinness_mltu5g.jpg',
      },
      {
        userId: 2,
        storeId: 2,
        name: "Heineken",
        description: 'Heineken is a super-inoffensive lager with a stronger, bitterer taste than most internationally mass-produced lagers. It\'s perfectly carbonated, pours a straw yellow colour, with little or no head to speak of. It goes down smoothly when it\'s ice cold.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090361/beers/heineken-original-bottle_okfxmh.png',
      },
      {
        userId: 3,
        storeId: 3,
        name: "Yuengling",
        description: 'Yuengling Lager is an iconic American lager famous for its rich amber color and medium-bodied flavor. Roasted caramel malt adds subtle sweetness, while a combination of cluster and cascade hops round out this well-balanced beer.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090361/beers/yuengling_xopzh0.jpg',
      },
      {
        userId: 4,
        storeId: 4,
        name: "Sam Adams",
        description: 'Rich, toasty, bready malt aroma with a touch of caramel and a kiss of subtle floral hops. ... Assertive, slightly resinous hop flavor. Good complexity. Sweet up front, but hop flavor and clean bitterness keeps it in check.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090360/beers/sam-adams_wjmun2.png',
      },
      {
        userId: 5,
        storeId: 5,
        name: "Crown Lager",
        description: 'Crown Lager has a bright golden appearance with a solid creamy head. The fruity aroma transforms to a malty refreshing taste with a smooth, full bodied finish.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090360/beers/crown-lager_mht4nw.jpg',
      },
      {
        userId: 6,
        storeId: 6,
        name: "Coors Light",
        description: 'Crisp, clean and refreshing, Coors Light is an American-style light lager beer. This light beer has 4.2% ABV, 102 calories and 5 grams of carbs per 12-ounce serving.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090360/beers/coors-light_kub8ua.jpg',
      },
      {
        userId: 7,
        storeId: 1,
        name: "Budweiser",
        description: 'Budweiser beer is a medium-bodied, American-style lager beer. Brewed with high quality barley malt, a blend of premium hop varieties, fresh rice and filtered water, this American beer is crisp and full of flavor. ...',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090360/beers/budweiser_urudck.jpg',
      },
      {
        userId: 8,
        storeId: 2,
        name: "Bud Light",
        description: 'Bud Light is a premium beer with incredible drinkability that has made it a top selling American beer that everybody knows and loves. This light beer is brewed using a combination of barley malts, rice and a blend of premium aroma hop varieties.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/bud-light_d5tirr.jpg',
      },
      {
        userId: 9,
        storeId: 3,
        name: "Blue Moon",
        description: 'A wheat beer brewed with orange peel for a subtle sweetness and bright, citrus aroma. Blue Moon® Belgian White Belgian-Style Wheat Ale is garnished with an orange slice to heighten the citrus aroma and taste.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/blue-moon_auamwp.jpg',
      },
      {
        userId: 10,
        storeId: 4,
        name: "Corona",
        description: 'Corona is a light and crisp pale Mexican lager that\'s wildly popular in the U.S. Its flavor profile is not overly complex, with sweet notes and a bit of hoppy skunkiness.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/corona_mb7fss.jpg',
      },
      {
        userId: 11,
        storeId: 5,
        name: "Stella Artois",
        description: 'Stella Artois is an authentic, imported Belgian lager beer. The brewing process lends to a wonderful floral aroma, well-balanced malt sweetness, crisp hop bitterness and a soft dry finish.',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/stella-artois_hshgeu.jpg',
      },
      {
        userId: 12,
        storeId: 6,
        name: "Modelo",
        description: 'Modelo Especial is a rich, full-flavored pilsner beer brewed with premium two-row barley malt that gives it a slightly sweet, well-balanced taste with a light hops character and crisp finish..',
        imageUrl: 'https://res.cloudinary.com/dsjuna344/image/upload/v1642090359/beers/modelo_mdrkok.jpg',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drinks', null, {});
  }
};
