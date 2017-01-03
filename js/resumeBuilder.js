// var formattedName = HTMLheaderName.replace("%data%", "Praneeth Yenugutala");
// var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
    "name": "Praneeth",
    "role": "Software Engineer",
    "welcomeMessage": "Welcome to my online resume!",
    "biopic": "images/mine.jpg",
    "contacts": {
        "linkedin": ["praneethy91", "https://www.linkedin.com/in/praneethy91"],
        "email": ["praneeth@nyu.edu", "mailto:praneeth@nyu.edu"],
        "github": ["praneethy91", "https://github.com/praneethy91"],
        "twitter": ["@praneethy91", "https://twitter.com/praneethy91"],
        "location": ["New York", "https://goo.gl/maps/4b1ML6pYkqB2"]
    },
    "skills": ["Java", "Python", "C#" , "Scala", "HTML", "CSS", "Javascript"]
};

// var formattedLinkedIn = HTMLcontactGeneric.replace("%data%", bio.contacts.linkedin[0]).replace("%contact%", "LinkedIn").replace("%link%", bio.contacts.linkedin[1]);
// $("#topContacts").append(formattedLinkedIn);

// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email[0]).replace("%link%", bio.contacts.email[1]);
// $("#topContacts").append(formattedEmail);

// var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github[0]).replace("%link%", bio.contacts.github[1]);
// $("#topContacts").append(formattedGitHub);

// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter[0]).replace("%link%", bio.contacts.twitter[1]);
// $("#topContacts").append(formattedTwitter);

// var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location[0]).replace("%link%", bio.contacts.location[1]);
// $("#topContacts").append(formattedlocation);

// var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
// $("#header").append(formattedBiopic);

// var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// $("#header").append(formattedWelcomeMessage);

// $("#header").append(HTMLskillsStart);

// for(var i = 0; i < bio.skills.length; i++) {
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
//     $("#skills").append(formattedSkill);
// }

// var work = {};
// work.position = "Software Development Engineer";
// work.employer = "Microsoft Corporation";
// work.years = 3;

// var education = {};
// education["name"] = "New York University";
// education["years"] = "2016-2018";
// education["city"] = "New York, NY, US"

var work = {
    jobs: [{
            "employer": "Microsoft Corporation",
            "title": "Software Development Engineer",
            "location": "Hyderabad, India",
            "dates": "Jun 2013- Jul 2016",
            "description": "Worked in Visual Studio Delivery Tools under Release Management team.\
            Architected and coded a backend deployment service to parse and run custom user scripts,\
            returning useful logging and diagnostic data on dynamically provisioned cloud, on premise\
            and hybrid environments."
        },
        {
            "employer": "Microsoft Corporation",
            "title": "Software Developer Intern",
            "location": "Hyderabad, India",
            "dates": "Apr 2012- Jul 2012",
            "description": "Worked in The Azure Applications Platform Team.\
            Implemented an Extensibility module to add custom transport protocols\
            and integrated it into our cloud-based Integration service for enterprise applications.\
            Utilized this Extensibility Module to add SFTP transport protocol apart from existing\
            HTTP, FTP protocols."
        }],
};

var projects = {
    projects: [{
            title: "Information Retrieval: Web Search Engine",
            dates: "2016",
            description: "Implemented a Web search engine which has these following components - Front-end (for text output and HTML output of the results), Ranker(compared various ranker modes like cosine similarity vector-space model, query probability likelihood model etc), Indexer(Inverted index and the compressed version of it).",
            images: ["images/project1.png"]
        },
        {
            title: "Machine Learning: News Article Classification",
            dates: "2016",
            description: "This advanced component was built on top of the web search engine project.",
            images: ["images/project2.png"]
        },
        {
            title: "Responsive Web Design: Portfolio website",
            dates: "2016",
            description: "This website was build using a responsive grid-based layout utilizing Bootstrap. This website works equally well across all screen sizes and devices in a responsive way.",
            images: ["images/project3.png"]
    }]
};

var education = {
    "schools": [{
            "name": "New York University",
            "location": "New York, NY, US",
            "degree dates": "2016-2018",
            "url": "https://www.nyu.edu",
            "majors": ["Computer Science"]
        },
        {
            "name": "Indian Institute of Technology Ropar",
            "location": "Ropar, Punjab, India",
            "degree dates": "2009-2013",
            "url": "http://www.iitrpr.ac.in/",
            "majors": ["Computer Science"]
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

// var work = {
//     jobs: [{
//         employer: "",
//         title: "",
//         location: "",
//         dates: "",
//         description: ""
//     }]
// };

// var projects = {
//     projects: [{
//         title: "",
//         dates: "",
//         description: "",
//         images: ["", ""]
//     }]
// };

// var bio = {
//     name: "",
//     role: "",
//     welcomeMessage: "",
//     biopic: "",
//     contacts: {
//         mobile: 980,
//         email: "",
//         github: "",
//         twitter: "",
//         location: ""
//     },
//     skills: ["", ""]
// };

// var education = {
//     schools: [{
//         name: "",
//         location: "",
//         "degree dates": "",
//         url: "",
//         majors: ["", ""]
//     }],
//     onlineCourses: [{
//         title: "",
//         school: "",
//         dates: "",
//         url: ""
//     }]
// };