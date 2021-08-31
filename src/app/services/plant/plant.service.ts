import { Injectable } from '@angular/core';
import { Disease, Feature, Plant, Stage, TemperatureStage } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private plants: Plant[];
  private namePlant: String;


  constructor() {
    this.plants = [
      {
        name: "Pimiento",
        description: "Es una planta perteneciente a la familia Solanaceae y de la especie Capsicum annuum L.y herbácea perenne, con ciclo de cultivo anual de porte variable entre los 0, 5 metros(en determinadas variedades de cultivo al aire libre) y más de 2 metros(gran parte de los híbridos cultivados en invernadero).",
        stages: [
          {
            title: 'Preparacion de la tierra',
            recomendations: ["La tierra debe contener humus de lombrices", "Debe de ser una tierra fertilizada llena de nutrientes, con materia orgánica"],

          },
          {
            title: 'Sembrado',
            recomendations: ["Lo enterramos a unos 3mm, se deja un espacio entre semillas de aproximadamente 2, 5 cm.", "Cubre las semillas con una capa de tierra."]
          },
          {
            title: 'Periodo de riego',
            recomendations: ["El riego ideal es de goteo (riego suave para que el impacto del agua no dañe nuestra planta)", "En verano diario cada 30-40 minutos. En caso contrario cada 2-3 días en un intervalo de 30 min.", "Hay que fijarse en las hojas para determinar si necesita más agua."]
          },
          {
            title: 'Germinación',
            recomendations: ["En promedio la germinación de los primeros brotes se da entre 10 y 15 días.", "Si has sembrado en maceta o almácigo deberás sacarlas de la bandeja cuando los brotes hayan cumplido dos meses."]
          },
          {
            title: 'Transplante',
            recomendations: ["Realiza el trasplante sólo si el clima es lo suficientemente cálido.", "en en cuenta que los pimientos son plantas muy delicadas que deben ser expuestas gradualmente al exterior antes de ser trasplantadas.", "Así que un par de semanas antes de trasplantarlas, comienza a exponerlas gradualmente al clima de afuera", "Puedes colocar exponiéndolas al exterior por tan sólo algunas horas al día, extendiendo lentamente el número de horas, a medida que van  creciendo.Coloca las plantas con una separación entre ellas de 60 cms.", "Si la separación es menor, corres el riesgo de que no reciban suficiente luz y el aire no circule adecuadamente."]
          },
          {
            title: 'Poda y aclareo',
            recomendations: ["La poda puede ser una práctica útil para mejorar las condiciones de la planta, especialmente si se cultiva en maceta.", "La poda favorece la circulación de aire entre las plantas y produce mejores frutos.", "Si se desean pimientos gruesos, se recomienda aclarar, dejando tan sólo 2 o 3 frutos por cada planta.", "Al ser plurianual, la planta se puede conservar podándola. Al siguiente año, esta rebrotará dando nuevos pimientos"]
          },
          {
            title: 'Plagas',
            recomendations: [
              "Pulgón: para prevenirlo se puede asociar con la albahaca.Si se requiere erradicar, puede emplearse jabón potásico e insecticidas vegetales.",
              "Araña roja: Aparece sobre todo cuando se dan temperaturas altas con baja humedad y / o excesos de nitrógeno en la tierra de cultivo. Para combatirla se recomienda antes de ser plantado el pimiento eliminar las malas hierbas y restos de cultivo, y utilizar insecticidas naturales.",
              "Mosca blanca: Para prevenirla se puede pulverizar el envés de las hojas con jabón potásico al 1 % con agua de lluvia o destilada.",
              "Trips: Son insectos voladores que dejan unas manchas blancas con puntos negros en las hojas.Para combatirla se recomienda una aplicación combinada del extracto de neem y jabón potásico.",
              "Cochinillas: Es una de las plagas más difíciles de controlar ya que al estar su cuerpo cubierto con excrecencias cerosas blancas, los tratamientos químicos son poco exitosos.",

              // "Para prevenir el pulgón se puede asociar con la albahaca.  Si se requiere erradicar, puede emplearse jabón potásico e insecticidas vegetales.",
              // "Araña roja: Aparece sobre todo cuando se dan temperaturas altas con baja humedad y / o excesos de nitrógeno en la tierra de cultivo.Para combatirla se recomienda antes de ser plantado el pimiento eliminar las malas hierbas y restos de cultivo, una vez plantado regar el pimiento durante la noche por aspersión para mantener la humedad, y utilizar insecticidas naturales.  ",
              // "Para prevenir la mosca blanca  se puede pulverizar el envés de las hojas con  jabón potásico al 1% con agua de lluvia o destilada.",
              // "Mosca blanca: Para prevenirla se puede pulverizar el envés de las hojas con jabón potásico al 1% con agua de lluvia o destilada.",
              // "Trips: Son insectos voladores que dejan unas manchas blancas con puntos negros en las hojas.Para combatirla se recomienda una aplicación combinada del extracto de neem y jabón potásico.",
              // "Cochinillas: Es una de las plagas más difíciles de controlar ya que al estar su cuerpo cubierto con excrecencias cerosas blancas, los tratamientos químicos son poco exitosos. Se deben emplear productos de acción específica contra cochinillas con la adición de mojantes",
            ]

          },
          {
            title: 'Cosecha',
            recomendations: [
              "Inicia a los 30 días después del trasplante.",
              "Si se desean pimientos gruesos, se recomienda aclarar, dejando tan sólo 2 o 3 frutos por cada planta.",
              "Los pimientos Verdes tendrán tamaño, firmeza y color del fruto.",
              "Los pimientos maduros presentarán un tono verde profundo más oscuro que el tallo de la planta.",
              "Los pimientos con un 50% de coloración. Retira los pimientos maduros usando un cuchillo afilado o tijeras de jardín. Córtalos por la parte de arriba del tallo. Si halas los pimientos puedes dañar los tallos o las raíces"],

          },
        ],
        temperaturesStages: [
          {
            name: "Germinación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: ["13ºC"]
              },
              {
                title: "Óptimo",
                degrees: ["20ºC - 25ºC Día", "16ºC - 18ºC Noche"]
              },
              {
                title: "Máximo",
                degrees: ["40ºC"]
              }
            ]
          },
          {
            name: "Floración y fructificación",
            temperatures: [
              {
                title: "Mínimo",
                degrees: ["18ºC"]
              },
              {
                title: "Óptimo",
                degrees: ["26ºC - 28ºC Día", "18ºC - 20ºC Noche"]
              },
              {
                title: "Máximo",
                degrees: ["35ºC"]
              }
            ]
          },
          {
            name: "Crecimiento vegetativo",
            temperatures: [
              {
                title: "Mínimo",
                degrees: ["15ºC"]
              },
              {
                title: "Óptimo",
                degrees: ["20ºC - 25ºC Día", "16ºC - 18ºC Noche"]
              },
              {
                title: "Máximo",
                degrees: ["40ºC"]
              }
            ]
          },
        ],
        images: [
          "/assets/images/pimiento.png",
          "/assets/images/bell-pepper01.png",
          "/assets/images/bell-pepper02.png",
        ],
        diseases: [
          {
            name: "Oidiopsis",
            images: ['/assets/images/odiopsis01.png', '/assets/images/odiopsis02.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "Producida por el hongo “Leveillula taurica”",
                  "De fácil diagnóstico, se presenta como manchas amarillas en el haz que se necrosan por el centro",
                  "Le favorecen temperaturas de 10 a 35 °C y humedad de 70 a 80 %",
                  "En caso de fuerte ataque la hoja se seca y se desprende.  ",
                  "Las solanáceas silvestres actúan como fuente de inóculo.",
                  "Produce quemaduras al fruto al exponerlo al sol por lo cual ya no es apto para el consumo humano"
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Eliminación de malas hierbas y restos de cultivo.",
                  "Utilización de plántulas sanas."
                ],
              },
            ]
          },
          {
            name: "Podredumbre gris",
            images: ['/assets/images/podredumbre-gris01.png', '/assets/images/podredumbre-gris02.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "En hojas y flores se producen lesiones pardas.",
                  "En frutos tiene lugar una podredumbre blanda con aspecto de tejido",
                  "Se presenta en temperaturas entre 17ºC y 23ºC",
                  "La humedad relativa óptima oscila alrededor del 95 %",
                  "Los pétalos infectados y desprendidos actúan dispersando el hongo.",
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Eliminación de malas hierbas, restos de cultivo y plantas infectadas.",
                  "Tener especial cuidado en la poda, realizando cortes limpios a ras del tallo.A ser posible cuando la humedad relativa no sea muy elevada y aplicar posteriormente una pasta fungicida.",
                  "Controlar los niveles de nitrógeno.",
                  "Utilizar cubiertas plásticas en el invernadero que absorban la luz ultravioleta.",
                  "Emplear marcos de plantación adecuados que permitan la aireación.",
                ],
              },
            ]
          },
          {
            name: "Podredumbre blanca",
            images: ['/assets/images/podredumbre-blanca02.png', '/assets/images/podredumbre-blanca01.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "Hongo polífago que ataca a la mayoría de las especies hortícolas (plantas comunes de huertos).",
                  "Se produce por infecciones de cultivos anteriores",
                  "No desprende mal olor.",
                  "Los ataques al tallo con frecuencia colapsan la planta, que muere con rapidez.",
                  "Cuando caen sobre tallos, ramas u hojas producen la infección secundaria.",
                  "Este hongo puede tener una duración media de 4 - 5 años en el suelo",
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Eliminación de malas hierbas, restos de cultivo y plantas infectadas.",
                  "Utilizar cubiertas plásticas en el invernadero que absorban la luz ultravioleta.",
                  "Emplear marcos de plantación adecuados que permitan la aireación.",
                  "Manejo adecuado de la ventilación y el riego.",
                  "Solarizacion"
                ],
              },
            ]
          },
          {
            name: "Seca o tristeza",
            images: ['/assets/images/seca02.png', '/assets/images/seca01.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "Hongo que ataca en las plantas en cualquier estado vegetativo.",
                  "Se produce un decaimiento notorio de la planta y toma una apariencia de falta de agua, el riego excesivo empeora su situación.",
                  "Se manifiesta inicialmente con manchas oscuras en el cuello de la raíz",
                  "Presenta zoosporas responsables de la diseminación acuática.  ",
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Utilización de plántulas y sustratos sanos.",
                  "Eliminar restos de la cosecha anterior, especialmente las raíces y el cuello.",
                  "Emplear marcos de plantación adecuados que permitan la aireación.",
                  "Manejo adecuado de la ventilación y el riego.",
                  "Cubrir la balsa y las conducciones, evitando regar con agua portadora",
                  "Solarizacion",
                ],
              },
            ]
          },
          {
            name: "Roña o sarna",
            images: ['/assets/images/sarna02.png', '/assets/images/sarna01.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "Se debe ponerse en cuarentena la zona afectada y avisar a las autoridades para evitar su propagación",
                  "Es una enfermedad difícil de curar y uno de los síntomas más importantes es que muestra pequeñas manchas acuosas en las hojas.",
                  "En el tallo se forman pústulas negras o pardas y elevadas.",
                  "Se transmite por semilla, se dispersa por lluvias, rocíos, viento, etc.",
                  "Afecta sobre todo en zonas cálidas y húmedas"
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Eliminación de malas hierbas, restos de cultivo y plantas infectadas.",
                  "Evitar humedades elevadas.",
                  "Utilizar semillas sanas o desinfectadas.",
                  "Manejo adecuado de la aspersión y el riego.",
                  "No regar por aspersión en caso de ataque en semilleros.",
                ],
              },
              {
                name: "Control químico",
                recomendations: [
                  "Aplicación de productos cúpricos (sulfato cúprico 3%), aunque se han observado algunas resistencias a éstos, por lo que se aconseja alternar con mancozeb o zineb"
                ],
              },
            ]
          },
          {
            name: "Podredumbre blanda",
            images: ['/assets/images/podredumbre-blanda02.png', '/assets/images/podredumbre-blanda01.png'],
            controls: [
              {
                name: "Consejos",
                recomendations: [
                  "Bacteria polífaga que ataca a la mayoría de las especies hortícolas.",
                  "Penetra por heridas e invade tejidos medulares.",
                  "Provoca generalmente podredumbres acuosas y blandas que suelen desprender olor nauseabundo.",
                  "Externamente en el tallo aparecen manchas negruzcas y húmedas.",
                  "En general la planta suele morir, en frutos también puede producir podredumbres acuosas.",
                  "Tiene gran capacidad saprofítica, por lo que puede sobrevivir en el suelo, agua de riego y raíces de malas hierbas.",
                  "Las condiciones favorables para el desarrollo de la enfermedad son altas humedades relativas y temperaturas entre 25 y 35ºC.  ",
                ]
              },
              {
                name: "Control preventivo",
                recomendations: [
                  "Eliminación de malas hierbas, restos de cultivo y plantas infectadas.",
                  "Evitar heridas de poda.",
                  "Manejo adecuado de la ventilación y el riego.",
                  "Desinfectar los aperos con una dilución de lejía al 20%.",
                  "No abonar con exceso de nitrógeno.",
                  "Elegir marcos de plantación adecuados para una buena ventilación.",
                ],
              },
              {
                name: "Control químico",
                recomendations: [
                  "Los tratamientos químicos son poco eficaces una vez instalada la enfermedad en la planta, por lo que es mejor utilizar métodos preventivos."
                ],
              },
            ]
          },
        ],
        features: [
          {
            name: "Sistema radicular",
            description: "Es pivotante y profundo (dependiendo de la profundidad y textura del suelo), con numerosas raíces adventicias que horizontalmente pueden alcanzar una longitud comprendida entre 50 centímetros y 1 metro. ",
            images: ['/assets/images/radicular-system01.png', '/assets/images/radicular-system02.png'],
          },
          {
            name: "Tallo principal",
            description: "Es de crecimiento limitado y erecto. A partir de cierta altura (“cruz”) emite 2 o 3 ramificaciones(dependiendo de la variedad) y continúa ramificándose de forma dicotómica hasta el final de su ciclo(los tallos secundarios se bifurcan después de brotar varias hojas, y así sucesivamente).",
            images: ['/assets/images/main-stem01.png', '/assets/images/main-stem02.png'],
          },
          {
            name: "Hojas",
            description: "La inserción de las hojas en el tallo tiene lugar de forma alterna y su tamaño es variable en función de la variedad, existiendo cierta correlación entre el tamaño de la hoja adulta y el peso medio del fruto.",
            images: ['/assets/images/sheets01.png', '/assets/images/sheets02.png'],
          },
          {
            name: "Flores",
            description: "Aparecen solitarias en cada nudo del tallo.Son pequeñas y constan de una corola blanca. La polinización es autógama, aunque puede presentarse un porcentaje de alogamia que no supera el 10%.",
            images: ['/assets/images/flowers01.png', '/assets/images/flowers02.png'],
          },
          {
            name: "Frutos",
            description: "Es de tipo baya hueca, semicartilaginosa y deprimida, de color variable(verde, rojo, amarillo, naranja, violeta o blanco); algunas variedades van pasando del verde al anaranjado y al rojo a medida que van madurando.",
            images: ['/assets/images/fruits01.png', '/assets/images/fruits02.png'],
          },
          {
            name: "Suelos",
            description: "Los suelos profundos, ricos en materia orgánica y en nitrógeno, pero ligeramente arenosos son los ideales para este cultivo. Suelos muy pesados, con demasiada proporción de arcilla podrían generar la posibilidad de sufrir enfermedades",
            images: ['/assets/images/soil01.png', '/assets/images/soil02.png'],
          },
        ]
      },

    ]
  }

  getTemperaturesStages(): TemperatureStage[] {
    let result: TemperatureStage[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        result = plant.temperaturesStages;
      }
    })

    return result;
  }

  getAboutPlant(): String[] {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      if (plant.name === this.namePlant) {
        result.push(plant.name);
        result.push(plant.description);
      }
    })
    return result;
  }


  getDiseases(): Disease[] {
    return this.plants.filter(p => p.name === this.namePlant)[0].diseases
  }



  getStages(): Stage[] {
    return this.plants.filter(p => p.name === this.namePlant)[0].stages
  }

  getAllNamePlants(): String[] {
    let result: String[] = new Array();
    this.plants.forEach(plant => {
      result.push(plant.name);
    })
    return result;
  }

  setNamePlant(namePlant: String) {
    this.namePlant = namePlant;
  }

  getBackImage(): String {
    let result: String;
    this.plants.forEach(plant => {
      if (plant.name == this.namePlant) {
        result = plant.images[0];
      }
    })
    return result;

  }

  getNamePlant(): String {
    return this.namePlant;
  }

  getDetailsImages() {
    return this.plants.filter(p => p.name === this.namePlant)[0].images.slice(1)
  }

  getFeatures(): Feature[] {
    return this.plants.filter(p => p.name === this.namePlant)[0].features
  }

}
