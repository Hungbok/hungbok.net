$(document).ready(function(){
    $("body").append('<footer>'+
                        '<div class="footer">'+
                            '<div class="copyright"></div>'+
                        '</div>'+
                    '</footer>');
    $("body").append('<style>'+
                        '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap"); .footer { width: 100%; height: 350px; text-align: center; font-weight: bold; font-size: 16px; color: var(--subtitle); background-color: var(--container); filter: drop-shadow(0px 0px 2.5px rgb(0, 0, 0)); display: flex; align-content: center; justify-content: center; align-items: center; font-family: "Noto Sans", sans-serif; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; -ms-transition: all 0.5s; transition: all 0.5s; } .copyright { width: 80%; } .copyright::after { content: "Copyright 2021-2023. HungBok All Rights Reserved."; }');
                    '</style>'}
);