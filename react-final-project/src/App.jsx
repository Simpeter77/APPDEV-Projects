import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './components/Home'
import About from './components/About'
import Developer from './components/Developer'
import Products from './components/Products'
import Profile from './components/Profile'
import Showcase from './components/Showcase'
import Reviews from './components/Reviews'
function App() {
  const vmo = [
    {id: 1, name: "Mission", description:[
        "To deliver innovative, high-quality mechanical keyboards that cater to the diverse needs of office workers and PC enthusiasts, enhancing productivity and user experience through superior craftsmanship and thoughtful design."
    ]},
    {id: 2, name: "Vision", description:[
        "To be the leading global provider of cutting-edge mechanical keyboards, inspiring creativity and passion in the digital age while fostering a community of keyboard enthusiasts and professionals"
    ]},
    {id: 3, name: "Objectives",description: [ "Quality Excellence: Continuously improve the quality and durability of our keyboards by integrating the latest technologies and premium materials.", "Customer Satisfaction: Ensure exceptional customer experiences by offering personalized service, comprehensive product manuals, and responsive support.", "Innovative Designs: Stay at the forefront of design innovation by regularly introducing new and unique artisan keyboard designs that capture the essence of creativity and functionality.", "Community Engagement: Build and nurture a vibrant community of keyboard enthusiasts by encouraging feedback, showcasing user reviews, and fostering meaningful connections through our digital platforms.", "Sustainable Practices: Commit to environmentally responsible practices in our manufacturing processes and product lifecycle, promoting sustainability in all aspects of our business.", "Employee Development: Invest in the growth and development of our employees by providing continuous learning opportunities and fostering a supportive and collaborative work environment.", "Global Reach: Expand our market presence globally by establishing strong partnerships and leveraging digital channels to reach a wider audience.", "Innovation and Adaptability: Embrace change and innovation, continuously adapting to market trends and customer needs to remain a leader in the industry." ]}
]
  return (
    <>
       <Navigation/>
       <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About item = {vmo}/>}/>
        <Route path ="/developer" element={<Developer/>}/>
        <Route path ="/products" element={<Products/>}/>
        <Route path ="/reviews" element={<Reviews/>}/>
        <Route path ="/profile" element={<Profile/>}/>
        <Route path ="/showcase" element={<Showcase/>}/>
       </Routes>
    </>
  )
}

export default App
