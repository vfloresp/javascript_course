

// const blogs=[
//     {title: 'mac n cheese', likes:30},
//     {title: 'thins to do', likes:50}
// ];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@email.com',
    location: 'berlin',
    blogs: [
        { title: 'mac n cheese', likes: 30 },
        { title: 'thins to do', likes: 50 }
    ],
    login: function () {
        console.log('the user logged in');
    },
    logout: function () {
        console.log('the user logged out');
    },
    logBlogs() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(function (blog) {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);

const key = 'location';
console.log(user[key]);

console.log(typeof user);

user.login();
user.logout();

user.logBlogs();