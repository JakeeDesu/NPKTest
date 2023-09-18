
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useVelocity } from 'framer-motion'
import RectContainer from './rectContainer';
import Image from 'next/image';




const BubbleSelector = ({ listOfItems, defaultSelected, getSelectedItem }) => {

    const containerRef = useRef(null)

    const [selectedItem, setSelectedItem] = useState(0)

    const x = useMotionValue(0)
    const xVelocity = useVelocity(x)

    // rotation Unit [0 - 360]
    const [rotationStepUnit, setRotationStepUnit] = useState(0)

    // current rotation steps [0 ~ infi]
    const [currentRotationSteps, setCurrentRotationSteps] = useState(0)

    // rotation Value [-k(360) ~ 0 ~ k(360)]
    const [rotationValue, setRotationValue] = useState(0)

    // rotation Velocity
    const [velocity, setVelocity] = useState(0)


    const [containerRect, setContainerRect] = useState(undefined)

    const [moveOrder, setMoveOrder] = useState(0)
    const [cursor, setCursor] = useState(undefined)
    const [prevCursor, setPrevCursor] = useState(undefined)
    const [mouseClick, setMouseClick] = useState(false)
    const [mouseTouch, setMouseTouch] = useState(false)
  
  

    const [startX, setStartX] = useState(undefined)
    const [endX, setEndX] = useState(undefined)
    const [reset, setRest] = useState(false)
    const [isTrackingAction, setIsTrackingAction] = useState(false)

    // useEffect(() => {
    //     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;


    //     window.addEventListener('mousedown', handleMouseDown)

    //     const handleMouseDown = (event) => {
    //         console.log("start tracking")
    //         setStartX(event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2))

    //         window.addEventListener('mousemove', handleMouseMove)
    //         window.addEventListener('mouseup', handleMouseUp)
    //     }

    //     const handleMouseMove = (event) => {
    //         console.log("...tracking")
    //         setEndX(event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2))
    //     }

    //     const handleMouseUp = (event) => {
    //         console.log("check for swipe")
    //         window.removeEventListener('mousemove', handleMouseMove)
    //         window.removeEventListener('mouseup', handleMouseUp)
    //         checkForSwipe()
    //     }

    //     return () => window.removeEventListener('mousedown', handleMouseDown)

    // }, [])




    // useEffect(() => {
        
        
    //     const handleMouseDown = (event) => {
    //         console.log('mouse down - set startX - add mMoveListener - add mUpListener')
    //         setStartX(event.clientX )
            
    //         // setIsTrackingAction(true)
    //         window.addEventListener('mousemove', handleMouseMove)
    //         window.addEventListener('mouseup', handleMouseUp)
    //     }
        
    //     const handleMouseMove = (event) => {
    //         console.log('mouse move - setEndX state')
    //         console.log(`mouse Move ${event.clientX }`)
    //         setEndX(event.clientX )
    //     }
        
    //     const handleMouseUp = () => {
    //         console.log('mouse up - remove mMoveListener - remove mUpListener - call checkForSwipe')
    //         checkForSwipe()
    //         window.removeEventListener('mousemove', handleMouseMove)
    //         window.removeEventListener('mouseup', handleMouseUp)
    //         // checkForSwipe()
    //     }

    //     const handleTouchStart = (event) => {
    //         setStartX(event.touches[0].clientX);
    //         node.addEventListener('touchmove', handleTouchMove);
    //         node.addEventListener('touchend', handleTouchEnd);
    //       };
      
    //       const handleTouchMove = (event) => {
    //         setEndX(event.touches[0].clientX);
    //       };
      
    //       const handleTouchEnd = () => {
    //         checkForSwipe()
    //         node.removeEventListener('touchmove', handleTouchMove);
    //         node.removeEventListener('touchend', handleTouchEnd);
    //         // checkSwipe(true);
    //       };

    //       const checkForSwipe = () => {
    //         console.log('checkForSwipe')
    //         const swipeTreshold = 10
    //         if (startX && endX)
    //         {
    //             if (Math.abs(endX - startX) > swipeTreshold)
    //             {
    //                 console.log("swipe up")
    //                 if ((endX - startX) > 0)
    //                     (endX - startX) > (20 * swipeTreshold) ? rotateBubbles(2) : rotateBubbles(1)
    //                 else
    //                     (endX - startX) < (-20 * swipeTreshold) ? rotateBubbles(-2) : rotateBubbles(-1)
    //             }
    //             else 
    //                 console.log("swipe not enough")
    //         }
    //         else
    //             console.log('startx or endX or both are empty')
    //         setStartX(undefined)
    //         setEndX(undefined)
    //         // setRest(false)
    //         // reset(false)
    //     }

    //     console.log('add mDownListener')
    //     containerRef.current.addEventListener('mousedown', handleMouseDown)
    //     containerRef.current.addEventListener('touchstart', handleTouchStart)            
        
    //     return () => {
    //         console.log('ret remove mDownListener')
    //         containerRef.current.removeEventListener('mousedown', handleMouseDown)
    //         containerRef.current.removeEventListener('touchstart', handleTouchStart)

    //         console.log('ret remove mMoveListener')
    //         removeEventListener('mousemove', handleMouseMove)
    //         console.log('ret remove mUpListener')
    //         window.removeEventListener('mouseup', handleMouseUp)
            
    //     }
    // },[startX, endX])

    // useEffect(() => {
                
    //     const checkForSwipe = () => {
    //         console.log('checkForSwipe')
    //         const swipeTreshold = 10
    //         if (startX && endX)
    //         {
    //             if (Math.abs(endX - startX) > swipeTreshold)
    //             {
    //                 console.log("swipe up")
    //                 if ((endX - startX) > 0)
    //                     (endX - startX) > (20 * swipeTreshold) ? rotateBubbles(2) : rotateBubbles(1)
    //                 else
    //                     (endX - startX) < (-20 * swipeTreshold) ? rotateBubbles(-2) : rotateBubbles(-1)
    //             }
    //             else 
    //                 console.log("swipe not enough")
    //         }
    //         else
    //             console.log('startx or endX or both are empty')
    //         setStartX(undefined)
    //         setEndX(undefined)
    //         setRest(false)
    //         // reset(false)
    //     }
    
    //     checkForSwipe()
    // },[reset])

    // useEffect(() => {
    //     console.log(`start : ${startX}, end : ${endX}`)

    // }, [startX, endX])

    // const checkForSwipe = () => {
    //     if (startX && endX)
    //     {
    //         if (startX - endX > 0)
    //             console.log("left swipe")
    //         else 
    //             console.log("right swipe")
    //     }
    //     else
    //         console('startx or endX or both are empty')

    // }
  
    // // mouse track
    // useEffect(() => {

    //     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    //     console.log("enter action area *******")
    //     const captureCursorCoordiantes = (event) => {

    //         if (containerRef)
    //         {
    //             // if (mouseClick)
    //             // {
    //             //     console.log("track while mouse on click")
    //                 setCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //                 if (!prevCursor)
    //                     setPrevCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //             // if (cursor != undefined && Math.abs(Math.abs(cursor.x - prevCursor) - (20)) > 0  && moveOrder === 0)
    //             // {
    //             //     console.log("emit Mover order --------------------------------------")
    //             //     // setMoveOrder(cursor?.x - (event.clientX - containerRef.current.getBoundingClientRect().left))
    //             // }
    //             // }
    //         }
    //     }

    //     const captureTouchCoordiantes = (event) => {

    //         if (containerRef)
    //         {
    //             // if (mouseClick)
    //             // {
    //             //     console.log("track while mouse on click")
    //                 setCursor({x : event.touches[0].clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.touches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //                 if (!prevCursor)
    //                     setPrevCursor({x : event.touches[0].clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.touches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //             // if (cursor != undefined && Math.abs(Math.abs(cursor.x - prevCursor) - (20)) > 0  && moveOrder === 0)
    //             // {
    //             //     console.log("emit Mover order --------------------------------------")
    //             //     // setMoveOrder(cursor?.x - (event.clientX - containerRef.current.getBoundingClientRect().left))
    //             // }
    //             // }
    //         }
    //     }
    //     if (isTouchDevice)
    //     {
    //         window.addEventListener('touchmove', captureTouchCoordiantes)

    //     }
    //     else
    //     window.addEventListener('mousemove', captureCursorCoordiantes)
  
    //     return  () => {
    //         window.removeEventListener('mousemove', captureCursorCoordiantes)
    //         window.removeEventListener('touchmove', captureTouchCoordiantes)
    //     }

    // }, [])
  
    //     useEffect(() => {
    //     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
    //     const mouseOnHandler = (event) => {

    //         if (isTouchDevice)
    //         {
    //             console.log(`touch ev ${event.touches[0].clientX} , ${event.touches[0].clientY}-`)
    //             setCursor({x : event.touches[0].clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.touches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //             if (!prevCursor)
    //                 setPrevCursor({x : event.touches[0].clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.touches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //         }
    //         else
    //         {
    //             console.log(`click ev ${event.clientX} , ${event.clientY}-`)
    //             setCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //             if (!prevCursor)
    //                 setPrevCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //         }
                
    //         if (!mouseClick)
    //             setMouseClick(true)
    //     }

    //     const mouseOffHandler = (event) => {

    //         if (isTouchDevice)
    //         {
    //             setCursor({x : event.changedTouches[0].clientX  - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.changedTouches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //             if (!prevCursor)
    //                 setPrevCursor({x : event.changedTouches[0].clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.changedTouches[0].clientY - containerRef.current.getBoundingClientRect().top})
    //         }
    //         else
    //         {
    //             setCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //             if (!prevCursor)
    //                 setPrevCursor({x : event.clientX - containerRef.current.getBoundingClientRect().left - (containerRef.current.getBoundingClientRect().width / 2), y : event.clientY - containerRef.current.getBoundingClientRect().top})
    //         }
            

    //         if (mouseClick)
    //             setMouseClick(false)
    //     }


    //     if (!isTouchDevice)
    //     {
    //         window.addEventListener('mousedown', mouseOnHandler)
    //         window.addEventListener('mouseup', mouseOffHandler)
    //     }
    //     else
    //     {
    //         window.addEventListener('touchstart', mouseOnHandler)
    //         window.addEventListener('touchend', mouseOffHandler)
    //     }

    //     return () => {
    //         window.removeEventListener('mousedown', mouseOnHandler)
    //         window.removeEventListener('mouseup', mouseOffHandler)
    //         window.removeEventListener('touchstart', mouseOnHandler)
    //         window.removeEventListener('touchend', mouseOffHandler)    
    //     }
    //     }, [mouseClick])
    // // useEffect(() => {
    // //     if (!mouseClick)
    // //         setPrevCursor(cursor)

    // // }, [mouseClick])
    // // // triger roulet to move whenever draged 20 pixels
    // useEffect(() => {
    //     if (Math.abs(moveOrder) > 20)
    //     {
    //         moveOrder > 0 ? rotateBubbles(1) : rotateBubbles(-1)
    //     }
    //     // else
    //     // setMoveOrder(0)

    //     // console.log('cursor : ', cursor)
    // }, [moveOrder])


    // useEffect(() => {
    //     if (!mouseClick && prevCursor != undefined && cursor != undefined && Math.abs(cursor.x - prevCursor.x) > 20)
    //     {
    //         console.log("emit Mover order -------------------------------------- : ", cursor.x - prevCursor.x)
    //         setMoveOrder(cursor.x - prevCursor.x)
    //         // setMouseClick(false)
    //         setPrevCursor(undefined)
    //     }
    // }, [cursor, mouseClick])



    useEffect(() => {
        console.log("mouseClick value : ", mouseClick)
        if (mouseClick)
            setPrevCursor(cursor)
    }, [mouseClick])

    // const handleMouseDown = (event) => {
    //     setIsMouseDown(true);
    //     setStartX(event.clientX);
    //   };
    
    //   const handleMouseUp = (event) => {
    //     console.log("v chaaaaaaaaaange")
    //     if (isMouseDown) {
    //       setIsMouseDown(false);
    //       setEndX(event.clientX);
    
    //       // Calculate velocity
    //       const distance = endX - startX;
    //       const time = new Date().getTime() - event.timeStamp;
    //       const velocity = Math.floor(distance / time); // Pixels per millisecond
    //       console.log(`Swipe velocity: ${velocity}px/ms`);
    //     }
    //   };
    // useEffect(() => {
    //     console.log("here is velocity : ", velocity)
    //     if (velocity.x > 0)
    //     velocity.x > 1000 ? rotateBubbles(2) : rotateBubbles(1)
    // else
    //     velocity.x < -1000 ? rotateBubbles(-2) : rotateBubbles(-1)
    // }, [velocity])

    // const ondragEnds = () => {
    //     console.log("here is velocity : ", velocity)
    //     if (velocity.x > 0)
    //     velocity.x > 1000 ? rotateBubbles(2) : rotateBubbles(1)
    // else
    //     velocity.x < -1000 ? rotateBubbles(-2) : rotateBubbles(-1)

    // }

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         // Update the motion values with the mouse coordinates
    //         const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    //         x.set(clientX);
    //       };
        
    //     // Add the event listener
    //     document.addEventListener("mousemove", handleMouseMove);
    //     document.addEventListener("touchmove", handleMouseMove, {passive : true});

    //     return () => {
    //         document.removeEventListener("mousemove", handleMouseMove);
    //         document.removeEventListener("touchmove", handleMouseMove);

    //       };
    
    // })

    // useEffect(() => {
    //     return xVelocity.onChange((latestVelocity) => {
    //         console.log("latestVelocity ------> ", latestVelocity)
    //         if (latestVelocity != 0)
    //         {
    //             console.log("bingoooooooooooooooooooooooo")
    //             setVelocity(latestVelocity)
    //         }
    //     })
    //   }, [])

    // useEffect(() => {
    //     // console.log("*****************************************************************velocity : ", xVelocity)
    //     // if (!isTracking)
    //     // {
    //         // if (velocity > 0)
    //         // rotateBubbles(Math.floor((velocity * 0.002)) )
    //         console.log("velocity here is : ", Math.floor(velocity))
                
    //             if (velocity > 0)
    //             velocity > 2 ? rotateBubbles(2) : rotateBubbles(1)
    //         else
    //             velocity < -2 ? rotateBubbles(-2) : rotateBubbles(-1)
    //         // else
    //     // }
    // }, [isTracking])

    useEffect(() => {
        setRotationStepUnit(360 / listOfItems.length)
        setSelectedItem((listOfItems.length - (currentRotationSteps % listOfItems.length)) % listOfItems.length)
        console.log("preselect : ", (listOfItems.length - (currentRotationSteps % listOfItems.length)) % listOfItems.length)

    }, [listOfItems])


    useEffect(() => {
        setRotationValue(currentRotationSteps * rotationStepUnit)
        console.log("selected item : ", (listOfItems.length - (currentRotationSteps % listOfItems.length)) % listOfItems.length)
        setSelectedItem((listOfItems.length - (currentRotationSteps % listOfItems.length)) % listOfItems.length)

    }, [currentRotationSteps])

    useEffect(() => {
        // console.log("selected item is : --> ", listOfItems.length, selectedItem)
        // console.log("selected Item : -->",  selectedItem, listOfItems[selectedItem].name)
        getSelectedItem(selectedItem)

    }, [selectedItem])

    const rotateBubbles = (steps) => {
        setCurrentRotationSteps(currentRotationSteps + steps)

        // console.log("selected before item is : --> ", Math.abs(currentRotationSteps % listOfItems.length))
    }


    const handleDrag = (event, info) => {
        // nothing
    }

    const onDragEnd = (event, info) => {
        const doubleRotate = (d) => {
            if (d > 0) {
                rotateBubbles(1)
                rotateBubbles(1)
            }
            else {
                rotateBubbles(-1)
                rotateBubbles(-1)
            }
        }
        if (info.velocity.x > 0)
            info.velocity.x > 1000 ? rotateBubbles(2) : rotateBubbles(1)
        else
            info.velocity.x < -1000 ? rotateBubbles(-2) : rotateBubbles(-1)
    }


    const onItemClick = (index) => {

        if (Math.abs(selectedItem - index) > listOfItems.length / 2)
            selectedItem - index < 0 ? rotateBubbles((listOfItems.length - Math.abs(selectedItem - index)) % listOfItems.length)
                : rotateBubbles(-((listOfItems.length - Math.abs(selectedItem - index)) % listOfItems.length))
        else
            rotateBubbles(selectedItem - index)

    }


    const mouseOnHandler = () => {
        if (!mouseClick)
            setMouseClick(true)
    }

    const mouseOffHandler = () => {
        if (mouseClick)
            setMouseClick(false)
    }

    return (

        <motion.div ref={containerRef} className='relative w-full h-full pb-[6.5%]'
            // style={x}
            // onTouchStart={mouseOnHandler}
            // onMouseDown={mouseOnHandler}
            // onMouseUp={mouseOffHandler}
            // onMouseLeave={mouseOffHandler}
            // onTouchEnd={mouseOffHandler}
            // drag="x"
            // dragElastic={false}
            // dragConstraints={{
            //     left: 0,
            //     right: 0
            // }}
            // onDrag={handleDrag}
            // onDragEnd={onDragEnd}
        >
            <div
                className='relative w-full h-full flex flex-col justify-center items-center  bg-yellow-400/0'>

                <div className='relative w-full h-full rounded-full overflow-hidden ' style={{ overflow: "hidden", position: "relative" }}

                >

                    <BgImage image={listOfItems[selectedItem].bgImage} />


                    <div className='relative h-full w-full rounded-full overflow-hidden'>
                        <RectContainer
                            className='absolute h-auto w-[45%] bottom-0 left-[50%] translate-y-[60%] -translate-x-1/2  bg-gren-500/30'
                        >
                            <motion.div
                                // onClick={() => rotateBubbles(-1)}
                                className="relative w-full h-full bg-yellow-600/0"

                                animate={{
                                    rotate: rotationValue,
                                    transition: {
                                        duration: 1.5,
                                        // type : 'spring'

                                    }
                                }}
                            >

                                <Circler listOfItems={[]} showPath />
                            </motion.div>
                        </RectContainer>
                        <RectContainer
                            className='absolute h-auto w-[45%] bottom-0 left-[50%] translate-y-[60%] -translate-x-1/2   bg-red-500/0'
                        >

                            <motion.div
                                className="relative w-full h-full bg-yellow-600/0"
                                animate={{
                                    rotate: rotationValue
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1
                                }}

                            >
                                <Circler
                                    className='relative rotate-90 h-full w-full bg-lime-500/0 '
                                    listOfItems={listOfItems}
                                    onItemClick={onItemClick}
                                    selectedItem={selectedItem}
                                />
                            </motion.div>
                        </RectContainer>
                    </div>
                </div>
                <div
                    className="absolute h-[18%] w-[18%] md:h-[18%] md:w-[18%] bottom-0 flex justify-center items-center translate-y-1/2 left-1/2 -translate-x-1/2"
                >
                    <RectContainer className="w-full" >
                        <div className='relative h-full w-full flex justify-center bg-gray-300 rounded-full items-center'>
                            <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center rounded-full overflow-hidden'>
                                <div className='h-full w-full bg-white rounded-full overflow-hidden blur-md md:blur-xl '></div>
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full  rounded-full shadow-lg overflow-hidden p-5 '>
                                <img className='w-full h-full object-contain' src="/images/logos/npkIndex.webp" alt="" />
                            </div>
                            <div className=' h-1/2 max-h-[50%] w-[200%] absolute bottom-0 flex justify-between items-center bg-sy-500'>
                                <RectContainer className="w-[14%] md:w-[9%] transition-all duration-200 hover:scale-105  cursor-pointer"

                                >

                                    <div className=' w-full h-full rounded-full shadow-lg overflow-hidden  bg-reen-900 cursor-pointer'
                                        onClick={() => rotateBubbles(-1)}

                                    >
                                        <img className='w-full h-full object-contain' src="/images/logos/row.svg" alt="" />
                                    </div>

                                </RectContainer>
                                <RectContainer className="w-[14%] md:w-[9%]  transition-all duration-200 hover:scale-105  cursor-pointer"
                                >
                                    <div className=' w-full h-full rounded-full shadow-lg overflow-hidden  bg-reen-900 cursor-pointer'
                                        onClick={() => rotateBubbles(1)}

                                    >
                                        <img className='w-full h-full object-contain' src="/images/logos/row.svg" alt="" />
                                    </div>

                                </RectContainer>
                                {/* <div className=' rounded-full shadow-lg overflow-hidden transition-all duration-200 hover:scale-105  cursor-pointer bg-reen-900'>
                                    <img className='w-8 h-8 md:w-14 md:h-14 object-contain' src="/images/logos/row.svg" alt="" />
                                </div>
                                <div className='rounded-full shadow-lg overflow-hidden transition-all duration-200 hover:scale-105 cursor-pointer bg-gren-900'>
                                    <img className='w-8 h-8  md:w-14 md:h-14 object-contain' src="/images/logos/row.svg" alt="" />
                                </div> */}

                            </div>

                        </div>
                    </RectContainer>

                </div>

            </div>
        </motion.div>

    )
}


export const ItemRoulet = ({ listOfItems, showPath, onItemClick, selectedItem }) => {
    /* STATES */

    // track container size
    const containerRef = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    // itemsPsitions
    const [itemsPsitions, setItemsPsitions] = useState([])

    // items Coordinates
    const [itemsCoordinates, setItemsCoordinates] = useState([])

    // selected
    const [onFocuseItem, setOnFocuseItem] = useState(0)

    /* HOOOKS */

    // track container size hook
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

    // set item position whenever listOfItems changes
    useEffect(() => {
        const newItemsPositions = getItemPositions(listOfItems)
        // console.log("print positions : ", newItemsPositions)
        setItemsPsitions(newItemsPositions)
    }, [listOfItems])


    useEffect(() => {
        const angles = [
            0,
            90,
            180,
            270,
            360,
        ]
        const newItemsCoordinates = getCoordinates(angles, parentSize.width / 2, parentSize.height / 2, parentSize.width)

        function getCoordinates(angles, centerX, centerY, width) {
            let list = []
            for (let i = 0; i < angles.length; i++) {
                let newposi = getPositionOnCircle(width / 2, centerX, centerY, angles[i])
                list.push({
                    posi: newposi
                })
            }
            return list
        }

        function getAngles(items) {
            const pas = 360 / items.length
            let angles = []
            for (let i = 0; i < items.length; i++) {
                angles.push(360 / (i * pas))
            }
            return angles.reverse()
        }
        setItemsCoordinates(newItemsCoordinates)
    }, [itemsPsitions])


    useEffect(() => {
        setOnFocuseItem(selectedItem)
    }, [selectedItem != onFocuseItem])
    /* HELPEEERS */

    const getItemPositions = (listOfItems) => {
        let step = 100 / listOfItems.length
        return listOfItems.map((elem, index) => {
            return `${100 - (step * index)}%`
        })
    }


    return (
        <motion.div ref={containerRef} className='relative bg-red-700 rotate-90 h-full w-full '>

            {showPath && <svg className='opacity-60' fill="none" viewBox={`0 0  ${parentSize.width}  ${parentSize.width}`} xmlns="http://www.w3.org/2000/svg">
                <path
                    d={`M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0`}
                    stroke-dasharray="17"
                    stroke="#9FE870"
                />
            </svg>}


            {itemsCoordinates.length > 0 && listOfItems.map((item, index) => (

                <motion.div
                    key={index}
                    className={`h-16 w-16 md:h-20 md:w-20 lg:h-28  lg:w-28  transition-all duration-700 rounded-full shadow-gray-800/10   ${onFocuseItem == index ? "shadow-xl" : "shadow-lg"} `}
                    onClick={() => onItemClick(index)}
                    style={{
                        position: 'absolute',
                        top: itemsCoordinates[index].posi.y,
                        left: itemsCoordinates[index].posi.x,
                        // offsetPath: `path("M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0")`,
                        // pathOffset: "0%",
                        // offsetDistance : `${itemsPsitions[index]}`
                    }}

                    variants={{
                        initial: {
                            // offsetDistance: itemsPsitions[index],
                            // opacity: 0.8,
                            // scale: 0.8,
                            // transition : {
                            //     duration: 1,
                            //     ease : 'linear',
                            //     type : "spring"

                            //     // delay : 0.3
                            //         }
                            // scale: onFocuseItem == index ? 1.3 : 0.8,
                        },
                        current: {
                            // offsetDistance: itemsPsitions[index],
                            scale: onFocuseItem == index ? 1.2 : 0.8,
                            opacity: onFocuseItem == index ? 1 : 0.8,
                            transition: {
                                duration: 0.2,
                                delay: 0,
                                ease: 'linear',
                                // type : "spring"
                                // delay : 0.3
                            }
                        }
                    }}
                    initial="initial"
                    animate="current"
                // transition={{
                //     duration: 0.2,
                //     delay : 0.3

                // }}
                >
                    <RectContainer className="h-full w-full rounded-full bg-transparent ring-none ring-gray-400 flex justify-center items-center overflow-hidden transition-all duration-700 hover:scale-105 cursor-pointer">
                        {/* <h1 className=' text-center font-black text-2xl text-gray-800'>{item.name}</h1> */}
                        <img className='w-full h-full object-cover' src={item.image} alt="" />
                    </RectContainer>
                </motion.div>

            ))

            }


        </motion.div>
    )
}


const BgImage = ({ image }) => (
    <AnimatePresence>
        <motion.div
            className=' absolute bottom-0 left-0 w-full h-full rounded-full  overflow-hidden bg-white'
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            exit={{ opacity: 0 }}
        >
            <div className='relative h-full w-full'>
                <Image className='w-full h-full object-cover' layout='fill' src={image} alt="" />
                <div className='absolute top-0 left-0 h-full w-full bg-[#37A345]  backdrop-blur- opacity-50'></div>
            </div>


        </motion.div>
        {/* <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/20 via-black/0 to-black/0 bg-[#37A345]/0  backdrop-blur- opacity-50'></div> */}
    </AnimatePresence>
)





export const Circler = ({ listOfItems, showPath, onItemClick, selectedItem, className }) => {
    /* STATES */

    // track container size
    const containerRef = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

    // const [rotationValue, setRotationValue] = useState(0)

    // itemsPsitions
    const [itemsPsitions, setItemsPsitions] = useState([])

    // itemsTobePositioned
    const [itemsTobePositioned, setItemsTobePositioned] = useState([])


    // selected
    const [onFocuseItem, setOnFocuseItem] = useState(0)

    /* HOOOKS */

    // track container size hook
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

    // set item position whenever listOfItems changes
    useEffect(() => {

        const newItemsPositions = getItemPositions(listOfItems)
        // console.log("print positions : ", newItemsPositions)
        setItemsPsitions(newItemsPositions)
        // console.log(`
        //     width : ${parentSize.width}
        //     height : ${parentSize.height}
        // `)
    }, [listOfItems, parentSize])


    useEffect(() => {

        const correction = {
            x: ((parentSize.width / 2) * 0.2),
            y: ((parentSize.height / 2) * 0.2),
        }
        const generated = getPositions(listOfItems, itemsPsitions, (parentSize.width / 2) - correction.x, (parentSize.height / 2) - correction.y, parentSize.width)
        // console.log("generated : ", generated)
        setItemsTobePositioned(generated)

    }, [itemsPsitions])


    useEffect(() => {
        setOnFocuseItem(selectedItem)
    }, [selectedItem != onFocuseItem])

    // useEffect(() => {
    //     setRotationValue(rotation)
    // },[rotation])


    /* HELPEEERS */

    const getItemPositions = (listOfItems) => {
        let step = 360 / listOfItems.length
        return listOfItems.map((elem, index) => {
            return ((index * step) - 90) % 360
        })
    }


    function getPositions(listOfItems, angles, centerX, centerY, width) {
        let list = []
        for (let i = 0; i < angles.length && i < listOfItems.length; i++) {
            let newposi = getPositionOnCircle(width / 2, centerX, centerY, angles[i])
            list.push({
                posi: newposi,
                item: listOfItems[i]
            })
        }
        return list
    }


    return (

        <motion.div ref={containerRef} className={className}>

            {showPath && <svg className='opacity-60' fill="none" viewBox={`0 0  ${parentSize.width}  ${parentSize.width}`} xmlns="http://www.w3.org/2000/svg">
                <path
                    d={`M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0`}
                    stroke-dasharray="17"
                    stroke="#9FE870"
                />
            </svg>}


            {itemsTobePositioned.length > 0 && itemsTobePositioned.map((item, index) => (

                <motion.div
                    key={index}
                    className={`h-[20%] w-[20%] transition-all duration-700 rounded-full shadow-gray-800/10 bg-orange-400/0   ${onFocuseItem == index ? "shadow-xl" : "shadow-lg"} `}
                    onClick={() => onItemClick(index)}
                    style={{
                        position: "absolute",
                        top: item.posi.y,
                        left: item.posi.x,
                    }}

                    variants={{
                        initial: {
                        },
                        current: {
                            scale: onFocuseItem == index ? 1.3 : 0.8,
                            opacity: onFocuseItem == index ? 1 : 0.8,
                            transition: {
                                duration: 0.2,
                                delay: 0,
                                ease: 'linear',
                            }
                        }
                    }}
                    initial="initial"
                    animate="current"
                >
                    <RectContainer className="h-full w-full rounded-full bg-transparent ring-none ring-gray-400 flex justify-center items-center overflow-hidden transition-all duration-700 hover:scale-105 cursor-pointer">
                        {/* <h1 className=' text-center font-black text-2xl text-gray-800'>{item.name}</h1> */}
                        <img className='w-full h-full object-cover' src={item.item.image} alt="" />
                    </RectContainer>
                </motion.div>

            ))

            }

        </motion.div>

    )




}












function getPositionOnCircle(radius, centerX, centerY, angleInDegrees) {

    // Convert the angle from degrees to radians
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180);

    // Calculate the (x, y) position on the circle
    const x = centerX + radius * Math.cos(angleInRadians);
    const y = centerY + radius * Math.sin(angleInRadians);

    return { x, y };
}

export default BubbleSelector