import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-bage-check"></i>
            <div>
              <h3 className="skils__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-bage-check"></i>
            <div>
              <h3 className="skils__name">CSS</h3>
              <span className="skills__level">Medium</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-bage-check"></i>
            <div>
              <h3 className="skils__name">Javascript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-bage-check"></i>
            <div>
              <h3 className="skils__name">React</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
