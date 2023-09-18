import React, { useRef, useEffect, useState } from 'react';

import { motion, useMotionValue, useTransform, transform, Variants, useAnimation } from 'framer-motion'
import RectContainer from './rectContainer'



const SelectorComponent = ({className, bublesList, setSelected }) => {
    const containerRef = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    const [rotationStep, setRotationStep] = useState(360 / bublesList.length)
    const [currentRotationStep, setCurrentRotationStep] = useState(90)



    const [currentRState, setCurrentRState] = useState(0)
    const [currentRotaion, setCurrentRotaion] = useState(0)
    const [positions, setPositions] = useState([])
  
    useEffect(() => {
      const container = containerRef.current;
  
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const { width, height } = entry.contentRect;
          setParentSize({ width, height });
        }
      });
  
      resizeObserver.observe(container);
  
      return () => {
        resizeObserver.unobserve(container);
      };
    }, []);  

    useEffect(() => {
        if (!(positions.length > 0))
        {
            let newPositions = getPositions(bublesList, 0)
            // console.log('bubbles position ', newPositions) 
            setPositions(newPositions)
            setRotationStep(360 / bublesList.length)
        }
    },[bublesList])

    
    const x = useMotionValue(0);
    const velocity = useMotionValue(0);
    // const rotate = useTransform(x, [-(parentSize.width), (parentSize.width)], [-rotationStep, rotationStep], { clamp : false});

    // const MoveRotation = useTransform(rotate, value => {
    //     return value > 0 ?  value + rotationStep : value + -rotationStep 
    // } );

    const transformer = transform([0,100], ["0%","100%"] )

    useEffect(() => {
        const unsubscribe = velocity.on("change", setCurrentRotaion);
        return unsubscribe;
      }, []);


    //   useEffect(() => {
    //     console.log("-------------- current Rotaion : ", currentRotaion , rotationStep)
    //     if (currentRotaion > 0 && currentRotaion > rotationStep / 2)
    //     {
    //         // velocity.set(0)
    //         // moveNext()
    //         // console.log("*******************************", velocity.get() , "*******************************", currentRotationStep)
    //         setCurrentRotationStep(currentRotationStep + rotationStep)

    //     }
            
    //   },[currentRotaion])


      const moveNext = () => {
        console.log("21341234213453215125")
        if (currentRotaion >= 0)
            setCurrentRotationStep(currentRotationStep + rotationStep)
        else if (currentRotaion < 0)
            setCurrentRotationStep(currentRotationStep - rotationStep)
        console.log("selected Item ", (Math.floor((currentRotationStep -90 ) / rotationStep) + bublesList.length) % bublesList.length)
        setSelected(Math.abs((Math.floor((currentRotationStep -90 ) / rotationStep) + bublesList.length) % bublesList.length))
      }

      const movePrev = () => {
        setCurrentRotationStep(currentRotationStep + rotationStep)
      }

    return (
        <motion.div ref={containerRef} className={className}
        onClick={(e) => moveNext()}
        >
            <motion.div className='relative h-full w-full'
                // style={{
                //     rotate : rotate,
                //     transformOrigin: 'center',
                // }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0}
                onDrag={(event, info) => {
                    // console.log("point x drag : ", info.point.x % (30))
                    // console.log("velocity x drag : ", info.velocity.x)
                    // console.log("currentRState drag : ", currentRState)
                    // console.log("transformer drag : ", transformer(offsetDistance))

                    // if ((info.offset.x) > 500 )
                    //     setCurrentRState(currentRState + 1)
                    // else if ((info.offset.x) < -500 )
                    //     setCurrentRState(currentRState - 1)
                       
                    x.set(info.offset.x);
                    velocity.set(info.velocity.x)
                }}
                initial={{
                    scale : 0,
                    rotate : -360

                }}
                animate={{
                    scale: 1,
                    rotate : currentRotationStep
                }}
                transition={{
                    scale : {
                        duration : 1,
                        type: "spring"
                    },
                    rotate : {
                        duration : 1,
                        // type: "spring"
                        
                        
                    }
                }}
                onDragEnd={(event, info) => {
                    moveNext()
                }}
            >
                <svg fill="none" viewBox={`0 0  ${parentSize.width}  ${parentSize.width}`} xmlns="http://www.w3.org/2000/svg">
                    <path
                        d={`M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0`}
                        stroke-dasharray="17"
                        stroke="#9FE870"
                    />
                </svg>


                {positions.length > 0 && bublesList.map((bubble, index) => (

                    <motion.div
                    key={index}
                        className={` h-10 w-10 md:h-20 md:w-20 lg:h-24  lg:w-24 absolute top-0 left-0 transition-all duration-200 rounded-full   ${ (Math.floor((currentRotationStep -90 ) / rotationStep) + bublesList.length) % bublesList.length == index ? "scale-[120%] shadow-xl" : "scale-none shadow-sm  hover:scale-[105%]" } `}
                        style={{
                            offsetPath: `path("M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0")`,
                            // pathOffset: "0%",
                        }}

                        variants={{
                            initial: {
                                offsetDistance: positions[index],
                                // scale : 1
                                // pathOffset: "0%",
                            },
                            current:{
                                // scale : currentRotatio,
                                offsetDistance : positions[index]
                            }
                        }}
                        // whileHover={{
                        //     scale: 1.2,
                        //     // transition : {
                        //     //     duration: 1
                        //     // }
                        // }}
                        initial="initial"
                        animate="current"
                    transition={{
                    duration: 1,
                    // repeat : Infinity,

                    }}
                    >
                        <RectContainer className="h-full w-full rounded-full bg-white ring-1 ring-gray-400 flex justify-center items-center overflow-hidden">
                            <h1 className=' text-center font-black text-2xl text-gray-800'>{bubble.name}</h1>
                            {/* <img className='w-full h-full object-contain' src={bubble.image} alt="" /> */}
                        </RectContainer>
                    </motion.div>

                ))

                }





            </motion.div>


        </motion.div>
    )
}


const getPositions = (bublesList, step) => {
    let xStep = 100 / bublesList.length
    return bublesList.map((elem, index) => {
        return `${100 - (xStep * index)}%`
        // return "150%"
        // return `${((((100 / bublesList.length) * index) + (step * (100 / bublesList.length)))  ) % 100}%`
    })
}

export default SelectorComponent