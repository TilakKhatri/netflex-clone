import React from 'react'

function Navbar() {
    const FixedHeader = {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "70px",
        background: "rgba(124,120,122,.2)",
        transition: "all ease 0.5s",
        boxShadow: "5px 5px 5px dark"
    }
    return (
        <div className='flex justify-between items-center p-4 z-[100] absolute w-full' style={FixedHeader}>
            <h1 className='text-red-600 pr-4 font-bold text-4xl'>NETFLIX</h1>
            <div className='flex justify-center items-center'>
                <button className='bg-red-600 px-4 py-2 rounded cursor-pointer text-white text-sm mr-2 font-semibold'>Register</button>
                <button className='px-4 py-2 rounded border border-white cursor-pointer text-white text-sm hover:bg-red-600 hover:border-transparent font-semibold'>Login</button>
            </div>
        </div>
    )
}

export default Navbar;