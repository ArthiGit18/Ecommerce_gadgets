// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#1d1f29] text-white text-sm mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Quality Bearings Online Ltd</h3>
                    <p>Canada - 438 800 2658</p>
                    <Link href="/contact" className="text-yellow-400 hover:underline block mt-2">Contact Us</Link>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold text-lg mb-2">NAVIGATE</h4>
                    <ul className="space-y-1">
                        {[
                            'Home', 'About Us', 'Contact Us', 'Customer Service',
                            'Delivery Information', 'FAQs', 'Privacy Policy',
                            'Customer Reviews', 'Terms & Conditions', 'Blog'
                        ].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logos and Social */}
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex-1/4 flex-wrap gap-4">
                        <img src="https://cdn11.bigcommerce.com/s-ur7wjnshy8/images/stencil/original/image-manager/footer-logo.png" alt="Award" className="h-12" /><br></br>
                        <img src="https://cdn11.bigcommerce.com/s-03842/product_images/uploaded_images/sc21.png" alt="SC21" className="h-12" /><br></br>
                        <img src="https://cdn11.bigcommerce.com/s-03842/content/../product_images/uploaded_images/Queens_Award_White.png" alt="Supply Chain" className="h-12" /><br></br>
                        <img src="https://cdn11.bigcommerce.com/s-03842/content/../content/Investers_In_People_23_24-01.jpg" alt="Investors in People" className="h-12" />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Follow Us on Social Media</h4>
                        <div className="flex gap-4">
                            <Link href="#"><i className="fab fa-facebook text-2xl"></i></Link>
                            <Link href="#"><i className="fab fa-instagram text-2xl"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin text-2xl"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 py-4 text-center flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
                <p className="text-sm">&copy; 2025 Quality Bearings Online – All rights reserved.</p>
                <div className="flex items-center gap-3 mt-2 md:mt-0">
                    <img src="/images/payment/amex.png" className="h-6" alt="Amex" />
                    <img src="/images/payment/mastercard.png" className="h-6" alt="Mastercard" />
                    <img src="/images/payment/paypal.png" className="h-6" alt="PayPal" />
                    <img src="/images/payment/visa.png" className="h-6" alt="Visa" />
                    <img src="/images/payment/gpay.png" className="h-6" alt="GPay" />
                </div>
            </div>
        </footer>
    );
}
