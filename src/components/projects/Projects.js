import classes from "./Project.module.css";
import "animate.css";
import ProjectItem from "./ProjectItem";
import robo from "../../assets/png/modifingrobo.png";
export const Projects = () => {
  const projects = [
    {
      title: "Mango Seller and Customer",
      class: "",
      keys: ["Animations", "Custom Hooks", "HOC"],
      description: [
        "Seller can add the products easily with pics of their product.",
        "On basis of Customers Likes and dislikes the Ratting of product increase or decrease.",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(101).png?alt=media&token=2409077d-f7f1-40f9-a7d8-6fdbad8d861a",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(103).png?alt=media&token=1e570568-e78b-4aed-8e50-1ef677d925a0",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(103).png?alt=media&token=1e570568-e78b-4aed-8e50-1ef677d925a0",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(93).png?alt=media&token=b47dc1f4-18d4-4174-82b1-42d36985eb71",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(95).png?alt=media&token=ca09f2c3-92e8-4caa-a791-655c8cf79fba",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(97).png?alt=media&token=f0386fa7-9a44-4a96-991d-7b1b753c71cf",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmango%2FScreenshot%20(98).png?alt=media&token=7ac095c0-5227-4452-a01e-e30da285b21f",
      ],
    },
    {
      title: "Mail Box Client",
      keys: ["Realtime Mails", "Firebase", "Redux", "GitHub"],
      class: "",
      description: [
        "Made realtime Emails using setTimeout to reload data from server.",
        "If new mail received a blue mark will shown on inbox automatically and will show no of unread emails.",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmailbox%2FScreenshot%20(75).png?alt=media&token=92d7e7ae-e6de-403f-9f6b-9a921734b1ae",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmailbox%2FScreenshot%20(83).png?alt=media&token=ce5e821e-cb53-4daa-a3a8-4623eb0f9fe8",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmailbox%2FScreenshot%20(84).png?alt=media&token=23357b35-5c00-4eb6-9b85-7711ee308766",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fmailbox%2FScreenshot%20(92).png?alt=media&token=8caffce0-9ea8-4712-bdbe-bd13f7f33aa2",
      ],
    },
    {
      title: "Expense Tracker",
      keys: ["Premium", "Firebase", "Git", "Authentication"],
      class: "",
      description: [
        "user can save their expenses for lifetime,Verify email and forgot password functions are available.",
        "Dark mode and Downloading the expenses in the form of excel format.",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fexpense%2FScreenshot%20(82).png?alt=media&token=72ff63b5-b5c0-4f7a-a602-4dc90f55b915",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fexpense%2FScreenshot%20(80).png?alt=media&token=269880a0-d497-403e-8f1f-b66ed1f9ef30",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fexpense%2FScreenshot%20(78).png?alt=media&token=8ed61429-bdd4-4489-b433-ab5e94bc37eb",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fexpense%2FScreenshot%20(77).png?alt=media&token=c232d78f-6420-4b19-af72-5019acd07008",
      ],
    },
    {
      title: "E-Commerce website",
      keys: ["Context API", "ReactJs", "CSS", "React Router"],
      class: "",
      description: [
        "Firebase is used for authentication, account remains login till the validity of token.",
        "User Specific cart for each user where user can add their products",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fecom%2FScreenshot%20(90).png?alt=media&token=f48f0380-ea53-43d4-8bac-fd6d17fc2d5b",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fecom%2FScreenshot%20(89).png?alt=media&token=0e2574d2-f64b-4ef6-8401-0b20b559db1c",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fecom%2FScreenshot%20(88).png?alt=media&token=794a9274-7482-4d77-8baf-3cab59dfa2ea",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/react%2Fecom%2FScreenshot%20(86).png?alt=media&token=cc45a012-7475-45ef-a9aa-cc77f3f63e2d",
      ],
    },

    {
      title: "Expense Backend",
      keys: ["ExpressJs", "NodeJs", "JWT", "bcrypt"],
      class: "",
      description: [
        "Premium feature of leaderboard where the users with high expense will shown",
        "Payments accepted using RazorPay",
        "Forogt password mail facility made available",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Ffexpense%2FScreenshot%20(117).png?alt=media&token=9abcf769-34fe-44ac-bd49-64ad98593be5",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Ffexpense%2FScreenshot%20(118).png?alt=media&token=a4fccee6-cd2b-49c0-b9fa-49d06ab553a4",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Ffexpense%2FScreenshot%20(119).png?alt=media&token=2a985c96-3776-42cb-be87-da7650294cbb",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Ffexpense%2FScreenshot%20(120).png?alt=media&token=2fd3f8f7-364a-4aef-ac1d-e6ff049b25cf",
      ],
    },
    {
      title: "Meetups NextJs fullstack app",
      keys: ["NextJs", "MongoDB", " Dynamic Pages"],
      class: "",
      description: [
        "NextJs full stack application created to add meetups",
        "MongoDB database is used to store data, Dynamic routes and server side rendering",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Fmeetup%2FScreenshot%20(111).png?alt=media&token=c8e1cef0-968d-44ef-9811-c81494f02c97",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Fmeetup%2FScreenshot%20(112).png?alt=media&token=1a76201f-b3d4-41d2-8cbf-38788ec1a63c",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/fullstack%2Fmeetup%2FScreenshot%20(110).png?alt=media&token=33242c1a-2f1c-461c-899c-0e7c5835c7f1",
      ],
    },

    {
      title: "ChatGPT for YouTube.com",
      keys: ["Manifest", "Animations", "Axios", "ReactJs"],
      class: "",
      description: [
        "This Extension is created using ReactJs, animations are used to animate the screen and have nice user experience",
        "Manifest file created to insert the component if find matches in website",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/chromeextension%2Fchatgptonyoutube%2FScreenshot%20(109).png?alt=media&token=9e23c5b9-466b-4513-b40c-fca7269048fe",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/chromeextension%2Fchatgptonyoutube%2FScreenshot%20(108).png?alt=media&token=fb60547b-4151-462d-b033-75309ea145f5",
      ],
    },
    {
      title: "Dark Mode Extension for Sharpener",
      keys: ["Darkmode", "HTML", "CSS"],
      class: "",
      description: [
        "Manifest.json file to insert file of css",
        "Helpful for the people who is using Sharpener. can easily make pages dark",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/chromeextension%2Fsharpener_darkmode%2FScreenshot%20(74).png?alt=media&token=28bab14b-22de-441b-8117-6b4e09117791",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/chromeextension%2Fsharpener_darkmode%2FScreenshot%20(73).png?alt=media&token=050220e4-4919-4722-bb6a-37bab9f08201",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/chromeextension%2Fsharpener_darkmode%2FScreenshot%20(70).png?alt=media&token=f7382a30-1d52-4b65-92b1-671f43a4bf1b",
      ],
    },

    {
      title: "dummy",
      keys: [],
      class: "vis",
      description: [
        "Frontend using HTML css and JavaScript",
        "SQL queries used to store and retrive data from database",
        "mySql database is used for storing the data",
      ],
      imgUrl: [""],
    },
    {
      title: "Admin Panel",
      keys: ["Sequelize", "SQL", "mySql", "Routes"],
      class: "",
      description: [
        "Created routes and then controllers for the routes with models",
        "SQL queries are handled by Sequelize library",
        "mySql database is used for storing the database",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/express%2FScreenshot%20(115).png?alt=media&token=363091ce-df19-45c2-be2c-accc4e8c44dd",
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/express%2FScreenshot%20(116).png?alt=media&token=b774ea07-9362-4ad1-b5a9-0567b417d78f",
      ],
    },
    {
      title: "Book a Call",
      keys: ["HTML", "CSS", "JavaScript", "ExpressJs"],
      class: "",
      description: [
        "Frontend using HTML css and JavaScript",
        "SQL queries used to store and retrive data from database",
        "mySql database is used for storing the data",
      ],
      imgUrl: [
        "https://firebasestorage.googleapis.com/v0/b/mailbox-de8bb.appspot.com/o/express%2FScreenshot%20(121).png?alt=media&token=22d1046f-3e56-4efa-a17c-ebe4ac5a9acc",
      ],
    },
    {
      title: "dummy2",
      keys: [],
      class: "vist",
      description: [
        "Frontend using HTML css and JavaScript",
        "SQL queries used to store and retrive data from database",
        "mySql database is used for storing the data",
      ],
      imgUrl: [robo],
    },
  ];

  return (
    <section className={classes.project} id="projects">
      <h2>Projects</h2>
      <div className={classes.flex}>
        {projects.map((e) => {
          return <ProjectItem key={e.type} e={e} />;
        })}
      </div>
    </section>
  );
};
