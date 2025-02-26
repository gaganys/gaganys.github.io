import styles from './Header.module.scss'
import image from './address.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<span className={styles.fresh}>fresh </span>&
				<span className={styles.smoothies}> smoothies</span>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.item}>Каталог смузи</li>
					<li className={styles.item}>Десерты</li>
					<li className={styles.item}>Как готовим</li>
					<li className={styles.item}>Отзывы</li>
					<li className={styles.item}>Как заказать</li>
				</ul>
			</nav>
			<div className={styles.addressBlock}>
				<img src={image} alt='O' />
				<div className={styles.address}>
					Москва,<br/>Профсоюзная, 102
				</div>
			</div>
		</header>
	)
}

export default Header
