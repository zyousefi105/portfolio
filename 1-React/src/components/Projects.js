import React from 'react';
import PROJECTS from '../data/projects';
import Header from './Header';
// import profile from '../assets/logo-head-2.jpg';


const Project = props => {
  const { title, image, description, link } = props.project;

  return (
    
    <div style={{  display: 'inline-block', margin: 0, padding: 10, margin_top: 0,
    width: 300, 
    height: 300}}>     
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  )
}

const Projects = () => (
  <div class='test'>
    {/* <p></p>
        <img src={profile} alt='profile' className='profile' />  */}
    <Header />
    <h2>محصولات</h2>
    {/* <div>
      <button >اطلاعات بیشتر</button>
    </div> */}

    <div class="cube">
      {
        PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))
      }
    </div>
  </div>
)

export default Projects;
