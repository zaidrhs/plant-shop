import './assets/style/dashboerd.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./assets/style/form.css"

function NewProduct({ addNewProduct }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const nav = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("title", title);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("image", image);

            let response = await axios.post("http://127.0.0.1:8000/api/products", formData);
            let newProduct = response.data; 
            console.log(response) 

            addNewProduct(newProduct);

            nav("/Products"); 
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="productData">
            <form onSubmit={submit}>
                <label>Title</label><br/>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br/>
                <label>Price</label><br/>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                /><br/>
                <label>Description</label><br/>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                /><br/>
                <label>Image</label><br/>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                /><br/>
                <input className='bnt-green' type="submit" value="Add Product" /><br/>
            </form>
        </div>
    );
}

export default NewProduct;
