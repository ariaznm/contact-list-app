import React from 'react';
 
function ContactItemImage({ imageUrl }) {
 return (
   <div className="contact-item__gambar">
     <img src={imageUrl} alt="contact profil"/>
   </div>
 );
}
 
export default ContactItemImage;