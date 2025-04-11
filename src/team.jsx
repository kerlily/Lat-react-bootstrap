function Team() {
    return (
      <>
        <div className="container mt-5 mb-5">
        {/* Judul Team */}
        <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">Team</h2>
        <p class="lead">Team ini berisi 3 orang orang yang sangat keren</p>
      </div>
      <div class="col-md-5 order-md-1">
      <img className="bd-placeholder-img card-img-top" width="100%" height="225" src="https://picsum.photos/id/287/200/300" alt="" />
      </div>
    </div>
    </div>
        <hr className="featurette-divider"></hr>

        {/* muka team */}
        <div className="row">
            <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
                <img className="bd-placeholder-img rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" src="https://picsum.photos/id/237/200/300" alt="" />
                <h2 className="fw-normal">Budi</h2>
                <p>Raja iblis ke 13 dan pengguna mangekyo sharingan</p>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" src="https://picsum.photos/id/237/200/300" alt="" />       
                    <h2 className="fw-normal">Agus</h2>
                    <p>hacker terbaik dunia yang pernah hack nasa pakai php</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center mb-5">
                    <img className="bd-placeholder-img rounded-circle" width="140" height="140" preserveAspectRatio="xMidYMid slice" src="https://picsum.photos/id/237/200/300" alt="" />   
                    <h2 className="fw-normal">Salim</h2>
                    <p>kembaran agus dan budi</p>
                    <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
        </div>
        <hr className="featurette-divider"></hr>
      </>
    );
  }
  
  export default Team;
  