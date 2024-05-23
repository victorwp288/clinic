'use client'
import React from 'react'
import Accordion from '@/components/Accordion'
import clock from '@/images/clock.svg'
import Image from 'next/image'
import maniPiedi from '@/images/mani-piedi.jpg'
import ceretta from '@/images/ceretta.jpg'
import makeup from '@/images/makeup.jpg'
import massaggi from '@/images/massaggi.jpg'
import rituale from '@/images/rituale.jpg'
import sopracciglia from '@/images/sopracciglia.jpg'
import tick from '@/images/tick.svg'

function ServicesContainer() {
  const manicure = [
    {
      title: 'Manicure',
      description:
        'Trattamento delle unghie delle mani con tecnica dry manicure. È possibile scegliere una manicure classica oppure abbinarla alle seguenti applicazioni:',
      duration: '30',
      subcategories: [
        {
          title: 'APPLICAZIONE SMALTO CLASSICO',
          duration: 10,
        },
        {
          title: 'APPLICAZIONE DI SMALTO SEMIPERMANENTE',
          duration: 30,
        },
        {
          title: 'APPLICAZIONE DI SMALTO SEMIPERMANENTE RINFORZATO',
          duration: 60,
        },
        {
          title: 'COPERTURA GEL DELLE UNGHIE NATURALI',
          duration: 60,
        },
      ],
    },

    {
      title: 'Manicure Giapponese',
      description:
        'Trattamento naturale che fortifica e nutre in profondità le unghie, che appariranno subito lucide con un effetto Shine dalla durata che varia dalle due alle tre settimane.',
      duration: 40,
    },
    {
      title: 'Manicure SPA',
      description:
        'Trattamento rilassante e rigenerante per la pelle delle tue mani, con lo scopo di idratare in profondità la pelle e renderla più radiosa.',
      duration: 50,
    },
  ]

  const pedicure = [
    {
      title: 'Pedicure',
      description:
        'Trattamento delle unghie e della pelle dei piedi. è possibile scegliere una pedicure classica oppure abbinarla alle seguenti applicazioni:',
      duration: 40,
      subcategories: [
        {
          title: 'APPLICAZIONE SMALTO CLASSICO',
          duration: 50,
        },
        {
          title: 'APPLICAZIONE DI SMALTO SEMIPERMANENTE',
          duration: 20,
        },
        {
          title: 'COPERTURA GEL DELLE UNGHIE NATURALI / RICOSTRUZIONE GEL',
          duration: 20,
        },
      ],
    },
    {
      title: 'Pedicure SPA',
      description:
        'Trattamento rilassante e rigenerante per la pelle dei tuoi piedi, con lo scopo di idratare in profondità la pelle e rendere i piedi più morbidi e leggeri.',
      duration: 40,
    },
    {
      title: 'Pedicure completa con cheratolitico',
      description:
        'Pedicure completo di calli e duroni. Trattamento effettuato con prodotti cheratolitici, che vanno a togliere tutti gli ispessimenti cutanei trattando calli e duroni senza l’utilizzo di strumenti aggressivi per la tua pelle.',
      duration: 60,
    },
    {
      title: 'Maschera piedi',
      description:
        'Al momento della prenotazione, richiedila in aggiunta alla tua tua pedicure per ottenere i piedi morbidi e vellutati.',
      duration: 10,
    },
  ]

  const cigliaSopracciglia = [
    {
      title: 'Laminazione ciglia',
      description:
        'Trattamento nutritivo per le tue ciglia, che risulteranno subito incurvate, più voluminose e allungate. il tuo sguardo risulterà più aperto e liftato',
      duration: 60,
    },
    {
      title: 'Laminazione sopracciglia',
      description:
        'Trattamento che dona nutrimento, definizione e colore alle sopracciglia; le sopracciglia risulteranno più voluminose e lucenti.',
      duration: 60,
    },
    {
      title: 'Extension ciglia one to one',
      description:
        'Trattamento che aumenta lunghezza, volume e curvatura delle ciglia naturali tramite l’applicazione di singole ciglia finte.',
      duration: 120,
    },
    {
      title: 'Combinazione laminazione ciglia e sopracciglia',
      duration: 70,
    },
    {
      title: 'Refil extension ciglia',
      duration: 90,
    },
  ]

  const massaggi = [
    {
      title: 'Massaggio viso personalizzato',
      description:
        'Tramite una piccola consulenza potrai scegliere le texture, i profumi e il tipo di massaggio che preferisci (decontratturante, drenante, rilassante, anticellulite e rimodellante).',
      duration: 30,
    },
    {
      title: 'Massaggio corpo personalizzato',
      description:
        'Tramite una piccola consulenza potrai scegliere le texture, i profumi e il tipo di massaggio che preferisci (decontratturante, drenante, rilassante, anticellulite e rimodellante).',
      duration: '30m / 50',
    },
    {
      title: 'Massaggio corpo al cioccolato',
      description:
        'Questo massaggio, della durata di 45 minuti, idrata in profondità la pelle contrastando rughe e invecchiamento, grazie alle sostanze antiossidanti contenute al suo interno. È ottimo anche per stimolare la circolazione sanguigna. ',
      duration: 45,
    },
    {
      title: 'Pressoterapia',
      description:
        'Macchinario che simula un massaggio drenante manuale, favorisce le naturali funzioni del corpo, il ritorno venoso e l’eliminazione di sostanze di scarto dall’organismo. È consigliata per chi soffre di ritenzione idrica, cellulite e adiposità.',
      duration: '30m / 45',
    },
  ]

  const ceretta = [
    {
      title: 'Ceretta lipolitica (classica) / Ceretta brasiliana',
      description:
        'A differenza della ceretta classica, la ceretta brasiliana lavora una temperatura più bassa, quindi è indicata per pelli sensibili. È meno dolorosa rispetto alla ceretta normale ed è indicata per chi ha problemi di peli incarniti e follicolite.',
      subcategories: [
        {
          title: 'Baffetti',
          duration: 5,
        },
        {
          title: 'Sopracciglia',
          duration: 15,
        },
        {
          title: 'Baffetti e sopracciglia',
          duration: 15,
        },
        {
          title: 'Ascelle',
          duration: 10,
        },
        {
          title: 'Braccia',
          duration: 25,
        },
        {
          title: 'Inguine parziale',
          duration: 15,
        },
        {
          title: 'Inguine totale',
          duration: 20,
        },
        {
          title: 'Glutei',
          duration: 15,
        },
        {
          title: 'Mezza gamba',
          duration: 30,
        },
        {
          title: 'Gamba intera',
          duration: 45,
        },
        {
          title: 'Petto',
          duration: 30,
        },
        {
          title: 'Schiena',
          duration: 30,
        },
        {
          title: 'Gamba intera uomo',
          duration: 60,
        },
        {
          title: 'Mezza gamba uomo',
          duration: 35,
        },
      ],
    },
  ]

  const rituali = [
    {
      title: 'Rituale Coccole di cotone',
      description:
        'Elasticizzante, lenitivo, idratante. Questo rituale è una coccola avvolgente ideale come trattamento in gravidanza o come impacco lenitivo e rigenerante dopo sole. Ottimo trattamento elasticizzante per chi è soggetto a smagliature. A base di aloe, acqua di mare e polvere di cotone; idrata in profondità, lenisce i rossori, elasticizza il tessuto. ',
    },
    {
      title: 'Rituale India',
      description:
        'Detossinante, rassodante, anti age. Una coccola rigenerante rassodante che idrata in profondità, leviga e rigenera il tessuto. Ottimo trattamento in tutti i casi in cui la pelle risulta spenta e svuotata, grazie alle sue proprietà antiage e rassodanti.',
    },
    {
      title: 'Rituale Himalaya',
      description:
        'Mineralizzante, decontratturante. Tutta la potenza del sale Rosa per un trattamento decontratturante e altamente detossinante. A base di oli essenziali, sale fossile ricco di minerali, cuscini caldi, sfere e pietre di sale. ',

      subcategories: [
        {
          title: 'Solo schiena - tensioni localizzate e stress',
          duration: 50,
        },
      ],
    },
    {
      title: 'Rituale Marrakech',
      description:
        'Rigenerante, detossinante, levigante. Questa coccola di purificazione profonda detossina, leviga, nutre tessuti in profondità e li ricarica di sostanze essenziali, rendendo la pelle liscia e luminosa.',

      subcategories: [
        {
          title: 'Solo schiena - tensioni localizzate e stress',
          duration: 50,
        },
      ],
    },
  ]

  const makeup = [
    {
      title: 'Applicazione trucco giorno / sera / cerimonia',
      description:
        'Realizzerò il trucco che desideri adattandola alla tua fisionomia del volto, con i colori e le luci adatte alla tua occasione speciale. È disponibile anche il servizio a domicilio. ',
      duration: 60,
    },
    {
      title: 'Applicazione trucco sposa e acconciatura',
      description:
        'Servizio personalizzato studiato apposta per te per soddisfare ogni tua esigenza di make-up e di acconciature. Seguirò ogni tua esigenza passo passo fino a realizzare il look perfetto per il tuo grande giorno.',
      subcategories: [
        {
          title: 'Prova trucco sposa',
          duration: 140,
        },
        {
          title: 'Prova acconciatura sposa',
          duration: 120,
        },
      ],
    },
    {
      title: 'Corso individuale di make-up base',
      description:
        'Impareremo a valorizzare al meglio il tuo viso, ti insegnerò i trucchi del mestiere per esaltare la tua naturale bellezza attraverso giochi di colori, luci e intensità. Realizzeremo insieme makeup versatile, in modo da poter poterlo modificare per renderlo adatto ad ogni occasione. ',
      duration: 20,
    },
  ]

  const trattamentiViso = [
    {
      title: 'Pulizia del viso',
      duration: 90,
    },
    {
      title: 'Pulizia del viso con spatola ad ultrasuoni',
      description:
        'Pulizia viso con metodo indolore, completa di detersione, scrub specifico in base al tipo di pelle, leggero vapore di mare e pulizia con spatola ad ultrasuoni.',
    },
    {
      title: 'Pulizia del viso ultrasuoni e mandelico',
      description:
        'Pulizia del viso profonda, metodo indolore con spatola ultrasuoni e acido mandelico. La pelle risulterà luminosa, pulita e levigata. ',
      duration: 60,
    },

    {
      title: 'Elettroporatore viso',
      description:
        'Richiedilo in aggiunta al tuo trattamento, un macchinario che aumenta la permeabilità della pelle e consente di aumentare l’assorbimento in profondità degli attivi utilizzati in fase di trattamento. ',
      duration: '+10',
    },
    {
      title: 'Trattamento viso eterna',
      description:
        'Il trattamento dell’eterna giovinezza, dona tono, luminosità e freschezza all’incarnato grazie alle manualità e ai principi attivi applicati. Completo di detersione, scrub, applicazione di acido mandelico e peeling enzimatico. Completa il trattamento una maschera antiage e il calco.  ',
      duration: 90,
    },
    {
      title: 'Trattamento viso Fast Beauty',
      description:
        'Un trattamento ideale in pausa pranzo o per chi ha poco tempo, il soli 30 minuti la tua pelle sarà dissetata e ricaricata di vitamine essenziali.  ',
      duration: 30,
    },
    {
      title: 'Trattamenti viso specifici',
      description:
        'Trattamenti specifici per il viso, eseguiti con prodotti ricchi di principi attivi e sostanze rigeneranti. Dopo un’attenta valutazione della pelle ti consiglierò il trattamento viso più adatto a te.',
      duration: 60,
      subcategories: [
        {
          title: 'Trattamento agli acidi della frutta',
        },
        {
          title: 'Schiarente per macchie e discromie',
        },
        {
          title: 'Antiage e detox per pelli atone e spente',
        },
        {
          title: 'Couperose e pelli sensibili',
        },
        {
          title: 'Pelle grassa, acne e impura',
        },
        {
          title: 'Idratante per pelli secche e asfittiche',
        },
      ],
    },
  ]

  return (
    <div className="m-auto mt-2 w-[90vw] md:mt-12 md:w-[70vw]">
      <div className="flex flex-col gap-4 py-4">
        <h4 className="text-xs font-extrabold text-[#dec3c5] ">ESPLORA</h4>
        <h2 className="font-serif text-3xl font-bold tracking-tight">
          I nostri trattamenti
        </h2>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto md:overflow-x-visible lg:flex-col">
        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Mani e piedi"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="left"
          >
            <div className="grid gap-12 border-t-2  border-dashed border-gray-100  px-6 pb-4 md:grid-cols-2 md:px-12 md:py-12  lg:border-none">
              <div className=" flex flex-col gap-10  pt-8">
                {manicure.map((service, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h3 className="font-serif text-[1.3rem] font-bold">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Image
                        src={clock}
                        width={18}
                        height={18}
                        alt="duration of the service"
                      />
                      <p className="text-sm font-normal text-gray-500">
                        {service.duration}m
                      </p>
                    </div>
                    <p className="text-sm font-light">{service.description}</p>
                    {service.subcategories && (
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {service.subcategories.map((subcategory, subIndex) => (
                          <div className="flex flex-col gap-2" key={subIndex}>
                            <div className="flex items-center gap-1">
                              <Image
                                src={clock}
                                width={18}
                                height={18}
                                alt="duration of the service"
                              />
                              <p className="text-sm font-normal text-gray-500">
                                +{subcategory.duration}m
                              </p>
                            </div>
                            <h4 className="w-[85%] text-xs">
                              {subcategory.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-10">
                {pedicure.map((service, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h3 className="font-serif text-[1.3rem] font-bold">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Image
                        src={clock}
                        width={18}
                        height={18}
                        alt="duration of the service"
                      />
                      <p className="text-sm font-normal text-gray-500">
                        {service.duration}m
                      </p>
                    </div>
                    <p className="text-sm font-light">{service.description}</p>
                    {service.subcategories && (
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {service.subcategories.map((subcategory, subIndex) => (
                          <div className="flex flex-col gap-2" key={subIndex}>
                            <div className="flex items-center gap-1">
                              <Image
                                src={clock}
                                width={18}
                                height={18}
                                alt="duration of the service"
                              />
                              <p className="text-sm font-normal text-gray-500">
                                +{subcategory.duration}m
                              </p>
                            </div>
                            <h4 className="w-[85%] text-xs">
                              {subcategory.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        </div>
        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Trattamenti ciglia e sopracciglia"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="right"
          >
            <div className="grid gap-8 px-6 py-8 md:grid-cols-3 md:px-12 md:py-12">
              {cigliaSopracciglia.map((service, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <h3 className="font-serif text-[1.3rem] font-bold">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src={clock}
                      width={18}
                      height={18}
                      alt="duration of the service"
                    />
                    <p className="text-sm font-normal text-gray-500">
                      {service.duration}m
                    </p>
                  </div>
                  <p className="text-sm font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Massaggi viso e corpo"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="left"
          >
            <div className="grid gap-8 px-6 py-8 md:grid-cols-2 md:px-12 md:py-12">
              {massaggi.map((service, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <h3 className="font-serif text-[1.3rem] font-bold">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src={clock}
                      width={18}
                      height={18}
                      alt="duration of the service"
                    />
                    {service.duration && (
                      <p className="text-sm font-normal text-gray-500">
                        {service.duration}m
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Ceretta"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="right"
          >
            <div className="flex flex-col">
              {ceretta.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-12"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-[1.3rem] font-bold">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      {service.duration && (
                        <p className="text-xs font-normal text-gray-500">
                          {service.duration}m
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-light md:w-[50%]">
                      {service.description}
                    </p>
                  </div>

                  {service.subcategories && (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-7">
                      {service.subcategories.map((subcategory, subIndex) => (
                        <div className="flex flex-col gap-2" key={subIndex}>
                          <div className="flex items-center gap-1">
                            <Image
                              src={clock}
                              width={18}
                              height={18}
                              alt="duration of the service"
                            />
                            <p className="text-sm font-normal text-gray-500">
                              {subcategory.duration}m
                            </p>
                          </div>
                          <h4 className="w-[85%] text-sm">
                            {subcategory.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        </div>
        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Rituali dal mondo"
            description="I rituali dal mondo sono un’esperienza personale e completa, ripropongono un’esperienza multisensoriale profondamente immersiva, a partire dagli aromi. Gli ingredienti e le pratiche proposte provengono direttamente dalle millenarie tradizioni di bellezza."
            image={maniPiedi}
            imagePosition="left"
          >
            <div className="px-6 pb-6 md:px-12">
              <div className="flex flex-col gap-4 py-10">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <Image
                      src={clock}
                      width={18}
                      height={18}
                      alt="duration of the service"
                    />
                    <p className="text-sm font-normal text-gray-500">60m</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    ESFOLIAZIONE, IMPACCO E APPLICAZIONE DELLA CREMA
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <Image
                      src={clock}
                      width={18}
                      height={18}
                      alt="duration of the service"
                    />
                    <p className="text-sm font-normal text-gray-500">90m</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    ESFOLIAZIONE, IMPACCO E MASSAGGIO DI 30 MINUTI
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {rituali.map((service, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h3 className="font-serif text-[1.3rem] font-bold">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      {service.duration && (
                        <p className="text-sm font-normal text-gray-500">
                          {service.duration}m
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-light">{service.description}</p>
                    {service.subcategories && (
                      <div className="py-6">
                        {service.subcategories.map((subcategory, subIndex) => (
                          <div className="flex flex-col gap-2" key={subIndex}>
                            <div className="flex items-center gap-1">
                              <Image
                                src={clock}
                                width={18}
                                height={18}
                                alt="duration of the service"
                              />
                              <p className="text-sm font-normal text-gray-500">
                                {subcategory.duration}m
                              </p>
                            </div>
                            <h4 className="w-[85%] text-xs">
                              {subcategory.title}
                            </h4>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        </div>

        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Servizi make-up e acconciature"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="right"
          >
            <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3 md:px-12 md:py-12">
              {makeup.map((service, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <h3 className="font-serif text-[1.3rem] font-bold">
                    {service.title}
                  </h3>
                  {service.duration && (
                    <div className="flex items-center gap-1">
                      <Image
                        src={clock}
                        width={18}
                        height={18}
                        alt="duration of the service"
                      />
                      <p className="text-sm font-normal text-gray-500">
                        {service.duration}m
                      </p>
                    </div>
                  )}
                  <p className="text-sm font-light">{service.description}</p>
                  {service.subcategories && (
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {service.subcategories.map((subcategory, subIndex) => (
                        <div className="flex flex-col gap-2" key={subIndex}>
                          <div className="flex items-center gap-1">
                            <Image
                              src={clock}
                              width={18}
                              height={18}
                              alt="duration of the service"
                            />
                            <p className="text-sm font-normal text-gray-500">
                              {subcategory.duration}m
                            </p>
                          </div>
                          <h4 className="w-[85%] text-xs">
                            {subcategory.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        <div class="min-w-full snap-center">
          <Accordion
            className="w-full flex-shrink-0 md:w-auto"
            title="Trattamenti viso"
            description="Discover personalized treatments tailored to enhance your natural radiance and rejuvenate your skin. Step into a world of indulgence and refinement, where every visit leaves you feeling confident, refreshed, and revitalized."
            image={maniPiedi}
            imagePosition="left"
          >
            <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:px-12 md:py-12">
              {trattamentiViso.map((service, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <h3 className="font-serif text-[1.3rem] font-bold">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src={clock}
                      width={18}
                      height={18}
                      alt="duration of the service"
                    />
                    {service.duration && (
                      <p className="text-sm font-normal text-gray-500">
                        {service.duration}m
                      </p>
                    )}
                  </div>
                  <p className="text-sm font-light">{service.description}</p>
                  {service.subcategories && (
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {service.subcategories.map((subcategory, subIndex) => (
                        <div className="flex flex-col gap-2" key={subIndex}>
                          <div className="flex items-center gap-1">
                            <Image
                              src={tick}
                              width={18}
                              height={18}
                              alt="subcategory indicator"
                            />
                            <p className="text-sm font-normal text-gray-500">
                              {subcategory.duration}m
                            </p>
                          </div>
                          <h4 className="w-[85%] text-xs">
                            {subcategory.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default ServicesContainer
