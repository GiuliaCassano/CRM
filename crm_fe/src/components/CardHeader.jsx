const CardHeader = () => {
  return (
    <div className="card text-center">
      <div className="card-header">What is CRoMo?</div>
      <div className="card-body">
        <h5 className="card-title">CRoMo: Customer Relationship Management</h5>
        <img src="src\images\OfficeWorker.png" className="img-fluid"  />
        <p className="card-text">
          CroMo is a tool used to manage contacts and their activities in the
          company.
          <br />
          What is its goal? To improve all interactions at the heart of the
          business.
        </p>
      </div>
    </div>
  );
};
export { CardHeader };
