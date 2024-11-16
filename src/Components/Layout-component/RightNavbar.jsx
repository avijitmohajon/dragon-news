
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZoneCard from '../QZoneCard';

const RightNavbar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin/>
            <FindUs/>
            <QZoneCard/>
        </div>
    );
};

export default RightNavbar;