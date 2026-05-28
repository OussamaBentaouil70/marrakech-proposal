export interface BlogSection {
  heading?: string
  body: string[]
  list?: string[]
  image?: string
}

export interface BlogPostData {
  slug: string
  title: string
  subtitle: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
  excerpt: string
  sections: BlogSection[]
}

export const blogPostsData: Record<string, BlogPostData> = {
  'how-to-organize-your-wedding-in-marrakech': {
    slug: 'how-to-organize-your-wedding-in-marrakech',
    title: 'How to Organize Your Wedding in Marrakech?',
    subtitle: 'The Ultimate Guide to Planning a Luxury Destination Wedding in Marrakech',
    author: 'Erica — Marrakech Proposal',
    date: 'September 7th, 2022',
    category: 'Wedding Planning',
    readTime: '8 min read',
    image: '/images/blog/blog-1.jpg',
    excerpt: 'A comprehensive guide to planning your dream destination wedding in the magical city of Marrakech — from venue selection to guest logistics.',
    sections: [
      {
        body: [
          'Marrakech has become one of the most sought-after destinations in the world for couples dreaming of an unforgettable wedding abroad. With its stunning palaces, luxury riads, desert landscapes, vibrant souks, refined hospitality, and year-round sunshine, the Red City offers an exceptional backdrop for a romantic, elegant, and immersive wedding experience.',
          'From intimate elopements to grand multi-day celebrations, organizing a wedding in Marrakech allows you to blend elegance, culture, emotion, and the art of Moroccan living. However, planning a destination wedding in Morocco also requires perfect organization, local expertise, and a clear vision so that every detail is perfectly orchestrated.',
          'In this guide, Marrakech Proposal shares the essential steps and best advice for organizing the wedding of your dreams in Marrakech.',
        ],
      },
      {
        heading: 'Why Choose Marrakech for Your Destination Wedding?',
        image: '/images/blog/blog-2.jpg',
        body: [
          'Marrakech offers a unique balance between luxury, authenticity, and unforgettable experiences.',
          'Whether you imagine a wedding in the Agafay Desert at sunset, a romantic ceremony in a riad in the heart of the Medina, an elegant wedding in a private villa surrounded by palm trees, or a multi-day celebration in a Moroccan palace — Marrakech offers spectacular venues and incomparable magical atmospheres.',
          'Couples also choose Marrakech for its pleasant climate and magnificent sunsets, luxury accommodations at competitive rates, direct international flight connections, cultural richness and hospitality, and the unique experiences offered to guests beyond the wedding itself.',
          'A destination wedding in Marrakech is more than a ceremony — it becomes a complete travel and emotional experience shared with your loved ones.',
        ],
      },
      {
        heading: 'Start Planning Your Marrakech Wedding Early Enough',
        body: [
          'One of the most common mistakes couples make when organizing a wedding in Marrakech is underestimating how quickly high-end venues book up, especially during peak season.',
          'The best periods for organizing a wedding in Marrakech are generally March to May, and September through early November.',
          'Luxury riads, private villas, palaces, photographers, caterers, and event service providers can be booked several months — sometimes more than a year — in advance.',
          'Starting early will allow you to secure the most beautiful wedding venues in Marrakech, compare options calmly, optimize your budget, efficiently organize guest logistics, and fully enjoy the preparation process without stress.',
        ],
      },
      {
        heading: 'Define Your Wedding Vision and Guest Experience',
        body: [
          'Before even choosing a venue or decoration, it is essential to define the general atmosphere and experience you want to create.',
          'Ask yourself the right questions: Do you prefer an intimate wedding or a grand celebration? Do you dream of a modern and luxurious wedding or a more traditional and authentic atmosphere? Do you want a one-day event or a multi-day experience? Do you want to incorporate elements of Moroccan culture? What emotions do you want your guests to experience?',
          'In Marrakech, weddings often become truly immersive experiences going far beyond the ceremony: welcome dinners, pool parties, desert experiences, traditional entertainment, wellness retreats, private souk visits, and Moroccan dinners under the stars.',
          'The guest experience becomes an essential part of the magic.',
        ],
      },
      {
        heading: 'Choosing the Perfect Wedding Venue in Marrakech',
        image: '/images/blog/blog-3.jpg',
        body: [
          'The venue is the foundation of your entire wedding experience. Marrakech offers an incredible diversity of settings — luxury palaces, traditional riads, private villas, desert camps, boutique hotels, estates with olive groves, panoramic rooftops, and elegant gardens.',
          'When choosing your wedding venue in Marrakech, several elements must be considered: accommodation capacity, privacy and exclusivity, accessibility, sound restrictions, catering possibilities, weather backup plans, flow between ceremony and dinner, technical possibilities, and guest comfort.',
          'This is precisely where an experienced wedding planner in Marrakech becomes indispensable. Local expertise allows for anticipating hidden logistical challenges and ensuring that the venue perfectly matches your vision.',
        ],
      },
      {
        heading: 'Planning Your Budget for a Marrakech Wedding',
        body: [
          'One of the advantages of organizing a wedding in Morocco is the great flexibility in possible styles and budgets. Whether you dream of an intimate luxury wedding, a chic destination wedding, or a spectacular multi-day celebration, Marrakech perfectly adapts to different levels of luxury and production.',
          'Your wedding budget should generally include: venue and accommodation, catering and beverages, wedding planner, decoration and flowers, photography and video, entertainment, lighting and sound, transport, beauty services, stationery, guest experiences, and contingencies.',
          'A professional wedding planner in Marrakech will help you distribute investments intelligently while maintaining a coherent and elegant experience.',
        ],
      },
      {
        heading: 'Organizing Guest Logistics for a Destination Wedding',
        image: '/images/blog/blog-4.jpg',
        body: [
          'Guest management is one of the most important aspects of a destination wedding in Marrakech. Your guests may be traveling from different countries and often discovering Morocco for the first time. Clear communication and careful organization will greatly enhance their experience.',
          'Key elements include: accommodation management, airport transfers, wedding schedules, local recommendations, transport between venues, welcome gifts, dress code advice, and activity suggestions.',
          'Many couples also create personalized welcome experiences with Moroccan touches such as traditional pastries, tea ceremonies, artisan gifts, live music, or custom itineraries. The goal is to make guests feel welcomed, comfortable, and immersed in the beauty of Marrakech from the moment they arrive.',
        ],
      },
      {
        heading: 'Working with Trusted Local Vendors',
        body: [
          'Building the right vendor team is essential for a successful destination wedding in Marrakech. An experienced local wedding planner will give you access to trusted photographers, videographers, florists, caterers, live musicians, DJs, makeup artists, transport teams, lighting and sound technicians, entertainers, and production specialists.',
          'Local expertise is particularly important in Morocco, as logistics, timelines, communication styles, and technical execution can vary considerably depending on the venue and vendors.',
          'At Marrakech Proposal, every vendor is carefully selected according to your style, guest count, priorities, budget, and the overall atmosphere you want to create. Every detail matters.',
        ],
      },
      {
        heading: 'Adding Moroccan Experiences to Your Wedding',
        image: '/images/blog/blog-5.jpg',
        body: [
          'One of the most magical aspects of a wedding in Marrakech is the opportunity to offer your guests unforgettable cultural experiences.',
          'Many couples incorporate: Gnawa musicians, traditional Moroccan dancers, henna ceremonies, camel arrival processions, desert dinners, fire shows, Moroccan tea ceremonies, artisan workshops, and live oriental music.',
          'These experiences create emotional memories while keeping the celebration authentic and immersive. The secret lies in the balance: blending elegance and luxury with the soul and beauty of Moroccan culture.',
        ],
      },
      {
        heading: 'Always Have a Plan B for Outdoor Weddings',
        body: [
          'Outdoor weddings in Marrakech are spectacular — but good planning remains essential. Depending on the season, temperatures, wind, or certain weather conditions can impact the event. A professional wedding planner will always anticipate weather contingencies, technical constraints, guest comfort, lighting changes, and logistical transitions between spaces.',
          'A well-thought-out backup plan guarantees an elegant and serene celebration regardless of circumstances.',
        ],
      },
      {
        heading: 'Why Hire a Wedding Planner in Marrakech?',
        body: [
          'Organizing a destination wedding from a distance can quickly become complex without local support. A luxury wedding planner in Marrakech helps you save time, avoid costly mistakes, access the best vendors, negotiate effectively, manage logistics, coordinate timelines, communicate with local teams, and transform your vision into a smooth and harmonious experience.',
          'Most importantly, it allows you to fully enjoy the adventure and focus on the emotion of your wedding rather than the stress of organization.',
        ],
      },
      {
        heading: 'Create the Wedding of Your Dreams in Marrakech',
        body: [
          'Marrakech is much more than a wedding destination — it is an experience filled with beauty, emotions, culture, and unforgettable memories. Whether you dream of an intimate elopement, a luxury destination wedding, a multi-day Indian wedding, or a romantic celebration under the Moroccan stars, the Red City offers infinite possibilities to create something truly extraordinary.',
          'At Marrakech Proposal, we design elegant, immersive, and emotional celebrations entirely tailored to each couple\'s vision. From venue sourcing to full wedding coordination, guest experiences, decoration, entertainment, and production — we take care of every detail so you can fully live every unforgettable moment.',
          'Ready to start planning your wedding in Marrakech? Let\'s create a truly unforgettable celebration together.',
        ],
      },
    ],
  },
}

export const blogPostsDataFR: Record<string, BlogPostData> = {
  'how-to-organize-your-wedding-in-marrakech': {
    slug: 'how-to-organize-your-wedding-in-marrakech',
    title: 'Comment organiser son mariage à Marrakech ?',
    subtitle: 'Le guide ultime pour préparer un mariage de destination de luxe à Marrakech',
    author: 'Erica — Marrakech Proposal',
    date: '7 Septembre 2022',
    category: 'Organisation de mariage',
    readTime: '8 min de lecture',
    image: '/images/blog/blog-1.jpg',
    excerpt: 'Un guide complet pour organiser le mariage de vos rêves à Marrakech — des lieux aux logistiques invités.',
    sections: [
      {
        body: [
          'Marrakech est aujourd\'hui l\'une des destinations les plus prisées au monde pour les couples rêvant d\'un mariage inoubliable à l\'étranger. Entre palais somptueux, riads de luxe, paysages désertiques, souks vibrants, hospitalité raffinée et soleil toute l\'année, la Ville Rouge offre un décor exceptionnel pour vivre une expérience de mariage romantique, élégante et immersive.',
          'Des mariages intimistes aux célébrations grandioses sur plusieurs jours, organiser un mariage à Marrakech permet de mêler élégance, culture, émotion et art de vivre marocain. Mais préparer un mariage de destination au Maroc demande également une parfaite organisation, une expertise locale et une vision claire afin que chaque détail soit parfaitement orchestré.',
          'Dans ce guide, Marrakech Proposal partage les étapes essentielles et les meilleurs conseils pour organiser le mariage de vos rêves à Marrakech.',
        ],
      },
      {
        heading: 'Pourquoi choisir Marrakech pour votre mariage de destination ?',
        image: '/images/blog/blog-2.jpg',
        body: [
          'Marrakech offre un équilibre unique entre luxe, authenticité et expériences inoubliables.',
          'Que vous imaginiez un mariage dans le désert d\'Agafay au coucher du soleil, une cérémonie romantique dans un riad au cœur de la Médina, un mariage élégant dans une villa privée entourée de palmiers, ou une célébration multi-jours dans un palais marocain — Marrakech propose des lieux spectaculaires et des atmosphères magiques incomparables.',
          'Les couples choisissent également Marrakech pour son climat agréable et ses magnifiques couchers de soleil, ses hébergements de luxe à des tarifs compétitifs, ses connexions aériennes internationales directes, sa richesse culturelle et son hospitalité, et les expériences uniques proposées aux invités au-delà du mariage lui-même.',
          'Un mariage de destination à Marrakech ne se résume pas à une cérémonie : c\'est une véritable expérience de voyage et d\'émotions à partager avec ses proches.',
        ],
      },
      {
        heading: 'Commencer l\'organisation de votre mariage à Marrakech suffisamment tôt',
        body: [
          'L\'une des erreurs les plus fréquentes des couples organisant un mariage à Marrakech est de sous-estimer la rapidité avec laquelle les lieux de réception haut de gamme se réservent, notamment pendant la haute saison.',
          'Les meilleures périodes pour organiser un mariage à Marrakech sont généralement de mars à mai, puis de septembre au début novembre.',
          'Les riads de luxe, villas privées, palais, photographes, traiteurs et prestataires événementiels peuvent être réservés plusieurs mois — parfois plus d\'un an — à l\'avance.',
          'Commencer tôt vous permettra de réserver les plus beaux lieux de mariage à Marrakech, comparer sereinement les options, optimiser votre budget, organiser efficacement la logistique des invités, et profiter pleinement du processus de préparation sans stress.',
        ],
      },
      {
        heading: 'Définir votre vision du mariage et l\'expérience invités',
        body: [
          'Avant même de choisir un lieu ou une décoration, il est essentiel de définir l\'ambiance générale et l\'expérience que vous souhaitez créer.',
          'Posez-vous les bonnes questions : Préférez-vous un mariage intimiste ou une grande célébration ? Rêvez-vous d\'un mariage moderne et luxueux ou d\'une ambiance plus traditionnelle et authentique ? Souhaitez-vous un événement sur une journée ou plusieurs jours ? Voulez-vous intégrer des éléments de culture marocaine ? Quelles émotions souhaitez-vous faire vivre à vos invités ?',
          'À Marrakech, les mariages deviennent souvent de véritables expériences immersives allant bien au-delà de la cérémonie : welcome dinners, pool parties, expériences dans le désert, animations traditionnelles, retraites bien-être, visites privées des souks, dîners marocains sous les étoiles.',
          'L\'expérience invités devient une partie essentielle de la magie.',
        ],
      },
      {
        heading: 'Choisir le lieu de mariage idéal à Marrakech',
        image: '/images/blog/blog-3.jpg',
        body: [
          'Le lieu de réception constitue la base de toute l\'expérience de votre mariage. Marrakech propose une incroyable diversité de lieux — palais luxueux, riads traditionnels, villas privées, camps dans le désert, hôtels boutique, domaines avec oliveraies, rooftops panoramiques, et jardins élégants.',
          'Lors du choix de votre lieu de mariage à Marrakech, plusieurs éléments doivent être pris en compte : capacité d\'hébergement, intimité et privatisation, accessibilité, restrictions sonores, possibilités de restauration, plan B météo, fluidité entre cérémonie et dîner, contraintes techniques, et confort des invités.',
          'C\'est précisément là qu\'un wedding planner expérimenté à Marrakech devient indispensable. Une expertise locale permet d\'anticiper les défis logistiques cachés et de s\'assurer que le lieu correspond parfaitement à votre vision.',
        ],
      },
      {
        heading: 'Prévoir le budget de votre mariage à Marrakech',
        body: [
          'L\'un des avantages d\'organiser un mariage au Maroc est la grande flexibilité des styles et des budgets possibles. Que vous rêviez d\'un mariage intimiste de luxe, d\'un mariage chic à destination, ou d\'une célébration spectaculaire sur plusieurs jours, Marrakech s\'adapte parfaitement à différents niveaux de luxe et de production.',
          'Votre budget mariage doit généralement inclure : lieu et hébergement, traiteur et boissons, wedding planner, décoration et fleurs, photo et vidéo, divertissement, son et lumière, transport, mise en beauté, papeterie, expériences invités, et imprévus.',
          'Un wedding planner professionnel à Marrakech vous aidera à répartir intelligemment les investissements tout en maintenant une expérience cohérente et élégante.',
        ],
      },
      {
        heading: 'Travailler avec des prestataires locaux de confiance',
        image: '/images/blog/blog-4.jpg',
        body: [
          'Construire la bonne équipe de prestataires est essentiel pour la réussite d\'un mariage de destination à Marrakech. Un wedding planner local expérimenté vous donnera accès à des photographes de confiance, vidéastes, fleuristes, traiteurs, musiciens live, DJs, maquilleurs, équipes transport, techniciens lumière et son, animateurs, et spécialistes production.',
          'L\'expertise locale est particulièrement importante au Maroc, car la logistique, les délais et les méthodes de travail peuvent varier considérablement selon les lieux et les fournisseurs.',
          'Chez Marrakech Proposal, chaque prestataire est soigneusement sélectionné selon votre style, votre nombre d\'invités, vos priorités, votre budget, et l\'atmosphère globale souhaitée. Chaque détail compte.',
        ],
      },
      {
        heading: 'Ajouter des expériences marocaines à votre mariage',
        image: '/images/blog/blog-5.jpg',
        body: [
          'L\'un des aspects les plus magiques d\'un mariage à Marrakech est la possibilité d\'offrir à vos invités des expériences culturelles inoubliables.',
          'De nombreux couples intègrent : musiciens Gnawa, danseurs traditionnels marocains, cérémonies de henné, arrivées à dos de chameau, dîners dans le désert, spectacles de feu, cérémonies du thé marocain, ateliers artisanaux, et musique orientale live.',
          'Ces expériences créent des souvenirs émotionnels tout en conservant une célébration authentique et immersive. Le secret réside dans l\'équilibre : mêler élégance et luxe avec l\'âme et la beauté de la culture marocaine.',
        ],
      },
      {
        heading: 'Prévoir un plan B pour les mariages en extérieur',
        body: [
          'Les mariages en extérieur à Marrakech sont spectaculaires — mais une bonne anticipation reste essentielle. Selon la saison, les températures, le vent ou certaines conditions météo peuvent impacter le déroulement de l\'événement. Un wedding planner professionnel anticipera toujours les imprévus météo, les contraintes techniques, le confort des invités, les changements de lumière, et les transitions logistiques entre les espaces.',
          'Un plan B bien pensé garantit une célébration élégante et sereine quelles que soient les circonstances.',
        ],
      },
      {
        heading: 'Pourquoi faire appel à un wedding planner à Marrakech ?',
        body: [
          'Organiser un mariage à destination à distance peut rapidement devenir complexe sans accompagnement local. Un wedding planner de luxe à Marrakech vous aide à gagner du temps, éviter les erreurs coûteuses, accéder aux meilleurs prestataires, négocier efficacement, gérer la logistique, coordonner les timings, communiquer avec les équipes locales, et transformer votre vision en une expérience fluide et harmonieuse.',
          'Mais surtout, cela vous permet de profiter pleinement de l\'aventure et de vous concentrer sur l\'émotion de votre mariage plutôt que sur le stress de l\'organisation.',
        ],
      },
      {
        heading: 'Créez le mariage de vos rêves à Marrakech',
        body: [
          'Marrakech est bien plus qu\'une destination mariage : c\'est une expérience remplie de beauté, d\'émotions, de culture et de souvenirs inoubliables. Que vous rêviez d\'un mariage intimiste, d\'un mariage de destination de luxe, d\'un mariage indien sur plusieurs jours, ou d\'une célébration romantique sous les étoiles marocaines, la Ville Rouge offre des possibilités infinies pour créer quelque chose de véritablement extraordinaire.',
          'Chez Marrakech Proposal, nous concevons des célébrations élégantes, immersives et émotionnelles entièrement pensées autour de la vision de chaque couple. De la recherche du lieu à la coordination complète du mariage, en passant par les expériences invités, la décoration, le divertissement et la production — nous prenons soin de chaque détail afin que vous puissiez vivre pleinement chaque instant.',
          'Prêts à commencer l\'organisation de votre mariage à Marrakech ? Créons ensemble une célébration véritablement inoubliable.',
        ],
      },
    ],
  },
}

export const blogPostsDataES: Record<string, BlogPostData> = {
  'how-to-organize-your-wedding-in-marrakech': {
    slug: 'how-to-organize-your-wedding-in-marrakech',
    title: '¿Cómo organizar tu boda en Marrakech?',
    subtitle: 'La guía definitiva para planificar una boda de destino de lujo en Marrakech',
    author: 'Erica — Marrakech Proposal',
    date: '7 de Septiembre de 2022',
    category: 'Planificación de bodas',
    readTime: '8 min de lectura',
    image: '/images/blog/blog-1.jpg',
    excerpt: 'Una guía completa para organizar la boda de tus sueños en la mágica ciudad de Marrakech — desde la selección del venue hasta la logística de invitados.',
    sections: [
      {
        body: [
          'Marrakech se ha convertido en uno de los destinos más deseados del mundo para parejas que sueñan con una boda inolvidable en el extranjero. Con sus impresionantes palacios, riads de lujo, paisajes desérticos, vibrantes souks, refinada hospitalidad y sol durante todo el año, la Ciudad Roja ofrece el escenario perfecto para una experiencia de boda romántica e inmersiva.',
          'Desde elopements íntimos hasta extravagantes celebraciones de varios días, organizar una boda en Marrakech combina elegancia, cultura, aventura y belleza atemporal. Sin embargo, planificar una boda de destino en Marruecos también requiere experiencia local, coordinación cuidadosa y una visión clara para que cada detalle fluya perfectamente.',
          'En esta guía, Marrakech Proposal comparte los pasos más importantes y consejos exclusivos para ayudarte a organizar la boda de tus sueños en Marrakech.',
        ],
      },
      {
        heading: '¿Por qué elegir Marrakech para tu boda de destino?',
        image: '/images/blog/blog-2.jpg',
        body: [
          'Marrakech ofrece algo verdaderamente único: un equilibrio perfecto entre lujo, autenticidad y experiencias inolvidables.',
          'Ya sea que imagines una boda en el desierto de Agafay iluminada con velas, una romántica ceremonia en un riad en la Medina, una boda elegante en una villa de lujo rodeada de palmeras, o una celebración de varios días en un palacio marroquí — Marrakech ofrece venues extraordinarios y atmósferas mágicas incomparables.',
          'Las parejas también eligen Marrakech por su clima cálido y hermosos atardeceres, alojamientos de lujo a precios competitivos, conexiones aéreas internacionales directas, la riqueza de la cultura y hospitalidad marroquí, y experiencias inolvidables para los invitados más allá del día de la boda.',
          'Una boda de destino en Marrakech no es solo una ceremonia — se convierte en una experiencia completa de viaje y emociones compartida con las personas que más amas.',
        ],
      },
      {
        heading: 'Comienza a planificar tu boda en Marrakech con anticipación',
        body: [
          'Uno de los mayores errores que cometen las parejas al organizar una boda en Marrakech es subestimar la rapidez con la que los venues de lujo se reservan, especialmente durante la temporada alta.',
          'Los mejores períodos para bodas de destino en Marrakech suelen ser de marzo a mayo, y de septiembre hasta principios de noviembre.',
          'Riads de lujo, villas privadas, palacios, fotógrafos, caterings y proveedores de entretenimiento pueden estar completamente reservados muchos meses — incluso más de un año — antes.',
          'Comenzar temprano te permitirá asegurar los mejores venues para bodas en Marrakech, comparar opciones con tranquilidad, optimizar tu presupuesto, organizar correctamente la logística de los invitados, y disfrutar del proceso de planificación sin estrés.',
        ],
      },
      {
        heading: 'Define la visión de tu boda y la experiencia de los invitados',
        body: [
          'Antes de elegir venues o decoración, es importante definir la atmósfera y experiencia general que deseas crear.',
          '¿Prefieres un elopement íntimo o una gran boda de destino? ¿Sueñas con una boda moderna y lujosa o algo más tradicional y auténtico? ¿Quieres una celebración de un solo día o una experiencia de varios días? ¿Te gustaría incorporar elementos culturales marroquíes? ¿Qué emociones quieres transmitir a tus invitados?',
          'En Marrakech, las bodas suelen convertirse en experiencias inmersivas que van mucho más allá de la ceremonia: welcome dinners, pool parties, experiencias en el desierto, entretenimiento tradicional, retiros de spa, visitas guiadas a los souks, cenas marroquíes bajo las estrellas.',
          'La experiencia de los invitados se convierte en parte de la magia.',
        ],
      },
      {
        heading: 'Elegir el venue perfecto para tu boda en Marrakech',
        image: '/images/blog/blog-3.jpg',
        body: [
          'El venue es la base de todo el diseño y experiencia de tu boda. Marrakech ofrece una increíble variedad de lugares — palacios de lujo, riads tradicionales, villas privadas, campamentos en el desierto, hoteles boutique, fincas con olivares, rooftops panorámicos, y jardines elegantes.',
          'Al elegir tu venue de boda en Marrakech, es importante considerar: capacidad de alojamiento, privacidad y exclusividad, accesibilidad, restricciones de sonido, posibilidades de catering, planes alternativos en caso de mal clima, flujo entre ceremonia y cena, posibilidades técnicas, y comodidad para los invitados.',
          'Aquí es donde trabajar con un wedding planner experimentado en Marrakech se vuelve esencial. La experiencia local ayuda a evitar desafíos logísticos ocultos y garantiza que el venue realmente se adapte a tu visión.',
        ],
      },
      {
        heading: 'Planificar el presupuesto de tu boda en Marrakech',
        body: [
          'Una de las ventajas de organizar una boda en Marruecos es la flexibilidad en estilos y presupuestos. Ya sea que desees un elopement íntimo de lujo, una boda chic de destino, o una espectacular celebración de varios días, Marrakech puede adaptarse perfectamente a diferentes niveles de lujo y producción.',
          'Tu presupuesto de boda generalmente debe incluir: venue y alojamiento, catering y bebidas, wedding planner, decoración y flores, fotografía y video, entretenimiento, iluminación y sonido, transporte, servicios de belleza, papelería, experiencias para invitados, y gastos imprevistos.',
          'Un wedding planner profesional en Marrakech te ayudará a priorizar las inversiones de manera inteligente mientras mantiene una experiencia elegante y coherente.',
        ],
      },
      {
        heading: 'Organizar la logística de los invitados',
        body: [
          'La gestión de invitados es uno de los aspectos más importantes de una boda de destino en Marrakech. Tus invitados pueden viajar desde distintos países y, muchas veces, descubrir Marruecos por primera vez. Una comunicación clara y una organización cuidada elevarán enormemente su experiencia.',
          'Los elementos clave incluyen: gestión de alojamiento, traslados desde el aeropuerto, cronogramas de la boda, recomendaciones locales, transporte entre venues, regalos de bienvenida, consejos de dress code, y sugerencias de actividades.',
          'El objetivo es hacer que los invitados se sientan bienvenidos, cómodos e inmersos en la belleza de Marrakech desde el momento de su llegada.',
        ],
      },
      {
        heading: 'Trabaja con proveedores locales de confianza',
        image: '/images/blog/blog-4.jpg',
        body: [
          'Construir el equipo de proveedores adecuado es esencial para una boda de destino exitosa en Marrakech. Un wedding planner local experimentado te dará acceso a fotógrafos de confianza, videógrafos, floristas, caterings, músicos en vivo, DJs, maquilladores, equipos de transporte, técnicos de iluminación y sonido, animadores, y especialistas en producción.',
          'La experiencia local es especialmente importante en Marruecos, ya que la logística, los tiempos, los estilos de comunicación y la ejecución técnica pueden variar considerablemente dependiendo del venue y los proveedores.',
          'En Marrakech Proposal, seleccionamos cuidadosamente cada proveedor según tu estilo, el número de invitados, tus prioridades, tu presupuesto, y la atmósfera general que deseas crear. Cada detalle importa.',
        ],
      },
      {
        heading: 'Añade experiencias marroquíes a tu celebración',
        image: '/images/blog/blog-5.jpg',
        body: [
          'Uno de los aspectos más mágicos de casarse en Marrakech es la oportunidad de crear experiencias culturales inolvidables para tus invitados.',
          'Muchas parejas incorporan: músicos Gnawa, bailarines tradicionales marroquíes, ceremonias de henna, entradas en camello, cenas en el desierto, espectáculos de fuego, ceremonias de té marroquí, talleres artesanales, o música oriental en vivo.',
          'La clave está en el equilibrio: combinar elegancia y lujo con el alma y la belleza de la cultura marroquí.',
        ],
      },
      {
        heading: 'Ten siempre un plan B para bodas al aire libre',
        body: [
          'Las bodas al aire libre en Marrakech son impresionantes — pero planificar con responsabilidad es esencial. Dependiendo de la temporada, las temperaturas, el viento o incluso lluvias ocasionales pueden afectar la celebración. Un wedding planner profesional siempre anticipará contingencias climáticas, problemas técnicos, comodidad de los invitados, cambios de iluminación, y transiciones logísticas entre espacios.',
          'Tener un buen plan B garantiza que la boda siga siendo elegante y sin estrés bajo cualquier circunstancia.',
        ],
      },
      {
        heading: 'Crea la boda de tus sueños en Marrakech',
        body: [
          'Marrakech es mucho más que un destino de bodas — es una experiencia llena de belleza, emoción, cultura y recuerdos inolvidables. Ya sea que sueñes con un elopement íntimo, una boda de destino de lujo, una boda india de varios días, o una celebración romántica bajo las estrellas marroquíes, la Ciudad Roja ofrece infinitas posibilidades para crear algo verdaderamente extraordinario.',
          'En Marrakech Proposal, nos especializamos en diseñar celebraciones elegantes, emocionales e inmersivas adaptadas a la visión de cada pareja. Desde la búsqueda del venue hasta la coordinación completa de la boda, experiencias para invitados, decoración, entretenimiento y producción — nos encargamos de cada detalle para que puedan disfrutar plenamente de su momento.',
          'Listos para comenzar a planificar su boda en Marrakech? Creemos juntos una celebración verdaderamente inolvidable.',
        ],
      },
    ],
  },
}
