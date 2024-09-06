import Body from './Body'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Body 
        name="James Peter V. Gonzaga" 
        quoute ="Suffer Now Enjoy Later"
        dob="December 22, 2005" 
        age="18" 
        program="BSCS" 
        isEnrolled={true} 
      />
      <Footer />
    </>
  )
}