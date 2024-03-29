const sampleItems = [
    {
        title: "Chole Bhature",
        description: "Spiced chickpea curry with deep-fried bread. A beloved North Indian dish.",
        price: 280,
        image :{
          filename:"itemimage",
          url :  "https://t4.ftcdn.net/jpg/05/53/98/35/240_F_553983537_9PnqUverGDQ3hRxfWfnzCN1lU8ZwzWth.jpg" 
        },
        Famous_In: "Punjab",
        About_Taste: "A harmonious blend of soft, flavorful filling within a crispy, golden-brown exterior."
        },
        
        {
        title: "Masala Dosa",
        description: "Thin rice crepe with spiced potato, coconut chutney, and sambar. South Indian delicacy, deliciously crispy.",
        price: 200,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1156887040/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=n_VaRMxgl-Jf86mKzwSI6R0gPwoFKlYhJalqQ0mdapg=" }, 
        Famous_In: "South India",
        About_Taste: "Delicate, crunchy exterior complemented by a flavorful and spicy potato filling."
        },
        
        {
        title: "Dhokla",
        description: "Steamed gram flour cakes with a tangy, sweet flavor. Popular Gujarati snack, light and spongy.",
        price: 150,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1307786541/photo/khaman-dhokla.webp?b=1&s=170667a&w=0&k=20&c=DfuJiBGgtJnNY7Rf8tbGZjOeAij21CE0M51Gb3ESPhs="} , 
        Famous_In: "Gujarat",
        About_Taste: "Light, spongy, and perfectly balanced between tangy and sweet."
        
        },
        
        {
        title: "Baingan Bharta",
        description: "Smoky roasted eggplant mash with spices, tomatoes, and onions. North Indian comfort food, smoky and spicy.",
        price: 220,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/05/15/45/54/240_F_515455423_2Apf6TREMNFaCEmWHmcutvxur7Bv96uP.jpg"} , 
        Famous_In: "Punjab",
        About_Taste: "Rich, smoky, and full of flavor with a delightful hint of spice."
        },
        
        {
        title: "Aloo Paratha",
        description: "Stuffed flatbread with spiced mashed potatoes. Iconic North Indian breakfast, savory and satisfying.",
        price: 180,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/03/21/94/24/240_F_321942452_7Pt1VVoMTpHzxu4N1zf7Ml4VJUEb7tq4.jpg" }, 
        Famous_In: "Punjab",
        About_Taste: "A harmonious blend of soft, flavorful filling within a crispy, golden-brown exterior."
        },
        
        {
        title: "Poha",
        description: "Flattened rice with turmeric, peanuts, and spices. Maharashtrian breakfast, light and flavorful.",
        price: 170,
        image :{
          filename:"itemimage",
          url :   "https://t4.ftcdn.net/jpg/04/14/41/69/240_F_414416978_qjifZRl7NgA9zTe8Yne9rj7o1s8iYf3E.jpg" }, 
        Famous_In: "Maharashtra",
        About_Taste: "Nutty and savory, this dish is simple yet incredibly satisfying."
        },
        
        {
        title: "Aloo Gobi",
        description: "Potato and cauliflower curry in aromatic spices. North Indian classic, homely and flavorful.",
        price: 210,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/450469817/photo/gobi-aloo-indian-curry-dish.webp?b=1&s=170667a&w=0&k=20&c=BPuSWwnMxUY-8CdipCush0Y0gHhBVZ9A_MuI138fK7I=" }, 
        Famous_In: "Punjab",
        About_Taste: "A hearty combination of earthy potatoes and tender cauliflower, bursting with spices."
        },
        
        {
        title: "Malai Kofta",
        description: "Deep-fried paneer and vegetable balls in creamy tomato gravy. Rich, creamy, and indulgent.",
        price: 260,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1077111440/photo/malai-kofta-is-a-mughlai-speciality-dish-served-in-a-bowl-or-pan-over-moody-background.webp?b=1&s=170667a&w=0&k=20&c=Tc0X0RoHNc_G4iB6Xr42O1R81RP7zICcPdrH2MzbZZM=" }, 
        Famous_In: "North India",
        About_Taste: "Luxuriously creamy with the perfect blend of spices, a treat for the palate."
        },
        
        {
        title: "Rajma Chawal",
        description: "Kidney bean curry served with steamed rice. Iconic North Indian comfort food, hearty and wholesome.",
        price: 190,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/04/41/89/88/240_F_441898820_SgxdBsa02oUEMdWq4RnNRwQpcmw8MQNl.jpg"} , 
        Famous_In: "Punjab",
        About_Taste: "A wholesome combination of creamy beans and aromatic rice, hearty and satisfying."
        },
        
        {
        title: "Methi Malai Matar",
        description: "Creamy fenugreek and green pea curry. North Indian delight, rich and aromatic.",
        price: 230,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/02/54/80/88/240_F_254808839_O0QHpsQJEN7pWGfnWvJcjIeskkCI8eqM.jpg" }, 
        Famous_In: "Punjab",
        About_Taste: "A blend of fresh green peas and fragrant fenugreek leaves in a creamy sauce."
        },
        
        {
        title: "Mysore Pak",
        description: "A sweet, melt-in-your-mouth dessert made from ghee, sugar, and gram flour. South Indian delicacy, sweet and buttery.",
        price: 180,
        image :{
          filename:"itemimage",
          url :   "https://t4.ftcdn.net/jpg/04/66/41/99/240_F_466419962_p9tBqoXfk7hRx7jOfGpRdtazqWia3ImA.jpg" }, 
        Famous_In: "Karnataka",
        About_Taste: "Sweet and buttery, with a delightful melt-in-your-mouth texture."
        },
        
        {
        title: "Gharwale Ki Handi",
        description: "Homestyle mixed vegetable curry with traditional spices. A comforting family recipe.",
        price: 220,
        image : {
          filename:"itemimage",
          url :  "https://t4.ftcdn.net/jpg/05/46/35/41/240_F_546354194_r74NNGj9zt23s2r5xldgH0ohbfQgY1ve.jpg" }, 
        Famous_In: "North India",
        About_Taste: "A comforting mix of homely spices, flavors, and family traditions."
        },
        
        {
        title: "Upma",
        description: "Semolina cooked with vegetables and spices, a wholesome breakfast option.",
        price: 190,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1422008793/photo/close-up-image-of-indian-breakfast-recipe-of-savoury-rava-upma-in-oven-proof-serving-dish.webp?b=1&s=170667a&w=0&k=20&c=Bwbk4rL9yOra9lz43HZNyAoBNozoBDDQvzZ5urOHhkw=" }, 
        Famous_In: "South India",
        About_Taste: "Nutty and savory, this dish is simple yet incredibly satisfying."
        },
        
        {
        title: "Paneer Tikka",
        description: "Marinated and grilled paneer skewers. North Indian appetizer, smoky and spicy.",
        price: 250,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1474136049/photo/close-up-image-of-paneer-kebabs-marinated-curd-cheese-pieces-on-metal-skewers-red-onion-and.webp?b=1&s=170667a&w=0&k=20&c=MpgFyuzf7fBEToJUVnIR4Gx5H8sqNygH_OdPm4kCHS8="} , 
        Famous_In: "Punjab",
        About_Taste: "Smoky, spicy, and irresistibly delicious with tender, marinated paneer."
        },
        
        {
        title: "Veg Biryani",
        description: "Fragrant rice cooked with mixed vegetables and aromatic spices. South Indian specialty, flavorful and aromatic.",
        price: 300,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1363306842/photo/veg-biryani.webp?b=1&s=170667a&w=0&k=20&c=6UYnYX6xpNb2SxF5LPDpBd3cc9ZMzdCKN0RNFqHN9kM="} , 
        Famous_In: "Hyderabad",
        About_Taste: "Aromatic rice with tender vegetables and a perfect blend of spices."
        },
        
        {
        title: "Jhal Muri",
        description: "Spicy and tangy snack made with puffed rice, vegetables, and chutneys. A popular street food.",
        price: 80,
        image :{
          filename:"itemimage",
          url :   "https://t4.ftcdn.net/jpg/06/18/58/11/240_F_618581139_gtlYlM9mj6EdScixWxrY0X4VvD3Y6MAS.jpg"} , 
        Famous_In: "Bengal",
        About_Taste: "A burst of spicy and tangy flavors in every crunchy bite."
        },
        
        {
        title: "Navratan Korma",
        description: "A rich and creamy Mughlai dish with nine types of vegetables and dry fruits.",
        price: 290,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/01/74/32/00/240_F_174320042_rHiTB7wgJ8QLiYoryP5QRSacjRZ6xwDf.jpg"} , 
        Famous_In: "Mughlai",
        About_Taste: "Creamy, rich, and filled with the delightful sweetness of dry fruits."
        },
        
        {
        title: "Achari Baingan",
        description: "Tangy and spicy eggplant curry with a pickle twist. North Indian delight, spicy and tangy.",
        price: 240,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1457314471/photo/aubergine-eggplant-brinjal-baingan-black-solanum-melongena-edible-vegetable-food-berinjela.webp?b=1&s=170667a&w=0&k=20&c=2ZXtvVlcy87l-S4zBqWA4eXxdWI9B-_tfR1pDylptVY=" }, 
        Famous_In: "Punjab",
        About_Taste: "A delightful blend of tangy and spicy flavors with tender eggplant."
        },
        
        {
        title: "Sindhi Sai Bhaji",
        description: "A nutritious mix of spinach, lentils, and vegetables cooked with spices. A Sindhi specialty.",
        price: 210,
        image :{
          filename:"itemimage",
          url :   "https://images.unsplash.com/photo-1643892467625-65df6a500524?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymhhaml8ZW58MHx8MHx8fDA%3D"} , 
        Famous_In: "Sindh",
        About_Taste: "A healthy and flavorful combination of spices and nutritious ingredients."
        },
        
        {
        title: "Bisi Bele Bath",
        description: "Spiced rice and lentil dish cooked with vegetables, tamarind, and spices.",
        price: 240,
        image :{
          filename:"itemimage",
          url :   "https://t3.ftcdn.net/jpg/02/75/39/18/240_F_275391874_LGkNLjDMAClosiZVS6cXs5bLDSO5GgNR.jpg"} , 
        Famous_In: "Karnataka",
        About_Taste: "A flavorful and slightly tangy dish, a perfect blend of spices and vegetables."
        },
        {
        title: "Gujarati Kadhi",
        description: "A sweet and tangy yogurt-based curry with gram flour dumplings. A Gujarati favorite.",
        price: 190,
        image :{
          filename:"itemimage",
          url :   "https://t4.ftcdn.net/jpg/03/84/08/83/240_F_384088374_Dylpv99HWO7bqN6jixgpePVU67bT3AZ7.jpg"} , 
        Famous_In: "Gujarat",
        About_Taste: "A delightful balance of sweet and tangy flavors, complemented by the soft dumplings."
        },
        
        {
        title: "Litti Chokha",
        description: "Whole wheat flour balls stuffed with roasted gram flour and served with mashed vegetables.",
        price: 210,
        image : {
          filename:"itemimage",
          url :  "https://t4.ftcdn.net/jpg/04/41/89/85/240_F_441898562_X8oScJLwaV59lnqsGz9F5VP0nJZgY6ZK.jpg"} , 
        Famous_In: "Bihar",
        About_Taste: "A rustic and wholesome dish with a unique combination of flavors."
        },
        
        {
        title: "Kashmiri Dum Aloo",
        description: "Baby potatoes cooked in a rich and flavorful yogurt-based gravy. A Kashmiri specialty.",
        price: 260,
        image : {
          filename:"itemimage",
          url :  "https://media.istockphoto.com/id/1421211828/photo/indian-cuisine-paneer-stuffed-dum-aloo-kashmiri-dum-aloo-or-potatoes-in-red-gravy-over-white.webp?b=1&s=170667a&w=0&k=20&c=qkvqt2AVtszaVvxQBJHfy_luigQN2NtmBR3zhDtoKxo=" }, 
        Famous_In: "Kashmir",
        About_Taste: "Rich and creamy, with a delicate blend of spices and tender potatoes."
        },
        
        {
        title: "Lassi",
        description: "A refreshing yogurt-based drink, available in sweet or salty variations. A North Indian favorite.",
        price: 70,
        image :{
          filename:"itemimage",
          url :   "https://media.istockphoto.com/id/1404811130/photo/chaas-and-lassi-drink.webp?b=1&s=170667a&w=0&k=20&c=v6Pzu2OuBcOJHh6idbVSZ55h2rwZBHJluj_JPoHvszo=" }, 
        Famous_In: "Punjab",
        About_Taste: "Creamy and refreshing, with a choice of sweet or savory variations."
        }
   
  ];
  
module.exports = { data: sampleItems};