# Chanson.net

Static GitHub Pages edition. Upload the contents of this folder to the root of the repository.

## Daily rotation

The browser calculates the correct New York date, so the site keeps rotating even if GitHub Actions is delayed. The included workflow also writes `data/current-song.json` every day and can be run manually from the Actions tab.

## Adding a song

Add one complete object to `data/songs.json`. The rotation length automatically follows the number of active records. To preserve the current 100-day schedule, add new songs at the beginning of a new cycle.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, then choose the main branch and `/ (root)`.
