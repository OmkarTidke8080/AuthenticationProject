import React from 'react'

function ResetPassword() {
    return (
        <>
        <div className='flex justify-center items-center  mt-'>
            <div className='border border-white '>

            <button className='text-white'>
                 Request Otp
            </button>
            </div>
            <button className='text-white'>
                 Verify  Otp
                 </button>
            <button className='text-white'> 
                Reset Password
             </button>
        </div>
        </>
    );
}

export default ResetPassword
