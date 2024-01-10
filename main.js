



const urlPosts='https://blog-api-t6u0.onrender.com/posts'
const postsContainer=document.getElementById('posts')


async function  showPost (){
    try {
        const response=await fetch(urlPosts)
        const posts=await response.json()

        posts.forEach(post=>{
            const randomImg=Math.floor(Math.random()*500)+1
            const imgUrl=`https://picsum.photos/id/${randomImg}/200/200`;

            const postElement=document.createElement('div')
            postElement.classList.add('post')
            postElement.innerHTML=`
             <h2>${post.title}</h2>
             <img src="${imgUrl}" alt="${post.title}">
             <p>${post.body}</p>


             `
            postsContainer.appendChild(postElement);
        })

    }catch (err){
        console.log("bir xeta bash verdi",err)
    }
}
showPost()
