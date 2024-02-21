sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'studentapp/test/integration/FirstJourney',
		'studentapp/test/integration/pages/studentList',
		'studentapp/test/integration/pages/studentObjectPage'
    ],
    function(JourneyRunner, opaJourney, studentList, studentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('studentapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudentList: studentList,
					onThestudentObjectPage: studentObjectPage
                }
            },
            opaJourney.run
        );
    }
);