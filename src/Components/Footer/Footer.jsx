import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-white'>
            <footer className=" bg-white max-w-5xl mx-auto mb-4 pt-16">
                <div className='text-center border-b-2'>
                    <h2 className='font-bold text-3xl'>Gadget Heaven</h2>
                    <p className='my-4'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className='footer lg:pl-9 mt-3 ml-6 lg:ml-0'>
                    <nav>
                        <h6 className="footer-title text-black">Services</h6>
                        <NavLink to="/product-support" className="link link-hover text-gray-700">Product Support</NavLink>
                        <NavLink to="/order-tracking" className="link link-hover text-gray-700">Order Tracking</NavLink>
                        <NavLink to="/shipping" className="link link-hover text-gray-700">Shipping & Delivery</NavLink>
                        <NavLink to="/returns" className="link link-hover text-gray-700">Returns</NavLink>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-black">Company</h6>
                        <NavLink to="/about" className="link link-hover text-gray-700">About us</NavLink>
                        <NavLink to="/careers" className="link link-hover text-gray-700">Careers</NavLink>
                        <NavLink to="/contact" className="link link-hover text-gray-700">Contact</NavLink>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-black">Legal</h6>
                        <NavLink to="/terms" className="link link-hover text-gray-700">Terms of use</NavLink>
                        <NavLink to="/privacy" className="link link-hover text-gray-700">Privacy policy</NavLink>
                        <NavLink to="/cookie" className="link link-hover text-gray-700">Cookie policy</NavLink>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;