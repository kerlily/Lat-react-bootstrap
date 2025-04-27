import { useParams, Link } from 'react-router-dom';
import books from '../../utills/book';

const Book = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger" role="alert">
          Buku tidak ditemukan
        </div>
        <Link to="/" className="btn btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <img 
            src={book.image || `https://picsum.photos/id/${100 + book.id}/400/600`} 
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h1>{book.title}</h1>
          <h4 className="text-muted">{book.author}</h4>
          <p className="text-muted">Tahun Terbit: {book.year}</p>
          
          <div className="card mt-4">
            <div className="card-header bg-light">
              <h5>Deskripsi Buku</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{book.description}</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-primary px-4">
              <i className="bi bi-cart-plus me-2"></i>Beli Sekarang
            </button>
            <Link to="/" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-left me-2"></i>Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;