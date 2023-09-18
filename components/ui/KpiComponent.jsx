import React, { useRef, useEffect, useState } from 'react';

import { motion, useMotionValue, useTransform, transform, Variants, useAnimation } from 'framer-motion'
import RectContainer from './rectContainer'



const KpiComponent = ({children, className, icon, lineColor, tw_iconColor }) => {
    const containerRef = useRef(null);
    const [parentSize, setParentSize] = useState({ width: 0, height: 0 });


  
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


    return (
        <div className={className}>
            <div className='relative flex justify-center items-center h-full w-full cursor-pointer'>
                <motion.div ref={containerRef}   className="w-[88%] h-[88%]">
                        <motion.div className='relative h-full w-full'>
                            <svg  fill="none" viewBox={`0 0  ${parentSize.width }  ${parentSize.width }`} xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d={`M 0, ${parentSize.width / 2} a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${parentSize.width},0 a ${parentSize.width / 2},${parentSize.width / 2} 0 1,0 ${-(parentSize.width)},0`}
                                    stroke-dasharray="14"
                                    stroke={lineColor}// "#9FE870"
                                    strokeWidth={2}
                                    />
                            </svg>
                        </motion.div>
                </motion.div>
                <RectContainer className="absolute w-full h-full   top-0 left-0 flex justify-center items-center ">
                    {children}
                </RectContainer>
                <RectContainer className="absolute w-[28%] h-[28%]  top-1/2 -translate-y-1/2 translate-x-[40%] right-0 ">
                    <div className={`w-full h-full flex justify-center items-center ${tw_iconColor} p-[28%] rounded-full`}>{icon}</div>
                </RectContainer>
            </div>
        </div>
    )
}



export default KpiComponent