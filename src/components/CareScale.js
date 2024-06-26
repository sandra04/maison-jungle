import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


// Prend en compte les infos "scaleValue" et "careType" du composant cliqué (fonction exécutée au clic sur le composant)
/*  function careMessage(careScale, careType){

	const scale = careScale === 1 ? (
		"peu"
	) : (
		careScale === 2 ? (
			"modérément"
		) :
		(
			"beaucoup"
		)
	)

	const type = careType === 'light' ? (
		"de lumière"
	) : (
		"d'arrosage"
	)
	
	alert(`Cette plante requiert ${scale} ${type}`)
}*/


// Récupère les valeurs "scaleValue" et "careType" lors de l'appel du composant dans "PlantItem" et indique quoi afficher en fonction des valeurs récupérées
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
        ) : (
            <img src={Water} alt='water-icon' />
        )

	return (
		<div>
			{/*<div onClick={() => careMessage(scaleValue, careType)}>*/}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale