import React from 'react';
import './skills.css';
import wordpress from '../../../assets/wordpress.webp';
import shopify from '../../../assets/shopify.png';
import frontend from '../../../assets/frontend.webp';

const skills = () => {
  return (
   <section id='skills'> 
   <h1 className='skill-title'> What I <strong>Do?</strong></h1>
   <p className='skill-description'>I'm a web developer with 1+ year of experience in WordPress, Shopify, and front-end development. I build clean, responsive websites that perform well and look great. Whether it's customizing WordPress, creating Shopify stores with Liquid, or handling HTML, CSS, JavaScript, and Tailwind. I focus on smooth, user-friendly experiences.</p>
   <div className='skill-bars'>
    <div className='skillbar'>
        <img src={wordpress} alt='Wordpress icon' className='skillbar-img'/>
        <div className='skill-bar-text'>
            <h2>Wordpress Development</h2>
            <p>I'm a WordPress developer with more than 1 year of experience building and customizing websites using themes, plugins, and page builders like Elementor, Divi and WPBakery. I focus on creating responsive, fast, and user-friendly sites that are easy to manage and tailored to each client's needs.</p>
        </div>
    </div>
    <div className='skillbar'>
        <img src={shopify} alt='Shopify icon' className='skillbar-img' />
        <div className='skill-bar-text'>
            <h2>Shopify Development</h2>
            <p>I work with Shopify’s Liquid templating language to build custom themes, tweak layouts, and add functionality tailored to each brand’s needs. From design adjustments to app integration and performance optimization, I focus on building clean, responsive, and conversion-friendly Shopify storefronts.</p>
        </div>
    </div>
    <div className='skillbar'>
        <img src={frontend} alt='Frontend icon' className='skillbar-img'/>
        <div className='skill-bar-text'>
            <h2>Front-end Development</h2>
            <p> I'm currently deepening my knowledge of React to strengthen my skills in building interactive, modern web interfaces. I focus on writing clean, responsive code and creating user-friendly designs that work seamlessly across devices.</p>
        </div>
    </div>
   </div>
   </section>
  )
}

export default skills
