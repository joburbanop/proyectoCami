module.exports=function(grunt){
    grunt.initConfig({
        sass:{
            dist:{
                expand: true,
                cwd:'css',
                src:['*.css'],
                dest:'css',
                ext:'.css'
            }
        }
    });

    grunt.loadNmpTasks('grunt-contrib-sass');
    grunt.registerTask('css', ['sass']);

};