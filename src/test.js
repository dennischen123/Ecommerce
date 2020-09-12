const cart = [{
        id: 5000,
        name: 'item 1',
        quantity: 1
    },
    {
        id: 53123,
        name: 'item 2',
        quantity: 1
    },
    {
        id: 5345234,
        name: 'item 3',
        quantity: 1

    },
    {
        id: 5634543,
        name: 'item 4',
        quantity: 1

    }
]


const itemToAdd = {
    id: 56343,
    name: 'item 4',
}


function checkDup(item, list) {
    const map = new Map();
    list.forEach((item) => {
        map.set(item.id, item);
    })
    if (map.has(item.id)) {
        map.get(item.id).quantity += 1;
    } else {
        map.set(item.id, item);
    }
    for (let value of map.values()) {
        console.log(value);
    }
    const a = [...map.values()];
    console.log(a);
    // console.log(map.has(item.id));
    return map;
}

checkDup(itemToAdd, cart);