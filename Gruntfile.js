module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            clinic: {
                src: ['javascript/Admin/Clinician/src/CompleteVisit.jsx',
                    'javascript/Admin/Clinician/src/SelectVisitor.jsx',
                    'javascript/Admin/Clinician/src/ClinicianChoose.jsx',
                    'javascript/Admin/Clinician/src/Dashboard.jsx'
                ],
                dest: 'javascript/Admin/Clinician/tmp/joined.jsx'
            },
            desk: {
                src: ['javascript/Admin/FrontDesk/src/Mixins.jsx',
                    'javascript/Admin/FrontDesk/src/Summary.jsx',
                    'javascript/Admin/FrontDesk/src/Emergency.jsx',
                    'javascript/Admin/FrontDesk/src/Waiting.jsx',
                    'javascript/Admin/FrontDesk/src/Dashboard.jsx'
                ],
                dest: 'javascript/Admin/FrontDesk/tmp/joined.jsx'
            },
            settings: {
                src: ['javascript/Admin/Settings/src/Mixins.jsx',
                    'javascript/Admin/Settings/src/Visitors.jsx',
                    'javascript/Admin/Settings/src/Clinicians.jsx',
                    'javascript/Admin/Settings/src/Visits.jsx',
                    'javascript/Admin/Settings/src/Reasons.jsx',
                    'javascript/Admin/Settings/src/Dispositions.jsx',
                    'javascript/Admin/Settings/src/Dashboard.jsx'
                ],
                dest: 'javascript/Admin/Settings/tmp/joined.jsx'
            },
            user: {
                src: ['javascript/User/Checkin/src/Mixins.jsx',
                    'javascript/User/Checkin/src/Swipe.jsx',
                    'javascript/User/Checkin/src/Reason.jsx',
                    'javascript/User/Checkin/src/Phone.jsx',
                    'javascript/User/Checkin/src/Emergency.jsx',
                    'javascript/User/Checkin/src/Instruction.jsx',
                    'javascript/User/Checkin/src/Login.jsx'
                ],
                dest: 'javascript/User/Checkin/tmp/joined.jsx'
            }
        },
        babel: {
            dist: {
                files: {
                    'javascript/Admin/Clinician/build/script.js': 'javascript/Admin/Clinician/tmp/joined.jsx',
                    'javascript/Admin/FrontDesk/build/script.js': 'javascript/Admin/FrontDesk/tmp/joined.jsx',
                    'javascript/Admin/Settings/build/script.js': 'javascript/Admin/Settings/tmp/joined.jsx',
                    'javascript/User/Checkin/build/script.js': 'javascript/User/Checkin/tmp/joined.jsx'
                }
            }
        },
        uglify: {
            admin: {
                files: {
                    'javascript/Admin/Clinician/build/script.min.js': 'javascript/Admin/Clinician/build/script.js',
                    'javascript/Admin/FrontDesk/build/script.min.js': 'javascript/Admin/FrontDesk/build/script.js',
                    'javascript/Admin/Settings/build/script.min.js': 'javascript/Admin/Settings/build/script.js',
                    'javascript/User/Checkin/build/script.min.js': 'javascript/User/Checkin/build/script.js'
                }
            }
        },
        clean: {
            tmp: ['javascript/Admin/Clinician/tmp/',
                'javascript/Admin/FrontDesk/tmp/',
                'javascript/Admin/Settings/tmp/',
                'javascript/User/Checkin/tmp/'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ['concat', 'babel', 'uglify', 'clean']);
}
