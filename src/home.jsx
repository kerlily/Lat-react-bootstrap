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

   {/* card */}
   <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Daftar Buku</h1>
        <p className="lead text-body-secondary">Buku pada list ini dapat di baca maupoun di beli</p>
      </div>
    </div>
  </section>
  <div className="album py-5 bg-body-tertiary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/137/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">The Girl With the Dragon Tattoo</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/217/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">Harry Potter and the Goblet of Fire</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/218/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">Chronicles: Volume One</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/267/200/300" alt="" />
          <div className="card-body">
              <p className="card-text">The Tipping Point</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/27/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">The Siege</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/212/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">Visitation</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/197/200/300" alt="" />  
            <div className="card-body">
              <p className="card-text">Noughts & Crosses</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/233/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">The God Delusion</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/287/200/300" alt="" />
            <div className="card-body">
              <p className="card-text">Tell Me How It Ends</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Baca</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                </div>
                <small className="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Home