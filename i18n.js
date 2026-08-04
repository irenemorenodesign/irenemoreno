(function(){
  // Shared translation dictionary for the whole site.
  // Only descriptive/UI copy lives here — design categories, project titles
  // and proper nouns are never wrapped in [data-i18n], so they're untouched.
  var DICT = {
    ESP: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.work': 'Trabajo',
      'home.eyebrow': 'Proyectos seleccionados',
      'home.viewAll': 'Ver todos los proyectos',
      'home.scroll': 'Desplázate',
      'work.eyebrowProjects': 'Proyectos',
      'work.all': 'TODOS',
      'work.viewProject': 'Ver proyecto',
      'work.close': 'Cerrar',
      'about.role': 'Diseñadora Gráfica',
      'job.motion': 'Diseñadora de Motion',
      'about.introP1': 'Soy diseñadora gráfica en Barcelona, enfocada en branding, diseño editorial, packaging y motion.',
      'about.introP2': 'Creo que el diseño es una forma de contar historias, de crear experiencias con sentido y de conectar con las personas. Disfruto transformando ideas en identidades visuales claras, cuidadas y memorables.',
      'about.contact': 'Contacto',
      'about.experience': 'Experiencia profesional',
      'about.present': 'Presente',
      'about.education': 'Formación',
      'about.skills': 'Habilidades',
      'proj.nextProject': 'Siguiente proyecto',
      'proj.backToTop': 'Volver arriba',
      'proj.view': 'Ver',
      'carousel.prev': 'Anterior',
      'carousel.next': 'Siguiente',
      'verbena.desc': 'Verbena es una revista que nace de la necesidad de explorar la fiesta como fenómeno cultural y social. Hablamos de la fiesta no solo como entretenimiento, sino como expresión colectiva, como acto simbólico, como espacio de encuentro, libertad e identidad. Cada número gira en torno a un tema o un hilo conductor que nos permite profundizar, analizar y celebrar las diferentes formas de festividad. Proyecto colaborativo con Paula Arqué.',
      'verbena.narrow': 'Este primer número pone el foco en cuatro fiestas de carácter religioso muy arraigadas a la cultura. Fiestas que, con el paso del tiempo, han ido evolucionando y adquiriendo nuevos significados, a menudo alejados de su base espiritual inicial.',
      'verbena.caption1': 'El recorrido empieza con la Semana Santa de Sevilla, donde el silencio y la puesta en escena barroca crean una celebración llena de carga emocional. En Madrid, San Isidro mezcla devoción y tradición popular entre mantones y chulapos.',
      'calcot.desc1': 'Calçot Truck es una identidad visual para un concepto ficticio de street food que celebra la cultura catalana a través de una de sus tradiciones gastronómicas más emblemáticas: la calçotada. El proyecto reinterpreta este ritual popular en un contexto contemporáneo, acercando la identidad catalana a un público más amplio mediante un lenguaje gráfico desenfadado y actual.',
      'calcot.desc2': 'La identidad toma como referencia la estética reconocible de los locales de kebab, reinterpretándola como un guiño visual a la cultura popular. A través de ilustraciones, una tipografía contundente y una paleta de colores vibrante, el proyecto crea un contraste entre el imaginario del fast food y la tradición catalana, dando lugar a una identidad cercana, divertida y con personalidad.',
      'anim.prev': 'Animación anterior',
      'anim.next': 'Animación siguiente',
      'asantodeque.desc1': '¿A santo de qué? es un proyecto de branding y packaging que pone en valor las fiestas populares de España como expresión de identidad, territorio y tradición. La colección reúne seis celebraciones —San Fermín, La Mercè, San Isidro, San Mateo, Sant Joan y El Pilar—, vinculando cada una con la denominación de origen correspondiente.',
      'asantodeque.desc2': 'El proyecto parte de una reflexión sobre el origen de estas festividades: aunque hoy las vivimos como celebraciones colectivas, muchas nacen de la devoción a un santo o patrona. De esta idea surge el naming ¿A santo de qué?, una expresión popular que juega con ese doble significado y despierta la curiosidad por descubrir la historia detrás de cada fiesta. El vino actúa como vehículo conductor de la colección, reforzando el vínculo entre territorio, memoria y celebración colectiva.',
      'asantodeque.mapText': 'Cada fiesta se vincula a un vino de su territorio, estableciendo una relación entre celebración, paisaje e identidad. Las seis referencias pertenecen a diferentes Denominaciones de Origen de España, convirtiendo al vino en el hilo conductor de la colección y en un símbolo del patrimonio cultural que comparten cada fiesta y su lugar de origen.',
      'asantodeque.narrow': 'La identidad se materializa en una colección de seis etiquetas ilustradas, donde cada diseño representa los símbolos más característicos de su fiesta mediante un lenguaje gráfico contemporáneo. El sistema se extiende a estampas coleccionables dedicadas a cada santo y a un packaging compuesto por cajas individuales y una caja de colección, compartiendo todos los soportes un mismo lenguaje visual.',
      'asantodeque.animLabel': 'Animaciones',
      'transit.desc': 'Transit es la identidad visual de un festival ficticio que explora el concepto del tránsito humano como punto de encuentro entre personas, culturas y disciplinas artísticas. El proyecto traslada esta idea a la música, el arte y la gastronomía, que se convierten en espacios de conexión e intercambio. La identidad se construye a partir de un sistema gráfico flexible y adaptable, diseñado para funcionar de forma coherente en todos los soportes del festival. El uso de una tipografía de gran impacto, una paleta cromática vibrante y composiciones dinámicas refuerzan la sensación de movimiento y energía, dando lugar a una identidad contemporánea, reconocible y versátil aplicada a cartelería, señalética, merchandising, plataformas digitales e intervenciones urbanas. Proyecto colaborativo con Martina Fernández.',
      'parisfont.desc1': 'El proyecto parte de la creación de una tipografía inspirada en el modernismo, tomando como principal referencia algunos carteles de Cigarrillos París, donde destaca el marcado contraste del peso horizontal en las letras. A partir de este referente, el objetivo fue reinterpretar ese lenguaje visual desde una perspectiva contemporánea.',
      'parisfont.desc2': 'El resultado es una tipografía funcional y versátil, que mantiene un carácter ornamental y distintivo, aportando personalidad sin renunciar a la legibilidad. Proyecto colaborativo con Martina Fernández.',
      'parisfont.narrow': 'Más allá de recuperar rasgos formales del modernismo, el proyecto busca reinterpretar su esencia desde una perspectiva actual. Cada decisión de diseño responde a la intención de crear una tipografía con identidad propia, capaz de transmitir el carácter ornamental de la referencia original sin renunciar a la claridad, la versatilidad y la legibilidad en aplicaciones contemporáneas.',
      'motion.desc': 'Esta selección reúne diferentes proyectos de motion design, desde piezas experimentales hasta trabajos desarrollados para branding, redes sociales y campañas. Cada animación explora el movimiento como una herramienta para comunicar, reforzar identidades visuales y dar vida a conceptos gráficos, combinando ritmo, tipografía e imagen para crear piezas dinámicas y atractivas.',
      'posters.desc': 'Esta colección reúne una selección de pósters realizados tanto por iniciativa personal como por encargos profesionales. Los proyectos personales son un espacio de experimentación visual, mientras que los trabajos freelance responden a necesidades reales de comunicación, principalmente para la discoteca Cam Bernades, donde he desarrollado la identidad gráfica de diferentes eventos y campañas.'
    },
    CAT: {
      'nav.home': 'Inici',
      'nav.about': 'Sobre mi',
      'nav.work': 'Treball',
      'home.eyebrow': 'Projectes seleccionats',
      'home.viewAll': 'Veure tots els projectes',
      'home.scroll': 'Desplaça’t',
      'work.eyebrowProjects': 'Projectes',
      'work.all': 'TOTS',
      'work.viewProject': 'Veure projecte',
      'work.close': 'Tancar',
      'about.role': 'Dissenyadora Gràfica',
      'job.motion': 'Dissenyadora de Motion',
      'about.introP1': 'Sóc dissenyadora gràfica a Barcelona, centrada en branding, disseny editorial, packaging i motion.',
      'about.introP2': 'Crec que el disseny és una manera d’explicar històries, de crear experiències amb sentit i de connectar amb les persones. Gaudeixo transformant idees en identitats visuals clares, acurades i memorables.',
      'about.contact': 'Contacte',
      'about.experience': 'Experiència professional',
      'about.present': 'Actualitat',
      'about.education': 'Formació',
      'about.skills': 'Habilitats',
      'proj.nextProject': 'Següent projecte',
      'proj.backToTop': 'Tornar amunt',
      'proj.view': 'Veure',
      'carousel.prev': 'Anterior',
      'carousel.next': 'Següent',
      'verbena.desc': 'Verbena és una revista que neix de la necessitat d’explorar la festa com a fenomen cultural i social. Parlem de la festa no només com a entreteniment, sinó com a expressió col·lectiva, com a acte simbòlic, com a espai de trobada, llibertat i identitat. Cada número gira entorn d’un tema o un fil conductor que ens permet aprofundir, analitzar i celebrar les diferents formes de festivitat. Projecte col·laboratiu amb Paula Arqué.',
      'verbena.narrow': 'Aquest primer número posa el focus en quatre festes de caràcter religiós molt arrelades a la cultura. Festes que, amb el pas del temps, han anat evolucionant i adquirint nous significats, sovint allunyats de la seva base espiritual inicial.',
      'verbena.caption1': 'El recorregut comença amb la Setmana Santa de Sevilla, on el silenci i la posada en escena barroca creen una celebració plena de càrrega emocional. A Madrid, San Isidro barreja devoció i tradició popular entre mantons i chulapos.',
      'calcot.desc1': 'Calçot Truck és una identitat visual per a un concepte fictici de street food que celebra la cultura catalana a través d’una de les seves tradicions gastronòmiques més emblemàtiques: la calçotada. El projecte reinterpreta aquest ritual popular en un context contemporani, apropant la identitat catalana a un públic més ampli mitjançant un llenguatge gràfic desenfadat i actual.',
      'calcot.desc2': 'La identitat pren com a referència l’estètica reconeixible dels locals de kebab, reinterpretant-la com una picada d’ullet visual a la cultura popular. A través d’il·lustracions, una tipografia contundent i una paleta de colors vibrant, el projecte crea un contrast entre l’imaginari del fast food i la tradició catalana, donant lloc a una identitat propera, divertida i amb personalitat.',
      'anim.prev': 'Animació anterior',
      'anim.next': 'Animació següent',
      'asantodeque.desc1': '¿A santo de qué? és un projecte de branding i packaging que posa en valor les festes populars d’Espanya com a expressió d’identitat, territori i tradició. La col·lecció reuneix sis celebracions —San Fermín, La Mercè, San Isidro, San Mateo, Sant Joan i El Pilar—, vinculant cadascuna amb la denominació d’origen corresponent.',
      'asantodeque.desc2': 'El projecte parteix d’una reflexió sobre l’origen d’aquestes festivitats: tot i que avui les vivim com a celebracions col·lectives, moltes neixen de la devoció a un sant o una patrona. D’aquesta idea sorgeix el naming ¿A santo de qué?, una expressió popular que juga amb aquest doble significat i desperta la curiositat per descobrir la història darrere de cada festa. El vi actua com a vehicle conductor de la col·lecció, reforçant el vincle entre territori, memòria i celebració col·lectiva.',
      'asantodeque.mapText': 'Cada festa es vincula a un vi del seu territori, establint una relació entre celebració, paisatge i identitat. Les sis referències pertanyen a diferents Denominacions d’Origen d’Espanya, convertint el vi en el fil conductor de la col·lecció i en un símbol del patrimoni cultural que comparteixen cada festa i el seu lloc d’origen.',
      'asantodeque.narrow': 'La identitat es materialitza en una col·lecció de sis etiquetes il·lustrades, on cada disseny representa els símbols més característics de la seva festa mitjançant un llenguatge gràfic contemporani. El sistema s’estén a estampes col·leccionables dedicades a cada sant i a un packaging compost per capses individuals i una capsa de col·lecció, compartint tots els suports un mateix llenguatge visual.',
      'asantodeque.animLabel': 'Animacions',
      'transit.desc': 'Transit és la identitat visual d’un festival fictici que explora el concepte del trànsit humà com a punt de trobada entre persones, cultures i disciplines artístiques. El projecte trasllada aquesta idea a la música, l’art i la gastronomia, que es converteixen en espais de connexió i intercanvi. La identitat es construeix a partir d’un sistema gràfic flexible i adaptable, dissenyat per funcionar de manera coherent en tots els suports del festival. L’ús d’una tipografia de gran impacte, una paleta cromàtica vibrant i composicions dinàmiques reforcen la sensació de moviment i energia, donant lloc a una identitat contemporània, reconeixible i versàtil aplicada a cartelleria, senyalística, merchandising, plataformes digitals i intervencions urbanes. Projecte col·laboratiu amb Martina Fernández.',
      'parisfont.desc1': 'El projecte parteix de la creació d’una tipografia inspirada en el modernisme, prenent com a referència principal alguns cartells de Cigarrillos París, on destaca el marcat contrast del pes horitzontal a les lletres. A partir d’aquest referent, l’objectiu va ser reinterpretar aquest llenguatge visual des d’una perspectiva contemporània.',
      'parisfont.desc2': 'El resultat és una tipografia funcional i versàtil, que manté un caràcter ornamental i distintiu, aportant personalitat sense renunciar a la llegibilitat. Projecte col·laboratiu amb Martina Fernández.',
      'parisfont.narrow': 'Més enllà de recuperar trets formals del modernisme, el projecte busca reinterpretar la seva essència des d’una perspectiva actual. Cada decisió de disseny respon a la intenció de crear una tipografia amb identitat pròpia, capaç de transmetre el caràcter ornamental de la referència original sense renunciar a la claredat, la versatilitat i la llegibilitat en aplicacions contemporànies.',
      'motion.desc': 'Aquesta selecció reuneix diferents projectes de motion design, des de peces experimentals fins a treballs desenvolupats per a branding, xarxes socials i campanyes. Cada animació explora el moviment com una eina per comunicar, reforçar identitats visuals i donar vida a conceptes gràfics, combinant ritme, tipografia i imatge per crear peces dinàmiques i atractives.',
      'posters.desc': 'Aquesta col·lecció reuneix una selecció de pòsters realitzats tant per iniciativa personal com per encàrrecs professionals. Els projectes personals són un espai d’experimentació visual, mentre que els treballs freelance responen a necessitats reals de comunicació, principalment per a la discoteca Cam Bernades, on he desenvolupat la identitat gràfica de diferents esdeveniments i campanyes.'
    },
    ENG: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.work': 'Work',
      'home.eyebrow': 'Selected projects',
      'home.viewAll': 'View all projects',
      'home.scroll': 'Scroll',
      'work.eyebrowProjects': 'Projects',
      'work.all': 'ALL',
      'work.viewProject': 'View project',
      'work.close': 'Close',
      'about.role': 'Graphic Designer',
      'job.motion': 'Motion Designer',
      'about.introP1': 'I’m a graphic designer based in Barcelona, focused on branding, editorial design, packaging and motion.',
      'about.introP2': 'I believe design is a way of telling stories, of creating meaningful experiences and connecting with people. I enjoy turning ideas into visual identities that are clear, considered and memorable.',
      'about.contact': 'Contact',
      'about.experience': 'Professional experience',
      'about.present': 'Present',
      'about.education': 'Education',
      'about.skills': 'Skills',
      'proj.nextProject': 'Next project',
      'proj.backToTop': 'Back to top',
      'proj.view': 'View',
      'carousel.prev': 'Previous',
      'carousel.next': 'Next',
      'verbena.desc': 'Verbena is a magazine born from the need to explore festivity as a cultural and social phenomenon. We talk about festivity not just as entertainment, but as collective expression, as a symbolic act, as a space for encounter, freedom and identity. Each issue revolves around a theme or a thread that lets us dig deeper, analyse and celebrate the different forms festivity can take. A collaborative project with Paula Arqué.',
      'verbena.narrow': 'This first issue focuses on four deeply rooted religious festivities. Festivities that, over time, have evolved and taken on new meanings, often far removed from their original spiritual roots.',
      'verbena.caption1': 'The journey begins with Holy Week in Seville, where silence and baroque staging create a celebration full of emotional weight. In Madrid, San Isidro blends devotion and popular tradition among mantones and chulapos.',
      'calcot.desc1': 'Calçot Truck is a visual identity for a fictional street food concept that celebrates Catalan culture through one of its most iconic culinary traditions: the calçotada. The project reinterprets this popular ritual in a contemporary context, bringing Catalan identity to a wider audience through a playful, current graphic language.',
      'calcot.desc2': 'The identity references the recognisable aesthetic of kebab shops, reinterpreting it as a visual wink to popular culture. Through illustration, bold typography and a vibrant colour palette, the project creates a contrast between fast-food imagery and Catalan tradition, resulting in an identity that feels approachable, fun and full of personality.',
      'anim.prev': 'Previous animation',
      'anim.next': 'Next animation',
      'asantodeque.desc1': '¿A santo de qué? is a branding and packaging project that celebrates Spain’s popular festivities as an expression of identity, territory and tradition. The collection brings together six celebrations —San Fermín, La Mercè, San Isidro, San Mateo, Sant Joan and El Pilar— each linked to its corresponding denomination of origin.',
      'asantodeque.desc2': 'The project stems from a reflection on the origin of these festivities: although today we experience them as collective celebrations, many were born from devotion to a saint or patroness. From this idea comes the name ¿A santo de qué?, a popular expression that plays on that double meaning and sparks curiosity to discover the story behind each festivity. Wine acts as the connecting thread of the collection, reinforcing the bond between territory, memory and collective celebration.',
      'asantodeque.mapText': 'Each festivity is linked to a wine from its own territory, establishing a relationship between celebration, landscape and identity. The six references belong to different Denominations of Origin across Spain, turning wine into the collection’s connecting thread and a symbol of the cultural heritage shared by each festivity and its place of origin.',
      'asantodeque.narrow': 'The identity takes shape as a collection of six illustrated labels, each design representing the most characteristic symbols of its festivity through a contemporary graphic language. The system extends to collectible prints dedicated to each saint and to packaging made up of individual boxes and a collection box, with every format sharing the same visual language.',
      'asantodeque.animLabel': 'Animations',
      'transit.desc': 'Transit is the visual identity of a fictional festival that explores the idea of human transit as a meeting point between people, cultures and artistic disciplines. The project carries this idea into music, art and gastronomy, which become spaces of connection and exchange. The identity is built on a flexible, adaptable graphic system designed to work coherently across every touchpoint of the festival. High-impact typography, a vibrant colour palette and dynamic compositions reinforce a sense of movement and energy, resulting in a contemporary, recognisable and versatile identity applied to posters, signage, merchandising, digital platforms and urban interventions. A collaborative project with Martina Fernández.',
      'parisfont.desc1': 'The project starts from the creation of a typeface inspired by Catalan modernisme, taking as its main reference a series of Cigarrillos París posters, notable for the strong contrast in horizontal letter weight. Building on this reference, the goal was to reinterpret that visual language from a contemporary perspective.',
      'parisfont.desc2': 'The result is a functional, versatile typeface that keeps a distinctive, ornamental character, adding personality without sacrificing legibility. A collaborative project with Martina Fernández.',
      'parisfont.narrow': 'Beyond recovering the formal traits of modernisme, the project seeks to reinterpret its essence from a present-day perspective. Every design decision responds to the intention of creating a typeface with its own identity, able to convey the ornamental character of the original reference without giving up clarity, versatility and legibility in contemporary applications.',
      'motion.desc': 'This selection brings together different motion design projects, from experimental pieces to work developed for branding, social media and campaigns. Each animation explores movement as a tool to communicate, reinforce visual identities and bring graphic concepts to life, combining rhythm, typography and image to create dynamic, engaging pieces.',
      'posters.desc': 'This collection brings together a selection of posters made both on personal initiative and through professional commissions. The personal projects are a space for visual experimentation, while the freelance work responds to real communication needs, mainly for the nightclub Cam Bernades, where I’ve developed the graphic identity for different events and campaigns.'
    }
  };

  function applyLang(lang){
    if (!DICT[lang]) lang = 'ESP';
    document.documentElement.setAttribute('lang', lang === 'CAT' ? 'ca' : lang === 'ENG' ? 'en' : 'es');
    var dict = DICT[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)){
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var spec = pair.split(':');
        var attr = spec[0], key = spec[1];
        if (attr && key && Object.prototype.hasOwnProperty.call(dict, key)){
          el.setAttribute(attr, dict[key]);
        }
      });
    });
    document.querySelectorAll('.lang-switch button').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('lang', lang); } catch(e){}
  }

  function initLangSwitch(){
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch(e){}
    var lang = (saved === 'CAT' || saved === 'ENG' || saved === 'ESP') ? saved : 'ESP';
    applyLang(lang);
    document.querySelectorAll('.lang-switch button').forEach(function(btn){
      btn.addEventListener('click', function(){ applyLang(btn.getAttribute('data-lang')); });
    });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initLangSwitch);
  } else {
    initLangSwitch();
  }
})();
