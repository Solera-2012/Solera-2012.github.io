controllers.home_page = function(data, params) {
  console.log("Controller for home page recieved the following data:\n" + data)

  var all_posts = JSON.parse(data);

  var posts_to_show = all_posts.length; //Math.min(3, all_posts.length);
  console.log("Try to show " + posts_to_show + " posts");

  var template_context = [];
  for (var i = 0; i < posts_to_show; i++) {
    var post = all_posts[i];
    var item = {
      'link': utils.get_link(post),
      'title': post.post.replace(/-/g, ' '),
      'snippet': post.snippet,
      'tags': post.tags.join(', ')
    };
    template_context.push(item);
  }

  //get recent posts
  var recent_posts = templates.recent_posts(template_context);

  //get hello text
  var hello_text = templates.hello_text();

  var final_content = hello_text + recent_posts;
  utils.render('page-content', final_content);
};

controllers.home_page_error = function(data, params) {
  utils.render('page-content', data);
};

controllers.show_loader = function(element) {
  utils.render(element, templates.loader());
}
