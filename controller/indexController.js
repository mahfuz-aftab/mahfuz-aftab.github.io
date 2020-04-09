var app = angular.module('MahfuzPortfolio', ['ui.bootstrap','ngSanitize']);
app.controller('MainCtrl', function($scope) {

	$scope.intro = {
		text: "<h4><strong class= 'name-index' >MAHFUZ AFTAB</strong> an enthusiastic Software Engineer & Project Coordinator skilled in development, maintaining schedules to ensure customer satisfaction and business revenue. Expertise in coordinating diverse product & developer team to complete the objective.<br></br> Furthermore, a <code>JavaScript</code> enthusiast like to <code><span><</span>Code<span>/></span></code> following the best practices and proven technology to develop understandable, maintainable and robust software with firm experience in problem solving and UI design. <br></br>Finally, I am a fast learner, a strong team player with excellent social skills and an organized, detail-oriented and proactive individual.</h4>"
	};

	$scope.managerialKeys = ['Primarily responsible for the front end development, different development team coordination & project management', 'Client Communication', 'Resource Planning', 'Requirements Analysis', 'Agile', 'Software Requirement Specification', 'Reporting projects progress to Senior Management'];

	$scope.technologyStack = [{
		head: "Programming Languages",
		body: "C#, CSS3, HTML5, JavaScript, Shell Scripting, SQL and NO-SQL."
	},{
		head: "Framework / Libraries",
		body: "Angular, Express, Mongo, MySQL, Node, React, Ionic, MVC, Bootstrap, Material Design."
	}];

	$scope.responsibilities = [{
      icon: "fa fa-tasks fa-lg slideanim",
      job: "Coordinating different developer & operation teams."
    },{
      icon: "fa fa-html5 fa-lg slideanim",
      job: "Web application development using AngularJS, ReactJS, ExpressJS, Node.js and MongoDB with cutting edge HTML5 and CSS3 techniques."
    },{
      icon: "fa fa-check-square-o fa-lg slideanim",
      job: "Unit testing using Jasmine/Karma."
    },{
      icon: "fa fa-mobile fa-lg slideanim",
      job: "Hybrid / Cross Platform Mobile Application development using Ionic Framework."
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