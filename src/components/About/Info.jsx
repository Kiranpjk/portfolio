import React from 'react'

const Info = () => {
  return (
<div className="about__info grid">
    <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experince
        </h3>
            <span className="about__subtitle">
           developed a movie streaming website
            </span>
                 
    </div>
    <div className="about__box">
        <i class="bx bx-briefcase-alt about __icon"></i>
        <h3 className="about__title">Completed</h3>
    <span className="about__subtitle">CSE</span>
    </div>
    <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
    <span className="about__subtitle">Online 2 4</span>
    </div>
</div>
  )
}

export default Info