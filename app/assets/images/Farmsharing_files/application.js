<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    .hidden {
      display: none;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a.trace-frames { color: #666; }
    a:hover { color: #C52F24; }
    a.trace-frames.selected { color: #C52F24 }

      #route_table {
    margin: 0;
    border-collapse: collapse;
  }

  #route_table thead tr {
    border-bottom: 2px solid #ddd;
  }

  #route_table thead tr.bottom {
    border-bottom: none;
  }

  #route_table thead tr.bottom th {
    padding: 10px 0;
    line-height: 15px;
  }

  #route_table tbody tr {
    border-bottom: 1px solid #ddd;
  }

  #route_table tbody tr:nth-child(odd) {
    background: #f2f2f2;
  }

  #route_table tbody.exact_matches,
  #route_table tbody.fuzzy_matches {
    background-color: LightGoldenRodYellow;
    border-bottom: solid 2px SlateGrey;
  }

  #route_table tbody.exact_matches tr,
  #route_table tbody.fuzzy_matches tr {
    background: none;
    border-bottom: none;
  }

  #route_table td {
    padding: 4px 30px;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/application.js&quot;</h2>

  
<p><code>Rails.root: /vagrant/farmsharing</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.3.0) lib/web_console/middleware.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">railties (4.2.4) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (4.2.4) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">railties (4.2.4) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">rack (1.6.4) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.4) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">activesupport (4.2.4) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.4) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/static.rb:116:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">rack (1.6.4) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">railties (4.2.4) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">railties (4.2.4) lib/rails/application.rb:165:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.4) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">rack (1.6.4) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">rack (1.6.4) lib/rack/handler/webrick.rb:88:in `service&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code><a class="trace-frames" data-frame-id="0" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="1" href="#">web-console (2.3.0) lib/web_console/middleware.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="2" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `catch&#39;</a><br><a class="trace-frames" data-frame-id="3" href="#">web-console (2.3.0) lib/web_console/middleware.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="4" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;</a><br><a class="trace-frames" data-frame-id="5" href="#">railties (4.2.4) lib/rails/rack/logger.rb:38:in `call_app&#39;</a><br><a class="trace-frames" data-frame-id="6" href="#">railties (4.2.4) lib/rails/rack/logger.rb:20:in `block in call&#39;</a><br><a class="trace-frames" data-frame-id="7" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;</a><br><a class="trace-frames" data-frame-id="8" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:26:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="9" href="#">activesupport (4.2.4) lib/active_support/tagged_logging.rb:68:in `tagged&#39;</a><br><a class="trace-frames" data-frame-id="10" href="#">railties (4.2.4) lib/rails/rack/logger.rb:20:in `call&#39;</a><br><a class="trace-frames" data-frame-id="11" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;</a><br><a class="trace-frames" data-frame-id="12" href="#">rack (1.6.4) lib/rack/methodoverride.rb:22:in `call&#39;</a><br><a class="trace-frames" data-frame-id="13" href="#">rack (1.6.4) lib/rack/runtime.rb:18:in `call&#39;</a><br><a class="trace-frames" data-frame-id="14" href="#">activesupport (4.2.4) lib/active_support/cache/strategy/local_cache_middleware.rb:28:in `call&#39;</a><br><a class="trace-frames" data-frame-id="15" href="#">rack (1.6.4) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="16" href="#">actionpack (4.2.4) lib/action_dispatch/middleware/static.rb:116:in `call&#39;</a><br><a class="trace-frames" data-frame-id="17" href="#">rack (1.6.4) lib/rack/sendfile.rb:113:in `call&#39;</a><br><a class="trace-frames" data-frame-id="18" href="#">railties (4.2.4) lib/rails/engine.rb:518:in `call&#39;</a><br><a class="trace-frames" data-frame-id="19" href="#">railties (4.2.4) lib/rails/application.rb:165:in `call&#39;</a><br><a class="trace-frames" data-frame-id="20" href="#">rack (1.6.4) lib/rack/lock.rb:17:in `call&#39;</a><br><a class="trace-frames" data-frame-id="21" href="#">rack (1.6.4) lib/rack/content_length.rb:15:in `call&#39;</a><br><a class="trace-frames" data-frame-id="22" href="#">rack (1.6.4) lib/rack/handler/webrick.rb:88:in `service&#39;</a><br><a class="trace-frames" data-frame-id="23" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/httpserver.rb:138:in `service&#39;</a><br><a class="trace-frames" data-frame-id="24" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/httpserver.rb:94:in `run&#39;</a><br><a class="trace-frames" data-frame-id="25" href="#">/home/vagrant/.rvm/rubies/ruby-2.2.3/lib/ruby/2.2.0/webrick/server.rb:294:in `block in start_thread&#39;</a><br></code></pre>
    </div>

  <script type="text/javascript">
    var traceFrames = document.getElementsByClassName('trace-frames');
    var selectedFrame, currentSource = document.getElementById('frame-source-0');

    // Add click listeners for all stack frames
    for (var i = 0; i < traceFrames.length; i++) {
      traceFrames[i].addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target;
        var frame_id = target.dataset.frameId;

        if (selectedFrame) {
          selectedFrame.className = selectedFrame.className.replace("selected", "");
        }

        target.className += " selected";
        selectedFrame = target;

        // Change the extracted source code
        changeSourceExtract(frame_id);
      });

      function changeSourceExtract(frame_id) {
        var el = document.getElementById('frame-source-' + frame_id);
        if (currentSource && el) {
          currentSource.className += " hidden";
          el.className = el.className.replace(" hidden", "");
          currentSource = el;
        }
      }
    }
  </script>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" title="Returns a relative path (without the http or domain)" href="#">Path</a> /
        <a data-route-helper="_url" title="Returns an absolute url (with the http and domain)" href="#">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="search" placeholder="Path Match" type="search" name="path[]" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='exact_matches' id='exact_matches'>
  </tbody>
  <tbody class='fuzzy_matches' id='fuzzy_matches'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='new_member_session'>
      new_member_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/sign_in(.:format)' data-regexp='^\/members\/sign_in(?:\.([^\/.?]+))?$'>
    /members/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#new'>
    devise/sessions#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='member_session'>
      member_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/members/sign_in(.:format)' data-regexp='^\/members\/sign_in(?:\.([^\/.?]+))?$'>
    /members/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#create'>
    devise/sessions#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='destroy_member_session'>
      destroy_member_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/members/sign_out(.:format)' data-regexp='^\/members\/sign_out(?:\.([^\/.?]+))?$'>
    /members/sign_out(.:format)
  </td>
  <td data-route-reqs='devise/sessions#destroy'>
    devise/sessions#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='member_password'>
      member_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/members/password(.:format)' data-regexp='^\/members\/password(?:\.([^\/.?]+))?$'>
    /members/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#create'>
    devise/passwords#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_member_password'>
      new_member_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/password/new(.:format)' data-regexp='^\/members\/password\/new(?:\.([^\/.?]+))?$'>
    /members/password/new(.:format)
  </td>
  <td data-route-reqs='devise/passwords#new'>
    devise/passwords#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_member_password'>
      edit_member_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/password/edit(.:format)' data-regexp='^\/members\/password\/edit(?:\.([^\/.?]+))?$'>
    /members/password/edit(.:format)
  </td>
  <td data-route-reqs='devise/passwords#edit'>
    devise/passwords#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/members/password(.:format)' data-regexp='^\/members\/password(?:\.([^\/.?]+))?$'>
    /members/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/members/password(.:format)' data-regexp='^\/members\/password(?:\.([^\/.?]+))?$'>
    /members/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='cancel_member_registration'>
      cancel_member_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/cancel(.:format)' data-regexp='^\/members\/cancel(?:\.([^\/.?]+))?$'>
    /members/cancel(.:format)
  </td>
  <td data-route-reqs='members/registrations#cancel'>
    members/registrations#cancel
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='member_registration'>
      member_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members/registrations#create'>
    members/registrations#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_member_registration'>
      new_member_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/sign_up(.:format)' data-regexp='^\/members\/sign_up(?:\.([^\/.?]+))?$'>
    /members/sign_up(.:format)
  </td>
  <td data-route-reqs='members/registrations#new'>
    members/registrations#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_member_registration'>
      edit_member_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/edit(.:format)' data-regexp='^\/members\/edit(?:\.([^\/.?]+))?$'>
    /members/edit(.:format)
  </td>
  <td data-route-reqs='members/registrations#edit'>
    members/registrations#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members/registrations#update'>
    members/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members/registrations#update'>
    members/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members/registrations#destroy'>
    members/registrations#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='static_pages#home'>
    static_pages#home
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='items'>
      items<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items(.:format)' data-regexp='^\/items(?:\.([^\/.?]+))?$'>
    /items(.:format)
  </td>
  <td data-route-reqs='items#index'>
    items#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='help'>
      help<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/help(.:format)' data-regexp='^\/help(?:\.([^\/.?]+))?$'>
    /help(.:format)
  </td>
  <td data-route-reqs='static_pages#help'>
    static_pages#help
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='about'>
      about<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/about(.:format)' data-regexp='^\/about(?:\.([^\/.?]+))?$'>
    /about(.:format)
  </td>
  <td data-route-reqs='static_pages#about'>
    static_pages#about
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='contact'>
      contact<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/contact(.:format)' data-regexp='^\/contact(?:\.([^\/.?]+))?$'>
    /contact(.:format)
  </td>
  <td data-route-reqs='static_pages#contact'>
    static_pages#contact
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items(.:format)' data-regexp='^\/items(?:\.([^\/.?]+))?$'>
    /items(.:format)
  </td>
  <td data-route-reqs='items#index'>
    items#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/items(.:format)' data-regexp='^\/items(?:\.([^\/.?]+))?$'>
    /items(.:format)
  </td>
  <td data-route-reqs='items#create'>
    items#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_item'>
      new_item<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/new(.:format)' data-regexp='^\/items\/new(?:\.([^\/.?]+))?$'>
    /items/new(.:format)
  </td>
  <td data-route-reqs='items#new'>
    items#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_item'>
      edit_item<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/:id/edit(.:format)' data-regexp='^\/items\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /items/:id/edit(.:format)
  </td>
  <td data-route-reqs='items#edit'>
    items#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='item'>
      item<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#show'>
    items#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#update'>
    items#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#update'>
    items#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#destroy'>
    items#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='item_likes'>
      item_likes<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/items/:item_id/likes(.:format)' data-regexp='^\/items\/([^\/.?]+)\/likes(?:\.([^\/.?]+))?$'>
    /items/:item_id/likes(.:format)
  </td>
  <td data-route-reqs='likes#create'>
    likes#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/items/:item_id/likes(.:format)' data-regexp='^\/items\/([^\/.?]+)\/likes(?:\.([^\/.?]+))?$'>
    /items/:item_id/likes(.:format)
  </td>
  <td data-route-reqs='likes#destroy'>
    likes#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items(.:format)' data-regexp='^\/items(?:\.([^\/.?]+))?$'>
    /items(.:format)
  </td>
  <td data-route-reqs='items#index'>
    items#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/items(.:format)' data-regexp='^\/items(?:\.([^\/.?]+))?$'>
    /items(.:format)
  </td>
  <td data-route-reqs='items#create'>
    items#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/new(.:format)' data-regexp='^\/items\/new(?:\.([^\/.?]+))?$'>
    /items/new(.:format)
  </td>
  <td data-route-reqs='items#new'>
    items#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/:id/edit(.:format)' data-regexp='^\/items\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /items/:id/edit(.:format)
  </td>
  <td data-route-reqs='items#edit'>
    items#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#show'>
    items#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#update'>
    items#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#update'>
    items#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/items/:id(.:format)' data-regexp='^\/items\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /items/:id(.:format)
  </td>
  <td data-route-reqs='items#destroy'>
    items#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='member_relationships'>
      member_relationships<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/members/:member_id/relationships(.:format)' data-regexp='^\/members\/([^\/.?]+)\/relationships(?:\.([^\/.?]+))?$'>
    /members/:member_id/relationships(.:format)
  </td>
  <td data-route-reqs='relationships#create'>
    relationships#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/members/:member_id/relationships(.:format)' data-regexp='^\/members\/([^\/.?]+)\/relationships(?:\.([^\/.?]+))?$'>
    /members/:member_id/relationships(.:format)
  </td>
  <td data-route-reqs='relationships#destroy'>
    relationships#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='followings_member'>
      followings_member<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/:id/followings(.:format)' data-regexp='^\/members\/([^\/.?]+)\/followings(?:\.([^\/.?]+))?$'>
    /members/:id/followings(.:format)
  </td>
  <td data-route-reqs='members#followings'>
    members#followings
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='followers_member'>
      followers_member<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/:id/followers(.:format)' data-regexp='^\/members\/([^\/.?]+)\/followers(?:\.([^\/.?]+))?$'>
    /members/:id/followers(.:format)
  </td>
  <td data-route-reqs='members#followers'>
    members#followers
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='members'>
      members<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members#index'>
    members#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/members(.:format)' data-regexp='^\/members(?:\.([^\/.?]+))?$'>
    /members(.:format)
  </td>
  <td data-route-reqs='members#create'>
    members#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_member'>
      new_member<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/new(.:format)' data-regexp='^\/members\/new(?:\.([^\/.?]+))?$'>
    /members/new(.:format)
  </td>
  <td data-route-reqs='members#new'>
    members#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_member'>
      edit_member<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/:id/edit(.:format)' data-regexp='^\/members\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /members/:id/edit(.:format)
  </td>
  <td data-route-reqs='members#edit'>
    members#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='member'>
      member<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/members/:id(.:format)' data-regexp='^\/members\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /members/:id(.:format)
  </td>
  <td data-route-reqs='members#show'>
    members#show
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/members/:id(.:format)' data-regexp='^\/members\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /members/:id(.:format)
  </td>
  <td data-route-reqs='members#update'>
    members#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/members/:id(.:format)' data-regexp='^\/members\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /members/:id(.:format)
  </td>
  <td data-route-reqs='members#update'>
    members#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/members/:id(.:format)' data-regexp='^\/members\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /members/:id(.:format)
  </td>
  <td data-route-reqs='members#destroy'>
    members#destroy
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  // Iterates each element through a function
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  // Sets innerHTML for an element
  function setContent(elem, text) {
    elem.innerHTML = text;
  }

  // Enables path search functionality
  function setupMatchPaths() {
    // Check if the user input (sanitized as a path) matches the regexp data attribute
    function checkExactMatch(section, elem, value) {
      var string = sanitizePath(value),
          regexp = elem.getAttribute("data-regexp");

      showMatch(string, regexp, section, elem);
    }

    // Check if the route path data attribute contains the user input
    function checkFuzzyMatch(section, elem, value) {
      var string = elem.getAttribute("data-route-path"),
          regexp = value;

      showMatch(string, regexp, section, elem);
    }

    // Display the parent <tr> element in the appropriate section when there's a match
    function showMatch(string, regexp, section, elem) {
      if(string.match(RegExp(regexp))) {
        section.appendChild(elem.parentNode.cloneNode(true));
      }
    }

    // Check if there are any matched results in a section
    function checkNoMatch(section, defaultText, noMatchText) {
      if (section.innerHTML === defaultText) {
        setContent(section, defaultText + noMatchText);
      }
    }

    // Ensure path always starts with a slash "/" and remove params or fragments
    function sanitizePath(path) {
      var path = path.charAt(0) == '/' ? path : "/" + path;
      return path.replace(/\#.*|\?.*/, '');
    }

    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        searchElem      = document.querySelector('#search'),
        exactMatches    = document.querySelector('#exact_matches'),
        fuzzyMatches    = document.querySelector('#fuzzy_matches');

    // Remove matches when no search value is present
    searchElem.onblur = function(e) {
      if (searchElem.value === "") {
        setContent(exactMatches, "");
        setContent(fuzzyMatches, "");
      }
    }

    // On key press perform a search for matching paths
    searchElem.onkeyup = function(e){
      var userInput         = searchElem.value,
          defaultExactMatch = '<tr><th colspan="4">Paths Matching (' + escape(sanitizePath(userInput)) +'):</th></tr>',
          defaultFuzzyMatch = '<tr><th colspan="4">Paths Containing (' + escape(userInput) +'):</th></tr>',
          noExactMatch      = '<tr><th colspan="4">No Exact Matches Found</th></tr>',
          noFuzzyMatch      = '<tr><th colspan="4">No Fuzzy Matches Found</th></tr>';

      // Clear out results section
      setContent(exactMatches, defaultExactMatch);
      setContent(fuzzyMatches, defaultFuzzyMatch);

      // Display exact matches and fuzzy matches
      each(regexpElems, function(elem) {
        checkExactMatch(exactMatches, elem, userInput);
        checkFuzzyMatch(fuzzyMatches, elem, userInput);
      })

      // Display 'No Matches' message when no matches are found
      checkNoMatch(exactMatches, defaultExactMatch, noExactMatch);
      checkNoMatch(fuzzyMatches, defaultFuzzyMatch, noFuzzyMatch);
    }
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {

    // Sets content for each element
    function setValOn(elems, val) {
      each(elems, function(elem) {
        setContent(elem, val);
      });
    }

    // Sets onClick event for each element
    function onClick(elems, func) {
      each(elems, function(elem) {
        elem.onclick = func;
      });
    }

    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');

      setValOn(helperElems, helperTxt);
    });
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>


  

<h2 style="margin-top: 30px">Request</h2>
<p><b>Parameters</b>:</p> <pre>None</pre>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleSessionDump()">Toggle session dump</a></div>
  <div id="session_dump" style="display:none"><pre>_csrf_token: &quot;z8M6cxDrBr5HruSWJpetRlyJUj9tJsVX362U9PbYkJ8=&quot;
flash: {&quot;discard&quot;=&gt;[&quot;notice&quot;], &quot;flashes&quot;=&gt;{&quot;notice&quot;=&gt;&quot;Item was successfully destroyed.&quot;}}
session_id: &quot;7791d013da2c3c64d73eb7e7530a9836&quot;
warden.user.member.key: [[2], &quot;$2a$11$.SExaM2m72GEG4ndIYWghO&quot;]</pre></div>
</div>

<div class="details">
  <div class="summary"><a href="#" onclick="return toggleEnvDump()">Toggle env dump</a></div>
  <div id="env_dump" style="display:none"><pre>GATEWAY_INTERFACE: &quot;CGI/1.1&quot;
HTTP_ACCEPT: &quot;*/*&quot;
HTTP_ACCEPT_ENCODING: &quot;gzip, deflate, sdch&quot;
HTTP_ACCEPT_LANGUAGE: &quot;ja,en-US;q=0.8,en;q=0.6&quot;
REMOTE_ADDR: &quot;10.0.2.2&quot;
REMOTE_HOST: &quot;10.0.2.2&quot;
SERVER_NAME: &quot;localhost&quot;
SERVER_PROTOCOL: &quot;HTTP/1.1&quot;</pre></div>
</div>

<h2 style="margin-top: 30px">Response</h2>
<p><b>Headers</b>:</p> <pre>None</pre>

</div>


</body>
</html>
