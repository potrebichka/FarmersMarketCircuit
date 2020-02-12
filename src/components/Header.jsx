import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <style jsx>{`
          h1 {
            margin-top: 50px;
            text-align: center;
            font-size: 50px;
            font-variant: small-caps
          }
          h3 {
            text-align: center;
            font-size: 22px;
            margin-bottom: 50px
          }
          h2 {
            text-align: center;
            color: maroon
          }
          .link {
            color: maroon
          }
        `}</style>
      <h1>Welcome to Avery's Organics</h1>
      <h3>We are a mid-sized farm in Northern Oregon that grows organic produce, and sells it at Farmer's Markets throughout town.</h3>
      <h2><Link style={{color: "white"}} to="/">Schedule</Link> | <Link style={{color: "white"}} to="/seasons">Season produce</Link>  </h2>
    </div>

  );
}

export default Header;