import { Fragment, memo } from "react";
import Child1 from "./Child1";
import person1 from "../../../images/person_1.jpg";
import person2 from "../../../images/person_2.jpg";
import person3 from "../../../images/person_3.jpg";
import person4 from "../../../images/person_4.jpg";
import SimpleSlider from "./Slider";

function Section() {
  const person = [
    {
      id: 1,
      position: "Marketing Manager",
      name: "Garreth Smith",
      image: person1,
      description:
        "Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      position: "Interface Designer",
      name: "Garreth Smith",
      image: person2,
      description:
        "Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      position: "UI Designer",
      name: "Garreth Smith",
      image: person3,
      description:
        "Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 4,
      position: "Web Developer",
      name: "Garreth Smith",
      image: person4,
      description:
        "Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blind texts.",
    },
  ];

  return (
    <Fragment>
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <Child1 />
            </div>
            <div className="col-lg-7">
              <div className="heading-section mb-5">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in
                </p>
              </div>
              <div className="">
               <SimpleSlider person = {person} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
