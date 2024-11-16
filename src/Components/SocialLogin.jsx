
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>

            <div className='*:w-full space-y-3'>
                <button className='btn shadow-md'>
                    <FaGoogle /> Login With Google
                </button>

                <button className='btn shadow-md'>
                    <FaGithub /> Login With GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;