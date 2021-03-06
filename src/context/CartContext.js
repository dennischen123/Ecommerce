import React, { useReducer, createContext } from 'react';
import storeReducer from '../reducers/storeReducer';

//Initial state
const initialCartState = {
    cart: [],
    cartTotal: 0,
    products: [{
        "id": 1,
        "name": "Field Bindweed",
        "price": 9.58,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 2,
        "name": "Yellow Hedgehyssop",
        "price": 9.79,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 3,
        "name": "Skunkbush Sumac",
        "price": 2.7,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 4,
        "name": "Edwards' Bluewood",
        "price": 1.99,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 5,
        "name": "Scabland Penstemon",
        "price": 8.55,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 6,
        "name": "Dunes Saw Greenbrier",
        "price": 7.9,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 7,
        "name": "Alpine Polytrichastrum Moss",
        "price": 4.06,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 8,
        "name": "Redstem",
        "price": 8.19,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 9,
        "name": "Plumegrass",
        "price": 3.42,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 10,
        "name": "Oregon Whitetop Aster",
        "price": 2.49,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 11,
        "name": "Florida Loosestrife",
        "price": 6.41,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 12,
        "name": "Field Locoweed",
        "price": 7.3,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 13,
        "name": "False Calico",
        "price": 2.92,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 14,
        "name": "Alkali Desertparsley",
        "price": 8.87,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 15,
        "name": "Napkinring",
        "price": 3.17,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 16,
        "name": "Mojave Seablite",
        "price": 1.07,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 17,
        "name": "Texas Hercules' Club",
        "price": 6.37,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 18,
        "name": "Kidneyleaf Twayblade",
        "price": 6.14,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 19,
        "name": "Phaeocalicium Lichen",
        "price": 1.47,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 20,
        "name": "Mosquito Waterwort",
        "price": 9.7,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 21,
        "name": "Tall Yellowtop",
        "price": 1.28,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 22,
        "name": "Backhous Fuchsia",
        "price": 3.68,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 23,
        "name": "Virginia Pennywort",
        "price": 5.59,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 24,
        "name": "Desert Columbine",
        "price": 3.65,
        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff",
        "qty": 1,
    }, {
        "id": 25,
        "name": "Slender-fruit Beaksedge",
        "price": 2.52,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 26,
        "name": "Eggleston's Milkvetch",
        "price": 7.22,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 27,
        "name": "Puerto Rico Ghostplant",
        "price": 8.09,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }, {
        "id": 28,
        "name": "Folded Calicoflower",
        "price": 7.84,
        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff",
        "qty": 1,
    }, {
        "id": 29,
        "name": "Foxtail Pine",
        "price": 3.65,
        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff",
        "qty": 1,
    }, {
        "id": 30,
        "name": "Cusick's Clover",
        "price": 7.63,
        "img": "http://dummyimage.com/450x170.png/dddddd/000000",
        "qty": 1,
    }],
    restaurant: {
        info: {
            name: "Fruit Shop",
            address: "123 noriega st",
            phoneNumber: "123-456-7891",
            bannerImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        submenus: [{
                name: "Top Menu Items",
                items: [{
                        "id": 123,
                        name: 'Brown Sugar Milk Tea',
                        price: 4.99,
                        img: 'https://images.unsplash.com/photo-1546471364-f820fd19c9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
                        qty: 1
                    },
                    {
                        "id": 1,
                        name: 'Thai Milk Tea',
                        price: 5.49,
                        img: 'https://images.unsplash.com/photo-1549248581-cf105cd081f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                        qty: 1
                    }
                ]
            },
            {
                name: "Milk Tea",
                items: [{
                        "id": 123123,
                        name: 'Brown Sugar Milk Tea',
                        price: 4.99,
                        img: 'https://images.unsplash.com/photo-1555704574-f9ecf4717298?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                        qty: 1
                    },
                    {
                        name: 'Thai Milk Tea',
                        price: 5.49,
                        img: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                        qty: 1
                    },
                    {
                        "id": 1656666,
                        name: 'Jasmine Green Milk Tea',
                        price: 5.49,
                        img: 'https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
                        qty: 1
                    },
                    {
                        id: 8833,
                        name: 'Hong Kong Style Milk Tea',
                        price: 5.49,
                        img: 'https://images.unsplash.com/photo-1524593410820-38510f580a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                        qty: 1
                    },
                    {
                        "id": 169456456,
                        "name": "Field Bindweed",
                        "price": 9.58,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 27657567,
                        "name": "Yellow Hedgehyssop",
                        "price": 9.79,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 4573,
                        "name": "Skunkbush Sumac",
                        "price": 2.7,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 746744,
                        "name": "Edwards' Bluewood",
                        "price": 1.99,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 353475,
                        "name": "Scabland Penstemon",
                        "price": 8.55,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 666555,
                        "name": "Dunes Saw Greenbrier",
                        "price": 7.9,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 766666,
                        "name": "Alpine Polytrichastrum Moss",
                        "price": 4.06,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 866666,
                        "name": "Redstem",
                        "price": 8.19,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 96666,
                        "name": "Plumegrass",
                        "price": 3.42,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 105555,
                        "name": "Oregon Whitetop Aster",
                        "price": 2.49,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 14441,
                        "name": "Florida Loosestrife",
                        "price": 6.41,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 1233332,
                        "name": "Field Locoweed",
                        "price": 7.3,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 13345234,
                        "name": "False Calico",
                        "price": 2.92,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 1453456345,
                        "name": "Alkali Desertparsley",
                        "price": 8.87,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 1523423432,
                        "name": "Napkinring",
                        "price": 3.17,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 16867867867,
                        "name": "Mojave Seablite",
                        "price": 1.07,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 17678678678,
                        "name": "Texas Hercules' Club",
                        "price": 6.37,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 16786788,
                        "name": "Kidneyleaf Twayblade",
                        "price": 6.14,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 157457479,
                        "name": "Phaeocalicium Lichen",
                        "price": 1.47,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 26363630,
                        "name": "Mosquito Waterwort",
                        "price": 9.7,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 2424241,
                        "name": "Tall Yellowtop",
                        "price": 1.28,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 221235,
                        "name": "Backhous Fuchsia",
                        "price": 3.68,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 21235553,
                        "name": "Virginia Pennywort",
                        "price": 5.59,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 2223334,
                        "name": "Desert Columbine",
                        "price": 3.65,
                        "img": "http://dummyimage.com/450x170.png/5fa2dd/ffffff"
                    }, {
                        "id": 233245,
                        "name": "Slender-fruit Beaksedge",
                        "price": 2.52,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 28888876,
                        "name": "Eggleston's Milkvetch",
                        "price": 7.22,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 277686787,
                        "name": "Puerto Rico Ghostplant",
                        "price": 8.09,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }, {
                        "id": 2969698,
                        "name": "Folded Calicoflower",
                        "price": 7.84,
                        "img": "http://dummyimage.com/450x170.png/ff4444/ffffff"
                    }, {
                        "id": 25675679,
                        "name": "Foxtail Pine",
                        "price": 3.65,
                        "img": "http://dummyimage.com/450x170.png/cc0000/ffffff"
                    }, {
                        "id": 33453450,
                        "name": "Cusick's Clover",
                        "price": 7.63,
                        "img": "http://dummyimage.com/450x170.png/dddddd/000000"
                    }
                ]
            }
        ]
    }
}

// Create context
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialCartState);

    return (
        <CartContext.Provider value={{store, dispatch}}>
            { children }
        </CartContext.Provider>
    )
}