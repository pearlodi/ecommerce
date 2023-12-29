import gowns1 from './assets/img/gowns/gowns2.jpg'
import gown2 from './assets/img/gowns/gowns2.jpg'
import gown3 from './assets/img/gowns/gowns6.jpg'
// import gown4 from './assets/img/gowns/gowns4.jpg'
import gown5 from './assets/img/gowns/gowns5.jpg'
import gown6 from './assets/img/gowns/gowns7.jpg'
// import gown7 from './assets/img/gowns/gown7.png'
// import gown8 from './assets/img/gowns/gown8.png'
// import gowns3 from './assets/img/gowns/gowns3.jpg'
import jacket1 from './assets/img/jacket/top3.jpg'
// import jacket2 from './assets/img/jacket/top2.jpg'
import jacket3 from './assets/img/jacket/top3.jpg'
import jacket4 from './assets/img/jacket/top4.jpg'
// import jacket5 from './assets/img/jacket/top5.jpg'
// import jacket6 from './assets/img/jacket/top6.jpg'
// import jacket7 from './assets/img/jacket/jacket7.jfif'
// import jacket8 from './assets/img/jacket/jacket8.jfif'
import trouser1 from './assets/img/pants/pant1.jpg'
import trouser2 from './assets/img/pants/pants10.jpg'
import trouser3 from './assets/img/pants/pant3.jpg'
import trouser4 from './assets/img/pants/pant4.jpg'
import trouser5 from './assets/img/pants/pant5.jpg'
// import trouser6 from './assets/img/pants/pant9.jpg'
import shorts1 from './assets/img/shorts/trouser1.jpg'
// import shorts2 from './assets/img/shorts/trouser2.jpg'
// import shorts3 from './assets/img/shorts/trouser3.jpg'
import shorts4 from './assets/img/shorts/trouser4.jpg'
import shorts5 from './assets/img/shorts/trouser5.jpg'
import shorts6 from './assets/img/shorts/trouser6.jpg'
// import skirtz1 from './assets/img/skirt/skirtz1.jfif'
// import skirtz2 from './assets/img/skirt/skirtz2.jfif'
// import skirtz3 from './assets/img/skirt/skirtz3.jfif'
// import skirtz4 from './assets/img/skirt/skirtz4.jfif'
// import skirtz5 from './assets/img/skirt/skirtz7.jfif'
// import skirtz6 from './assets/img/skirt/skirtz6.jfif'

const item = [
  {
    id: 1,
    price: 30,
    title: "Top",
    image: jacket1,
    color: "white",
    category: "jackets",
    class: "Top",
    description: "A classic leather jacket for a timeless, edgy look. Made with genuine leather, this jacket is perfect for any season and can be dressed up or down.",
    review: "I purchased this leather jacket, and it fits like a glove! The size one is a perfect fit for me. The quality is exceptional, and I'm extremely satisfied with my purchase."
  },
  // {
  //   id: 2,
  //   price: 20,
  //   title: "Denim Jacket",
  //   image: jacket2,
  //   category: "jackets",
  //   description: "A versatile denim jacket that complements your casual outfits. This jacket is made of high-quality denim fabric and provides a comfortable fit.",
  //   review: "The denim jacket is just what I was looking for. The size one fits perfectly, and it's comfortable to wear. It's my new favorite jacket for everyday use."
  // },
  {
    id: 3,
    price: 40,
    title: "Top",
    class:"Alter neck",
    color:"brown",
    image: shorts4,
    category: "shorts",
    description: "Stay cozy and stylish with this alter neck. It's perfect for those cool evenings and is designed for maximum comfort.",
    review: "I love this alter neck! It's super comfortable and the size one is a perfect fit. It keeps me warm on chilly nights, and the quality is excellent."
  },
  {
    id: 4,
    price: 20,
    title: "Top",
    class:"Crop Shirt",
    color:"brown",
    image: shorts5,
    category: "shorts",
    description: "Express your unique style with this crop shirt. The eye-catching design and comfortable fabric make it a great addition to your wardrobe.",
    review: "The crop shirt is awesome! The size one fits me just right, and the design is cool. It's my go-to casual shirt for a stylish look."
  },
  {
    id: 5,
    price: 50,
    title: "Elegant Evening Gown",
    image: gowns1,
    category: "gowns",
    class:"Gown",
    color:"green",
    description: "Step into the spotlight with this elegant evening gown. Its flowing silhouette and intricate details will make you the center of attention.",
    review: "I felt like a princess in this elegant gown. The size one is a perfect fit, and the gown made me stand out at the event. I received many compliments!"
  },
  {
    id: 6,
    price: 50,
    title: "Elegant dinner gown",
    class:"Gown",
    color:"pink",
    image: gown2,
    category: "gowns",
    description: "Dance the night away in this chiffon ball gown. Its lightweight and ethereal design makes it the perfect choice for special occasions.",
    review: "I wore the chiffon ball gown to a gala, and it was a hit! The size one fits me beautifully, and the gown is so comfortable for dancing the night away."
  },
  // {
  //   id: 7,
  //   price: 40,
  //   title: "Leather Shoulder Bag",
  //   image: skirtz1,
  //   category: "skirts",
  //   description: "Complete your stylish outfit with this leather shoulder bag. It's the perfect size for your essentials and adds a touch of elegance.",
  //   review: "This leather shoulder bag is my new favorite accessory. The size one is just right, and it complements my outfits perfectly. It's well-crafted and looks great!"
  // },
  // {
  //   id: 8,
  //   price: 20,
  //   title: "Canvas Tote Bag",
  //   image: skirtz2,
  //   category: "skirts",
  //   description: "Carry your essentials in style with this canvas tote bag. It's durable, spacious, and perfect for a day of shopping or a trip to the beach.",
  //   review: "I love my canvas tote bag! The size one is perfect for my needs, and it's sturdy and roomy. It's my go-to bag for shopping and beach days."
  // },
  {
    id: 9,
    price: 40,
    title: "Two Piece",
    image: trouser1,
    category: "pants",
    class:"Two piece",
    color:"white",
    description: "Upgrade your denim collection with these slim fit jeans. They offer a modern and flattering silhouette that's both comfortable and stylish.",
    review: "These slim fit jeans are fantastic! The size one fits like a charm, and they make me look great. They're my favorite jeans for any occasion."
  },
  {
    id: 10,
    price: 30,
    title: "Elegant gown",
    image: trouser2,
    category: "pants",
    class:"gown",
    color:"pink",
    description: "Stay practical and stylish with these alter neck gown. They provide ample pocket space and are suitable for various outdoor activities.",
    review: "Alter neck gown are a must for me, and these are perfect! The size one fits comfortably, and they have plenty of pockets for all my essentials."
  },
  {
    id: 11,
    price: 40,
    title: "Pinup tops",
    class:"Tops",
    color:"blue",
    image: jacket3,
    category: "jackets",
    description: "Add a touch of luxury to your wardrobe with this Pinup tops. Its soft texture and warm lining make it a great choice for colder weather.",
    review: "I'm in love with this Pinup tops! The size one is cozy and stylish, and it keeps me warm in the winter. It's a great investment."
  },
  {
    id: 12,
    price: 20,
    title: "Sweater",
    class:"Sweater tops",
    image: shorts6,
    category: "shorts",
    description: "Stay cozy and fashionable with this striped sweater. Its classic design and quality materials ensure both comfort and style.",
    review: "The striped sweater is my favorite for chilly days! The size one is just right, and it keeps me warm and stylish. I couldn't be happier."
  },
  {
    id: 13,
    price: 55,
    title: "Silk Evening Gown",
    class:"gown",
    color:"pink",
    image: gown5,
    category: "gowns",
    description: "Make a statement with this luxurious silk evening gown. Its flowing design and exquisite details are perfect for upscale events.",
    review: "I felt like a superstar in this silk evening gown! The size one is a perfect fit, and it's so elegant. It made the evening truly memorable."
  },
  // {
  //   id: 14,
  //   price: 32,
  //   title: "Leather Clutch",
  //   image: skirtz3,
  //   category: "skirts",
  //   description: "Complete your evening look with this elegant leather clutch. Its compact size and refined design make it a perfect accessory for formal occasions.",
  //   review: "The leather clutch is my go-to for special events. The size one is just right, and it holds everything I need while looking classy."
  // },
  {
    id: 15,
    price: 30,
    title: "Cargo Shorts",
    image: trouser3,
    category: "pants",
    description: "Stay comfortable and organized with these cargo shorts. They offer multiple pockets and a relaxed fit for your outdoor adventures.",
    review: "I love these cargo shorts! The size one is a great fit, and they're perfect for all my outdoor activities. They keep me organized and comfortable."
  },
  {
    id: 16,
    price: 20,
    title: "Casual Pants",
    image: trouser4,
    category: "pants",
    description: "Elevate your casual style with these versatile pants. They provide comfort and a timeless design that's suitable for various occasions.",
    review: "These casual pants are my new favorite! The size one is perfect, and they're comfortable for everyday wear. I can wear them for any occasion."
  },
  {
    id: 17,
    price: 50,
    title: "Elegant Gown",
    image: gown6,
    category: "gowns",
    description: "Be the epitome of elegance with this stunning gown. Its sparkling embellishments and flowing design make it ideal for formal events.",
    review: "I felt like a true queen in this elegant gown. The size one was a perfect fit, and the sparkling details were mesmerizing. I received endless compliments."
  },
  {
    id: 18,
    price: 50,
    title: "Leather Jacket",
    image: jacket4,
    category: "jackets",
    description: "A timeless classic, this leather jacket is designed for both style and durability. It's a must-have addition to any fashion-forward wardrobe.",
    review: "This leather jacket is pure perfection! The size one fits like it was tailored for me, and the quality is unmatched. It's my go-to jacket for any occasion."
  },
  // {
  //   id: 19,
  //   price: 30,
  //   title: "Floral Skirt",
  //   image: skirtz4,
  //   category: "skirts",
  //   description: "Add a touch of femininity to your outfit with this lovely floral skirt. Its vibrant floral pattern is perfect for spring and summer.",
  //   review: "I adore this floral skirt! The size one is a perfect fit, and the design is so cheerful. It's my favorite piece for warm and sunny days."
  // },
  {
    id: 20,
    price: 30,
    title: "Cargo Shorts",
    image: shorts1,
    category: "shorts",
    description: "Stay comfortable and relaxed with these cargo shorts. They provide ample storage and are ideal for outdoor activities.",
    review: "These cargo shorts are a game-changer! The size one is just right, and they're perfect for all my outdoor adventures. They're super practical and comfortable."
  },
  {
    id: 21,
    price: 50,
    title: "Slim Fit Pants",
    image: trouser5,
    category: "pants",
    description: "Achieve a sleek, tailored look with these slim fit pants. They are designed for a modern, sophisticated style.",
    review: "I love these slim fit pants! The size one provides a fantastic fit, and they make me look sharp and stylish. They're my new go-to for formal occasions."
  },
  {
    id: 22,
    price: 10,
    title: "Glamorous Gown",
    image: gown3,
    category: "gowns",
    description: "Dazzle the crowd with this glamorous gown. Its sparkling embellishments and flowing design are perfect for making a statement.",
    review: "I was a showstopper in this glamorous gown! The size one fits beautifully, and the sparkling details are breathtaking. It's a must-have for special events."
  },
];

export default item;
