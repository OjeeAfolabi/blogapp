import React from 'react'
const SignOutModal = ({setOverflow, setLogoutModal, logout}) => {

  const clickHandler = () => {
    setOverflow("auto");
    setLogoutModal(false)
  }

  return (
    <div onClick={clickHandler} className="fixed overflow-hidden top-0 left-0 bg-[rgb(0,0,0,0.8)] h-[100vh] w-[100%] text-white z-[20]">
      <div
        className="h-full w-full pointer-events-auto  flex justify-center items-center "
      >
        <div className="flex justify-center items-center flex-col gap-2 bg-slate-600 p-4 md:p-8 rounded border border-white">
          <p>Are you sure you want to log out? </p>
          <button onClick={logout} className="bg-[#ffa500] p-2 rounded">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
