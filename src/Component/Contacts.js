import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index}>
          <h2>{contact.name}</h2>
          <p>Phone: {contact.phone}</p>
          <p>Location: {contact.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
