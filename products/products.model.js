// placeholders for the products data 
const products = [
    {
        id: "redshoes",
        description: "a red shoe with nice laces",
        price: 43.3,
        reviews: [],
    },
    {
        id: "bluejean",
        description: "a blue jeans",
        price: 55.5,
        reviews: [],
    }
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max){
    products.filter((product) => {
        return product.price > min && product.price <=max;
    })
}

function getProductById(id){
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price){
    const newProduct = {
        id,
        price,
        description,
        reviews: []
    };

    // push the new product to the in-memory (push in the list)
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment){
    const matchedProduct = getProductById(id);

    if(matchedProduct){
        const NewProductReview = {
            rating,
            comment
        };

        matchedProduct.reviews.push(NewProductReview);
        return NewProductReview;
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
};