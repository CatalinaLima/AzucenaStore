import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../services/firebase';
import Loader from '../Loader/Loader';
import './HomePage.css'

function Homepage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getData(4)
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
        <div className='header'>
                <img className="encabezado" src="/assets/imagen_encabezado.jpg" alt="Encabezado" />
                <h1 className='titleh1'>AZUCENA COLLECTION</h1>
            </div>
      <section className="section1">
        <h2 className="titleh2">ALL TIME BEST SELLERS</h2>
        <div className="image-grid">
          {products.map((product) => (
            <div key={product.id} className="category-item">
              <img className="hpimg" src={product.image} alt={product.title} />
              <p className='titlehpgrid'>{product.title}</p>
            </div>
          ))}
        </div>
        <button className="boton">
          <Link to="/products">VIEW ALL PRODUCTS</Link>
        </button>
      </section>
      <section className='section2'>
                <div className="image-grid">
                    <Link to = '/category/homedecor' >
                        <div className="featured-item">
                            <img className='hpimg2' src="/assets/imagen_destacada1.jpg" alt="Destacado 1" />
                            <p className='category-description'>HOME DECOR</p>
                        </div>
                    </Link>
                    <Link to = '/category/plantaccessories' >
                    <div className="featured-item">
                        <img className='hpimg2' src="/assets/imagen_destacada2.jpg" alt="Destacado 2" />
                        <p>PLANT ACCESORIES</p>
                    </div>
                    </Link>
                    <Link to = '/category/furniture' >
                    <div className="featured-item">
                        <img className='hpimg2' src="/assets/imagen_destacada3.jpg" alt="Destacado 3" />
                        <p>FURNITURE</p>
                    </div>
                    </Link>
                    <Link to = '/category/lighting' >
                    <div className="featured-item">
                        <img className='hpimg2' src="/assets/imagen_destacada4.jpg" alt="Destacado 4" />
                        <p>LIGHTNING</p>
                    </div>
                    </Link>
                    <Link to = '/category/mirrors' >
                    <div className="featured-item">
                        <img className='hpimg2' src="/assets/imagen_destacada5.jpg" alt="Destacado 5" />
                        <p>MIRRORS</p>
                    </div>
                    </Link>
                    <Link to = '/category/kitchenware' >
                    <div className="featured-item">
                        <img className='hpimg2' src="/assets/imagen_destacada6.jpg" alt="Destacado 6" />
                        <p>KITCHENWARE</p>
                    </div>
                    </Link>
                </div>
            </section>
            <section>
                <div className='section3'>
                    <div className='infohp'>
                        <h3>AZUCENA HOME</h3>
                        <p>Design creates culture. Culture shapes values. Values determine the future</p>
                        <button className='boton'>LEARN MORE</button>
                    </div>
                    <div>
                        <img className='hpimg3' src="/assets/picturehp1.jpg" alt="decor" />
                    </div>
                </div>
            </section>
    </div>
  );
}

export default Homepage;



