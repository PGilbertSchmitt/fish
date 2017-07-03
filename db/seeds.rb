# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all

Project.create!([
    {
        title:              "Gogol",
        desc:               "Configurable Game of Life",
        post_url:           "gogol.md",
        github_url:         "PGilbertSchmitt/gogol",
        live_url:           "https://pgilbertschmitt.github.io/gogol/",
        slug:               "gogol",
        stack:              "HTML/CSS, JavaScript, React/Redux",
        thumbnail_path:     "MNQO9VSK",
        header_img_path:    "g7mG1kGN"
    },
    {
        title:              "VSCode Org Mode",
        desc:               "Brings emacs org mode extension to Visual Studio Code",
        post_url:           "orgmode.md",
        github_url:         "jsonreeder/vscode-org-mode",
        live_url:           "https://marketplace.visualstudio.com/items?itemName=tootone.org-mode",
        slug:               "vscode-org-mode",
        stack:              "TypeScript",
        thumbnail_path:     "Uy0lyzDm",
        header_img_path:    "MNFGoNyB"
    },
    {
        title:              "Project Ember",
        desc:               "Interactive community experience by SF-based artist Jason Rasmussen",
        post_url:           "ember.md",
        github_url:         "PGilbertSchmitt/Ember-v3-Prototype",
        live_url:           "http://overzero.org/",
        slug:               "project-ember",
        stack:              "C++, Arduino",
        thumbnail_path:     "DxhI0UY3",
        header_img_path:    "CNFMvp5F"
    }
])