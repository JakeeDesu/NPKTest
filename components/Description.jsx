/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";


export default function Example() {
  return (
    <div className="relative bg-lime-500 pt-16 pb-32 overflow-hidden">
      <div className="mt-24 hidden bg-yellow-400">
        <div id="Apropos" class="bg-gry-100 py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

            <div class="object-center  px-4 md:w-3/4 mx-auto md:mb-16 ">

              <img src="https://i.imgur.com/04cLOon.png" alt="image" />


            </div>


            <div class="mb-10 md:mb-16">

              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
                N-IndeX
              </h2>
              <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto text-justify">   est le résultat de 4 ans de recherches appliquées. Co développé avec Les Domaines Agricoles et l’Université Mohammed 6 Polytechnique (UM6P), cet indice permet d’estimer, à partir des images satellites, la quantité d’azote optimale à appliquer pour le blé à ses différents stades agronomiques ainsi que le plan de fumure P&K pour l’installation de la culture.​</p>
            </div>


          </div>
        </div>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
                  <h1 className="text-white text-center text-lg font-bold">
                    {" "}
                    N
                  </h1>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  N-IndeX
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  S'appuie sur un modèle hybride se basent sur l'imagerie
                  satellite pour recommander la dose de N
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium"
                  ></a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white pt-6">
              <div class="flex mb-4">
                <div class="w-1/2   h-12 px-2">
                  <div class="p-5">
                    <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900">
                      +24%
                    </h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Amélioration du rendement grain{" "}
                    </p>
                  </div>
                </div>

                <div class="w-1/2   h-12 px-2">
                  <div class="p-5">
                    <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900">
                      -21%
                    </h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                      Economie d'azote{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://i.imgur.com/mNqVbgU.png"
                alt="N index image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 ">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
                  <h1 className="text-white text-center text-lg font-bold">
                    PK
                  </h1>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  PK-IndeX
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  S'appuie sur un modèle de bilan agronomique se basant sur
                  l'analyse de sol pour P205 et K20
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://i.imgur.com/7G2heeG.png"
                alt="PK image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import img from "../public/images/nindex/nindex-hero.jpeg"
// import React from "react"

// const stats = [
//   { label: 'Amélioration du Rendement grain', value: '+24%' },
//   { label: 'Economie d\'azote', value: '-21%' },
// ]

// //  { label: 'Lancée', value: '2021' },
// // { label: 'Durée des recherches appliquées', value: '3 ans' },

// export default function Description() {
//   return (
//     <div id="Apropos" className="relative bg-gray-100 py-8 sm:py-12">
//       <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
//         <div className="relative sm:py-16 lg:py-0">
//           <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
//             <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
//             <svg
//               className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
//               width={404}
//               height={392}
//               fill="none"
//               viewBox="0 0 404 392"
//             >
//               <defs>
//                 <pattern
//                   id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
//                   x={0}
//                   y={0}
//                   width={20}
//                   height={20}
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
//                 </pattern>
//               </defs>
//               <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
//             </svg>
//           </div>
//           <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
//             {/* Testimonial card*/}
//             <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
//               <img
//                 className="absolute inset-0 h-full w-full object-cover"
//                 src="/nindex/nindex-hero.jpeg"
//                 alt=""
//               />

//             </div>
//           </div>
//         </div>

//         <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
//           {/* Content area */}
//           <div className="pt-12 sm:pt-16 lg:pt-20">
//             <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
//             N-IndeX, pour une fertilisation raisonnée du Blé
//             </h2>
//             <div className="mt-6 text-gray-500 space-y-6">
//               <p className="text-base">
//               N-IndeX est le résultat de 3 ans de recherches appliquées. Co développé par Les Domaines Agricoles
//               et l’Université Mohammed 6 Polytechnique (UM6P), cet indice permet d’estimer,
//               à partir des images satellites, la quantité d’azote optimale à appliquer
//               pour le blé à ses différents stades agronomiques.

//               </p>
//               <p className="text-base leading-7">
//               N-Index transforme des images satellites en recommandation d'Azote
//               en utilisant un modèle hybride combinant l’expertise d’AgriEdge en
//               intelligence artificielle et l'expertise
//               agronomique des Domaines Agricoles.

//               <br/>
//               Testé par les Domaines Agricoles, cet indice permet de
//               réaliser une économie d’Azote qui peut atteindre -21%
//               tout en améliorant le rendement de grain de +24%.

//               </p>
//             </div>
//           </div>

//           {/* Stats section */}
//           <div className="mt-10">
//             <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
//               {stats.map((stat) => (
//                 <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
//                   <dt className="text-base font-medium text-gray-500 ">{stat.label}</dt>
//                   <dd className="text-3xl font-extrabold tracking-tight text-gray-900 ">{stat.value}</dd>
//                 </div>
//               ))}

//             </dl>
//             {/* <div className="w-full mt-8">
//                 <div className="w-full aspect-w-16 aspect-h-9 relative overflow-hidden bg-black shadow-xl">
//                         <ReactPlayer url="https://youtu.be/yukp4DMx_MY" width="100%" height='100%' controls={true} />
//                 </div>
//             </div> */}

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
