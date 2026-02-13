[Metflix Github Repo](https://github.com/HassanIrfan527/metflix)
Role: Admin, solo
# MetFlix

MetFlix is a movie database application built with Laravel. It allows users to browse, search, and view details about various movies.
To see an overview of the website, see this video:
[MetFlix Overview](https://www.loom.com/share/c4ef878a4b8c425ead68d366d56e6bcc?sid=5a1a209d-3a13-4ec7-9b08-a88cc1dfc191)

## Features

- Browse movies by year
- Search for movies by title
- View detailed information about each movie, including title, year, genre, description, directors, actors, and rating
- Integration with The Movie Database (TMDb) and OMDB API for fetching movie data
- Artisan command to fetch movie data at once:
```php
php artisan movies:update
php artisan movie:create IronMan
```
## Requirements

- PHP ^8.2
- Composer
- Laravel ^11.31
- Node.js and npm