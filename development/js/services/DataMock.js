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

        //Pass Through
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/api\/me/).passThrough();
        $httpBackend.whenPOST(/auth/).passThrough();

    });
}());
