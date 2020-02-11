import React from 'react';


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
        `}</style>
      <h1>Welcome to Avery's Organics</h1>
      <h3>We are a mid-sized farm in Northern Oregon that grows organic produce, and sells it at Farmer's Markets throughout town.</h3>
    </div>

  );
}

export default Header;