

const API_KEY = "cec41d2c85794851f3f325f5b7a3ba07"
const baseURL = "https://gnews.io/api/v4";
const path = "/top-headlines";
const query = `?token=${API_KEY}`;



const fetchAsync = async () => {
  const url = baseURL + path + query;
  let response = await fetch(url);
  let data = await response.json();
  console.log("data object", data);
  const articles = data.articles;
  const totalArticles = data.totalArticles;
  console.log(`Title is: ${articles[9].title}`);

  const htmltilearea = document.getElementById('titleArea')
 
 
  

  const htmlOutput = articles.map((singleArticle) => {

   return renderArticle(singleArticle);
  });
  htmltilearea.innerHTML = htmlOutput.join("");

  return;
};




function renderArticle(singleArticle) {
  console.log(Object.keys(singleArticle));
  'title', 'description', 'content', 'url', 'image', 'publishedAt', 'source'
  return `
    <li class = "news-container" >
     
       <img src="${singleArticle.image}" width = 400px>

      <div class ="content-container">
         <h1>${singleArticle.title}</h1>
      
        <p>${singleArticle.description}</p>
        <h4>By : ${singleArticle.source.name}</h4>
        <a href =${singleArticle.url} target ="_blank">Go to detail</a>
        </div>
        
    </li>
  `;
}
fetchAsync();




