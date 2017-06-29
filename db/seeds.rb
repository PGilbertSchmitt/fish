# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create!([
    {
        title:      "First project",
        desc:       "This is the first project. It is a standin for a tangible project.",
        post_url:   "portfolio/first.md",
        github_url: "PGilbertSchmitt/gogol",
        live_url:   "https://pgilbertschmitt.github.io/gogol/",
        slug:       "first-project"
    },
    {
        title:      "Second project",
        desc:       "This is the second project. It isn't all that special, really...",
        post_url:   "portfolio/second.md",
        slug:       "second-project"
    }
])