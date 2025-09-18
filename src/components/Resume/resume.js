import React from 'react'
import './resume.css';

const resume = () => {
  return (
    <section id='resume'>
       <h1 className='resume-title2'>My Work <strong>Experience</strong></h1>
       <div className='resume-details'>
        <div className='resume-detail-right'>
            <div className='resume-detail'>
                <p>May 25 - Present</p>
                <h3>Wordpress Developer</h3>
                <p>Adalat Group</p>
            </div>
            <div className='resume-detail'>
                <p>October 24 - April 25</p>
                <h3>Wordpress & Shopify Developer</h3>
                <p>Marten Digitals</p>
            </div>
        </div>
        <div className='resume-details-left'>
            <div className='resume-detail'>
                <p>October 23 - February 24</p>
                <h3>Wordpress Developer</h3>
                <p>TAG Group</p>
            </div>   
            </div>
        </div>
    </section>
  )
}

export default resume
