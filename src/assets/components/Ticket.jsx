const Ticket = ({ userData, setUserData }) => {
    return (
      <div className="ticket">
        <h2>Your Conference Ticket</h2>
        <img src={userData.avatar} alt="User Avatar" className="avatar" />
        <p><strong>Name:</strong> {userData.fullName}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <button onClick={() => setUserData(null)}>Edit Info</button>
      </div>
    );
  };
  
  export default Ticket;
  