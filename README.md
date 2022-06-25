# Qewam Fronted developer job Test project

## Description:
- We have a widget that shows in first section 7 days with dates  and must to be always dynamic starting from today.
- The days that have a Startup sessions will be active and clickable as a design and disabled and not allowed to click.
- In the second section that show below will include startups the have a sessions at the selected day.
- When no startup sessions available you can show there is no sessions for this day as the design.
- The default day is today to start show even if there is no sessions.
- Will have  arrows next and previous to show hidden days ( you can use slider or you can do it as a custom js)


## AC:
- Verify using i18n for Arabic and English 
- Verify using moment for times and dates.
- Verify  creating and using a reusable components that you can pass a props for using it everywhere and can test it later.
- Verify writing a clean and a readable code.
- Verify when press Lang switcher to show exact selected langue for layout direction and content.
- Verify using css variables for colors from tailwind.css ( don’t use static code for colors)
- Since we’re using TailwindCss you can use Jit mode for specific sizes.
- Show the hover states for mouse as a design.
- You can extend more sessions for json and show more conditions. || Bouns 
- You have to Call to action buttons the first will send user to _blank page with url 
- The second will show a message in console log or an alert that the session canceled and remove this session with out refresh. 


## Assets :
- You have to clone from GitHub this link and upload it to your account creating new repo and using commits and pull requests.
- Use the json file to fetch data .
- Use Figma design to apply it for you work.
- You can use local folder to address the Arabic and English using 

```bash
# for Dynamic content using.
{{ $t(content) }}

```
- Using Vuex for global state management   || Bonus.
- Creating another button for dark mode  || Bonus. 
- Using localstorge to set language and dark mode  || Bonus.
- You have English and Arabic fonts ready to use.
- Using Grid to expand widget || Bonus.
- Animations   || Bonus.
- using extinal Lib for important uses is allowed.

# Final Step : 
- Write your unit test for you functions cases (in test folder ).
- Upload the project to your Github and and publish it to netlify.com.
- You can use Github action to run your test before build.
- You can use this settings for deploying in netlify.com

￼![](/static/settings.png)

Give us your app link .. 


