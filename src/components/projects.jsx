import React from 'react';
import '../index.css';
import ToggleCode from './toggleCode.jsx';
import VideoPlayer from './videoPlayer.jsx';
import LandingPageVideo from '../assets/landing_page.mp4'
import UserProfileVideo from '../assets/user_profile.mp4'
import QuestionVideo from '../assets/question.mp4'
import ForumVideo from '../assets/forum.mp4'
import LoginImage from '../assets/login.png'
import Slider from './slider.jsx';
import LandingPageSnippet from './landingPageSnippet.jsx'
import HomePageSnippet from './homepageSnippet.jsx'
import QuestionSnippet from './questionSnippet.jsx'
import LoginSnippet from './loginSnippet.jsx'
import UserSnippet from './userSnippet.jsx'

const landingPage = [
  {
    title: "Project Overview",
    description:
      "The PolicyCON landing page was developed as the main entry point for a platform that connects policy analysts with subscribers, helping them make informed decisions. The primary goal was to present information in a structured, user-friendly way while showcasing key sections like 'Popular Analyst Areas' and 'Featured Analysts.' Ensuring clarity and engagement was essential to enhance user interaction.",
  },
  {
    title: "Technologies Used",
    description:
      "I built the PolicyCON landing page using React and TypeScript to create a robust and interactive interface. Tailwind CSS allowed me to design a clean, responsive layout that adapts smoothly across all devices. Starting in Figma, I planned a user-friendly layout that highlights clarity and engagement. For version control, I relied on Git and GitHub, ensuring efficient collaboration and seamless updates. Throughout the process, I focused on user-centered design, making sure each element contributed to an intuitive and enjoyable experience.",
  },
  {
    title: "Development Process",
    description:
      "Development was highly collaborative. I worked closely with the frontend team, providing design feedback and iterating on the visuals to improve clarity and usability. We followed Agile methodology throughout the process to ensure continuous improvements and quick issue resolution. Git and GitHub were used for version control, with frequent code pushes and peer reviews to maintain high-quality code and minimize bugs.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "I focused on making the landing page fully responsive, carefully adapting the layout to work seamlessly on mobile and tablet screen sizes. This process involved optimising each element to maintain a smooth, intuitive experience regardless of the device. My goal was to ensure that users could interact effortlessly with the page, whether they were viewing it on a large desktop monitor or a smaller mobile screen, preserving both functionality and visual appeal across all platforms.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "The project successfully met its goals of providing a structured, visually appealing landing page. The team was able to collaborate effectively using Agile practices, and the end product showcased a polished, responsive design. I gained valuable experience working with TypeScript and React, as well as improved my skills in design feedback and collaboration.",
  },
];
const loginPage = [
  {
    title: "Project Overview",
    description:
      "The PolicyCON login page serves as the main login interface for the forum. It’s designed as a straightforward and secure entry point where users can enter their email and password, along with agreeing to terms and conditions and accepting cookies. This page provides a simple, compliant user experience and integrates seamlessly with the wider PolicyCON platform.",
  },
  {
    title: "Technologies Used",
    description:
      "This project is built with React and Vite, utilising TypeScript for strong typing and structure. Tailwind CSS is used for responsive styling, ensuring adaptability across various screen sizes.",
  },
  {
    title: "Development Process",
    description:
      "The development of this login page focused on creating a simple, secure, and accessible form. I structured the form using React components, then added validation and error handling for the email and password fields. Users can tick two boxes to agree to terms and accept cookies, adding a layer of compliance to the form. I paid particular attention to making it responsive, with design adjustments to suit both desktop and mobile layouts.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "The site is fully responsive across all mobile devices. Using Tailwind CSS, I adjusted the layout, input fields, and button sizes to ensure that the login page is intuitive and functional on any screen size, from large desktops to small mobile screens.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "This project resulted in a lightweight, secure, and easy-to-use login page that integrates smoothly into the PolicyCON platform. It offers a consistent user experience across devices and meets both functional and design requirements. Through this project, I gained practical experience in implementing forms, validating inputs, and handling password fields securely. It also helped me deepen my understanding of responsive design, specifically in crafting a user-friendly login page adaptable to mobile screens.",
  },
];
const forumHomepage = [
  {
    title: "Project Overview",
    description:
      "The forum homepage is designed as a central hub for exploring trending topics, categories, and hashtags within the PolicyCON platform. Users can interact with a search bar to quickly find relevant content, while a tabbed layout allows easy navigation between different sections. This layout offers an intuitive and engaging experience, encouraging users to explore the forum’s content more deeply.",
  },
  {
    title: "Technologies Used",
    description:
      "This project was developed using React, Vite, and TypeScript to create a dynamic and interactive interface. Tailwind CSS was used to style the page responsively, ensuring a consistent appearance across various devices.",
  },
  {
    title: "Development Process",
    description:
      "The development process for the forum homepage involved creating three main components: one for trending topics, another for categories, and a third for hashtags. A search bar component was added to enhance user navigation, along with a tabbed interface that stores topics, categories, and hashtags in an organised manner. I implemented a mapping function to dynamically render content within each section and developed a comment system to increase user interaction.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "Using Tailwind CSS, I ensured that the forum homepage is fully responsive, adapting each component smoothly to mobile and desktop screens. The design is optimised for both small and large devices, maintaining ease of use and accessibility.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "The completed forum homepage provides a visually appealing, easy-to-navigate interface for users to explore and interact with topics, categories, and hashtags. Through this project, I enhanced my skills in using mapping functions to render dynamic content and successfully built a comment system, furthering my understanding of user engagement and interactive features.",
  },
];
const questionPage = [
  {
    title: "Project Overview",
    description:
      "The 'Add Your Question' page on the PolicyCON forum allows users to submit their own questions, making it a key feature for user engagement and community building. The main page displays existing questions, and users can click on 'Add Your Question' to be redirected to a submission form where they can enter details like title, subheading, hashtags, and the body of the question. Users also have the option to attach media files, enriching the content and visual appeal of their posts.",
  },
  {
    title: "Technologies Used",
    description:
      "This page was developed using React, Vite, and TypeScript to build a responsive and interactive experience. Tailwind CSS was used for styling, ensuring a consistent and adaptable design across devices.",
  },
  {
    title: "Development Process",
    description:
      "In developing this page, I used mapping to display questions dynamically on the main screen. When users click 'Add Your Question,' they are redirected to a form designed to capture all necessary details, including title, subheading, hashtags, and the question body. I also added functionality for users to attach media files to their questions, enhancing interactivity and flexibility in content creation.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "The page is fully responsive, with each component adapted for both desktop and mobile use. I used Tailwind CSS to ensure that all interactive elements, such as the form and question list, adjust seamlessly to any screen size, offering a consistent user experience.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "The 'Add Your Question' page successfully encourages user interaction by providing an easy-to-navigate form and intuitive features for question submission. Through this project, I gained experience in using mapping functions to display content dynamically and in building responsive form interfaces that support media file uploads.",
  },
];
const userProfilePage = [
  {
    title: "Project Overview",
    description:
      "The PolicyCON Forum User Profile page is designed to provide users with a detailed and dynamic profile experience. It features an edit mode where users can customise their profile by adding a profile picture, name, occupation, username, and pronouns. After saving changes, users are presented with a live profile view that includes a dynamic chart highlighting their most talked-about topics, along with a section displaying recent activity.",
  },
  {
    title: "Technologies Used",
    description:
      "This profile page was built using React, Vite, and TypeScript, with Tailwind CSS for styling. Recharts was integrated to add a responsive, dynamic chart that visualises the user’s most discussed topics in an engaging way.",
  },
  {
    title: "Development Process",
    description:
      "The development process involved setting up an edit mode with various input fields for user details, including a profile picture upload, name, occupation, username, and pronouns. Once changes are saved, the profile page displays the updated details and includes a Recharts component to dynamically show the user's most talked-about topics. I also integrated a section for recent activity, making the profile interactive and informative.",
  },
  {
    title: "Mobile Responsiveness",
    description:
      "Tailwind CSS was utilised to ensure full responsiveness across mobile and desktop devices. Each element, including the Recharts graphic, adapts smoothly to various screen sizes, maintaining a user-friendly layout on any device.",
  },
  {
    title: "Outcomes & Learnings",
    description:
      "The user profile page provides an engaging, customisable experience, with a clean interface for managing profile information and viewing recent activity. Through this project, I enhanced my skills in using Recharts for data visualisation and improved my ability to build responsive, user-centric profile pages with editable fields and real-time updates.",
  },
];


const Projects = () => (
  <div id='projects' className='flex flex-col items-center justify-center h-auto xs:mt-[5rem] lg:mt-0'>

    <h3 className='mb-[8rem] font-bold text-myBlack lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem]'>
      My Projects
    </h3>

    {/* Project 1 */}
    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-black text-center pb-4'>
        PolicyCON Landing Page
      </h2>
      <h3 className='text-myGrey text-center font-bold text-lg mb-10'>
        React | Vite | TypeScript | Tailwind CSS
      </h3>
    </div>
    <VideoPlayer src={LandingPageVideo} />
    <Slider slides={landingPage} />
    <ToggleCode SnippetComponent={LandingPageSnippet} />

    {/* Project 2 */}
    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-black text-center pb-4'>
        PolicyCON Forum Login Page
      </h2>
      <h3 className='text-myGrey text-center font-bold text-lg mb-10'>
        React | Vite | TypeScript | Tailwind CSS | React Router
      </h3>
    </div>
    <img src={LoginImage} alt='PolicyCON Forum Login Page' className=' w-[1080px] rounded-3xl shadow-lg' />
    <Slider slides={loginPage} />
    <ToggleCode SnippetComponent={LoginSnippet} />

    {/* Project 3 */}
    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-black text-center pb-4'>
        PolicyCON Forum Homepage
      </h2>
      <h3 className='text-myGrey text-center font-bold text-lg mb-10'>
        React | Vite | TypeScript | Tailwind CSS | React Router
      </h3>
    </div>
    <VideoPlayer src={ForumVideo} />
    <Slider slides={forumHomepage} />
    <ToggleCode SnippetComponent={HomePageSnippet} />

    {/* Project 4 */}
    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-black text-center pb-4'>
        PolicyCON Forum "Add Your Question"
      </h2>
      <h3 className='text-myGrey text-center font-bold text-lg mb-10'>
        React | Vite | TypeScript | Tailwind CSS | React Router
      </h3>
    </div>
    <VideoPlayer src={QuestionVideo} />
    <Slider slides={questionPage} />
    <ToggleCode SnippetComponent={QuestionSnippet} />

    {/* Project 5 */}
    <div className='mb-6'>
      <h2 className='text-3xl text-myBlack font-black text-center pb-4'>
        PolicyCON Forum User Profile
      </h2>
      <h3 className='text-myGrey text-center font-bold text-lg mb-10'>
        React | Vite | TypeScript | Tailwind CSS | React Router | Recharts
      </h3>
    </div>
    <VideoPlayer src={UserProfileVideo} />
    <Slider slides={userProfilePage} />
    <ToggleCode SnippetComponent={UserSnippet} />

  </div>
);

export default Projects;
