var bio = {
    "name": "Praneeth Yenugutala",
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
        /* display name and role*/
        var formattedName = HTMLheaderName.replace('%data%', this.name);
        var formattedRole = HTMLheaderRole.replace('%data%', this.role);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        /* Displaying contact information and the links */
        var formattedLinkedIn = HTMLcontactGeneric.replace('%data%', this.contacts.linkedin[0]).replace('%contact%', 'LinkedIn').replace('%link%', this.contacts.linkedin[1]);
        $('#topContacts').append(formattedLinkedIn);

        var formattedEmail = HTMLemail.replace('%data%', this.contacts.email[0]).replace('%link%', this.contacts.email[1]);
        $('#topContacts').append(formattedEmail);

        var formattedGitHub = HTMLgithub.replace('%data%', this.contacts.github[0]).replace('%link%', this.contacts.github[1]);
        $('#topContacts').append(formattedGitHub);

        var formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter[0]).replace('%link%', this.contacts.twitter[1]);
        $('#topContacts').append(formattedTwitter);

        var formattedlocation = HTMLlocation.replace('%data%', this.contacts.location[0]).replace('%link%', this.contacts.location[1]);
        $('#topContacts').append(formattedlocation);

        var formattedBiopic = HTMLbioPic.replace('%data%', this.biopic);
        $('#header').append(formattedBiopic);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);

        /* Displaying the Skills section */
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
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
        }
    ],
    /**
     * @description Displays the projects section
     */
    "display": function() {
        this.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            $('.project-entry:last').append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
            $('.project-entry:last').append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedProjectDescription);

            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedProjectImage);
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