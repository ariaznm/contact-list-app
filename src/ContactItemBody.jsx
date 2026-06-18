import React from 'react';
 
function ContactItemBody({ name, tag }) {
 return (
   <div className="contact-item_badan">
     <h3 className="contact-item_judul">{name}</h3>
     <p className="contact-item__nama">@{tag}</p>
   </div>
 );
}
 
export default ContactItemBody;