# canvas_userscripts


## project_groups

This script mainly just "stickies" the "Unassigned Students" column/searchbar,
so that it doesn't scroll off-page as you scroll through the groups.

This allows you to scroll to a given group, search up each student in that group,
and then drag & drop them into the correct group without needing to scroll back and forth to find the student, then find the group.

If you want to try this out without installing a script, paste the following into your devtools console:

```js
$('.unassigned-students').css({position: 'sticky', top: 0})
```

![Screenshot of project groups](/screens/project_groups.jpg)
