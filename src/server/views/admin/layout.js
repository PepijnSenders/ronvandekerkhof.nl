export function layout(content) {
    return html`
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">

            <title>Admin</title>
        </head>
        <body>

            <div class="container">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav">
                                    <li><a href="/admin/date">Dates</a></li>
                                    <li><a href="/admin/about">About</a></li>
                                    <li><a href="/admin/portfolio">Portfolio</a></li>
                                    <li><a href="/admin/publicity">Publicity</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="jumbotron">
                    ${content}
                </div>

            </div>


        </body>
        </html>
    `;
}
