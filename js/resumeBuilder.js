var bio = {
    "name": "Praneeth Yenugutala",
    "role": "Software Engineer",
    "welcomeMessage": "Welcome to my online resume! I am always challenging myself and learning new programming skills everyday. Click on any of my projects to get more information on them.",
    "biopic": "images/mine.jpg",
    "contacts": {
        /* Apart from these icons, "icon-facebook" is also supported */
        "linkedin": ["icon-linkedin", "https://www.linkedin.com/in/praneethy91"],
        "email": ["icon-envelope", "mailto:praneeth@nyu.edu"],
        "github": ["icon-github", "https://github.com/praneethy91"],
        "twitter": ["icon-twitter", "https://twitter.com/praneethy91"],
        "insta": ["icon-instagram", "https://www.instagram.com/praneethy91"],
        "location": ["icon-globe", "https://goo.gl/maps/4b1ML6pYkqB2"]
    },
    "skills": [
        "Java",
        "Python",
        "C#",
        "Scala",
        "HTML",
        "CSS",
        "Javascript"
    ],
    /**
     * @description Displays the name, role, contacts and skills section
     */
    "display": function() {
        /* Display name and role*/
        var formattedName = HTMLheaderName.replace('%data%', this.name);
        var formattedRole = HTMLheaderRole.replace('%data%', this.role);
        $('#header').prepend(formattedName + formattedRole);

        /* Displaying contact information and the icons with links */
        for(var contact in this.contacts) {
            if(this.contacts.hasOwnProperty(contact)) {
                var formattedContact = HTMLcontactGeneric.replace('%data%', this.contacts[contact][0]).replace('%contact%', contact).replace('%link%', this.contacts[contact][1]);
                $('#topContacts').append(formattedContact);
            }
        }

        /* Displaying pic and welcome message */
        var formattedBiopic = HTMLbioPic.replace('%data%', this.biopic);
        $('#mypic').prepend(formattedBiopic);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
        $('#skillsHeader').append(formattedWelcomeMessage);

        /* Displaying the Skills section */
        if (bio.skills.length > 0) {
            $('#skillsHeader').append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace('%data%', skill);
                $('#skills').append(formattedSkill);
            });
        }
    }
};

var work = {
    jobs: [{
            "employer": "Microsoft Corporation",
            "title": "Software Development Engineer",
            "location": "Hyderabad, India",
            "dates": "Jun 2013- Jul 2016",
            "description": "Worked in Visual Studio Delivery Tools under Release Management team. Architected and coded a backend deployment service to parse and run custom user scripts, returning useful logging and diagnostic data on dynamically provisioned cloud, on premise and hybrid environments."
        },
        {
            "employer": "Microsoft Corporation",
            "title": "Software Developer Intern",
            "location": "Hyderabad, India",
            "dates": "Apr 2012- Jul 2012",
            "description": "Worked in The Azure Applications Platform Team. Implemented an Extensibility module to add custom transport protocols and integrated it into our cloud-based Integration service for enterprise applications. Utilized this Extensibility Module to add SFTP transport protocol apart from existing HTTP, FTP protocols."
        }
    ],
    /**
     * @description Displays the work section
     */
    "display": function() {
        this.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', job.title);
            $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);

            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};

var projects = {
    message: "Click on each of the projects below to reveal more information. For a complete list of projects, my past work and to know more about me, follow the links in the contact section in the header.",
    projects: [{
            title: "Information Retrieval: Web Search Engine",
            dates: "2016",
            description: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
            image: "images/project1.png",
            url: "https://github.com/praneethy91/websearchenginesnyu/releases/tag/v2.0.0-hw3"
        },
        {
            title: "Machine Learning: News Article Classification",
            dates: "2016",
            description: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
            image: "images/project2.png",
            url: "https://github.com/praneethy91/websearchenginesnyu/releases/tag/v10.0.0-ML"
        },
        {
            title: "Responsive Web Design: Portfolio website",
            dates: "2016",
            description: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
            image: "images/project3.png",
            url: "https://github.com/praneethy91/mygithubpage"
        }
    ],
    /**
     * @description Displays the projects section
     */
    "display": function() {
        var count = 0;
        $('#projects-intro').append(this.message);
        this.projects.forEach(function(project) {
            count = count + 1;

            var formattedProjectImage = HTMLprojectImage.replace('%num%', count.toString()).replace('%data%', project.image);
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            $('#projects-section').append(formattedProjectImage + formattedProjectTitle);

            var formattedModalProject = HTMLmodalProject.replace('%num%', count.toString()).replace('%title%', project.title).replace('%imageLink%', project.image).replace('%projectLink%', project.url);
            $('#modal-section').append(formattedModalProject);

            project.description.forEach(function(point) {
                var formattedProjectPoint = HTMLprojectPoint.replace('%data%', point);
                $('.modal-list:last').append(formattedProjectPoint);
            });
        });
    }
};

var education = {
    "schools": [{
            "name": "New York University",
            "location": "New York, NY, US",
            "degree": "Masters",
            "degree dates": "2016-2018",
            "url": "https://www.nyu.edu",
            "major": "Computer Science"
        },
        {
            "name": "Indian Institute of Technology Ropar",
            "location": "Ropar, Punjab, India",
            "degree": "Bachelors",
            "degree dates": "2009-2013",
            "url": "http://www.iitrpr.ac.in/",
            "major": "Computer Science"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    /**
     * @description Displays the education section
     */
    "display": function() {
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace('%data%', school['degree dates']);
            $('.education-entry:last').append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            $('.education-entry:last').append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.major);
            $('.education-entry:last').append(formattedSchoolMajor);
        });
    }
};

/* Displaying all the sections by calling their functions */
bio.display();
work.display();
projects.display();
education.display();

/* Displaying the google map */
$('#mapDiv').append(googleMap);