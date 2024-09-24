import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ImageFetcher.css'; // Import your CSS

function ImageFetcher() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
                setImages(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch images');
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="image-container"> {/* Add this class */}
            {images.map((image) => (
                <div key={image.id}>
                    <img src={image.download_url} alt={image.author} />
                    <p>{image.author}</p>
                </div>
            ))}
        </div>
    );
}

export default ImageFetcher;
