import books from "../../utills/book"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* hero */}
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">I Feel Bad About My Neck</h1>
        <h3>by <span className="text-body-secondary">Ephron (2006)</span></h3>
        <p className="lead">Perhaps better known for her screenwriting (Silkwood, When Harry Met Sally, Heartburn), Ephron’s brand of smart theatrical humour is on best display in her essays. Confiding and self-deprecating, she has a way of always managing to sound like your best friend – even when writing about her apartment on New York’s Upper West Side. This wildly enjoyable collection includes her droll observations about ageing, vanity – and a scorching appraisal of Bill Clinton.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Baca</button>
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli</button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src="https://picsum.photos/id/288/700/600" alt="" width="720"/>
      </div>
    </div>
  </div>    

   {/* Hero Section */}
   <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Daftar Buku</h1>
            <p className="lead text-body-secondary">Temukan koleksi buku terbaik kami</p>
          </div>
        </div>
      </section>

      {/* Book Cards */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map(book => (
              <div className="col" key={book.id}> 
                <div className="card shadow-sm">
                  <img 
                    className="bd-placeholder-img card-img-top" 
                    width="100%" 
                    height="225" 
                    src={book.image || `https://picsum.photos/id/${100 + book.id}/200/300`} 
                    alt={book.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">{book.author} ({book.year})</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link 
                          to={`/book/${book.id}`} 
                          className="btn btn-sm btn-outline-primary"
                        >
                          Detail
                        </Link>
                        <button 
                          type="button" 
                          className="btn btn-sm btn-outline-success"
                        >
                          Beli
                        </button>
                      </div>
                      <small className="text-body-secondary">ID: {book.id}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </>
    )
}

export default Home