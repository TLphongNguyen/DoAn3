import styles from "./footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Footer() {
    return <aside className={cx("wrapper")}>
        <h2>footer</h2>
    </aside>;
}

export default Footer;