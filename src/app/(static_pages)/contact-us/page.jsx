import Button from '@/components/Button/Button';
import styles from './page.module.css';
export const metadata = {
  title: 'Contact',
  description: "Fox4Shopping is your one-stop destination for a virtual shopping extravaganza! Step into a world of limitless choices where you can browse, select, and purchase a wide array of products from the comfort of your own home. Our imaginative e-shop offers an extensive range of items, from fashion-forward clothing and accessories to cutting-edge electronics and trendy home decor. With user-friendly navigation, secure payment options, and swift delivery services, Fox4Shopping transforms your online shopping experience into a delightful adventure. Explore, shop, and indulge in the convenience of Fox4Shopping today!",
}
export default function Contact() {
    return (
      <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions, concerns, or feedback? We&apos;d love to hear from you!</p>

      {/* Contact Form */}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name </label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message </label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className={styles.btn}>
        <Button>Send</Button>
        </div>
      </form>
    </div>
    )
  }
  