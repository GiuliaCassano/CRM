const CardHeader = () => {
  return (
    <div className="card text-center">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>

      <h1 className="text-card p-4 animated zoomIn">What is CRoMo?</h1>
      <div className="card-body">
        <h2 className="card-title">CRoMo: Customer Relationship Management</h2>
        <img src="src\images\OfficeWorker.png" className="img-fluid pt-3" />
        <h5 className="card-text p-4">
          CroMo is a tool used to manage contacts and their activities in the
          company.
          <br />
          What is its goal? To improve all interactions at the heart of the
          business.
        </h5>
      </div>
    </div>
  );
};
export { CardHeader };
