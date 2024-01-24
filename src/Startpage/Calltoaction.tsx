import { Link } from "react-router-dom"

export default function Calltoaction() {
  return (
    <div className=' flex justify-center items-center text-white py-16 bg-[#060809]'>

      <div>
      <h3 className='text-4xl mb-5 font-semibold text-center'>
        You can start the Process from here
      </h3>
      <p className='text-sm px-5 lg:px-10 lg:ml-20 text-center w-80 mb-5'>
        Incase your trustfund has been locked we can aid you in getting access some all or part of it with our seasoned Partner Lawfirm to aid you in getting what you want
      </p>
      <div className='flex justify-center'>
          
        <Link to="/login">
        <button className='px-5 py-3 bg-blue-600 text-white rounded-md'>
        Click here to start Process
         </button>
        </Link>
          
      </div>
      </div>


    </div>
  )
}