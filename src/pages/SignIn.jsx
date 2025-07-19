import React from 'react'

const SignIn = () => {
  return (

    <div className='p-4 py-12 md:py-4 px-2 lg:px-8 xl:px-32 inter-500 min-h-[80vh]'>
      <div className="h-full p-4 flex justify-center md:bg-gray-100 rounded-xl">
        <div className="w-full  md:w-1/3">
          <div className="text-3xl text-center font-bold">Giriş Yap</div>
          <div className="text-sm text-gray-500 text-center mt-1">Giriş yapmak için mail ve şifrenizi giriniz.</div>
          <form className='mt-8 flex flex-col gap-4'>
            <div>
              <div className="text-gray-500 text-sm">Email</div>
              <input name='email' type="text" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='örnek@gmail.com' />
            </div>
            <div>
              <div className="text-gray-500 text-sm">Şifre</div>
              <input name='password' type="password" className='p-2 outline-none bg-white rounded-lg border border-gray-200 w-full' placeholder='******' />
            </div>
            <a href='/forgot-password' className="text-right text-sm text-[var(--primary)]">Şifrenizi mi unuttunuz?</a>
            <button type="submit" className="bg-[var(--primary)] rounded-lg p-3 text-white cursor-pointer hover:bg-[var(--primary-light)] duration-200">Giriş Yap</button>
          </form>
          <div className="flex gap-2 items-center my-4">
            <div className='h-[1px] bg-gray-300 w-full'></div>
            <span className='text-gray-700 font-bold text-sm'>VEYA</span>
            <div className='h-[1px] bg-gray-300 w-full'></div>
          </div>
          <button type="submit" className="bg-white border border-gray-200 w-full flex items-center gap-2 justify-center rounded-lg p-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Google ile Giriş Yap</span>
          </button>
          <button type="submit" className="bg-white border mt-4 border-gray-200 w-full flex items-center gap-2 justify-center rounded-lg p-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
            </svg>
            <span>Facebook ile Giriş Yap</span>
          </button>
          <div className="mt-4">
            <div className='text-center'>Hesabın yok mu? <a href='/signup' className="text-[var(--primary)]">Üye Ol!</a></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignIn