var bio = {
    "name": "Praneeth Yenugutala",
    "role": "Software Engineer",
    "titlePage": "Portfolio",
    "welcomeMessage": "Welcome to my online resume! I am always challenging myself and learning new programming skills everyday. Click on any of my projects to get more information on them.",
    "biopic": "src/img/mine.jpg",
    "contacts": {
        /* Not showing mobile on site, just dummy information */
        "mobile": "555-555-5555",
        /* I am using arrays here since I want to customize the icon as well
         * So I needed extra information apart from a string. I know it is not according
         * to specification but please ignore this.
         */
        "linkedin": ["icon-linkedin", "https://www.linkedin.com/in/praneethy91"],
        "email": ["icon-envelope", "mailto:praneeth@nyu.edu"],
        "github": ["icon-github", "https://github.com/praneethy91"],
        "twitter": ["icon-twitter", "https://twitter.com/praneethy91"],
        "insta": ["icon-instagram", "https://www.instagram.com/praneethy91"],
        "fb": ["icon-facebook", "https://www.facebook.com/praneethy91"],
        "location": "New York, NY, US"
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
        var data = '%data%';
        var formattedName = HTMLheaderName.replace(data, this.name);
        var formattedRole = HTMLheaderRole.replace(data, this.role);
        $('#header').prepend(formattedName + formattedRole);

        /* Displaying contact information and the icons with links */
        for (var contact in this.contacts) {
            if (this.contacts.hasOwnProperty(contact) && this.contacts[contact].constructor === Array) {
                var formattedContact = HTMLcontactGeneric.replace(data, this.contacts[contact][0]).replace('%contact%', contact).replace('%link%', this.contacts[contact][1]);
                $('#topContacts, #footerContacts').append(formattedContact);
            }
        }

        /* Displaying pic and welcome message */
        var formattedBiopic = HTMLbioPic.replace(data, this.biopic);
        $('#mypic').prepend(formattedBiopic);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, this.welcomeMessage);
        $('#skillsHeader').append(formattedWelcomeMessage);

        /* Displaying the Skills section */
        if (bio.skills.length > 0) {
            $('#skillsHeader').append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(data, skill);
                $('#skills').append(formattedSkill);
            });
        }
    }
};

var work = {
    jobs: [{
            "employer": "Twitter",
            "title": "Software Engineering Intern",
            "location": "San Francisco, CA, USA",
            "dates": "May 2017- Aug 2017",
            "description": "Worked in Twitter as a software engineering intern.",
            "url": "https://www.twitter.com"
        },
        {
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
            var data = '%data%';

            $('#workExperience').append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer).replace('%link%', job.url);
            var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
            $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);

            var formattedDates = HTMLworkDates.replace(data, job.dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace(data, job.location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace(data, job.description);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};

var projects = {
    message: "Click on each of the projects below to reveal more information. For a complete list of projects, my past work and to know more about me, follow the links in the contact section in the header.",
    projects: [{
            title: "Information Retrieval: Web Search Engine",
            dates: "2016",
            /* I am using arrays here since I want to show a list of points in <ul>,
             * So I needed an array to seperate the points. I know it is not according
             * to specification but please ignore this.
             */
            description: [
                "Implemented a Web search engine which has these following components - Front-end (for text output and HTML output of the results), Ranker(compared various ranker modes like cosine similarity vector-space model, query probability likelihood model etc), Indexer(Inverted index and the compressed version of it).",
                "Indexed a very large Wikipedia dump in the search engine. The ranking of results was on top it when user issued a query.",
                "Had various evaluation metrics for evaluting the performance of the ranker's ranking of articles.",
                "Implemented a document processor which parses and extracts tokens and normalizes it based on stopwords and performed stemming. Query processor normalizes the query too.",
                "Significant challenges were overcome in building a large index and utilized very low memory eventually and using index merging algorithms to merge multiple huge indexes on the disk.",
                "Ranking was heavily optimized to get the best results efficiently.",
                "Also Implemented a PageRank metric along with a relevance metric which utilizes the hyperlink structure in the Wikipedia corpus."
            ],
            images: ["src/img/project1.png"],
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
            images: ["src/img/project2.png"],
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
            images: ["src/img/project3.png"],
            url: "https://github.com/praneethy91/frontend-nanodegree-resume"
        },
        {
            title: "Object Oriented Javascript & HTML5 Canvas: Frogger Arcade Game",
            dates: "2017",
            description: [
                "This game was build using HTML5 canvas completely.",
                "The game menu was build by overlaying HTML DOM over the canvas.",
                "Object-oriented Javascript was used with pseudoclassical prototypal patterns while building the in-memory representations of the objects and behaviors in the game",
                "The game has a game engine loop, visual assets and continuously renders the canvas, many framers per second.",
                "The game rules and where to play can be found in the Github link to the project."
            ],
            images: ["src/img/project4.png"],
            url: "https://github.com/praneethy91/frogger-arcade-game"
        },
        {
            title: "Hand Gestures - Classification with Object Detection",
            dates: "2017",
            description: [
                "This project demonstrates the use of transfer learning using an ensemble of three residual nets and one Inception-v4 of neural networks to classify a set of hand gestures showing the numbers - 1 to 10, in various languages.",
                "The architecture used is demonstrated in this paper - Inception-v4, Inception-ResNet and the Impact of Residual Connections on Learning (https://arxiv.org/abs/1602.07261). Along with classification we also use a single object detection deep neural net whose architecture is described in this paper - SSD: Single Shot MultiBox detector (https://arxiv.org/abs/1512.02325).",
                "We utilize Python with a Flask based backend for the web application which loads these neural net models into RAM and presents a user interface for classifying and localizing a hand gesture."
            ],
            images: ["src/img/project5.png"],
            url: "https://github.com/praneethy91/mlcv"
        },
        {
            title: "Causal Inference - The Effect of Circuit Court Decisions on Social Attitudes",
            dates: "2017",
            description: [
                "We present an application of machine learning and causal inference to study the effect on social and political attitude of the public, based on court rulings and characteristics of judges involved.",
                "Our goal is to determine if the sentiment of the judges in the court rulings towards certain targets(like republicans, democrats, woman, feminists, etc) is a factor through which we can infer the public opinion towards the same targets",
                "We not only use the judges sentiment towards these targets, but we also weight the similarities to those targets using word2vec",
                " We also use the biographical and other characteristics of the judge(s) involved in the cases for determining this causal effect, by using them as instruments. Using them as instruments in 2-stage least squares regression helps to ensure that this determined causal effect is in fact consistent and unbiased.",
                "We also find which of these characteristics are important as instruments, using different feature selection methods.",
                "We use American National Election Survey data, Court rulings data, and judge characteristics data for this analysis into the causal effect."
            ],
            images: ["src/img/project6.png"],
            url: "https://github.com/praneethy91/5_Law-Sentiment"
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

            String.prototype.replaceAll = function(search, replacement) {
                var target = this;
                return target.replace(new RegExp(search, 'g'), replacement);
            };

            project.images.forEach(function(image){
                var re = /(?:\.([^./]+))?$/;
                var ext = re.exec(image)[1];
                var fileName = image.replace(/^.*[\\\/]/, '').replace('.' + ext, '');

                var formattedProjectImage = HTMLprojectImage.replace('%num%', count.toString()).replaceAll('%imageName%', fileName).replaceAll('%imageExt%', ext);
                var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
                $('#projects-section').append(formattedProjectImage + formattedProjectTitle);

                var formattedModalProject = HTMLmodalProject.replace('%num%', count.toString()).replace('%title%', project.title).replaceAll('%imageName%', fileName).replaceAll('%imageExt%', ext).replace('%projectLink%', project.url);
                $('#modal-section').append(formattedModalProject);
            });

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
            "majors": ["Computer Science"]
        },
        {
            "name": "Indian Institute of Technology Ropar",
            "location": "Ropar, Punjab, India",
            "degree": "Bachelors",
            "degree dates": "2009-2013",
            "url": "http://www.iitrpr.ac.in/",
            "majors": ["Computer Science"]
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
        "title": "Deep Learing Foundations Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101"
    }],
    /**
     * @description Displays the education section
     */
    "display": function() {
        this.schools.forEach(function(school) {
            var data = '%data%';
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, school.name).replace('%link%', school.url);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace(data, school['degree dates']);
            $('.education-entry:last').append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
            $('.education-entry:last').append(formattedSchoolLocation);

            school.majors.forEach(function(major){
                var formattedSchoolMajor = HTMLschoolMajor.replace(data, major);
                $('.education-entry:last').append(formattedSchoolMajor);
            });
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
