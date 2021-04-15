var zoom = 15;
var pitch = 60;
var bearing = 0;

var config = {

    style: 'mapbox://styles/lievan/ckni7gr4c0bhm17qnwrap838u',
    accessToken: 'pk.eyJ1IjoibGlldmFuIiwiYSI6ImNrbmRydDdtbzJhYjkyd21sam45bmhybWoifQ.MXaypeOX-7O6OUpQuYp8Ew',
    showMarkers: true,
    markerColor: '#000000',
    theme: 'light',
    use3dTerrain: false,
    title: '<span class="reg--under">Geography of Literature Humanities</span>',
    subtitle: 'Lit Hum Final Project Spring 2021',
    byline: 'Evan Li',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'iliad',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Iliad</span> by <span class="underline--magical">Homer',
            date: '<span class="date">762 B.C.</span>',
            image: 'images/homer.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [26.1310, 38.3682],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: "sappho",
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">If Not, Winter</span> by Sappho',
            date: '<span class="date">570 B.C.</span>',
            image: 'images/sappho.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [26.2777, 39.2645],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'citizen',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Citizen: An American Lyric</span> by Rankine',
            date: '<span class="date">2014</span>',
            image: 'images/rankine.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-117.7119, 34.0978],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'odyssey',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Odyssey</span> by Homer',
            date: '<span class="date">725 B.C.</span>',
            image: 'images/odyssey.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [26.1310, 38.3682],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bible',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Book of Genesis</span>, <span class="underline--magical">Book of Job</span>, <span class="underline--magical">Song of Solomon</span>',
            image: 'images/genesis.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.8516, 31.0461],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'oresteia',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Oresteia</span> by Aeschylus', 
            date: '<span class="date">458 B.C.</span>',
            image: 'images/oresteia.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [23.7275, 37.9838],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'antigone',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Antigone</span> by Sophocles', 
            date: '<span class="date">442 B.C.</span>',
            image: 'images/antigone.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [23.7275, 37.9838],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'parks',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Father Comes Home From the Wars</span> by Parks', 
            date: '<span class="date">2015</span>',
            image: 'images/parks.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-87.6298, 41.8781],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'symposium',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Symposium</span> by Plato', 
            date: '<span class="date">370 B.C.</span>',
            image: 'images/symposium.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [10.7855, 45.0996],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aeneid',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Aeneid</span> by Virgil',
            date: '<span class="date">19 B.C.</span>',
            image: 'images/aeneid.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [13.9289,42.0482],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ovid',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Metaphorphoses</span> by Ovid', 
            date: '<span class="date">8 C.E.</span>',
            image: 'images/meta.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [31.0461, 31.0461],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'confessions',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Confessions</span> by Augustine',
            date: '<span class="date">400 C.E.</span>',
            image: 'images/augustine.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [ 12.4964, 41.9028],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'inferno',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Inferno</span> by Dante',
            date: '<span class="date">1320</span>',
            image: 'images/dante.jpeg',
            description: '"THROUGH me you pass into the city of woe: Through me you pass into eternal pain: Through me among the people lost for aye. Justice the founder of my fabric movd: To rear me was the task of power divine, Supremest wisdom, and primeval love. Before me things create were none, save things Eternal, and eternal I endure. "All hope abandon ye who enter here."',
            location: {
                center: [11.2558, 43.7696],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'montaigne',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Essays</span> by Montaigne',
            date: '<span class="date">1580</span>',
            image: 'images/montaigne.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-0.5792, 44.8378],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'otherllo',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Othello</span> by Shakespeare',
            date:'<span class="date">1603</span>',
            image: 'images/othello.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-1.7083,52.1917],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'boccaccio',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">The Decameron</span> by Boccaccio',
            date: '<span class="date">1353</span>',
            image: 'images/deca.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [11.0415,43.5477],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cervantes',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Don Quixote</span> by Cervantes', 
            date: '<span class="date">1615</span>',
            image: 'images/donquixote.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-3.0977,39.2796],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'austen',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Pride and Prejudice</span> by Austen', 
            date: '<span class="date">1813</span>',
            image: 'images/prideandprejudice.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [0.5217, 51.2787],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'crime',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Crime and Punishment</span> by Dostoevsky',
            date: '<span class="date">1866</span>',
            image: 'images/crime_and_punishment.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [30.3609,59.9311],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'woolf',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">To the Lighthouse</span> by Woolf',
            date: '<span class="date">1927</span>',
            image: 'images/lighthouse.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-1.3101,51.0598],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'morrison',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Song of Solomon</span> by Toni Morrison',
            date: '<span class="date">1977</span>',
            image: 'images/morrison.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.8648,40.8448],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'columbia',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Columbia</span>',
            image: 'images/columbia.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.9626, 40.8075],
                zoom: zoom,
                pitch: pitch,
                bearing: bearing
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
