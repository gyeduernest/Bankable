import Quotes from '../assets/Quotes.svg'
import Mary from '../assets/Mary.png'
import Star from '../assets/Stars.svg'

export default function Testimonials() {
  return (
    <div className='bg-[#060809] lg:p-10 lg:px-40 p-5'>
      <h3 className='text-white text-3xl mb-10 font-semibold font-serif'>
          Listen to what our clients are saying
      </h3>
        <div className="lg:flex px-8 lg:gap-8 justify-center items-center ">
        <div  className='w-72 h-96 bg-white rounded-md mb-5'>
        <div>
          <img src={Quotes} alt="" />
        </div>
        <div className='p-5'>
          <p>
          Ever since I started using the TrustTracker app, managing my trust fund assets has become a breeze! It's like having a personal financial assistant in my pocket. Highly recommend it
          </p>
          <hr />
          <div className='flex items-center'>
            <img src={Mary} alt="" />
            <div>
            <p>Anna Marrie</p>
            <img src={Star} alt="" />
            </div>
          </div>
        </div>

        </div>
        <div  className='w-72 h-96 bg-white rounded-md mb-5'>
        <div>
          <img src={Quotes} alt="" />
        </div>
        <div className='p-5'>
          <p>
          "Kudos to the team behind TrustTracker! This app has made overseeing my trust fund a delight. It's efficient, intuitive, and has given me a whole new level of control over my assets. Love it!"
          </p>
          <hr />
          <div className='flex items-center'>
            <img src={Mary} alt="" />
            <div>
            <p>Anna Marrie</p>
            <img src={Star} alt="" />
            </div>
          </div>
        </div>

        </div>
        <div  className='w-72 h-96 bg-white rounded-md mb-5'>
        <div>
          <img src={Quotes} alt="" />
        </div>
        <div className='p-5'>
          <p>
          "I've tried several trust fund management apps, but TrustTracker stands out. It's the perfect blend of simplicity and functionality. Now, I can monitor my assets effortlessly – truly a game-changer!"
          </p>
          <hr />
          <div className='flex items-center'>
            <img src={Mary} alt="" />
            <div>
            <p>Anna Marrie</p>
            <img src={Star} alt="" />
            </div>
          </div>
        </div>

        </div>
        <div  className='w-72 h-96 bg-white rounded-md mb-5 md:hidden'>
        <div>
          <img src={Quotes} alt="" />
        </div>
        <div className='p-5'>
          <p>
          "TrustTracker is a game-changer for anyone with a trust fund. The ability to track and manage assets in real-time has brought a new level of transparency to my financial planning. I couldn't be happier with the results!"
          </p>
          <hr />
          <div className='flex items-center'>
            <img src={Mary} alt="" />
            <div>
            <p>Anna Marrie</p>
            <img src={Star} alt="" />
            </div>
          </div>
        </div>

        </div>
        
        </div>


    </div>
  )
}