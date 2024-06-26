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
		description: 'Une plante tropicale originaire d\'Amérique. Le Monstera préfère rester à l\'ombre. Au printemps et en été, veillez à ce que le sol reste légèrement humide, sans que les racines de la plante ne se trouvent dans une couche d\'eau. En automne et en hiver, attendez que le sol soit sec avant d\'arroser à nouveau la plante.',
		light: 2,
		water: 3,
		cover: monstera,
		price: 20
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		description: 'Une plante tropicale originaire d\'Afrique de l\'Ouest. C\'est l\'un des plus grands ficus cultivés en intérieur. Pour que votre Ficus Lyrata conserve son éclat, nettoyez souvent ses feuilles avec un chiffon humide. Placez de préférence la plante le plus près possible d\'une fenêtre.',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 25
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		description: 'Une plante de la famille des Arums et originaire d\'Asie du Sud-Est. Le Pothos argenté est une plante suspendue, idéale pour les espaces intérieurs et extérieurs. Ses feuilles en forme de cœur aux reflets argentés s\'agencent à tous les décors. Idéalement, il doit être placé dans une pièce lumineuse sans être en plein soleil. Il peut se développer dans des espaces plus sombres, mais sa croissance sera beaucoup plus lente.',
		light: 1,
		water: 2,
		cover: pothos,
		price: 22
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		description: 'Le calathea est originaire du Brésil et préfère un sol humide et bien drainé. C\'est une plante qui demande peu d\'entretien ; il a principalement besoin d\'une humidité suffisante. En été, arrosez-le copieusement 2 fois par semaine avec une eau non calcaire ; le substrat ne doit pas sécher. En hiver, un arrosage hebdomadaire suffit si la température n\'est pas trop élevée.',
		light: 2,
		water: 3,
		cover: calathea,
		price: 24
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		description: ' L\'olivier  est cultivé en région méditerranéenne en majorité. Il survit aussi dans les climats plus froids (peut supporter jusqu\'à -10°C). Vous pouvez le placer sur un balcon ou dans un jardin. De nature rustique, il aime être exposé en plein soleil et supporte bien la sécheresse. Veillez à le placer à l\'abri du vent.',
		light: 3,
		water: 1,
		cover: olivier,
		price: 30
	},

	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		description: 'Les cactus sont une famille de plantes à fleurs d\'origine américaine. Le cactus est une plante d\'intérieur très facile à entretenir. Elle ne demande pratiquement pas d\'eau. Veillez simplement à ce que cette plante d\'intérieur soit placée dans un endroit ensoleillé. ',
		light: 2,
		water: 1,
		cover: cactus,
		price: 15
	},
	{
		name: 'basilic',
		category: 'extérieur',
		id: '7ie',
		description: 'Le basilic est une plante aromatique et condimentaire. Rustique et très facile à cultiver, le basilic se mange frais, croît rapidement, et vous fournit des feuilles au goût subtil et très parfumé oute l\'année.',
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
		description: 'Une succulente (ou plante grasse) est une plante charnue adaptée pour survivre dans des milieux arides. Elle est très facile à cultiver et idéale, pour les personnes qui n\'ont pas la main verte. En effet, elle demande peu d\'arrosage et de soins.',
		light: 2,
		water: 1,
		cover: succulent,
		price: 12
	},

	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		description: 'La menthe est une plante aromatique au feuillage très parfumé donnant une impression de fraicheur. Elle demande peu d\'entretien et préférera une exposition mi-ombragée (elle nécessitera davantage d\'eau en étant au soleil).',
		isSpecialOffer: true,
		light: 2,
		water: 2,
		cover: mint,
		price: 10,
		percentage: 20
	}
]