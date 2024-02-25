import './styleHome.css';
import gambar from '../../assets/Group1.png';

function Home() {
    return (
        <div className='c-home'>
            <div className="pic">
                <img src={gambar} />
            </div>
            <div className="profile">
                <span className='p-1'>Hello, I'm</span>
                <span className='p-2'>David Bunyamin</span>
                <span className='p-3'>19 Years Old</span>
                <span className='p-4'>Frontend Developer</span>
            </div>
        </div>
    )
}

export default Home;