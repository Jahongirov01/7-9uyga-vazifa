'use client'

import { useState, useEffect } from 'react';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}

export default function Page() {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const products = await getData();
            setData(products);
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredData = selectedCategory
        ? data.filter(product => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
        : data;

    return (
        <div>
            <header>
                <nav>
                    <select className='select__nav' onChange={handleCategoryChange}>
                        <option value="">Hammas</option>
                        <option value="women's clothing">Ayollar kiyimlari</option>
                        <option value="men's clothing">Erkak kiyimlari</option>
                        <option value="jewelery">Taqinchoqlar</option>
                        <option value="electronics">Kompyuter Hotirasi</option>
                    </select>
                    <ul className="nav__ul">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">About</a></li>
                         <li><a href="#">Contact</a></li>
                     </ul>
                     <ul className='nav__ul'>
                         <li><a href="#">Archive</a></li>
                         <li><a href="#">Pro Version</a></li>
                         <li><a href="#">Download</a></li>
                     </ul>
                    
                </nav>
            </header>
            <main>
                <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', justifyContent: 'center' }}>
                    {filteredData.map(product => (
                        <div className="api__div" key={product.id} style={{ textAlign: 'center' }}>
                     <Link  href={`${product.id}`}>
                            <img className="product__image" src={product.image} alt={product.title} style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
                                                       <p className='asosiy__link'>{product.title}</p>
                                                       </Link>
                        </div>
                    ))}
                </section>
            </main>
            </div>
       
       
    );
}