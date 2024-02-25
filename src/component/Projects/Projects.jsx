import './styleProjects.css'

function Projects() {
    return (
        <div className="c-pro">
            <span className='s-b2'>My Project</span>
            <div className="box-b">
                <div className="box-b1">
                    <span className='s-b1'>Individual</span>
                    <span>Ini adalah project yang saya kerjakan secara individu menggunakan HTML, CSS dan JS untuk penilaian UTS</span>
                    <a className='a-1' href="https://github.com/ddavviidbunbun/jethealty.github.io">JetHealty</a>
                </div>
                <div className="box-b1">
                    <span className='s-b1'>Collective</span>
                    <span>Ini adalah project yang saya kerjakan bersama-sama dengan teman saya untuk penilaian UAS, untuk bagian yang saya kerjakan adalah sebagai berikut : <b>Carousel, Navbar, Footer, Reservation Page, Modal</b></span>
                    <a className='a-1' href="https://github.com/AlbertTech23/uas-ssh">SSH</a>
                </div>
            </div>

        </div>
    );
}

export default Projects;