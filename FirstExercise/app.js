const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');



btn1.addEventListener('click', () => {
    
    getTextFile();
})

btn2.addEventListener('click', () => {

    getJsonFile();

})

btn3.addEventListener('click', () => {

    getApi();
})

function getTextFile() {
    fetch('textfile.txt').then(response => response.text()).then(data =>  {

        document.getElementById("output").innerHTML += data;
    });


}

function getJsonFile() {
    fetch('jsonText.json').then(function(response) {

        return response.json();
    }).then(function(data){


        let output = "<ul>";

        data.forEach(function(article){

            output += `<li>Title: ${article.title} <br> - content: ${article.body} </li>`
        })

       

        document.getElementById("output").innerHTML += output;
        
        
    }
)}

function getApi(){
    fetch('https://api.github.com/users').then(response => response.json()).then(data => {
            let output = "<h1>Github Users</h1><ul>";

            data.forEach(user => {

                output += `<li>Username: ${user.login}</li>`;
            });

            document.getElementById("output").innerHTML += output; ;
    }
)
}
