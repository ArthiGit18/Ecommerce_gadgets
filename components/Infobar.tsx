import { Star } from 'lucide-react';

const InfoBar = () => {
    return (
        <div className="bg-white border-t-4 border-indigo-900 shadow-md py-4 px-6 flex flex-wrap items-center justify-between text-sm font-semibold text-gray-800">
            <div className="flex items-center space-x-2">
                <img src="https://www.qualitybearingsonline.com/content/NewSite/Customer-Service.png" alt="Handshake" className="w-6 h-6" />
                <div>
                    <div>Free Delivery</div>
                    <div className="text-xs font-normal">Over $300.00</div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <img src="https://www.qualitybearingsonline.com/content/NewSite/UK-Delivery.png" alt="Delivery" className="w-6 h-6" />
                <div>
                    <div>1-3 Day DHL & UPS</div>
                    <div className="text-xs font-normal">Delivery</div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <img src="https://store-03842.mybigcommerce.com/content/Queens_Award_Logo_black.png" alt="Award" className="w-6 h-6" />
                <div>
                    <div>Queen's Award For</div>
                    <div className="text-xs font-normal">Enterprise Winners</div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <img src="https://www.qualitybearingsonline.com/content/NewSite/qms.png" alt="ISO" className="w-6 h-6" />
                <div>
                    <div>ISO 9001 : 2015</div>
                    <div className="text-xs font-normal">Cert. No.291342018</div>
                </div>
            </div>

            <div className="flex items-center space-x-2 bg-yellow-400 px-3 py-1 rounded">
                <span className="font-bold text-black">feefo</span>
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="black" stroke="black" />
                    ))}
                </div>
                <div className="text-xs text-black font-medium ml-2">
                    Service Rating <span className="font-bold">1177 reviews</span>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;
