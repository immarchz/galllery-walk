import Image from 'next/image'
"use client"
const LoginButton = () => {
  return (
    <button
    disabled={false}
    type={"button"}
    className={`login-btn`}
    onClick={()=>{}}
    >
      <span className={`flex-1 text-white`}>
        Login
      </span>
    </button>
  )
}

export default LoginButton