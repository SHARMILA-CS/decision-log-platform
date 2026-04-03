// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import api from '../utils/api';
// // // import './Dashboard.css';

// // // const Dashboard = () => {
// // //   const [decisions, setDecisions] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [filter, setFilter] = useState('all');

// // //   useEffect(() => {
// // //     fetchDecisions();
// // //   }, []);

// // //   const fetchDecisions = async () => {
// // //     try {
// // //       const res = await api.get('/decisions');
// // //       setDecisions(res.data);
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error('Error fetching decisions:', error);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const deleteDecision = async (id) => {
// // //     if (window.confirm('Are you sure you want to delete this decision?')) {
// // //       try {
// // //         await api.delete(`/decisions/${id}`);
// // //         setDecisions(decisions.filter((d) => d._id !== id));
// // //       } catch (error) {
// // //         alert('Error deleting decision');
// // //       }
// // //     }
// // //   };

// // //   const filteredDecisions = decisions.filter((decision) => {
// // //     if (filter === 'all') return true;
// // //     return decision.status === filter;
// // //   });

// // //   const getStatusClass = (status) => {
// // //     switch (status) {
// // //       case 'approved':
// // //         return 'status-approved';
// // //       case 'rejected':
// // //         return 'status-rejected';
// // //       case 'pending':
// // //         return 'status-pending';
// // //       default:
// // //         return '';
// // //     }
// // //   };

// // //   if (loading) {
// // //     return <div className="loading">Loading decisions...</div>;
// // //   }

// // //   return (
// // //     <div className="dashboard-container">
// // //       <div className="dashboard-header">
// // //         <h1>Decision Dashboard</h1>
// // //         <Link to="/add-decision" className="btn-add">
// // //           + Add New Decision
// // //         </Link>
// // //       </div>

// // //       <div className="filter-section">
// // //         <button
// // //           className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
// // //           onClick={() => setFilter('all')}
// // //         >
// // //           All ({decisions.length})
// // //         </button>
// // //         <button
// // //           className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
// // //           onClick={() => setFilter('pending')}
// // //         >
// // //           Pending ({decisions.filter((d) => d.status === 'pending').length})
// // //         </button>
// // //         <button
// // //           className={filter === 'approved' ? 'filter-btn active' : 'filter-btn'}
// // //           onClick={() => setFilter('approved')}
// // //         >
// // //           Approved ({decisions.filter((d) => d.status === 'approved').length})
// // //         </button>
// // //         <button
// // //           className={filter === 'rejected' ? 'filter-btn active' : 'filter-btn'}
// // //           onClick={() => setFilter('rejected')}
// // //         >
// // //           Rejected ({decisions.filter((d) => d.status === 'rejected').length})
// // //         </button>
// // //       </div>

// // //       {filteredDecisions.length === 0 ? (
// // //         <div className="no-decisions">
// // //           <p>No decisions found. Create your first decision!</p>
// // //         </div>
// // //       ) : (
// // //         <div className="decisions-grid">
// // //           {filteredDecisions.map((decision) => (
// // //             <div key={decision._id} className="decision-card">
// // //               <div className="decision-header">
// // //                 <h3>{decision.title}</h3>
// // //                 <span className={`status-badge ${getStatusClass(decision.status)}`}>
// // //                   {decision.status}
// // //                 </span>
// // //               </div>
// // //               <p className="decision-description">{decision.description}</p>
// // //               <div className="decision-meta">
// // //                 <p>
// // //                   <strong>Final Decision:</strong> {decision.finalDecision}
// // //                 </p>
// // //                 <p>
// // //                   <strong>Reason:</strong> {decision.reason}
// // //                 </p>
// // //                 <p>
// // //                   <strong>Created by:</strong> {decision.createdBy?.name || 'Unknown'}
// // //                 </p>
// // //                 <p className="decision-date">
// // //                   {new Date(decision.createdAt).toLocaleDateString()}
// // //                 </p>
// // //               </div>
// // //               <div className="decision-actions">
// // //                 <Link to={`/edit-decision/${decision._id}`} className="btn-edit">
// // //                   Edit
// // //                 </Link>
// // //                 <button
// // //                   onClick={() => deleteDecision(decision._id)}
// // //                   className="btn-delete"
// // //                 >
// // //                   Delete
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // import React, { useState, useEffect, useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';
// // import api from '../utils/api';
// // import './Dashboard.css';

// // const Dashboard = () => {
// //   const { user } = useContext(AuthContext); // Get current user
// //   const [decisions, setDecisions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [filter, setFilter] = useState('all');

// //   useEffect(() => {
// //     fetchDecisions();
// //   }, []);

// //   const fetchDecisions = async () => {
// //     try {
// //       const res = await api.get('/decisions');
// //       setDecisions(res.data);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error('Error fetching decisions:', error);
// //       setLoading(false);
// //     }
// //   };

// //   const deleteDecision = async (id) => {
// //     if (window.confirm('Are you sure you want to delete this decision?')) {
// //       try {
// //         await api.delete(`/decisions/${id}`);
// //         setDecisions(decisions.filter((d) => d._id !== id));
// //       } catch (error) {
// //         alert('Error deleting decision');
// //       }
// //     }
// //   };

// //   const filteredDecisions = decisions.filter((decision) => {
// //     if (filter === 'all') return true;
// //     return decision.status === filter;
// //   });

// //   const getStatusClass = (status) => {
// //     switch (status) {
// //       case 'approved':
// //         return 'status-approved';
// //       case 'rejected':
// //         return 'status-rejected';
// //       default:
// //         return 'status-pending';
// //     }
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading decisions...</div>;
// //   }

// //   return (
// //     <div className="dashboard-container">
// //       <div className="dashboard-header">
// //         <h1>Decision Dashboard</h1>
// //         <Link to="/add-decision" className="btn-add">
// //           + Add New Decision
// //         </Link>
// //       </div>

// //       <div className="filter-section">
// //         <button
// //           className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
// //           onClick={() => setFilter('all')}
// //         >
// //           All ({decisions.length})
// //         </button>
// //         <button
// //           className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
// //           onClick={() => setFilter('pending')}
// //         >
// //           Pending ({decisions.filter((d) => d.status === 'pending').length})
// //         </button>
// //         <button
// //           className={filter === 'approved' ? 'filter-btn active' : 'filter-btn'}
// //           onClick={() => setFilter('approved')}
// //         >
// //           Approved ({decisions.filter((d) => d.status === 'approved').length})
// //         </button>
// //         <button
// //           className={filter === 'rejected' ? 'filter-btn active' : 'filter-btn'}
// //           onClick={() => setFilter('rejected')}
// //         >
// //           Rejected ({decisions.filter((d) => d.status === 'rejected').length})
// //         </button>
// //       </div>

// //       {filteredDecisions.length === 0 ? (
// //         <div className="no-decisions">
// //           <p>No decisions found. Create your first decision!</p>
// //         </div>
// //       ) : (
// //         <div className="decisions-grid">
// //           {filteredDecisions.map((decision) => (
// //             <div key={decision._id} className="decision-card">
// //               <div className="decision-header">
// //                 <h3>{decision.title}</h3>
// //                 <span className={`status-badge ${getStatusClass(decision.status)}`}>
// //                   {decision.status.toUpperCase()}
// //                 </span>
// //               </div>

// //               <p className="decision-description">{decision.description}</p>

// //               <div className="decision-meta">
// //                 <p>
// //                   <strong>Final Decision:</strong> {decision.finalDecision}
// //                 </p>
// //                 <p>
// //                   <strong>Reason:</strong> {decision.reason}
// //                 </p>
// //                 {decision.optionsConsidered && (
// //                   <p>
// //                     <strong>Options Considered:</strong> {decision.optionsConsidered}
// //                   </p>
// //                 )}
// //                 <p>
// //                   <strong>Created by:</strong> {decision.createdBy?.name || 'Unknown'}
// //                 </p>
// //                 <p className="decision-date">
// //                   {new Date(decision.createdAt).toLocaleDateString()}
// //                 </p>
// //               </div>

// //               <div className="decision-actions">
// //                 {/* ONLY SHOW EDIT/DELETE IF USER IS THE CREATOR OR IS ADMIN */}
// //                 {(decision.createdBy?._id === user._id || user.role === 'admin') && (
// //                   <>
// //                     <Link to={`/edit-decision/${decision._id}`} className="btn-edit">
// //                       Edit
// //                     </Link>
// //                     <button
// //                       onClick={() => deleteDecision(decision._id)}
// //                       className="btn-delete"
// //                     >
// //                       Delete
// //                     </button>
// //                   </>
// //                 )}
                
// //                 {/* ONLY SHOW VIEW IF USER IS NOT THE CREATOR */}
// //                 {decision.createdBy?._id !== user._id && user.role !== 'admin' && (
// //                   <span className="view-only-text">View Only</span>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Dashboard;



// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import api from '../utils/api';
// import './Dashboard.css';

// const Dashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [decisions, setDecisions] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     fetchDecisions();
//     fetchNotifications();
//   }, []);

//   const fetchDecisions = async () => {
//     try {
//       const res = await api.get('/decisions');
//       setDecisions(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching decisions:', error);
//       setLoading(false);
//     }
//   };

//   const fetchNotifications = async () => {
//     try {
//       const res = await api.get('/notifications');
//       setNotifications(res.data);
//     } catch (error) {
//       console.error('Error fetching notifications:', error);
//     }
//   };

//   const markAsRead = async (id) => {
//     try {
//       await api.put(`/notifications/${id}/read`);
//       fetchNotifications();
//     } catch (error) {
//       console.error('Error marking notification as read:', error);
//     }
//   };

//   const markAllAsRead = async () => {
//     try {
//       await api.put('/notifications/mark-all-read');
//       fetchNotifications();
//     } catch (error) {
//       console.error('Error marking all as read:', error);
//     }
//   };

//   const deleteDecision = async (id) => {
//     if (window.confirm('Are you sure you want to delete this decision?')) {
//       try {
//         await api.delete(`/decisions/${id}`);
//         setDecisions(decisions.filter((d) => d._id !== id));
//       } catch (error) {
//         alert('Error deleting decision');
//       }
//     }
//   };

//   const filteredDecisions = decisions.filter((decision) => {
//     if (filter === 'all') return true;
//     return decision.status === filter;
//   });

//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'approved':
//         return 'status-approved';
//       case 'rejected':
//         return 'status-rejected';
//       default:
//         return 'status-pending';
//     }
//   };

//   const getNotificationIcon = (type) => {
//     switch (type) {
//       case 'decision_created':
//         return '📝';
//       case 'decision_approved':
//         return '✅';
//       case 'decision_rejected':
//         return '❌';
//       default:
//         return '🔔';
//     }
//   };

//   const unreadNotifications = notifications.filter((n) => !n.isRead);

//   if (loading) {
//     return <div className="loading">Loading decisions...</div>;
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1>Decision Dashboard</h1>
//         <Link to="/add-decision" className="btn-add">
//           + Add New Decision
//         </Link>
//       </div>

//       {/* NOTIFICATIONS SECTION */}
//       {notifications.length > 0 && (
//         <div className="notifications-section">
//           <div className="notifications-header">
//             <h2>
//               Notifications {unreadNotifications.length > 0 && (
//                 <span className="notification-badge">{unreadNotifications.length}</span>
//               )}
//             </h2>
//             {unreadNotifications.length > 0 && (
//               <button onClick={markAllAsRead} className="btn-mark-all">
//                 Mark All as Read
//               </button>
//             )}
//           </div>
//           <div className="notifications-list">
//             {notifications.slice(0, 5).map((notification) => (
//               <div
//                 key={notification._id}
//                 className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
//               >
//                 <span className="notification-icon">
//                   {getNotificationIcon(notification.type)}
//                 </span>
//                 <div className="notification-content">
//                   <p>{notification.message}</p>
//                   <span className="notification-time">
//                     {new Date(notification.createdAt).toLocaleString()}
//                   </span>
//                 </div>
//                 {!notification.isRead && (
//                   <button
//                     onClick={() => markAsRead(notification._id)}
//                     className="btn-mark-read"
//                   >
//                     Mark Read
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="filter-section">
//         <button
//           className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
//           onClick={() => setFilter('all')}
//         >
//           All ({decisions.length})
//         </button>
//         <button
//           className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
//           onClick={() => setFilter('pending')}
//         >
//           Pending ({decisions.filter((d) => d.status === 'pending').length})
//         </button>
//         <button
//           className={filter === 'approved' ? 'filter-btn active' : 'filter-btn'}
//           onClick={() => setFilter('approved')}
//         >
//           Approved ({decisions.filter((d) => d.status === 'approved').length})
//         </button>
//         <button
//           className={filter === 'rejected' ? 'filter-btn active' : 'filter-btn'}
//           onClick={() => setFilter('rejected')}
//         >
//           Rejected ({decisions.filter((d) => d.status === 'rejected').length})
//         </button>
//       </div>

//       {filteredDecisions.length === 0 ? (
//         <div className="no-decisions">
//           <p>No decisions found. Create your first decision!</p>
//         </div>
//       ) : (
//         <div className="decisions-grid">
//           {filteredDecisions.map((decision) => (
//             <div key={decision._id} className="decision-card">
//               <div className="decision-header">
//                 <h3>{decision.title}</h3>
//                 <span className={`status-badge ${getStatusClass(decision.status)}`}>
//                   {decision.status.toUpperCase()}
//                 </span>
//               </div>

//               <p className="decision-description">{decision.description}</p>

//               <div className="decision-meta">
//                 <p>
//                   <strong>Final Decision:</strong> {decision.finalDecision}
//                 </p>
//                 <p>
//                   <strong>Reason:</strong> {decision.reason}
//                 </p>
//                 {decision.optionsConsidered && (
//                   <p>
//                     <strong>Options Considered:</strong> {decision.optionsConsidered}
//                   </p>
//                 )}
//                 <p>
//                   <strong>Created by:</strong> {decision.createdBy?.name || 'Unknown'}
//                 </p>
//                 <p className="decision-date">
//                   {new Date(decision.createdAt).toLocaleDateString()}
//                 </p>
//               </div>

//               <div className="decision-actions">
//                 {(decision.createdBy?._id === user._id || user.role === 'admin') && (
//                   <>
//                     <Link to={`/edit-decision/${decision._id}`} className="btn-edit">
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => deleteDecision(decision._id)}
//                       className="btn-delete"
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
                
//                 {decision.createdBy?._id !== user._id && user.role !== 'admin' && (
//                   <span className="view-only-text">View Only</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [decisions, setDecisions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    fetchDecisions();
    fetchNotifications();
  }, []);

  const fetchDecisions = async () => {
    try {
      const res = await api.get('/decisions');
      setDecisions(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching decisions:', error);
      setLoading(false);
    }
  };

  const fetchNotifications = async () => {
    try {
      const res = await api.get('/notifications');
      setNotifications(res.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`);
      fetchNotifications();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await api.put('/notifications/mark-all-read');
      fetchNotifications();
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const deleteDecision = async (id) => {
    if (window.confirm('Are you sure you want to delete this decision?')) {
      try {
        await api.delete(`/decisions/${id}`);
        setDecisions(decisions.filter((d) => d._id !== id));
      } catch (error) {
        alert('Error deleting decision');
      }
    }
  };

  const updateStatus = async (id, status) => {
  try {
    await api.put(`/decisions/${id}`, { status });
    fetchDecisions();
  } catch (error) {
    console.error('Error updating status:', error);
  }
};

  const filteredDecisions = decisions.filter((decision) => {
    const statusMatch = filter === 'all' || decision.status === filter;
    const categoryMatch = categoryFilter === 'all' || decision.category === categoryFilter;
    return statusMatch && categoryMatch;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-approved';
      case 'rejected':
        return 'status-rejected';
      default:
        return 'status-pending';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technical: '#3B82F6',
      Business: '#10B981',
      Personal: '#8B5CF6',
      Financial: '#F59E0B',
      Strategic: '#EF4444',
      Operational: '#06B6D4',
    };
    return colors[category] || '#6B7280';
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'decision_created':
        return '📝';
      case 'decision_approved':
        return '✅';
      case 'decision_rejected':
        return '❌';
      default:
        return '🔔';
    }
  };

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  const allCategories = ['Technical', 'Business', 'Personal', 'Financial', 'Strategic', 'Operational'];
  const categoryCounts = {};
  allCategories.forEach(cat => {
    categoryCounts[cat] = decisions.filter(d => d.category === cat).length;
  });

  if (loading) {
    return <div className="loading">Loading decisions...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Decision Dashboard</h1>
        <Link to="/add-decision" className="btn-add">
          + Add New Decision
        </Link>
      </div>

      {/* NOTIFICATIONS SECTION */}
      {notifications.length > 0 && (
        <div className="notifications-section">
          <div className="notifications-header">
            <h2>
              Notifications {unreadNotifications.length > 0 && (
                <span className="notification-badge">{unreadNotifications.length}</span>
              )}
            </h2>
            {unreadNotifications.length > 0 && (
              <button onClick={markAllAsRead} className="btn-mark-all">
                Mark All as Read
              </button>
            )}
          </div>
          <div className="notifications-list">
            {notifications.slice(0, 5).map((notification) => (
              <div
                key={notification._id}
                className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
              >
                <span className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </span>
                <div className="notification-content">
                  <p>{notification.message}</p>
                  <span className="notification-time">
                    {new Date(notification.createdAt).toLocaleString()}
                  </span>
                </div>
                {!notification.isRead && (
                  <button
                    onClick={() => markAsRead(notification._id)}
                    className="btn-mark-read"
                  >
                    Mark Read
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CATEGORY FILTER */}
      <div className="category-filter-section">
        <h3>Filter by Category:</h3>
        <div className="category-filter-buttons">
          <button
            className={categoryFilter === 'all' ? 'category-btn active' : 'category-btn'}
            onClick={() => setCategoryFilter('all')}
          >
            All ({decisions.length})
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              className={categoryFilter === category ? 'category-btn active' : 'category-btn'}
              onClick={() => setCategoryFilter(category)}
              style={{
                '--category-color': getCategoryColor(category),
              }}
            >
              {category} ({categoryCounts[category]})
            </button>
          ))}
        </div>
      </div>

      {/* STATUS FILTER */}
      <div className="filter-section">
        <button
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          All ({decisions.length})
        </button>
        <button
          className={filter === 'pending' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('pending')}
        >
          Pending ({decisions.filter((d) => d.status === 'pending').length})
        </button>
        <button
          className={filter === 'approved' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('approved')}
        >
          Approved ({decisions.filter((d) => d.status === 'approved').length})
        </button>
        <button
          className={filter === 'rejected' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('rejected')}
        >
          Rejected ({decisions.filter((d) => d.status === 'rejected').length})
        </button>
      </div>

      {filteredDecisions.length === 0 ? (
        <div className="no-decisions">
          <p>No decisions found. Create your first decision!</p>
        </div>
      ) : (
        <div className="decisions-grid">
          {filteredDecisions.map((decision) => (
            <div key={decision._id} className="decision-card">
              <div className="decision-header">
                <h3>{decision.title}</h3>
                <span className={`status-badge ${getStatusClass(decision.status)}`}>
                  {decision.status.toUpperCase()}
                </span>
              </div>

              {/* CATEGORY & TAGS */}
              <div className="decision-categories">
                {decision.category && (
                  <span
                    className="category-badge"
                    style={{ backgroundColor: getCategoryColor(decision.category) }}
                  >
                    📂 {decision.category}
                  </span>
                )}
                {decision.tags && decision.tags.length > 0 && (
                  <div className="tags-container">
                    {decision.tags.map((tag, index) => (
                      <span key={index} className="tag-badge">
                        🏷️ {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="decision-description">{decision.description}</p>

              <div className="decision-meta">
                <p>
                  <strong>Final Decision:</strong> {decision.finalDecision}
                </p>
                <p>
                  <strong>Reason:</strong> {decision.reason}
                </p>
                {decision.optionsConsidered && (
                  <p>
                    <strong>Options Considered:</strong> {decision.optionsConsidered}
                  </p>
                )}
                <p>
                  <strong>Created by:</strong> {decision.createdBy?.name || 'Unknown'}
                </p>
                <p className="decision-date">
                  {new Date(decision.createdAt).toLocaleDateString()}
                </p>
              </div>

            

<div className="decision-actions">
  {/* ROW 1: EDIT + DELETE */}
  {(decision.createdBy?._id === user._id || user.role === 'admin') && (
    <div className="action-row">
      <Link to={`/edit-decision/${decision._id}`} className="btn-edit">
        Edit
      </Link>
      <button
        onClick={() => deleteDecision(decision._id)}
        className="btn-delete"
      >
        Delete
      </button>
    </div>
  )}

  {/* ROW 2: APPROVE + REJECT */}
  {user.role === 'admin' && decision.status === 'pending' && (
    <div className="action-row">
      <button
        onClick={() => updateStatus(decision._id, 'approved')}
        className="btn-approve"
      >
        Approve
      </button>

      <button
        onClick={() => updateStatus(decision._id, 'rejected')}
        className="btn-reject"
      >
        Reject
      </button>
    </div>
  )}

  {/* VIEW ONLY */}
  {decision.createdBy?._id !== user._id && user.role !== 'admin' && (
    <span className="view-only-text">View Only</span>
  )}
</div>
  
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;