import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		description: 'Une plante tropicale originaire d\'Amérique. Le Monstera préfère un endroit à l\'ombre. Au printemps et en été, veillez à ce que le sol reste légèrement humide, sans que les racines de la plante ne se trouvent dans une couche d\'eau. En automne et en hiver, attendez que le sol soit sec avant d\'arroser à nouveau la plante.',
		light: 2,
		water: 3,
		cover: monstera,
		price: 20
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		description: 'Une plante tropicale originaire d\'Afrique de l\'Ouest. C\'est l\'un des plus grands ficus cultivés en intérieur. Pour que votre Ficus Lyrata conserve son éclat, nettoyez régulièrement ses feuilles avec un chiffon humide. Placez de préférence la plante le plus près possible d\'une fenêtre.',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 25
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		description: 'Une plante de la famille des Arums et originaire d\'Asie du Sud-Est. Le Pothos argenté est une plante suspendue, idéale pour les espaces intérieurs et extérieurs. Ses feuilles en forme de cœur aux reflets argentés s\'agencent à tous les décors. Idéalement le Pothos argenté doit être placé dans une pièce lumineuse sans être en plein soleil.Il peut être placé dans des espaces plus sombres, mais sa croissance sera beaucoup plus lente.',
		light: 1,
		water: 2,
		cover: pothos,
		price: 22
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		description: 'Une plante tropicale originaire d\'Amérique',
		light: 2,
		water: 3,
		cover: calathea,
		price: 24
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		description: 'Une plante tropicale originaire d\'Amérique',
		light: 3,
		water: 1,
		cover: olivier,
		price: 30
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		description: 'Une plante tropicale originaire d\'Amérique',
		light: 2,
		water: 1,
		cover: cactus,
		price: 15
	},
	{
		name: 'basilic',
		category: 'extérieur',
		id: '7ie',
		description: 'Une plante tropicale originaire d\'Amérique',
		isSpecialOffer: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 10,
		percentage: 10
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		description: 'Une plante tropicale originaire d\'Amérique',
		light: 2,
		water: 1,
		cover: succulent,
		price: 12
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		description: 'Une plante aromatique parfaite pour rafraichir certains plats ',
		isSpecialOffer: true,
		light: 2,
		water: 2,
		cover: mint,
		price: 10,
		percentage: 20
	}
]