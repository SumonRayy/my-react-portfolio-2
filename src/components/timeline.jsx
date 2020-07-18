import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Developer at Interior Traffic{" "}
                          <span>2020-present</span>
                        </h2>
                        <p>
                          I recently have joined the Interior Traffic as a
                          Fullstack Website Developer. I've to Build an entire
                          Web application totally on my own. I've used
                          Technolgies Like Wordpress , Elementor etc. &
                          Languages Like pHp , css , MySql .{" "}
                          <a href="https://interiortraffic.com/">
                            InteriorTraffic.com
                          </a>{" "}
                          is a place where You not only get the best & Latest
                          Interior Design/Appliance ideas for Your Modern
                          Luxurious Dream Home but also You get the Latest &
                          Hottest Deals from World’s Leading Digital
                          Marketplaces Shipping from Worldwide to Your Doorstep.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Diploma Holder from Kanyapur Polytechnic
                          <span> 2017-2020</span>
                        </h2>
                        <p>
                          I am pursuing my Diploma studies with major in
                          DCST(Diploma in Comuter Science and Technology). I
                          have taken courses like DSA, OOPs, Computer Networks,
                          IOT, Web-Data Management over the years and have
                          better understanding of these subjects.I have also
                          been part of C.R.(Class Representative) since my first
                          year of college and T.P.R(Training and Placements
                          Representative).
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2005-2017</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics, Chemistry & Maths with .
                          During my time at school, I have developed interest in
                          solving complex problems of the fundamental physics
                          which helped me to improve my understanding of any
                          problem and also my mathematics was my most Favourite
                          subject which helped me alot to Build my Career.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
