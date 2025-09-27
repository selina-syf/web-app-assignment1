import * as ghpages from "gh-pages"

ghpages.publish('dist', {
    branch: "main",
    repo: "https://github.com/selina-syf/selina-syf.github.io.git"
}, function(err) {})