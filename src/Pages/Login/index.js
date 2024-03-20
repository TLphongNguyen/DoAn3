import images from '~/assets/img';
import Footer from '~/Layout/defaultLayout/Footer';
import { BrowserRouter as Router , Route,Routes  } from 'react-router-dom'


function Login() {
    return ( 
        
        <div>
            <div className="flex w-[1200px] justify-between margin-auto h-[84px] items-center">
                <div className='flex items-center'>
                    <img className='w-[192px] h-[42px]' src={images.logologin} alt="anh logo" />
                    <span className='text-[24px] h-[28px] text-[#222]'>Đăng nhập</span>
                </div>
                <div>
                    <a className='text-[14px] text-[#ee4d2d]' href="# ">bạn cần giúp đỡ?</a>
                </div>
            </div>
            <div className="bg-[#ee4d2d]">
                <div className='containerv2 relative'>
                    <img src={images.backgrornd} alt="" />
                    <div className='absolute h-[484px] w-[400px] bg-[#fff] right-0 top-[60px] rounded-[4px]'>
                        <div className='flex py-[22px] px-[22px] justify-between items-center'>
                            <h2 className='text-[20px] text-[#222222]'>Đăng nhập</h2>
                            <div class="relative border-[2px] border-[#ffbf00] text-[#ffbf00] text-[14px] py-[11px] px-[14px] bg-[#fefaec] mr-4 font-[700] w-[165px]">
                                Đăng nhập với mã QR
                                <div className="absolute top-1/2 right-0 transform translate-x-1/2">
                                    <div className="w-0 h-0 border-r-2 border-t-2 border-yellow-400 transform rotate-45"></div>
                                </div>

                            </div>
                            <img src={images.qrLogin} alt="anh1" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default Login;