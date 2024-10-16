import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-ui-kit/css/mdb.min.css';



const images = [
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp",
    title: "Card title",
    link: "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp",
    title: "Card title",
    link: "#!"
  },
  {
    src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp",
    title: "Card title",
    link: "#!"
  }
];

const Card = ({ src, title, link }) => (
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div className="card">
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={link} className="btn btn-primary">View</a>
      </div>
    </div>
  </div>
);

const Carousel = () => {
  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    chunks.push(images.slice(i, i + chunkSize));
  }

  return (
    <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-bs-ride="carousel">
      <div className="carousel-inner py-4">
        {chunks.map((chunk, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="container">
              <div className="row">
                {chunk.map((image, idx) => (
                  <Card key={idx} {...image} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselMultiItemExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const UploadImage = () => {
  return (
    <div>
      <Carousel />
      {/* Add any additional sections or components here */}
    </div>
  );
};

export default UploadImage;
