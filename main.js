const root = ReactDOM.createRoot(document.getElementById('root'));
const pokemonLogo = './images/pokemon_logo.png';
const pokemonIcon = './images/pokemonIcon.png';


const cardheader = React.createElement("div", {className: "card-header"}, [
    React.createElement("img", {src: pokemonIcon, className: "card-image", alt: "pokemon"}),
]);

const cardbody = React.createElement("div", {className: "card-body-content"}, [
    React.createElement("h2", {className: "card-body-title"}, "Pokemons"), 
    React.createElement("p", {className: "card-body-text"}, "Grass, Poison"),
])


const cardFooter = React.createElement("div", {className: "card-footer"}, [
    React.createElement("p", null, "6.9 kg"),
    React.createElement("p", {className: "age"}, "99 age"),
])

const main = React.createElement('div', { className: 'main' }, [
    React.createElement('div', { className: 'header' },
        React.createElement('img', { src: pokemonLogo, className: 'logo' })
    ),
    [
        React.createElement('div', { className: 'forms' }, [
            React.createElement('button', { className: 'btn' }, 'Gross'),
            React.createElement('button', { className: 'btn' }, 'Search'),
            React.createElement('button', { className: 'btn' }, 'Aa-Zz'),
            React.createElement('button', { className: 'btn' }, 'Button'),
        ])
    ],
    [
        React.createElement('div', { className: 'cards' },
            [React.createElement('div', { className: 'card' }, [
               cardheader, cardbody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
               cardheader, cardbody, cardFooter
            ])
            ],
            [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
             [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
             [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
             [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
             [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
             [React.createElement('div', { className: 'card' }, [
                cardheader, cardbody, cardFooter
             ])
             ],
        )
    ]

]);


root.render(main)