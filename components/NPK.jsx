
export default function NPK() {
  return (

    <div id="Apropos" class=" py-6 md:py-10 md::py-20 bg-[#84C650]">
      <div class="flex flex-col justify-center items-center  max-w-screen-2xl  mx-auto">

        <div className="h-fit w-full flex flex-col-reverse md:flex-row bg-yellow-600/0 px-4 md:px-10 mb-4">
          <div className="flex-1 flex flex-col items-start justify-center md:items-center bg-slate-400/0 mb-8">

            <div className=" px-4 md:px-0 max-w-md">

              <div className="h-fit flex  flex-row justify-start items-center mb-4">
                <div className="p-3 px-5 text-center justify-center items-center rounded-lg bg-white">
                  <h2 className=" inset-0 text-2xl font-popDefault text-[#20882D]  ">N</h2>
                </div>
                <h1 className=" text-xl md:text-3xl font-bold  font-popDefault text-[#20882D] ml-4">N-Index</h1>
              </div>

              <div className="text-sm md:text-xl text-white font-popDefault   ">
                <p>S'appuie sur un modèle hybride se basent sur l'imagerie satellite pour recommander la dose de N</p>

              </div>

            </div>

          </div>

          <div className="flex-1  bg-slate-100/0 mb-4 md:mb-0">
            <div className=" relative w-full overflow-hidden rounded-3xl">
              <img className="w-full object-contain" src="images/npk/n-index.png" alt="" />
            </div>
          </div>

        </div>



        <div className="h-fit w-full flex flex-col-reverse md:flex-row-reverse bg-yellow-600/0 px-4 md:px-10 mb-4">
          <div className="flex-1 flex flex-col items-start justify-center md:items-center bg-slate-400/0 mb-8">

            <div className=" px-4 md:px-0 max-w-md">

              <div className="h-fit flex  flex-row justify-start items-center mb-4">
                <div className="p-3 px-5 text-center justify-center items-center rounded-lg bg-white">
                  <h2 className=" inset-0 text-2xl font-popDefault text-[#20882D]  ">PK</h2>
                </div>
                <h1 className=" text-xl md:text-3xl font-bold  font-popDefault text-[#20882D] ml-4">PK-Index</h1>
              </div>

              <div className=" text-sm md:text-xl text-white font-popDefault   ">
                <p>S'appuie sur un modèle de bilan agronomique se basant sur l'analyse de sol pour P205 et K20</p>

              </div>

            </div>

          </div>

          <div className="flex-1  bg-slate-100/0 mb-4 md:mb-0">
            <div className=" relative w-full overflow-hidden rounded-3xl">
            <img className="w-full object-contain" src="images/npk/n-index.png" alt="" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
