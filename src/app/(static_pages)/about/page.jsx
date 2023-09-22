import styles from './page.module.css';
export const metadata = {
  title: 'About',
  description: "Fox4Shopping is your one-stop destination for a virtual shopping extravaganza! Step into a world of limitless choices where you can browse, select, and purchase a wide array of products from the comfort of your own home. Our imaginative e-shop offers an extensive range of items, from fashion-forward clothing and accessories to cutting-edge electronics and trendy home decor. With user-friendly navigation, secure payment options, and swift delivery services, Fox4Shopping transforms your online shopping experience into a delightful adventure. Explore, shop, and indulge in the convenience of Fox4Shopping today!",
}
export default function About() {
    return (
      <div className={styles.about}>
      <h1>About Fox4Shopping</h1>
      <p>Welcome to Fox4Shopping - your one-stop shop for all things fantastic and foxy!</p>
      <p>We are passionate about delivering high-quality products to our customers with the utmost convenience and satisfaction. Our mission is to make online shopping an enjoyable experience for you.</p>
      <p>Here are some of the key features of Fox4Shopping:</p>
      <ul className={styles.points}>
        <li>1 - Wide range of products from electronics to fashion, all at competitive prices.</li>
        <li>2 - Secure and easy online payment options.</li>
        <li>3 - Fast and reliable shipping to your doorstep.</li>
        <li>4 - 24/7 customer support to assist you with any inquiries or issues.</li>
      </ul>
      <p>Thank you for choosing Fox4Shopping for your shopping needs. We look forward to serving you!</p>
    </div>
    )
  }