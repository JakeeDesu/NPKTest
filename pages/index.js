import React from "react"

import Hero from "../components/hero"
// import Head from "next/head"
import Heading from "../components/heading"
import Divider  from "../components/diverder"
import About from "../components/About"
import NPK from "../components/NPK"
import Footer from "../components/nindex_Footer"
import Description from "../components/Description"
import PK from "../components/PK"
import Boost from "../components/Boost"


const paramsReducer = (params, data) => {
  let nParams = {
    ...params,
  };
  nParams[data.key] = data.value;
  return nParams;
};

let defaultParams = {
    submit: false,
    submitMessage: "",
    name: "",
    phone: "",
    email: "",
    message: "",

};

export default function Home() 
{
 

  const [params, dispatchParams] = React.useReducer(
    paramsReducer,
    defaultParams
  );


  return (
   <div>
     <Hero/>
     {/* <Heading/> */}
     <About/>
     <NPK/>
     <Boost/>
     {/* <Description/> */}
   {/*   <PK/> */}
     <Footer  params={params} dispatchParams={dispatchParams}  />
    </div>
  )
}
