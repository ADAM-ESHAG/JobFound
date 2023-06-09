import { Logo } from '../components'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo />
        </nav>
        <div className="container page">
            {/* Info */}
            <div className='info'>
                <h1>job<span> tracking</span> app</h1>
                <p>I'm baby viral post-ironic coloring book, chillwave lo-fi bushwick lumbersexual microdosing flexitarian biodiesel chartreuse YOLO. Squid ugh wayfarers gorpcore air plant.</p>
                <Link to="/register" className="btn btn-hero">Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}



export default Landing