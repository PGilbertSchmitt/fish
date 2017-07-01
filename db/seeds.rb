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
        title:      "Gogol",
        desc:       "Configurable Game of Life",
        post_url:   "gogol.md",
        github_url: "PGilbertSchmitt/gogol",
        live_url:   "https://pgilbertschmitt.github.io/gogol/",
        slug:       "gogol.md",
        img_url:    "MNQO9VSK",
        stack:      "HTML/CSS, JavaScript, React/Redux"
    },
    {
        title:      "VSCode Org Mode",
        desc:       "Brings emacs org mode extension to Visual Studio Code",
        post_url:   "orgmode.md",
        github_url: "jsonreeder/vscode-org-mode",
        live_url:   "https://marketplace.visualstudio.com/items?itemName=tootone.org-mode",
        slug:       "vscode-org-mode",
        img_url:    "Uy0lyzDm",
        stack:      "TypeScript"
    },
    {
        title:      "Project Ember",
        desc:       "Interactive community experience by SF-based artist Jason Rasmussen",
        post_url:   "ember.md",
        github_url: "PGilbertSchmitt/Ember-v3-Prototype",
        live_url:   "http://overzero.org/",
        slug:       "project-ember",
        img_url:    "DxhI0UY3",
        stack:      "C++, Arduino"
    }
])