import { useEffect, useState } from "react";
import { ListContact } from "./ListContact";

const FormContacts = () => {
  const [nameValue, setNameValue] = useState("");
  const [checkInputName, setCheckInputName] = useState(false);
  const [surnameValue, setSurnameValue] = useState("");
  const [checkInputSurname, setCheckInputSurname] = useState(false);
  //FARE COUNTRY
  const [countryValue, setCountryValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [checkInputEmail, setCheckInputEmail] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [checkInputPhone, setCheckInputPhone] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(null);


  //*** 2 ***
  const fetchGetAllContacts = async() => {
    console.log("Fetch");

    try {
      const response = await fetch("http://localhost:8080/contact/all");
      console.log(response);
      if (!response.ok){
        throw new Error("Something went wrong!");
      };

      const data = await response.json();
      console.log(data);

      const dataMapped = await data.map((elem, index) =>{
        return{
          key: index,
          firstName : elem.firstName,
          lastName : elem.lastName,
          country : elem.country,
          email : elem.email,
          phoneNumber : elem.phoneNumber,
          activities : elem.activities
        }
      })
      console.log(dataMapped);

     setContent(dataMapped);
     console.log(content);

    } catch (error) {
      setError(error)
      console.log(error);
    }
  }

  //NAME
  const nameChangeHandler = (event) => {
    setNameValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputName(true);
    } else setCheckInputName(false);
  };

  //SURNAME
  const surnameChangeHandler = (event) => {
    setSurnameValue(event.target.value);
    if (event.target.value.length >= 3) {
      setCheckInputSurname(true);
    } else setCheckInputSurname(false);
  };

  //EMAIL Aggiungere nell'if il controllo della @
  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
    if(event.target.value.length >= 8){
        setCheckInputEmail(true)
    }else setCheckInputEmail(false);
  }

  //PHONE NUMBER Aggiungere nell'if il controllo per inserire solo numeri
  const phoneChangeHandler = (event) => {
    setPhoneValue(event.target.value);
    if(event.target.value.length = 10){
        setPhoneValue(true)
    } else setPhoneValue(false);
  }


  const submitHandler = (event) => {
    event.preventDefault();
  };

  // ***1*** In react le [] dentro l'useEffect stanno a significare che la funziona avviene al caricamento della pagina
  useEffect(() =>{
    fetchGetAllContacts();
  },
  []);

  let final = "";

  if (content != null){
    final = <ListContact propsContent= {content}/>
    console.log("Funziona fetch")
  }


   // °°°°°° 1 °°°°°  SUBMIT HANDLER
   const submitControlHandler = async (event) => {
    event.preventDefault();

   const newContactToBE = {
    firstName : nameValue,
    lastName : surnameValue,
    country : countryValue,
    email : emailValue,
    phoneNumber : phoneValue,
  };

  console.log(newContactToBE);

  fetch("http://localhost:8080/contact/create", {
    method : "POST",
    headers : {
      "Content-type" : "application/json",
    },
    body : JSON.stringify(newContactToBE)
  })
  .then((response) => response.json())
  .then((newContactToBE) =>{
    fetchGetAllContacts(),
    console.log("Success, you have posted this new activity to BE", newContactToBE);
  })
  .catch((error) =>{
    setError(error.message);
    console.log(error);
  })
};

  return (
    <section className="container">
      <div className="row">
        <form
          onSubmit={submitControlHandler}
          className="col-4 d-flex flex-column m-2 p-3 border border-dark rounded"
        >
          <label htmlFor="name">First name</label>
          <input
            className={
              checkInputName == true
                ? "border border-success border-0 border-bottom"
                : "border border-danger border-0 border-bottom"
            }
            onChange={nameChangeHandler}
            value={nameValue}
            type="text"
            id="firstName"
          />
          <label htmlFor="surname">Last name</label>
          <input
            className={
              checkInputSurname == true
                ? "border border-success border-0 border-bottom"
                : "border border-danger border-0 border-bottom"
            }
            onChange={surnameChangeHandler}
            value={surnameValue}
            type="text"
            id="lastName"
          />
          <label htmlFor="country">Country</label>
          <div>
            <select
              type="dropdown"
              id="country"
              className="form-dropdown"
              name="country"
              data-component="dropdown"
            >
              <option value="">Select your country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua - Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia - Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso	">Burkina Faso </option>
              <option value="Burundi">Burundi</option>
              <option value="Côte d'Ivoire">Côte d'Ivoire</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czechia">Czechia</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau </option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Holy See">Holy See</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Korea">North Korea</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Kitts and Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Vincent and the Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Korea">South Korea</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States of America">
                United States of America
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>

          <label htmlFor="email">Email</label>
          <input 
          className= {
            checkInputEmail == true
            ? "border border-success border-0 border-bottom"
            : "border border-danger border-0 border-bottom"
          }
          onChange={emailChangeHandler}
          value={emailValue}
          type="email" 
          id="email" 
          />
          <label htmlFor="phone">Phone Number</label>
          <input 
          className= {
            checkInputEmail == true
            ? "border border-success border-0 border-bottom"
            : "border border-danger border-0 border-bottom"
          }
          onChange={phoneChangeHandler}
          value={phoneValue}
          type="text" 
          id="phone" 
          />
          <button className="btn btn-success mt-4">Add</button>
          <button className="btn btn-danger mt-4">Delete</button>
        </form>
        <div className="col-7">
        {final}
        </div>
      </div>
    </section>
  );
};
export { FormContacts };
