import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt='jobfound' className="logo" />
        </nav>
        <div className="container page">
            {/* Info */}
            <div className='info'>
                <h1>job<pan>tracking</pan> app</h1>
                <p>I'm baby viral post-ironic coloring book, chillwave lo-fi bushwick lumbersexual microdosing flexitarian biodiesel chartreuse YOLO. Squid ugh wayfarers gorpcore air plant.</p>
                <button className="btn btn-hero">Login/Register</button>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </main>
  )
}

export default Landing