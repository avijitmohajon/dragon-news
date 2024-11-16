import Qimage from '../assets/swimming.png'
import Qimage2nd from '../assets/class.png'
import Qimage3rd from '../assets/playground.png'
const QZoneCard = () => {
    return (
        <div className="p-4 bg-base-200 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold mb-4">Q-Zone</h3>
            <div className="space-y-4">
                {/* 1st image */}
                <div>
                    <div className="p-3">
                        <img src={Qimage} className="w-full h-32 object-cover rounded-lg" />
                    </div>
                    <h4 className="text-center mt-2 font-medium"></h4>
                </div>

                {/* 2nd image */}
                <div>
                    <div className="p-3">
                        <img src={Qimage2nd} className="w-full h-32 object-cover rounded-lg" />
                    </div>
                    <h4 className="text-center mt-2 font-medium"></h4>
                </div>

                {/* 3rd image */}
                <div>
                    <div className="p-3">
                        <img src={Qimage3rd} className="w-full h-32 object-cover rounded-lg" />
                    </div>
                    <h4 className="text-center mt-2 font-medium"></h4>
                </div>

            </div>
        </div>
    );
};

export default QZoneCard;
