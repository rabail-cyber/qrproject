import React from 'react';

const LoginComponent = () => {
  // const [formData, setFormData] = useState({
  //   rollNum: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add login logic here (e.g., API call, authentication)

  //   // For demonstration purposes, you can log the form data to the console
  //   console.log('Login Form Data:', formData);
  // };

  return (
    <>

    <div className='container' text-center>
      <div className='login form'> Login</div>

    <div className='form'>
  <div className="row mb-3">
    {/* <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label> */}
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder='Enter Email'/>
    </div>
  </div>
  <div className="row mb-3">
    {/* <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label> */}
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder='password'/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Login as </legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label className="form-check-label" for="gridRadios1">
          Admin
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Teacher
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
        <label className="form-check-label" for="gridRadios3">
          Student
        </label>
      </div>
    </div>
  </fieldset>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check"/>
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Remember me 
        </label>
      </div>
    </div>

  <button type="submit" className="btn btn-primary">Login</button>

  <div className="login-signup">
              <span className="text">
                Not a member?
                <a href="">
                  Signup Now
                </a>
              </span>
            </div>

</div>
</div>
    </>
    
  );
};

export default LoginComponent;
