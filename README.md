# _Super Galactic Age Calculator_

#### _This application determines a user’s age based on a planet’s solar years, November 15, 2019_

#### By _**Judah Barton**_

## Description

_This website takes a person’s age in years and returns their age in Mercury years, Venus years, Mars years, and Jupiter years. It determines how many years a you have left to live on each planet based on your average life expectancy. You determine the average life expectancy however you want. If you have already surpassed the average life expectancy, it will return the number of years you have lived past the life expectancy._

## Setup/Installation Requirements

* _Click the clone or download button and copy the link_
* _open your terminal and type "git clone (link)"_
* _run: npm install in the terminal_
* _run: npm run build. this will create distribution folder. It also creates the index.html file within the distribution folder. When making edits to the code, edit the index.html, and all other files within the SRC folder_
* _run: npm run start to begin the live developer session_
* _if making edits to the lint or any other configuration, you will need to run another build AND another start for them to apply_
* _when npm run start is running, it will live update. If you input other commands in the terminal it will not do anything. Control C will stop the run so you can access the terminal again_

* _This version includes Jest and Babel pre-loaded_
* _To run a unit test, run: 'npm test' in command line_



* _Spec: Returns user age in Earth years_
  * _Input: 12_
  * _Output: 12_
* _Spec: Returns user age in Mercury years_
  * _Input: 12_
  * _Output: 12 * .24_
* _Spec: Returns user age in Venus years_
  * _Input: 12_
  * _Output: 12 * .62_
* _Spec: Returns user age in Mars years_
  * _Input: 12_
  * _Output: 12 * 1.88_
* _Spec: Returns user age in Jupiter years_
  * _Input: 12_
  * _Output: 12 * 11.86_
* _Spec: Returns how many years a user has left to live on Earth_
  * _Input: Age - 12, Life Expectancy - 24_
  * _Output: 24 - 12 = 12 years left to live_
* _Spec: Returns how many years a user has left to live on Venus .etc_
  * _Input: Age - 12, Life Expectancy - 24_
  * _Output: (24 * .62) - (12 * .62) = 7.44 years left to live_
* _Spec: If user has already surpassed life expectancy on Earth_
  * _Input: Age - 12, Life Expectancy - 24_
  * _Output: 24 - 12 = 12 years longer than expected_
* _Spec: If user has already surpassed life expectancy on Venus .etc_
  * _Input: Age - 24, Life Expectancy - 12_
  * _Output: (24 * .62) - (12 * .62) = 7.44 years longer than expected_
## Known Bugs

_None_

## Support and contact details

_example@example.com_

## Technologies Used

_HTML, JavaScript, JQuery, CSS, Node_

### License

*This software is licensed under the MIT license agreement*

Copyright (c) 2019 **_Judah Barton_**
