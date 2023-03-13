const usemin = require('usemin');

module.exports=function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt,{
    useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass:{
            dist:{
               files:[{
                    expand: true,
                    cwd:'css',
                    src:['*.scss'],
                    dest:'css',
                    ext:'.css'
                 
                }]
            }
        },
        
        watch:{
            files: ['css/*.scss'],
            tasks: ['css']
        },

        browserSync: {
            dev:{
                bsFiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'HTML/*.css',
                        'javaScript/*.js'
                    ]
                },
                options:{
                    watchTask:true,
                    server: {
                        baseDir:'./'
                    }
                }
            }
        },

        imagemin:{
            dynamic:{
                files:[{
                    expand:true,
                    cwd:'./',
                    src:'imagenesUtilizadas/*.{png,gif,jpg,jpeg}',
                    dest:'dist/'
                }]
            }
        }, 
        copy: {
            html: {
                files:[{
                    expand: true,
                    dot: true,
                    cwd:'./',
                    src: ['*.html', 'HTML/*.html'],
                    dest: 'dist'
                }]

              
            }
        },
        clean: {
            build: {
                src:['dist/']
            }
        },
        cssmin: {
            options: {
                rebase: false
              },
              dist: {}
          },
        uglify: {
            dist: {}
        },
        filerev:{
            options:{
                encoging:'utf8',
                alorithm:'md5',
                length:20
            }
        },
        release: {
            files:[{
                src:[
                    'dist/js/*.js',
                    'dist/css/*.css'
                ]
            }]
        },
        concat:{
            options:{
                separator: ';'
            },
            dist:{

            }
        },
        useminPrepare:{
            foo:{
                dest: 'dist',
                src:['index.html','Cursos.html']
            },
            options:{
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js:['uglify']
                    },
                    post:{
                        css:[{
                            name: 'cssmin',
                            createConfig: function (context, block){
                                var generated= context.options.generated;
                                // Agregar una ruta de destino diferente para el archivo CSS generado
                                generated.options={
                                    keepSpecialConments:0,
                                    rebase:false,
                                   
                                }
                            }
                        }]
                    }
                },
                // Eliminar la opción dest de nivel superior
                // dest: 'dist/css'
            }
        },
        usemin: {
            html: [ 'dist/index.hml', 'dist/HTML/Cursos.html'],
            options:['dist', 'dist/css', 'dist/js']
        }
    
    });



    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default',['browserSync','watch']);
    grunt.registerTask('img:compress',['imagemin'])
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ])
   
};