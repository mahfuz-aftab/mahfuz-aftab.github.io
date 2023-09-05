var app = angular.module('MahfuzPortfolio', ['ui.bootstrap','ngSanitize']);
app.controller('MainCtrl', function($scope) {

	$scope.intro = {
		text: "<h4><strong class= 'name-index' >MAHFUZ AFTAB</strong> an enthusiastic full stack Software Engineer experience in web frontend and backend development and hybrid mobile application development. Skilled in Angular, React, Node, Ionic, React Native, TypeScript/JavaScript, MongoDB, MySQL and AWS.<br></br> Furthermore, a <code>JavaScript</code> enthusiast like to <code><span><</span>Code<span>/></span></code> following the best practices and proven technology to develop understandable, maintainable and robust software with firm experience in problem solving and UI design. <br></br>Finally, I am a fast learner, a strong team player with excellent social skills and an organized, detail-oriented and proactive individual.</h4>"
	};

	$scope.managerialKeys = ['Experienced in frontend development within the context of full-stack web application development in MEAN/MERN stack.', 'Coordinate multiple developer (web application and Mobile application development) following agile methodology project management', 'Hybrid/Cross Platform Mobile Application Development in Ionic/React Native', 'Reporting Projects Progress to Reporting Manager & Management', 'Client Requirement Analysis and prepare Software Requirement Specification'];

	$scope.technologyStack = [{
		head: "Language",
		body: "TypeScript, JavaScript, HTML, CSS, SQL, NO-SQL"
	},
	{
		head: "Framework/Libraries",
		body: "Angular, Ionic, React, React Native, Express, Bootstrap, jQuery, Node.js"
	},
	{
		head: "Database",
		body: "MySQL, MSSQL, MongodB"
	},
	{
		head: "Cloud Service",
		body: "AWS (EC2), Google Cloud Platform, Vercel"
	},
	{
		head: "Tools",
		body: "Git, GitHub, Bitbucket, Postman, Adobe XD, Figma, GIMP, MS Visio, Linux"
	}];

	$scope.responsibilities = [{
      icon: "fa fa-tasks fa-lg slideanim",
      job: "Experienced in frontend development within the context of full-stack web application development in MEAN/MERN stack."
    },{
      icon: "fa fa-html5 fa-lg slideanim",
      job: "Web application development using AngularJS, ReactJS, ExpressJS, Node.js and MongoDB with cutting edge HTML5 and CSS3 techniques."
    },{
      icon: "fa fa-check-square-o fa-lg slideanim",
      job: "Unit testing using Jasmine/Karma."
    },{
      icon: "fa fa-mobile fa-lg slideanim",
      job: "Hybrid/Cross Platform Mobile Application Development in React Native/Ionic Framework."
    }];
 
    $scope.articles = [{
    	link: "https://www.linkedin.com/pulse/potentials-web-based-games-child-education-mahfuz-aftab",
    	src: "img/gameblog.png",
    	title: "Potentials of Web Based Games in Child Education"
    },{
    	link: "https://www.linkedin.com/pulse/machine-learning-mahfuz-aftab",
    	src: "img/machine.jpg",
    	title: "Machine Learning"
    },{
    	link: "https://www.linkedin.com/pulse/mongoose-aggregate-mahfuz-aftab",
    	src: "img/mongooseAgg.png",
    	title: "Mongoose Aggregate"
    },{
    	link: "https://www.linkedin.com/pulse/react-image-slider-mahfuz-aftab",
    	src: "img/reactSlider.png",
    	title: "React Image Slider"
    },{
    	link: "https://www.linkedin.com/pulse/q-service-angularjs-mahfuz-aftab",
    	src: "img/qservicepng.png",
    	title: "$q service in AngularJS"
    },{
    	link: "https://www.linkedin.com/pulse/code-refactoring-mahfuz-aftab",
    	src: "img/cr.png",
    	title: "Code Refactoring"
    }];

    $scope.contributions = [{
    	link: "https://github.com/tech-dojo/mern",
    	head: "Web framework MERN:",
    	body: "A React Framework for Fullstack JavaScript Web Applications."
    },{
    	link: "https://www.npmjs.com/package/generator-yomern",
    	head: "Node Package Manager:",
    	body: "CRUD Module Generator for MERN Framework."
    },{
    	link: "https://github.com/tech-dojo/ionic-fb-share",
    	head: "Facebook Sharing (Ionic Framework):",
    	body: "Showcases to share content from Ionic app to facebook"
    }]

});