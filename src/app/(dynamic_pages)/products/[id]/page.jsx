import styles from './page.module.css';
import Image from 'next/image';
import image from '/public/images/Products.jpeg'

async function getData(id) {
    const res = await fetch('https://dummyjson.com/products/' + id);

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export async function generateMetadata({params: {id}}) {
    const  product  = await getData(id)
    return {
        title: `${product.title}`,
        description: `${product.description}`,
    }
}

export default async function Post({params:{id}}) {
    const  product  = await getData(id)
    console.log(product)
    return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.description}>{product.description}S</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    className= {styles.image}
                    src= {product.thumbnail}
                    alt= {product.title}
                    fill= {true}
                />
                <span className={styles.category}>{product.category}</span>
            </div>
        </header>
        <div className={styles.content}>

            <div className={styles.gallery}>
                {
                    product.images.map(image => (
                        <Image
                            key={product.id}
                            src={image}
                            alt={product.title}
                            width={100}
                            height={100}
                        />
                    ))
                }
            </div>

            <p className={styles.text}>
                {product.description}
            </p>
        </div>
    </div>
    )
}
