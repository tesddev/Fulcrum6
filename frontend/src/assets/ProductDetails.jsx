
import "./productDetails.css"
import carImage from "../assets/images/car.jpg"
const ProductDetails = () => {

        const aProduct = {
            name: "PRODUCT 1",
            image : "",
            price: 250,
            description: "This is an image", 
        }
    return (

            <>
             
                    <div className="container">
                        <div className="carAndName">
                        <div className="product-image-section">
                            <div className="product-image-placeholder">
                                <img src={aProduct.image || carImage} alt={aProduct.name} />
                            </div>
                        </div>
                            <div className="float">
                            <div className="product-info-section">
                            <div className="product-header">
                                <h2 className="product-title">{aProduct.name}</h2>
                                <span className="product-tag">Tag</span>
                                <p className="product-price">${aProduct.price}</p>
                            </div>
                        </div>
                            <div className="product-options">
                                <label>
                                    Price
                                    <select className="product-select">
                                        <option>Value</option>
                                    </select>
                                </label>
                                <label>
                                    Revenue
                                    <select className="product-select">
                                        <option>Value</option>
                                    </select>
                                </label>
                            </div>
                            
                            <div className="product-description">
                                <h3 className="description-title">Product Description</h3>
                                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe delectus nam, officia quaerat obcaecati, eum repellendus, corrupti ipsum modi sequi nostrum consequuntur minima velit. Alias minus consequuntur impedit nemo quas.</p>
                            </div>
                        </div>
                            </div>
                        <div className="product-actions">
                            <button className="action-button edit-button">✎</button>
                            <button className="action-button delete-button">🗑</button>
                        </div>
                    </div>
            </>
    );
};

export default ProductDetails