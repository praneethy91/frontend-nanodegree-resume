var bio = {
    "name": "Praneeth Yenugutala",
    "role": "Software Engineer",
    "titlePage": "Portfolio",
    "welcomeMessage": "Welcome to my online resume! I am always challenging myself and learning new programming skills everyday. Click on any of my projects to get more information on them.",
    "biopic": "src/img/mine.jpg",
    "contacts": {
        /* Apart from these icons, "icon-globe" is also supported for location */
        "linkedin": ["icon-linkedin", "https://www.linkedin.com/in/praneethy91"],
        "email": ["icon-envelope", "mailto:praneeth@nyu.edu"],
        "github": ["icon-github", "https://github.com/praneethy91"],
        "twitter": ["icon-twitter", "https://twitter.com/praneethy91"],
        "insta": ["icon-instagram", "https://www.instagram.com/praneethy91"],
        "fb": ["icon-facebook", "https://www.facebook.com/praneethy91"]
    },
    "skills": [
        "Java",
        "Python",
        "C#",
        "Scala",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "PowerShell"
    ],
    /**
     * @description Displays the name, role, contacts and skills section
     */
    "display": function() {
        /* Display name and role*/
        $('.navbar-brand').append(this.titlePage);
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
            "description": "Worked in Visual Studio Delivery Tools under Release Management team. Architected and coded a backend deployment service to parse and run custom user scripts, returning useful logging and diagnostic data on dynamically provisioned cloud, on premise and hybrid environments.",
            "url": "https://www.microsoft.com"
        },
        {
            "employer": "Microsoft Corporation",
            "title": "Software Developer Intern",
            "location": "Hyderabad, India",
            "dates": "Apr 2012- Jul 2012",
            "description": "Worked in The Azure Applications Platform Team. Implemented an Extensibility module to add custom transport protocols and integrated it into our cloud-based Integration service for enterprise applications. Utilized this Extensibility Module to add SFTP transport protocol apart from existing HTTP, FTP protocols.",
            "url": "https://www.microsoft.com"
        }
    ],
    /**
     * @description Displays the work section
     */
    "display": function() {
        this.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job.employer).replace('%link%', job.url);
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
            description: [
                "Implemented a Web search engine which has these following components - Front-end (for text output and HTML output of the results), Ranker(compared various ranker modes like cosine similarity vector-space model, query probability likelihood model etc), Indexer(Inverted index and the compressed version of it).",
                "Indexed a very large Wikipedia dump in the search engine. The ranking of results was on top it when user issued a query.",
                "Had various evaluation metrics for evaluting the performance of the ranker's ranking of articles.",
                "Implemented a document processor which parses and extracts tokens and normalizes it based on stopwords and performed stemming. Query processor normalizes the query too.",
                "Significant challenges were overcome in building a large index and utilized very low memory eventually and using index merging algorithms to merge multiple huge indexes on the disk.",
                "Ranking was heavily optimized to get the best results efficiently.",
                "Also Implemented a PageRank metric along with a relevance metric which utilizes the hyperlink structure in the Wikipedia corpus."
            ],
            image: "src/img/project1.png",
            url: "https://github.com/praneethy91/websearchenginesnyu/releases/tag/v2.0.0-hw3"
        },
        {
            title: "Machine Learning: News Article Classification",
            dates: "2016",
            description: [
                "This advanced component was built on top of the web search engine project.",
                "Implemented web crawling on major news websites with URL normalization techniques to create a huge corpus to rank upon and to classify articles into categories dynamically using a trained machine learning model, like arts, health, science, entertainment, politics etc.",
                "Implemented targeted crawling on certain sites in certain categories to create a well-split labelled dataset for categorization, with the URL structure of the website giving us the label for the article.",
                "Implemented a machine learning model utilizing support vector machines with a linear kernel and using document words as the feature. This was trained with the dataset above from the targeted crawling.",
                "Implemented multi-label multi-class classification utilizing SVM where each news article could be predicted with our model to belong to multiple categories, and while training each article could also belong to multiple categories.",
                "Served the front-end to display the top ranked news articles (using a query likelihood ranker) segregated into multiple categories."
            ],
            image: "src/img/project2.png",
            url: "https://github.com/praneethy91/websearchenginesnyu/releases/tag/v10.0.0-ML"
        },
        {
            title: "Responsive Web Design: Portfolio website",
            dates: "2016",
            description: [
                "This website was build using a responsive grid-based layout utilizing Bootstrap. This website works equally well across all screen sizes and devices in a responsive way.",
                "The online resume website is generated using data from json so it's very easy to create your own resume by just changing the json.",
                "Semantic elements have been used throughout the website. The images and fonts used in the website are themselves are responsive.",
                "Images have been optimized using srcset and compression. Serve different image resolutions and quality according to viewport width and relative width of image in the viewport in a responsive manner.",
                "A grunt workflow has been incorporated while building the website, utilizing various grunt plugins to optimize the development workflow and performance of the website.",
                "A consistent set of CSS, HTML style and formatting rules were followed while coding up the website. Seperation of concerns between style and HTML.",
                "Advanced components of Bootstrap were incorporated into the website like modals and navbar. Optimized website and resource fetching for website to improve Google pagespeed scores."
            ],
            image: "src/img/project3.png",
            url: "https://github.com/praneethy91/frontend-nanodegree-resume"
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

            var re = /(?:\.([^./]+))?$/;
            var ext = re.exec(project.image)[1];
            var fileName = project.image.replace(/^.*[\\\/]/, '').replace('.' + ext, '');

            String.prototype.replaceAll = function(search, replacement) {
                var target = this;
                return target.replace(new RegExp(search, 'g'), replacement);
            };

            var formattedProjectImage = HTMLprojectImage.replace('%num%', count.toString()).replaceAll('%imageName%', fileName).replaceAll('%imageExt%', ext);
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            $('#projects-section').append(formattedProjectImage + formattedProjectTitle);

            var formattedModalProject = HTMLmodalProject.replace('%num%', count.toString()).replace('%title%', project.title).replaceAll('%imageName%', fileName).replaceAll('%imageExt%', ext).replace('%projectLink%', project.url);
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
            "url": "https://cs.nyu.edu",
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
            var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('%link%', school.url);
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