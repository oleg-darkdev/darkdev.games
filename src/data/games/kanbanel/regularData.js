let game = {};

game.promo = {
	banner:
		'',
	landingBanner: '',
	logo: '',
	promo: '',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	brandColor: '#702282',
	id: 'kanbanel',
	serial: '1',
	price: '',
};

game.moreInfo = {
	players: '2-8',
	age: '16+',
	time: '120-180',	
	lorImg:
		'',

	photos: [
        {
            altText: '', 
            img: ''
        },
        {
            altText: '', 
            img: ''
        },
    ],	
};
game.roles = {
	banner: '', // new
	characters: [
		{
			bgColor: '#e39900',
			description: '',
			img: ''
		},
		{
			bgColor: '#e39900',
			description: '',
			img: ''
		}
	]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'kanbanel'
	},
	goal: ''
};

export default game;



