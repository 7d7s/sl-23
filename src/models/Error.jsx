function Error() {
    return (
      <>
          <div className="container">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-8">
                      <div className="text-center flex-column d-flex justify-content-center align-items-center" style={{height:500}}>
                      <h1 style={{fontSize: 100}} className="text-red">404 Page</h1> 
                      <p>Sorry Page <b className="text-danger">Not</b> Found!</p>
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  export default Error
  