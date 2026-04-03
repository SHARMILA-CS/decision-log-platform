// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import api from '../utils/api';
// // import './DecisionForm.css';

// // const EditDecision = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: '',
// //     optionsConsidered: '',
// //     finalDecision: '',
// //     reason: '',
// //     status: 'pending',
// //   });
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchDecision = async () => {
// //       try {
// //         const res = await api.get(`/decisions/${id}`);
// //         setFormData({
// //           title: res.data.title,
// //           description: res.data.description,
// //           optionsConsidered: res.data.optionsConsidered || '',
// //           finalDecision: res.data.finalDecision,
// //           reason: res.data.reason,
// //           status: res.data.status,
// //         });
// //         setLoading(false);
// //       } catch (err) {
// //         setError('Failed to fetch decision');
// //         setLoading(false);
// //       }
// //     };

// //     fetchDecision();
// //   }, [id]); // Added 'id' as dependency

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     try {
// //       await api.put(`/decisions/${id}`, formData);
// //       navigate('/dashboard');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to update decision');
// //     }
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading...</div>;
// //   }

// //   return (
// //     <div className="form-container">
// //       <div className="form-card">
// //         <h2>Edit Decision</h2>
// //         {error && <div className="error-message">{error}</div>}
// //         <form onSubmit={handleSubmit}>
// //           <div className="form-group">
// //             <label>Title *</label>
// //             <input
// //               type="text"
// //               name="title"
// //               value={formData.title}
// //               onChange={handleChange}
// //               required
// //               placeholder="Enter decision title"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Description *</label>
// //             <textarea
// //               name="description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               required
// //               rows="4"
// //               placeholder="Describe the problem or situation"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Options Considered</label>
// //             <textarea
// //               name="optionsConsidered"
// //               value={formData.optionsConsidered}
// //               onChange={handleChange}
// //               rows="3"
// //               placeholder="List the options you considered"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Final Decision *</label>
// //             <input
// //               type="text"
// //               name="finalDecision"
// //               value={formData.finalDecision}
// //               onChange={handleChange}
// //               required
// //               placeholder="What was decided?"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Reason/Justification *</label>
// //             <textarea
// //               name="reason"
// //               value={formData.reason}
// //               onChange={handleChange}
// //               required
// //               rows="3"
// //               placeholder="Why was this decision made?"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label>Status *</label>
// //             <select name="status" value={formData.status} onChange={handleChange}>
// //               <option value="pending">Pending</option>
// //               <option value="approved">Approved</option>
// //               <option value="rejected">Rejected</option>
// //             </select>
// //           </div>

// //           <div className="form-actions">
// //             <button type="submit" className="btn-submit">
// //               Update Decision
// //             </button>
// //             <button
// //               type="button"
// //               onClick={() => navigate('/dashboard')}
// //               className="btn-cancel"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditDecision;



// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import api from '../utils/api';
// import './DecisionForm.css';

// const EditDecision = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext); // Get logged-in user
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     optionsConsidered: '',
//     finalDecision: '',
//     reason: '',
//     status: 'pending',
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDecision = async () => {
//       try {
//         const res = await api.get(`/decisions/${id}`);
//         setFormData({
//           title: res.data.title,
//           description: res.data.description,
//           optionsConsidered: res.data.optionsConsidered || '',
//           finalDecision: res.data.finalDecision,
//           reason: res.data.reason,
//           status: res.data.status,
//         });
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch decision');
//         setLoading(false);
//       }
//     };

//     fetchDecision();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       await api.put(`/decisions/${id}`, formData);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to update decision');
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   return (
//     <div className="form-container">
//       <div className="form-card">
//         <h2>Edit Decision</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Title *</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               placeholder="Enter decision title"
//             />
//           </div>

//           <div className="form-group">
//             <label>Description *</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               rows="4"
//               placeholder="Describe the problem or situation"
//             />
//           </div>

//           <div className="form-group">
//             <label>Options Considered</label>
//             <textarea
//               name="optionsConsidered"
//               value={formData.optionsConsidered}
//               onChange={handleChange}
//               rows="3"
//               placeholder="List the options you considered"
//             />
//           </div>

//           <div className="form-group">
//             <label>Final Decision *</label>
//             <input
//               type="text"
//               name="finalDecision"
//               value={formData.finalDecision}
//               onChange={handleChange}
//               required
//               placeholder="What was decided?"
//             />
//           </div>

//           <div className="form-group">
//             <label>Reason/Justification *</label>
//             <textarea
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               rows="3"
//               placeholder="Why was this decision made?"
//             />
//           </div>

//           {/* ONLY ADMIN CAN CHANGE STATUS */}
//           {user.role === 'admin' && (
//             <div className="form-group">
//               <label>Status * (Admin Only)</label>
//               <select name="status" value={formData.status} onChange={handleChange}>
//                 <option value="pending">Pending</option>
//                 <option value="approved">Approved</option>
//                 <option value="rejected">Rejected</option>
//               </select>
//             </div>
//           )}

//           {/* SHOW CURRENT STATUS TO REGULAR USERS (READ-ONLY) */}
//           {user.role !== 'admin' && (
//             <div className="form-group">
//               <label>Current Status</label>
//               <input
//                 type="text"
//                 value={formData.status.toUpperCase()}
//                 disabled
//                 style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
//               />
//             </div>
//           )}

//           <div className="form-actions">
//             <button type="submit" className="btn-submit">
//               Update Decision
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate('/dashboard')}
//               className="btn-cancel"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditDecision;


import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import './DecisionForm.css';

const EditDecision = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: [],
    optionsConsidered: '',
    finalDecision: '',
    reason: '',
    status: 'pending',
  });
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecision = async () => {
      try {
        const res = await api.get(`/decisions/${id}`);
        setFormData({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category || '',
          tags: res.data.tags || [],
          optionsConsidered: res.data.optionsConsidered || '',
          finalDecision: res.data.finalDecision,
          reason: res.data.reason,
          status: res.data.status,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch decision');
        setLoading(false);
      }
    };

    fetchDecision();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleTagInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await api.put(`/decisions/${id}`, formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update decision');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Edit Decision</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter decision title"
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Technical">Technical</option>
              <option value="Business">Business</option>
              <option value="Personal">Personal</option>
              <option value="Financial">Financial</option>
              <option value="Strategic">Strategic</option>
              <option value="Operational">Operational</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tags (Optional)</label>
            <div className="tags-input-container">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagInputKeyPress}
                placeholder="Type a tag and press Enter"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="btn-add-tag"
              >
                Add Tag
              </button>
            </div>
            {formData.tags.length > 0 && (
              <div className="tags-display">
                {formData.tags.map((tag, index) => (
                  <span key={index} className="tag-item">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="tag-remove"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Describe the problem or situation"
            />
          </div>

          <div className="form-group">
            <label>Options Considered</label>
            <textarea
              name="optionsConsidered"
              value={formData.optionsConsidered}
              onChange={handleChange}
              rows="3"
              placeholder="List the options you considered"
            />
          </div>

          <div className="form-group">
            <label>Final Decision *</label>
            <input
              type="text"
              name="finalDecision"
              value={formData.finalDecision}
              onChange={handleChange}
              required
              placeholder="What was decided?"
            />
          </div>

          <div className="form-group">
            <label>Reason/Justification *</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Why was this decision made?"
            />
          </div>

          {user.role === 'admin' && (
            <div className="form-group">
              <label>Status * (Admin Only)</label>
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          )}

          {user.role !== 'admin' && (
            <div className="form-group">
              <label>Current Status</label>
              <input
                type="text"
                value={formData.status.toUpperCase()}
                disabled
                style={{ backgroundColor: '#f3f4f6', cursor: 'not-allowed' }}
              />
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Update Decision
            </button>
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDecision;