import './styleSkills.css';

function Skills() {
    return (
        <div className="c-skills">
            <span className='s-a1'>My skills</span>
            <span className='s-a2'>Skills</span>
            <div className="box-a">
                <div className="box-a1">
                    <span className='s-a3'>Programming Skills</span>
                    <div className="box-a3">
                        <span className='s-a4 c'>C</span>
                        <span className='s-a4 c'>Java</span>
                        <span className='s-a4 c1'>JavaScript</span>
                        <span className='s-a4 c'>HTML</span>
                        <span className='s-a4 c'>CSS</span>
                        <span className='s-a4 c2'>JS Library : React</span>
                        <span className='s-a4 c'>SQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;