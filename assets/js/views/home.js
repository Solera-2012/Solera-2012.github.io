views.home = function(data, params){
    console.log("Render home view")
    var api_stub = 'posts/index.json';

    utils.request(
        api_stub,
        'home_page',
        'home_page_error'
    );
};
