// import * as React from 'react';

// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

export const EmailTemplate = ({  //: React.FC<Readonly<EmailTemplateProps>>
  name, email, subject, message
}) => (
  <div>
    <h1>You have new message!</h1>
    <span>Name: </span>
    <p>{name}</p>
    <span>Email: </span>
    <p>{email}</p>
    <span>subject: </span>
    <p>{subject}</p>
    <span>Message: </span>
    <p>{message}</p>
  </div>
);
