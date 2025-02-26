import { FaClock } from 'react-icons/fa6'
import styles from './MainSection.module.scss'
import avatars from './avatars.png'
import stars from './stars.png'

const MainSection = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.leftSide}>
				<div className={styles.special}>
					<div className={styles.clock}>
						<FaClock size={24} color='white' />
					</div>
					<div className={styles.text}>
						<div className={styles.title}>Специальное предложение</div>
						<div className={styles.desc}>
							Скидка 20% на все смузи до 10 утра – начните день с пользой!
						</div>
					</div>
				</div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.text}>
					<div className={styles.superTitle}>свежее решение для вашего дня</div>
					<div className={styles.title}>
						Красота и <span>польза</span> <br /> в одном стакане!
					</div>
					<div className={styles.subTitle}>
						Ищете идеальный перекус или полезный завтрак? <br />
						Смузи от
						<span> fresh & smoothies</span> — это не только вкусно, но и
						полезно! <br /> Натуральные ингредиенты, яркие вкусы и заряд энергии
						в каждом стакане.
					</div>
				</div>
				<button className={styles.choose}>Выбрать смузи</button>
				<div className={styles.reviews}>
					<div className={styles.avatars}>
						<img src={avatars} alt='' />
					</div>
					<div className={styles.info}>
						<div className={styles.stars}>
							<img src={stars} alt='' />
						</div>
						<div className={styles.amount}>
							<span>1350+</span> отзывов!
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MainSection
