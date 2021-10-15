# UFO

## Overview of the Analysis
	The purpose of this week's module was to create a table using javascript and HTML formatting
to create a table to organize the FUO data that has been stored as a JavaScript array. The table will
be able to be filtered off of different keys in the javascript array and look for results that match
accordingly.

## Results
	We can observe the unfiltered table data from the data.js file when we open our html page.
By adding different filters that match the filter criteria such as putting the date we're looking for
in the date filter, we are able to perform a more specific search rather than sifting through the
table data manually. Additionally, we are also capable of adding multiple filters to look for a
more specific result that meet the multiple filter criteria.

## Summary
	One drawback of the page would be that if the user input does not match exactly the way the
filter is entered in the search bar, it will not find the result. For an example, when a user puts in
the input "ca" in the state search bar, it will find some results. However, if the user puts in the
input "CA" the table returns no matching results. Building off of the drawback, one recommendation
for further development regarding the webpage would be to possibly include a method that would catch
the same results if a user put "CA" instead of "ca". Including this method would allow more error from
the user while allowing for the results the user is looking for. Another recommendation I would make
would be for the "Enter shape" input to possibly have a drop down box instead of alllowing a "free"
user input. If a user comes across this category it may be considered a weird category that they may
not be sure how to navigate around. In this case, it would be easier to provide the user a drop down
list that would show them their available options, rather than possibly typing random shapes and hoping
for results.