var getPosts = function() {
    var posts = [
        {
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro post blabla'
        },
        {
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo post blabla blabla' 
        },
    ];

    return posts;
}

module.exports = {
    getPosts: getPosts
}