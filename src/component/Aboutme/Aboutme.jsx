import './styleAboutme.css';

function Aboutme() {
    return (
        <div className="c-aboutme">
            <span className='s-2'>Get to know more</span>
            <span className='s-1'>About Me</span>
            <div className="kotak">
                <div className="box-1">
                    <span className='s-3'>Experience</span>
                    <span className='s-4'>Pengalaman saya ketika menjadi Frontend developer pada saat mengerjakan tugas kelompok maupun individu untuk mata kuliah PTI</span>
                </div>
                <div className="box-2">
                    <span className='s-3'>Major</span>
                    <span className='s-4'>Saat ini saya mengambil jurusan Teknik Komputer angkatan 2022</span>
                </div>
                <div className="box-3">
                    <span className='s-3'>Hobies</span>
                    <span className='s-4'>Hobi saya yang biasa dilakukan pada waktu senggang adalah menggambar dan bermain game</span>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;