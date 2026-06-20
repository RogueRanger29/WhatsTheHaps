import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import Signinform from './_auth/forms/SigninForm'
import Signupform from './_auth/forms/SignupForm'
import { Home } from './_root/pages'
import './globals.css'
import { Toaster } from './components/ui/toaster'

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path='/sign-in' element={<Signinform/>}/>
                <Route path='/sign-up' element={<Signupform/>}/>
            </Route>
            {/*private routes */}
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
        <Toaster />
    </main>
  )
}

export default App