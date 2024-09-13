import React, { useEffect, useState } from 'react';
import gif from '../assets/img/tombola.gif';
import tombola from '../assets/img/tombola.png';
import '../styles/Roulette.css';
import sonidoTombola from '../audio/tombola_sonido.mp3';

const API_URL = process.env.REACT_APP_API_URL || 'https://api-p.onrender.com';

const Roulette = () => {
  const [images, setImages] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [history, setHistory] = useState([]);
  const [remainingImages, setRemainingImages] = useState(61);  //Contador de imágenes restantes
  const audioTombola = new Audio(sonidoTombola);

  //Fetch de las imágenes desde la API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/api/images`);
        const data = await response.json();
        setImages(data.map(img => `${API_URL}${img.path}`));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  //Función para hacer girar la ruleta
  const spin = () => {
    audioTombola.play();
    if (images.length > 0 && remainingImages > 0) {
      setSpinning(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        setResultImage(randomImage);
        setHistory([...history, randomImage]);

        //Eliminar la imagen seleccionada de la lista para evitar repeticiones
        const updatedImages = images.filter((_, index) => index !== randomIndex);
        setImages(updatedImages);
        setRemainingImages(remainingImages - 1);  //Restar una imagen

        setSpinning(false);
      }, 2000);
    } else {
      alert('Ya no hay más cartas por mostrar');
    }
  };

  //Función para reiniciar el juego
  const reset = () => {
    setResultImage(null);
    setHistory([]);
    setRemainingImages(54);  //Reiniciar el contador de imágenes
  };

  return (
    <div className="roulette-container">
      <div className="roulette">
        <div className="roulette-border"></div> {/* Borde de la ruleta */}
        {spinning ? (
          <img src={gif} alt="Spinning" className='tombola-gif' />
        ) : resultImage ? (
          <img src={resultImage} alt="Result" />
        ) : (
          <img src={tombola} alt="Initial" className='tombola-img' />
        )}
      </div>

      <div className="buttons">
        <button onClick={spin} className="btn btn-primary">Girar</button>
        {resultImage && (
          <button onClick={reset} className="btn btn-secondary">Reiniciar</button>
        )}
      </div>

      {history.length > 0 && (
        <div className="history">
          <h3>Cartas obtenidas:</h3>
          <div className="images-history">
            {history.map((image, index) => (
              <img key={index} src={image} alt={`History ${index}`} style={{ width: '80px', margin: '5px' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Roulette;