//dummy data
const posts = [

    {
        title :"this is a title1" ,
        body : "this is body1"
    } ,

    {
        title :"this is a title2" ,
        body : "this is body2"
    } ,

    
    {
        title :"this is a title3" ,
        body : "this is body3"
    } ,

    {
        title :"this is a title4" ,
        body : "this is body4"
    } ,

    
    {
        title :"this is a title5" ,
        body : "this is body5"
    } ,

    {
        title :"this is a title6" ,
        body : "this is body6"
    } ,

    
    {
        title :"this is a title7" ,
        body : "this is body7"
    } ,

    {
        title :"this is a title8" ,
        body : "this is body8"
    }


];

// Selection 

 //<div class="post">
          //<h4 class="post-title">Post title</h4>
        //  <p class="post-body">Post description 1</p>
      //  </div>

     const postsElement = document .querySelector('.post');

       const loadAllDATA = () =>{
        posts.map(post =>{
            const postElement = document.createElement("div");

           postElement.classList.add("post");
           postElement .innerHTML =`

             <h4 class="post-title">Post title</h4>
          <p class="post-body">Post description 1</p>

          `;
           
            postsElement.appendChild(postElement);
        });
       
       };
       loadAllDATA();