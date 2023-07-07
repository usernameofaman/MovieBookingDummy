import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.routes}>
          <Link href="/">
            <div className={styles.route}>Home</div>
          </Link>
          <Link href="/about">
            <div className={styles.route}>About</div>
          </Link>
          <Link href="/services">
            <div className={styles.route}>Services</div>
          </Link>
          <Link href="/contact">
            <div className={styles.route}>Contact</div>
          </Link>
          <div className={styles.profile}>
            <Image src="/profile-icon.png" alt="Profile Icon" width={30} height={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
