
export default function Boost() {
  return (

    <div id="Boost" class=" relative py-6 sm:py-8 lg:py-20 ">
      <div className="w-full h-fit absolute top-0 left-0 flex justify-center items-center -translate-y-1/2">
        <div className="p-2 px-6 md:p-4 md:px-8 rounded-full bg-[#37A345] font-popDefault text-xl md:text-xl  text-white font-normal">Booster votre production</div>
      </div>
      <div class=" grid grid-cols-4 gap-2  max-w-screen-2xl py-8 px-4  mx-auto">


        <div className=" col-span-2 md:col-span-1 group flex flex-col justify-start items-center max-w-xs m-2 bg-slate-900/0">
          <div className="w-12 h-12 md:w-24 md:h-24 mb-4 transition-all duration-500 ease-in-out group-hover:scale-105 ">
            <img src="images/boost/boost-leaf.svg" alt="" />
          </div>
          <div className="px-2">
            <p className="  text-center text-xs md:text-sm font-popDefault font-normal">Raisonner <br/>la fertilisation</p>
          </div>

        </div>

        <div className=" col-span-2 md:col-span-1 group flex flex-col justify-start items-center max-w-xs m-2 bg-slate-900/0">
          <div className="w-12 h-12 md:w-24 md:h-24 mb-4 transition-all duration-500 ease-in-out group-hover:scale-105 ">
          <img src="images/boost/boost-dhs.svg" alt="" />
          </div>
          <div className="px-2">
            <p className= " text-center text-xs md:text-sm font-popDefault font-normal">Minimiser <br/>les coûts opérationnels</p>
          </div>

        </div>

        <div className=" col-span-2 md:col-span-1 group flex flex-col justify-start items-center max-w-xs m-2 bg-slate-900/0">
          <div className="w-12 h-12 md:w-24 md:h-24 mb-4 transition-all duration-500 ease-in-out group-hover:scale-105 ">
          <img src="images/boost/boost-g-leaf.svg" alt="" />
          </div>
          <div className="px-2">
            <p className="  text-center text-xs md:text-sm font-popDefault font-normal">Maximiser <br/>la productivité</p>
          </div>

        </div>


        <div className=" col-span-2 md:col-span-1 group flex flex-col justify-start items-center max-w-xs m-2 bg-slate-900/0">
          <div className="w-12 h-12 md:w-24 md:h-24 mb-4 transition-all duration-500 ease-in-out group-hover:scale-105">
          <img src="images/boost/boost-ble.svg" alt="" />
          </div>
          <div className="px-2">
            <p className=" text-center text-xs md:text-sm font-popDefault font-normal">Préserver <br/>l'environnement</p>
          </div>

        </div>



      </div>
    </div>
  );
}


