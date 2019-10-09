# CoderSchool FTW - * GOOGLE NEWS *

Created with love by: <Hang & >
  

## Netlify link

[Demo here]()


## User Stories

Required Stories 🚦🎯🍾

* [x] The user can see a list of the 20 latest top news stories, loaded dynamically from newsapi.
* [x] For each story, the user sees a headline, the source, a link to more, and an image.
* [x] The user can see the total number of stories currently shown.


Optional Stories

Feel free to experiment with stories here. They are roughly sorted in order of estimated difficulty.

* [x] The user can click a link at the bottom of the page to load the next 20 stories. The page should not refresh; the stories should simply be added to the bottom.
* [x] The user can see an updated number of stories currently shown.
* [x] The user can see how long ago the story was published in a human-friendly format; e.g. "15 minutes ago". To accomplish this, we recommend you use momentjs. Please load it into your page using cdnjs or jsdelivr (these are called CDNs).

Rocket Challenge 1: Sources
* [ ] The user can see a checkbox for every unique source of the articles loaded. For example, if the user loads four stories, and two stories are from bbc-news, one from cnn, and one from spiegel-de, the user would see three checkboxes: bbc-news, cnn, spiegel-de.
* [ ] Next to the source name, the user sees a number representing the number of stories from that source. To continue the previous example: bbc-news (2), cnn (1), spiegel-de (1).
* [ ] The user can toggle the checkbox to hide or show stories from that source in the list.

Rocket Challenge 2: Categories
* [ ] The user can see links or a dropdown that represent the various categories for stories. Selecting on one of these links fetches a new batch of stories of the selected category.
* [ ] The user should see new stories related to the category she chose.
* [ ] The user should see a new or modified URL, with a query parameter representing the chosen category. For example, clicking on entertainment would add ?category=entertainment to the URL. The page should not refresh. To do this, look at URLSearchParameters and PushState.
* [ ] The user should be able to load a page with the appropriate query parameter and automatically have the appropriate stories shown.

## License

    Copyright [2019] [Hang & Thi]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.