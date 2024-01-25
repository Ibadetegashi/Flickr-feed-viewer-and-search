# Flickr-feed-viewer-and-search


## Overview

This web application is a simple tool that allows users to search Flickr's public feeds and view images along with additional details. It leverages Flickr's JSONP API to provide real-time/instant results as the user types, displaying images as thumbnails along with the author, tags, and a link to the high-resolution image for a more immersive viewing experience.

## Features

- **Real-time Search:** Get instant results as you type, enhancing the user experience.
- **Author Information:** View the author's name for each image.
- **Tags Display:** Explore relevant tags associated with each image.
- **High-Resolution Link:** Easily access the high-resolution version of any selected image.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Ibadetegashi/Flickr-feed-viewer-and-search.git

2. Navigate to the project directory:  Flickr-feed-viewer-and-search

3. Install dependencies: `npm install`

## Environments

1. Create a environments folder in directory Flickr-feed-viewer-and-search/src
2. In this folder create two files:
    - src/environments/`environment.development.ts`
    - src/environments/`environment.ts` 
  
Make sure to replace 'your-api-key' and 'your-api-secret' with your actual API key and secret in both `environment.development.ts` and `environment.ts` files.

   ```typescript
   // src/environments/environment.development.ts

   export const environment = {
       key: 'your-api-key',
       secret: 'your-api-secret'
   };

 ```

    ```typescript 
    // src/environments/environment.ts

   export const environment = {
       key: 'your-api-key',
       secret: 'your-api-secret'
   };
```
# Usage
Run `ng serve`. Navigate to `http://localhost:4200

