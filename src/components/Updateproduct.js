import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/style/updateproduct.css"

function UpdateProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const nav = useNavigate();

    const id = window.location.pathname.split("/").pop();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
                const { title, price, description, image } = response.data;
                setTitle(title);
                setPrice(price);
                setDescription(description);
                setImage(image); 
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    async function submit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("_method", "PUT");
            if (image) {
                formData.append("image", image);
            }
            formData.append("title", title);
            formData.append("price", price);
            formData.append("description", description);

            let response = await axios.post(`http://127.0.0.1:8000/api/products/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response);
            nav("/Products");  
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="productData">
            <h2>Update Product</h2>
            <form onSubmit={submit}>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Image</label>
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <input className="bnt-green" type="submit" value="Update Product" />
            </form>
        </div>
    );
}

export default UpdateProduct;
