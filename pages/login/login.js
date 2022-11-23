import React, { useState } from 'react'

const Login = () => {

  const [login, setLogin] = useState(true)
  function handleswtich() {
    if(login){setLogin(false)}
    else{setLogin(true)}
  }


  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (e) => {
      if (e.target.name == 'name') {
          setName(e.target.value)
      }
      else if (e.target.name == 'email') {
          setEmail(e.target.value)
      }
      else if (e.target.name == 'password') {
          setPassword(e.target.value)
      }
  }
  const handleSingin = async (e) => {
      e.preventDefault();

      const data = { name, email, password }

          let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/autentication`, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(data),
          })

          let response = await res.json();
          setName('')
          setEmail('')
          setPassword('')

          if (response.login) {
              localStorage.setItem('token', response.token);
              setTimeout(() => {
                  setuser(response.token)
              }, 500);
          }
          else {
              console.log("error")
          }

  
  }
  const handlelogin = async (e) => {

      e.preventDefault();
      let data = { email, password }
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(data),
      })

      let response = await res.json();
      
      setEmail('')
      setPassword('')
      if (response.login) {
          localStorage.setItem('token', response.token);
          setTimeout(() => {

              setuser(response.token)
          }, 3000);

      }
      else {
          console.log("error")
      }

  }



  return (
    
    <div >
      {login?
      <div className='login flex flex-col items-center mb-20 text-white justify-center'>

      <h1 class="font-bold text-3xl mt-20 ">Welcome Back</h1>
      <form class="flex flex-col items-center mb-20 justify-center bg-transparent rounded shadow-lg p-12 " action="">

        <label class="font-semibold text-xs" for="usernameField">Username or Email</label>
        <input onClick={()=>{handleChange()}} class="text-black h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name='email' type="text" />

        <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
        <input onClick={()=>{handleChange()}} class="text-black h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name='passsword' type="password" />

        <button class="h-12 px-6 w-80 bg-red-600 mt-8 rounded font-semibold text-sm text-red-100 hover:bg-red-700">Login</button>

        <div class="flex mt-6 justify-left text-xs">
          <a class="text-red-400 hover:text-red-500" href="#">Forgot Password</a>
        </div>
        <div class="flex mt-6 justify-left text-xs text-white">
          New User<span class="mx-2 text-gray-300">?</span>
          <a onClick={()=>{handleswtich()}} class="text-red-400 hover:text-red-500" href="#">Create account</a>
        </div>
      </form>


      </div>
      :

      <div className='sing in flex flex-col items-center mb-20 justify-center text-white'>

      <h1 class="font-bold text-3xl mt-20 ">Sing in here</h1>
      <form class="flex flex-col items-center mb-20 justify-center bg-transparent rounded shadow-lg p-12 " action="">

        <label class="font-semibold text-xs" for="usernameField">Username</label>
        <input onClick={()=>{handleChange()}}  class="text-black h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name='name' type="text" />

        <label class="font-semibold text-xs" for="emailField">email</label>
        <input onClick={()=>{handleChange()}} class="text-black h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name='email' type="email" />

        <label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
        <input onClick={()=>{handleChange()}} class="text-black h-12 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name='password' type="password" />

        <button class="h-12 px-6 w-80 bg-red-600 mt-8 rounded font-semibold text-sm text-red-100 hover:bg-red-700">Singin</button>

        <div class="flex mt-6 justify-left text-xs text-white">
          Already have an account<span class="mx-2 text-gray-300">?</span>
          <a onClick={()=>{handleswtich()}} class="text-red-400 hover:text-red-500" href="#">login</a>
        </div>
      </form>


      </div>
  }
    </div>
  )
}

export default Login