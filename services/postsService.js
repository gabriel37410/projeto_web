var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro post blabla',
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo post blabla blabla',
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'post3.jpg',
            description: 'Meu terceiro post',
            body: 'Meu terceiro post blabla blabla',
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'post4.jpg',
            description: 'Meu quarto post',
            body: 'Meu quarto post blabla blabla',
        },
    ];

    return posts;
}

module.exports = {
    getPosts: getPosts
}