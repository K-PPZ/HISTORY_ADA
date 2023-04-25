function total (followers) {
    let total_followers = 0;

    for (let i = 0; i < followers.length; i++) {
        total_followers += followers[i];
    }

    return total_followers;
}
console.log(total([random(), random(), random()]));

function random () {
    return Math.floor(Math.random() * (50 - 0)) + 0;
}