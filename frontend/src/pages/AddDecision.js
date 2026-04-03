// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import api from '../utils/api';
// // import './DecisionForm.css';

// // const AddDecision = () => {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: '',
// //     optionsConsidered: '',
// //     finalDecision: '',
// //     reason: '',
// //     status: 'pending',
// //   });
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

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
// //       await api.post('/decisions', formData);
// //       navigate('/dashboard');
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Failed to create decision');
// //     }
// //   };

// //   return (
// //     <div className="form-container">
// //       <div className="form-card">
// //         <h2>Add New Decision</h2>
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
// //               Create Decision
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

// // export default AddDecision;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../utils/api';
// import './DecisionForm.css';

// const AddDecision = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     optionsConsidered: '',
//     finalDecision: '',
//     reason: '',
//     // REMOVED status field - will be 'pending' by default in backend
//   });
//   const [error, setError] = useState('');

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
//       // Backend will automatically set status to 'pending'
//       await api.post('/decisions', formData);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Failed to create decision');
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-card">
//         <h2>Add New Decision</h2>
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
//               placeholder="List the options you considered (optional)"
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

//           {/* STATUS FIELD REMOVED - Always starts as "pending" */}

//           <div className="form-actions">
//             <button type="submit" className="btn-submit">
//               Create Decision
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

// export default AddDecision;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import './DecisionForm.css';

const AddDecision = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: [],
    optionsConsidered: '',
    finalDecision: '',
    reason: '',
  });
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');

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

    if (!formData.category) {
      setError('Please select a category');
      return;
    }

    try {
      await api.post('/decisions', formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create decision');
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Add New Decision</h2>
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
              placeholder="List the options you considered (optional)"
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

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Create Decision
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

export default AddDecision;