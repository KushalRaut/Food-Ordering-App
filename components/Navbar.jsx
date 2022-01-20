import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuth } from '../redux/authSlice'
import Link from 'next/link'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  const { isauthticated = false } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(resetAuth())
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href="/">
            <h1 className={styles.name}>Kushal Pizzeria</h1>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact us</li>
        </ul>
      </div>
      {isauthticated ? (
        <Link href="/">
          <button className={styles.loginButton} onClick={logoutHandler}>
            LOGOUT
          </button>
        </Link>
      ) : (
        <Link href="/admin/login">
          <button className={styles.loginButton}>LOGIN</button>
        </Link>
      )}
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />

            <div className={styles.counter}>{`${quantity}`}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
