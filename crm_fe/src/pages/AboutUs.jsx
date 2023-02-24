const AboutUs = () => {
  return (
    <div className = "backgroundHome">

    <div className="container background">
      <div className="row justify-content-center ">
        <div className="background text-about text-center col-8">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          <h1 className="animated bounceInDown pt-3"> CRoMo </h1>
          <h2 className="animated bounceInDown pt-3"> Customer Relationship Management</h2>
          <h3 className="animated bounce pt-3">
            Chrome is a CRM solution that enables your company's employees to
            connect with customers in a whole new way-appointments, calls,
            emails and more. It allows you to keep track of appointments and
            reschedule them.
          </h3>
          <img src="src\images\CRMimage.png" className="img-fluid pt-5 pb-5"  />

        </div>
        
      </div>
      
    </div>
    </div>

  );
};
export default AboutUs;
