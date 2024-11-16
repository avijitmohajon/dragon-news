import moment from 'moment';
import logo from '../assets/logo-removebg-preview.png'
const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-2 py-2 z-50">
                <img className='w-[400px]' src={logo}/>
                <h2 className='text-base-400 text-lg opacity-70'>Journalism Without Fear or Favour</h2>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;