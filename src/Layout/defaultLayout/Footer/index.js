import styles from "./footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles)

function Footer() {
    return <aside className={cx("wrapper")}>
        <div className=" pt-12 container mt-5">
            <ul className="grid grid-cols-5 ">
                <li>
                    <h3 className = "text-[12px] text-[#000000de] font-[700] mt-5 mb-5">
                        CHĂM SÓC KHÁCH HÀNG
                    </h3>
                    <ul className="flex-col">
                        <li className = "text-[12px] text-[#333] mb-2">
                            Trung Tâm Trợ Giúp

                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Shopee Blog
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Shopee Mall
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Hướng Dẫn Mua Hàng
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Hướng Dẫn Bán Hàng
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Thanh Toán
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Shopee Xu
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Vận Chuyển
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Trả Hàng & Hoàn Tiền
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chăm Sóc Khách Hàng

                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chính Sách Bảo Hành

                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className = "text-[12px] text-[#000000de] font-[700] mt-5">
                            VỀ SHOPEE
                    </h3>
                    <ul className="flex-col">
                    <li className = "text-[12px] text-[#333] mb-2">
                            Giới Thiệu Về Shopee Việt Nam

                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Tuyển Dụng
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Điều Khoản Shopee
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chính Sách Bảo Mật
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chính Hãng
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Kênh Người Bán
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Flash Sales
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chương Trình Tiếp Thị Liên Kết Shopee
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Trả Hàng & Hoàn Tiền
                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chăm Sóc Khách Hàng

                        </li>
                        <li className = "text-[12px] text-[#333] mb-2">
                            Chính Sách Bảo Hành

                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className = "text-[12px] text-[#000000de] font-[700] mt-5">
                        THANH TOÁN
                    </h3>
                    <ul className="flex-col">
                        <li>

                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className = "text-[12px] text-[#000000de] font-[700] mt-5">
                        THEO DÕI CHÚNG TÔI TRÊN
                    </h3>
                    <ul className="flex-col">
                        <li>

                        </li>
                    </ul>
                </li>
                <li>
                    <h3 className = "text-[12px] text-[#000000de] font-[700] mt-5">
                        TẢI ỨNG DỤNG SHOPEE NGAY THÔI
                    </h3>
                    <ul className="flex-col">
                        <li>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>;
}

export default Footer;