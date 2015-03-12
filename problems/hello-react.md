# Hello React

## create file hello-react.html

    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello React</title>
        <script src="http://fb.me/react-0.12.2.js"></script>
        <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
      </head>
      <body>
        <div id="example"></div>
        <script type="text/jsx">

          // ** Your code goes here! **

        </script>
      </body>
    </html>

## add this script to the text/jsx section

    var HelloWorld = React.createClass({
      render: function() {
        return (
          <p>
            Hello, <input type="text" placeholder="Your name here" />!
            It is {this.props.date.toTimeString()}
          </p>
        );
      }
    });

    setInterval(function() {
      React.render(
        <HelloWorld date={new Date()} />,
        document.getElementById('example')
      );
    }, 500);
