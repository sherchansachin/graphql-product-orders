// placeholders for the orders data 
const orders = [
{
    date: '2022-01-23',
    subtotal: 90,
    items: [
        {
            product: {
                id: 'redshoe',
                description: 'a nice shoes',
                price: 43.3,
            },
            quantity: 2
        }
    
    ]
}
    
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
};