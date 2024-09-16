import React from 'react';
import '../index.css'

const About = () => {
    return (
        <section className="about">
            {/* <img src="./assets/images/profile.png" alt="" /> */}
            <div className="about-description">
                <p>Hello, I'm Carlos. I am a front-end developer specialising in JavaScript, driven by a passion for
                    constant learning. My background in retail management has honed my communication and
                    teamwork skills, emphasising my creative problem-solving abilities and adaptability to changes.
                </p>
                <p>
                    I graduated from an extensive coding bootcamp by edX, and earned a certificate
                    in front-end web development. Throughout the four-month program, I successfully balanced my
                    coursework with work commitments, showcasing both quick learning abilities and a strong commitment
                    to continuous improvement.
                </p>
                <p>
                    Detail-oriented and highly motivated, I derive satisfaction from coding efficient and responsive
                    websites. I am eager to contribute my diverse skill set to dynamic development projects,
                    demonstrating an unwavering commitment to excellence.
                </p>
                <div class="button">
                    <button><a class="resume" href="./assets/docs/carlos-borrega_frontend-developer_resume.pdf"
                        download="carlos-borrega_frontend-developer_resume">Download my resume</a></button>
                </div>
            </div>
        </section>
    );
};

export default About;
