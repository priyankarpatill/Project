// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
 
// function UserForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     contactNumber: '',
//     email: '',
//     address: '',
//     qualifaction:''
//   });

//   const [errors, setErrors] = useState({});
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };
//   const validate = () => {
//     let formErrors = {};
    
    
//     if (formData.name.length < 2 || formData.name.length > 50) {
//       formErrors.name = 'Name must be between 2 and 50 characters.';
//     }

   
//     const phonePattern = /^\+?\d{10,15}$/;
//     if (!phonePattern.test(formData.contactNumber)) {
//       formErrors.contactNumber = 'Invalid phone number format.';
//     }

    
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       formErrors.email = 'Invalid email format.';
//     }

    
//     if (formData.address.length < 5) {
//       formErrors.address = 'Address must be at least 5 characters long.';
//     }

    
//     if (formData.qualification.length > 10 ){
//       setSubmittedData(formData);
//       setQualificationError('');
//       }
//       else{
//         setSubmittedData(null);
//         setQualificationError('Qualification must be more than 10 characters');

//       }
    

//     setErrors(formErrors);

    
//     return Object.keys(formErrors).length === 0;
//   };
  
  

//   const handleSubmit = (event) => {
//     console.log(formData)
//     event.preventDefault();
//     setSubmittedData(formData);
    
    
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && <span className="error">{errors.name}</span>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Contact Number:
//             <input
//               type="text"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//             />
//              {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Address:
//             <textarea
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//              {errors.address && <span className="error">{errors.address}</span>}
//           </label>
//         </div>
//         <div>
//           <label>
//             Qualifaction:
//             <input
//               type="text"
//               name="qualifaction"
//               value={formData.qualifaction}
//               onChange={handleChange}
//             />
//               {errors.qualification && <span className="error">{errors.qualification}</span>}
            
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submittedData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p><strong>Name:</strong> {submittedData.name}</p>
//           <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
//           <p><strong>Email:</strong> {submittedData.email}</p>
//           <p><strong>Address:</strong> {submittedData.address}</p>
//           <p><strong>Qualifaction:</strong> {submittedData.qualifaction}</p>
//         </div>
//       )}
//     </div>
//   );
// }

//  export default UserForm;

import './App.css';
import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    address: '',
    qualification: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};

    
    if (formData.name.length < 2 || formData.name.length > 50) {
      formErrors.name = 'Name must be between 2 and 50 characters.';
    }

    
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(formData.contactNumber)) {
      formErrors.contactNumber = 'Invalid phone number format.';
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Invalid email format.';
    }

    
    if (formData.address.length < 5) {
      formErrors.address = 'Address must be at least 5 characters long.';
    }

    
    if (formData.qualification.length <= 10) {
      formErrors.qualification = 'Qualification must have more than 10 characters.';
    }

    setErrors(formErrors);

    
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    console.log(formData)
    event.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
        </div>
        <div>
          <label>
            Contact Number:
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
        </div>
        <div>
          <label>
            Qualification:
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
            {errors.qualification && <span className="error">{errors.qualification}</span>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Contact Number:</strong> {submittedData.contactNumber}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Qualification:</strong> {submittedData.qualification}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
