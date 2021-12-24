import Post from './Post';

const posts=[
    {
        id:'123',
        username:'sahil132517',
        userImg:'/sImage.jpg',
        img:'instagramlogo.png',
        caption:'Instagram v2 is dope!'
    },
    {
        id:'123',
        username:'sahil132517',
        userImg:'/sImage.jpg',
        img:'instagramlogo.png',
        caption:'Instagram v2 is dope!'
    }
]


function Posts() {
    return (
        <div>
            {posts.map(post=>(
                <Post key={post.id} id={post.id} 
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}/> 
            ))}
        </div>
    )
}

export default Posts
