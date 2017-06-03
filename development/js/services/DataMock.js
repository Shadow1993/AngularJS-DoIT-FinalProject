(function () {
    'use strict';

    var app = angular.module('DataMock', ['app', 'ngMockE2E']);

    app.run(function ($httpBackend) {
        //jscs:disable
        var allData = {
            jobs: [
                {
                    jobId: 1,
                    jobTitle: 'Backend Developer',
                    jobCompany: 'CollegeHumor',
                    jobTown: 'New York',
                    jobState: 'NY',
                    jobAddress: '10011 (Chelsea area)',
                    jobDescription: 'Back-end development experience in PHP 5, and a strong understanding of Object Oriented programming required for full time job. Main responsabilites are : Day to Day Responsibilities : Work closely with frontend engineers in shipping new features, Proficient in LAMP stack environments using Laravel framework, Responsible for providing RESTful api resources for Engadget frontend, Devops knowledge a plus (vagrant and deploy scripts), Ability to read and write JavaScript, CSS and HTML is a minimum',
                    jobWillDo: 'Perform front-end engineering and coding of web-based applications to facilitate updates and searching of existing MySQL relational databases. Implement a robust set of services and APIs to power web applications. Integrate user-facing elements with server-side logic. Build reusable code and libraries for future use. Optimize applications for maximum speed and scalability. Implement security and data protection.',
                    jobWeLooking: 'Bachelor’s degree in computer science or related field plus 3 years’ experience as a full stack developer or equivalent combination of education and/or experience.Experience building secure web sites/applications. Solid web development including CSS, HTML, JavaScript, PHP or Python, and open-source frameworks.Experience developing and integrating restful APIs in a server language – Java, nodeJS, Python, or similar.Working knowledge of Linux, Apache, and SQL.Experience with distributed source control – Git/GitHub.Ability to translate requirements to intuitive UI designs.',
                    jobAdditionalDesc: 'CollegeHumor is dedicated to building a diverse and inclusive company because we serve students, educators and families from tremendously diverse backgrounds and identities across the country; we’ve seen how our product and impact are strengthened the more we reflect that diversity. In addition, we have found (and we believe the research) that diverse teams are higher-performing, and we embrace the varied perspectives that our team members share with each other.',
                    jobYearSalary: 50.000,
                    jobType: 'Full-time',
                    jobDate: 'May 21,2017',
                    jobCompanyImageUrl: '',
                    company_id: 1
                },
                {
                    jobId: 2,
                    jobTitle: 'Software Developer/Analyst - Web Developer ',
                    jobCompany: 'University of Texas at Austin',
                    jobTown: 'Austin',
                    jobState: 'TX',
                    jobAddress: '',
                    jobDescription: 'Experience in an environment using a programming language such as PHP. To build and develop web applications. Purpose : Analyze, design, develop, implement and maintain applications developed for the staff within Applied Research Laboratories. ',
                    jobWillDo: 'Develop, debug, document, maintain, and enhance internally developed end user applications as defined and assigned. Provide end user training, documentation and support for applications developed/supported. Verify, validate, and test code changes using approved workstation configurations. Consult with departmental personnel for requirements for new development/refinement and problem definition as necessary. Research and resolve problems with browsers, desktops, application servers and database servers and related software. Maintain a detailed work log and revision notes.',
                    jobWeLooking: '',
                    jobAdditionalDesc: '',
                    jobYearSalary: 75.000,
                    jobType: 'Part-time',
                    jobDate: 'April 19,2017',
                    jobCompanyImageUrl: '',
                    company_id: 2
                },
                {
                    jobId: 3,
                    jobTitle: 'Full Stack Web Developer, Internal Tools',
                    jobCompany: 'Krossover',
                    jobTown: 'New York',
                    jobState: 'NY',
                    jobAddress: '10011 (Chelsea area)',
                    jobDescription: 'PHP and/or Java. Architect features with the development team. Krossover is looking. expirence developer. 	 ',
                    jobWillDo: 'Build operations related applications for daily use .Create dashboards and daily / weekly reports. Architect features with the development team .PHP and/or JavaScript development. (We use Silex and AngularJS.',
                    jobWeLooking: 'Experience with the web. Know your GET vs. POST .OOP concepts. Experience with at least one OOP language, such as:PHP,Java,C#,Rubyetc.A love of clean, understandable code and interface. You can SELECT, INSERT, UPDATE and DELETE in your SQL database all day. Experience working on a team. Smarts, humility, and the desire to teach and learn',
                    jobAdditionalDesc: 'Krossover is a sports media and analytics startup that brings easy video breakdown and in-depth analytics to coaches and athletes at all levels. Think Friday Night Lights meets Moneyball. We\'re located in New York\'s Chelsea neighborhood. It\'s a spacious, sunny office with not a single grey wall anywhere. Our culture is one of intelligence and collaboration. Every now and then we talk sports.We offer a competitive salary and benefits.',
                    jobYearSalary: 110.000,
                    jobType: 'Contract',
                    jobDate: 'May 18,2017',
                    jobCompanyImageUrl: '',
                    company_id: 3
                },
                {
                    jobId: 4,
                    jobTitle: 'Entry Level - Software Engineer ',
                    jobCompany: 'Tektronix',
                    jobTown: 'Beaverton',
                    jobState: 'OR',
                    jobAddress: '',
                    jobDescription: 'Experience with PHP, Python, Perl, Ruby, Node.js, REST. Entry Level - Software Engine',
                    jobWillDo: 'You will drive development process of new features and make technical recommendations in regards to the best programming languages to use for specific tasks.You will develop on several types of platforms including open source stacks, mobile (iOS/Android), etc.Synergize with the Product Manager and other various team members including Ellen’s production team to estimate and plan development life-cycles and deliverables.Consistently fine-tune and optimize code.',
                    jobWeLooking: 'Variation of skills such as: Reactjs, Nodejs, Angular (1 and/or 2), Bootstrap, Ruby scripting, Swift, Java, MySQL, NoSQL, AWS cloud stacks such as ECS, EC2, LAMBDA.Any experience working with mobile development is also appreciated – Objective C and/or Java.Experience working in a fast paced lean environment.Agile/Scrum or Kanban lean principles.Continuous Integration  and Continuous Delivery experience.Adobe Experience Manager and/or Adobe Primetime.',
                    jobAdditionalDesc: '',
                    jobYearSalary: 110.000,
                    jobType: 'Contract',
                    jobDate: 'May 18,2017',
                    jobCompanyImageUrl: '',
                    company_id: 4
                },
                {
                    jobId: 5,
                    jobTitle: 'PHP Engineer',
                    jobCompany: 'Shutterstock',
                    jobTown: 'New York',
                    jobState: 'NY',
                    jobAddress: '',
                    jobDescription: 'SQL and PHP. Experience with PHP Storm IDE preferred. Our client is growing their teaSoftware Engine',
                    jobWillDo: 'Develop user facing features .Produce reusable and maintainable code .Create quality mock-ups and prototypes .Use company style and branding where appropriate ,standards-compliant code .Responsible for developing visualization tools using 3rd party tools.',
                    jobWeLooking: 'Five or more years of experience in a software development or systems administrator role. Skilled in front-end web languages primarily HTML, CSS, Javascript. Experience with front-end frameworks, such as Angular, Backbone, Ember, Vue.js .Knowledgeable in SQL and familiarity in different database technologies (MySql, Postgres, NoSql) .Experience with version control (git) .Experience working with REST web APIs .Worked with integrating third party solutions via APIs ',
                    jobAdditionalDesc: '',
                    jobYearSalary: 135.000,
                    jobType: 'Temporary',
                    jobDate: 'April 26,2017',
                    jobCompanyImageUrl: '',
                    company_id: 5
                }
            ],
            resumes: [
                {
                    resumeId: 1,
                    resumeName: 'Bryon Czoch',
                    resumeTown: 'Chicago',
                    resumeState: 'IL',
                    resumeJobTitleExp1: 'PHP developer',
                    resumeJobCompanyExp1: 'Barcode Giant',
                    resumeJobDateFromExp1: 'March 2014',
                    resumeJobDateTillExp1: 'August 2014',
                    resumeJobResposibilitesExp1: 'Magento/PHP development for a Point-of-sale equiptment dealer. I worked on setting up VMware ESX sandbox developer environment. I also built their quote system in Magento. They have 8 other websites that sell the same equipment so I also worked on keeping them up to date with the main website that brings in revenue. ',
                    resumeJobSkilledUsedExp1: 'PHP, Javascript, XML, JSON, Linux Apache Mysql and Python',
                    resumeJobTitleExp2: 'Programmer/Analyst II',
                    resumeJobCompanyExp2: 'University of Chicago',
                    resumeJobDateFromExp2: 'March 2012',
                    resumeJobDateTillExp2: 'March 2012',
                    resumeJobResposibilitesExp2: 'Extending/Customizing Zend Framework 2 based library search resource portal (http://myportal.domain.com) Maintaining legacy employee travel/training requisition system and division hours site',
                    resumeJobSkilledUsedExp2: 'PHP, Javascript, XML, JSON, Linux Apache Mysql and Python',
                    resumeJobTitleExp3: 'Programmer/Analyst II',
                    resumeJobCompanyExp3: 'Web Developer/System Administrator',
                    resumeJobDateFromExp3: 'March 2011',
                    resumeJobDateTillExp3: 'March 2012',
                    resumeJobResposibilitesExp3: 'Programming additions to the existing Ans.org website .Supporting/migrating Wordpress blog AnsNuclearCafe.org .Setup, support of Linux servers. Supporting operations of the organization w/ tech knowledge ',
                    resumeJobSkilledUsedExp3: '',
                    resumeEducation: 'Bachelor in Computer Science',
                    resumeEducationSchool: 'Telkom University ',
                    resumeSchoolTown: 'Bloomington, IN',
                    resumeAdditionalInfoSkills: 'PHP 5, Perl and Python scripting,Java,SQL, Mysql, MongoDB,Revision control/source code management using Mercurial, GIT, RCS/CVS ,JavaScript Libraries,Apache Solr search engine ,Wordpress, Drupal, Joomla, Mambo, CMS ,Adobe Photoshop & GIMP ,Working in a Linux / Unix environment (shell scripting and command line utilities)',
                    resumeImg: '',
                    user_id: 1
                },
                {
                    resumeId: 2,
                    resumeName: 'Kinjal Gavadiya',
                    resumeTown: 'San Jose',
                    resumeState: 'CA',
                    resumeJobTitleExp1: 'PHP Software Engineer',
                    resumeJobCompanyExp1: 'Lexico Inc',
                    resumeJobDateFromExp1: 'March 2016',
                    resumeJobDateTillExp1: 'Present',
                    resumeJobResposibilitesExp1: 'I worked in the PDFfiller company at the position of PHP developer. I worked on several sites and product apply. Example http://fill4forms.com/ I have experience of development on PHP without usage of Framework and CMS, optimization and writing of optimal performance code.',
                    resumeJobSkilledUsedExp1: 'PHP, Javascript, XML, JSON, Linux Apache Mysql and Python',
                    resumeJobTitleExp2: 'Web Developer',
                    resumeJobCompanyExp2: 'University of Chicago',
                    resumeJobDateFromExp2: 'March 2012',
                    resumeJobDateTillExp2: 'March 2012',
                    resumeJobResposibilitesExp2: 'Worked as part of a team to resolve issues with, as well as complete new projects for, customer portal used to provision cloud-based resources in our data center, as well as determine what services and resources they required.',
                    resumeJobSkilledUsedExp2: '',
                    resumeJobTitleExp3: '',
                    resumeJobCompanyExp3: '',
                    resumeJobDateFromExp3: '',
                    resumeJobDateTillExp3: '',
                    resumeJobResposibilitesExp3: '',
                    resumeJobSkilledUsedExp3: '',
                    resumeEducation: 'PhD in Computer Science',
                    resumeEducationSchool: 'University of California ',
                    resumeSchoolTown: 'San Jose, CA',
                    resumeAdditionalInfoSkills: 'PHP Development (5 years), MSSQL (9 years), MYSql (5 years), MongoDB (1 year), Oracle DB (Less than 1 year), HTML (10+ years), CSS (8 years), Javascript (5 years), jQuery (5 years), Bootstrap (5 years), CodeIgniter Framework (4 years), Wordpress (1 year)',
                    resumeImg: '',
                    user_id: 2
                },
                {
                    resumeId: 3,
                    resumeName: 'Shivakumar Gudimalla',
                    resumeTown: 'Conway,',
                    resumeState: 'AR',
                    resumeJobTitleExp1: 'PHP developer',
                    resumeJobCompanyExp1: 'Implus Footcare, LLC ',
                    resumeJobDateFromExp1: 'April 2017',
                    resumeJobDateTillExp1: 'Present',
                    resumeJobResposibilitesExp1: 'Maintain and update existing e-commerce websites for multiple brands of products, by updating existing code in a codeigniter PHP framework. Update and add functionality to an existing reports portal built in PHP.',
                    resumeJobSkilledUsedExp1: 'PHP, Javascript, XML, JSON, Linux Apache Mysql and Python',
                    resumeJobTitleExp2: 'Software Engineer',
                    resumeJobCompanyExp2: 'EMS Management & Consultants ',
                    resumeJobDateFromExp2: 'Jun 2016',
                    resumeJobDateTillExp2: 'February 2017',
                    resumeJobResposibilitesExp2: 'Primary projects included building web based application to manage client information and specifications, manage and report on client contact and relationship, replacing multiple manually managed spreadsheets. Secondary project was to build a web based application to assist and track outbound dialing campaign used to collect necessary customer information, replacing a shared spreadsheet. ',
                    resumeJobSkilledUsedExp2: 'Applications were built in PHP, using the Yii2 framework and collecting and updating data in multiple MYSQL and MSSQL databases.',
                    resumeJobTitleExp3: 'Web Developer',
                    resumeJobCompanyExp3: 'Replacements, Ltd',
                    resumeJobDateFromExp3: 'October 2015',
                    resumeJobDateTillExp3: 'March 2016',
                    resumeJobResposibilitesExp3: 'Worked as part of a team to update and maintain a large collection of static html pages, add new pages, as well as contribute to planning to migrating site over to a dynamic solution. I was given responsibility for refactoring and improving the codebase behind the site s search feature, and adding new features to the search functionality, improving how the front end communicates with and consumes the response from the Solr database. ',
                    resumeJobSkilledUsedExp3: '',
                    resumeEducation: 'Bachelor in Computer Science',
                    resumeEducationSchool: 'State University of Arizona',
                    resumeSchoolTown: 'Jacksville, AR',
                    resumeAdditionalInfoSkills: 'PHP Advanced,MSSQL Advanced ,CSS Advanced, HTML Advanced ,Javascript Advanced,MySQL Medium ',
                    resumeImg: '',
                    user_id: 3
                },
                {
                    resumeId: 4,
                    resumeName: 'Dhaval Patel ',
                    resumeTown: 'Las vegas',
                    resumeState: 'NV',
                    resumeJobTitleExp1: 'PHP Programmer',
                    resumeJobCompanyExp1: 'Kizzang',
                    resumeJobDateFromExp1: 'November 2014',
                    resumeJobDateTillExp1: 'Present',
                    resumeJobResposibilitesExp1: ' Rewrote most of the existing DB Schema and added several other tables .Wrote the entire admin from scratch(PHP), rewrote the main API(PHP), and fixed issues in our slot API(Coffeescript) .Maintained 95 EC2 servers along with Redis Clusters, Memcache, RDS and load balancers .Optimized both API and MySQL to improve overall through put by over 300% .Wrote several reports to help our Management team to better make decisions .Wrote extensive Cron system to automate several tasks and keep the site working correctly .Worked with the following 3rd party APIs: Google, OneSignal, Twilio, Paypal, E-Mercury, RightSignature, SmartyStreets, AWS, and Quickbooks .Managed the deployment system that consisted of Chef, Jenkins, and Boto ',
                    resumeJobSkilledUsedExp1: 'PHP, LAMP, MySQL, CodeIgniter, AWS, Coffeescript, Ruby, Python ',
                    resumeJobTitleExp2: 'Software Engineer',
                    resumeJobCompanyExp2: 'Red Mercury Entertainment',
                    resumeJobDateFromExp2: 'July 2014',
                    resumeJobDateTillExp2: 'October 2014',
                    resumeJobResposibilitesExp2: ' Wrote entire site in less than a month including DB Schema .Site: dev.lvticketsnow.com .Did the User Login classes for the site in Laravel .Created the entire site using Bootstrap 3.0 and JQuery .Also, wrote the entire Administrative console dev.lvticketsnow.com (No longer available)',
                    resumeJobSkilledUsedExp2: 'PHP, LAMP, MySQL, Laravel, Angular.js ',
                    resumeJobTitleExp3: 'Sr. Software Engineer',
                    resumeJobCompanyExp3: 'Piping Rock Health Products',
                    resumeJobDateFromExp3: 'May 2013',
                    resumeJobDateTillExp3: 'June 2014',
                    resumeJobResposibilitesExp3: ' Helped fix their e-commerce site (www.pipingrock.com) .Optimized DB structure for optimal performance .Wrote numerous financial and inventory reports .Did massive amounts of DB data cleanup / normalization .Helped with rewriting the site for faster operation and code normalization . Added Paypal to the payment options of the site',
                    resumeJobSkilledUsedExp3: 'PHP, LAMP, MySQL, Jira, Jenkins/Hudsen, Doctrine 2, Symfony ',
                    resumeEducation: 'Bachelor s in BSEET',
                    resumeEducationSchool: 'DeVry Institute of Technology ',
                    resumeSchoolTown: 'Phoenix, AR',
                    resumeAdditionalInfoSkills: '',
                    resumeImg: '',
                    user_id: 4
                },
                {
                    resumeId: 5,
                    resumeName: 'Mike Zaloznyy ',
                    resumeTown: 'Raleigh',
                    resumeState: 'NC',
                    resumeJobTitleExp1: 'Full Stack PHP Web Developer',
                    resumeJobCompanyExp1: 'Bolide Technology Group ',
                    resumeJobDateFromExp1: 'October 2016',
                    resumeJobDateTillExp1: 'Present',
                    resumeJobResposibilitesExp1: 'Led a 8-persons team to develop nutrition food website, front end design using WordPress, Photoshop and Dreamweaver, back end design using PHP and MySQL. Built website as a full stack developer using HTML and CSS and used JSP for web application with java hibernate+struts framework and connect website to Microsoft SQL Server.',
                    resumeJobSkilledUsedExp1: '',
                    resumeJobTitleExp2: 'Software Engineer',
                    resumeJobCompanyExp2: 'Red Mercury Entertainment',
                    resumeJobDateFromExp2: 'July 2015',
                    resumeJobDateTillExp2: 'October 2016',
                    resumeJobResposibilitesExp2: '  Analyzed requirements, quantified functional specifications, as well as usability criteria.Designed UX including mockups, wireframes and storyboard (sitemap) .Developed the application using HTML, CSS, JavaScript, PHP, MySQL and Apache Web Server. Utilized AJAX for RESTful web services, Twitter Bootstrap for UI .Implemented interactive UI with jQuery and jQuery UI for functionalities like drag and drop, progressbar and easing .Installed, configured, managed a development blog using WordPress .Worked closely with designers to ensure design requirements .Worked in a Scrum team .Managed code repository on GitHub ',
                    resumeJobSkilledUsedExp2: 'HTML, CSS, JavaScript, jQuery, jQuery UI, Bootstrap 2, AJAX, Restful service, PHP, Apache, MySQL, WordPress 2.7, Axure, GitHub',
                    resumeJobTitleExp3: '',
                    resumeJobCompanyExp3: '',
                    resumeJobDateFromExp3: '',
                    resumeJobDateTillExp3: '',
                    resumeJobResposibilitesExp3: ' ',
                    resumeJobSkilledUsedExp3: '',
                    resumeEducation: 'Master of Science in Information System',
                    resumeEducationSchool: 'California State University Los Angeles',
                    resumeSchoolTown: 'Los Angeles, CA',
                    resumeAdditionalInfoSkills: 'PHP (5, 4.x), JavaScript, Java, Objective-C, MySQL 5.x, Oracle database 12c, Microsoft ,Perl 5.x, bash, C (99), ActionScript 3, PL/SQL,SQL Server 11 & 12\ ',
                    resumeImg: '',
                    user_id: 5
                }
            ]

        };
        //jscs:enable

        var jobs = '/api/jobs';
        $httpBackend.whenGET(jobs).respond(allData.jobs);

        var job = new RegExp(jobs + '/[0-9]*');
        $httpBackend.whenGET(job).respond(jobDetails);

        function jobDetails(method, url) {
            var job = {
                jobId: 0
            };
            var params = url.split('/');
            var len = params.length;
            var id = params[len - 1];

            if (id > 0) {
                for (var i = 0; i < allData.jobs.length; i++) {
                    if (allData.jobs[i].jobId === Number(id)) {
                        job = allData.jobs[i];
                        break;
                    }
                }
            }
            return [200, job, {}];
        }

        var resumes = '/api/resumes';
        $httpBackend.whenGET(resumes).respond(allData.resumes);

        var resume = new RegExp(resumes + '/[0-9]*');
        $httpBackend.whenGET(resume).respond(resumeDetails);

        function resumeDetails(method, url) {
            var resume = {
                resumeId: 0
            };
            var params = url.split('/');
            var len = params.length;
            var id = params[len - 1];

            if (id > 0) {
                for (var i = 0; i < allData.resumes.length; i++) {
                    if (allData.resumes[i].resumeId === Number(id)) {
                        resume = allData.resumes[i];
                        break;
                    }
                }
            }
            return [200, resume, {}];
        }

        //Pass Through
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/api\/me/).passThrough();
        $httpBackend.whenPOST(/auth/).passThrough();

    });
}());
