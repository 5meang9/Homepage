import Header from "./Header"
import Footer from "./Footer"
import '../styles/Layout.scss'


const Layout = (props:{children: React.ReactNode}) => {
  return (
    <div className='layout'>
      <Header /> 
      {/* <Header1 /> */}
      <main className='main'>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout