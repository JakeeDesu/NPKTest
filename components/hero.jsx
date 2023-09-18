'use client'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import RectContainer from './ui/rectContainer'
import SelectorComponent from './ui/selectorComponent'
import { useState, useEffect } from 'react'
import { ItemRoulet } from './ui/BubbleSelector'
import BubbleSelector from './ui/BubbleSelector'
import { Link } from 'react-scroll'
//import Logo from "../public/images/logo_NavBar.png"


const navigation = [
  { name: 'À propos', href: '#Apropos' },
]



const bubbleVariants = {
  show: {
    opacity: 0,
    offsetDistance: "0%"

  },
  move: {
    opacity: 1,
    offsetDistance: "100%"

  }
}
export default function Hero() {

  const [selected, setSelected] = useState(0)
  const [isOpened, setIsOpened] = useState(false)
  const x = useMotionValue(0)


  const regularLinks = [
    {
      text: "Apropos",
      url: "about",
      href: undefined
    },
    {
      text: "Qui sommes nous ?",
      url: undefined,
      href: "https://agriedge.ma"
    }
  ]



  const cultures = [
    {
      title: "Booster votre Production",
      name: "Agrumes",
      image: "/images/hero/cultures/agrumes.png",
      bgImage: "/images/hero/bg_cultures/agrumes.webp",
      description: {
        n: ["Fabrication d'enzymes, de vitamines, de chlorophylle."],
        p: ["Transport des produits de la photosynthèse."],
        k: ["Formation et le grossissement du fruit."]
      }
    },
    {
      title: "Booster votre Production",
      name: "Maïs",
      image: "/images/hero/cultures/mais.png",
      bgImage: "/images/hero/bg_cultures/mais.webp",
      description: {
        n: ["Fabrication d'enzymes, de vitamines, de chlorophylle."],
        p: ["Amélioration des conditions de récolte."],
        k: ["Amélioration du niveau des acides aminés dans le grain."]
      }
    },
    {
      title: "Booster votre Production",
      name: "Blé tendre",
      image: "/images/hero/bg_cultures/ble.webp",
      bgImage: "/images/hero/bg_cultures/ble-t.webp",
      description: {
        n: ["Amélioration de rendement en quantité et qualité."],
        p: ["Essentiel pour la croissance des racines."],
        k: ["Renforcement de la résistance aux stress environnementaux."]
      }
    },
    {
      title: "Booster votre Production",
      name: "Avoine",
      image: "/images/hero/cultures/avoine.webp",
      bgImage: "/images/hero/bg_cultures/avoine3.webp",
      description: {
        n: ["Synthèse des protéines, ce qui influe sur la qualité nutritionnelle."],
        p: ["Développement des racines."],
        k: ["Renforcer la résistance de la plante aux stress environnementaux."]
      }
    },
    {
      title: "Booster votre Production",
      name: "Orge",
      image: "/images/hero/cultures/ble.png",
      bgImage: "/images/hero/bg_cultures/ble2.png",
      description: {
        n: ["Amélioration de la qualité des grains."],
        p: ["Favorisation de la croissance racinaire."],
        k: ["Amélioration de la résistance aux maladies fongiques."]
      }
    },

    // {
    //   title: "Booster votre Production",
    //   name: "Agrumes",
    //   image: "/images/hero/cultures/agrumes.png",
    //   bgImage: "/images/hero/bg_cultures/agrumes.webp",
    //   description: {
    //     n: ["Fabrication d'enzymes, de vitamines, de chlorophylle."],
    //     p: ["Le transfert d'énergie.", "Transport des produits de la photosynthèse au cours de la production d'agrumes."],
    //     k: ["Formation et le grossissement du fruit."]
    //   }
    // },
    // {
    //   title: "Booster votre Production",
    //   name: "Maïs",
    //   image: "/images/hero/cultures/mais.png",
    //   bgImage: "/images/hero/bg_cultures/mais.webp",
    //   description: {
    //     n: ["Fabrication d'enzymes, de vitamines, de chlorophylle."],
    //     p: ["Le phosphore réduit l’humidité à la récolte et hâte la maturité."],
    //     k: ["Le potassium joue un rôle dans l’amélioration du niveau de certains acides aminés dans le grain."]
    //   }
    // },
    // {
    //   title: "Booster votre Production",
    //   name: "Blé tendre",
    //   image: "/images/hero/bg_cultures/ble.webp",
    //   bgImage: "/images/hero/bg_cultures/ble2.png",
    //   description: {
    //     n: ["Favorise la croissance végétative et la formation de grains plus nombreux et plus gros"],
    //     p: ["Essentiel pour la croissance des racines du blé et pour le transfert d'énergie dans la plante."],
    //     k: ["Renforcer la résistance du blé aux stress environnementaux, tels que la sécheresse et les maladies."]
    //   }
    // },
    // {
    //   title: "Booster votre Production",
    //   name: "Avoine",
    //   image: "/images/hero/cultures/avoine.webp",
    //   bgImage: "/images/hero/bg_cultures/ble2.png",
    //   description: {
    //     n: ["L'azote est un élément clé pour la synthèse des protéines, ce qui influe sur la qualité nutritionnelle de l'avoine."],
    //     p: ["Le phosphore est crucial pour le développement des racines de l'avoine."],
    //     k: ["Le potassium aide à renforcer la résistance de la plante aux stress environnementaux."]
    //   }
    // },
    // {
    //   title: "Booster votre Production",
    //   name: "Orge",
    //   image: "/images/hero/cultures/ble.png",
    //   bgImage: "/images/hero/bg_cultures/ble2.png",
    //   description: {
    //     n: ["Formation de grains plus gros et à une meilleure teneur en protéines dans les grains."],
    //     p: ["Il favorise la croissance racinaire initiale et contribue à la formation de fleurs et de grains."],
    //     k: ["Le potassium important pour la qualité des grains en favorisant leur remplissage et en améliorant leur résistance aux maladies fongiques."]
    //   }
    // },
  ]

  return (
    <div className="relative flex flex-col justify-center items-center max-h-screen bg-red500/5 overflow-hidden w-full">


      {/* main - (body of hero section) */}
      <div className="mx-w-7xl mx-auto w-full bg-ed-500  shadow-sm">
        <div className="relative h-screen  max-h-screen flex justify-center items-center  z-10 pb-8 bg-red-00/30  md:pb-20 w-full lg:pb-28 xl:pb-32">
          {/* <RectContainer className='relative  w-full h-screen bg-ble-400 sm:bg-yelow-400 md:bg-orane-400 lg:bg-rd-400 xl:bg-transparent overflow-hidden  '> */}


          {/* dynamic component */}
          <div className=" absolute w-[200%] h-[200%] md:w-full md:h-[200%] left-auto bottom-[40%]  md:left-[25%] md:bottom-[14%] ring-black ring-none " >
            <BubbleSelector listOfItems={cultures} getSelectedItem={(index) => setSelected(index)} />
          </div>

          {/* nav mobile */}
          <nav className='fixed top-0 left-0 flex flex-row md:flex-auto  md:hidden h-fit w-full justify-start items-start   z-50'>

            <motion.div
              className={`absolute ${ isOpened ? "hidden opacity-0   transition-all duration-100" : " transition-all duration-100 delay-300 flex opacity-100"} items-center px-2 right-0 top-0 h-full w-fit `}
              animate={{
                opacity : isOpened ? 0 : 1,
                transition : {
                  duration : 1,
                  delay : isOpened ? 0 : 0.4
                }

              }}
            >
            <a href="https://ferti.agriedge.ma">

                      <div className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-xl lg:py-4 lg:px-10 bg-white/95 transition-all duration-200'>
                        <span className="text-sm  md:text-lg font-medium rounded-full text-green-700 ">Connexion</span>
                        <div className='relative h-full w-0 group-hover:w-5 group-hover:ml-1 overflow-hidden  transition-all duration-200 delay-100 bg-slat-400'>
                          <img className=' h-full object-contain opacity-0 group-hover:opacity-100 transition-all delay-200 duration-400  ' src="/images/ui/conexion-icon.png" alt="" />
                        </div>
                      </div>


                    </a>

            </motion.div>
            <motion.div
            
            className={`relative transition-all duration-300 ease-in-out ${ isOpened ? "w-full h-screen rounded-none" : "h-16 w-16 rounded-br-full"}   overflow-hidden `}
            onClick={() => setIsOpened(!isOpened)}

            // animate={{
              //   radius : isOpened ? "0%" : "100%"
              // }}

            >

              <motion.div className={`absolute top-0 left-0 h-full w-full flex flex-col justify-center  items-start transition-all duration-700 ease-in-out shadow-xl bg-gradient-to-br  ${isOpened ? "from-black/90 to-black/80" : "from-white/95 to-white/95"}`}

              >
                <div className='absolute top-0 left-0 w-14 h-14  flex justify-start items-start '>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                      <div className={`h-1 w-1/2  rounded-full m-1 ml-0 transition-all duration-300 ease-in-out ${isOpened ? "rotate-45 translate-y-full bg-white/80" : "rotate-0 bg-green-700/60"}`}></div>
                      <div className={`h-1 w-1/2  rounded-full m-1 ml-0 transition-all duration-300 ease-in-out ${isOpened ? "-rotate-45 -translate-y-full bg-white/80" : "rotate-0 bg-green-700/60"}`}></div>
                    </div>
                </div>
                <motion.div className='flex-1 w-full flex flex-col justify-center items-center'
                                animate={{
                                  display : isOpened ? "flex" : "none",
                                  opacity : isOpened ? 1 : 0,
                                  transition : {
                                    // delay : 0.3,
                                    duration : 1
                                  }
                                }}
                
                >
                    {regularLinks.map((link, index) => (
                      <div key={index} className="w-fit group rounded-full "
                      >
                        {link.url ? <Link
                          to={link.url ? link.url : "#"}
                          activeClass="active"
                          // duration={450}
                          smooth={true}
                          onClick={() => setIsOpened(false)}
                          >
                          <div className='w-full flex items-center justify-center mr-8 py-3 border border-transparent  md:py-4  transition-all duration-200 cursor-pointer'>
                            <span className="text-base  md:text-lg font-medium rounded-full text-white hover:text-green-800 transition-all duration-300 ">{link.text}</span>
                          </div>
                        </Link> :
                          <a
                            href={link.href ? link.href : "#"}
                            onClick={() => setIsOpened(false)}
                            >
                            <div className='w-full flex items-center justify-center mr-8 py-3 border border-transparent  md:py-4  transition-all duration-200 cursor-pointer'>
                              <span className="text-base  md:text-lg font-medium rounded-full text-white hover:text-green-800 transition-all duration-300 ">{link.text}</span>
                            </div>
                          </a>
                        }
                      </div>
                    ))}
                     <div className="w-fit group rounded-full mx-2 mb-10">
                      <Link
                        to={"footer"}
                        activeClass="active"
                        // duration={450}
                        smooth={true}
                        onClick={() => setIsOpened(false)}
                      >
                        <div className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full  group-hover:bg-lime-800/20 group-hover:shadow-sm lg:py-4 lg:px-10 transition-all duration-200 cursor-pointer'>
                          <span className="text-base  md:text-lg font-medium rounded-full text-white  ">Contactez-nous</span>
                        </div>
                      </Link>
                    </div>

                    <div className="w-fit group rounded-full">
                    <a
                      href="https://ferti.agriedge.ma"
                      onClick={() => setIsOpened(false)}
                    >



                      <div className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full lg:py-4 lg:px-10  bg-lime-500/80 transition-all duration-200'>
                        <span className="text-base  md:text-lg font-medium rounded-full text-white ">Connexion</span>
                        <div className='relative h-full w-0 group-hover:w-5 group-hover:ml-1 overflow-hidden  transition-all duration-200 delay-100 bg-slat-400'>
                          <img className=' h-full object-contain opacity-0 group-hover:opacity-100 transition-all delay-200 duration-400  ' src="/images/ui/conexion-icon.png" alt="" />
                        </div>
                      </div>


                    </a>
                  </div>

                </motion.div>

              


              </motion.div>
            </motion.div>
          </nav>

          {/* navigation bar */}
          <Popover>


            <nav className='absolute flex flex-row top-0 left-0 w-full h-fit bg-yellow-200/0 p-4 bg-cya-400'>

              {/* logo + small screen menu */}
              <div className='w-full md:w-[25%] items-center justify-between md:justify-start bg-ambe-600  hidden md:flex' >


                <Link
                  to={"#"}
                  activeClass="active"
                  // duration={450}
                  smooth={true}
                >
                  <span className="sr-only">NPK Platform</span>
                  <img
                    className=" hidden md:block h-10 w-auto sm:h-14"
                    src="/images/logos/npkIndex.webp"
                  />
                </Link>




                <div className="-mr-2 flex items-center sm:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

              </div>



              <div className='hidden flex-1 md:flex flex-row items-center justify-between bg-gry-600' >

                {/* links */}
                <div className='flex-1 flex flex-row items-center justify-between bg-blue-400/0 px-3 md:ml-6'>

                  {/* regular */}
                  <div className='flex-1 flex justify-start items-center bg-yellow-400/0'>
                    {regularLinks.map((link, index) => (
                      <div key={index} className="w-fit group rounded-full ">
                        {link.url ? <Link
                          to={link.url ? link.url : "#"}
                          activeClass="active"
                          // duration={450}
                          smooth={true}
                        >
                          <div className='w-full flex items-center justify-center mr-8 py-3 border border-transparent  md:py-4  transition-all duration-200 cursor-pointer'>
                            <span className="text-base  md:text-lg font-normal rounded-full text-white/90 hover:text-white transition-all duration-300 ">{link.text}</span>
                          </div>
                        </Link> :
                          <a
                            href={link.href ? link.href : "#"}
                          >
                            <div className='w-full flex items-center justify-center mr-8 py-3 border border-transparent  md:py-4  transition-all duration-200 cursor-pointer'>
                              <span className="text-base  md:text-lg font-normal rounded-full text-white/90 hover:text-white  transition-all duration-300 ">{link.text}</span>
                            </div>
                          </a>
                        }
                      </div>
                    ))}


                  </div>

                  {/* special */}
                  <div className='w-fit bg-orage-400'>

                    <div className="w-fit group rounded-full mx-2">
                      <Link
                        to={"footer"}
                        activeClass="active"
                        // duration={450}
                        smooth={true}
                      >
                        <div className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full  group-hover:bg-black/30 group-hover:shadow-sm lg:py-3 lg:px-8 transition-all duration-300 cursor-pointer'>
                          <span className="text-base  md:text-lg font-normal rounded-full text-white/90 hover:text-white   ">Contactez-nous</span>
                        </div>
                      </Link>
                    </div>

                  </div>

                </div>


                {/* connexion */}
                <div className='w-fit flex flex-row items-center justify-between bg-cyn-400 '>

                  <div className="group rounded-full">
                    <a
                      href="https://ferti.agriedge.ma"
                    >



                      <div className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-full lg:py-3 lg:px-8  bg-white transition-all duration-200'>
                        <span className="text-base  md:text-lg font-normal rounded-full text-green-700 ">Connexion</span>
                        <div className='relative h-full w-0 group-hover:w-5 group-hover:ml-1 overflow-hidden  transition-all duration-200 delay-100 bg-slat-400'>
                          <img className=' h-full object-contain opacity-0 group-hover:opacity-100 transition-all delay-200 duration-400  ' src="/images/ui/conexion-icon.png" alt="" />
                        </div>
                      </div>


                    </a>
                  </div>
                </div>

              </div>



            </nav>
          </Popover>




          {/* </RectContainer> */}





          <div className="flex flex-col  bg-gradient-to-l from-lime-800/0 via-white/0 to-white/20  backdrop-blur-[1px] md:bg-black/0 absolute h-fit w-full md:h-2/3 md:w-[45%]  top-20 md:bottom-[5%]  md:top-auto  left-0 px-5  md:px-10  ">

            <div className=" md:text-left bg-red-500/0 w-full h-fit flex flex-col justify-start items-start mb-8">

              {/* title */}
              <h1 className="text-3xl md:tracking-wide font-semibold md:font-semibold font-popDefault md:text-4xl">
                <span className='text-[#043804]/90 font-popDefault block pb-4'>
                  Booster votre
                </span>
                <span className='text-[#043804]/90  font-popDefault block pb-2 whitespace-nowrap  '>
                  Production  <AnimateText className="text-lime-50 capitalize font-medium font  md:text-[#91DE5F] font-popDefault inline-block" text={cultures[selected].name} index={selected} /> 
                </span>
              </h1>

              {/* buttons  */}
              <div className="hidden md:hidden lex h-fit mt-5 sm:mt-8  flex-row w-2/3 ">
                <div className="flex-1 mt-3 sm:mt-0  sm:ml-">
                  <a
                    // href="#footer"
                    className="w-full flex items-center justify-center px-auto py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 text-white/90 bg-[#37A345] hover:bg-lime-700 md:py-3 md:text-base "
                  >
                    Booster
                  </a>
                </div>
                <div className="flex-1 mt-3 sm:mt-0  sm:ml-3">
                  <a
                    href="https://ferti.agriedge.ma/"
                    className="w-full flex items-center justify-center px-auto py-3 whitespace-nowrap border border-transparent text-base font-medium rounded-full transition-all duration-300 text-[#163300] bg-white hover:bg-lime-200/10 ring-1 ring-[#163300] md:py-3 md:text-base "
                  >
                    Ouvrir un compte
                  </a>
                </div>

              </div>
            </div>


            <div className='hidden md:flex flex-1   flex-col justify-around bg-blue-00 max-w-xl'>


              <IndexInfoDisplayer delayFactor={0.3} title="N" bg_color="bg-[#40A446]" contentlist={cultures[selected]?.description.n} />
              <IndexInfoDisplayer delayFactor={0.6} title="P" bg_color="bg-[#A1E15C]" contentlist={cultures[selected]?.description.p} />
              <IndexInfoDisplayer delayFactor={0.9} title="K" bg_color="bg-[#79AC41]" contentlist={cultures[selected]?.description.k} />


            </div>

          </div>

          <div className='absolute bottom-0 left-0 flex md:hidden h-[36%] flex-col justify-around bg-blue-00 max-w-md'>


            <IndexInfoDisplayer delayFactor={0.3} title="N" bg_color="bg-[#40A446]" contentlist={cultures[selected]?.description.n} />
            <IndexInfoDisplayer delayFactor={0.6} title="P" bg_color="bg-[#A1E15C]" contentlist={cultures[selected]?.description.p} />
            <IndexInfoDisplayer delayFactor={0.9} title="K" bg_color="bg-[#79AC41]" contentlist={cultures[selected]?.description.k} />


          </div>

          <div className="hidden bg-green-600/0 absolute h-fit w-full bottom-[10%]  left-0 p-4">

            {/* buttons mobile size*/}
            <div className=" h-fit mt-5 sm:mt-8 flex flex-row w-full">
              <div className="flex-1 mx-2">
                <a
                  // href="#footer"
                  className="w-full flex items-center justify-center px-auto py-3 border border-transparent text-base font-medium rounded-full transition-all duration-300 text-white/90 bg-[#37A345] hover:bg-lime-700 md:py-3 md:text-base "
                >
                  Booster
                </a>
              </div>
              <div className="flex-1 mx-2">
                <a
                  href="https://ferti.agriedge.ma/"
                  className="w-full flex items-center justify-center px-auto py-3 whitespace-nowrap border border-transparent text-base font-medium rounded-full transition-all duration-300 text-[#163300] bg-white hover:bg-lime-200/10 ring-1 ring-[#163300] md:py-3 md:text-base "
                >
                  Ouvrir un compte
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className="hidden bg-yellow-500 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className='bg-black h-full w-full'>

        </div> */}
      {/* <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          // src= "https://images.unsplash.com/photo-1437034962079-eb527ac36d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
          // src="https://uploads-ssl.webflow.com/5f0888baee442209982ab061/5f327d80a3b2c9e03b7ff323_mainil.svg"
          src="https://images.unsplash.com/photo-1627920769842-6887c6df05ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80"
          alt="n-index cover"
        /> */}
      {/* </div> */}
    </div>
  )
}


const IndexInfoDisplayer = ({ title, bg_color, contentlist, delayFactor }) => {
  // console.log(contentlist)
  return (
        <AnimatePresence>
    <div className=' bg-pink-00  w-full h-1/3 bg-white rounded-r-full flex flex-row justify-start items-center  px-4' >
      <div className={` w-12 h-12 md:w-20 md:h-20 rounded-full shadow-md  ${bg_color ? bg_color : "bg-[#40A446]"} flex justify-center items-center`}>
        <h1 className=' text-3xl font-popDefault font-medium text-white'>{title}</h1>
      </div>
      <div className='flex-1 h-fit flex flex-col pl-2 md:pl-4 overflow'>
        {contentlist.map((content, index) => (
          
          <div key={index} className='w-full h-fit flex flex-row justify-center items-center text-start align-middle'>
            <motion.div
              className={`h-2 w-2 rounded-full ${bg_color ? bg_color : "bg-[#40A446]"} mr-4`}
              key={`${content}-${index}`}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{
                delay : (0.1 * index ) + delayFactor,
                duration: 0.3,
                ease : 'easeInOut'
              }}
              exit={{ opacity: -10 }}
            ></motion.div>
            <div className='flex-1'>
      <motion.p
          className='text-sm font-popDefault font-normal font mb-2'
          key={`${content}-${index}`}
          initial={{ opacity: 0, y : 5 }}
          animate={{ opacity: 1, y : 0 }}
          transition={{
            delay : (0.1 * index ) + delayFactor,
            duration: 0.6,
            ease : 'easeInOut'
          }}
          exit={{ opacity: -10 }}
        >
        {content}
      </motion.p>

              {/* <p className='text-xs font-popDefault font-normal font mb-2'>{content}</p> */}

            </div>
          </div>
        ))}
      </div>
    </div>
        </AnimatePresence>
  )
}
const PIndexInfoDisplayer = ({ contentlist }) => {
  console.log(contentlist)
  return (
    <div className=' bg-pink-00 w-full h-1/3 bg-white rounded-r-full flex flex-row justify-start items-center mb-2 ' >
      <div className=" w-20 h-20 rounded-full shadow-lg bg-[#A1E15C] flex justify-center items-center">
        <h1 className=' text-xl font-popDefault font-bold text-white'>P</h1>
      </div>
      <div className='flex-1 h-fit flex flex-col justify-start items-start px-2 md:pl-4  overflow'>
        {contentlist.map((content, index) => (
          <div key={index} className='w-full h-fit flex flex-row justify-center items-center text-start align-middle'>
            <div className='h-2 w-2 rounded-full bg-[#A1E15C] mr-4  p-0  '></div>
            <div className='flex-1'>
              <p className='text-sm font-popDefault font-normal font mb-2'>{content}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const KIndexInfoDisplayer = ({ contentlist }) => {
  console.log(contentlist)
  return (
    <div className='relative bg-pink-00 w-full h-1/3 bg-white rounded-r-full flex flex-row justify-start items-center mb-2 ' >
      <div className=" w-20 h-20 rounded-full shadow-lg bg-[#79AC41] flex justify-center items-center">
        <h1 className=' text-xl font-popDefault font-bold text-white'>N</h1>
      </div>
      <div className='absolute left-20 flex-1 flex flex-col pl-4 overflow'>
        {contentlist.map((content, index) => (
          <div key={index} className='w-full h-fit flex flex-row justify-center items-center text-start align-middle'>
            <div className='h-2 w-2 rounded-full bg-[#79AC41] mr-4  p-0  '></div>
            <div className='flex-1'>
              <p className='text-sm font-popDefault font-normal font mb-2'>{content}</p>

            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

const AnimateText = ({ index, text, className }) => (
  // <AnimatePresence>
      <motion.span
          className={className}
        key={index}
        initial={{ opacity: 0, y : 0 }}
        animate={{ opacity: 1, y : 0 }}
        transition={{
          delay : 0.0,
          duration: 0.6,
          ease : 'easeInOut'
        }}
        exit={{ opacity: -10 }}
      >
        {text}
      </motion.span>

  // </AnimatePresence>
)