import React, { useState } from 'react';
import menuItems from '../data/menuData';
import styles from './Menu.module.css'; 

const categories = ['Todos', 'Café', 'Pasteles', 'Bebidas'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredItems =
    selectedCategory === 'Todos'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className={styles.menuSection}>
      <h2 className={styles.title}>Nuestro Menú</h2>

      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.productsGrid}>
        {filteredItems.map(({ id, name, description, price, image }) => (
          <div key={id} className={styles.productCard}>
            <img src={image} alt={name} className={styles.productImage} />
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productDescription}>{description}</p>
            <p className={styles.productPrice}>{price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;


