// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DisplayLead = () => {
//   const [leadId, setLeadId] = useState('');
//   const [leadDetails, setLeadDetails] = useState(null);

//   const handleInputChange = (event) => {
//     setLeadId(event.target.value);
//   };

//   const handleViewLead = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/get-lead/${leadId}`);
//       const fetchedLeadDetails = response.data;
//       setLeadDetails(fetchedLeadDetails);
//     } catch (error) {
//       console.error('Error fetching lead details:', error);
//       setLeadDetails(null);
//     }
//   };

//   return (
//     <div className="container mt-5 w-50">
//       <h1>Display Lead</h1>
//       <div className="form-group">
//         <input
//           type="text"
//           value={leadId}
//           onChange={handleInputChange}
//           className="form-control"
//         />
//       </div>
//       {leadDetails && (
//         <div>
//           {/* Display leadDetails */}
//         </div>
//       )}
//       <div className="d-flex gap-3">
//       <button onClick={handleViewLead} className="btn btn-primary mt-2">View</button>
//           <Link to="/" > <button  className="btn btn-secondary mt-2">Main Menu</button></Link>
//         </div>
//     </div>
//   );
// };

// export default DisplayLead;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library

const DisplayLead = () => {
  const [leadId, setLeadId] = useState('');
  const [leadDetails, setLeadDetails] = useState(null);

  const handleInputChange = (event) => {
    setLeadId(event.target.value);
  };

  const handleViewLead = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/get-lead/${leadId}`);
      const fetchedLeadDetails = response.data;
      setLeadDetails(fetchedLeadDetails);
    } catch (error) {
      console.error('Error fetching lead details:', error);
      setLeadDetails(null); // Clear leadDetails on error
    }
  };

  return (
    <div className="container mt-5 pd-10">
      <h1>Display Lead</h1>
      <div className="form-group">
        <input
          type="text"
          value={leadId}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      {leadDetails && (
        <div>
          <h2>Lead Details</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{leadDetails.name}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{leadDetails.age}</td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>{leadDetails.mobile}</td>
              </tr>
              <tr>
                <td>Address 1</td>
                <td>{leadDetails.address1}</td>
              </tr>
              <tr>
                <td>Address 2</td>
                <td>{leadDetails.address2}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{leadDetails.city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{leadDetails.state}</td>
              </tr>
              <tr>
                <td>Pincode</td>
                <td>{leadDetails.pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="d-flex gap-3">
        <button onClick={handleViewLead} className="btn btn-primary mt-2">View</button>
        <Link to="/" > <button  className="btn btn-secondary mt-2">Main Menu</button></Link>
      </div>
    </div>
  );
};

export default DisplayLead;