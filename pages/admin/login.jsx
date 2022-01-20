import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import { addAuth } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      })
      dispatch(addAuth())
      router.push('/admin')
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="default:admin"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="default:123456"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  )
}

export default Login
