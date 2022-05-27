export interface Item {
  id: Number;
  title: string;
  image: string;
  description: string;
  price: Number;
}

export const items: Item[] = [
  {
    id: 1,
    title: 'Nike Downshifter 11',
    image: '../assets/Data/Nike1.png',
    description:
      'La Nike Downshifter 11 vous offre un soutien léger et flexible pour vous permettre de continuer. Il conserve le même amorti doux de la dernière version et ajoute plus de soutien autour du milieu du pied, pour le rendre confortable à porter longtemps après votre entraînement.',
    price: 120,
  },
  {
    id: 2,
    title: 'Nike Air Force 1 PLT.AF.ORM',
    image: '../assets/Data/Nike2.png',
    description:
      "Laissez le style AF-1 classique et facile à porter à la hauteur de l'occasion avec la Nike Air Force 1 PLT.AF.ORM. Sa semelle intercalaire élégamment formée et surélevée offre une nouvelle voix fière à la franchise Hoops. Le cuir de la tige se casse facilement et vieillit à la perfection tandis que le col sculpté et le talon moelleux le gardent confortable. Captivez votre auditoire.",
    price: 79.99,
  },
  {
    id: 3,
    title: 'Air Jordan 1 Zoom Cmft',
    image: '../assets/Data/Nike3.png',
    description:
      'Rendre le style iconique encore plus confortable. La Air Jordan 1 Zoom Cmft revisite la 1ère Air Jordan avec un amorti léger et discret et des éléments qui améliorent la portabilité. Les cuirs et les textiles de la tige ont une sensation de rodage. Un col doublé et rembourré épouse le talon pour un ajustement sûr.',
    price: 199,
  },
  {
    id: 4,
    title: 'Nike Air Presto x Hello Kitty',
    image: '../assets/Data/Nike4.png',
    description:
      "Laissez le mythe devenir réalité et entrez dans un monde d'arcs-en-ciel et de soleil avec la Nike Air Presto x Hello Kitty. Du talon Hello Kitty moulé sur mesure à son nœud rouge sur la languette, votre personnage de dessin animé super mignon préféré se joint à votre voyage.",
    price: 85.55,
  },
  {
    id: 5,
    title: "Nike Blazer Mid '77 Jumbo",
    image: '../assets/Data/Nike5.png',
    description:
      "Loué par beaucoup pour son look et sa sensation durables, les incontournables de la garde-robe se rafraîchissent avec le Nike Blazer Mid '77 Jumbo. marche et arrêt. Le design Swoosh surdimensionné et les lacets géants ajoutent une touche amusante.",
    price: 190.99,
  },
  {
    id: 6,
    title: 'Nike Air Max 90',
    image: '../assets/Data/Nike6.png',
    description:
      "La Nike Air Max 90 Slide rend hommage à la chaussure légendaire qui a bouleversé la scène des sneakers il y a 30 ans. L'unité Max Air visible au talon célèbre son solide héritage, tandis que les éléments colorés en TPU cousus ajoutent un style rétro. La semelle intérieure en mousse et la doublure en peluche offrent confort et soutien. Un Swoosh brodé et des matériaux haut de gamme élèvent cette claquette dans une catégorie à part.",
    price: 99.99,
  },
  {
    id: 7,
    title: 'Nike Air Max Pre-Day',
    image: '../assets/Data/Nike7.png',
    description:
      "Prenant le look classique de l'héritage Nike Running dans un nouveau royaume, la Nike Air Max Pre-Day vous apporte un look rapide qui est prêt pour le monde d'aujourd'hui. Un véritable clin d'œil au passé avec un design composé d'au moins 20 % de matériaux recyclés. en poids, il maintient l'esthétique rétro-athlétique vivante. Une nouvelle fenêtre Air dynamise le look, mélangeant un style qui fait tourner les têtes avec un amorti incroyablement doux.",
    price: 190,
  },
  {
    id: 8,
    title: 'Nike Go FlyEase',
    image: '../assets/Data/Nike8.png',
    description:
      "Juste au moment où vous pensiez avoir tout vu, Nike impressionne avec une toute nouvelle façon d'entrer rapidement et facilement dans vos chaussures. L'ensemble du talon (y compris la semelle) des charnières Nike Go FlyEase s'ouvre pour une entrée totalement mains libres. .Enfilez, descendez et hop! Vous êtes prêt.",
    price: 200,
  },
  {
    id: 9,
    title: 'PG 6 EP',
    image: '../assets/Data/Nike9.png',
    description:
      "La Nike Metcon 7 est la référence en matière d'entraînement aux poids, encore plus résistante et plus stable que les versions précédentes. Nous avons également ajouté de la mousse React qui améliore le confort pour vous garder prêt pour le cardio à haute intensité. pour que vous puissiez oublier qu'ils se détachent lorsque vous vous concentrez sur votre prochaine PR.",
    price: 210.99,
  },
];
