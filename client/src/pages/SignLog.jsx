import React from "react";

const SignLog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkblue to-lightblue flex flex-col items-center justify-center p-6">
      <div className="border-4 border-white rounded-md">
        <h1>Login</h1>
        <div>
          <input type="text" placeholder="Email" required />
        </div>
        <div>
          <input type="password" placeholder="Password" required />
        </div>
      </div>
    </div>
  );
};

export default SignLog;
