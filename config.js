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
    title: '<span class="reg--under">Geography of Literature Humanities</span> <span class="byline"> Spring 2021 Final Project by Evan Li </span>' ,
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'iliad',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Iliad</span> by Homer',
            date: '<span class="date">762 B.C.</span>',
            image: 'images/homer.png',
            description: "\"Sing, goddess, the anger of Peleus' son Achilleus and its devastation, which puts pains thousandfold upon the Achaians, hurled in their multitudes to the house of Hades strong souls of heroes, but gave their bodies to be delicate feasting of dogs, of all birds, and the will of Zeus was accomplished since that time when first there stood in division of conflict Atreus' son the lord of men and brilliant Achilleus.\"",
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
            id: 'odyssey',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Odyssey</span> by Homer',
            date: '<span class="date">725 B.C.</span>',
            image: 'images/odyssey.jpg',
            description: '\"This seems to my own mind to be the best of occasions. But now your wish was inclined to ask me about my mournful sufferings, so that I must mourn and grieve even more. What then shall I recite to you first of all, what leave till later? Many are the sorrows the gods of the sky have given me. Now first I will tell you my name, so that all of you may know me, and I hereafter escaping the day without pity, be your friend and guest, though the home I live is far away from you. I am Odysseus son of Laertes, known before all men for the study of crafty designs, and my fane goes up to the heavens.\"',
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
            date: '<span class="date">1000 B.C. - 400 B.C</span>',
            image: 'images/genesis.jpeg',
            description: '"Then the Lord God said, “See, the man has become like one of us, knowing good and evil; and now, he might reach out his hand and take also from the tree of life, and eat, and live forever” therefore the Lord God sent him forth from the garden of Eden, to till the ground from which he was taken. He drove out the man; and at the east of the garden of Eden he placed the cherubim, and a sword flaming and turning to guard the way to the tree of life."',
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
            id: "sappho",
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">If Not, Winter</span> by Sappho',
            date: '<span class="date">570 B.C.</span>',
            image: 'images/sappho.png',
            description: '"He seems to me equal to the gods that man <br> whoever he is who opposite you <br> sits and listens close <br>     to your sweet speaking <br> and lovely laughing—oh it <br> puts the heart in my chest on wings <br> for when I look at you, even a moment, no speaking <br>  is left in me <br> no: tongue breaks and thin <br> fire is racing under skin <br> and in eyes no sight and drumming <br> fills ears <br> and cold sweat holds me and shaking <br> grips me all, greener than grass <br> I am and dead—or almost <br> I seem to me. <br> But all is to be dared, because even a person of poverty\n"',
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
            id: 'oresteia',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Oresteia</span> by Aeschylus', 
            date: '<span class="date">458 B.C.</span>',
            image: 'images/oresteia.jpeg',
            description: '"Refuse the life of anarchy <br> refuse the life devoted to <br> one master. <br> The in-between has the power <br> by a god\'s grant always, thought <br> his ordinances vary. <br> I will speak in defense <br> of reason: for the very child <br> of vanity is Violence; <br> but out of health <br> in the heart is born the beloved <br> and the longer-for, prosperity."',
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
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Antigone</span> by Sophocles', 
            date: '<span class="date">442 B.C.</span>',
            image: 'images/antigone.jpeg',
            description: '"Creon will give the one <br> of our two brothers honor in the tomb; the other none. Eteocles, with just observance treated, <br> as law provides he has hidden under earth <br> to have full honor with the dead below. <br> But Polyneices\' corpse who died in pain, <br> they say he has prclaimed to the whole town <br> that none may bury him and none bewail, <br> but leave him, unwept, untombed, a rich <br> sweet sight <br> for the hungry birds\' beholding and devouring."',
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
            id: 'symposium',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Symposium</span> by Plato', 
            date: '<span class="date">370 B.C.</span>',
            image: 'images/symposium.jpeg',
            description: '\"The sexes were originally three, men, women, and the union of the two; and they were made round—having four hands, four feet, two faces on a round neck, and the rest to correspond. Terrible was their strength and swiftness; and they were essaying to scale heaven and attack the gods.\"',
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
            description: '\"And now the heavy hand of Mars gave grief and death to both alike; the armies were, both conquerors and conquered, each in turn killing and being killed. And neither side knew what was flight. The gods inside Jove’s palace take pity on both armies’ pointless anger; they sorrow at the trials of mortal men.\"',
            location: {
                center: [12.4964, 41.9028],
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
            description: '\"Now I have finished my work, which nothing can ever destroy – <br> not Jupiter’s wrath, nor fire or sword, nor devouring time. <br> That day which has power over nothing except this body of mine <br> may come when it will and end the uncertain span of my life. <br> But the finer part of myself shall sweep me into eternity,<br> higher than all the stars. My name shall be never forgotten.\"',
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
            id: 'luke',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Gospel of Luke </span>', 
            date: '<span class="date">85 C.E',
            image: 'images/luke.jpeg',
            description: '“And I tell you, everyone who acknowledges me before others, the Son of Man also will acknowledge before the angels of God; but whoever denies me before others will be denied before the angels of God. And everyone who speaks a word against the Son of Man will be forgiven; but whoever blasphemes against the Holy Spirit will not be forgiven. When they bring you before the synagogues, the rulers, and the authorities, do not worry about how c you are to defend yourselves or what you are to say; for the Holy Spirit will teach you at that very hour what you ought to say."',
            location: {
                center: [21.9522, 38.1159],
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
            id: 'john',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Gospel of John</span>', 
            date: '<span class="date">100 C.E.</span>',
            image: 'images/john.jpeg',
            description: '"In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things came into being through him, and without him not one thing came into being. What has come into being in him was life, a and the life was the light of all people. The light shines in the darkness, and the darkness did not overcome it."',
            location: {
                center: [27.3678, 37.9490],
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
            description: '\"You are mighty, Master, and to be praised with a powerful voice: great is your goodness, and of your wisdom there can be no reckoning. Yet to praise you is the desire of a human being, who is some part of what you created; a human hauling his deathliness in a circle, hauling in a circle the evidence of his sin, and the evidence that you stand against the arrogant.\"',
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
            id: 'boccaccio',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">The Decameron</span> by Boccaccio',
            date: '<span class="date">1353</span>',
            image: 'images/deca.jpeg',
            description: '"I say, then, that the years [of the era] of the fruitful Incarnation of the Son of God had attained to the number of one thousand three hundred and forty-eight, when into the notable city of Florence, fair over every other of Italy, there came the death-dealing pestilence, which, through the operation of the heavenly bodies or of our own iniquitous dealings, being sent down upon mankind for our correction by the just wrath of God, had some years before appeared in the parts of the East and after having bereft these latter of an innumerable number of inhabitants, extending without cease from one place to another, had now unhappily spread towards the West.\"',
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
            id: 'montaigne',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Essays</span> by Montaigne',
            date: '<span class="date">1580</span>',
            image: 'images/montaigne.jpeg',
            description: '\"Others shape the man; I portray him, and offer to the view one in particular, who is ill-shaped enough, and whom, could I refashion him, I should certainly make very different from what he is.\"',
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
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Othello</span> by Shakespeare',
            date:'<span class="date">1603</span>',
            image: 'images/othello.jpeg',
            description: '\"O Spartan dog, <br> More fell than anguish, hunger, or the sea <br>Look on the tragic loading of this bed:<br> This is thy work. The object poisons sight <br>Let it be hid. <br>┌They close the bed-curtains┐<br> Gratiano, keep the house  <br>And seize upon the fortunes <br>of the Moor, For they succeed on you; (to Cassio) to you, lord governor, Remains the censure of this hellish villain—<br> The time, the place, the torture, O enforce it;<br> Myself will straight aboard, and to the state <br>This heavy act with heavy heart relate.\"',
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
            id: 'cervantes',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Don Quixote</span> by Cervantes', 
            date: '<span class="date">1615</span>',
            image: 'images/donquixote.png',
            description: '\"Note well, my faithful and loyal squire, the darkness of this night, its strange silence, the indistinct and confused sound of these trees, the fearful clamor of the water we came seeking, which seems to be falling and crashing from the high mountains of the moon, and the unceasing noise of pounding that wounds and pains our ears; all these things, taken together and separately, are enough to instill fear, terror, and dread in the bosom of Mars himself, not to mention one who is unaccustomed to such occurrences and adventures. But these things I have described for you are inspiration and encouragement to my valor, which makes my heart almost burst in my bosom with the desire to embark on this adventure, no matter how difficult it may prove to be.\"',
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
            description: '\"IT IS A TRUTH universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.<br><br> However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.\"',
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
            description: '\"In short, I deduce that all, not only great men, but even those who are a tiny bit off the beaten track—that is, who are a tiny bit capable of saying something new—by their very nature cannot fail to be criminals—more or less, to be sure. Otherwise it would be hard for them to get off the beaten track, and, of course, they cannot consent to stay on it, again by nature, and in my opinion it is even their duty not to consent.\"',
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
            description: '"So she said nothing, but looked doggedly and sadly at the shore, wrapped in its mantle of peace; as if the people there had fallen asleep, she thought; were free like smoke, were free to come and go like ghosts. They have no suffering there, she thought.\"',
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
            description: '"What I’m saying is, under certain conditions they would all do it. And under the same circumstances we would not. So it doesn’t matter that some of them haven’t done it. I listen. I read. And now I know that they know it too. They know they are unnatural. Their writers and artists have been saying it for years. Telling them they are unnatural, telling them they are depraved. They call it tragedy. In the movies they call it adventure. It’s just depravity that they try to make glorious, natural. But it ain’t. The disease they have is in their blood, in the structure of their chromosomes.”',
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
            id: 'citizen',
            alignment: 'right',
            hidden: false,
            title: '<span class="underline--magical">Citizen: An American Lyric</span> by Rankine',
            date: '<span class="date">2014</span>',
            image: 'images/rankine.jpeg',
            description: '"The world is wrong. You can’t put the past behind you. It’s buried in you; it’s turned your flesh into its own cupboard. Not everything remembered is useful but it all comes from the world to be stored in you."',
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
            id: 'parks',
            alignment: 'left',
            hidden: false,
            title: '<span class="underline--magical">Father Comes Home From the Wars</span> by Parks', 
            date: '<span class="date">2015</span>',
            image: 'images/parks.png',
            description: '"He didn’t give me my freedom. Not even with his dying breath. In spite of all his promises. And what beautiful promises they were. With every day they grew fuller and riper. I’d imagine sitting at a head of a fine table and eating my fill That’s how real they were. I could taste them. And when I’d wake up my mouth was only full of my own teeth And tongue and spit. And my stomach growled. And he’d feed it. With promises. And I would feast on them.\"',
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
        }
    ]
};
