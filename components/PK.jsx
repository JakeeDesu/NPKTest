/* This example requires Tailwind CSS v2.0+ */
const metrics = [
	{ id: 1, stat: '+24%	', emphasis: 'Amélioration', rest: 'du Rendement grain' },
	{ id: 2, stat: '-21%', emphasis: "Economie ", rest:"d'azote" },
	// { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
	// { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]

  export default function Example() {
	return (
	  <div className="relative bg-gray-800">
		<div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
		  <div className="h-full w-full xl:grid xl:grid-cols-2">
			<div className="h-full xl:relative xl:col-start-2">
			  <img
				className="h-full w-full object-cover opacity-80 xl:absolute xl:inset-0"
				src="https://i.imgur.com/RJW4677.png"
				alt="NPK"
			  />
			  <div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-800  xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
			  />
			</div>
		  </div>
		</div>
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
		  <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
			<h2 className="text-sm font-semibold text-green-300 tracking-wide uppercase">Fertilisation N, P & K</h2>
			<p className="mt-3 text-3xl font-extrabold text-white">
			NPK-IndeX, pour une fertilisation raisonnée du Blé
			</p>
			<p className="mt-5 text-lg text-gray-300">
				NPK-IndeX est le résultat de 4 ans de recherches appliquées. Co développé par Les Domaines Agricoles
				 et l’Université Mohammed 6 Polytechnique (UM6P), cet indice permet d’estimer, à partir des images
			  	satellites, la quantité d’azote optimale à appliquer pour le blé à ses différents stades agronomiques.
			<br/>
				N-Index transforme des images satellites en recommandation d'Azote en utilisant un modèle hybride combinant l’expertise d’AgriEdge en intelligence artificielle et l'expertise agronomique des Domaines Agricoles.
			<br/>
				Testé par les Domaines Agricoles, cet indice permet de réaliser une économie d’Azote qui peut atteindre -21% tout en améliorant le rendement de grain de +24%.
			</p>
			<div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
			  {metrics.map((item) => (
				<p key={item.id}>
				  <span className="block text-2xl font-bold text-white">{item.stat}</span>
				  <span className="mt-1 block text-base text-gray-300">
					<span className="font-medium text-white">{item.emphasis}</span> {item.rest}
				  </span>
				</p>
			  ))}
			</div>
		  </div>
		</div>
	  </div>
	)
  }
