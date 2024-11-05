import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/pr5.png';
import IMG2 from '../../assets/pr1.png';
import IMG3 from '../../assets/pr2.png';
import IMG4 from '../../assets/pr3.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'BookHive',
    github: 'https://github.com/ritikchhimwal/BookStore-Complete',
    demo: 'https://bookhiive.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Tracker',
    github: 'https://github.com/ritikchhimwal/CryptoApp',
    demo: 'https://cryptowebapplication.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Article Summarizer',
    github: 'https://github.com/ritikchhimwal/article_summarizer',
    demo: 'https://arliclesumm.netlify.app/'
  },
  {
    id: 4,
    image: IMG4, // Use the new image
    title: 'Bank Web',
    github: 'https://github.com/ritikchhimwal/ResponsiveBankWebApp',
    demo: 'https://bankresponsiveweb.netlify.app/'
  },

];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default RecentWork;
