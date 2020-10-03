import React from "react";


function Footer() {

  return (
    <footer className="footer">
      <div className="bottom">
        &copy; { (new Date().getFullYear()) } Tranquility. A NASA Space history project by Edna Jonsson
      </div>
    </footer>
  );
}

export default Footer;