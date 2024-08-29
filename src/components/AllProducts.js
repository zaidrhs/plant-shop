import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await axios.get('http://127.0.0.1:8000/api/products');
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, []);

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    return(
        <div className="dashboard-table-container">
        <table className='dashboard-table'>
            <thead className='dashboard-table-head'>
                <tr className='dashboard-table-header-row'>
                    <th className="dashboard-table-header">Title</th>
                    <th className="dashboard-table-header">Price</th>
                    <th className="dashboard-table-header">Description</th>
                    <th className="dashboard-table-header">Image</th>
                    <th className="dashboard-table-header">Actions</th>
                </tr>
            </thead>
            <tbody className='dashboard-table-body'>
                {products.map((product) => (
                    <tr key={product.id} className="dashboard-table-row">
                        <td className="dashboard-table-cell">{product.title}</td>
                        <td className="dashboard-table-cell">{product.price}</td>
                        <td className="dashboard-table-cell">{product.description}</td>
                        <td className="dashboard-table-cell">
                            <img className='dashboard-product-img' src={product.image} alt={product.title} />
                        </td>
                        <td className="dashboard-table-cell dashboard-actions">
                            <button className="dashboard-delete-btn" onClick={() => deleteProduct(product.id)}>Delete</button>
                            <Link to={`/dashboard/update/${product.id}`}>
                                <button className="dashboard-edit-btn">Edit</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
export default AllProducts