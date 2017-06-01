function post_stub(post){
  var content = `
      <h3><a href="`+post.link+`">`+ post.title +`</a> <i>`+ post.tags +`</i></h3>
      <p>`+ post.snippet +`</p>
  `;

  return content
}

function run_strapdown_insert(){
  var content = `
  <script type="text/javascript">
  //
  $(function () {
      console.log("The document is ready! Now render the markdown");
  });
  </script>
  `;

  return content;
}


templates.recent_posts = function(data){
    var content = `
        <div id="recent_posts" class="">
            <h2>Manifesto</h2>
    `;
    for(var i = 0; i < data.length; i++) {
        var post = data[i]
        content = content + post_stub(post)
    }
    content = content + '</div>';

    return content;
};



templates.post_body = function(md){
  var content = `
    <xmp theme="united" style="display:none;">`
    + md +`
    </xmp>
  ` //+ run_strapdown_insert();

  return content;

}
