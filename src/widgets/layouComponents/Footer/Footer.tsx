import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Section */}
        <div className={styles.footerSection}>
          <h3>Алматы</h3>
          <div>
            <p>Частным лицам</p>
            <Link href='tel:+7273327722'>+7 (727) 332-77-22</Link>
            <p>Бизнесу</p>
            <Link href='tel:+7273306068'>+7 (727) 330-60-68</Link>
          </div>
          <div className={styles.socialIcons}>
            {/* Add social icons here if needed */}
          </div>
        </div>

        {/* Product Links */}
        <div className={styles.footerSection}>
          <h3>Product</h3>
          <Link href='#'>Overview</Link>
          <Link href='#'>Features</Link>
          <Link href='#'>Solutions</Link>
          <Link href='#'>Tutorials</Link>
          <Link href='#'>Pricing</Link>
          <Link href='#'>Releases</Link>
        </div>

        {/* Company Links */}
        <div className={styles.footerSection}>
          <h3>Company</h3>
          <Link href='#'>About us</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Press</Link>
          <Link href='#'>News</Link>
          <Link href='#'>Media kit</Link>
          <Link href='#'>Contact</Link>
        </div>

        {/* Resources Links */}
        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <Link href='#'>About us</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Press</Link>
          <Link href='#'>News</Link>
          <Link href='#'>Media kit</Link>
          <Link href='#'>Contact</Link>
        </div>
        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <Link href='#'>About us</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Press</Link>
          <Link href='#'>News</Link>
          <Link href='#'>Media kit</Link>
          <Link href='#'>Contact</Link>
        </div>
        <div className={styles.footerSection}>
          <h3>Resources</h3>
          <Link href='#'>About us</Link>
          <Link href='#'>Careers</Link>
          <Link href='#'>Press</Link>
          <Link href='#'>News</Link>
          <Link href='#'>Media kit</Link>
          <Link href='#'>Contact</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>&copy; 2077 Untitled UI. All rights reserved.</p>
        <div className={styles.socialIcons}>{/* Add social icons here if needed */}</div>
      </div>
    </footer>
  );
};

export default Footer;
